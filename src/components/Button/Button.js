import React from 'react'
import { Button as ButtonUI } from '../ui/button';
function Button({title, styles}) {
  return (
    <div className={`${styles}`}>
        <ButtonUI className={`rounded-sm w-full font-medium cursor-pointer`}>{title}</ButtonUI>
    </div>
  )
}

export default Button