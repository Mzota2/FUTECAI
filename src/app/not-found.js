import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <Image src="/blue-logo.png" alt="FutecAI" width={150} height={150} className="rounded-full" />
        <h1 className="md:text-5xl text-2xl font-bold text-primary">Page not found 🤔</h1>
        <p className="md:text-2xl text-lg text-slate-700">
          The page you are looking for does not exist. Go back to the{' '}
          <Link className='text-secondary' href="/">
            Home page
          </Link>
          .
        </p>
      </div>
      <Link
        href={'/'}
        className="mt-8 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
      >
        Go home
      </Link>
    </div>
  )
}

export default NotFound