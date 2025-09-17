import React from "react";
import "@/app/globals.css";
import "../styles/ContactFormSection.css";

interface ContactInfo {
  type: "location" | "email" | "phone";
  title: string;
  details: string | string[];
}

interface ContactFormSectionProps {
  apiEndpoint?: string;
  contactInfo?: ContactInfo[];
}

const defaultContactInfo: ContactInfo[] = [
  {
    type: "location",
    title: "Office Location",
    details: [
      "5450 McGinnis Village Place,",
      "Suite No. 111",
      "Alpharetta, GA - 30005",
    ],
  },
];

export default function ContactFormSection({
  apiEndpoint = "/api/contact",
  contactInfo = defaultContactInfo,
}: ContactFormSectionProps) {
  return (
    <section className="section contact-form-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="form-wrapper">
            <h2 className="form-title">Send Us a Message</h2>
            <p className="form-description">
              Fill out the form below and we will get back to you as soon as
              possible.
            </p>

            <form action={apiEndpoint} method="POST" className="contact-form">
              {/* First Name and Last Name */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="form-input"
                  required
                />
              </div>

              {/* Company */}
              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Acme Inc."
                  className="form-input"
                />
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="form-input"
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Please provide details about your inquiry..."
                  className="form-textarea"
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="form-submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="info-wrapper">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-description">
              You can reach out to us at our office location.
            </p>

            <div className="info-card">
              {contactInfo
                .filter((info) => info.type === "location")
                .map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon">
                      <svg
                        className="icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="info-content">
                      <h3 className="info-item-title">{info.title}</h3>
                      <div className="info-details">
                        {Array.isArray(info.details) ? (
                          <>
                            <p>{info.details.slice(0, 2).join(" ")}</p>
                            {info.details.length > 2 && (
                              <p>{info.details.slice(2).join(" ")}</p>
                            )}
                          </>
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
