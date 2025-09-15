import React from 'react';
import { HeroSectionProps } from "@/app/home/types/hero";
import "../styles/hero.css";

export default function HeroSection({ className = "" }: HeroSectionProps) {
  // Data for the main pie chart
  const mainPieData = [
    { value: 35, color: '#3b82f6', label: 'Analytics' },
    { value: 25, color: '#06b6d4', label: 'Monitoring' },
    { value: 20, color: '#10b981', label: 'Alerts' },
    { value: 20, color: '#8b5cf6', label: 'Reports' }
  ];

  // Data for the secondary pie chart
  const secondaryPieData = [
    { value: 40, color: '#f59e0b', label: 'Active' },
    { value: 30, color: '#ef4444', label: 'Inactive' },
    { value: 20, color: '#84cc16', label: 'Pending' },
    { value: 10, color: '#6b7280', label: 'Error' }
  ];

  // Data for the additional pie chart from the image
  const additionalPieData = [
    { value: 50, color: '#3b82f6', label: 'Category A' },
    { value: 30, color: '#06b6d4', label: 'Category B' },
    { value: 20, color: '#10b981', label: 'Category C' }
  ];

  // Function to create SVG path for pie slice
  const createPieSlice = (startAngle: number, endAngle: number, radius: number, innerRadius: number = 0) => {
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const x1 = Math.cos(startAngleRad) * radius;
    const y1 = Math.sin(startAngleRad) * radius;
    const x2 = Math.cos(endAngleRad) * radius;
    const y2 = Math.sin(endAngleRad) * radius;

    if (innerRadius === 0) {
      return [
        "M", 0, 0,
        "L", x1, y1,
        "A", radius, radius, 0, largeArcFlag, 1, x2, y2,
        "Z"
      ].join(" ");
    } else {
      const x3 = Math.cos(endAngleRad) * innerRadius;
      const y3 = Math.sin(endAngleRad) * innerRadius;
      const x4 = Math.cos(startAngleRad) * innerRadius;
      const y4 = Math.sin(startAngleRad) * innerRadius;

      return [
        "M", x1, y1,
        "A", radius, radius, 0, largeArcFlag, 1, x2, y2,
        "L", x3, y3,
        "A", innerRadius, innerRadius, 0, largeArcFlag, 0, x4, y4,
        "Z"
      ].join(" ");
    }
  };

  // Function to render pie chart
  const renderPieChart = (data: typeof mainPieData, size: number, innerRadius: number = 0, className: string = '') => {
    let currentAngle = -90; // Start from top
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
      <div className={`pie-chart ${className}`}>
        <svg width={size} height={size} viewBox={`-${size/2} -${size/2} ${size} ${size}`}>
          {data.map((slice, index) => {
            const sliceAngle = (slice.value / total) * 360;
            const endAngle = currentAngle + sliceAngle;

            const path = createPieSlice(currentAngle, endAngle, size/2 - 10, innerRadius);
            currentAngle = endAngle;

            return (
              <path
                key={index}
                d={path}
                fill={slice.color}
                className="pie-slice"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              />
            );
          })}

          {innerRadius > 0 && (
            <circle
              cx="0"
              cy="0"
              r={innerRadius}
              fill="rgba(0, 0, 0, 0.1)"
              className="pie-center"
            />
          )}
        </svg>

        <div className="pie-legend">
          {data.map((slice, index) => (
            <div key={index} className="legend-item" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
              <div className="legend-color" style={{ backgroundColor: slice.color }} />
              <span className="legend-label">{slice.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className={`section hero-section ${className}`}>
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
          <div className="floating-pie-chart main-pie-container">
            {renderPieChart(mainPieData, 200, 60, 'main-pie')}
          </div>

          <div className="floating-pie-chart tertiary-pie-container">
            {renderPieChart(
              [
                { value: 60, color: '#3b82f6', label: 'Active' },
                { value: 40, color: '#1e40af', label: 'Idle' }
              ],
              120, 30, 'tertiary-pie'
            )}
          </div>

          <div className="floating-pie-chart additional-pie-container">
            {renderPieChart(additionalPieData, 150, 40, 'additional-pie')}
          </div>

          <div className="floating-element floating-element-1" />
          <div className="floating-element floating-element-2" />
          <div className="floating-element floating-element-3" />
        </div>
      </div>
    </section>
  );
}
