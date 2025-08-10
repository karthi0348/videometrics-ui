
import React from "react";
import "../styles/StepsSection.css";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StepsSectionProps {
  className?: string;
  heading?: string;
  subheading?: string;
  steps?: Step[];
  showNumbers?: boolean;
  animationsEnabled?: boolean;
  testId?: string;
}

const defaultSteps: Step[] = [
  {
    number: 1,
    title: "Connect Your Video",
    description:
      "Easily link your cloud storage, CCTV streams, or upload video files directly. We support all major formats and protocols.",
    icon: (
      <div className="step-icon-container">
        <svg viewBox="0 0 100 80" className="step-icon-svg">

          <ellipse cx="70" cy="25" rx="20" ry="12" fill="#e0f2fe" stroke="#0891b2" strokeWidth="2"/>
          <ellipse cx="30" cy="35" rx="25" ry="15" fill="#e0f2fe" stroke="#0891b2" strokeWidth="2"/>
          
          <rect x="20" y="50" width="25" height="15" rx="2" fill="#14b8a6" stroke="#0d9488" strokeWidth="1"/>
          <circle cx="50" cy="58" r="8" fill="#14b8a6" stroke="#0d9488" strokeWidth="1"/>
          <circle cx="50" cy="58" r="4" fill="white"/>
          
          <path d="M35 50 Q45 40 60 30" stroke="#14b8a6" strokeWidth="2" strokeDasharray="3,3" fill="none"/>
          <path d="M58 58 Q65 45 70 35" stroke="#14b8a6" strokeWidth="2" strokeDasharray="3,3" fill="none"/>
        </svg>
      </div>
    )
  },
  {
    number: 2,
    title: "Configure Analysis",
    description:
      "Choose a template or define custom metrics relevant to your goals. Set up zones, tracking parameters, and alerts.",
    icon: (
      <div className="step-dashboard-container">
        <div className="step-dashboard-screen">
          <div className="step-dashboard-content">
            <div className="dashboard-header"></div>
            <div className="dashboard-line-1"></div>
            <div className="dashboard-line-2"></div>
            <div className="dashboard-grid">
              <div className="dashboard-block-1"></div>
              <div className="dashboard-block-2"></div>
            </div>
            <div className="dashboard-footer-1"></div>
            <div className="dashboard-footer-2"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    number: 3,
    title: "Visualize & Act",
    description:
      "Access real-time data, historical trends, and alerts on your dashboard to make informed decisions that drive business growth.",
    icon: (
      <div className="step-chart-container">
        <div className="chart-title">People Count</div>
        <svg viewBox="0 0 60 30" className="chart-svg">
          <polyline
            points="5,25 15,20 25,15 35,18 45,12 55,8"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
          />
          <polyline
            points="5,28 15,22 25,20 35,25 45,18 55,15"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="2,2"
          />
          {/* Data points */}
          <circle cx="25" cy="15" r="2" fill="#f97316"/>
          <circle cx="35" cy="18" r="2" fill="#f97316"/>
          <circle cx="45" cy="12" r="2" fill="#f97316"/>
        </svg>
        <div className="chart-subtitle">vs. people flow</div>
      </div>
    )
  },
];

const StepsSection: React.FC<StepsSectionProps> = ({
  className = "",
  heading = "Get Insights in 3 Simple Steps",
  subheading = "Our streamlined process gets you from setup to actionable insights in minutes, not days.",
  steps = defaultSteps,
  showNumbers = true,
  animationsEnabled = true,
  testId = "steps-section"
}) => {
  return (
    <section 
      className={`steps-section ${!animationsEnabled ? 'steps-section--no-animations' : ''} ${className}`}
      data-testid={testId}
    >
      <div className="steps-container">
        <div className="steps-header">
          <h2 className="steps-heading">{heading}</h2>
          <p className="steps-subheading">{subheading}</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="step-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {showNumbers && (
                <div className="step-number">
                  {step.number}
                </div>
              )}
              
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              
              <div className="step-icon">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;