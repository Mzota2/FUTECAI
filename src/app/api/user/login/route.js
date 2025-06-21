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
    console.log("POST");
    console.log(req.nextUrl.pathname);
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });
    
    console.log(user.isVerified);
    if (!user || !user.isVerified) return NextResponse.json({ error: 'Invalid credentials or not verified' }, { status: 401 });
    const valid = await bcrypt.compare(password, user.password);
    console.log(valid);
    if (!valid) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const token = jwt.sign({ userId: user.id, type: user.type }, JWT_SECRET, { expiresIn: '7d' });
    const cookie = serialize('auth', token, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 });
    return new NextResponse(JSON.stringify({ message: 'Logged in', user:{id:user.id,name:user.name,email:user.email, type:user.type} }), { headers: { 'Set-Cookie': cookie } });
}

