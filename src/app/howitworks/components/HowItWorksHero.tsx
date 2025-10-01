import React from "react";
import Link from "next/link";
import styles from "../styles/HowItWorksHero.module.css"; 

interface HowItWorksHeroProps {
  className?: string;
}

const HowItWorksHero: React.FC<HowItWorksHeroProps> = ({ className = "" }) => {
  return (
    <section className={`${styles.hero} ${className}`}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>How VideoMetrics Works</h1>
        <p className={styles.heroDescription}>
          Transform your video data into actionable business intelligence  with our powerful yet simple analytics platform.
        </p>
        <Link href="#" className={styles.heroCtaButton}>
          Get Started
          <svg
            className={styles.heroCtaIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HowItWorksHero;