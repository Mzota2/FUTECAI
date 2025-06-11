'use client';
import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import OptionsList from './OptionsList';
import { Menu } from 'lucide-react';
import Image from 'next/image';

function MobileNav({ menuList, authLinks}) {

    const [isOpen, setIsOpen] = useState(false);
    
    const [hasOpened, setHasOpened] = useState(false);
    const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
 
    // Create a ref for the button and menu
    const buttonRef = useRef(null);
    const menuRef = useRef(null);

    // Showcase the menu and auth links in the navigation bar
    const toggleMobileMenu = () => {
        // Logic to show mobile menu can be added here
        setIsOpen(!isOpen);
    }

    // Close the mobile menu when clicking outside
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Update hasOpened when menu is opened
    useEffect(() => {
        if (isOpen && !hasOpened) setHasOpened(true);
    }, [isOpen, hasOpened]);

    // Control rendering for animation
    useEffect(() => {
        if (isOpen) {
            setShouldRenderMenu(true);
        } else if (hasOpened) {
            // Wait for animation to finish before unmounting
            const timeout = setTimeout(() => setShouldRenderMenu(false), 250);
            return () => clearTimeout(timeout);
        }
    }, [isOpen, hasOpened]);

     // Add event listener for clicks outside the menu
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); 
    
  return (
    <>
        {/* Mobile Navigation */}
        <nav className='md:hidden flex items-center justify-between'>
            <div>
                <Image src={"/logo.png"} alt="Logo" width={50} height={50} />
            </div>

            {/* Mobile Menu Button */}
            <div ref={buttonRef} className=''>
                <Menu className='w-6 h-6 cursor-pointer text-white' onClick={toggleMobileMenu} />
            </div>

            {/* Mobile Menu with slide down animation on view and slide up animation on close */}
            {
                shouldRenderMenu ? 
                <motion.div
                    ref={menuRef}
                    initial={hasOpened ? { opacity: 0, y: -20 } : false}
                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.25 }}
                    className={`flex flex-col gap-4 rounded-sm absolute top-0 left-0 w-full bg-primary shadow-lg p-4 z-10 max-w-[300px]`}
                >
                    {/* Mobile Menu List */}
                    <div>
                        <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
                    </div>

                    <hr className='border-gray-300' />

                    <div className='' >
                        <OptionsList style={'text-background'} setIsOpen={setIsOpen} options={menuList} styles={'flex-col !items-baseline'} />
                    </div>

                    <hr className='border-gray-300' />

                    <div className=''>
                        <OptionsList style={'text-background'} setIsOpen={setIsOpen} options={authLinks} styles={'flex-col !items-baseline'} />
                    </div>

                </motion.div> : null
            }
        </nav>
        </>
  )
}

export default MobileNav