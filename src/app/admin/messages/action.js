 'use server';
 import nodemailer from 'nodemailer';
 
 const EMAIL_FROM = process.env.EMAIL_FROM;
 const EMAIL_PASS = process.env.EMAIL_PASS;
 const EMAIL_HOST = process.env.EMAIL_HOST;
 
 // Helper: Send email
 async function sendEmail(to, subject, html) {
     const transporter = nodemailer.createTransport({
         host: EMAIL_HOST,
         port: 587,
         secure: false,
         auth: {
             user: EMAIL_FROM,
             pass: EMAIL_PASS,
         },
     });
     await transporter.sendMail({ from: EMAIL_FROM, to, subject, html });
 }

export async function handleSendMessage({email, name}, formData){
    const body = formData.get("body");
    const subject = formData.get("subject");
    const html = `

    <div style="font-family:Poppins, Arial, sans-serif; background: #f4f6fb; padding: 40px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <tr>
            <td style="text-align: center; padding: 40px 0 20px;">
                <div style="margin: 0 auto; background-color:#1a237e; height:80px; width:80px; border-radius:50%; display:flex; justify-content:center; align-items:center; flex-direction:column;  margin-bottom: 30px;">
                    <img src="${process.env.NEXT_PUBLIC_BASE_URL}/logo.png" alt="FutechAI Logo" width="80%" style="object-fit:cover;" />
                </div>
            </td>
            </tr>
            <tr>
            <td style="padding: 0 40px 30px;">
                <h2 style="color: #1a237e; margin-bottom: 10px;">Re: ${subject}</h2>
                <div style="color: #333; font-size: 16px; line-height: 1.6;">
                    <p style="color:black;">Dear <strong>${name}</strong>,</p>
                    <p style="margin-top:10px;"></p>
                    <p style="color:black;">${body}</p>
                </div>
            </td>
            </tr>
        </table>
    </div>
    `;
    await sendEmail(email, subject, html);
}

export async function handleDeleteMessage(id) {
    await prisma.message.delete({ where: { id } }); 
}
