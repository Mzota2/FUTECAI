import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import formidable from 'formidable';
import fs from 'fs/promises';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import nodemailer from 'nodemailer';

// user routes will be here
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register
export async function POST(req) {

    // Email verification
    const { token } = await req.json();
    let payload;
    try {
        payload = jwt.verify(token, JWT_SECRET);
    } catch {
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });
    }
    await prisma.user.update({ where: { email: payload.email }, data: { isVerified: true, verificationToken: null } });
    return NextResponse.json({ message: 'Account verified' });

}


