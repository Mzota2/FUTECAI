'use client';
import React, {useEffect} from 'react'
import Image from 'next/image';
import AOS from 'aos';
function Values() {
    const values = [
    { title: "Innovation", description: "Pioneering Tomorrow's Solutions Today", image: "/AI8.jpg" },
    { title: "Collaboration", description: "Working Together for a Brighter Future", image: "/AI8.jpg" },
    { title: "Integrity", description: "Upholding the Highest Standards of Ethics", image: "/AI8.jpg" }
  ];

  useEffect(()=>{
          AOS.init()
    },[]);

  return (
    <>
    {
     values.map((value, index) => (
    <div 
        data-aos="fade-up"
        data-aos-delay={(index+1) * 200}
        key={index} 
        className="flex-1 w-full group bg-white/80 shadow-md p-4 z-5 top-0 left-0 cursor-pointer hover:z-10 rounded-md hover:rotate-0 hover:bg-primary hover:w-full transition ease-in transform md:rotate-6 scale-95 hover:scale-105 md:-ml-4">
      <Image
        src={value.image}
        alt={value.title}
        width={400}
        height={200}
        className='rounded-md mb-4 w-full h-auto max-h-[200px] object-cover transition-transform duration-500 hover:scale-105'
        loading="lazy"
      />
      <h3 className='text-lg group-hover:text-white font-semibold'>{value.title}</h3>
      <p className='text-slate-600 group-hover:text-white/70'>{value.description}</p>
    </div>
  ))
        }
    </>
  )
}

export default Values