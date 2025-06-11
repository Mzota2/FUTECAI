'use client';
import React, {useEffect} from 'react'
import Image from 'next/image';
import { Lightbulb } from 'lucide-react';
import AOS from 'aos';
import "aos/dist/aos.css";

function Projects() {
    const projects = [
        {
            title: "Healthcare Solutions for Enhanced Patient Care",
            description: "Our AI-driven tools improve diagnosis and patient management, helping healthcare providers make more informed decisions and achieve better patient outcomes.",
            image: "/AI5.jpg"
        },
        {
            title: "Retail Innovations for a Competitive Edge",
            description: "We help retailers optimize operations, enhance customer experiences, and stay ahead of market trends with advanced AI solutions.",
            image: "/AI6.jpg"
        },
        {
            title: "Education Technology for Engaging Learning Experiences",
            description: "We create personalized and adaptive learning experiences, empowering educators to deliver tailored content for diverse student needs.",
            image: "/AI7.jpg"
        },

        {
            title:"Agricultural AI for Sustainable Farming",
            description: "Our AI solutions enhance crop management, optimize resource usage, and improve yield predictions, supporting sustainable agricultural practices.",
            image: "/AI8.jpg",
        },

        {
            title: "Financial Analytics for Smarter Investments",
            description: "We provide AI-driven financial analytics tools that help investors make data-informed decisions, manage risks, and optimize their portfolios.",
            image: "/AI9.jpg"
        },

        {
            title: "Manufacturing Automation for Efficiency",
            description: "Our AI solutions streamline manufacturing processes, reduce downtime, and enhance quality control, driving operational efficiency in production lines.",
            image: "/AI10.jpg"
        },  

        {
            title: "Logistics Optimization for Seamless Supply Chains",
            description: "We leverage AI to optimize logistics operations, improve route planning, and enhance inventory management, ensuring timely deliveries and cost savings.",
            image: "/AI1.jpg"
        }
    ];

    const projectElements = projects.map((project, index) => (
        <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={(index+1) * 200}
            tabIndex={0}
            className="group mb-6 break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 focus:scale-105 cursor-pointer"
        >
            <Image
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded-2xl transition-all duration-300 group-hover:brightness-75 group-focus:brightness-75"
                width={600}
                height={400}
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white text-sm">{project.description}</p>
            </div>
        </div>
    ));

    useEffect(()=>{
      AOS.init()
    }, [])
    
  return (
    <>
    <section className='px-4 py-12 bg-secondary/30'>
        <div className="w-full flex flex-col md:flex-row gap-4 max-w-[1200px] mx-auto  items-center mb-4">
          <div className="w-fit max-w-[400px] flex flex-col gap-2">
            <Lightbulb className="lucide lucide-lightbulb text-primary w-7 h-7" />
            <span className="text-gray-200 font-bold text-sm">Projects</span>
            <h1 className="font-bold text-xl text-white">{`Innovative Projects that are Transforming Industries`}</h1>
          </div>

          <div className="max-w-[600px] bg-white/10 border border-primary rounded-xl shadow-md drop-shadow-md p-4 text-slate-700/80 relative">
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-2xl z-0" />
            <p>{`Overview of the projects that FutecAI has undertaken to drive innovation and transformation across various industries.`}</p>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-2xl z-0" />
          </div>

        </div>
        {/* Artistic Pinterest-style Masonry Grid for Projects */}
        <div className="w-full max-w-[1200px] mx-auto py-12">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 [column-fill:_balance]">
            {projectElements}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects