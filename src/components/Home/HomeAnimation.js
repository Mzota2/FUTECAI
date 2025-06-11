'use client';
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';

function HomeAnimation() {
    // Array of images and their background colors (brand harmony)
    const images = [
    { src: "/AI1.jpg", bg: "bg-gradient-to-br from-primary to-secondary" },
    { src: "/AI2.jpg", bg: "bg-gradient-to-br from-secondary to-primary" },
    { src: "/AI3.jpg", bg: "bg-gradient-to-br from-[#1e293b] to-primary" },
    ];
    
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="flex justify-center items-center w-full order-1 md:order-2">
      <div
        className={`
          group
          cursor-pointer
          relative rounded-full shadow-2xl shadow-secondary/40 flex items-center justify-center
          w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[500px] lg:h-[500px]
          max-h-screen max-w-screen overflow-hidden
          transition-all duration-700 ease-in-out drop-shadow-2xl
          ${images[current].bg} animate-blob
          hover:opacity-90 focus-within:opacity-90
          hover:ring-8 hover:ring-primary/20 focus-within:ring-8 focus-within:ring-primary/20
        `}
        tabIndex={0}
        style={{
          boxShadow: "0 10px 40px 0 rgba(99,102,241,0.18), 0 2px 8px 0 rgba(16,185,129,0.10)"
        }}
      >
        <Image
          key={images[current].src}
          src={images[current].src}
          alt="AI Solutions"
          className="z-10 absolute w-full h-full object-cover rounded-full transition-opacity duration-700 opacity-95 shadow-xl shadow-black/10 scale-105 animate-fade-in group-hover:opacity-70 group-focus:opacity-70"
          width={500}
          height={500}
          priority
        />
        {/* Soft Glow Effect */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500 group-hover:opacity-100 group-focus:opacity-100 opacity-80"
          style={{
            boxShadow: "0 0 120px 40px rgba(99,102,241,0.13), 0 0 160px 80px rgba(16,185,129,0.08)",
            background: "rgba(255,255,255,0.10)"
          }}
        />
      </div>
    </div>
  )
}

export default HomeAnimation