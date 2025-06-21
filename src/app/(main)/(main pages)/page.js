import About from '@/components/Home/About';
import CallToAction from '@/components/Home/CallToAction';
import CoreValues from '@/components/Home/CoreValues';
import Hero from '@/components/Home/Hero';
import NewsBlogAds from '@/components/Home/NewsBlogAds';
import Projects from '@/components/Home/Projects';
import Services from '@/components/Home/Services';
import Testimonial from '@/components/Home/Testimonial';
import React from 'react'

async function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] py-12">
      <Hero/>

      {/* Showcasing blog posts as ads */}
      <NewsBlogAds />

      {/* About Section - Artistic Overlap Layout */}
      <About />



      { /* Core Values in Practice Section - Artistic Card Fan Layout */ }
      {/* <CoreValues /> */}

      {/* Offered Services at a Glance */}
      <Services/>

      {/* Innovate Section showcasing a few projects done - Artistic Zigzag Layout */}
      <Projects/>

      {/* Client Testimonials Section - Carousel Style */}
      <Testimonial/>

      {/* Call to Action Section */}
      <CallToAction/>
      
    </div>
  )
}

export default Home