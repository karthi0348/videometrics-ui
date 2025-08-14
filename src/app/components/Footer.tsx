import React from 'react';
import './styles/Footer.css';

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
  companyName = "videometrics.ai",
  companyDescription = "Advanced video analytics platform for business intelligence and operational insights.",
  links = [
    { label: "Contact", href: "/contact" }
  ],
  copyrightYear = 2024,
  className = ""
}) => {
  return (
    <div className="footerWrapper">
      <footer className={`footer ${className}`}>
        <div className="footerContent">
          <div className="container">
            <div className="footerGrid">
              
              <div className="companySection">
                <h2 className="companyName">
                  {companyName}
                </h2>
                <p className="companyDescription">
                  {companyDescription}
                </p>
              </div>

              <div className="linksSection">
                <h3 className="sectionTitle">
                  Company
                </h3>
                <nav className="navigation" role="navigation" aria-label="Footer navigation">
                  <ul className="linksList">
                    {links.map((link, index) => (
                      <li key={`${link.label}-${index}`} className="linkItem">
                        <a 
                          href={link.href}
                          className="footerLink"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="copyrightBar">
          <div className="container">
            <p className="copyrightText">
              © {copyrightYear} {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;