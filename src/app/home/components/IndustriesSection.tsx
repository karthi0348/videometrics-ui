"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from '../styles/IndustriesSection.module.css';

interface Industry {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: React.ReactNode;
  color: string;
  bgGradient: string;
}

type ScreenSize = 'small' | 'medium' | 'large' | 'xlarge';

interface IndustriesSectionProps {
  className?: string;
}

export default function IndustriesSection({ className = '' }: IndustriesSectionProps) {
  const [activeIndustry, setActiveIndustry] = useState<string>("manufacturing");
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<{ width: number }>({
    width: 1024 
  });

  useEffect(() => {
    setHasMounted(true);

    const handleResize = (): void => {
      setScreenSize({ width: window.innerWidth });
    };

    if (typeof window !== 'undefined') {
      setScreenSize({ width: window.innerWidth });
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const getScreenClass = (): ScreenSize => {
    if (screenSize.width < 640) return 'small';
    if (screenSize.width < 768) return 'medium';
    if (screenSize.width < 1024) return 'large';
    return 'xlarge';
  };

  const screenClass = hasMounted ? getScreenClass() : 'xlarge';

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
      color: "teal500",
      bgGradient: "blueIndigo",
      image: (
        <div className={`${styles.industryImageContainer} ${styles[screenClass]}`}>
          <Image
            src="https://media.istockphoto.com/id/492500467/photo/cctv-camera-or-surveillance-operating-inside-industrial-factory.jpg?s=612x612&w=0&k=20&c=Urst5wE44Zj6NhofWFRuL9sATA-iaOaJI5bydZi1evQ="
            alt="Industrial Security Camera"
            className={styles.industryImage}
            width={612}
            height={408}
            priority
          />
          <div className={`${styles.liveIndicator} ${styles[screenClass]}`}>
            <div className={styles.liveDot}></div>
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
      color: "teal500",
      bgGradient: "orangeRed",
      image: (
        <div className={`${styles.industryImageContainer} ${styles[screenClass]}`}>
          <Image
            src="https://www.shutterstock.com/image-photo/cctv-system-security-inside-restaurantsurveillance-600nw-1064540882.jpg"
            alt="Restaurant Security Camera"
            className={styles.industryImage}
            width={600}
            height={400}
            priority
          />
          <div className={`${styles.liveIndicator} ${styles[screenClass]}`}>
            <div className={styles.liveDot}></div>
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
      color: "teal500",
      bgGradient: "redPink",
      image: (
        <div className={`${styles.industryImageContainer} ${styles[screenClass]}`}>
          <Image
            src="https://www.shutterstock.com/image-photo/closed-circuit-television-camera-monitoring-600nw-413548441.jpg"
            alt="Retail Security Camera"
            className={styles.industryImage}
            width={600}
            height={400}
            priority
          />
          <div className={`${styles.liveIndicator} ${styles[screenClass]}`}>
            <div className={styles.liveDot}></div>
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
      color: "teal500",
      bgGradient: "greenEmerald",
      image: (
        <div className={`${styles.industryImageContainer} ${styles[screenClass]}`}>
          <Image
            src="https://cdn.prod.website-files.com/665dad178b155b8948cea817/67a0e7ca5a94b2185a5e65cd_card-sensor.webp"
            alt="Agriculture Sensor"
            className={styles.industryImage}
            width={600}
            height={400}
            priority
          />
          <div className={`${styles.liveIndicator} ${styles[screenClass]}`}>
            <div className={styles.liveDot}></div>
            <span>LIVE</span>
          </div>
        </div>
      ),
    },
  ];

  const activeIndustryData =
    industries.find((industry) => industry.id === activeIndustry) ||
    industries[0];

  return (
    <section className={`${styles.industriesSection} ${styles[screenClass]} ${className}`}>
      <div className={`${styles.industriesContainer} ${styles[screenClass]}`}>
        <div className={`${styles.industriesHeader} ${styles[screenClass]}`}>
          <h2 className={`${styles.industriesTitle} ${styles[screenClass]}`}>
            Transforming{" "}
            <span className={styles.titleHighlight}>
              Various Industries
            </span>
          </h2>
          <p className={`${styles.industriesSubtitle} ${styles[screenClass]}`}>
            See how VideoMetrics.ai delivers value across different operational
            environments.
          </p>
        </div>

        <div className={`${styles.industryTabs} ${styles[screenClass]}`}>
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`
                ${styles.industryTab} ${styles[screenClass]} 
                ${activeIndustry === industry.id 
                  ? `${styles.active} ${styles[industry.bgGradient]}` 
                  : styles.inactive
                }
              `}
            >
              {industry.title.replace(" Facilities", "").replace(" Dining", "")}
            </button>
          ))}
        </div>

        <div className={`${styles.industryContent} ${styles[screenClass]} ${styles[activeIndustryData.bgGradient]}`}>
          <div className={`${styles.industryGrid} ${styles[screenClass]}`}>
            <div className={`${styles.industryTextSection} ${styles[screenClass]}`}>
              <h3 className={`${styles.industryContentTitle} ${styles[screenClass]} ${styles[activeIndustryData.color]}`}>
                {activeIndustryData.title}
              </h3>
              <p className={`${styles.industryDescription} ${styles[screenClass]}`}>
                {activeIndustryData.description}
              </p>

              <div className={`${styles.featuresList} ${styles[screenClass]}`}>
                {activeIndustryData.features.map((feature, index) => (
                  <div key={index} className={`${styles.featureItem} ${styles[screenClass]}`}>
                    <span className={`${styles.featureText} ${styles[screenClass]}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${styles.industryImageSection} ${styles[screenClass]} ${styles[activeIndustryData.bgGradient]}`}>
              {activeIndustryData.image}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}