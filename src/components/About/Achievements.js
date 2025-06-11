'use client'
import React, {useEffect} from 'react'
import AOS from 'aos';
function Achievements() {
    useEffect(()=>{
        AOS.init()
    }, [])
  return (
   <>
    {/* Recent Achievements Section */}
      <div className='animate-fade-in delay-400 px-4 py-12 mt-8 bg-gradient-to-r from-white via-secondary/20 to-white'>
        <div className='max-w-[800px] mx-auto text-center'>
          <h2 className='text-2xl font-bold mb-4 text-primary'>Recent Achievements</h2>
          <p className='text-lg text-slate-700 mb-8'>
            At FutecAI, we take pride in our accomplishments. Here are a few highlights:
          </p>
          {/* Achievements Cards */}
          <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
              <div className="bg-primary/10 rounded-full p-3 mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.755l6.914-1.004L12 2.5l3.086 6.251L22 9.755l-5.007 4.367 1.179 6.873z"/></svg>
              </div>
              <p className="font-semibold text-slate-800 mb-2">Launched our flagship AI product</p>
              <span className="text-slate-600 text-sm text-center">Achieved a 30% increase in user engagement.</span>
            </div>
            <div className="bg-white/90 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
              <div className="bg-primary/10 rounded-full p-3 mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg>
              </div>
              <p className="font-semibold text-slate-800 mb-2">Partnered with industry leaders</p>
              <span className="text-slate-600 text-sm text-center">Driving AI research and development.</span>
            </div>
            <div className="bg-white/90 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
              <div className="bg-primary/10 rounded-full p-3 mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              </div>
              <p className="font-semibold text-slate-800 mb-2">{`"Innovative Tech Company" Award`}</p>
              <span className="text-slate-600 text-sm text-center">Received at the Global Tech Summit.</span>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Achievements