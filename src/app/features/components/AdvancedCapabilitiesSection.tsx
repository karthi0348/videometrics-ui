import React from 'react';
import { 
  Users, 
  Eye, 
  Calendar, 
  Shield, 
  BarChart, 
  Database, 
  Lock, 
  Share2,
  Settings,
  TrendingUp
} from 'lucide-react';

export default function AdvancedCapabilitiesSection() {
  const advancedCapabilities = [
    {
      icon: <TrendingUp className="capability-icon" />,
      title: "Demographic Analysis",
      description: "Gain insights into visitor demographics including age groups and gender distribution.",
    },
    {
      icon: <Eye className="capability-icon" />,
      title: "Behavior Patterns",
      description: "Identify common movement patterns and analyze customer behavior in your space.",
    },
    {
      icon: <Calendar className="capability-icon" />,
      title: "Historical Analysis",
      description: "Compare period trends with comprehensive historical data and analytics.",
    },
    {
      icon: <Shield className="capability-icon" />,
      title: "Alerts & Notifications",
      description: "Set up custom triggers and get real-time alerts via email, SMS, or webhooks.",
    },
    {
      icon: <BarChart className="capability-icon" />,
      title: "Custom Reports",
      description: "Generate custom reports tailored to your specific business needs.",
    },
    {
      icon: <Share2 className="capability-icon" />,
      title: "Collaboration Tools",
      description: "Share insights with your team through collaborative dashboards and reports.",
    },
    {
      icon: <Settings className="capability-icon" />,
      title: "Custom Analytics",
      description: "Configure custom metrics and KPIs to track what matters most to your business.",
    },
    {
      icon: <Lock className="capability-icon" />,
      title: "Privacy Controls",
      description: "Maintain control over your data privacy with comprehensive anonymization features.",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the powerful features that are sophisticated and apart from traditional video 
            analytics solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advancedCapabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white text-2xl">
                  {capability.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-teal-700 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}