import React from 'react';
import { HeroSectionProps } from "@/app/home/types/hero";
import "../styles/hero.css";

export default function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section className={`hero-section py-10 ${className}`}>
        <div className="hero-background">
          <div className="gradient-orb gradient-orb-1" />
          <div className="gradient-orb gradient-orb-2" />
          <div className="gradient-orb gradient-orb-3" />
          <div className="grid-pattern" />
          <div className="floating-particle particle-1" />
          <div className="floating-particle particle-2" />
          <div className="floating-particle particle-3" />
        </div>

        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-text">Visual Intelligence</span>
            </div>

            <div className="hero-heading">
              <h1 className="heading-text">
                <span className="heading-line">Turn Your Video</span>
                <span className="heading-line">Footage into Meaningful Insights</span>
              </h1>
            </div>

            <div className="hero-description">
              <p className="description-text">
                VideoMetrics.ai transforms CCTV and drone footage into real-time insights to help 
                businesses optimize operations and make smarter decisions.
              </p>
            </div>

            <div className="hero-cta">
              <button className="cta-button">
                <span className="cta-text">Schedule Demo</span>
                <div className="cta-background" />
                <div className="cta-shimmer" />
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-card main-card">
              <div className="card-background" />
              <div className="card-content">
                <div className="chart-container">
                  <div className="chart-bars">
                    {[45, 75, 55, 35, 30, 50, 65, 40, 80, 45].map((height, index) => (
                      <div 
                        key={index} 
                        className="chart-bar"
                        style={{ 
                          height: `${height}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="card-glow" />
            </div>

            <div className="dashboard-card secondary-card">
              <div className="card-background" />
              <div className="card-content">
                <div className="weekly-chart">
                  <div className="chart-values">
                    <span className="chart-value">200</span>
                    <span className="chart-value">150</span>
                    <span className="chart-value">100</span>
                    <span className="chart-value">50</span>
                  </div>
                  
                  <div className="chart-area">
                    <div className="weekly-bars">
                      {[75, 45, 85, 60, 50, 70, 80].map((height, index) => (
                        <div 
                          key={index} 
                          className="weekly-bar"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${index * 0.15}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="chart-labels">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                      <span key={index} className="chart-label">{day}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="card-glow" />
            </div>

            <div className="floating-element floating-element-1" />
            <div className="floating-element floating-element-2" />
            <div className="floating-element floating-element-3" />
          </div>
        </div>
      </section>
  );
}