import React from "react";
import "../styles/FAQSection.css";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
  expandable?: boolean;
}

const defaultFaqs: FAQ[] = [
  {
    question: "What's the typical response time?",
    answer:
      "We aim to respond to all inquiries within 24 hours during business days. For urgent support issues, Enterprise customers have access to our 24/7 support line.",
  },
  {
    question: "How can I schedule a demo?",
    answer:
      "You can request a demo by filling out the contact form on this page with your company information and requirements.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Yes, we provide technical support to all our customers. The level of support depends on your subscription plan.",
  },
  {
    question: "Can I visit your office?",
    answer:
      "Yes, we welcome visitors to our Alpharetta, GA office. Please contact us in advance to schedule a meeting with our team.",
  },
  {
    question: "What are your business hours?",
    answer:
      "Our business hours are Monday through Friday, 9:00 AM to 6:00 PM EST. We're closed on weekends and major holidays.",
  },
  {
    question: "Do you offer international support?",
    answer:
      "Yes, we provide support to customers worldwide. However, our primary support hours are based on EST timezone.",
  },
];

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  expandable = true,
}) => {
  return (
    <section className="section faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">{title}</h2>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className={`faq-item ${
                expandable ? "faq-item-expandable" : "faq-item-static"
              }`}
            >
              <summary className="faq-question-wrapper">
                <h3 className="faq-question">{faq.question}</h3>
                {expandable && (
                  <div className="faq-toggle-icon">
                    <svg
                      className="faq-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                )}
              </summary>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;