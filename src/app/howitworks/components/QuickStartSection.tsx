import React from "react";
import '../styles/QuickStart.css';

const steps = [
  { 
    number: 1, 
    title: "Choose Your Template", 
    description: "Select from pre-built analytics templates or create a custom configuration tailored to your needs."
  },
  { 
    number: 2, 
    title: "Connect Video Source", 
    description: "Link your cloud storage, IP cameras, or upload video files directly to our secure platform."
  },
  { 
    number: 3, 
    title: "Configure Analytics", 
    description: "Set up your metrics, define zones of interest, and configure alerts for the data that matters most."
  },
  { 
    number: 4, 
    title: "Start Analyzing", 
    description: "Begin processing your video data and gain valuable insights through our intuitive dashboard."
  },
];

export default function QuickStartSection() {
  return (
    <section className="section quick-start-section">
      <div className="container">
        <div className="header">
          <h2 className="quicktitle">
            Get Started in Minutes
          </h2>
          <p className="subquicktitle">
            Setting up your first video analysis is simple. Our guided onboarding process takes you through these steps:
          </p>
        </div>
        
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">
                {step.number}
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}