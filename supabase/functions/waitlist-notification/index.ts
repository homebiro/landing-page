import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*' } })
  }

  try {
    const payload = await req.json()
    const record = payload.record 

    if (!record?.email_address) {
      return new Response(JSON.stringify({ error: "Missing email" }), { status: 400 })
    }

    // Clean up the X handle for display
    const rawX = record.x_handle?.trim();
    const formattedX = rawX ? (rawX.startsWith('@') ? rawX : `@${rawX}`) : 'Not provided';

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Homebiro Concierge <onboarding@resend.dev>", 
        to: ["chathomebiro@gmail.com"],
        subject: `✨ New Waitlist Lead: ${record.email_address}`,
        html: `
          <!DOCTYPE html>
          <html>
            <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding: 40px 20px;">
                    <table width="100%" style="max-width: 500px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                      <tr><td height="6" style="background-color: #1D4ED8;"></td></tr>
                      
                      <tr>
                        <td style="padding: 32px 24px;">
                          <h2 style="margin: 0 0 12px 0; color: #111827; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">New Waitlist Signup</h2>
                          <p style="margin: 0 0 24px 0; color: #64748b; font-size: 15px; line-height: 1.5;">A new user has registered interest via the <strong>Homebiro</strong> landing page. Follow up details are listed below:</p>
                          
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; border-radius: 12px; padding: 20px;">
                            <tr>
                              <td style="padding-bottom: 15px;">
                                <div style="color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Email Address</div>
                                <div style="color: #1e293b; font-size: 16px; font-weight: 500;">${record.email_address}</div>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-bottom: 15px; border-top: 1px solid #e2e8f0; padding-top: 15px;">
                                <div style="color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">WhatsApp Number</div>
                                <div style="color: #1e293b; font-size: 16px; font-weight: 500;">${record.phone_number || 'Not provided'}</div>
                              </td>
                            </tr>
                            <tr>
                              <td style="border-top: 1px solid #e2e8f0; padding-top: 15px;">
                                <div style="color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">X Account</div>
                                <div style="color: #1D4ED8; font-size: 16px; font-weight: 600;">${formattedX}</div>
                              </td>
                            </tr>
                          </table>

                          <div style="margin-top: 24px; text-align: center;">
                             <a href="mailto:${record.email_address}" style="display: inline-block; background-color: #1D4ED8; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">Contact Lead</a>
                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td style="padding: 0 24px 24px 24px; text-align: center;">
                          <p style="margin: 0; font-size: 12px; color: #94a3b8;">Sent via Homebiro Automation &bull; 2026</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
      }),
    })

    const resData = await res.json()
    if (!res.ok) throw new Error(`Resend API Error: ${JSON.stringify(resData)}`)

    return new Response(JSON.stringify({ message: "Notification sent", id: resData.id }), { 
      status: 200,
      headers: { "Content-Type": "application/json" } 
    })

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
})