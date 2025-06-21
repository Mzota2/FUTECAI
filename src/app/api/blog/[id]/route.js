import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import fs from 'fs';
import path from 'path';
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
        const blogPost = await prisma.blogPost.findUnique({ where: { id } });
        if (!blogPost) {
            return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
        }

        // Delete the image file if it exists
        if (blogPost.image) {
            // Assuming image is a file path on the server
            const imagePath = path.resolve(process.cwd(), 'public', blogPost.image);
            try {
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            } catch (imgErr) {
                console.log('Error deleting image:', imgErr);
                // Continue even if image deletion fails
            }
        }

        await prisma.blogPost.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

export async function GET(req, context) {
    try {
        const params = await context.params;
        const id = params?.id;
        console.log(id);
        // Find the blog post to get the image path/url
        const blogPost = await prisma.blogPost.findUnique({ where: { id } });
        return NextResponse.json(blogPost);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

