import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function CallToAction() {
  return (
    <section className="py-8 px-4">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center">
          Ready to Transform Your Business?
        </h2>
        <p className="text-base sm:text-lg text-slate-700/90 text-center">
          Contact us today to learn how FutecAI can help you achieve your digital transformation goals.
        </p>
        <Link href={'/contact'} className="bg-primary text-white hover:bg-primary/80 px-6 py-4 text-base md:text-lg rounded-sm cursor-pointer shadow-lg hover:scale-105 transition-all duration-300">
          Get in Touch
        </Link>
      </div>
    </section>
  )
}

export default CallToAction