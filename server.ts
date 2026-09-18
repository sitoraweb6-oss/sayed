import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { generateEmailHtml, generateEmailText, ContactEmailPayload } from "./server/emailTemplate";
import { getDiscoveredBrandLogos } from "./server/brandLogos";

const app = express();
const PORT = 3000;

// Body parser
app.use(express.json());

// In-memory rate limiter for contact form submissions (IP-based)
interface RateLimitEntry {
  count: number;
  resetAt: number;
}
const rateLimits = new Map<string, RateLimitEntry>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimits.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 }); // 10-minute window
    return false;
  }
  if (entry.count >= 5) {
    return true; // Max 5 submissions per 10 minutes per IP
  }
  entry.count += 1;
  return false;
}

// -------------------------------------------------------------
// API Routes (Mounted BEFORE Vite middleware)
// -------------------------------------------------------------

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    emailConfigured: Boolean(process.env.RESEND_API_KEY),
    receiver: process.env.CONTACT_RECEIVER_EMAIL || "hello@sitora.org",
    from: process.env.CONTACT_FROM_EMAIL || "Sayed Ahmad Website <hello@sitora.org>",
  });
});

app.get("/api/brand-logos", (_req: Request, res: Response) => {
  const logos = getDiscoveredBrandLogos();
  res.json(logos);
});

app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const clientIp = (req.headers["x-forwarded-for"] as string)?.split(",")[0] || req.socket.remoteAddress || "unknown";

    // 1. Anti-spam: Honeypot check (hidden fields filled only by bots)
    if (req.body.website || req.body.hp || req.body.phone_confirm) {
      // Silently reject or simulate ok for bots without sending email
      return res.status(200).json({ success: true });
    }

    // 2. Anti-spam: Submission speed check (if submitted faster than 1 second, bot detected)
    if (req.body._t && typeof req.body._t === "number") {
      const elapsed = Date.now() - req.body._t;
      if (elapsed < 1000) {
        return res.status(400).json({
          success: false,
          error: "Form was submitted too quickly. Please try again.",
        });
      }
    }

    // 3. Rate limiting check
    if (isRateLimited(clientIp)) {
      return res.status(429).json({
        success: false,
        error: "Too many requests. Please wait a few minutes before submitting another inquiry.",
      });
    }

    const {
      name,
      email,
      company,
      service,
      details,
      message,
      budget,
      timeline,
    } = req.body;

    const projectMessage = (details || message || "").trim();

    // 4. Server-side Field Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: "Full Name is required (minimum 2 characters).",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: "A valid Email Address is required.",
      });
    }

    if (!service || typeof service !== "string" || service.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: "Please select the Service you are interested in.",
      });
    }

    if (!projectMessage || projectMessage.length < 15) {
      return res.status(400).json({
        success: false,
        error: "Project Details must be at least 15 characters long.",
      });
    }

    const payload: ContactEmailPayload = {
      name: name.trim(),
      email: email.trim(),
      company: typeof company === "string" ? company.trim() : "",
      service: service.trim(),
      budget: typeof budget === "string" ? budget.trim() : "",
      timeline: typeof timeline === "string" ? timeline.trim() : "",
      message: projectMessage,
    };

    // 5. Verification of Resend API Key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("[Contact API] RESEND_API_KEY environment variable is not configured.");
      return res.status(503).json({
        success: false,
        error: "RESEND_API_KEY is not configured on the server. Please add RESEND_API_KEY to your environment variables.",
        code: "MISSING_CREDENTIALS",
      });
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Sayed Ahmad Website <hello@sitora.org>";
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "hello@sitora.org";

    const htmlContent = generateEmailHtml(payload);
    const textContent = generateEmailText(payload);

    // 6. Resend API Delivery
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [receiverEmail],
        reply_to: payload.email,
        subject: `New Project Inquiry — ${payload.service} — ${payload.name}`,
        html: htmlContent,
        text: textContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error("[Resend API Error]", resendResponse.status, errorData);
      return res.status(500).json({
        success: false,
        error: errorData.message || "Failed to deliver email through Resend.",
      });
    }

    const responseData = await resendResponse.json();
    return res.status(200).json({
      success: true,
      id: responseData.id,
      message: "Thanks for reaching out. Your message has been sent successfully. I'll get back to you soon.",
    });
  } catch (error: any) {
    console.error("[Contact API Exception]", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error occurred while processing contact inquiry.",
    });
  }
});

// -------------------------------------------------------------
// Vite Middleware / Static Serving Setup
// -------------------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
