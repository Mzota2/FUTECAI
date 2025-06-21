'use client';
import React, { useEffect, useState } from 'react';
import { Mail, Trash2 } from 'lucide-react';
import { handleSendMessage } from './action';
import axios from 'axios';
import { useFormStatus } from 'react-dom';

// Dummy data for demonstration

export default function AdminMessages() {
    const {pending} = useFormStatus();
    const [messages, setMessages] = useState([]);
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [selected, setSelected] = useState({email:'', name:''});

    const handleGetMessages = async () => {
        try {
            const response = await axios.get('/api/messages');
            const {data}= response;
            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const handleSendMessageWith= handleSendMessage.bind(null, {email: selected?.email, name:selected?.name})

    const handleSendEmail = (msg) => {
        console.log(msg);
        setSelected(msg)
        setShowEmailForm(true);
    };

    const handleDeleteMessage = async(id)=>{
        try {
            await axios.delete(`/api/messages/${id}`);
            const updatedMessages = messages.filter(msg => msg.id !== id);
            setMessages(updatedMessages);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        handleGetMessages();
    }, [])
    return (
        <div className="w-full mx-auto mt-10 mb-10 p-6 min-h-[80vh]">
            <h2 className="text-3xl font-bold mb-8 tracking-wide text-center text-slate-800">
                Admin Messages
            </h2>
            {messages.length === 0 ? (
                <p className="text-center text-gray-400 text-lg">No messages.</p>
            ) : (
                <div className="overflow-x-auto w-full rounded-xl shadow bg-white transition-shadow duration-300">
                    <table className="w-full md:min-w-[600px] border-separate border-spacing-0">
                        <thead>
                            <tr>
                                <th className="border-b-2 border-blue-100 text-left px-4 py-4 bg-slate-100 font-semibold text-base">Name</th>
                                <th className="border-b-2 border-blue-100 text-left px-4 py-4 bg-slate-100 font-semibold text-base">Email</th>
                                <th className="border-b-2 border-blue-100 text-left px-4 py-4 bg-slate-100 font-semibold text-base w-2/5">Message</th>
                                <th className="border-b-2 border-blue-100 bg-slate-100 px-4 py-4 font-semibold text-base text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map(msg => (
                                <tr
                                    key={msg.id}
                                    className="transition-colors duration-200 hover:bg-slate-50 cursor-pointer"
                                >
                                    <td className="px-4 py-3 align-top max-w-[160px] break-words">{msg.name}</td>
                                    <td className="px-4 py-3 align-top max-w-[800px] break-all text-blue-600">{msg.email}</td>
                                    <td className="px-4 py-3 align-top max-w-[320px] break-words whitespace-pre-line text-sm text-slate-800 bg-slate-50 rounded-lg">
                                        <div className="max-h-20 overflow-y-auto pr-1 transition-all duration-300">
                                            {msg.message}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-center align-top">
                                        <div className="flex justify-center gap-2" role="group" aria-label="Message actions">
                                            <button
                                                onClick={() => handleSendEmail({email:msg.email, name:msg.name})}
                                                className="mr-1 px-3 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium text-sm shadow hover:scale-105 active:scale-95 transition-transform duration-150 flex items-center gap-1"
                                                aria-label="Send Email"
                                                type="button"
                                            >
                                                <Mail size={18} className="inline-block" />
                                                <span className="sr-only">Send Email</span>
                                            </button>
                                            <button
                                                onClick={() => handleDeleteMessage(msg.id)}
                                                className="px-3 py-2 rounded-md bg-gradient-to-r from-rose-500 to-pink-400 text-white font-medium text-sm shadow hover:scale-105 active:scale-95 transition-transform duration-150 flex items-center gap-1"
                                                aria-label="Delete"
                                                type="button"
                                            >
                                                <Trash2 size={18} className="inline-block" />
                                                <span className="sr-only">Delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showEmailForm && (
                <div className="fixed inset-0 bg-slate-900/20 flex items-center justify-center z-50 animate-fadeIn">
                    <form
                        action={handleSendMessageWith}
                        className="bg-white p-8 rounded-xl min-w-[320px] max-w-md w-[90vw] shadow-2xl animate-popIn flex flex-col gap-5"
                    >
                        <h3 className="m-0 text-lg font-semibold text-slate-800 text-center">
                            Send Email to <span className="text-blue-600">{selected?.email}</span>
                        </h3>
                        <div>
                            <label className="font-medium mb-1 block">Subject:</label>
                            <input
                                type="text"
                                name='subject'
                                required
                                className="w-full px-3 py-2 rounded-md border border-blue-100 text-base outline-none focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="font-medium mb-1 block">Message:</label>
                            <textarea
                                name='body'
                                required
                                rows={5}
                                className="w-full px-3 py-2 rounded-md border border-blue-100 text-base outline-none resize-vertical focus:border-blue-500 transition"
                            />
                        </div>
                        <div className="flex justify-end gap-3">
                            <button
                                disabled={pending}
                                type="submit"
                                className="px-6 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium text-base shadow hover:scale-105 active:scale-95 transition-transform duration-150"
                            >
                                Send
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowEmailForm(false)}
                                className="px-5 py-2 rounded-md bg-gradient-to-r from-rose-500 to-pink-400 text-white font-medium text-base shadow hover:scale-105 active:scale-95 transition-transform duration-150"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                    <style>{`
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        .animate-fadeIn {
                            animation: fadeIn 0.3s;
                        }
                        @keyframes popIn {
                            0% { transform: scale(0.85) translateY(40px); opacity: 0; }
                            100% { transform: scale(1) translateY(0); opacity: 1; }
                        }
                        .animate-popIn {
                            animation: popIn 0.35s cubic-bezier(.68,-0.55,.27,1.55);
                        }
                    `}</style>
                </div>
            )}
        </div>
    );
}