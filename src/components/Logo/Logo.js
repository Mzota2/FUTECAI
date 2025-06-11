import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href={'/'} className='cursor-pointer flex items-center gap-2'>
        <Image src={"/logo.png"} className='rounded-full' alt="Logo" width={50} height={50} />
        <span className='text-2xl font-bold text-white'>FutecAI</span>
    </Link>
  )
}

export default Logo