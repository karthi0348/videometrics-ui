import React from 'react';
import Image from 'next/image';
import { Video, Settings, BarChart3 } from 'lucide-react';
import styles from '../styles/Steps.module.css';

const steps = [
  {
    id: 1,
    title: (
      <span className={styles.stepTitleText}>
        Connect Your Video
      </span>
    ),
    description:
      "Easily link your cloud storage, CCTV streams, or upload video files directly. We support all major formats and protocols.",
    icon: Video,
  },
  {
    id: 2,
    title: (
      <span className={styles.stepTitleText}>
        Configure Analysis
      </span>
    ),
    description:
      "Choose a template or define custom metrics relevant to your specific goals. Set up zones, tracking parameters, and alerts.",
    icon: Settings,
  },
  {
    id: 3,
    title: (
      <span className={styles.stepTitleText}>
        Visualize & Act
      </span>
    ),
    description:
      "Access real-time data, historical trends, and alerts on your dashboard to make informed decisions that drive business growth.",
    icon: BarChart3,
  },
];

export default function Steps() {
  return (
    <section className={`section ${styles.stepsSection}`}>
      <div className={styles.stepsContainer}>
        <div className={styles.stepsHeader}>
          <div className={styles.stepsHeadingContainer}>
            <h2 className={styles.stepsMainTitle}>
              Get Powerful Video
              <br className={styles.titleBreak} />
              <span className={styles.titleSpan}> Insights in Just 3 Simple,</span>
              <span className={styles.titleSpan}> Fast, and Actionable Steps</span>
            </h2>
          </div>

          <div className={styles.stepsDescriptionContainer}>
            <p className={styles.stepsDescription}>
              Our streamlined onboarding process helps you go from setup to
              actionable insights in minutes—not days. With simple
              integration and real-time analysis, you can start making
              smarter decisions almost immediately—no technical hassle
              required.
            </p>
          </div>
        </div>

        <div className={styles.stepsContent}>
          <div className={styles.stepsList}>
            {steps.map((step, idx) => (
              <div key={step.id} className={styles.stepItem}>
                <div className={styles.stepIconWrapper}>
                  <div className={styles.stepIconContainer}>
                    <step.icon className={styles.stepIcon} />
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={styles.connectingLine}></div>
                  )}
                </div>

                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.stepDescription}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.stepsImageContainer}>
            <div className={styles.stepsImageWrapper}>
              <div className={styles.stepsImageFrame}>
                <Image
                  src="/images/steps.png"
                  alt="Video analysis dashboard illustration showing hands typing on laptop with video analytics interface"
                  width={800}
                  height={600}
                  className={styles.stepsImage}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.decorativeElement1}></div>
              <div className={styles.decorativeElement2}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}