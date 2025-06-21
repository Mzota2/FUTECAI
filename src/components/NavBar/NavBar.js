import Image from 'next/image'
import React from 'react'
import OptionsList from './OptionsList';
import MobileNav from './MobileNav';
import { Home, Info, Briefcase, Mail, UserPlus, LogIn, Newspaper } from 'lucide-react';
import Logo from '../Logo/Logo';
import UserProfile from './UserProfile';
import { Providers } from '../State/SessionContextProvider';
import ClientWithUser from '../State/ClientWithUser';

function NavBar() {

    // Define the menu and auth links
    const menuLinks = [
        { title: 'Home', link: '/', Icon: <Home /> },
        { title: 'About', link: '/about', Icon: <Info /> },
        { title: 'Services', link: '/services', Icon: <Briefcase /> },
        {title: 'Blog', link:'/blog', Icon: <Newspaper /> },
        { title: 'Contact', link: '/contact', Icon: <Mail /> }
    ];
    
    // UserProfile component
    const authLinks = [
        { title: 'Login', link: '/login', Icon: <LogIn /> },
        { title: 'Get Started', link: '/register', Icon: <UserPlus /> }
        
    ];
    

    return (
    <div className='relative p-4 max-w-[1200px] mx-auto '>
        {/* Navigation bars */}

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center justify-between'>
            <Logo/>

            <div className='flex items-center gap-4'>
                <ClientWithUser><OptionsList options={menuLinks} /></ClientWithUser>
                
            </div>

            <div className='flex items-center gap-4'> 
                <ClientWithUser><OptionsList options={authLinks} /> </ClientWithUser>     
                <Providers>
                    <UserProfile/>
                </Providers>
                    
            </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav menuList={menuLinks} authLinks={authLinks} />
    </div>
    )
}

export default NavBar