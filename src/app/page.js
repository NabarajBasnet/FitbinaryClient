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
  Target,
  Home,
  UserCheck,
  CreditCard,
  Dumbbell,
  Bell,
  LogOut,
  Search,
  Filter,
  MoreVertical,
  Plus,
  CheckCircle,
  AlertTriangle,
  Database,
  Cpu,
  Wifi,
  Server,
  Building,
  FileText,
  PieChart
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

// Enhanced User Dashboard Component
const UserDashboard = () => {
  const [selectedPage, setSelectedPage] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'attendance', label: 'Attendance', icon: UserCheck },
    { id: 'membership', label: 'Membership', icon: CreditCard },
    { id: 'classes', label: 'Classes', icon: Dumbbell },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: '3' }
  ];

  return (
    <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden h-[500px] flex">
      {/* Sidebar */}
      <div className="w-44 bg-slate-800 border-r border-slate-700 flex flex-col">
        {/* Logo Area */}
        <div className="px-3 py-8 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FB</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">FIT BINARY</h3>
              <p className="text-slate-400 text-xs">Kathmandu</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-2">
          <div className="space-y-1">
            <p className="text-slate-500 text-xs uppercase tracking-wide font-medium px-3 mb-3">MAIN</p>
            {sidebarItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedPage(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${selectedPage === item.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full mx-1">
                    {item.badge}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-slate-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">Sarah Johnson</p>
              <p className="text-slate-400 text-xs">Premium Member</p>
            </div>
            <LogOut className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-lg font-semibold">Good Evening, Sarah</h2>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-slate-400 text-xs">07/31/2025</div>
              <div className="text-slate-400 text-xs">10:49:53 PM</div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">SJ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {selectedPage === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Target className="w-5 h-5" />
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Active</span>
                  </div>
                  <p className="text-xl font-bold">Premium</p>
                  <p className="text-xs opacity-90">Membership Status</p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="w-5 h-5" />
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">+18%</span>
                  </div>
                  <p className="text-xl font-bold">15</p>
                  <p className="text-xs opacity-90">This Month Visits</p>
                </motion.div>
              </div>

              {/* Progress Section */}
              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-4">Monthly Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">Workout Goal</span>
                      <span className="text-white">15/20 sessions</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-400">840</p>
                      <p className="text-xs text-slate-400">Calories Burned</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-cyan-400">28</p>
                      <p className="text-xs text-slate-400">Active Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedPage === 'classes' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Upcoming Classes</h3>
                <Plus className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
              </div>
              {[
                { name: "Morning Yoga", time: "8:00 AM", location: "Studio A", status: "booked" },
                { name: "HIIT Training", time: "6:00 PM", location: "Gym Floor", status: "available" },
                { name: "Spin Class", time: "7:30 PM", location: "Spin Room", status: "available" }
              ].map((cls, idx) => (
                <motion.div
                  key={idx}
                  className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{cls.name}</p>
                      <p className="text-slate-400 text-sm">{cls.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm font-medium">{cls.time}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${cls.status === 'booked'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                        }`}>
                        {cls.status === 'booked' ? 'Booked' : 'Available'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced Admin Dashboard Component
const TenantDashboard = () => {
  const [selectedPage, setSelectedPage] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Admin Dashboard', icon: Home, subtitle: 'System Overview & Analytics' },
    { id: 'tenants', label: 'Tenant Management', icon: Building, subtitle: 'Organizations & Clients' },
    { id: 'orders', label: 'Order Management', icon: FileText, subtitle: 'Order Management' },
    { id: 'subscriptions', label: 'Subscription Management', icon: CreditCard, subtitle: 'Plans & Billing Control' },
    { id: 'demos', label: 'Demo Management', icon: PieChart, subtitle: 'Handle Demos' },
    { id: 'contacts', label: 'Contact Management', icon: Users, subtitle: 'Handle Contacts' }
  ];

  const systemAlerts = [
    { type: 'error', count: 2 }
  ];

  const topPerformingGyms = [
    { name: 'FitLife Premium', locations: 12, members: '2,847', revenue: '$128,500', growth: '+12.5%', plan: 'Enterprise', logo: '🏃' },
    { name: 'PowerHouse Gyms', locations: 8, members: '1,923', revenue: '$89,200', growth: '+8.3%', plan: 'Professional', logo: '💪' },
    { name: 'Elite Fitness', locations: 15, members: '3,421', revenue: '$156,800', growth: '-2.1%', plan: 'Enterprise', logo: '⚡' },
    { name: 'Community Wellness', locations: 5, members: '892', revenue: '$42,100', growth: '+15.7%', plan: 'Basic', logo: '⭐' }
  ];

  const systemHealthMetrics = [
    { name: 'API Gateway', status: 'operational', uptime: '99.98%' },
    { name: 'Database Cluster', status: 'operational', uptime: '99.95%' },
    { name: 'Payment Processing', status: 'operational', uptime: '99.99%' },
    { name: 'CDN & Assets', status: 'degraded', uptime: '98.12%' },
    { name: 'Analytics Engine', status: 'operational', uptime: '99.87%' },
    { name: 'Notification Service', status: 'maintenance', uptime: '95.23%' }
  ];

  return (
    <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden h-[500px] flex">
      {/* Sidebar */}
      <div className="w-80 bg-slate-800 border-r border-slate-700 flex flex-col">
        {/* Logo Area */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">NB</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Nabaraj Basnet</h3>
              <p className="text-slate-400 text-xs">🔑 Root User</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedPage(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${selectedPage === item.id
                  ? 'bg-slate-700 text-white border-l-4 border-blue-500'
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start space-x-3">
                  <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* System Controls */}
          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-slate-500 text-xs uppercase tracking-wide font-medium px-4 mb-3">SYSTEM CONTROLS</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between px-4 py-2 text-sm">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-slate-300">System Alerts</span>
                </div>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secure Logout */}
        <div className="p-4 border-t border-slate-700">
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-all">
            <LogOut className="w-4 h-4" />
            <div className="text-left">
              <p className="text-sm font-medium">Secure Logout</p>
              <p className="text-xs text-slate-500">End admin session</p>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">Login successful</span>
              </div>
              <div className="flex items-center space-x-4">
                <select className="bg-slate-700 text-white text-sm px-3 py-1 rounded border border-slate-600 focus:border-blue-500 outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>07/31/2025</span>
                <Clock className="w-4 h-4 ml-2" />
                <span>10:49:53 PM</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">NB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {selectedPage === 'dashboard' && (
            <div className="space-y-6">
              {/* Main Metrics */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'Monthly Recurring Revenue', value: '$847,250', change: '+18.2%', icon: DollarSign, color: 'text-green-400' },
                  { label: 'Active Gym Partners', value: '1,247', change: '+24', icon: Building, color: 'text-orange-400' },
                  { label: 'Total Gym Members', value: '186,492', change: '+12.8%', icon: Users, color: 'text-red-400' },
                  { label: 'Platform Uptime', value: '99.97%', change: '+0.05%', icon: Zap, color: 'text-purple-400' }
                ].map((metric, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-slate-800 rounded-xl p-4 border border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${idx === 0 ? 'bg-red-500/20' :
                        idx === 1 ? 'bg-orange-500/20' :
                          idx === 2 ? 'bg-red-500/20' : 'bg-purple-500/20'
                        }`}>
                        <metric.icon className={`w-5 h-5 ${metric.color}`} />
                      </div>
                      <span className="text-green-400 text-sm font-medium">{metric.change}</span>
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
                    <p className="text-slate-400 text-sm">{metric.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-2 gap-6">
                {/* Top Performing Gyms */}
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Top Performing Gym Chains</h3>
                    <button className="text-red-400 text-sm hover:text-red-300">View All</button>
                  </div>
                  <div className="space-y-3">
                    {topPerformingGyms.map((gym, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-lg">
                            {gym.logo}
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">{gym.name}</p>
                            <div className="flex items-center space-x-4 text-xs text-slate-400">
                              <span>📍 {gym.locations} locations</span>
                              <span>👥 {gym.members} members</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">{gym.revenue}</p>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded ${gym.growth.startsWith('+') ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10'
                              }`}>
                              {gym.growth}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${gym.plan === 'Enterprise' ? 'text-yellow-400 bg-yellow-500/10' :
                              gym.plan === 'Professional' ? 'text-blue-400 bg-blue-500/10' :
                                'text-gray-400 bg-gray-500/10'
                              }`}>
                              {gym.plan}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* System Health */}
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">System Health</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm">Operational</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {systemHealthMetrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${metric.status === 'operational' ? 'bg-green-400' :
                            metric.status === 'degraded' ? 'bg-yellow-400' :
                              'bg-blue-400'
                            }`}></div>
                          <span className="text-white text-sm">{metric.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-white text-sm font-medium">{metric.uptime}</span>
                          <p className="text-xs text-slate-400 capitalize">{metric.status}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-400">99.2%</p>
                      <p className="text-slate-400 text-sm">Overall Health</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
