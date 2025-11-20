import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface HireMeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const HireMeModal = ({ isOpen, onClose }: HireMeModalProps) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        projectType: 'Web Development',
        budget: 'Less than $1k',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            setFormState({
                name: '',
                email: '',
                projectType: 'Web Development',
                budget: 'Less than $1k',
                message: ''
            });
        }, 2000);
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none p-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#0a0a0a] border border-white/10 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                                <h2 className="text-2xl font-bold text-white">Let's Work Together</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6">
                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500"
                                        >
                                            <CheckCircle size={32} />
                                        </motion.div>
                                        <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                                        <p className="text-gray-400">I'll get back to you as soon as possible.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400">Project Type</label>
                                                <select
                                                    name="projectType"
                                                    value={formState.projectType}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                                                >
                                                    <option className="bg-gray-900">Web Development</option>
                                                    <option className="bg-gray-900">Mobile App</option>
                                                    <option className="bg-gray-900">UI/UX Design</option>
                                                    <option className="bg-gray-900">AI Integration</option>
                                                    <option className="bg-gray-900">Other</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400">Budget Range</label>
                                                <select
                                                    name="budget"
                                                    value={formState.budget}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                                                >
                                                    <option className="bg-gray-900">Less than $1k</option>
                                                    <option className="bg-gray-900">$1k - $5k</option>
                                                    <option className="bg-gray-900">$5k - $10k</option>
                                                    <option className="bg-gray-900">$10k+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-400">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                value={formState.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                                        >
                                            <span>Send Request</span>
                                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default HireMeModal;
