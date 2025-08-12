import React from 'react';
import styles from '../styles/SecuritySection.module.css';

interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
}

interface SecuritySectionProps {
  className?: string;
}

const SecuritySection: React.FC<SecuritySectionProps> = ({ className = '' }) => {
  const securityFeatures: SecurityFeature[] = [
    {
      id: 'encryption',
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption protocols.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      icon: (
        <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 'compliance',
      title: 'GDPR & CCPA Compliant',
      description: 'Our platform is designed to help you maintain compliance with global privacy regulations.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      icon: (
        <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'access',
      title: 'Role-Based Access Control',
      description: 'Define granular permissions to control who can access your video data and analytics.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      icon: (
        <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
<section className={`section ${styles.securitySection} ${className}`}>
      <div className={styles.securityContainer}>
        <div className={styles.securityHeader}>
          <h2 className={styles.securityTitle}>
            Enterprise-Grade{' '}
            <span className={styles.securityGradient}>
              Security & Privacy
            </span>
          </h2>
          <p className={styles.securityDescription}>
            We take security and privacy seriously. VideoMetrics.ai is built with enterprise-grade security features and privacy controls to protect your data.
          </p>
        </div>

        <div className={styles.securityGrid}>
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`${styles.securityCard} ${index === 1 ? styles.middleCard : ''}`}
            >
              <div className={styles.securityCardBg}>
                <div className={styles.gradientOverlay}></div>
                <div className={styles.decorativeCircle1}></div>
                <div className={styles.decorativeCircle2}></div>
              </div>

              <div className={`${styles.securityIcon} ${styles[feature.bgColor.replace('bg-', '').replace('-', '')]}`}>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                
                <div className={styles.particle1}></div>
                <div className={styles.particle2}></div>
              </div>

              <div className={styles.securityContent}>
                <h3 className={`${styles.securityCardTitle} ${styles[feature.color.replace('text-', '').replace('-', '')]}`}>
                  {feature.title}
                </h3>
                <p className={styles.securityCardDescription}>
                  {feature.description}
                </p>
              </div>

              <div className={styles.activeIndicator}>
                <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div className={styles.accentLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;