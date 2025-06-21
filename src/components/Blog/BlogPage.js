'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Share2, Heart } from "lucide-react";
import { useParams } from 'next/navigation';
import ClientWithBlogs from '../State/ClientWithBlogs';
import useStore from '../State/store';
import { set } from 'zod';
function BlogPage() {
    const {slug} = useParams();
    const blogs = useStore(state => state.blogs);
    const [blog, setBlog] = useState(null);
    const [similarPosts, setSimilarPosts] = useState([]);
    
    useEffect(()=>{
        if(blogs.length){
            const slugModified = slug.replaceAll('%20', ' ');
            const foundBlog = blogs.find((item)=> item.title == slugModified);
            const filteredPosts =  blogs.filter((item)=> item.title != slugModified)
            const topPosts = filteredPosts?.slice(0, 3);
            const bottomPosts = filteredPosts?.slice(filteredPosts?.length - 3, filteredPosts?.length);
            const set = new Set([...topPosts, ...bottomPosts]);
            const foundSimilarPosts = Array.from(set);
            setBlog(foundBlog);
            setSimilarPosts(foundSimilarPosts);
        }

    },[blogs, slug]);
    return (
        <ClientWithBlogs>
            {blog && 
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
                    <div className="text-base sm:text-lg mb-8" dangerouslySetInnerHTML={{ __html: blog.description}}></div>
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
                                className="group relative rounded overflow-hidden cursor-pointer transition-shadow hover:shadow-lg"
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
                                
                                <div className="absolute w-full h-full inset-0 z-10 bg-black bg-opacity-60 opacity-0 group-hover:opacity-80 flex flex-col justify-center items-center transition-opacity duration-200">
                                    <Link href={`/blog/${post.title}`} className="absolute text-center text-white bg-red-400  z-11 text-4xl sm:text-base font-semibold px-2 ">{post.title}</Link>
                                </div>
                                
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
            }
        </ClientWithBlogs>

    )
}

export default BlogPage