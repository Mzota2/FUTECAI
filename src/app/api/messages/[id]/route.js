import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
const prisma = new PrismaClient();

// Helper: Check if user is admin
async function isAdmin(req) {
    const token = req.cookies.get('auth');
    if (!token) return NextResponse.json({ user: null });
    let payload;
    try {
        payload = jwt.verify(token, JWT_SECRET);
    } catch {
        return NextResponse.json({ user: null });
    }
    const user = await prisma.user.findUnique({
        where: { id: payload.userId },
        select: { id: true, email: true, name: true, image: true, verified: true }
    });
    const userType = user.type;
    if (userType === 'admin') {
        return true;
    } else {
        return false;
    }
}

export async function DELETE(req, context) {
    if (!(await isAdmin(req))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    try {
        const params = await context.params;
        const id = params?.id;
        console.log(id);

        // Find the blog post to get the image path/url
        const message = await prisma.message.findUnique({ where: { id } });
        if (!message) {
            return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
        }

        await prisma.message.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}
