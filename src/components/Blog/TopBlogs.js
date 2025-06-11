import React from 'react'
import Image from 'next/image';
function TopBlogs({blogs}) {
    // Example top and recent blogs (using the same blogs for demo)
  const topBlogs = blogs?.slice(0, 2);
  return (
    <div className="bg-primary text-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">Top Blogs</h3>
        <ul className="space-y-4">
            {topBlogs?.map(blog => (
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

export default TopBlogs