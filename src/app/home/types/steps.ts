import { LucideIcon } from "lucide-react";

export interface StepData {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  illustration: React.ReactNode;
  color: string;
  bgGradient: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  gradient?: string;
}

export interface VideoInsight {
  metric: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

export interface AnalyticsConfig {
  zones: Zone[];
  parameters: TrackingParameter[];
  alerts: Alert[];
}

export interface Zone {
  id: string;
  name: string;
  coordinates: number[];
  type: 'detection' | 'counting' | 'tracking';
}

export interface TrackingParameter {
  id: string;
  name: string;
  type: 'object' | 'motion' | 'face' | 'behavior';
  enabled: boolean;
  threshold?: number;
}

export interface Alert {
  id: string;
  name: string;
  condition: string;
  action: 'email' | 'webhook' | 'dashboard';
  enabled: boolean;
}