'use client';
import React, {useEffect} from 'react'
import Image from 'next/image';
import AOS from 'aos';
function Services() {
    const services = [
    {
      title: "AI Solutions",
      description:
        "Transform your business with our cutting-edge AI solutions, designed to enhance efficiency and drive innovation. From predictive analytics to intelligent automation, we deliver tailored AI systems that solve real-world problems.",
      images: [
        { src: "/AI1.jpg", alt: "AI Project 1" },
        { src: "/AI2.jpg", alt: "AI Project 2" },
        { src: "/AI3.jpg", alt: "AI Project 3" },
        { src: "/AI4.jpg", alt: "AI Project 4" },
      ],
    },
    {
      title: "Tech Consultancy",
      description:
        "Get expert guidance to navigate the complex tech landscape. We help you make informed decisions, optimize your IT infrastructure, and implement the right technologies for your business goals.",
      images: [
        { src: "/TC1.jpg", alt: "Consultancy Project 1" },
        { src: "/TC2.jpg", alt: "Consultancy Project 2" },
        { src: "/TC3.jpg", alt: "Consultancy Project 3" },
        { src: "/TC4.jpg", alt: "Consultancy Project 4" },
      ],
    },
    {
      title: "Custom Software Development",
      description:
        "We build tailored software solutions that meet your unique business needs, ensuring scalability, security, and high performance. From web apps to enterprise systems, our team delivers robust products.",
      images: [
        { src: "/CD1.jpg", alt: "Software Project 1" },
        { src: "/CD2.jpg", alt: "Software Project 2" },
        { src: "/CD3.png", alt: "Software Project 3" },
        { src: "/CD4.jpg", alt: "Software Project 4" },
      ],
    },
    {
      title: "Mentorship and Training",
      description:
        "Empower your team with our mentorship and training programs. We offer hands-on workshops and personalized coaching to help your staff master new technologies and best practices.",
      images: [
        { src: "/MT1.jpg", alt: "TMTning Project 1" },
        { src: "/MT2.PNG", alt: "Training Project 2" },
        { src: "/MT3.jpg", alt: "Training Project 3" },
        { src: "/MT4.jpg", alt: "Training Project 4" },
      ],
    },
  ];

  useEffect(()=>{AOS.init()}, []);
  return (
    <>
         {/* Services Section */}
      <div className="max-w-[1200px] mx-auto py-12 flex flex-col items-center gap-8">
        <div className="w-full flex flex-col gap-12">
          {services.map((service, idx) => {
            // Alternate layout: even idx = text left, odd idx = text right
            const isTextLeft = idx % 2 === 0;
            const fadeDelay = 100 * (idx + 1);
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={(idx) * 200}
                key={service.title}
                className={`flex flex-col ${isTextLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center bg-white/90 rounded-lg shadow-lg p-6 gap-8`}
              >
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="mb-4 text-slate-700">{service.description}</p>
                  <button className="bg-primary text-white px-5 py-2 rounded hover:bg-primary/80 transition">
                    Order Service
                  </button>
                </div>
                {/* Gallery */}
                <div className="flex-1 grid grid-cols-2 gap-2">
                  {service.images.map((img, i) => (
                    <Image
                      key={img.alt + i}
                      src={img.src}
                      alt={img.alt}
                      width={180}
                      height={120}
                      className="rounded object-cover w-full h-[100px]"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Services