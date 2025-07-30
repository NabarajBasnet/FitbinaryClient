import React from 'react';
import {
  MapPin,
  CreditCard,
  Settings,
  Mail,
  Building2,
  Users,
  ArrowLeftRight,
  TrendingUp,
  BarChart3,
  Shield
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div
      id='features'
      className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:bg-gray-900/70 hover:border-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200 ease-out cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-200">
          <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const automationFeatures = [
    {
      icon: MapPin,
      title: "Smart Attendance System",
      description: "Eliminate manual check-ins with geofence technology. Members and staff automatically log attendance, saving hours of administrative work daily."
    },
    {
      icon: CreditCard,
      title: "Automated Billing & Invoicing",
      description: "Generate and send professional invoices instantly when services are added. Reduce billing errors and speed up payment collection."
    },
    {
      icon: Mail,
      title: "Payment Reminders via Email",
      description: "Boost membership renewal rates by 40% with automated email reminders. Never lose revenue from forgotten payments again."
    }
  ];

  const revenueFeatures = [
    {
      icon: Settings,
      title: "Dynamic Membership Plans",
      description: "Create unlimited membership tiers, locker packages, and training plans. Adapt pricing instantly to maximize revenue opportunities."
    },
    {
      icon: TrendingUp,
      title: "Revenue Insights",
      description: "Identify your most profitable services and member segments. Make data-driven decisions to grow your gym's bottom line."
    },
    {
      icon: BarChart3,
      title: "Modern Admin Dashboard",
      description: "Get real-time business metrics at a glance. Track member growth, revenue trends, and operational efficiency from one clean interface."
    }
  ];

  const managementFeatures = [
    {
      icon: Building2,
      title: "Multi-Branch Control",
      description: "Manage all locations from a single dashboard. Track performance, staff, and revenue across branches with unified reporting."
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Streamline trainer schedules, roles, and permissions. Reduce administrative overhead while maintaining service quality across teams."
    },
    {
      icon: ArrowLeftRight,
      title: "Real-Time Member Transfers",
      description: "Transfer members between branches instantly with complete data sync. Provide seamless service as your business expands."
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with role-based access control. Built to scale from single gyms to nationwide fitness chains."
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 ease-out">
            Automate Your Gym.
            <span className="text-blue-400 block mt-2">Multiply Your Revenue.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed hover:text-gray-300 transition-colors duration-200">
            Stop wasting time on manual tasks. FitBinary handles the operations so you can focus on growing your fitness business and delivering exceptional member experiences.
          </p>
        </div>

        {/* Automation Features */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-100 transition-colors duration-200">Smart Automation</h3>
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-200">Save 20+ hours per week with intelligent automation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Revenue Features */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-100 transition-colors duration-200">Revenue Optimization</h3>
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-200">Maximize income with data-driven insights and flexible pricing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Management Features */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-100 transition-colors duration-200">Multi-Branch Management</h3>
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-200">Scale your fitness business with centralized control and security</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {managementFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg px-8 py-4 hover:bg-gray-900/70 hover:border-gray-700 hover:scale-105 transition-all duration-200 ease-out">
            <Shield className="w-5 h-5 text-blue-400 hover:text-blue-300 transition-colors duration-200" />
            <span className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
              Trusted by 500+ gym owners • Enterprise-grade security • 99.9% uptime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;