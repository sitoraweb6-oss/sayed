// Supabase Edge Function: contact
// Deploy command: supabase functions deploy contact
// Secret setup: supabase secrets set RESEND_API_KEY=your_key CONTACT_FROM_EMAIL="Sayed Ahmad Website <hello@sitora.org>" CONTACT_RECEIVER_EMAIL="hello@sitora.org"

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function escapeHtml(str: string): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();

    // Anti-spam honeypot
    if (body.website || body.hp || body.phone_confirm) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const { name, email, company, service, details, message, budget, timeline } = body;
    const projectMessage = (details || message || "").trim();

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return new Response(
        JSON.stringify({ success: false, error: "Full Name is required (minimum 2 characters)." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: "A valid Email Address is required." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    if (!service || typeof service !== "string" || service.trim().length < 2) {
      return new Response(
        JSON.stringify({ success: false, error: "Please select the Service you are interested in." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    if (!projectMessage || projectMessage.length < 15) {
      return new Response(
        JSON.stringify({ success: false, error: "Project Details must be at least 15 characters long." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "RESEND_API_KEY is not configured in Supabase Secrets.",
          code: "MISSING_CREDENTIALS",
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 503 }
      );
    }

    const fromEmail = Deno.env.get("CONTACT_FROM_EMAIL") || "Sayed Ahmad Website <hello@sitora.org>";
    const receiverEmail = Deno.env.get("CONTACT_RECEIVER_EMAIL") || "hello@sitora.org";

    const cleanName = escapeHtml(name.trim());
    const cleanEmail = escapeHtml(email.trim());
    const cleanCompany = company ? escapeHtml(company.trim()) : "Not specified";
    const cleanService = escapeHtml(service.trim());
    const cleanBudget = budget ? escapeHtml(budget.trim()) : "Not specified";
    const cleanTimeline = timeline ? escapeHtml(timeline.trim()) : "Not specified";
    const cleanMessage = escapeHtml(projectMessage);

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin: 0; padding: 24px; background-color: #F7F5F0; font-family: -apple-system, sans-serif; color: #1E293B;">
  <div style="max-width: 600px; margin: 0 auto; background: #FFF; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden;">
    <div style="background: #0B132B; padding: 24px 28px; border-bottom: 3px solid #D4AF37;">
      <div style="font-size: 11px; color: #D4AF37; font-family: monospace; letter-spacing: 0.16em; text-transform: uppercase;">WEBSITE INQUIRY</div>
      <h2 style="margin: 6px 0 0 0; color: #FAF8F5;">New Project Inquiry — ${cleanService}</h2>
    </div>
    <div style="padding: 28px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr><td style="padding: 8px; font-weight: bold; width: 140px; color: #64748B;">Name</td><td style="padding: 8px;">${cleanName}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Email</td><td style="padding: 8px;"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Company</td><td style="padding: 8px;">${cleanCompany}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Service</td><td style="padding: 8px;">${cleanService}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Budget</td><td style="padding: 8px;">${cleanBudget}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Timeline</td><td style="padding: 8px;">${cleanTimeline}</td></tr>
      </table>
      <div style="font-size: 12px; font-weight: bold; color: #64748B; text-transform: uppercase; margin-bottom: 8px;">Project Details</div>
      <div style="background: #FAF8F5; border-left: 3px solid #D4AF37; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${cleanMessage}</div>
      <div style="margin-top: 24px; text-align: center;">
        <a href="mailto:${cleanEmail}?subject=Re:%20Your%20Project%20Inquiry%20%E2%80%94%20${encodeURIComponent(service)}" style="background: #0F172A; color: #FFF; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-size: 13px; font-weight: bold;">
          Reply to Client (${cleanName}) &rarr;
        </a>
      </div>
    </div>
    <div style="background: #F8FAFC; padding: 16px; text-align: center; font-size: 11px; color: #94A3B8; border-top: 1px solid #E2E8F0;">
      Submitted from Sayed Ahmad Portfolio Website &bull; Delivered to hello@sitora.org
    </div>
  </div>
</body>
</html>`;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [receiverEmail],
        reply_to: email.trim(),
        subject: `New Project Inquiry — ${cleanService} — ${cleanName}`,
        html: htmlContent,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.json().catch(() => ({}));
      return new Response(
        JSON.stringify({ success: false, error: err.message || "Failed to deliver email through Resend." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }

    const data = await resendRes.json();
    return new Response(
      JSON.stringify({
        success: true,
        id: data.id,
        message: "Thanks for reaching out. Your message has been sent successfully. I'll get back to you soon.",
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message || "Internal server error" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
