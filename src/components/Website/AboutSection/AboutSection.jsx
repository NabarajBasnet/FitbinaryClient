"use client";

import { useState, useCallback, memo } from 'react';
import { Award, Target, Users, Zap } from 'lucide-react';

// Memoized value card to prevent re-renders
const ValueCard = memo(({ icon, title, description }) => (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-200">
        <div className="flex items-start">
            <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-white text-lg mb-2">{title}</h4>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    </div>
));

// Static values array to prevent recreation
const VALUES = [
    {
        id: 1,
        icon: <Users className="text-blue-500" size={24} />,
        title: "Customer Focus",
        description: "We build solutions that address real problems faced by gym owners and fitness professionals."
    },
    {
        id: 2,
        icon: <Zap className="text-blue-500" size={24} />,
        title: "Innovation",
        description: "We're constantly improving our platform with the latest technology and industry best practices."
    },
    {
        id: 3,
        icon: <Award className="text-blue-500" size={24} />,
        title: "Excellence",
        description: "We strive for excellence in every aspect of our product and customer service."
    },
    {
        id: 4,
        icon: <Target className="text-blue-500" size={24} />,
        title: "Results-Driven",
        description: "We measure our success by the results we deliver to our customers and their businesses."
    }
];

const AboutSection = () => {
    return (
        <section id="about" className="w-full py-28 bg-gray-950">
            <div className="w-full mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our <span className="text-blue-400">Story</span> and Vision
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We're passionate about transforming how fitness businesses operate and grow.
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src="https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Our Team"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-blue-600 p-5 rounded-xl border border-gray-700">
                            <p className="font-bold text-white text-lg">Founded in 2024</p>
                            <p className="text-sm text-blue-100">Helping gyms grow since day one</p>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-white">
                            From Gym Owners, <span className="text-blue-400">For Gym Owners</span>
                        </h3>

                        <p className="text-gray-300 mb-6 text-md font-medium">
                            Fitbinary was founded by a team of fitness enthusiasts and technology experts who
                            saw firsthand the challenges gym owners face with outdated management systems.
                        </p>

                        <p className="text-gray-300 mb-8 text-md font-medium">
                            Our mission is to empower fitness businesses with technology that's powerful yet
                            simple to use, allowing them to focus on what they do best: helping their members
                            achieve their fitness goals.
                        </p>

                        <div>
                            <h3 className="text-3xl font-bold mb-8 text-white">Our Core Values</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {VALUES.map((value) => (
                                    <ValueCard
                                        key={value.id}
                                        icon={value.icon}
                                        title={value.title}
                                        description={value.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;