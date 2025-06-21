'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from "aos";
import Link from 'next/link';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { Alert, AlertTitle, AlertDescription } from '../../ui/alert';

function VerifyAccountPage() {
    const [error, setError] = useState(undefined);
    const [success, setSuccess] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const handleVerifyAccount = async()=>{
        try {
            if (!token) {
                setError("Invalid or missing verification token.");
                return;
            }
            setLoading(true);
            const response = await axios.post('/api/user/verify', { token });
            const {data} = response;
            console.log(data);
            setTimeout(()=>{
                router.push('/login');
            }, 2000)
        } catch (error) {
            setError(
                error?.response?.data?.message ||
                error?.message ||
                "Account verification failed. Please try again."
            );
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        handleVerifyAccount();
        // removed token from dependency
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-2 sm:px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-8 transition-all duration-300">
                <div className="w-full max-w-md space-y-6 sm:space-y-8">
                    <div onClick={() => router.push('/')}  className='cursor-pointer h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] mx-auto p-2 rounded-full flex flex-col items-center justify-center bg-primary shadow-md drop-shadow-md'>
                        <Image src={'/logo.png'} width={150} height={150} alt='Logo' className='object-cover' />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Verify your account</h2>
                        <p className="mt-2 text-xs sm:text-sm text-gray-600">
                            {loading ? "Verifying your account..." : "Please wait while we verify your account."}
                        </p>
                    </div>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertTitle>Verification Failed</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {success && (
                        <Alert variant="success" className="mb-4">
                            <AlertTitle>Account Verified</AlertTitle>
                            <AlertDescription>{success}</AlertDescription>
                        </Alert>
                    )}
                    <div className="mt-4 text-center text-xs sm:text-sm text-gray-600">
                        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Back to login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyAccountPage;
