import React from 'react'
import { Button } from '../ui/button'
import HomeAnimation from './HomeAnimation'
import Link from 'next/link'
function Hero() {

  return (
    <>
    {/* Hero Section */}
          <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 my-8 px-4 items-center">
            {/* Left Side Content */}
            <div className="space-y-8 order-2 md:order-1 flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-secondary to-[#6366f1] bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
                Transforming Industries with <span className="underline decoration-wavy decoration-secondary">AI Driven Solutions</span>
              </h1>
              <p className="mt-2 text-lg md:text-xl text-slate-700/90 font-medium animate-fade-in delay-100">
                Unlock the potential of your business with our <span className="font-semibold text-primary">Innovative AI solutions</span>. Experience seamless digital transformation and drive growth like never before.
              </p>
              {/* Buttons */}
              <div className="mt-4 md:mt-8 flex gap-6 animate-fade-in delay-200 ">
                <Link href={'/register'} className="relative flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all duration-300 transform bg-primary rounded-tl-xl rounded-br-none group hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition duration-300"></span>
                  <span className="absolute inset-0 w-full h-full border-2 border-primary group-hover:border-secondary"></span>
                  <span className="relative text-white text-sm md:text-lg">Get Started</span>
                </Link>
                <Link href={'/about'} className="relative flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all duration-300 transform bg-transparent border-2 border-primary rounded-tl-xl rounded-br-none group hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
                  <span className="absolute inset-0 w-full h-full bg-white opacity-50 group-hover:opacity-100 transition duration-300"></span>
                  <span className="absolute inset-0 w-full h-full border-2 border-primary group-hover:border-secondary"></span>
                  <span className="relative text-black text-sm md:text-lg ">Learn More</span>
                </Link>
              </div>
            </div>
            {/* Right Side Animated Image */}
            <HomeAnimation/>

          </div>
    </>
  )
}

export default Hero