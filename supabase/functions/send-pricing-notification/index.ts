import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS
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

    // --- SMART WHATSAPP FORMATTING ---
    // 1. Remove all non-numeric characters (spaces, dashes, etc.)
    const cleanPhone = record.phone_number.replace(/\D/g, '');
    
    // 2. Format for WhatsApp: If it starts with '0', swap it for '234' (Nigeria)
    // If it's already '234', keep it as is.
    const whatsappPhone = cleanPhone.startsWith('0') 
      ? '234' + cleanPhone.substring(1) 
      : cleanPhone;

    // Call Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Homebiro Leads <onboarding@resend.dev>",
        to: ["chathomebiro@gmail.com"],
        subject: `🎯 [${record.selected_plan}] New Lead: ${record.full_name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
            <div style="background-color: #1D4ED8; padding: 30px; color: white; text-align: center;">
              <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; opacity: 0.8;">New Hunting Request</div>
              <h1 style="margin: 0; font-size: 24px;">${record.selected_plan}</h1>
            </div>
            
            <div style="padding: 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Full Name</div>
                    <div style="font-size: 16px; color: #1e293b; font-weight: 600;">${record.full_name}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 20px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">WhatsApp Number</div>
                    <div style="font-size: 16px; color: #1e293b; font-weight: 600;">${record.phone_number}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 30px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Preferred Location</div>
                    <div style="font-size: 16px; color: #1e293b; font-weight: 600;">${record.preferred_location}</div>
                  </td>
                </tr>
              </table>

              <div style="text-align: center; margin-top: 10px;">
                <a href="https://wa.me/${whatsappPhone}" 
                   style="display: block; background-color: #25D366; color: white; padding: 16px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px;">
                   Message on WhatsApp
                </a>
              </div>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">Homebiro Concierge Portal &bull; 2026</p>
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