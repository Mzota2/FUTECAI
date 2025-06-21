'use client';
import React, { useState } from 'react';

const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'information-we-collect', label: 'Information We Collect' },
    { id: 'how-we-use-info', label: 'How We Use Information' },
    { id: 'sharing-info', label: 'Sharing of Information' },
    { id: 'data-security', label: 'Data Security' },
    { id: 'your-rights', label: 'Your Rights' },
    { id: 'changes', label: 'Changes to This Policy' },
    { id: 'contact', label: 'Contact Us' },
];

function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    const handleNavClick = (id) => {
        setActiveSection(id);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="flex min-h-screen  font-sans">
            <aside className="w-64 hidden md:block bg-white border-r border-gray-200 py-8 px-6 sticky top-0 h-screen flex-shrink-0">
                <h2 className="text-xl font-bold mb-8 text-primary">
                    Privacy Policy
                </h2>
                <nav >
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
                        Welcome to FutechAI Co. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
                    </p>
                </section>
                <section id="information-we-collect" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Information We Collect</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Personal identification information (Name, email address, phone number, etc.)</li>
                        <li>Usage data (pages visited, time spent, clicks, etc.)</li>
                        <li>Cookies and tracking technologies</li>
                    </ul>
                </section>
                <section id="how-we-use-info" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">How We Use Information</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>To provide and maintain our services</li>
                        <li>To improve user experience and our offerings</li>
                        <li>To communicate updates, offers, and support</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>
                <section id="sharing-info" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Sharing of Information</h3>
                    <p>
                        We do not sell your personal information. We may share information with trusted third parties to help us operate our services, comply with the law, or protect our rights.
                    </p>
                </section>
                <section id="data-security" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Data Security</h3>
                    <p>
                        We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
                    </p>
                </section>
                <section id="your-rights" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Your Rights</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Access, update, or delete your personal information</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Request data portability</li>
                    </ul>
                </section>
                <section id="changes" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Changes to This Policy</h3>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page.
                    </p>
                </section>
                <section id="contact" className="mb-10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at{' '}
                        <a href="mailto:privacy@futechaico.com" className="text-primary underline">
                            privacy@futechaico.com
                        </a>.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default PrivacyPolicyPage;
