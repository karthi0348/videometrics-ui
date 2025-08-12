import React from "react";
import "../styles/FeaturesJourneySection.css";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface FeaturesJourneySectionProps {
  className?: string;
  title?: string;
  description?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: "Smart Video Analytics",
    description: "Powerful AI-driven analysis of video content with advanced object detection, people counting, and object tracking.",
    icon: (
      <svg className="feature-icon__svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Real-time Insights",
    description: "Monitor metrics in real-time and access comprehensive dashboards and reports.",
    icon: (
      <svg className="feature-icon__svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Automated Alerts",
    description: "Set up custom alerts for specific events and receive instant notifications via email, SMS, or webhooks.",
    icon: (
      <svg className="feature-icon__svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-5 5v-5zM4 17h9a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Multi-user Access",
    description: "Create team accounts with different permission levels for collaborative video analytics.",
    icon: (
      <svg className="feature-icon__svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Interactive Dashboards",
    description: "Customize your analytics dashboard with drag-and-drop functionality to focus on what matters most.",
    icon: (
      <svg className="feature-icon__svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    title: "Flexible Integration",
    description: "Connect with your existing software and hardware with comprehensive API and plug-ins.",
    icon: (
      <svg className="feature-icon__svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
];

const FeaturesJourneySection: React.FC<FeaturesJourneySectionProps> = ({
  className = "",
  title = "Your Journey to Video Analytics Success",
  description = "Our guided onboarding process ensures you get the most out of VideoMetrics.ai from day one.",
  features = defaultFeatures
}) => {
  return (
<section className={`section features-section ${className}`}>
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            {title}
          </h2>
          <p className="features-description">
            {description}
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${feature.className || ''}`}
              onClick={feature.onClick}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              
              <h3 className="feature-title">
                {feature.title}
              </h3>
              
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesJourneySection;