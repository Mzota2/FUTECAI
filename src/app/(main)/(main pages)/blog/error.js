'use client';
import React from 'react'

function Error({error, reset}) {
    const {name, message} = error;
return(
     <div className="flex gap-4 flex-col items-center justify-center h-screen">
      <div className="text-2xl text-red-500">{message}</div>
      <button onClick={reset} className="text-lg text-gray-600 px-4 py-2 bg-gray-300 cursor-pointer hover:bg-gray-200 rounded-md">Try reloading the page</button>
    </div>
  
  )
}

export default Error