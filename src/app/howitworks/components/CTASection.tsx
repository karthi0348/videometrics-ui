import React from "react";
import Link from "next/link";
import "../../features/styles/FeaturesCTASection.css";

export default function CTASection() {
  return (
    <section 
      suppressHydrationWarning={true}
      className="cta-section"
    >
      {/* Overlay gradient */}
      <div className="cta-container">
        <h2 className="cta-title animate-fade-in-up">
          Ready to Transform Your Video Data?
        </h2>
        
        <p className="cta-subtitle animate-fade-in-up-delay">
          Join thousands of businesses already using <strong>Videometrics</strong> to gain actionable insights and drive better decisions.
        </p>
        
        <div className="cta-buttons animate-fade-in-up-delay-2">
          <Link href="/contact" className="cta-link">
            <button className="cta-button-primary">
              Schedule Demo
            </button>
          </Link>
   
        </div>

      </div>
    </section>
  );
}