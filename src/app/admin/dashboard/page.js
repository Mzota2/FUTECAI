'use client';
import BarChartComponent from '@/components/Admin/BarChartComponent';
import React from 'react'
import { BarChart } from 'recharts'
import { useState } from 'react';
import Link from 'next/link';

import {
    MessageCircle,
    Bell,
    Menu as MenuIcon,
    X as CloseIcon,
    
} from 'lucide-react';

function Dashboard() {

return (
    <div className="p-8 bg-white shadow-md min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-primary">FutechAI Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Users */}
            <div className="bg-primary/10 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-2 text-primary">Users</h2>
                <p className="text-3xl font-bold mb-2 text-secondary">1,245</p>
                <span className="text-green-600">+5% this month</span>
            </div>
            {/* Blog Posts */}
            <div className="bg-secondary/10 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-2 text-primary">Blog Posts</h2>
                <p className="text-3xl font-bold mb-2 text-secondary">87</p>
                <span className="text-blue-600">+2 new</span>
            </div>
            {/* Services */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-2 text-primary">Services</h2>
                <p className="text-3xl font-bold mb-2 text-secondary">12</p>
                <span className="text-yellow-600">+1 new</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Ordered Services Chart */}
            <div className="bg-primary/10 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">Ordered Services</h2>
                <BarChartComponent />
            </div>
            {/* Notifications */}
            <div className="bg-secondary/10 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">Notifications</h2>
                <ul className="space-y-2">
                    <li className="bg-secondary/20 rounded p-2 flex items-center gap-2">
                        <Bell className="w-4 h-4 text-secondary" /> New user registered
                    </li>
                    <li className="bg-secondary/20 rounded p-2 flex items-center gap-2">
                        <Bell className="w-4 h-4 text-secondary" /> Service order received
                    </li>
                    <li className="bg-secondary/20 rounded p-2 flex items-center gap-2">
                        <Bell className="w-4 h-4 text-secondary" /> Blog post published
                    </li>
                </ul>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Messages */}
            <div className="bg-primary/10 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">Messages</h2>
                <ul className="space-y-2">
                    <li className="bg-primary/20 rounded p-2 flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-secondary" />
                        {"How do I order a service?"} - John Doe
                    </li>
                    <li className="bg-primary/20 rounded p-2 flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-secondary" />
                        {"Can I get a demo?"} - Jane Smith
                    </li>
                </ul>
            </div>
            {/* Contact Details */}
            <div className="bg-secondary/10 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">Contact Details</h2>
                <p>Email: <span className="text-secondary">support@futechai.com</span></p>
                <p>Phone: <span className="text-secondary">+123 456 7890</span></p>
            </div>
        </div>

        {/* About Details */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary">About FutechAI</h2>
            <p>
                FutechAI is a leading provider of AI-powered solutions for businesses. Our platform offers a range of services to help you automate, analyze, and grow.
            </p>
        </div>
    </div>
);

}

export default Dashboard