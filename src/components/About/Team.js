'use client';
import React, {useEffect}from 'react'
import Image from 'next/image';
import AOS from 'aos';
function Team() {
    const teamMembers = [
        { name: "John Doe", role: "CEO & Founder", image: "/client1.jpg" },
        { name: "Jane Smith", role: "CTO", image: "/client2.jpg" },
        { name: "Alice Johnson", role: "Lead Developer", image: "/client3.jpg" },
        { name: "Bob Brown", role: "Marketing Manager", image: "/client1.jpg" },
        { name: "Charlie Davis", role: "UX Designer", image: "/client2.jpg" },
        { name: "Eve Wilson", role: "Data Scientist", image: "/client3.jpg" }
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
            className='rounded-full mb-4 object-center h-auto max-h-[300px] w-full object-cover shadow-md'
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