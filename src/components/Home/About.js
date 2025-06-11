import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function About() {
  return (
    <>
      {/* More Info Section - Artistic Overlap Layout */}
      <section className="px-2 sm:px-4 py-8 sm:py-12 mt-8 sm:mt-12 relative bg-primary/100">
        <div className="w-full max-w-[1200px] gap-6 sm:gap-8 mx-auto flex flex-col md:flex-row items-center justify-between md:justify-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <h1 className="font-bold text-2xl sm:text-3xl text-white/90">{`Empowering Africa's Digital Future with Intelligent AI Solutions and Innovations`}</h1>
              <p className="text-white/70 mt-2 text-sm sm:text-base">{`At FutecAI, we are dedicated to driving digital transformation across Africa by harnessing the power of artificial intelligence. Our innovative solutions are designed to meet the unique challenges of the African market, enabling businesses to thrive in the digital age.`}</p>
              <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-white/80">
                  <span className="text-purple-700 font-extrabold">
                    {/* Rocket Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-rocket" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5 3 21l4.5-1.5"/><path d="M15 9l-6 6"/><path d="M10 14l1.5 1.5"/><path d="M17 7c-1.7-1.7-4.3-2-6.3-.7-2.1 1.3-3.2 3.7-2.7 6l.3 1.2c.1.3.3.5.6.6l1.2.3c2.3.5 4.7-.6 6-2.7C19 11.3 18.7 8.7 17 7z"/><path d="M15 9l6 6"/><path d="M19 15l1.5 4.5-4.5-1.5"/></svg>
                  </span>
                  <span>{`Accelerating Africa's digital transformation through innovative solutions.`}</span>
                </div>
                <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-white/80">
                  <span className="text-purple-700 ">
                    {/* Brain Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-brain" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 5.5a2 2 0 0 1 3 1.7V8"/><path d="M19 8c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1"/><path d="M9 17.7V19a2 2 0 0 1-3 1.7"/><path d="M5 16c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1"/><path d="M15 8V6a3 3 0 0 0-6 0v2"/><path d="M9 8v8"/><path d="M15 8v8"/><path d="M9 16v2a3 3 0 0 0 6 0v-2"/><path d="M15 16V8"/><path d="M9 8V6"/><path d="M15 8V6"/></svg>
                  </span>
                  <span>{`Leading the way in AI and software innovation.`}</span>
                </div>
                <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-white/80">
                  <span className="text-purple-700 ">
                    {/* Puzzle Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-puzzle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15.5V17a2 2 0 0 1-2 2h-1.5"/><path d="M3 8.5V7a2 2 0 0 1 2-2h1.5"/><path d="M8.5 21H7a2 2 0 0 1-2-2v-1.5"/><path d="M15.5 3H17a2 2 0 0 1 2 2v1.5"/><path d="M17 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/><path d="M7 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/><path d="M16 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/><path d="M8 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
                  </span>
                  <span>{`Building intelligent systems for real-world problem solving.`}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Artistic Overlap Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-5 sm:-mt-24 md:-mt-0 ">
            <div className="relative w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px] h-full bg-white/80 rounded-md p-2 sm:p-4 shadow-lg">
              <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-primary/60 to-secondary/50 rounded-full blur-2xl z-0" />
              <Image
                src="/ceo-chris.jpg"
                alt="AI Solutions"
                className="rounded-xl max-h-[250px] sm:max-h-[400px] md:max-h-[600px] shadow-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105 relative z-10"
                width={800}
                height={600}
                sizes="(max-width: 600px) 90vw, (max-width: 900px) 50vw, 600px"
                priority
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-tr from-secondary/50 to-primary/40 rounded-full blur-2xl z-0" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About