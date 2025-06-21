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

// Update user
export async function updateUser(req){
    // Update user
    const token = req.cookies.get('auth');
    if (!token.value) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    let payload;
    try {
        payload = jwt.verify(token.value, JWT_SECRET);
    } catch {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { fields, files } = await parseForm(req);
    let updateData = {};
    if(fields.name) updateData.name = fields.name[0];
    if(fields.username) updateData.username = fields.username[0];
    if(fields.phone) updateData.phone = fields.phone[0];
    if(fields.reason) updateData.reason = fields.reason[0];
    if(fields.role) updateData.role = fields.role[0];

    if (files.image) {
        // Delete previous image if exists
        const user = await prisma.user.findUnique({ where: { id: payload.userId } });
        if (user && user.image) {
            const prevImagePath = `./public${user.image}`;
            try {
            await fs.unlink(prevImagePath);
            } catch (err) {
            // Ignore if file does not exist
            }
        }
        const data = await fs.readFile(files.image.filepath);
        const fileName = `uploads/${files.image[0].newFilename}`;
        await fs.writeFile(`./public/${fileName}`, data);
        updateData.image = `/${fileName}`;
    }
    
    await prisma.user.update({ where: { id: payload.userId }, data: updateData });
    return NextResponse.json({ message: 'Profile updated' });

}

export default async function handler(req, res) {
  switch (req.method) {

    case 'PUT':
      await updateUser(req);
      break;
   
    default:
        res.setHeader('Allow', ['PUT'])
      
    }
  }