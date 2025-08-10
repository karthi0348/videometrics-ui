export interface NavItem {
  href: string;
  label: string;
  icon?: string;
  badge?: string | number;
  disabled?: boolean;
}

export interface HeaderProps {
  currentPath?: string;
  variant?: 'default' | 'transparent' | 'elevated';
  sticky?: boolean;
  showShadow?: boolean;
}

export interface ExtendedNavItem extends NavItem {
  children?: NavItem[];
  external?: boolean;
  ariaLabel?: string;
}

export interface HeaderTheme {
  primary: string;
  secondary: string;
  surface: string;
  onSurface: string;
  outline: string;
}

export const BREAKPOINTS = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;