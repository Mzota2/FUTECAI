import React from 'react'
import ServicesGrid from '@/components/Services/Services';

export const metadata = {
  title: "Services",
  description: 'Discover the range of services we offer to help your business grow with innovative technology and expert guidance.',
};

function Services() {
  return (
    <div>
      {/* Title and Description */}
      <div className="my-8 text-center animate-fade-in delay-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Our Services</h2>
        <p className="text-gray-600 text-base md:text-lg">
          Discover the range of services we offer to help your business grow with innovative technology and expert guidance.
        </p>
      </div>

      <ServicesGrid/>

     
    </div>
  );
}

export default Services