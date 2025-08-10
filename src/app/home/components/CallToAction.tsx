"use client";

import React from "react";
import "../styles/CallToAction.css";



const CallToAction: React.FC = () => {
  const handleScheduleDemo = () => {
    console.log("Schedule demo clicked");
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* Left Section */}
        <div className="cta-left-section">
          <h2 className="cta-heading">
            Ready to<br />
            Transform Your Video Data?
          </h2>
          <p className="cta-paragraph">
            Make smarter, faster decisions with AI-powered video analytics. Whether 
            you're in retail, manufacturing, agriculture, or events—<strong>VideoMetrics.ai</strong> helps 
            you unlock hidden insights, cut costs, and scale confidently.
          </p>

          <button
            onClick={handleScheduleDemo}
            type="button"
            className="cta-button"
          >
            Schedule Demo
          </button>
        </div>

        <div className="cta-icons-section">
          {/* Bar Chart Icon */}
          <div className="bar-chart-icon">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
          </div>
          
          {/* Pie Chart Icon */}
          <div className="pie-chart-icon">
            <svg viewBox="0 0 100 100" className="pie-svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#14B8A6" strokeWidth="10" 
                      strokeDasharray="141.37 141.37" strokeDashoffset="35.34" transform="rotate(-90 50 50)"/>
              <circle cx="50" cy="50" r="45" fill="none" stroke="#0D9488" strokeWidth="10" 
                      strokeDasharray="70.69 211.11" strokeDashoffset="-106.03" transform="rotate(-90 50 50)"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;