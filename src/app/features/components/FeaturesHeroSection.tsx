import React from "react";
import styles from "../styles/FeaturesHero.module.css";

export default function FeaturesHeroSection() {
  return (
    <section className={styles.featuresHeroSection}>
      <div className={styles.featuresHeroContainer}>
        <div className={styles.featuresHeroContent}>
          <h1 className={styles.featuresHeroTitle}>
            <span className={styles.titleMain}>Powerful Features for</span>{" "}
            <br className={styles.titleBreak} />
            <span className={styles.titleHighlight}>
              Video Analytics
            </span>
          </h1>
          
          <p className={styles.featuresHeroDescription}>
            Discover how VideoMetrics.ai transforms your video data into
            actionable business intelligence with our comprehensive suite of
            features.
          </p>
        </div>
      </div>
    </section>
  );
}