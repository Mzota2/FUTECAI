'use client';
import React, {useEffect} from 'react'
import Image from 'next/image';
import AOS from 'aos';
import Link from 'next/link';
function Blogs({blogs}) {

    useEffect(() => {
        AOS.init();
    }, []);
    
return (
    <div className="col-span-2 animate-fade-in delay-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {blogs?.map((blog, index) => (
            <Link
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                    href={blog.link}
                    key={blog.id}
                    className="bg-white shadow-lg h-fit hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col sm:flex-row md:flex-col group"
            >
                    <div className="relative w-full sm:w-40 md:w-full h-[150px] flex-shrink-0">
                            <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none md:rounded-t-lg md:rounded-l-none"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                            <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-primary group-hover:underline">{blog.title}</h2>
                                    <p className="text-gray-600 mt-2 text-sm md:text-base">{blog.description.length > 80 ? blog.description.slice(0, 80) + "..." : blog.description}</p>
                            </div>
                            <div className="flex items-center justify-between mt-4 text-xs md:text-sm text-gray-500">
                                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                                    <span>{blog.views} views</span>
                            </div>
                    </div>
            </Link>
            ))}
    </div>
)
}

export default Blogs