'use client';
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from "react";
import AOS from "aos";
import axios from 'axios';
import {useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from "../../ui/alert";
import Loading from '../../Loading/Loading';
import { registrationSchema } from '../../Validation/Schema';


const steps = [
    {
        label: "How did you find out about FutecAI?",
        content: ({ form, onChange, errors }) => (
            <>
                <select
                name="source"
                required
                value={form.source}
                onChange={onChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
            >
                <option value="">Select an option</option>
                <option value="search_engine">Search Engine</option>
                <option value="social_media">Social Media</option>
                <option value="friend_colleague">Friend/Colleague</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
            </select>
            {errors.source && <p className="text-red-500 text-sm">{errors.source[0]}</p>}
            </>
            
        ),
    },
    {
        label: "Your Role",
        content: ({ form, onChange, errors}) => (
            <>
            <select
                name="role"
                required
                value={form.role}
                onChange={onChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
            >
                <option value="">Select your role</option>
                <option value="developer">Developer</option>
                <option value="manager">Manager</option>
                <option value="student">Student</option>
                <option value="researcher">Researcher</option>
                <option value="other">Other</option>
            </select>

            {errors.role && <p className="text-red-500 text-sm">{errors.role[0]}</p>}
            
            </>
            
        ),
    },
    {
        label: "How do you want to use FutecAI?",
        content: ({ form, onChange, errors }) => (
            <>
            <textarea
                name="reason"
                required
                rows={3}
                value={form.reason}
                onChange={onChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                placeholder="Describe how you plan to use FutecAI"
            />
            {errors.reason && <p className="text-red-500 text-sm">{errors.reason[0]}</p>}
            </>
            
        ),
    },
    {
        label: "Registration",
        content: ({ form, onChange, errors }) => (
            <div className="mt-2 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            value={form.name}
                            onChange={onChange}
                            id="name"
                            name="name"
                            type="name"
                            autoComplete="name"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                            placeholder="Name"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name[0]}</p>}
                    </div>
                    <div>
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input
                            value={form.username}
                            onChange={onChange}
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="current-username"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                            placeholder="Username"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username[0]}</p>}
                    </div>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                            value={form.email}
                            onChange={onChange}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                            placeholder="Email address"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            value={form.password}
                            onChange={onChange}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                            placeholder="Password"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm mt-2 sm:mt-0">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>
            </div>
        ),
    },
];
function RegisterPage() {

    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
        source: "",
        role: "",
        reason: "",
        name: "",
        email: "",
        username:"",
        password: "",
        type: "client"
    });

    

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const [isLoading, setIsLoading] = useState(false);
    const route = useRouter();

    const handleSkip = () => setStep((s) => Math.min(s + 1, steps.length - 1));
    const handleContinue = (e) => {
        e && e.preventDefault();
        if (step < steps.length - 1) setStep(step + 1);
        else {
            handleCreateAccount();
        }
    };

    useEffect(() => {
        AOS.init();
    }, [])
    // Import Alert and AlertTitle from shadcn

    const [error, setError] = useState("");
    // from form validation
    const [errors, setErrors] = useState({});

    const [success, setSuccess] = useState(false);

    // Update handleCreateAccount to show success and clear form
    const handleCreateAccount = async () => {
        try {
            setIsLoading(true);
            setError("");
            setSuccess(false);
            // form validation
            const result = registrationSchema.safeParse(form);
            if (!result.success) {
                console.log(result.error.flatten().fieldErrors)
                setErrors(result.error.flatten().fieldErrors);
                return;
            }
            setErrors({});
            const response = await axios.post('/api/user/register', form);
            const { data } = response;
            console.log(data);
            setSuccess(true);
            setForm({
                source: "",
                role: "",
                reason: "",
                name: "",
                email: "",
                username: "",
                password: "",
                type: "client"
            });
        } catch (error) {
            setError(
                error?.response?.data?.message ||
                error?.message ||
                "Registration failed. Please try again."
            );
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-2 sm:px-0">
            <div className="w-full max-w-xs sm:max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-8 transition-all duration-300">
                <div onClick={() => route.push('/')}  className='cursor-pointer h-[56px] w-[56px] sm:h-[70px] sm:w-[70px] mx-auto p-2 rounded-full flex flex-col items-center justify-center bg-primary shadow-md drop-shadow-md'>
                    <Image src={'/logo.png'} width={56} height={56} alt='Logo' className='object-cover sm:w-[70px] sm:h-[70px]' />
                </div>
                
                <h2 className="text-xl sm:text-2xl mt-2 font-bold mb-6 text-center text-primary">
                    Create an Account
                </h2>
                {(error|| errors.source || errors.reason || errors.role) && (
                    <Alert variant="destructive" className="mb-4">
                        <AlertTitle>Registration Failed</AlertTitle>
                        <AlertDescription>
                            {error}
                            {
                            errors.reason ? errors.reason[0]:''
                            }
                            {
                            errors.source ? errors.source[0]:''
                            }
                            {
                            errors.role ? errors.role[0]:''
                            }

                        </AlertDescription>
                    </Alert>
                )}
                {success && (
                    <Alert variant="success" className="mb-4">
                        <AlertTitle>Registration Successful</AlertTitle>
                        <AlertDescription>
                            An email has been sent to your email address with a link for verification.<br />
                            {`Please check your inbox and spam folder if you can't find it.`}
                        </AlertDescription>
                    </Alert>
                )}
                <form onSubmit={handleContinue}>
                    <fieldset  
                        data-aos="fade-up"
                        data-aos-delay={50}
                        key={step}
                        className="mb-6">
                        <legend className="font-semibold mb-3 block text-base sm:text-lg text-gray-700">
                            {steps[step].label}
                        </legend>
                        {steps[step].content({ form, onChange, errors})}                    </fieldset>

                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                        <button
                            type="button"
                            onClick={() => setStep((s) => Math.max(s - 1, 0))}
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                            disabled={step === 0}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={handleSkip}
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                            disabled={step === steps.length - 1}
                        >
                            Skip
                        </button>
                        <button
                            disabled={isLoading}
                            type={step === steps.length - 1 ? "submit" : "button"}
                            onClick={step === steps.length - 1 ? undefined : handleContinue}
                            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            {step === steps.length - 1 ? "Register" : "Continue"}
                        </button>
                    </div>
                    <div className="mt-6 text-center text-gray-400 text-xs sm:text-sm">
                        Step {step + 1} of {steps.length}
                    </div>
                </form>

                <Loading loading={isLoading} />
            </div>
        </div>
    );
}

export default RegisterPage