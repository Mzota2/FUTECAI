'use client';
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

import {
    LayoutDashboard,
    Home,
    Info,
    Mail,
    Briefcase,
    BookOpen,
    User,
    MessageCircle,
    Bell,
    Menu as MenuIcon,
    X as CloseIcon,
    
} from 'lucide-react';
import ClientWithUser from '../State/ClientWithUser';

function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = [
        {name: 'Dashboard', icon: 'LayoutDashboard', href: '/admin/dashboard'},
        { name: 'Home', icon: 'Home', href: '/admin/home' },
        { name: 'About', icon: 'Info', href: '/admin/about' },
        { name: 'Contact', icon: 'Mail', href: '/admin/contact' },
        { name: 'Services', icon: 'Briefcase', href: '/admin/services' },
        { name: 'Blog', icon: 'BookOpen', href: '/admin/blog' },
        { name: 'Profile', icon: 'User', href: '/admin/profile' },
        { name: 'Messages', icon: 'MessageCircle', href: '/admin/messages' },
        { name: 'Notifications', icon: 'Bell', href: '/admin/notifications' },
    ];
    
    const iconMap = {
        LayoutDashboard,
        Home,
        Info,
        Mail,
        Briefcase,
        BookOpen,
        User,
        MessageCircle,
        Bell,
    };
  return (
    <ClientWithUser>
        {/* Sidebar */}
        <aside
            className={`fixed left-0 w-64 h-screen bg-white border-r border-primary/20 shadow-lg flex flex-col transition-transform duration-200 ease-in-out
                ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0 md:top-0 md:sticky md:shadow-none
                overflow-y-auto
            `}
        >
            <div className="flex items-center justify-between px-6 py-4 border-b border-primary/10">
                <span className="text-2xl font-bold text-primary">FutechAI</span>
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <CloseIcon className="w-6 h-6 text-secondary" />
                </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
                {menuItems.map(({ name, icon, href }) => {
                    const Icon = iconMap[icon];
                    return (
                        <Link
                            key={name}
                            href={href}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/10 transition-colors font-medium"
                        >
                            <Icon className="w-5 h-5 text-secondary" />
                            {name}
                        </Link>
                    );
                })}
            </nav>
        </aside>
        {/* Mobile menu button */}
        <button
            className="fixed top-4 left-4 z-30 md:hidden bg-white rounded-full p-2 shadow border border-primary/20"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
        >
            <MenuIcon className="w-6 h-6 text-secondary" />
        </button>
    </ClientWithUser>
  )
}

export default Menu