'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

function OptionsList({ options, styles, style, setIsOpen }) {
    // Get the current pathname from Next.js router
    const pathname = usePathname();

    // Active links and their styles
    const activeLink = 'text-secondary px-4 rounded-sm py-2 font-bold bg-white/90 focus:bg-secondary/10 transition-colors duration-300' + ' ' + (style ? ` ${style}` : 'text-gray-900 ');
    // Inactive links and their styles
    const inactiveLink = 'text-white/90 focus:text-secondary transition-colors duration-300' + ' ' + (style ? ` ${style}` : 'text-gray-700 ');
    // Function to determine if a link is active

    const isActiveLink = (link) => {
        return pathname === link ? activeLink : inactiveLink;
    };

    return (
    <div className={'flex items-center gap-6' + (styles ? ` ${styles}` : '')}>
      {/* Map through the options and create links */}
      {options.map((option, index) => {
        // Special styles for Login and Register buttons
        if (option.title === 'Get Started') {
          return (
            <Link
              key={index}
              onClick={() => setIsOpen(false)}
              href={option.link}
              className={`flex items-center gap-2 font-medium text-[16px] px-4 py-2 rounded-sm bg-secondary/50 !text-white/90 transition hover:opacity-90 focus:text-secondary ${isActiveLink(option.link)}`}
            >
              {option.Icon} {option.title}
            </Link>
          );
        }
      
        return (
          <Link key={index} onClick={() => setIsOpen(false)} href={option.link} className={`flex items-center gap-2 font-medium hover:text-secondary focus:text-secondary text-[16px] ${isActiveLink(option.link)}`}>
            {option.Icon} {option.title}
          </Link>
        )
      })}
    </div>
  )
}

export default OptionsList