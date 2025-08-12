import React from "react";
import { Camera, Cloud, Code } from "lucide-react";
import "../styles/FlexibleIntegrationSection.css";

export default function FlexibleIntegrationSection() {
  const integrationFeatures = [
    {
      icon: <Camera className="integration-icon" />,
      title: "Camera Compatibility",
      description:
        "Connect to virtually any IP camera or CCTV system. Compatible with RTSP, RTMP, ONVIF protocols.",
      color: "teal",
    },
    {
      icon: <Cloud className="integration-icon" />,
      title: "Cloud Storage",
      description:
        "Seamlessly connect to AWS S3, Google Cloud Storage, or use your existing surveillance cloud.",
      color: "teal",
    },
    {
      icon: <Code className="integration-icon" />,
      title: "API Access",
      description:
        "Integrate video analytics into your applications with our comprehensive REST API and webhooks.",
      color: "teal",
    },
  ];

  return (
    <section className={`section flexible-integration-section`}>
      <div className="flexible-integration-container">
        <div className="flexible-integration-header">
          <h2 className="flexible-integration-title">Flexible Integration</h2>
          <p className="flexible-integration-description">
            Connect to your existing video sources and integrate with your
            business systems.
          </p>
        </div>

        <div className="flexible-integration-grid">
          {integrationFeatures.map((feature, index) => (
            <div key={index} className="integration-card">
              <div className={`integration-icon-container ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="integration-title">{feature.title}</h3>
              <p className="integration-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
