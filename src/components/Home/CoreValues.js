'use client';
import React, {useEffect} from 'react'
import Image from 'next/image'
import AOS from 'aos';
import "aos/dist/aos.css";

function CoreValues() {

  const values = [
    {
      title: "Innovation",
      description: "Pioneering Tomorrow's Solutions Today",
      image: "/AI8.jpg"
    },
    {
      title: "Integrity",
      description: "Building Trust Through Transparency",
      image: "/AI6.jpg"
    },
    {
      title: "Excellence",
      description: "Committed to Outstanding Performance",
      image: "/AI7.jpg"
    }
  ];
  const valueElements = values.map((value, index) => (
    <div 
      data-aos="fade-up"
      data-aos-delay={(index+1) * 200}
      key={index} 
      className="flex-1 z-5 top-0 left-0 cursor-pointer hover:z-10 rounded-md hover:rotate-0 hover:bg-primary hover:w-full transition ease-in transform md:rotate-6 scale-95 hover:scale-105 md:-ml-4 w-full max-w-xs mx-auto md:max-w-none">
      <div className="flex flex-col gap-3 bg-white/80 rounded-2xl drop-shadow-lg shadow-sm p-3 hover:shadow-2xl transition-all duration-300">
        <Image
          src={value.image}
          alt={value.title}
          className="rounded-xl shadow-lg w-full  h-auto max-h-[180px] object-cover transition-transform duration-500 hover:scale-105 mx-auto"
          width={180}
          height={180}
          loading="lazy"
        />
        <h3 className="font-bold text-base text-primary/80">{value.title} : <span className="font-normal text-slate-700/90">{value.description}</span></h3>
        <p className="text-slate-700/90 text-sm">{`At FutecAI, we believe in fostering a culture of ${value.title.toLowerCase()}. We encourage our team to think outside the box and explore new ideas that can drive progress and create value for our clients.`}</p>
      </div>
    </div>
  ));
  useEffect(()=>{
          AOS.init()
  },[])
      
  return (
    <>
    <section className='px-2 sm:px-4 py-8 bg-white/90'>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 max-w-[1200px] mx-auto items-center mb-4">
          <div className="w-full md:w-fit max-w-[500px] flex flex-col gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-heart text-primary w-7 h-7" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span className="text-gray-700 font-bold text-xs">Values</span>
            <h1 className="font-bold text-lg text-primary/80">Our Core Values Drive Our Success</h1>
          </div>
          <div className="w-full md:max-w-[600px] border border-primary bg-secondary/0 rounded-xl shadow-md drop-shadow-md p-4 text-slate-700/80 relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-2xl z-0" />
            <p>{`At FutecAI, our core values are the foundation of our success. They guide our actions, shape our culture, and define how we interact with our clients and partners. We are committed to upholding these values in everything we do, ensuring that we deliver exceptional results while maintaining the highest standards of integrity and excellence.`}</p>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-2xl z-0" />
          </div>
        </div>
        <div className="relative flex justify-center items-center py-8">
          <div className="absolute left-1/2 -translate-x-1/2 -rotate-6 z-0 w-[120px] h-[160px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl"></div>
          <div className="w-full relative flex flex-col md:flex-row gap-6 md:gap-[-24px] justify-center items-end z-10">
            {valueElements}
          </div>
        </div>
      </section>
    </>
  )
}

export default CoreValues