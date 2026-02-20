import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      } 
    })
  }

  try {
    const payload = await req.json()
    const record = payload.record 

    if (!record) throw new Error("No record found in payload")

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Homebiro Partners <onboarding@resend.dev>",
        to: ["chathomebiro@gmail.com"],
        subject: `💼 [Partner Application] ${record.full_name} - ${record.primary_region}`,
        html: `
          <div style="font-family: sans-serif; max-width: 550px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #0f172a; padding: 35px 20px; color: white; text-align: center;">
              <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 10px; color: #3b82f6;">Concierge Network</div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 700;">New Partner Application</h1>
            </div>
            
            <div style="padding: 32px;">
              <div style="margin-bottom: 24px; padding: 16px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #f1f5f9;">
                <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">
                  A new professional has applied to join the <strong>Homebiro Physical Network</strong>. Review the details below to initiate the vetting process.
                </p>
              </div>

              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding-bottom: 15px;">
                    <div style="font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Applicant Name</div>
                    <div style="font-size: 16px; color: #1e293b; font-weight: 600;">${record.full_name}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 15px; border-top: 1px solid #f1f5f9; padding-top: 15px;">
                    <div style="font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Professional Email</div>
                    <div style="font-size: 16px; color: #1e293b; font-weight: 600;">${record.email}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 15px; border-top: 1px solid #f1f5f9; padding-top: 15px;">
                    <div style="font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Phone Number</div>
                    <div style="font-size: 16px; color: #1e293b; font-weight: 600;">${record.phone_number || 'Not Provided'}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 25px; border-top: 1px solid #f1f5f9; padding-top: 15px;">
                    <div style="font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Primary Region</div>
                    <div style="font-size: 16px; color: #1d4ed8; font-weight: 700;">${record.primary_region} State</div>
                  </td>
                </tr>
              </table>

              <div style="margin-top: 10px; display: flex; gap: 10px;">
                <a href="mailto:${record.email}" 
                   style="flex: 1; display: block; background-color: #1d4ed8; color: white; padding: 14px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 15px; text-align: center;">
                   Email
                </a>
                <a href="tel:${record.phone_number}" 
                   style="flex: 1; display: block; background-color: #0f172a; color: white; padding: 14px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 15px; text-align: center;">
                   Call
                </a>
              </div>
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="https://supabase.com/dashboard/project/_/editor" 
                   style="font-size: 13px; color: #64748b; text-decoration: underline;">
                   View in Supabase Table
                </a>
              </div>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 11px; color: #94a3b8; letter-spacing: 0.05em;">HOMEBIRO PARTNER RELATIONS &bull; 2026</p>
            </div>
          </div>
        `,
      }),
    })

    const data = await res.json()
    return new Response(JSON.stringify(data), { 
      status: 200, 
      headers: { "Content-Type": "application/json" } 
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { 
      status: 500, 
      headers: { "Content-Type": "application/json" } 
    })
  }
})