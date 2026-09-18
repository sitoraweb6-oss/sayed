export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  role: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  outcome: string;
  techStack: string[];
  skills: string[];
  liveUrl: string;
  image: string;
  cta: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  featured?: boolean;
}

/**
 * Automatically maps a project number or ID to its corresponding portfolio image.
 * e.g., 1 -> /images/portfolio/portfolio-01.webp, 15 -> /images/portfolio/portfolio-15.webp
 */
export function getPortfolioImageUrl(projectIdOrIndex: string | number): string {
  const num = typeof projectIdOrIndex === 'number' ? projectIdOrIndex : parseInt(projectIdOrIndex, 10);
  if (!isNaN(num) && num >= 1) {
    const padded = String(num).padStart(2, '0');
    return `/images/portfolio/portfolio-${padded}.webp`;
  }
  return `/images/portfolio/portfolio-01.webp`;
}

export const portfolioStats = [
  { value: "50+", label: "WEBSITES SHIPPED" },
  { value: "4+", label: "COUNTRIES SERVED" },
  { value: "3+", label: "YEARS OF EXPERIENCE" },
  { value: "TRUSTED", label: "BY AGENCIES & BUSINESSES" },
];

export const portfolioProjects: Project[] = [
  {
    id: "1",
    title: "Tanowra",
    slug: "tanowra",
    category: "E-commerce",
    shortDescription: "A premium online storefront presenting high-quality footwear and leather goods with a seamless shopping journey.",
    role: "WordPress & WooCommerce Developer",
    overview: "A refined e-commerce platform designed to showcase premium footwear and leather products. The project focused on building an intuitive digital environment that matched the high-end nature of the brand.",
    challenge: "The brand required a premium online storefront that matched the high quality of its leather goods, needing to present products clearly while maintaining a sophisticated aesthetic and fast load times.",
    solution: "Built a responsive e-commerce platform using WordPress and WooCommerce, incorporating advanced filtering, flash sales functionality, and curated product collections for an intuitive shopping journey.",
    keyFeatures: [
      "Responsive product grid architecture",
      "Advanced product filtering capabilities",
      "Integrated flash sale management",
      "Curated promotional collections",
      "Mobile-friendly navigation and checkout"
    ],
    outcome: "Delivered a polished, premium shopping experience that simplifies product discovery and purchasing across desktop and mobile devices.",
    techStack: ["WordPress", "WooCommerce", "Elementor"],
    skills: ["E-commerce Website Development", "Web Design", "WordPress", "Elementor"],
    liveUrl: "https://www.tanowra.com/",
    image: getPortfolioImageUrl(1),
    cta: "Need a premium e-commerce experience for your brand? Let’s discuss your project.",
    seo: {
      metaTitle: "Tanowra | Premium Leather & Footwear E-commerce Website",
      metaDescription: "Discover how we built a premium, responsive WordPress and WooCommerce storefront for Tanowra, focusing on clear product presentation and smooth navigation."
    },
    featured: true
  },
  {
    id: "2",
    title: "Mithaq — Financial Community Management",
    slug: "mithaq",
    category: "Custom Web Applications",
    shortDescription: "A private, database-driven React and Firebase application managing complex community financial operations and workflows.",
    role: "Full-Stack Web Developer",
    overview: "A comprehensive private web application developed to manage financial community operations. This system handles structured data architecture, custom business logic, and strict administrative workflows.",
    challenge: "The community needed a secure, reliable digital system to manage member submissions, financial records, and operational reporting, replacing manual processes with a structured workflow.",
    solution: "Engineered a custom React and Firebase application featuring a double-admin approval system, role-based access control, and automated calculations to securely streamline community management.",
    keyFeatures: [
      "Structured Firebase database architecture",
      "Double-admin approval workflow",
      "Role-based access and administrative controls",
      "Automated financial calculations",
      "Dashboard-based data management",
      "Downloadable reporting system"
    ],
    outcome: "Delivered a robust, secure web application that centralizes financial activity management and significantly improves operational efficiency.",
    techStack: ["React", "Firebase", "JavaScript"],
    skills: ["Full-Stack Web Development", "Frontend Architecture", "Database Design", "Workflow Implementation", "React"],
    liveUrl: "https://mithaq.sitora.org/",
    image: getPortfolioImageUrl(2),
    cta: "Have a complex workflow that needs a custom web application? Let’s discuss it.",
    seo: {
      metaTitle: "Mithaq | Custom Financial Community Management Platform",
      metaDescription: "A deep dive into Mithaq, a React and Firebase web application featuring custom business logic, secure workflows, and comprehensive reporting."
    },
    featured: true
  },
  {
    id: "3",
    title: "Glam Touch",
    slug: "glam-touch",
    category: "E-commerce",
    shortDescription: "An elegant WooCommerce store designed to showcase modest fashion apparel with intuitive filtering and mobile accessibility.",
    role: "WordPress & WooCommerce Developer",
    overview: "An elegant online store designed to showcase a diverse collection of modest fashion apparel, focusing heavily on intuitive navigation and mobile accessibility.",
    challenge: "The brand required a structured digital storefront to organize multiple categories of modest wear while ensuring a smooth, visually appealing shopping experience for mobile users.",
    solution: "Developed a WooCommerce-powered platform featuring custom CSS refinements, intuitive product filtering, integrated wishlists, and customer reviews to enhance buyer confidence.",
    keyFeatures: [
      "Multi-category navigation architecture",
      "Intuitive product filtering system",
      "Customer review integration",
      "Wishlist functionality",
      "Mobile-optimized checkout process"
    ],
    outcome: "Delivered a visually polished, highly functional e-commerce environment optimized for both desktop and mobile shoppers.",
    techStack: ["WordPress", "WooCommerce", "Custom CSS", "JavaScript"],
    skills: ["E-commerce Website Development", "Web Design", "WordPress", "WooCommerce", "HTML"],
    liveUrl: "https://glamtouch.com.bd/",
    image: getPortfolioImageUrl(3),
    cta: "Looking to elevate your online fashion store? Let’s connect.",
    seo: {
      metaTitle: "Glam Touch | Modest Fashion E-commerce Website",
      metaDescription: "Explore the development of Glam Touch, a responsive WordPress and WooCommerce store designed for smooth modest fashion shopping."
    }
  },
  {
    id: "4",
    title: "Continental Health",
    slug: "continental-health",
    category: "Healthcare",
    shortDescription: "A professional corporate healthcare portal designed to organize medical information, doctors, and appointment services.",
    role: "WordPress Developer",
    overview: "A professional corporate healthcare platform designed to organize extensive medical information, treatment packages, and department directories into an accessible digital format.",
    challenge: "The hospital needed a structured platform to help patients easily navigate medical services, find specialists, and access appointment booking systems without feeling overwhelmed by information density.",
    solution: "Built a responsive, patient-focused website featuring a comprehensive doctor directory, specialty center organization, and streamlined appointment routing.",
    keyFeatures: [
      "Doctor discovery directory",
      "Department and specialty organization",
      "Appointment booking integration",
      "Healthcare package presentation",
      "Patient-focused navigation flow"
    ],
    outcome: "Delivered an authoritative, easy-to-navigate digital healthcare experience that connects patients directly with vital medical services.",
    techStack: ["WordPress", "PHP", "JavaScript", "Custom CSS"],
    skills: ["Healthcare Website Development", "WordPress", "PHP", "Web Design"],
    liveUrl: "https://continental.health/",
    image: getPortfolioImageUrl(4),
    cta: "Need a structured, professional website for your healthcare facility? Let's talk.",
    seo: {
      metaTitle: "Continental Health | Professional Healthcare & Hospital Website",
      metaDescription: "Case study on building Continental Health, a patient-focused medical website featuring doctor directories and accessible treatment information."
    }
  },
  {
    id: "5",
    title: "Style Decor & Events",
    slug: "style-decor-events",
    category: "Custom Web Applications",
    shortDescription: "A dual-purpose React platform combining a high-end interior design portfolio with a secure business management dashboard.",
    role: "Full-Stack Web Developer",
    overview: "A modern digital platform for an interior design and event decoration agency, combining a visual portfolio showcase with practical business management tools.",
    challenge: "The agency required a dual-purpose platform to beautifully display visual portfolio work to clients while securely managing bookings and decorator profiles internally.",
    solution: "Developed a custom web application utilizing React and Node.js, integrating an elegant client-facing portfolio with robust authentication and a booking management backend.",
    keyFeatures: [
      "Interactive portfolio showcase",
      "Secure administrative dashboard",
      "Booking management system",
      "Decorator profile directories",
      "Location coverage mapping"
    ],
    outcome: "Delivered a comprehensive business platform that balances high-end visual presentation with practical backend administrative capabilities.",
    techStack: ["React", "Node.js", "JavaScript"],
    skills: ["Full-Stack Web Development", "Front-End Development", "Back-End Development", "Web Design"],
    liveUrl: "https://style-decor-milon.netlify.app/",
    image: getPortfolioImageUrl(5),
    cta: "Planning a custom business management platform? Let’s discuss your goals.",
    seo: {
      metaTitle: "Style Decor & Events | Custom Interior Design Portfolio & Admin System",
      metaDescription: "Discover how we built a dual-purpose React and Node.js platform for Style Decor, combining a visual portfolio with a secure management dashboard."
    },
    featured: true
  },
  {
    id: "6",
    title: "North Shore Roofing",
    slug: "north-shore-roofing",
    category: "Business Websites",
    shortDescription: "A conversion-optimized lead generation website designed to establish local authority and capture quote requests.",
    role: "Front-End Developer",
    overview: "A focused, responsive lead-generation website designed to establish local authority and capture qualified quote requests for an Australian roofing business.",
    challenge: "The company needed to upgrade their digital presence to build customer trust, clearly communicate roofing services, and guide visitors toward immediate contact.",
    solution: "Engineered a modern React-based website prioritizing clean UI, interactive service presentations, and prominent, conversion-optimized call-to-action elements.",
    keyFeatures: [
      "Conversion-optimized layout architecture",
      "Clear service presentation modules",
      "Interactive trust elements",
      "Responsive mobile-first design",
      "Integrated quote request flow"
    ],
    outcome: "Delivered a professional, high-trust digital asset that effectively presents services and encourages immediate customer inquiries.",
    techStack: ["React", "Tailwind CSS"],
    skills: ["React", "Tailwind CSS", "Website Redesign", "Web Development", "Web Design"],
    liveUrl: "https://north-shore.sitora.org/",
    image: getPortfolioImageUrl(6),
    cta: "Ready to build a high-performing website for your service business? Let’s talk.",
    seo: {
      metaTitle: "North Shore Roofing | Conversion-Focused Service Business Website",
      metaDescription: "A case study on developing a modern, lead-generating React website for North Shore Roofing, focused on trust and clear service communication."
    }
  },
  {
    id: "7",
    title: "Inaya Attire",
    slug: "inaya-attire",
    category: "E-commerce",
    shortDescription: "A responsive e-commerce storefront dedicated to modest fashion apparel, prioritizing usability and mobile shopping.",
    role: "Full-Stack Web Developer",
    overview: "A clean, modern e-commerce platform dedicated to showcasing a growing inventory of modest fashion apparel, built with a strong focus on core usability.",
    challenge: "The brand required an accessible, mobile-friendly online store that simplified the ordering flow and allowed for easy ongoing product management internally.",
    solution: "Developed a fully responsive WooCommerce storefront with a clear UI, prioritized product presentation, and a streamlined purchasing journey tailored for mobile users.",
    keyFeatures: [
      "Clear product presentation layouts",
      "Streamlined ordering flow",
      "Mobile-optimized shopping interface",
      "Ongoing e-commerce management capabilities",
      "User-focused interface design"
    ],
    outcome: "Delivered a reliable, easy-to-navigate retail environment that supports seamless product exploration and purchasing.",
    techStack: ["WordPress", "WooCommerce"],
    skills: ["E-commerce Website Development", "WooCommerce", "WordPress", "Web Development", "Web Design"],
    liveUrl: "https://inayaattire.com/",
    image: getPortfolioImageUrl(7),
    cta: "Looking for a reliable WooCommerce development partner? Let’s connect.",
    seo: {
      metaTitle: "Inaya Attire | Modest Fashion E-commerce Store",
      metaDescription: "Explore the development of Inaya Attire, a clean and mobile-friendly WooCommerce storefront built for smooth product browsing and ordering."
    }
  },
  {
    id: "8",
    title: "Midley",
    slug: "midley",
    category: "E-commerce",
    shortDescription: "A versatile multi-category online store built to handle diverse product lines with a structured discovery experience.",
    role: "WordPress & WooCommerce Developer",
    overview: "A versatile multi-category online store built to handle diverse product lines, ranging from travel accessories and bags to winter wear and lifestyle gadgets.",
    challenge: "The project required a structured platform capable of organizing vast, differing product categories cohesively while maintaining a smooth discovery experience.",
    solution: "Designed a responsive WordPress and Elementor site featuring robust category-based navigation, search functionality, and promotional sections to guide the shopping journey.",
    keyFeatures: [
      "Category-based navigation structure",
      "Integrated search functionality",
      "Dynamic promotional sections",
      "Wishlist and cart management",
      "Mobile-friendly product listings"
    ],
    outcome: "Delivered an engaging, highly organized e-commerce platform ready to support extensive inventory expansion.",
    techStack: ["WordPress", "Elementor", "CSS"],
    skills: ["WordPress E-commerce", "WordPress", "Elementor", "CSS", "Web Design"],
    liveUrl: "https://midley.shop/",
    image: getPortfolioImageUrl(8),
    cta: "Need a scalable multi-category e-commerce platform? Let’s discuss your vision.",
    seo: {
      metaTitle: "Midley | Multi-Category E-commerce Platform",
      metaDescription: "Learn how we developed Midley, a versatile WooCommerce store designed to organize and present diverse product lines with a clean user experience."
    }
  },
  {
    id: "9",
    title: "Sitora Web",
    slug: "sitora-web",
    category: "Agency Websites",
    shortDescription: "A premium Next.js digital agency website engineered to showcase technical expertise and generate qualified business leads.",
    role: "Founder & Full-Stack Web Developer",
    overview: "A premium digital agency website engineered to communicate technical expertise, showcase portfolio work, and generate qualified leads for web development services.",
    challenge: "The agency needed an authoritative digital footprint that demonstrated both design sensibility and technical capability to prospective business clients.",
    solution: "Built a high-performance Next.js and React application featuring custom interactive tools, an integrated proposal planner, and conversion-focused service sections.",
    keyFeatures: [
      "Interactive portfolio showcases",
      "Integrated proposal planner",
      "Digital audit tools",
      "Conversion-focused service sections",
      "Premium UI/UX animations"
    ],
    outcome: "Created a robust, professional platform that establishes agency credibility and effectively captures qualified business inquiries.",
    techStack: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    skills: ["Web Development", "Web Design", "Web Application", "React", "Next.js"],
    liveUrl: "https://sitora.org/",
    image: getPortfolioImageUrl(9),
    cta: "Looking to elevate your agency or business website? Let’s collaborate.",
    seo: {
      metaTitle: "Sitora Web | Premium Digital Agency & Portfolio Platform",
      metaDescription: "A technical overview of Sitora Web, a high-performance Next.js agency website featuring interactive tools and conversion-focused design."
    },
    featured: true
  },
  {
    id: "10",
    title: "Sign of Modesty",
    slug: "sign-of-modesty",
    category: "Landing Pages",
    shortDescription: "A highly focused product landing page funnel optimized for variant selection and immediate purchase action.",
    role: "WordPress Developer",
    overview: "A highly focused product landing page funnel optimized specifically for direct product communication, multi-variant selection, and immediate purchase action.",
    challenge: "The brand needed to eliminate traditional e-commerce distractions and construct a single, cohesive narrative to drive sales for a flagship product set.",
    solution: "Developed a custom WordPress experience utilizing CartFlows to create a frictionless single-page journey, incorporating multi-color and size selection directly into the order flow.",
    keyFeatures: [
      "Distraction-free product funnel",
      "Multi-variation selection interface",
      "Integrated single-page checkout",
      "Customer review showcases",
      "Accordion FAQ sections"
    ],
    outcome: "Delivered a smooth, mobile-optimized product selection experience that removes friction from the purchasing process.",
    techStack: ["WordPress", "Custom CSS", "HTML", "CartFlows"],
    skills: ["WordPress", "E-commerce Website Development", "Web Design", "Landing Page", "Elementor"],
    liveUrl: "https://signofmodesty.com/step/porda_set_new/",
    image: getPortfolioImageUrl(10),
    cta: "Need a conversion-focused product page? Let’s discuss your goals.",
    seo: {
      metaTitle: "Sign of Modesty | Conversion-Focused E-commerce Funnel",
      metaDescription: "Case study on developing a distraction-free product landing page for Sign of Modesty, featuring integrated variations and a seamless checkout flow."
    }
  },
  {
    id: "11",
    title: "EvaGlow",
    slug: "evaglow",
    category: "Landing Pages",
    shortDescription: "A dedicated WooCommerce landing page designed to present nutrition products and build trust through a clear purchase journey.",
    role: "Web Developer",
    overview: "A dedicated e-commerce landing page designed to effectively present nutrition products and guide consumers through a clear, trust-building purchase journey.",
    challenge: "The brand required a digital experience capable of presenting product details, building trust through social proof, and facilitating a smooth checkout for a specific supplement.",
    solution: "Engineered a comprehensive WooCommerce landing page combining clear pricing tiers, promotional sections, interactive FAQs, and prominent calls to action.",
    keyFeatures: [
      "Conversion-optimized layout",
      "Tiered package selection",
      "Social proof and testimonials",
      "Interactive FAQ sections",
      "Streamlined purchase journey"
    ],
    outcome: "Delivered a polished, trustworthy shopping environment that presents product benefits clearly and encourages decisive action.",
    techStack: ["WordPress", "WooCommerce"],
    skills: ["WordPress", "WordPress E-commerce", "Web Design", "Landing Page Development"],
    liveUrl: "https://buy.evaglow.sg/step/2-in-1-protien-collagen-shakes/",
    image: getPortfolioImageUrl(11),
    cta: "Ready to launch a dedicated product landing page? Let’s get started.",
    seo: {
      metaTitle: "EvaGlow | Nutrition Product E-commerce Landing Page",
      metaDescription: "Discover how we built a focused WooCommerce landing page for EvaGlow, emphasizing social proof, clear pricing, and a smooth purchase journey."
    }
  },
  {
    id: "12",
    title: "Future Bicycle",
    slug: "future-bicycle",
    category: "Interactive / 3D",
    shortDescription: "A high-impact digital showcase developed for a modern bicycle brand, utilizing a premium dark user interface.",
    role: "Web Designer & Front-End Developer",
    overview: "A dynamic, high-impact digital showcase developed for a modern bicycle brand, utilizing a premium dark user interface to highlight engineering and design.",
    challenge: "The project demanded a platform capable of presenting detailed technical specifications without cluttering the energetic, visually heavy product photography.",
    solution: "Designed and built a responsive React application featuring interactive configuration sections, clean specification tables, and a bold aesthetic that balances data with lifestyle imagery.",
    keyFeatures: [
      "Premium dark UI design",
      "Interactive product configuration",
      "Technical specification layouts",
      "Product comparison tools",
      "Responsive data grids"
    ],
    outcome: "Delivered a striking digital experience that effectively communicates product quality while maintaining an engaging interactive environment.",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    skills: ["Front-End Development", "Web Design", "React", "Tailwind CSS"],
    liveUrl: "https://future-bicycle.sitora.org/",
    image: getPortfolioImageUrl(12),
    cta: "Want to create an engaging product showcase for your brand? Let’s connect.",
    seo: {
      metaTitle: "Future Bicycle | Interactive React Product Showcase",
      metaDescription: "A look into the Future Bicycle showcase, a React-based platform blending premium dark UI design with interactive technical specifications."
    }
  },
  {
    id: "13",
    title: "Ocean — Underwater Exploration",
    slug: "ocean-underwater-exploration",
    category: "Interactive / 3D",
    shortDescription: "A visually driven web experience designed to simulate underwater exploration through cinematic styling and responsive UI.",
    role: "Front-End Developer",
    overview: "An immersive, visually driven web experience designed to simulate underwater exploration through cinematic visual styling and responsive interface design.",
    challenge: "The objective was to create a highly engaging, atmospheric interface that felt fluid and cinematic while ensuring smooth performance across devices.",
    solution: "Developed a custom front-end application utilizing React and Tailwind CSS, focusing on deep visual integration, immersive navigation elements, and interactive expedition showcases.",
    keyFeatures: [
      "Cinematic visual styling",
      "Interactive destination sections",
      "Immersive UI elements",
      "Smooth responsive navigation",
      "Mission briefing forms"
    ],
    outcome: "Delivered a captivating, concept-driven digital environment that successfully demonstrates advanced front-end visual execution.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    skills: ["Front-End Development", "Interactive Design", "React", "Tailwind CSS", "UI Development"],
    liveUrl: "https://ocean.sitora.org/",
    image: getPortfolioImageUrl(13),
    cta: "Interested in building an immersive digital experience? Let’s talk.",
    seo: {
      metaTitle: "Ocean Exploration | Cinematic Front-End Web Experience",
      metaDescription: "Explore the Ocean project, a visually immersive React web experience utilizing cinematic styling and interactive UI elements."
    }
  },
  {
    id: "14",
    title: "Movie Master Pro",
    slug: "movie-master-pro",
    category: "Custom Web Applications",
    shortDescription: "A modern React movie discovery platform featuring a cinematic dark theme and comprehensive media management tools.",
    role: "Front-End Developer",
    overview: "A modern, responsive movie discovery platform featuring a cinematic dark theme and comprehensive media management tools.",
    challenge: "The application required a robust interface to handle complex data filtering, search capabilities, and user collection management while maintaining a polished aesthetic.",
    solution: "Built a React-based front-end that provides intuitive navigation, detailed media views, and a personal dashboard for tracking watchlists and activity.",
    keyFeatures: [
      "Dynamic search and filtering",
      "Personal user dashboard",
      "Watchlist and collection management",
      "Detailed media views",
      "Cinematic dark UI"
    ],
    outcome: "Delivered a fast, organized entertainment platform that provides a premium user experience for discovering and managing media.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    skills: ["React", "Tailwind CSS", "Web Development", "Web Design"],
    liveUrl: "https://movie-master-pro-milon.netlify.app/",
    image: getPortfolioImageUrl(14),
    cta: "Planning a data-driven media or discovery application? Let’s collaborate.",
    seo: {
      metaTitle: "Movie Master Pro | React Movie Discovery Web Application",
      metaDescription: "Case study on Movie Master Pro, a responsive React application featuring dynamic media filtering, watchlists, and a cinematic UI."
    }
  },
  {
    id: "15",
    title: "Gander Futuristic",
    slug: "gander-futuristic",
    category: "Interactive / 3D",
    shortDescription: "An experimental proof-of-concept web experience exploring futuristic user interface patterns and interactions.",
    role: "Front-End Developer",
    overview: "An experimental, proof-of-concept web experience designed to explore futuristic user interface patterns and advanced interaction capabilities.",
    challenge: "The design objective was to push the boundaries of standard web layouts, testing unconventional navigation, typography, and interactive concepts without sacrificing basic usability.",
    solution: "Engineered a conceptual React application emphasizing non-standard spatial arrangements, fluid animations, and striking visual contrasts to create a distinct aesthetic.",
    keyFeatures: [
      "Experimental layout architecture",
      "Advanced interaction patterns",
      "Non-standard typography usage",
      "Fluid visual animations",
      "Concept-driven UI design"
    ],
    outcome: "Delivered a distinct, forward-looking visual experiment that showcases creative front-end execution and modern design thinking.",
    techStack: ["React"],
    skills: ["Creative Front-End Development", "Experimental Design", "React", "UI Concepting"],
    liveUrl: "https://gander-futuristic.vercel.app/",
    image: getPortfolioImageUrl(15),
    cta: "Looking for bold, experimental digital design? Let’s explore your ideas.",
    seo: {
      metaTitle: "Gander Futuristic | Experimental UI Web Experience",
      metaDescription: "A look at Gander Futuristic, a conceptual React web experience exploring advanced interaction patterns and non-standard layout architectures."
    }
  }
];
