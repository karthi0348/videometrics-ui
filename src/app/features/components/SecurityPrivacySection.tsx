import React from "react";
import { Lock, Shield, UserCheck } from "lucide-react";
import "../styles/SecurityPrivacySection.css";

export default function SecurityPrivacySection() {
  const securityFeatures = [
    {
      icon: <Lock className="security-icon" />,
      title: "End-to-End Encryption",
      description:
        "All data is encrypted in transit and at rest using industry-standard encryption protocols.",
    },
    {
      icon: <Shield className="security-icon" />,
      title: "GDPR & CCPA Compliant",
      description:
        "Our platform is designed to help you comply with global privacy regulations.",
    },
    {
      icon: <UserCheck className="security-icon" />,
      title: "Role-Based Access Control",
      description:
        "Define access permissions to ensure only authorized users can view data and analytics.",
    },
  ];

  return (
    <section className={`section security-privacy-section`}>
      <div className="container">
        <div className="header">
          <h2 className="title">Enterprise-Grade Security & Privacy</h2>
          <p className="subtitle">
            We take security and privacy seriously. VideoMetrics.ai is built
            with enterprise-grade security features and privacy controls to
            protect your data.
          </p>
        </div>

        <div className="security-features-grid">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="security-feature-card">
              <div className="icon-container">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
