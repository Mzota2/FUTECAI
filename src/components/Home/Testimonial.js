import React from 'react'
import Image from 'next/image';

function Testimonial() {
  return (
    <>
        <section className="bg-white/90 py-12 px-4">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Hear from our satisfied clients about their experiences with FutecAI.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-end">
            {/* Carousel Style: Center card is larger */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl shadow-lg w-full max-w-[340px] flex flex-col items-center border border-primary/10 hover:scale-105 transition-all duration-300 md:scale-90 md:translate-y-8">
              <Image
                src="/client1.jpg"
                alt="Client 1"
                width={64}
                height={64}
                className="rounded-full mb-4 object-cover border-2 border-primary shadow-md"
              />
              {/* Rating Icons */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-center">{`"FutecAI transformed our business with their innovative AI solutions. Their expertise and dedication are unmatched!"`}</p>
              <span className="block mt-4 font-semibold text-center text-primary/80">- Jane Doe, CEO</span>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl shadow-lg w-full max-w-[400px] flex flex-col items-center border border-primary/10 hover:scale-105 transition-all duration-300 md:scale-110 md:z-10">
              <Image
                src="/client2.jpg"
                alt="Client 2"
                width={64}
                height={64}
                className="rounded-full mb-4 object-cover border-2 border-primary shadow-md"
              />
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-center">{`"The team at FutecAI is exceptional. They delivered results beyond our expectations and helped us achieve our goals."`}</p>
              <span className="block mt-4 font-semibold text-center text-primary/80">- John Smith, CTO</span>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl shadow-lg w-full max-w-[340px] flex flex-col items-center mt-8 border border-primary/10 hover:scale-105 transition-all duration-300 md:scale-90 md:translate-y-8">
              <Image
                src="/client3.jpg"
                alt="Client 3"
                width={64}
                height={64}
                className="rounded-full mb-4 object-cover border-2 border-primary shadow-md"
              />
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-center">{`"The team at FutecAI is exceptional. They delivered results beyond our expectations and helped us achieve our goals."`}</p>
              <span className="block mt-4 font-semibold text-center text-primary/80">- Client Name, Position</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial