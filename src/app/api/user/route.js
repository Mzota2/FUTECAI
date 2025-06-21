import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import formidable from 'formidable';
import fs from 'fs/promises'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

// user routes will be here
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Helper: Parse form with formidable
async function parseForm(req) {
    return new Promise((resolve, reject) => {
        const form = formidable({ multiples: false, keepExtensions: true });
        form.parse(req, async (err, fields, files) => {
            if (err) reject(err);
            else resolve({ fields, files });
        });
    });
}
// Delete user
export async function DELETE(req){
    // Delete user
    const token = req.cookies.get('auth');
    if (!token.value) return NextResponse.json({ error: 'Unauthorized' }, { status:401 });
    let payload;
    try {
        payload = jwt.verify(token.value, JWT_SECRET);
    } catch {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    await prisma.user.delete({ where: { id: payload.userId } });
    const cookie = serialize('auth', '', { httpOnly: true, path: '/', maxAge: 0 });
    return new NextResponse(JSON.stringify({ message: 'Account deleted' }), { headers: { 'Set-Cookie': cookie } });

}
// Update user
// export async function PUT(req){
//     // Update user
//     const token = req.cookies.get('auth');
//     if (!token.value) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     let payload;
//     try {
//         payload = jwt.verify(token.value, JWT_SECRET);
//     } catch {
//         return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }
//     const { fields, files } = await parseForm(req);
//     let updateData = { ...fields };
//     if (files.profileImage) {
//         const data = await fs.readFile(files.profileImage.filepath);
//         const fileName = `uploads/${Date.now()}_${files.profileImage.originalFilename}`;
//         await fs.writeFile(`./public/${fileName}`, data);
//         updateData.image = `/${fileName}`;
//     }
//     if (updateData.password) {
//         updateData.password = await bcrypt.hash(updateData.password, 10);
//     }
//     await prisma.user.update({ where: { id: payload.userId }, data: updateData });
//     return NextResponse.json({ message: 'Profile updated' });

// }
// Get current user
export async function GET(req) {
    const value = req.cookies.get('auth')?.value;
    if (!value) return NextResponse.json({ user: null });
    let payload;
    try {
        payload = jwt.verify(value, JWT_SECRET);
    } catch {
        return NextResponse.json({ user: null });
    }
    const user = await prisma.user.findUnique({
        where: { id: payload.userId },
        select: { id: true, email: true, name: true, image: true, type: true, isVerified: true }
    });
    return NextResponse.json({ user });
}