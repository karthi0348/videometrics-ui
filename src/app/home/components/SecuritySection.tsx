import React from 'react';
import { SecurityFeature, SecuritySectionProps } from '@/app/home/types/security';

const SecuritySection: React.FC<SecuritySectionProps> = ({ className = '' }) => {
  const securityFeatures: SecurityFeature[] = [
    {
      id: 'encryption',
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption protocols.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      icon: (
        <svg className="w-full h-full text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 'compliance',
      title: 'GDPR & CCPA Compliant',
      description: 'Our platform is designed to help you maintain compliance with global privacy regulations.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
      icon: (
        <svg className="w-full h-full text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'access',
      title: 'Role-Based Access Control',
      description: 'Define granular permissions to control who can access your video data and analytics.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100',
      icon: (
        <svg className="w-full h-full text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className={`security-section px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-50 via-teal-50/50 to-cyan-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${className}`}>
      <div className="security-container max-w-7xl mx-auto w-full">
        <div className="security-header text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="security-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight">
            Enterprise-Grade{' '}
            <span className="security-gradient bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Security & Privacy
            </span>
          </h2>
          <p className="security-description text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            We take security and privacy seriously. VideoMetrics.ai is built with enterprise-grade security features and privacy controls to protect your data.
          </p>
        </div>

        <div className="security-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`security-card relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-500 cursor-pointer group border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:scale-102 hover:border-teal-100 dark:hover:border-teal-800 hover:shadow-2xl hover:scale-105 hover:ring-2 sm:hover:ring-4 hover:ring-teal-100 dark:hover:ring-teal-900/50 hover:border-teal-200 dark:hover:border-teal-700 ${
                index === 1 ? 'sm:col-start-1 sm:col-end-3 lg:col-start-auto lg:col-end-auto sm:max-w-md sm:mx-auto lg:max-w-none' : ''
              }`}
            >
              <div className="security-card-bg absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-teal-400 via-emerald-400 to-cyan-400"></div>
                <div className="decorative-circle-1 absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="decorative-circle-2 absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
              </div>

              <div className={`security-icon relative w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 ${feature.bgColor} group-hover:scale-110 group-hover:shadow-lg group-hover:animate-pulse`}>
                <div className="w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12">
                  {feature.icon}
                </div>
                
                <div className="particle-1 absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-2 sm:w-3 h-2 sm:h-3 bg-teal-400 rounded-full opacity-0 group-hover:opacity-80 animate-ping transition-opacity duration-300"></div>
                <div className="particle-2 absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-60 animate-pulse transition-opacity duration-300"></div>
              </div>

              <div className="security-content relative z-10">
                <h3 className={`security-card-title text-lg sm:text-xl lg:text-xl font-bold mb-3 sm:mb-4 transition-colors duration-300 text-gray-900 dark:text-gray-100 group-hover:${feature.color} leading-tight`}>
                  {feature.title}
                </h3>
                <p className="security-card-description text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="active-indicator absolute top-3 sm:top-4 right-3 sm:right-4 w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300">
                <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="accent-line absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 sm:h-1 rounded-full transition-all duration-500 bg-gradient-to-r from-teal-400 to-emerald-400 w-6 sm:w-8 opacity-0 group-hover:opacity-60 group-hover:w-8 sm:group-hover:w-12 group-hover:opacity-100 group-hover:w-10 sm:group-hover:w-16">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;