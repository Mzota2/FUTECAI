'use client';
import React from 'react'
import { Briefcase, Users, GraduationCap, Rocket } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '../ui/button';

const vacancies = [
    {
        title: "Frontend Developer",
        location: "Lilongwe, Malawi",
        type: "Full-time",
        description: "Build engaging user interfaces with React and Next.js.",
        icon: <Briefcase size={32} />,
    },
    {
        title: "AI Research Intern",
        location: "Remote",
        type: "Internship",
        description: "Work on cutting-edge AI solutions for local challenges.",
        icon: <Rocket size={32} />,
    },
    {
        title: "Mentorship Program",
        location: "Blantyre, Malawi",
        type: "Training",
        description: "Join our mentorship to kickstart your tech career.",
        icon: <GraduationCap size={32} />,
    },
]

const trainings = [
    {
        title: "Tech for SDGs Bootcamp",
        description: "Empowering youth with digital skills to achieve the UN SDGs.",
        image: "/AI1.jpg",
    },
    {
        title: "Women in Tech Malawi",
        description: "Mentorship and training for women aspiring to join tech.",
        image: "/women.jpg",
    },
]

function CareerPage() {
    return (
        <div className="min-h-screen max-w-[1200px] mx-auto px-4 py-10 ">
            
            <motion.h1
                className="text-4xl font-bold text-center mb-6 text-primary"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Careers at FutechAI
            </motion.h1>
            <motion.p
                className="text-center max-w-2xl mx-auto mb-10 text-lg text-slate-700/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
            >
                Join us in shaping the future of technology in Malawi. We offer exciting positions, mentorship, and training programs aligned with the Sustainable Development Goals (SDGs).
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8 mb-14">
                {vacancies.map((vacancy, idx) => (
                    <motion.div
                        key={vacancy.title}
                        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                    >
                        <div className="mb-3 text-secondary">{vacancy.icon}</div>
                        <h2 className="text-xl font-semibold mb-1">{vacancy.title}</h2>
                        <div className="text-sm text-secondary mb-2">{vacancy.location} • {vacancy.type}</div>
                        <p className="text-gray-700 text-center mb-4">{vacancy.description}</p>
                        <Button
                            className="mt-auto px-5 py-2 bg-primary cursor-pointer text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            onClick={() => window.open('mailto:careers@futechai.com?subject=Application for ' + encodeURIComponent(vacancy.title), '_blank')}
                        >
                            Apply Now
                        </Button>
                    </motion.div>
                ))}
            </div>

            <motion.h2
                className="text-2xl font-bold text-blue-900 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                Trainings & Mentorship Programs
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
                {trainings.map((training, idx) => (
                    <motion.div
                        key={training.title}
                        className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center p-4"
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                    >
                        <div className="w-full md:w-40 h-32 relative mb-4 md:mb-0 md:mr-6">
                            <Image
                                src={training.image}
                                alt={training.title}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-1">{training.title}</h3>
                            <p className="text-gray-700">{training.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <Users className="mx-auto mb-2 text-secondary" size={40} />
                <h3 className="text-xl font-bold text-primary  mb-2">Grow with FutechAI</h3>
                <p className="text-slate-700/80 max-w-xl mx-auto">
                    We are committed to nurturing talent and supporting career growth in Malawi. Be part of our journey to make a difference through technology and innovation.
                </p>
            </motion.div>
        </div>
    )
}

export default CareerPage