export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconPath: string;
  gradient: string;
  textColor: string;
  badgeColor: string;
}

export interface Statistic {
  value: string;
  label: string;
  gradient: string;
}

export const statistics: Statistic[] = [
  {
    value: '99.8%',
    label: 'Detection Accuracy',
    gradient: 'from-teal-600 to-cyan-600'
  },
  {
    value: '50ms',
    label: 'Processing Speed',
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    value: '24/7',
    label: 'Real-time Monitoring',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    value: '40%',
    label: 'Cost Reduction',
    gradient: 'from-purple-600 to-pink-600'
  }
];

export const features: FeatureCard[] = [
  {
    id: 'accuracy',
    title: 'Industry-Leading Accuracy',
    description: 'Our advanced AI models deliver 99.8% accuracy in object detection, people counting, and behavior analysis. Powered by cutting-edge computer vision technology.',
    badge: 'Certified by leading industry standards',
    gradient: 'from-teal-500 to-cyan-500',
    textColor: 'text-teal-600 dark:text-teal-400',
    badgeColor: 'bg-teal-500',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 'processing',
    title: 'Lightning-Fast Processing',
    description: 'Get instant insights with our real-time processing capabilities. Process video streams in under 50ms for immediate response to changing conditions.',
    badge: 'Real-time alerts and notifications',
    gradient: 'from-cyan-500 to-blue-500',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    badgeColor: 'bg-cyan-500',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 'privacy',
    title: 'Privacy-First Architecture',
    description: 'Built with privacy by design. GDPR & CCPA compliant with advanced anonymization techniques and secure data handling protocols.',
    badge: 'Enterprise-grade security standards',
    gradient: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-600 dark:text-purple-400',
    badgeColor: 'bg-purple-500',
    iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    id: 'integration',
    title: 'Seamless Integration',
    description: 'Connect with your existing systems in minutes. Comprehensive API, webhooks, and pre-built integrations for popular platforms and cloud services.',
    badge: '500+ integrations available',
    gradient: 'from-orange-500 to-red-500',
    textColor: 'text-orange-600 dark:text-orange-400',
    badgeColor: 'bg-orange-500',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    id: 'dashboards',
    title: 'Intelligent Dashboards',
    description: 'Create personalized views with drag-and-drop dashboard builder. Interactive charts, real-time metrics, and automated reporting for data-driven decisions.',
    badge: 'Customizable for every business need',
    gradient: 'from-blue-500 to-indigo-500',
    textColor: 'text-blue-600 dark:text-blue-400',
    badgeColor: 'bg-blue-500',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    id: 'scalability',
    title: 'Enterprise Scalability',
    description: 'From single location to global enterprise. Our cloud-native architecture scales automatically to handle thousands of video streams without performance degradation.',
    badge: '99.9% uptime guarantee',
    gradient: 'from-green-500 to-emerald-500',
    textColor: 'text-green-600 dark:text-green-400',
    badgeColor: 'bg-green-500',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  }
];