'use client';

import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Shield,
    Award,
    ArrowRight
} from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=61577705351919", label: "Facebook" },
        { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
        { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/fit_binary/", label: "Instagram" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" }
    ];

    const products = [
        { name: "Features", href: "#" },
        { name: "Solutions", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Enterprise", href: "#" },
        { name: "Security", href: "#" }
    ];

    const resources = [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Blog", href: "#" }
    ];

    const company = [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Contact", href: "#" }
    ];

    const legal = [
        { name: "Privacy Policy", href: "/privacypolicy" },
        { name: "License & Agreement", href: "/licenseandaggrement" },
        { name: "Terms of Service", href: "/termsofservice" },
        { name: "Cookie Policy", href: "/cookiepolicy" },
    ];

    return (
        <footer className="w-full bg-gray-950 border-t border-gray-800 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="text-2xl font-bold text-white mb-4">
                            Fitbinary
                        </div>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            The complete gym management solution trusted by fitness businesses worldwide. Streamline operations and grow your business.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                                <span className="text-sm">44600 Kathmandu, Nepal</span>
                            </div>
                            <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                                <a href="mailto:hello@fitbinary.com" className="text-sm hover:text-blue-400 transition-colors duration-200">
                                    hello@fitbinary.com
                                </a>
                            </div>
                            <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                                <a href="tel:+9779763427690" className="text-sm hover:text-blue-400 transition-colors duration-200">
                                    +977 9763427690
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Products</h3>
                        <ul className="space-y-3">
                            {products.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-gray-400 text-sm hover:text-white transition-colors duration-200 group flex items-center"
                                    >
                                        {item.name}
                                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Resources</h3>
                        <ul className="space-y-3">
                            {resources.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-gray-400 text-sm hover:text-white transition-colors duration-200 group flex items-center"
                                    >
                                        {item.name}
                                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Company</h3>
                        <ul className="space-y-3">
                            {company.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-gray-400 text-sm hover:text-white transition-colors duration-200 group flex items-center"
                                    >
                                        {item.name}
                                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Trust & Security */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Security</h3>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-400">
                                <Shield className="w-4 h-4 mr-3 text-green-400" />
                                <span className="text-sm">PCI DSS Compliant</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <Award className="w-4 h-4 mr-3 text-green-400" />
                                <span className="text-sm">99.9% Uptime SLA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-16 p-8 bg-gray-900 rounded-xl border border-gray-800">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                        <p className="text-gray-400 mb-6 text-sm">
                            Get the latest product updates, industry insights, and fitness business tips delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-500 text-sm order-2 lg:order-1">
                            © {new Date().getFullYear()} Fitbinary. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm order-3 lg:order-2">
                            {legal.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-500 hover:text-white transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4 order-1 lg:order-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
