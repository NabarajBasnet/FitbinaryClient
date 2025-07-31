'use client';

import React, { useState, useCallback, memo } from 'react';
import { ChevronDown, HelpCircle, Shield, Users, Clock, Database, CreditCard } from 'lucide-react';

// Static FAQ data to prevent recreation
const FAQS = [
    {
        id: 1,
        question: "What is Fitbinary and how does it help gym businesses?",
        answer: "Fitbinary is a comprehensive gym management software that helps fitness businesses streamline operations, manage members, handle payments, track attendance, generate receipts, invoice, and more. Our platform is designed to reduce administrative burden so you can focus on growing your business and serving your members.",
        icon: HelpCircle,
        category: "General"
    },
    {
        id: 2,
        question: "Is Fitbinary suitable for my small gym?",
        answer: "Absolutely! Fitbinary is designed to scale with businesses of all sizes. Our Starter plan is perfect for small gyms, while our more advanced plans offer additional features for larger facilities. The platform grows with your business.",
        icon: Users,
        category: "Business"
    },
    {
        id: 3,
        question: "How long does it take to set up Fitbinary?",
        answer: "Most customers are up and running with Fitbinary in just a few days. Our onboarding team will guide you through the setup process, help you import your existing data, and provide training for you and your staff to ensure a smooth transition.",
        icon: Clock,
        category: "Setup"
    },
    {
        id: 4,
        question: "Can I migrate my existing member data to Fitbinary?",
        answer: "Yes! We offer data migration services to help you transition from your current system to Fitbinary. Our team will work with you to ensure all your member information, payment records, and other important data are properly transferred.",
        icon: Database,
        category: "Migration"
    },
    {
        id: 5,
        question: "How secure is payment processing with Fitbinary?",
        answer: "Fitbinary uses industry-leading encryption and security protocols to protect sensitive data. We're PCI-DSS compliant and partner with trusted payment processors to ensure that all transactions are secure and protected.",
        icon: Shield,
        category: "Security"
    },
    {
        id: 6,
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, there are no long-term contracts. You can cancel your subscription at any time, although we require a 30-day notice for cancellation. We're confident you'll love our service, but we don't believe in locking customers into lengthy contracts.",
        icon: CreditCard,
        category: "Billing"
    }
];

// Memoized FAQ item to prevent unnecessary re-renders
const FAQItem = memo(({ faq, isOpen, onToggle }) => {
    const IconComponent = faq.icon;

    // Static class strings for performance
    const baseClasses = "bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden transition-colors duration-200";
    const openClasses = isOpen ? "border-gray-600" : "";
    const buttonClasses = "w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500";
    const contentClasses = isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0";

    return (
        <div className={`${baseClasses} ${openClasses}`}>
            <button
                onClick={onToggle}
                className={buttonClasses}
                aria-expanded={isOpen}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10">
                            <IconComponent className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <span className="text-sm font-medium text-blue-400/70 mb-1 block">
                                {faq.category}
                            </span>
                            <h3 className="text-lg font-semibold text-white pr-8">
                                {faq.question}
                            </h3>
                        </div>
                    </div>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gray-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-4 h-4 text-white/60" />
                    </div>
                </div>
            </button>

            <div className={`overflow-hidden transition-all duration-200 ${contentClasses}`}>
                <div className="px-6 pb-6 pt-0">
                    <div className="pl-14">
                        <div className="h-px bg-gray-700 mb-4" />
                        <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Memoized toggle function
    const toggleFAQ = useCallback((index) => {
        setOpenIndex(prev => prev === index ? null : index);
    }, []);

    return (
        <section id="faq" className="w-full min-h-screen bg-gray-950">
            <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24 lg:px-10">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                            <HelpCircle className="w-4 h-4 text-blue-400 mr-2" />
                            <span className="text-blue-400 text-sm font-medium">Frequently Asked Questions</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                            Got <span className="text-blue-400">Questions</span>?
                        </h2>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Everything you need to know about Fitbinary. Can't find what you're looking for?
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4 mb-16">
                        {FAQS.map((faq, index) => (
                            <FAQItem
                                key={faq.id}
                                faq={faq}
                                isOpen={openIndex === index}
                                onToggle={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-8 bg-gray-800 border border-gray-700 rounded-3xl">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Still have questions?
                                </h3>
                                <p className="text-gray-300 mb-6 max-w-md">
                                    Our team is here to help you get started with Fitbinary
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
                                >
                                    <span>Contact our team</span>
                                    <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;