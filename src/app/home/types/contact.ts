
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  type: 'location' | 'email' | 'phone';
  title: string;
  details: string | string[];
  icon?: React.ReactNode;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactHeroProps {
  title?: string;
  subtitle?: string;
}

export interface ContactFormSectionProps {
  onSubmit?: (data: ContactFormData) => void;
  apiEndpoint?: string;
}

export interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
}

