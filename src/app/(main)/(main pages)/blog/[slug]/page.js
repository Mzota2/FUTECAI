import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Share2, Heart } from "lucide-react";
function Blog() {
    // Dummy data for demonstration
    const blog = {
        image: "/AI5.jpg",
        title: "Sample Blog Post",
        description: "This is a detailed description of the blog post. It provides insights and information about the topic.",
        views: 1234,
        date: "2024-06-10",
        likes: 56,
    };

    const similarPosts = [
        {
            id: 1,
            title: "Similar Blog Post 1",
            image: "/AI1.jpg",
        },
        {
            id: 2,
            title: "Similar Blog Post 2",
            image: "/AI2.jpg",
        },
        {
            id: 3,
            title: "Similar Blog Post 3",
            image: "/AI3.jpg",
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-10 max-w-screen-xl mx-auto p-4">
            <main className="flex-[3] min-w-0 lg:pr-8 mb-8 lg:mb-0">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    height={500}
                    width={1200}
                    loading="lazy"
                    className="w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] object-cover rounded-lg mb-6"
                />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{blog.title}</h1>
                <div className="text-gray-500 text-xs sm:text-sm mb-4 flex gap-4 flex-wrap">
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                    <span>{blog.views} views</span>
                </div>
                <p className="text-base sm:text-lg mb-8">{blog.description}</p>
                <div className="flex gap-4 items-center flex-wrap">
                    {/* Import Lucide icons at the top of your file:
                    */}
                    <button className="flex items-center gap-2 px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition shadow-md">
                        <Share2 size={18} />
                        <span>Share</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition shadow-md">
                        <Heart size={18} />
                        <span>Like ({blog.likes})</span>
                    </button>
                </div>
            </main>
            <aside className="flex-1 min-w-0 bg-gray-50 rounded-lg shadow p-4 h-fit">
                <h2 className="text-base sm:text-lg font-semibold mb-4">Similar Posts</h2>
                <div className="flex flex-col gap-4">
                    {similarPosts.map(post => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="group relative block rounded overflow-hidden cursor-pointer transition-shadow hover:shadow-lg"
                            tabIndex={0}
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                className="w-full h-[90px] sm:h-[120px] object-cover transition-transform duration-200 group-hover:scale-105"
                                height={120}
                                width={200}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-60 flex flex-col justify-center items-center transition-opacity duration-200"></div>
                            <span className="absolute text-white group-hover:block hidden z-20 text-sm sm:text-base font-semibold px-2 text-center">{post.title}</span>
                        </Link>
                    ))}
                </div>
            </aside>
        </div>
    )
}

export default Blog