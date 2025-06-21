'use client';
import React from 'react'
import Image from 'next/image';
import ClientWithBlogs from '../State/ClientWithBlogs';
import useStore from '../State/store';
import Link from 'next/link';
function RecentBlogs() {
    const blogs= useStore((state)=> state.blogs);
    const recentBlogs = blogs?.sort((a, b)=> new Date(b.createdAt) - new Date(a.createdAt))?.slice(0, 3);
  return (
    <ClientWithBlogs>
        <div className="bg-secondary w-full text-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Recent Blogs</h3>
            <ul className="space-y-4">
                {recentBlogs?.map(blog => (
                <li key={blog.id}>
                    <Link href={`/blog/${blog.title}`} className="flex items-center gap-3 hover:underline">
                    <div className="relative w-14 h-14 rounded overflow-hidden flex-shrink-0 border-2 border-white shadow">
                        <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover rounded"
                        sizes="56px"
                        />
                    </div>
                    <span className="font-semibold">{blog.title}</span>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    </ClientWithBlogs>
    
  )
}

export default RecentBlogs