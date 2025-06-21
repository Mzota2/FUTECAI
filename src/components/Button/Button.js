'use client';
import React from 'react'
import { Button as ButtonUI } from '../ui/button';
import { useFormStatus } from 'react-dom';
function Button({title, styles}) {
  const {pending} = useFormStatus();
  return (
    <div className={`${styles}`}>
        <ButtonUI disabled={pending} className={`rounded-sm w-full font-medium cursor-pointer`}>{title}</ButtonUI>
    </div>
  )
}

export default Button