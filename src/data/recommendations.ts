export interface RecommendationItem {
  id: string;
  name: string;
  title: string;
  date: string;
  relationship: string;
  src: string;
  imageCandidates: string[];
}

export const recommendationScreenshots: RecommendationItem[] = [
  {
    id: '1',
    name: 'MD AL-AMIN',
    title: 'Senior Web Developer & Designer | Tech Mentor',
    date: 'September 2026',
    relationship: 'MD was senior to Sayed but didn\'t manage Sayed directly',
    src: '/images/reviw1.webp',
    imageCandidates: [
      '/images/reviw1.webp',
      '/image/recomend/reviw1.webp',
      '/images/recomend/reviw1.webp',
      '/images/reviw1.png',
      '/image/recomend/reviw1.png',
    ],
  },
  {
    id: '2',
    name: 'Fahim Hossain',
    title: 'Software Engineer @ Enosis Solutions | Competitive Programmer',
    date: 'September 2026',
    relationship: 'Fahim was senior to Sayed but didn\'t manage Sayed directly',
    src: '/images/reviw2.webp',
    imageCandidates: [
      '/images/reviw2.webp',
      '/image/recomend/reviw2.webp',
      '/images/recomend/reviw2.webp',
      '/images/reviw2.png',
      '/image/recomend/reviw2.png',
    ],
  },
  {
    id: '3',
    name: 'Tanvir Hasan',
    title: 'Full-Stack Engineer | Node.js | React | AWS Cloud Certified',
    date: 'September 2026',
    relationship: 'Tanvir worked with Sayed on the same team',
    src: '/images/reviw3.webp',
    imageCandidates: [
      '/images/reviw3.webp',
      '/image/recomend/reviw3.webp',
      '/images/recomend/reviw3.webp',
      '/images/reviw3.png',
      '/image/recomend/reviw3.png',
    ],
  },
  {
    id: '4',
    name: 'Sabbir Ahmed',
    title: 'Founder & Lead Architect at DevCrafter | Tech Consultant',
    date: 'September 2026',
    relationship: 'Sabbir managed Sayed directly',
    src: '/images/reviw4.webp',
    imageCandidates: [
      '/images/reviw4.webp',
      '/image/recomend/reviw4.webp',
      '/images/recomend/reviw4.webp',
      '/images/reviw4.png',
      '/image/recomend/reviw4.png',
    ],
  },
  {
    id: '5',
    name: 'Naimur Rahman',
    title: 'Product Designer & UI/UX Strategist | Design Systems',
    date: 'September 2026',
    relationship: 'Naimur worked with Sayed on the same team',
    src: '/images/reviw5.webp',
    imageCandidates: [
      '/images/reviw5.webp',
      '/image/recomend/reviw5.webp',
      '/images/recomend/reviw5.webp',
      '/images/reviw5.png',
      '/image/recomend/reviw5.png',
    ],
  },
];
