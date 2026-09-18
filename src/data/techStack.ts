export interface Technology {
  id: string;
  name: string;
  category: string;
  shortLabel: string;
  logo: string;
  description?: string;
  row?: 'top' | 'bottom';
}

export const techStack: Technology[] = [
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'WEBSITES & CMS',
    shortLabel: 'CMS',
    logo: '/images/tech-stack/wordpress.svg',
    description: 'Custom themes, child themes, Gutenberg blocks, and ACF architecture.',
    row: 'top'
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    category: 'ONLINE STORES',
    shortLabel: 'eCommerce',
    logo: '/images/tech-stack/woocommerce.svg',
    description: 'Custom checkouts, product catalog flows, and payment integrations.',
    row: 'top'
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'BACKEND',
    shortLabel: 'Core Logic',
    logo: '/images/tech-stack/php.svg',
    description: 'Performant, secure server-side logic, custom hooks, and plugin architecture.',
    row: 'top'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'INTERACTIVE UI',
    shortLabel: 'Vanilla & ES6+',
    logo: '/images/tech-stack/javascript.svg',
    description: 'Fast, responsive client-side interactions and dynamic component states.',
    row: 'top'
  },
  {
    id: 'react',
    name: 'React',
    category: 'MODERN FRONTEND',
    shortLabel: 'UI Library',
    logo: '/images/tech-stack/react.svg',
    description: 'Component-driven user interfaces with clean state and modular architecture.',
    row: 'top'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'FULL-STACK APPS',
    shortLabel: 'React Framework',
    logo: '/images/tech-stack/nextjs.svg',
    description: 'Server-side rendering, static generation, routing, and high-performance web apps.',
    row: 'top'
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'MODERN STYLING',
    shortLabel: 'Utility Design',
    logo: '/images/tech-stack/tailwindcss.svg',
    description: 'Design system tokens, responsive layouts, and clean utility styling.',
    row: 'bottom'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'DATABASE',
    shortLabel: 'Relational DB',
    logo: '/images/tech-stack/mysql.svg',
    description: 'Structured schemas, efficient querying, and robust data persistence.',
    row: 'bottom'
  },
  {
    id: 'rest-api',
    name: 'REST APIs',
    category: 'INTEGRATIONS',
    shortLabel: 'Endpoints & Sync',
    logo: '/images/tech-stack/rest-api.svg',
    description: 'Connecting third-party services, webhooks, and headless data flows.',
    row: 'bottom'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'DESIGN TO CODE',
    shortLabel: 'Design Systems',
    logo: '/images/tech-stack/figma.svg',
    description: 'Translating design files into pixel-accurate, accessible code.',
    row: 'bottom'
  }
];

export const techPrinciples = [
  { id: '1', text: 'Battle-tested tools' },
  { id: '2', text: 'Modern standards' },
  { id: '3', text: 'Clean, maintainable code' },
  { id: '4', text: 'Scalable architecture' }
];
