import React from 'react';
import Link from 'next/link';
import styles from './styles/Footer.module.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  links?: FooterLink[];
  copyrightYear?: number;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "videometrics",
  companyDescription = "Advanced video analytics platform for business intelligence and operational insights.",
  links = [
    { label: "Contact", href: "/contact" }
  ],
  copyrightYear = 2024,
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

              <div className={styles.linksSection}>
                <h3 className={styles.sectionTitle}>
                  Company
                </h3>
                <nav className={styles.navigation} role="navigation" aria-label="Footer navigation">
                  <ul className={styles.linksList}>
                    {links.map((link, index) => (
                      <li key={`${link.label}-${index}`} className={styles.linkItem}>
                        <Link 
                          href={link.href}
                          className={styles.footerLink}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
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