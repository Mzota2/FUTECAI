import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import bcrypt from 'bcryptjs';
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
    const {email, name, password, ...rest } = await req.json();
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) return NextResponse.json({ error: 'User exists' }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1d' });
    await prisma.user.create({
            data: { email, password: hashedPassword, name,  isVerified: false, verificationToken , ...rest},
        });

        // Send verification email
        const verifyUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/verify?token=${verificationToken}`;
        const subject = 'Welcome to FutechAI! Please Verify Your Account';
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
                
                <td style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Reset Password" width="80%" style="border-radius: 8px; margin-bottom: 30px;" />
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
        await sendEmail(email, subject, html);

        return NextResponse.json({ message: 'Registered. Check your email to verify.' });
    }
