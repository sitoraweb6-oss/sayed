export interface Brand {
  id: string;
  name: string;
  filename: string; // The filename of the logo inside public/images/brand-logos/
}

export const brands: Brand[] = [
  // Example entries using real project names. 
  // Since the files don't exist yet, they will gracefully render the fallback text.
  {
    id: 'mithaq',
    name: 'Mithaq',
    filename: 'mithaq.webp',
  },
  {
    id: 'tanowra',
    name: 'Tanowra',
    filename: 'tanowra.webp',
  },
  {
    id: 'haya-fashion',
    name: 'Haya Fashion',
    filename: 'haya-fashion.png',
  },
  {
    id: 'continental-health',
    name: 'Continental Health',
    filename: 'continental-health.svg',
  }
];
