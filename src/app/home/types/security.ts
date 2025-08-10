export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

export interface FeaturesSectionProps {
  className?: string;
}

export interface SecuritySectionProps {
  className?: string;
}