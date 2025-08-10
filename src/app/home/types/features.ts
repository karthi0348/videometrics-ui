export interface Feature {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

export interface FeaturesSectionProps {
  className?: string;
}