import React from "react";
import ContactHero from "@/app/contact/components/ContactHeroSection";
import ContactFormSection from "@/app/contact/components/ContactFormSection";
import FAQSection from "@/app/contact/components/FaqSection";


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <ContactFormSection />
      <FAQSection />
    </div>
  );
}