import React from 'react';
import Link from 'next/link';
import styles from './styles/Footer.module.css';

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  officeAddress?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  email?: string;
  copyrightYear?: number;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "videometrics",
  companyDescription = "Transform video data into actionable business intelligence. Our advanced analytics platform extracts operational insights from your video streams, enabling data-driven decisions across your organization.",
  officeAddress = {
    street: "5450 McGinnis Village Place, Suite No. 111",
    city: "Alpharetta",
    state: "GA",
    zip: "30005"
  },
  email = "contact@videometrics.com",
  copyrightYear = 2025,
  className = ""
}) => {
  return (
    <div className={styles.footerWrapper} suppressHydrationWarning={true}>
      <footer className={`${styles.footer} ${className}`}>
        <div className={styles.footerContent}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              
              <div className={styles.companySection}>
                <h2 className={styles.companyName}>
                  {companyName}
                </h2>
                <p className={styles.companyDescription}>
                  {companyDescription}
                </p>
              </div>

              <div className={styles.contactSection}>
                <div className={styles.contactGroup}>
                  <h3 className={styles.sectionTitle}>
                    Contact
                  </h3>
                  <address className={styles.address}>
                    <p>{officeAddress.street}</p>
                    {officeAddress.city}, {officeAddress.state} - {officeAddress.zip}
                  </address>

                  <div className={styles.emailGroup}>
                    Email:<a 
                    href={`mailto:${email}`}
                    className={styles.emailLink}
                  >
                    {email}
                  </a>
                 
                  
                </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyrightBar}>
          <div className={styles.container}>
            <p className={styles.copyrightText}>
              © {copyrightYear} {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;