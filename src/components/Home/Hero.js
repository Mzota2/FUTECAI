import React from 'react'
import { Button } from '../ui/button'
import HomeAnimation from './HomeAnimation'
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
                <Button className=" text-white hover:bg-secondary cursor-pointer px-4 md:px-8 md:py-6 py-3 rounded-md text-lg font-medium ">
                  Get Started
                </Button>
                <Button className="bg-transparent border border-primary cursor-pointer hover:bg-secondary hover:border-none text-black hover:text-white  px-4 md:px-8 py-3 md:py-6 rounded-md text-lg font-medium ">
                  Learn More
                </Button>
              </div>
            </div>
            {/* Right Side Animated Image */}
            <HomeAnimation/>

          </div>
    </>
  )
}

export default Hero