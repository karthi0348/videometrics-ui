import React from "react";
import "../styles/FeaturesHero.css";

export default function FeaturesHeroSection() {
  return (
    <section className="features-hero-section">
      <div className="features-hero-container">
        <div className="features-hero-content">
          <h1 className="features-hero-title">
            <span className="title-main">Powerful Features for</span>{" "}
            <br className="title-break" />
            <span className="title-highlight text-teal-500 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text">
              Video Analytics
            </span>
          </h1>
          
          <p className="features-hero-description text-gray-600">
            Discover how VideoMetrics.ai transforms your video data into
            actionable business intelligence with our comprehensive suite of
            features.
          </p>


        </div>
      </div>
    </section>
  );
}