'use client';
import React, {useEffect, useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";
import Image from "next/image";
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import useStore from '../State/store';
import ClientWithBlogs from '../State/ClientWithBlogs';
import { useRouter } from 'next/navigation';

function NewsBlogAds() {
const [visible, setVisible] = React.useState(true);
const posts = useStore((state)=> state.blogs);
const route = useRouter();

// const posts = [
//     {
//         id: 1,
//         title: "AI Revolutionizes Tech Industry",
//         summary: "Discover how AI is changing the world.",
//         image: "/AI1.jpg",
//     },
//     {
//         id: 2,
//         title: "Next.js 14 Released",
//         summary: "Explore the new features in Next.js 14.",
//         image: "/AI2.jpg",
//     },
//     {
//         id: 3,
//         title: "React 18: What’s New?",
//         summary: "A look at the latest in React 18.",
//         image: "/AI3.jpg",
//     },

//      {
//         id: 4,
//         title: "React 18: What’s New?",
//         summary: "A look at the latest in React 18.",
//         image: "/AI3.jpg",
//     },
// ];
const handleClose = () => setVisible(false);


if (!visible) return null;

return (
    <ClientWithBlogs>
        <div className="max-w-[1200px] mx-auto px-2 sm:px-4 mt-8 bg-white rounded-md shadow-sm drop-shadow-xl relative">
            <Button
                onClick={handleClose}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/10 hover:bg-black/20 border-none rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold z-10"
                aria-label="Close"
            >
                <X />
            </Button>
            <div className="h-56 sm:h-48 flex items-center justify-center">
                {posts?.length ?
                <Splide
                    options={{
                        type: 'loop',
                        perPage:3,
                        gap:'1rem',
                        mediaQuery: 'min',
                        breakpoints: {
                            640: { perPage: 1, gap: '0.5rem' },
                            768: { perPage: 2, gap: '0.75rem' },
                            1024: { perPage: 3, gap: '1rem' },
                        },
                        arrows: false,
                        pagination: false,
                        autoplay:true,
                        interval: 3000,
                        pauseOnHover: true,
                        pauseOnFocus: true,
                        drag: true,
                        lazyLoad:true
                    }}
                    className="w-full"
                >
                    <AnimatePresence>
                        {posts.map((post, ind) => (
                            <SplideSlide key={post.id || ind}>
                                <motion.div
                                    onClick={() => route.push(`/blog/${post.title}`)}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full bg-gray-50 hover:bg-primary/10 rounded-lg shadow-md cursor-pointer overflow-hidden text-center"
                                >
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={320}
                                        height={128}
                                        className="w-full h-28 sm:h-24 object-cover"
                                    />
                                    <div className="p-3 sm:p-2">
                                        <h3 className="mb-2 text-lg font-semibold sm:text-base">{post.title}</h3>
                                        <p className="text-gray-600 text-sm sm:text-xs">{post.summary}</p>
                                    </div>
                                </motion.div>
                            </SplideSlide>
                        ))}
                    </AnimatePresence>
                </Splide>:<></>
                }
            </div>
        </div>
    </ClientWithBlogs>
    
);
}

export default NewsBlogAds