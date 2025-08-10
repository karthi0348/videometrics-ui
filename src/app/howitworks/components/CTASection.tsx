import React from "react";
import '@/app/features/styles/FeaturesCTASection.css';

export default function CTASection() {
  return (
    <section 
      suppressHydrationWarning={true}
      className="cta-section"
    >
      <div className="container">
        <h2 className="title">
          Ready to Transform Your Video Data?
        </h2>
        
        <p className="subtitle">
          Join thousands of businesses already using VideoMetrics.ai to gain
          actionable insights and drive better decisions.
        </p>
        
        <div className="cta-buttons">
          <button className="demo-button">
            Schedule Demo
          </button>
         
        </div>
        
     
      </div>
    </section>
  );
}