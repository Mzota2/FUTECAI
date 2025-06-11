import React from 'react'
import Image from 'next/image';
function RecentBlogs({blogs}) {
     const recentBlogs = blogs?.slice(1, 3);
  return (
    <div className="bg-secondary w-full text-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">Recent Blogs</h3>
        <ul className="space-y-4">
            {recentBlogs?.map(blog => (
            <li key={blog.id}>
                <a href={blog.link} className="flex items-center gap-3 hover:underline">
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
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default RecentBlogs