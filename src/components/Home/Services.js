'use client';
import React, {useEffect} from 'react'
import { Button } from '@/components/ui/button'
import { Brain, Layers, Compass, Lightbulb } from 'lucide-react';
import AOS from 'aos';
import "aos/dist/aos.css";

function Services() {
  const services = [
    {
      title: 'Artificial Intelligence Solutions Tailored for You',
      description: 'We provide cutting-edge AI solutions that empower businesses to harness the power of data and drive innovation.',
      icon: <Brain className="w-14 h-14 text-white" />
    },
    {
      title: 'Custom Software Development for Your Business Needs',
      description: 'We specialize in creating robust applications that can handle complex business processes.',
      icon: <Layers className="w-14 h-14 text-white" />
    },
    {
      title: 'Expert Tech Consultancy to Guide Your Journey',
      description: 'Our consultancy services provide you with the expertise and guidance needed to navigate the complex world of technology.',
      icon: <Compass className="w-14 h-14 text-white" />
    }
  ]

  const serviceCards = services.map((service, index) => (
    <div 
        key={index} 
        data-aos="fade-up"
        data-aos-delay={(index+1) * 200}
        className={`flex relative cursor-pointer group hover:bg-primary flex-col gap-4 bg-white/80 rounded-md shadow-lg p-6 hover:shadow-2xl transition-all duration-300 md:translate-y-${index % 2 === 0 ? '8' : '-8'} items-center`}>
      <div className="w-24 h-24 group-hover:bg-white flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary mb-2 shadow-lg">
        {service.icon}
      </div>
      <h3 className="group-hover:text-white/90 font-bold text-xl text-primary/80 text-center">{service.title}</h3>
      <p className="text-slate-700/90 group-hover:text-white/70 text-center">{service.description}</p>
      <Button className="group-hover:bg-white/80 cursor-pointer shadow-sm drop-shadow-md bg-transparent hover:bg-blue-100 border-primary text-black px-6 py-3 rounded-md transition-colors duration-300 border hover:border-secondary">Learn More</Button>
      <div className='absolute group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary from-primary/30 to-secondary/20 bottom-0 left-0 w-full bg-primary h-4 rounded-b-md'></div>
    </div>
  ));

  useEffect(()=>{
        AOS.init()
  },[])
      

  return (
    <>
      <section className='px-4 py-12'>
        <div className="w-full flex gap-4 flex-col md:flex-row max-w-[1200px] mx-auto items-center mb-4">
          <div className="w-fit max-w-[400px] flex flex-col gap-2">
            {/* Using a lightbulb icon for innovation */}
            <Lightbulb className="lucide lucide-lightbulb text-primary w-7 h-7" />
            <span className="text-gray-700 font-bold text-sm">Services</span>
            <h1 className="font-bold text-xl text-primary/80">Transforming Industries with Intelligent Solutions</h1>
          </div>
          <div className="max-w-[600px] border border-primary bg-secondary/0 rounded-xl shadow-md drop-shadow-md p-4 text-slate-700/80 relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-2xl z-0" />
            <p>{`At FutecAI, we leverage cutting-edge AI technologies to drive innovation and transform industries. Our team of experts is dedicated to developing advanced solutions that address the unique challenges faced by our clients, enabling them to stay ahead in a rapidly evolving digital landscape.`}</p>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-2xl z-0" />
          </div>
        </div>
        {/* Artistic Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 max-w-[1200px] mx-auto">
          {serviceCards}
        </div>
      </section>
    </>
  )
}

export default Services