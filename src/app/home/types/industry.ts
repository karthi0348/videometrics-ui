export interface Industry {
  id: IndustryId;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  color: string;
  bgGradient: string;
}

export interface IndustriesSectionProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export type IndustryId = "manufacturing" | "restaurants" | "retail" | "agriculture";

export interface IndustryTabProps {
  industry: Industry;
  isActive: boolean;
}

export interface IndustryContentProps {
  industry: Industry;
}

export interface IndustryImageProps {
  src: string;
  alt: string;
}