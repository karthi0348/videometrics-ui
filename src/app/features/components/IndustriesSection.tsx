"use client";

import React, { JSX, useState, useEffect } from "react";
import "@/app/home/styles/IndustriesSection.css";

interface Industry {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: JSX.Element;
  color: string;
  bgGradient: string;
}

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState<string>("manufacturing");
  const [screenSize, setScreenSize] = useState<{ width: number } | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth });
    };

    setScreenSize({ width: window.innerWidth });
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getScreenClass = (width: number) => {
    if (width < 640) return 'small';
    if (width < 768) return 'medium';
    if (width < 1024) return 'large';
    return 'xlarge';
  };

  const industries: Industry[] = [
    {
      id: "manufacturing",
      title: "Manufacturing Facilities",
      description:
        "Monitor production lines, track worker safety compliance, analyze equipment utilization, and optimize workflow efficiency in manufacturing environments.",
      features: [
        "Monitor production line efficiency and bottlenecks",
        "Track safety compliance and PPE usage",
        "Analyze equipment utilization rates",
        "Optimize workforce allocation and scheduling",
      ],
      color: "teal-500",
      bgGradient: "blue-indigo",
      image: (
        <div className="industry-image-container">
          <img
            src="https://media.istockphoto.com/id/492500467/photo/cctv-camera-or-surveillance-operating-inside-industrial-factory.jpg?s=612x612&w=0&k=20&c=Urst5wE44Zj6NhofWFRuL9sATA-iaOaJI5bydZi1evQ="
            alt="Industrial Security Camera"
            className="industry-image"
          />
          <div className="live-indicator">
            <div className="live-dot"></div>
            <span>LIVE</span>
          </div>
        </div>
      ),
    },
    {
      id: "restaurants",
      title: "Restaurant Dining",
      description:
        "Monitor kitchen workflows, track order preparation times, analyze table turnover rates, and manage waiting areas effectively to maximize revenue and customer satisfaction.",
      features: [
        "Increase table turnover by optimizing service flow",
        "Identify bottlenecks in kitchen operations",
        "Improve host station efficiency and reduce wait times",
        "Analyze customer flow for optimal seating arrangements",
      ],
      color: "teal-500",
      bgGradient: "orange-red",
      image: (
        <div className="industry-image-container">
          <img
            src="https://www.shutterstock.com/image-photo/cctv-system-security-inside-restaurantsurveillance-600nw-1064540882.jpg"
            alt="Restaurant Security Camera"
            className="industry-image"
          />
          <div className="live-indicator">
            <div className="live-dot"></div>
            <span>LIVE</span>
          </div>
        </div>
      ),
    },
    {
      id: "retail",
      title: "Retail",
      description:
        "Optimize checkout lanes, understand customer paths, monitor fuel pump usage, track convenience store traffic, and improve staff allocation based on traffic patterns.",
      features: [
        "Improve operational efficiency by up to 40%",
        "Monitor service area utilization and flow management",
        "Track customer patterns and peak service hours",
        "Improve staff allocation during peak hours",
      ],
      color: "teal-500",
      bgGradient: "red-pink",
      image: (
        <div className="industry-image-container">
          <img
            src="https://www.shutterstock.com/image-photo/closed-circuit-television-camera-monitoring-600nw-413548441.jpg"
            alt="Retail Security Camera"
            className="industry-image"
          />
          <div className="live-indicator">
            <div className="live-dot"></div>
            <span>LIVE</span>
          </div>
        </div>
      ),
    },
    {
      id: "agriculture",
      title: "Agriculture",
      description:
        "Monitor livestock behavior, track crop growth patterns, analyze equipment usage, and optimize farm operations through intelligent video analytics.",
      features: [
        "Monitor livestock health and behavior patterns",
        "Track crop growth and field conditions",
        "Optimize equipment utilization and maintenance",
        "Enhance security and theft prevention",
      ],
      color: "teal-500",
      bgGradient: "green-emerald",
      image: (
        <div className="industry-image-container">
          <img
            src="https://cdn.prod.website-files.com/665dad178b155b8948cea817/67a0e7ca5a94b2185a5e65cd_card-sensor.webp"
            alt="Agriculture Sensor"
            className="industry-image"
          />
          <div className="live-indicator">
            <div className="live-dot"></div>
            <span>LIVE</span>
          </div>
        </div>
      ),
    },
  ];

  const activeIndustryData =
    industries.find((industry) => industry.id === activeIndustry) ||
    industries[0];

  if (!screenSize) {
    return (
      <section className="industries-section">
        <div className="industries-container">
          <div className="industries-header">
            <h2 className="industries-title">
              Transforming <span className="title-highlight">Various Industries</span>
            </h2>
            <p className="industries-subtitle">
              See how VideoMetrics.ai delivers value across different operational
              environments.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const screenClass = getScreenClass(screenSize.width);

  return (
    <section className={`industries-section ${screenClass}`}>
      <div className={`industries-container ${screenClass}`}>
        <div className={`industries-header ${screenClass}`}>
          <h2 className={`industries-title ${screenClass}`}>
            Transforming{" "}
            <span className="title-highlight">
              Various Industries
            </span>
          </h2>
          <p className={`industries-subtitle ${screenClass}`}>
            See how VideoMetrics.ai delivers value across different operational
            environments.
          </p>
        </div>

        <div className={`industry-tabs ${screenClass}`}>
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`
                industry-tab ${screenClass} 
                ${activeIndustry === industry.id ? `active ${industry.bgGradient}` : 'inactive'}
              `}
            >
              {industry.title.replace(" Facilities", "").replace(" Dining", "")}
            </button>
          ))}
        </div>

        <div className={`industry-content ${screenClass} ${activeIndustryData.bgGradient}`}>
          <div className={`industry-grid ${screenClass}`}>
            <div className={`industry-text-section ${screenClass}`}>
              <h3 className={`industry-content-title ${screenClass} ${activeIndustryData.color}`}>
                {activeIndustryData.title}
              </h3>
              <p className={`industry-description ${screenClass}`}>
                {activeIndustryData.description}
              </p>

              <div className={`features-list ${screenClass}`}>
                {activeIndustryData.features.map((feature, index) => (
                  <div key={index} className={`feature-item ${screenClass}`}>
                    <span className={`feature-text ${screenClass}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`industry-image-section ${screenClass} ${activeIndustryData.bgGradient}`}>
              {activeIndustryData.image}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}