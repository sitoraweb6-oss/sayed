export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description?: string;
  category: 'Websites' | 'eCommerce' | 'Web Applications' | 'Custom Solutions';
  thumbnail_image: string;
  technologies: string[];
  client_type?: string;
  my_role?: string;
  live_url?: string;
  featured_status: boolean;
  published_status: boolean;
}

export interface CaseStudy {
  id: string;
  project_id: string;
  challenge: string;
  objective: string;
  solution: string;
  business_value: string;
  gallery_images: string[];
}

export interface BrandLogo {
  id: string;
  brand_name: string;
  logo_url: string;
  website_url?: string;
  display_order: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
