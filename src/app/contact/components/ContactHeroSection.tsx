import React from "react";
import "@/app/globals.css";
import "../styles/ContactHero.css";

interface ContactHeroProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ContactHero({
  title = "Get in Touch",
  subtitle = "Have questions about VideoMetrics.ai? Our team is here to help you.",
  className = "",
}: ContactHeroProps) {
  return (
    <section className={`hero-contact-wrapper ${className}`}>
      <div className="hero-contact-container">
        <h1 className="hero-contact-heading">
          {title.includes("Touch") ? (
            <>
              Get in <span className="hero-highlight-text">Touch</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="hero-contact-description">{subtitle}</p>
      </div>
    </section>
  );
}