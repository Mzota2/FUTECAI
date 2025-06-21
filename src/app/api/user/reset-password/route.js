import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

// user routes will be here
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@example.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'password';
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.example.com';

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

// Register
export async function POST(req) {
    // Password reset request

    const { email } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
    const resetToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '600s' });
    console.log(resetToken);

    await prisma.user.update({ where: { id: user.id }, data: { resetToken } });
    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}`;
    const subject = 'Reset Your Password | FutechAI';
    const html = `
        <div style="font-family:Poppins, Arial, sans-serif; background: #f4f6fb; padding: 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <tr>
                    <td style="text-align: center; padding: 40px 0 20px; width: 100%;">
                        <div style="margin: 0 auto; background-color:#1a237e; height:80px; width:80px; border-radius:50%; display:flex; justify-content:center; align-items:center; flex-direction:column;  margin-bottom: 30px;">
                            <img src="${process.env.NEXT_PUBLIC_BASE_URL}/logo.png" alt="FutechAI Logo" width="80%" style="object-fit:cover;" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Reset Password" width="80%" style="border-radius: 8px; margin-bottom: 30px;" />
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0 40px 30px;">
                        <h2 style="color: #1a237e; margin-bottom: 10px;">Reset Your Password</h2>
                        <p style="color: #333; font-size: 16px; line-height: 1.6;">
                            We received a request to reset your password for your <b>FutechAI</b> account.<br>
                            Click the button below to set a new password. This link will expire in 10 minutes for your security.
                        </p>
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${resetUrl}" style="background: #1a237e; color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">
                                Reset Password
                            </a>
                        </div>
                        <p style="color: #555; font-size: 14px;">
                            If you did not request a password reset, please ignore this email or contact support.<br>
                            For security reasons, do not share this email or link with anyone.
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
    await sendEmail(email, subject, html);
    // Schedule token removal after 10 minutes
    setTimeout(async () => {
        try {
        // Only clear if token is still the same (not overwritten by another request)
        const current = await prisma.user.findUnique({ where: { id: user.id } });
        if (current && current.resetToken === resetToken) {
            await prisma.user.update({ where: { id: user.id }, data: { resetToken: null } });
        }
        } catch (e) {
        // Log error if needed
        }
    }, 10 * 60 * 1000);

    return NextResponse.json({ message: 'Password reset email sent' }); 
}

