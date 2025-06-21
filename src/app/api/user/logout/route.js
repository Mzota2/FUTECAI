import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import formidable from 'formidable';
import fs from 'fs/promises';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import nodemailer from 'nodemailer';



export async function POST(req) {
    const cookie = serialize('auth', '', { httpOnly: true, path: '/', maxAge: 0 });
    return new NextResponse(JSON.stringify({ message: 'Logged out' }), { headers: { 'Set-Cookie': cookie } });
}


