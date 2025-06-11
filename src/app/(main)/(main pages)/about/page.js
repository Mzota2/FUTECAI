import React from 'react'
import { Eye, Target } from 'lucide-react';
import Team from '@/components/About/Team';
import Values from '@/components/About/Values';
import Achievements from '@/components/About/Achievements';
function About() {
  return (
    <div>
     
        {/* Title and Description */}
      <div className="my-8 text-center animate-fade-in delay-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">About FutecAI</h2>
        <p className="text-gray-600 text-base md:text-lg">
          Learn more about our mission, vision, values, and the passionate team driving innovation at FutecAI.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className='animate-fade-in delay-100 max-w-[1200px] mx-auto py-12 px-4 flex md:flex-row flex-col items-center justify-center gap-8'>
        {/* Mission Card */}
        <div className='w-full md:w-1/2 max-w-[600px] text-center bg-white/80 p-6 rounded-lg shadow-lg'>
          {/* Mission Icon */}
          <Target className='w-14 h-14 text-primary mb-4 mx-auto' />
          <h2 className='text-2xl font-bold mb-4'>Our Mission</h2>
          <p className='text-lg text-slate-700'>
            At FutecAI, our mission is to empower businesses through innovative AI solutions that drive efficiency and growth.
          </p>
        </div>

        {/* Vision */}
        <div className='w-full md:w-1/2 max-w-[600px] text-center bg-white/80 p-6 rounded-lg shadow-lg'>
          {/* Vision Icon */}
          <Eye className='w-14 h-14 text-primary mb-4 mx-auto' />
          <h2 className='text-2xl font-bold mb-4'>Our Vision</h2>
          <p className='text-lg text-slate-700'>
            We envision a future where AI seamlessly integrates into every aspect of business, transforming industries and enhancing lives.
          </p>
        </div>  
      </div>

      {/* Core Values Section */}
      <div className='animate-fade-in delay-200 px-4 py-12 bg-secondary/30'>
        <div className='max-w-[1200px] mx-auto flex flex-col items-baseline'>
          <div className='w-fit max-w-[500px] mb-8'>
            <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-heart text-primary w-7 h-7" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <h2 className='text-2xl font-bold mb-4'>Our Core Values</h2>
            <p className='text-lg text-slate-700'>
              At FutecAI, we are guided by our core values:
            </p>
          </div>
          {/* Core Values Grid */}
          <div className='grid w-full grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
            <Values/>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='py-12'>
        <div className='max-w-[800px] mx-auto text-center'>
          <h2 className='text-2xl font-bold mb-4'>Our Team</h2>
          <p className='text-lg text-slate-700'>
            Meet the talented individuals behind FutecAI:
          </p>
        </div>
      </div>
      
      <div className='animate-fade-in delay-300 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-4'>
        <Team/>
      </div> 

      <Achievements/>   
       
      
    </div>
  )
}

export default About;