import React from "react";
import styles from "../styles/CallToAction.module.css";
import Link from "next/link";

interface CallToActionProps {
  className?: string;
  onScheduleDemo?: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({
  className = "",
  onScheduleDemo,
}) => {
  return (
    <section className={`section ${styles.hctaSection} ${className}`}>
      <div className={styles.hctaContainer}>
        {/* Left Section */}
        <div className={styles.hctaLeftSection}>
          <h2 className={styles.hctaHeading}>
            Ready to
            <br />
            Transform Your
            <br />
            Video Data?
          </h2>
          <p className={styles.hctaParagraph}>
            Join your business using <strong>VideoMetrics</strong> to gain
            actionable insights and drive better decisions.
          </p>
          <Link href="/contact" className="cta-link">
            <button
              type="button"
              className={styles.hctaButton}
              aria-label="Schedule a demo with VideoMetrics"
            >
              Schedule Demo
            </button>
          </Link>
        </div>

        {/* Right Section - Icons */}
        <div className={styles.hctaIconsSection}>
          {/* Bar Chart Icon */}
          <div
            className={styles.barChartIcon}
            role="img"
            aria-label="Bar chart visualization"
          >
            <div className={`${styles.bar} ${styles.bar1}`}></div>
            <div className={`${styles.bar} ${styles.bar2}`}></div>
            <div className={`${styles.bar} ${styles.bar3}`}></div>
            <div className={`${styles.bar} ${styles.bar4}`}></div>
          </div>

          {/* Pie Chart Icon */}
          <div
            className={styles.pieChartIcon}
            role="img"
            aria-label="Pie chart visualization"
          >
            <svg viewBox="0 0 100 100" className={styles.pieSvg}>
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#0f42bb"
                strokeWidth="10"
                strokeDasharray="212 283"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#8416af"
                strokeWidth="10"
                strokeDasharray="71 283"
                strokeDashoffset="-212"
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
