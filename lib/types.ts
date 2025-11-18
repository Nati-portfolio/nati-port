// Core data types for the portfolio

export interface Project {
  slug: string;
  title: string;
  domains: string[];
  role: string;
  team: string;
  stack: string[];
  outcomes: string[];
  links?: {
    label: string;
    href: string;
  }[];
  image?: string;
  featured?: boolean;
}

export interface DomainMetrics {
  title: string;
  icon: string;
  blurb: string;
  metrics: string[];
  domain: string; // for filtering
}

export interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
}
