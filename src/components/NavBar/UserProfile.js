'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import useStore from '../State/store';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Loading from '../Loading/Loading';
import { useSession } from 'next-auth/react';
import { handleSignOut } from '@/app/lib/auth';
import ClientWithUser from '../State/ClientWithUser';

export default function UserProfile() {
    const user = useStore((state) => state.user);
    const [open, setOpen] = React.useState(false);
    const profileRef = React.useRef(null);
    const route = useRouter();
    const setUser = useStore((state) => state.setUser);
    const [loading, setLoading] = useState(false);
    const { data: session } = useSession();

    const handleLogout = async()=>{
        try {
            setOpen(false);
            setLoading(true)
            if(session?.user){
                handleSignOut();
                setUser(null);
                route.push('/login');
            }
            else{
                await axios.post('/api/user/logout', {});
                setUser(null);
                route.push('/login');
            }
            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }

    }

    React.useEffect(() => {
        if (!open) return;
        function handleClickOutside(event) {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    if (!user) return null;
    return (
        <ClientWithUser>
            <div className="relative w-fit" ref={profileRef}>
            <button
                className="w-10 cursor-pointer h-10 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center focus:outline-none"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="User profile"
            >
                {user.image?.length ? (
                    <Image src={user?.image|| {}} alt="Profile" width={40} height={40} />
                ) : (
                    <span className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-600">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
                        </svg>
                    </span>
                )}
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-56 min-w-fit bg-white rounded-lg shadow-lg border z-50">
                    <div className="p-4 border-b">
                        <div className="font-semibold">{user.name || "User"}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                    <div className="flex flex-col p-2">
                        <button
                            className="text-left cursor-pointer px-4 py-2 hover:bg-gray-100 rounded"
                            onClick={() => { route.push(`${user?.type === 'admin' ? '/admin/dashboard' : '/'}`);}}
                        >
                            Dashboard
                        </button>
                        <button
                            className="text-left px-4 cursor-pointer py-2 hover:bg-gray-100 rounded text-red-600"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
            <Loading loading={loading}/>
            </div>
        </ClientWithUser>
        
    );
}
