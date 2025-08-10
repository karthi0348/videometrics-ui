import React from 'react';
import { Eye, BarChart, Brain } from 'lucide-react';
import "../styles/CoreCapabilitiesSection.css";

export default function CoreCapabilitiesSection() {
  const coreCapabilities = [
    {
      icon: <Eye className="capability-icon" />,
      title: "Advanced Object Detection",
      description: "Accurately detect and track people, vehicles, and objects in your video footage with state-of-the-art computer vision algorithms.",
      features: [
        "97% detection accuracy",
        "Real-time tracking capabilities",
        "Custom object recognition"
      ],
      color: "teal"
    },
    {
      icon: <BarChart className="capability-icon" />,
      title: "Data Visualizations",
      description: "Transform complex video data into clear, actionable insights with comprehensive suite of visualization tools.",
      features: [
        "Interactive reporting",
        "Real-time charts",
        "Custom dashboards"
      ],
      color: "teal"
    },
    {
      icon: <Brain className="capability-icon" />,
      title: "AI-Powered Insights",
      description: "Let our advanced AI analyze your video data for comprehensive insights and actionable recommendations.",
      features: [
        "Anomaly detection",
        "Predictive analytics",
        "Automated recommendations"
      ],
      color: "teal"
    }
  ];

  return (
    <section className="core-capabilities-section">
      <div className="core-capabilities-container">
        <div className="core-capabilities-header">
          <h2 className="core-capabilities-title">Core Capabilities</h2>
          <p className="core-capabilities-description">
            Our platform offers a comprehensive set of tools to analyze, visualize, and extract 
            insights from your video data.
          </p>
        </div>
        
        <div className="core-capabilities-grid">
          {coreCapabilities.map((capability, index) => (
            <div key={index} className="capability-card">
              <div className={`capability-icon-container ${capability.color}`}>
                {capability.icon}
              </div>
              <h3 className="capability-title">{capability.title}</h3>
              <p className="capability-description">{capability.description}</p>
              <ul className="capability-features">
                {capability.features.map((feature, idx) => (
                  <li key={idx} className="capability-feature">
                    <div className="feature-bullet"></div>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}