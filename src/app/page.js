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
  PieChart,
  Mail,
  Lock,
  Globe
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
      <div className="w-44 hidden md:flex bg-slate-800 border-r border-slate-700 flex flex-col">
        {/* Logo Area */}
        <div className="p-3.5 border-b border-slate-700">
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

const TenantDashboard = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white rounded-2xl">
      {/* Top Navigation Bar */}
      <div className="bg-gray-800 border-b border-gray-700 rounded-t-2xl">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-white font-semibold">Fitbinary</span>
            </div>
            <span className="text-gray-400 hidden md:flex">|</span>
            <span className="text-gray-300 hidden md:flex">All-in-One Gym Management</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <Settings size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">JD</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-white">John Doe</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 hidden md:flex bg-gray-800 min-h-screen border-r border-gray-700 rounded-b-2xl">
          <div className="p-4">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center relative">
                  <span className="text-white font-bold text-lg">JD</span>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
                </div>
                <div>
                  <div className="text-white font-semibold">John Doe</div>
                  <div className="text-blue-400 text-sm">Good Evening</div>
                </div>
              </div>

              <div className="text-sm text-gray-400 mb-2">
                <User size={16} className="inline mr-2" />
                johndoe@gmail.com
              </div>
              <div className="text-sm text-gray-400">
                <MapPin size={16} className="inline mr-2" />
                Kathmandu
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">GENERAL</div>

              <div className="bg-gray-700 rounded-lg p-3 border-l-4 border-blue-500">
                <div className="flex items-center space-x-3">
                  <Home size={18} className="text-blue-400" />
                  <div>
                    <div className="text-white font-medium">Dashboard</div>
                    <div className="text-xs text-gray-400">Overview & Analytics</div>
                  </div>
                </div>
              </div>

              <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">GD</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Gym Dashboard</div>
                    <div className="text-xs text-gray-400">Access Control</div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 uppercase tracking-wide mb-3 mt-6">MANAGEMENT</div>

              <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-gray-400" />
                  <div>
                    <div className="text-white font-medium">Branches</div>
                    <div className="text-xs text-gray-400">Manage Locations</div>
                  </div>
                </div>
              </div>

              <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Users size={18} className="text-gray-400" />
                  <div>
                    <div className="text-white font-medium">Users</div>
                    <div className="text-xs text-gray-400">Manage Team</div>
                  </div>
                </div>
              </div>

              <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Lock size={18} className="text-gray-400" />
                  <div>
                    <div className="text-white font-medium">Lockers</div>
                    <div className="text-xs text-gray-400">Manage Storage</div>
                  </div>
                </div>
              </div>

              <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <CreditCard size={18} className="text-gray-400" />
                  <div>
                    <div className="text-white font-medium">Plans</div>
                    <div className="text-xs text-gray-400">Membership Plans</div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 uppercase tracking-wide mb-3 mt-6">BILLING</div>

              <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <User size={18} className="text-gray-400" />
                  <div>
                    <div className="text-white">John</div>
                    <div className="text-xs text-gray-400">johndoe@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <div className="flex justify-between bg-gray-700 rounded-lg p-3 text-sm">
                <span className="text-green-400">Account</span>
                <span className="text-green-400">OnSubscription</span>
              </div>
              <div className="flex justify-between bg-gray-700 rounded-lg p-3 text-sm">
                <span className="text-blue-400">Subscription</span>
                <span className="text-blue-400">Active</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <button className="w-full bg-gray-700 hover:bg-gray-600 rounded-lg p-3 flex items-center justify-center space-x-2">
                <Settings size={16} />
                <span>Edit Profile</span>
              </button>
              <button className="w-full bg-red-600 hover:bg-red-700 rounded-lg p-3 flex items-center justify-center space-x-2">
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
            <div className="text-gray-400 text-sm">
              <span className="text-blue-400">Portal</span>
              <span className="mx-2">›</span>
              <span className="text-blue-400">Client Area</span>
              <span className="mx-2">›</span>
              <span className="text-white">Dashboard</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
                <div className="text-green-400 text-sm font-medium">+12%</div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">20</div>
              <div className="text-gray-300 font-medium">Staff Members</div>
              <div className="text-gray-500 text-sm">Active employees</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Building size={24} className="text-white" />
                </div>
                <div className="text-green-400 text-sm font-medium">+5%</div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">5</div>
              <div className="text-gray-300 font-medium">Branches</div>
              <div className="text-gray-500 text-sm">Business locations</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <UserCheck size={24} className="text-white" />
                </div>
                <div className="text-green-400 text-sm font-medium">+8%</div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">10</div>
              <div className="text-gray-300 font-medium">System Users</div>
              <div className="text-gray-500 text-sm">Platform access</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div className="text-green-400 text-sm font-medium">+23%</div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">1500</div>
              <div className="text-gray-300 font-medium">Members</div>
              <div className="text-gray-500 text-sm">Total members</div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Organization Details */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Building size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Organization Details</h3>
                  <p className="text-gray-400 text-sm">Your business information</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building size={16} className="text-gray-400" />
                  <div>
                    <div className="text-gray-400 text-sm">Business Name</div>
                    <div className="text-white font-medium">Gold Fitness</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <div>
                    <div className="text-gray-400 text-sm">Business Type</div>
                    <div className="text-white font-medium">Gym</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-gray-400" />
                  <div>
                    <div className="text-gray-400 text-sm">Business Email</div>
                    <div className="text-white font-medium">goldfitness@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Globe size={16} className="text-gray-400" />
                  <div>
                    <div className="text-gray-400 text-sm">Website</div>
                    <div className="text-white font-medium">https://fitbinarygym.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Subscription */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Current Subscription</h3>
                  <p className="text-gray-400 text-sm">Your active service plan and details</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-white text-2xl font-bold">Growth</div>
                    <div className="text-blue-100">Active</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-xl font-bold">NPR 2000 / Mo</div>
                    <div className="text-blue-100 text-sm">Price</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-blue-100">Start Date</div>
                    <div className="text-white font-medium">5/7/2025</div>
                  </div>
                  <div>
                    <div className="text-blue-100">End Date</div>
                    <div className="text-white font-medium">5/7/2026</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center space-x-2">
                  <Calendar size={16} className="text-blue-100" />
                  <div className="text-white font-medium">380 days left</div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Included Features</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">QR Code Attendance</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Locker Management</span>
                </div>
              </div>
            </div>
          </div>
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
              className="gap-12"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
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
              <motion.div
                className="relative lg:order-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                <div className="relative transform hover:scale-105 transition-transform duration-300 mt-12">
                  <TenantDashboard />
                </div>
              </motion.div>
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
