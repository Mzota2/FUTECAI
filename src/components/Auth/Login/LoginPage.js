'use client';
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import AOS from "aos";
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Alert, AlertTitle, AlertDescription } from '../../ui/alert';
import useStore from '../../State/store';
import Loading from '../../Loading/Loading';
import { handleSignIn, handleSignOut } from '../../../app/lib/auth';
function LoginPage() {

    const [form, setForm] = useState({
        email:"",
        password:""
    });
    const [error, setError] = useState(undefined);
    const setUser = useStore((state) => state.setUser);
    const route = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setForm(f => ({ ...f, loading: true }));
        try {
            const response = await axios.post("/api/user/login", form);
            const {data} = response;
            setUser(data.user);
            route.push("/");
        } catch (error) {
            setError(
                error?.response?.data?.message ||
                error?.message ||
                "Registration failed. Please try again."
            );
        } finally {
            setForm(f => ({ ...f, loading: false }));
        }
    }

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        AOS.init();
      }, [])

    // State for forgot password
    const [forgotLoading, setForgotLoading] = useState(false);
    const [forgotSuccess, setForgotSuccess] = useState("");
    const [forgotError, setForgotError] = useState("");

    // Handler for forgot password
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setForgotError("");
        setForgotSuccess("");
        if (!form.email) {
            setForgotError("Please enter your email address first.");
            return;
        }
        setForgotLoading(true);
        try {
            await axios.post("/api/user/reset-password", { email: form.email });
            setForgotSuccess(`A reset link has been sent to ${form.email}. Please check your email to reset your password.`);
        } catch (err) {
            setForgotError(
                err?.response?.data?.message ||
                err?.message ||
                "Failed to send reset link. Please try again."
            );
        } finally {
            setForgotLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-2 sm:px-4">
            {/* Login Form */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-8 transition-all duration-300">
                <div className="w-full max-w-md space-y-6 sm:space-y-8">
                    {/* Logo */}
                    <div onClick={() => route.push('/')} className='h-[60px] cursor-pointer w-[60px] sm:h-[70px] sm:w-[70px] mx-auto p-2 rounded-full flex flex-col items-center justify-center bg-primary shadow-md drop-shadow-md'>
                        <Image src={'/logo.png'} width={150} height={150} alt='Logo' className='object-cover' />
                    </div>
                    {/* Loading Animation */}
                    {<Loading loading={form.loading} />}
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-xs sm:text-sm text-gray-600">Welcome back! Please login to your account.</p>
                    </div>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertTitle>Registration Failed</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {forgotError && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertTitle>Forgot Password</AlertTitle>
                            <AlertDescription>{forgotError}</AlertDescription>
                        </Alert>
                    )}
                    {forgotSuccess && (
                        <Alert variant="success" className="mb-4">
                            <AlertTitle>Check your email</AlertTitle>
                            <AlertDescription>{forgotSuccess}</AlertDescription>
                        </Alert>
                    )}
                    <form
                        onSubmit={handleSubmit}
                        data-aos="fade-up"
                        data-aos-delay={50} 
                        className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm"
                                    placeholder="Email address"
                                    disabled={form.loading}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm"
                                    placeholder="Password"
                                    disabled={form.loading}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    disabled={form.loading}
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <button
                                    type="button"
                                    onClick={handleForgotPassword}
                                    disabled={forgotLoading || form.loading}
                                    className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
                                >
                                    {forgotLoading ? "Sending..." : "Forgot your password?"}
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                disabled={form.loading}
                            >
                                {form.loading ? "Signing In..." : "Sign In"}
                            </button>
                        </div>
                    </form>
                    <div 
                        data-aos="fade-up"
                        data-aos-delay={55}
                        className="flex items-center justify-center space-x-2">
                        <span className="h-px w-10 sm:w-16 bg-gray-200"></span>
                        <span className="text-gray-400 text-xs sm:text-sm">or sign in with</span>
                        <span className="h-px w-10 sm:w-16 bg-gray-200"></span>
                    </div>
                    <div 
                        data-aos="fade-up"
                        data-aos-delay={60}
                        className="flex space-x-3 sm:space-x-4 justify-center">
                        <button onClick={handleSignIn} className="flex cursor-pointer items-center justify-center p-2 sm:p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition" disabled={form.loading}>
                            <FaGoogle className="text-red-500 text-lg sm:text-xl" />
                        </button>
                        <button className="flex cursor-pointer items-center justify-center p-2 sm:p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition" disabled={form.loading}>
                            <FaFacebookF className="text-blue-600 text-lg sm:text-xl" />
                        </button>
                    </div>
                    <p
                        className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
                        {`Don't have an account?`}{' '}
                        <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default LoginPage;