'use client';

import React from 'react'

function GlobalError() {
  return (
    <html>
      <body className='antialiased flex flex-col items-center justify-center h-screen'>
        <div className='text-red-200 p-8 rounded-md bg-gray-200 shadow-md drop-shadow-md'>A serious error has occurred. Please try refreshing the page or contact support if the problem persists. </div>
      </body>
    </html>
    
  )
}

export default GlobalError