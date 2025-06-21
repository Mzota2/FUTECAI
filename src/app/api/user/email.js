export function Email({}){
    const html = `
            <div style="font-family: Arial, sans-serif; background: #f4f6fb; padding: 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <tr>
                <td style="text-align: center; padding: 40px 0 20px;">
                    <img src="https://futechai.com/logo.png" alt="FutechAI Logo" width="120" style="margin-bottom: 20px;" />
                </td>
                </tr>
                <tr>
                <td style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Join FutechAI" width="80%" style="border-radius: 8px; margin-bottom: 30px;" />
                </td>
                </tr>
                <tr>
                <td style="padding: 0 40px 30px;">
                    <h2 style="color: #1a237e; margin-bottom: 10px;">Welcome to FutechAI!</h2>
                    <p style="color: #333; font-size: 16px; line-height: 1.6;">
                    Thank you for joining <b>FutechAI</b>, your gateway to the future of intelligent technology. 
                    We are excited to have you on board! To get started, please verify your email address by clicking the button below.
                    </p>
                    <div style="text-align: center; margin: 30px 0;">
                    <a href="${verifyUrl}" style="background: #1a237e; color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">
                        Verify My Account
                    </a>
                    </div>
                    <p style="color: #555; font-size: 14px;">
                    If you did not create an account with FutechAI, please ignore this email.
                    </p>
                </td>
                </tr>
                <tr>
                <td style="text-align: center; color: #aaa; font-size: 12px; padding: 20px 0;">
                    &copy; ${new Date().getFullYear()} FutechAI. All rights reserved.
                </td>
                </tr>
            </table>
            </div>
        `;
    return html;
}