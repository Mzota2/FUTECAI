import { NextResponse } from 'next/server';
import {IncomingForm} from 'formidable';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// Helper: Parse form data with formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseFormData(req) {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({
      multiples: false,
      uploadDir: './public/uploads',
      keepExtensions: true
    });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

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

// GET: List all blog posts
export async function GET() {
    const blogs = await prisma.blogPost.findMany();
    return NextResponse.json(blogs);
}

// POST: Create a new blog post (admin only)
// export async function POST(req) {
//     console.log("POST");
//     if (!isAdmin(req)) {
//         return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
//     }
//     try {
//         const { fields, files } = await parseFormData(req);
//         const image = files.image ? `/uploads/${files.image.newFilename}` : null;
//         const newBlog = await prisma.blogPost.create({
//             data: {
//                 title: fields.title,
//                 description: fields.description,
//                 date: fields.date || new Date().toISOString(),
//                 views: 0,
//                 likes: 0,
//                 image,
//             },
//         });
//         return NextResponse.json(newBlog, { status: 201 });
//     } catch (err) {
//         console.log(err)
//         return NextResponse.json({ error: err.message }, { status: 400 });
//     }
// }

// PUT: Update a blog post (admin only)
// export async function PUT(req) {
//     if (!isAdmin(req)) {
//         return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
//     }
//     try {
//         const { fields, files } = await parseFormData(req);
//         const id = parseInt(fields.id, 10);
//         const data = {};
//         if (fields.title) data.title = fields.title;
//         if (fields.description) data.description = fields.description;
//         if (fields.date) data.date = fields.date;
//         if (files.image) {
//             data.image = `/uploads/${files.image.newFilename}`;
//         }
//         const updatedBlog = await prisma.blogPost.update({
//             where: { id },
//             data,
//         });
//         return NextResponse.json(updatedBlog);
//     } catch (err) {
//         return NextResponse.json({ error: err.message }, { status: 400 });
//     }
// }

// DELETE: Delete a blog post (admin only)
export async function DELETE(req) {
    if (!isAdmin(req)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    try {
        const id = req.nextUrl.searchParams.get('id');
        console.log(id);
        await prisma.blogPost.delete({ where: { id: parseInt(id, 10) } });
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}
