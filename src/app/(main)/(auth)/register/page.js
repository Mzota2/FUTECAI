'use client';
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
    {
        label: "How did you find out about FutecAI?",
        content: ({ form, onChange }) => (
            <select
                name="discovery"
                required
                value={form.discovery}
                onChange={onChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
            >
                <option value="">Select an option</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="friend">Friend/Colleague</option>
                <option value="ad">Advertisement</option>
                <option value="other">Other</option>
            </select>
        ),
    },
    {
        label: "Your Role",
        content: ({ form, onChange }) => (
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
        ),
    },
    {
        label: "How do you want to use FutecAI?",
        content: ({ form, onChange }) => (
            <textarea
                name="usage"
                required
                rows={3}
                value={form.usage}
                onChange={onChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                placeholder="Describe how you plan to use FutecAI"
            />
        ),
    },
    {
        label: "Registration",
        content: ({ form, onChange }) => (
            <div className="mt-2 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="name"
                            autoComplete="name"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="current-username"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                            placeholder="Username"
                        />
                    </div>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm sm:text-base"
                            placeholder="Password"
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

function Register() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
        discovery: "",
        role: "",
        usage: "",
        name: "",
        email: "",
        password: "",
    });

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSkip = () => setStep((s) => Math.min(s + 1, steps.length - 1));
    const handleContinue = (e) => {
        e && e.preventDefault();
        if (step < steps.length - 1) setStep(step + 1);
        else {
            // Submit logic here
            alert("Registered! (Demo only)");
        }
    };

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-2 sm:px-0">
            <div className="w-full max-w-xs sm:max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-8 transition-all duration-300">
                <div className='h-[56px] w-[56px] sm:h-[70px] sm:w-[70px] mx-auto p-2 rounded-full flex flex-col items-center justify-center bg-primary shadow-md drop-shadow-md'>
                    <Image src={'/logo.png'} width={56} height={56} alt='Logo' className='object-cover sm:w-[70px] sm:h-[70px]' />
                </div>
                
                <h2 className="text-xl sm:text-2xl mt-2 font-bold mb-6 text-center text-primary">
                    Create an Account
                </h2>
                <form onSubmit={handleContinue}>
                    <fieldset  
                        data-aos="fade-up"
                        data-aos-delay={50}
                        key={step}
                        className="mb-6">
                        <legend className="font-semibold mb-3 block text-base sm:text-lg text-gray-700">
                            {steps[step].label}
                        </legend>
                        {steps[step].content({ form, onChange })}
                    </fieldset>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                        <button
                            type="button"
                            onClick={handleSkip}
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                            disabled={step === steps.length - 1}
                        >
                            Skip
                        </button>
                        <button
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
            </div>
        </div>
    );
}

export default Register