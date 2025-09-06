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
    <section className={`contact-hero-section ${className}`}>
      <div className="container">
        <h1 className="contacttitle">
          {title.includes("Touch") ? (
            <>
              Get in <span className="highlight">Touch</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="subcontacttitle">{subtitle}</p>
      </div>
    </section>
  );
}