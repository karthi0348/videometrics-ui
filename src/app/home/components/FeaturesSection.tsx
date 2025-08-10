
import React from 'react';
import Link from 'next/link';
import { Feature, FeaturesSectionProps } from '@/app/home/types/features';
import styles from '../styles/features.module.css';

const Features: React.FC<FeaturesSectionProps> = ({ className = '' }) => {
  const features: Feature[] = [
    {
      id: 'realtime',
      title: 'Real-time Analytics',
      description: 'Monitor your video feeds constantly in real-time and receive instant alerts for any unusual activities based on your custom analytics.',
      color: 'cyan',
      icon: (
        <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 112 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'camera',
      title: 'Broad Camera Support',
      description: 'Works with standard CCTV systems (RTSP), IP cameras, and standard video files (MP4, MOV, etc.) with universal camera hardware support.',
      color: 'cyan',
      icon: (
        <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'accurate',
      title: 'Accurate Video Analytics',
      description: 'Analyze movement patterns and count people with heat maps, providing precise insights from your video footage with AI-powered analysis and engagement based on your templates.',
      color: 'cyan',
      icon: (
        <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'cloud',
      title: 'Seamless Cloud Integration',
      description: 'Connect easily with your existing AWS S3, Azure Blob Storage, or Google Cloud Storage for secure and scalable video data management.',
      color: 'cyan',
      icon: (
        <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      )
    },
    {
      id: 'customizable',
      title: 'Customizable Metrics',
      description: 'Use advanced filters to create the perfect analytics experience. Define customer acquisition cost and business KPIs with intuitive metric builder.',
      color: 'cyan',
      icon: (
        <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'dashboard',
      title: 'Insightful Dashboard',
      description: 'Visualize your data clearly with informative charts, legends, and configuration panel. Export insights to make informed business decisions.',
      color: 'cyan',
      icon: (
        <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    }
  ];

  return (

    <section className={`${styles.featuresSection} ${className}`}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresMainGrid}>
          <div className={styles.featuresHeaderContent}>
            <h2 className={styles.featuresHeading}>
              <span className={styles.headingPrimary}>Powerful Features,</span>{' '}
              <span className={styles.headingSecondary}>Simple Interface</span>
            </h2>
            <p className={styles.featuresDescription}>
              Gain complete visibility into your physical spaces with powerful 
              video analytics. From foot traffic to behavior trends, access 
              everything you need to monitor, understand, and optimize 
              operations using real-time and historical video data.
            </p>
            <Link href="/features" className={styles.featuresCtaButton}>
              <span className={styles.buttonText}>View all features</span>
              <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Features Grid */}
          <div className={styles.featuresGrid}>
            <div className={styles.featuresGridContainer}>
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className={styles.featureCard}
                >
                  {/* Icon */}
                  <div className={styles.featureIconContainer}>
                    <div className={styles.featureIconWrapper}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={styles.featureContent}>
                    <h3 className={`${styles.featureTitle} ${styles[`${feature.color}Color`]}`}>
                      {feature.title}
                    </h3>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;