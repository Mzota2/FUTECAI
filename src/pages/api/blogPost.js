import { NextResponse } from 'next/server';
import {IncomingForm} from 'formidable';
import { PrismaClient } from '@/generated/prisma';
import fs from 'fs';
import path from 'path'
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;
// Helper: Parse form data with formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseFormData(req) {
  const uploadDir = `${process.cwd()}/public/uploads`;
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({
      multiples: false,
      uploadDir,
      keepExtensions: true
    });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

// POST: Create a new blog post (admin only)
async function CreatePost(req, res) {
      const token = req.cookies?.auth;
      if (!token) return NextResponse.json({ user: null });
        let payload;
        try {
            payload = jwt.verify(token, JWT_SECRET);
        } catch(error) {
            console.log(error);
            return NextResponse.json({ user: null });
        }
    
        const userType = payload.type;
        if (userType === 'admin') {
          try {
              const { fields, files } = await parseFormData(req);
              const image = files.image ? `/uploads/${files.image[0].newFilename}` : null;
              const newBlog = await prisma.blogPost.create({
                  data: {
                      title: fields?.title[0],
                      description: fields?.description[0],
                      createdAt: fields?.[0] || new Date().toISOString(),
                      views: 0,
                      likes: 0,
                      image,
                      authorId: fields?.authorId[0]
                  },
              });
               return res.status(201).json(newBlog)
              
            } catch (err) {
                console.log(err)
                return res.status(400).json({ error: err.message })
            }
        } else {
             return res.status(403).json({ error: 'Unauthorized' })
            
        }
}

// PUT: Update a blog post (admin only)
async function UpdatePost(req, res) {
    try {
        const { fields, files } = await parseFormData(req);
        const id = fields.id[0];
        const data = {};
        if (fields.title) data.title = fields.title[0];
        if (fields.description) data.description = fields.description[0];
        if (fields.date) data.updatedAt = fields.date[0];
        if (files.image) {
            // Delete previous image if exists
            const prevBlog = await prisma.blogPost.findUnique({ where: { id } });
            if (prevBlog && prevBlog.image) {
          const prevImagePath = path.join(process.cwd(), 'public', prevBlog.image.replace(/^\/+/, ''));
          if (fs.existsSync(prevImagePath)) {
              fs.unlinkSync(prevImagePath);
          }
            }
            data.image = `/uploads/${files.image[0].newFilename}`;
        }
        const updatedBlog = await prisma.blogPost.update({
            where: { id },
            data,
        });
        return res.status(200).json(updatedBlog);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}
export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      // Create item
      await CreatePost(req, res);
      break;
    case 'PUT':
      // Update item
      // const updatedItem = await updateItemInDB(req.body);
      await UpdatePost(req, res);
      break;
    
    default:
      res.setHeader('Allow', ['POST', 'PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

