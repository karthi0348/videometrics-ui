import React from "react";
import styles from '../styles/CallToAction.module.css';

interface CallToActionProps {
  className?: string;
  onScheduleDemo?: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  className = '',
  onScheduleDemo 
}) => {
  return (
    <section className={`section ${styles.hctaSection} ${className}`}>
      <div className={styles.hctaContainer}>
        {/* Left Section */}
        <div className={styles.hctaLeftSection}>
          <h2 className={styles.hctaHeading}>
            Ready to<br />
            Transform Your Video Data?
          </h2>
          <p className={styles.hctaParagraph}>
          Join your business using <strong>VideoMetrics.ai</strong> to gain actionable insights and drive better decisions.
          </p>

          <button
            type="button"
            className={styles.hctaButton}
            aria-label="Schedule a demo with VideoMetrics.ai"
          >
            Schedule Demo
          </button>
        </div>

        <div className={styles.hctaIconsSection}>
          {/* Bar Chart Icon */}
          <div className={styles.barChartIcon} role="img" aria-label="Bar chart visualization">
            <div className={`${styles.bar} ${styles.bar1}`}></div>
            <div className={`${styles.bar} ${styles.bar2}`}></div>
            <div className={`${styles.bar} ${styles.bar3}`}></div>
            <div className={`${styles.bar} ${styles.bar4}`}></div>
          </div>
          
          {/* Pie Chart Icon */}
          <div className={styles.pieChartIcon} role="img" aria-label="Pie chart visualization">
            <svg viewBox="0 0 100 100" className={styles.pieSvg}>
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#14B8A6" 
                strokeWidth="10" 
                strokeDasharray="141.37 141.37" 
                strokeDashoffset="35.34" 
                transform="rotate(-90 50 50)"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#0D9488" 
                strokeWidth="10" 
                strokeDasharray="70.69 211.11" 
                strokeDashoffset="-106.03" 
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;