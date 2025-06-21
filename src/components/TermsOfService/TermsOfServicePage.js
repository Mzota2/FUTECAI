'use client';
import React, { useState } from 'react';

const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'acceptance', label: 'Acceptance of Terms' },
    { id: 'use-of-service', label: 'Use of Service' },
    { id: 'user-accounts', label: 'User Accounts' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'termination', label: 'Termination' },
    { id: 'disclaimer', label: 'Disclaimer & Limitation' },
    { id: 'changes', label: 'Changes to Terms' },
    { id: 'contact', label: 'Contact Us' },
];

function TermsOfServicePage() {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    const handleNavClick = (id) => {
        setActiveSection(id);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="flex min-h-screen font-sans">
            <aside className="w-64 hidden md:block bg-white border-r border-gray-200 py-8 px-6 sticky top-0 h-screen flex-shrink-0">
                <h2 className="text-xl font-bold mb-8 text-primary">
                    Terms of Service
                </h2>
                <nav>
                    <ul className="space-y-2">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => handleNavClick(section.id)}
                                    className={`w-full text-left px-3 py-2 rounded-md transition
                                        ${activeSection === section.id
                                            ? 'bg-primary/10 text-primary font-semibold'
                                            : 'text-gray-700 hover:bg-secondary/60'}
                                    `}
                                >
                                    {section.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 px-8 py-12 max-w-3xl">
                <section id="introduction" className="mb-10">
                    <h3 className="text-2xl font-semibold text-primary mb-2">Introduction</h3>
                    <p>
                        {`Welcome to FutechAI Co. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to comply with these Terms.`}
                    </p>
                </section>
                <section id="acceptance" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Acceptance of Terms</h3>
                    <p>
                        By using FutechAI Co. services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use our services.
                    </p>
                </section>
                <section id="use-of-service" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Use of Service</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>You must use our services in compliance with all applicable laws and regulations.</li>
                        <li>You agree not to misuse, disrupt, or attempt to gain unauthorized access to our services or systems.</li>
                        <li>We reserve the right to suspend or terminate your access if you violate these Terms.</li>
                    </ul>
                </section>
                <section id="user-accounts" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">User Accounts</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>You may be required to create an account to access certain features.</li>
                        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                        <li>Notify us immediately of any unauthorized use of your account.</li>
                    </ul>
                </section>
                <section id="intellectual-property" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Intellectual Property</h3>
                    <p>
                        All content, trademarks, and intellectual property on this site are owned by FutechAI Co. or its licensors. You may not use, copy, or distribute any content without our prior written consent.
                    </p>
                </section>
                <section id="termination" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Termination</h3>
                    <p>
                        We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.
                    </p>
                </section>
                <section id="disclaimer" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Disclaimer & Limitation</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{`Our services are provided "as is" without warranties of any kind.`}</li>
                        <li>FutechAI Co. is not liable for any damages arising from your use of our services.</li>
                        <li>Some jurisdictions do not allow certain limitations, so some may not apply to you.</li>
                    </ul>
                </section>
                <section id="changes" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Changes to Terms</h3>
                    <p>
                        We may update these Terms from time to time. We will notify you of significant changes by posting the new Terms on this page. Continued use of our services after changes means you accept the new Terms.
                    </p>
                </section>
                <section id="contact" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Contact Us</h3>
                    <p>
                        If you have any questions about these Terms of Service, please contact us at{' '}
                        <a href="mailto:support@futechaico.com" className="text-primary underline">
                            support@futechaico.com
                        </a>.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default TermsOfServicePage;