'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from "aos";
import Link from 'next/link';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { Alert, AlertTitle, AlertDescription } from '../../ui/alert';
import Loading from '../../Loading/Loading';
import { resetPasswordSchema } from '../../Validation/Schema';

function ResetPasswordPage() {
    const [form, setForm] = useState({
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState(undefined);
    // form validation errors
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(undefined);
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(undefined);
        setSuccess(undefined);

        // form validation
        const result = resetPasswordSchema.safeParse(form);
        if (!result.success) {
            setErrors(result.error.flatten().fieldErrors);
            return;
        }
        setErrors({});
        if (!token) {
            setError("Invalid or missing reset token.");
            return;
        }
        try {
            setLoading(true);
            await axios.post('/api/user/reset-password-confirm', {
                token,
                newPassword: form.password
            });
            setSuccess("Password reset successful! You can now log in.");
            setTimeout(() => router.push('/login'), 2000);
        } catch (error) {
            setError(
                error?.response?.data?.message ||
                error?.message ||
                "Password reset failed. Please try again."
            );
        }finally{
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-2 sm:px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-8 transition-all duration-300">
                <div className="w-full max-w-md space-y-6 sm:space-y-8">
                    <div onClick={() => router.push('/')}  className='cursor-pointer h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] mx-auto p-2 rounded-full flex flex-col items-center justify-center bg-primary shadow-md drop-shadow-md'>
                        <Image src={'/logo.png'} width={150} height={150} alt='Logo' className='object-cover' />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Reset your password</h2>
                        <p className="mt-2 text-xs sm:text-sm text-gray-600">Enter your new password below.</p>
                    </div>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertTitle>Password Reset Failed</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {success && (
                        <Alert variant="success" className="mb-4">
                            <AlertTitle>Password Reset Successful</AlertTitle>
                            <AlertDescription>{success}</AlertDescription>
                        </Alert>
                    )}
                    <form
                        onSubmit={handleSubmit}
                        data-aos="fade-up"
                        data-aos-delay={50}
                        className="mt-6 sm:mt-8 space-y-4 sm:space-y-6"
                    >
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="password" className="sr-only">New Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm"
                                    placeholder="New Password"
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm"
                                    placeholder="Confirm Password"
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword[0]}</p>}
                            </div>
                        </div>
                        <div>
                            <button
                                disabled={loading}
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-center text-xs sm:text-sm text-gray-600">
                        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Back to login
                        </Link>
                    </div>
                </div>
            </div>
            <Loading loading={loading}/>
        </div>
    );
}

export default ResetPasswordPage;
