import React from 'react';
import { 
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
import '../styles/AdvancedCapabilitiesSection.css';

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
    <section className="section advanced-capabilities-section">
      <div className="container">
        <div className="header">
          <h2 className="sectitle">Advanced Capabilities</h2>
          <p className="subsectitle">
            Explore the powerful features that are sophisticated and apart from traditional video 
            analytics solutions.
          </p>
        </div>
        
        <div className="capabilities-grid">
          {advancedCapabilities.map((capability, index) => (
            <div 
              key={index} 
              className="capability-card"
            >
              <div className="icon-container">
                {capability.icon}
              </div>
              <h3 className="capability-title">
                {capability.title}
              </h3>
              <p className="capability-description">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}