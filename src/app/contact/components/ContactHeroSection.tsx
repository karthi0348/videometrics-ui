import React from "react";
import styles from '../styles/ContactHero.module.css';

interface ContactHeroProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ContactHero({ 
  title = "Get in Touch",
  subtitle = "Have questions about VideoMetrics.ai? Our team is here to help you.",
  className = ""
}: ContactHeroProps) {
  return (
    <section className={`${styles.contactHeroSection} ${className}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {title.includes("Touch") ? (
            <>
              Get in <span className={styles.highlight}>Touch</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}