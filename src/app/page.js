"use client";

import "./globals.css";
import "./styles/landing.css";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  MapPin,
  User,
  Clock,
  Activity,
  Settings,
  BarChart3,
  Target
} from "lucide-react";
import FeaturesSection from "@/components/Website/FeaturesSection/FeaturesSection";
import TrustedBySection from "@/components/Website/TrustedBySection/TrustedBySection";
import PricingSection from "@/components/Website/PricingSection/PricingSection";
import CTASection from "@/components/Website/CTASection/CtaSection";
import DemoSection from "@/components/Website/DemoSection/DemoSection";
import AboutSection from "@/components/Website/AboutSection/AboutSection";
import FAQSection from "@/components/Website/FAQSection/FaqSection";
import ContactSection from "@/components/Website/ContactSection/ContactSection";
import BackToTop from "@/components/Website/BackToTop/BackToTop";
import CookieConsent from "@/components/Website/CookiesConsent/CookiesConsent";
import ClientTestimonals from "@/components/Website/Testimonal/Testimonal";

// Custom Dashboard Components
const UserDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-96">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Member Portal</h3>
            <p className="text-sm text-gray-600">Welcome back, Sarah</p>
          </div>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-6 pt-4">
        <div className="flex space-x-6 border-b border-gray-200">
          {['overview', 'classes', 'progress'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`pb-3 px-1 text-sm font-medium capitalize transition-colors ${selectedTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
        {selectedTab === 'overview' && (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Membership</p>
                  <p className="text-lg font-semibold text-gray-900">Premium</p>
                </div>
                <Target className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-lg font-semibold text-gray-900">12 Visits</p>
                </div>
                <Activity className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">Monthly Goal Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-purple-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
              <p className="text-xs text-gray-600 mt-1">15/20 visits completed</p>
            </div>
          </div>
        )}

        {selectedTab === 'classes' && (
          <div className="space-y-3">
            {[
              { name: "Morning Yoga", time: "8:00 AM", location: "Studio A" },
              { name: "HIIT Training", time: "6:00 PM", location: "Gym Floor" },
              { name: "Spin Class", time: "7:30 PM", location: "Spin Room" }
            ].map((cls, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <p className="font-medium text-gray-900">{cls.name}</p>
                  <p className="text-sm text-gray-600">{cls.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{cls.time}</p>
                  <p className="text-xs text-green-600">Available</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selectedTab === 'progress' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">28</p>
                <p className="text-sm text-gray-600">Days Active</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-orange-600">840</p>
                <p className="text-sm text-gray-600">Calories Burned</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TenantDashboard = () => {
  const [activeMetric, setActiveMetric] = useState('revenue');

  const metrics = [
    { id: 'revenue', label: 'Revenue', value: '$24,500', change: '+12%', icon: DollarSign, color: 'text-green-600' },
    { id: 'members', label: 'Active Members', value: '1,247', change: '+8%', icon: Users, color: 'text-blue-600' },
    { id: 'locations', label: 'Locations', value: '8', change: '+2', icon: MapPin, color: 'text-purple-600' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-96">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Admin Dashboard</h3>
            <p className="text-sm text-gray-600">FitChain Enterprise</p>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-gray-400" />
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="p-6 flex-1">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.id}
              className={`p-3 rounded-lg border transition-all cursor-pointer ${activeMetric === metric.id
                ? 'border-blue-200 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
                }`}
              onClick={() => setActiveMetric(metric.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <metric.icon className={`w-4 h-4 ${metric.color}`} />
                <span className="text-xs text-green-600 font-medium">{metric.change}</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{metric.value}</p>
              <p className="text-xs text-gray-600">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="bg-gray-50 rounded-lg p-4 h-24 flex items-center justify-center relative overflow-hidden mb-4">
          <div className="absolute inset-0 flex items-end justify-around p-4">
            {[65, 45, 80, 60, 95, 70, 85].map((height, idx) => (
              <motion.div
                key={idx}
                className="bg-blue-500 rounded-t-sm opacity-60"
                style={{ width: '8px' }}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: idx * 0.1 + 0.5, duration: 0.5 }}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            className="flex items-center justify-center space-x-2 p-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule</span>
          </motion.button>
          <motion.button
            className="flex items-center justify-center space-x-2 p-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Reports</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="w-full">
      <section
        id="home"
        className="w-full min-h-screen bg-gray-950 relative flex items-center overflow-hidden"
      >
        {/* Optimized Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 py-20 z-10 relative">
          <div className="text-center w-full mx-auto">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Powering Multi-Location Gyms
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              style={{ fontFamily: "Oswald-Bold" }}
              className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            >
              Enterprise Gym Management{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Platform
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-md font-medium text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              Multi-tenant SaaS solution built for modern fitness enterprises.
              Manage unlimited branches, secure member data, and scale your gym
              network with lightning-fast performance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <motion.a
                href="#demo"
                className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Try For Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="#features"
                className="bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/20 hover:border-white/30 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See Features
              </motion.a>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              {[
                { icon: Zap, title: "Cloud-Native Speed", desc: "Sub-second response times" },
                { icon: Shield, title: "Enterprise Security", desc: "SOC 2 & GDPR compliant" },
                { icon: Users, title: "Multi-Tenant Ready", desc: "Unlimited branch support" }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Platform Preview Section */}
          <motion.div
            className="w-full mx-auto mt-32 mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Experience the{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Platform
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how our enterprise solution transforms gym management across
                multiple locations
              </p>
            </div>

            {/* User Dashboard Section */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-blue-300 text-sm font-medium">
                    Member Experience
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-sky-100 bg-clip-text text-transparent">
                  Intuitive Member Portal
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Empower your members with a sleek, modern interface that makes
                  booking classes, tracking progress, and managing memberships
                  effortless across all your locations.
                </p>
                <div className="space-y-3">
                  {[
                    "Real-time class availability",
                    "Cross-location booking",
                    "Progress tracking & analytics"
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + idx * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl" />
                <div className="relative transform hover:scale-105 transition-transform duration-300">
                  <UserDashboard />
                </div>
              </motion.div>
            </motion.div>

            {/* Tenant Dashboard Section */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="relative lg:order-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                <div className="relative transform hover:scale-105 transition-transform duration-300">
                  <TenantDashboard />
                </div>
              </motion.div>
              <div className="space-y-6 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-cyan-300 text-sm font-medium">
                    Enterprise Control
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-sky-300 to-white bg-clip-text text-transparent">
                  Powerful Admin Dashboard
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Take control of your entire gym network with comprehensive
                  analytics, staff management, and operational insights that
                  scale with your business growth.
                </p>
                <div className="space-y-3">
                  {[
                    "Multi-location analytics",
                    "Staff & resource management",
                    "Revenue optimization tools"
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + idx * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <motion.div
              className="flex flex-col items-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
            <span className="text-sm font-medium">Scroll to explore</span>
          </motion.div>
        </div>
      </section>

      <FeaturesSection />
      <ClientTestimonals />
      <PricingSection />
      <CTASection />
      <DemoSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <CookieConsent />
      <BackToTop />
    </div>
  );
};

export default HeroSection;