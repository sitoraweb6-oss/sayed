import { Project, BrandLogo, Service } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Elevate Digital Agency',
    slug: 'elevate-digital',
    short_description: 'A high-performance B2B website built to drive agency leads.',
    category: 'Websites',
    thumbnail_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    technologies: ['WordPress', 'Custom Theme', 'GSAP'],
    client_type: 'Digital Agency',
    my_role: 'Lead Developer (White-Label)',
    live_url: '#',
    featured_status: true,
    published_status: true,
  },
  {
    id: '2',
    title: 'Lumina Home Goods',
    slug: 'lumina-home',
    short_description: 'An optimized eCommerce experience focusing on conversion and product discovery.',
    category: 'eCommerce',
    thumbnail_image: 'https://images.unsplash.com/photo-1664382953518-4a664aa89617?q=80&w=2671&auto=format&fit=crop',
    technologies: ['WooCommerce', 'React', 'Tailwind'],
    client_type: 'Direct Business',
    my_role: 'Full Stack Developer',
    live_url: '#',
    featured_status: true,
    published_status: true,
  },
  {
    id: '3',
    title: 'Nexus Client Portal',
    slug: 'nexus-portal',
    short_description: 'A secure client dashboard for document management and project tracking.',
    category: 'Web Applications',
    thumbnail_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    technologies: ['React', 'Supabase', 'Tailwind'],
    client_type: 'SaaS Startup',
    my_role: 'Frontend Architect',
    live_url: '#',
    featured_status: true,
    published_status: true,
  },
  {
    id: '4',
    title: 'Vanguard Legal',
    slug: 'vanguard-legal',
    short_description: 'A professional, high-trust digital presence for a corporate law firm.',
    category: 'Websites',
    thumbnail_image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2601&auto=format&fit=crop',
    technologies: ['WordPress', 'PHP', 'SCSS'],
    client_type: 'Direct Business',
    my_role: 'Web Developer',
    live_url: '#',
    featured_status: false,
    published_status: true,
  }
];

export const mockBrands: BrandLogo[] = [
  { id: '1', brand_name: 'Acme Corp', logo_url: '', display_order: 1 },
  { id: '2', brand_name: 'Global Industries', logo_url: '', display_order: 2 },
  { id: '3', brand_name: 'TechFlow', logo_url: '', display_order: 3 },
  { id: '4', brand_name: 'Starlight', logo_url: '', display_order: 4 },
  { id: '5', brand_name: 'Nova Agency', logo_url: '', display_order: 5 },
];

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'WordPress Development',
    description: 'Custom and professionally structured WordPress websites built around business requirements.'
  },
  {
    id: '2',
    title: 'WooCommerce & eCommerce',
    description: 'Online stores designed around usability, product discovery, and smoother purchasing experiences.'
  },
  {
    id: '3',
    title: 'Custom Web Functionality',
    description: 'Custom plugins, integrations, APIs, and business-specific features beyond standard website builds.'
  },
  {
    id: '4',
    title: 'Figma to Pixel-Accurate Website',
    description: 'Turning detailed designs into responsive, production-ready digital experiences.'
  },
  {
    id: '5',
    title: 'Web Apps & MVPs',
    description: 'Database-connected interfaces, authentication, dashboards, workflows, and early-stage digital products.'
  },
  {
    id: '6',
    title: 'Performance Optimization',
    description: 'Improving speed, usability, stability, and technical performance across devices.'
  }
];
