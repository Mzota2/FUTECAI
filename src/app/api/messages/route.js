import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET: List all blog posts
export async function GET() {
    const messages = await prisma.message.findMany();
    return NextResponse.json(messages);
}


