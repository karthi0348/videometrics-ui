import React from "react";
import styles from '../styles/ContactFormSection.module.css';
import '@/app/globals.css'

interface ContactInfo {
  type: 'location' | 'email' | 'phone';
  title: string;
  details: string | string[];
}

interface ContactFormSectionProps {
  apiEndpoint?: string;
  contactInfo?: ContactInfo[];
}

const defaultContactInfo: ContactInfo[] = [
  {
    type: 'location',
    title: 'Office Location',
    details: ['5450 McGinnis Village Place,', 'Suite No. 111', 'Alpharetta, GA - 30005']
  },

];

export default function ContactFormSection({ 
  apiEndpoint = "/api/contact",
  contactInfo = defaultContactInfo 
}: ContactFormSectionProps) {

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            <p className={styles.formDescription}>
              Fill out the form below and we will get back to you as soon as possible.
            </p>

            <form action={apiEndpoint} method="POST" className={styles.contactForm}>
              {/* First Name and Last Name */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.formLabel}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.formLabel}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Company */}
              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.formLabel}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Acme Inc."
                  className={styles.formInput}
                />
              </div>

              {/* Subject */}
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Message */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Please provide details about your inquiry..."
                  className={styles.formTextarea}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={styles.formSubmitBtn}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.infoWrapper}>
            <h2 className={styles.infoTitle}>Contact Information</h2>
            <p className={styles.infoDescription}>
              You can reach out to us at our office location.
            </p>

            <div className={styles.infoCard}>
              {contactInfo.filter(info => info.type === 'location').map((info, index) => (
                <div key={index} className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h3 className={styles.infoItemTitle}>{info.title}</h3>
                    <div className={styles.infoDetails}>
                      {Array.isArray(info.details) ? (
                        info.details.map((line, i) => <p key={i}>{line}</p>)
                      ) : (
                        <p>{info.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}