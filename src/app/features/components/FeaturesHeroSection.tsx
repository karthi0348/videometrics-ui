import React from "react";
import "../styles/FeaturesHero.css";

export default function FeaturesHeroSection() {
  return (
    <section className="featuresHeroSection">
      <div className="featuresHeroContainer">
        <div className="featuresHeroContent">
          <h1 className="featuresHeroTitle">
            <span className="titleMain">Powerful Features for</span>
            <br className="titleBreak" />
            <span className="titleHighlight">Video Analytics</span>
          </h1>

          <p className="featuresHeroDescription">
            Discover how VideoMetrics.ai transforms your video data into
            actionable business intelligence with our comprehensive suite of
            features.
          </p>
        </div>
      </div>
    </section>
  );
}