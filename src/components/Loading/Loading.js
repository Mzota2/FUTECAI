import React from 'react'
import Image from 'next/image';
function Loading({loading}) {
  if(!loading) return null
  return (
    <div className='z-23 w-full bg-primary h-full fixed top-0 left-0 flex flex-col justify-center items-center'>
         
        <div className="flex justify-center my-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50 flex items-center justify-center">
                <Image src={'/logo.png'} width={48} height={48} alt='Loading' className="object-cover rounded-full" />
            </div>
        </div>
     
    </div>
  )
}

export default Loading