'use client';
import React, {useEffect}from 'react'
import Image from 'next/image';
import AOS from 'aos';
function Team() {
    const teamMembers = [
        { name: "Mr. Christopher F. Nyirenda", role: "CEO & Founder", image: "/ceo-chris.jpg" },
        { name: "Mr. Chimwemwe Singini", role: "CEO & Co-Founder", image: "/ceo-singini.jpg" },
        { name: "Mr. Emmanuel M. Chirambo", role: "CTO & Co-Founder", image: "/cto-mzota.jpg" },
        { name: "Miss Yamikani Makwinja", role: "Head of ICT Operations Officer", image: "/ict-yamikani.jpg" },
        { name: "Miss Linly Maganga", role: "Sales & Communication Officer", image: "/sales-linly.jpg" },
    ];

  useEffect(()=>{
    AOS.init()
  }, [])

  return (
    <>
    {
    teamMembers.map((member, index) => (
    <div 
      data-aos="fade-up"
      data-aos-delay={(index+1) * 200}
      key={index} 
      className='flex cursor-pointer flex-col items-center bg-white/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <Image
            src={member.image}
            alt={member.name}
            width={300}
            height={300}
            className='rounded-full mb-4 object-center w-[300px] h-[300px] object-cover shadow-md'
            loading="lazy"
        />
        <h3 className='text-lg font-semibold'>{member.name}</h3>
        <p className='text-slate-600'>{member.role}</p>
        </div>
    ))

    }
    </>
  )
}

export default Team