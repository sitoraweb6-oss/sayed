/**
 * Email Template Generator for Sayed Ahmad Portfolio Contact Inquiries
 */

export interface ContactEmailPayload {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
}

/**
 * Escapes HTML characters to prevent HTML injection inside emails.
 */
export function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Generates the clean, responsive HTML email for Resend delivery.
 */
export function generateEmailHtml(payload: ContactEmailPayload): string {
  const name = escapeHtml(payload.name.trim());
  const email = escapeHtml(payload.email.trim());
  const company = payload.company && payload.company.trim() ? escapeHtml(payload.company.trim()) : 'Not specified';
  const service = escapeHtml(payload.service.trim());
  const budget = payload.budget && payload.budget.trim() ? escapeHtml(payload.budget.trim()) : 'Not specified';
  const timeline = payload.timeline && payload.timeline.trim() ? escapeHtml(payload.timeline.trim()) : 'Not specified';
  const message = escapeHtml(payload.message.trim());
  const dateStr = new Date().toUTCString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry — ${service} — ${name}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F7F5F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F7F5F0; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0B132B; padding: 28px 32px; border-bottom: 3px solid #D4AF37;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 11px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; letter-spacing: 0.16em; text-transform: uppercase; color: #D4AF37; font-weight: 700; display: block; margin-bottom: 6px;">
                      WEBSITE INQUIRY
                    </span>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #FAF8F5; line-height: 1.3;">
                      New Project Inquiry
                    </h1>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; padding: 4px 10px; background-color: rgba(212, 175, 55, 0.15); border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 9999px; color: #FAF8F5; font-size: 11px; font-weight: 600;">
                      ${service}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 32px;">

              <!-- Client Details Table -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 14px; background-color: #F8FAFC; border-bottom: 1px solid #EDF2F7; width: 140px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;">
                    Name
                  </td>
                  <td style="padding: 10px 14px; background-color: #F8FAFC; border-bottom: 1px solid #EDF2F7; font-size: 14px; font-weight: 600; color: #0F172A;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #EDF2F7; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;">
                    Email
                  </td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #EDF2F7; font-size: 14px; color: #0F172A;">
                    <a href="mailto:${email}" style="color: #0F172A; text-decoration: underline; font-weight: 500;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #F8FAFC; border-bottom: 1px solid #EDF2F7; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;">
                    Company
                  </td>
                  <td style="padding: 10px 14px; background-color: #F8FAFC; border-bottom: 1px solid #EDF2F7; font-size: 14px; color: #0F172A;">
                    ${company}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #EDF2F7; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;">
                    Interested Service
                  </td>
                  <td style="padding: 10px 14px; border-bottom: 1px solid #EDF2F7; font-size: 14px; font-weight: 600; color: #0F172A;">
                    ${service}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; background-color: #F8FAFC; border-bottom: 1px solid #EDF2F7; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;">
                    Budget
                  </td>
                  <td style="padding: 10px 14px; background-color: #F8FAFC; border-bottom: 1px solid #EDF2F7; font-size: 14px; color: #0F172A;">
                    ${budget}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;">
                    Timeline
                  </td>
                  <td style="padding: 10px 14px; font-size: 14px; color: #0F172A;">
                    ${timeline}
                  </td>
                </tr>
              </table>

              <!-- Project Details / Message -->
              <div style="margin-bottom: 28px;">
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #475569; margin-bottom: 8px;">
                  Project Details
                </div>
                <div style="background-color: #FAF8F5; border: 1px solid #E2E8F0; border-left: 3px solid #D4AF37; border-radius: 6px; padding: 18px 20px; font-size: 14px; line-height: 1.65; color: #1E293B; white-space: pre-wrap;">
${message}
                </div>
              </div>

              <!-- Quick Action Button -->
              <div style="text-align: center; padding-top: 8px; margin-bottom: 12px;">
                <a href="mailto:${email}?subject=Re:%20Your%20Project%20Inquiry%20%E2%80%94%20${encodeURIComponent(payload.service)}" 
                   style="display: inline-block; background-color: #0F172A; color: #FFFFFF; font-size: 13px; font-weight: 600; text-decoration: none; padding: 12px 28px; border-radius: 9999px; letter-spacing: 0.03em; text-transform: uppercase;">
                  Reply to Client (${name}) &rarr;
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F8FAFC; padding: 20px 32px; border-top: 1px solid #E2E8F0; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #64748B;">
                Submitted from <strong>Sayed Ahmad Portfolio Website</strong>
              </p>
              <p style="margin: 0; font-size: 11px; color: #94A3B8; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;">
                ${dateStr} &bull; Delivered to hello@sitora.org
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generates the clean plain-text fallback email.
 */
export function generateEmailText(payload: ContactEmailPayload): string {
  const company = payload.company && payload.company.trim() ? payload.company.trim() : 'Not specified';
  const budget = payload.budget && payload.budget.trim() ? payload.budget.trim() : 'Not specified';
  const timeline = payload.timeline && payload.timeline.trim() ? payload.timeline.trim() : 'Not specified';

  return `New Website Inquiry

Name: ${payload.name}
Email: ${payload.email}
Company: ${company}
Interested Service: ${payload.service}
Budget: ${budget}
Timeline: ${timeline}

Project Details:
${payload.message}

---
Submitted from: Sayed Ahmad Portfolio Website
Date: ${new Date().toUTCString()}
Reply-To: ${payload.email}
`;
}
