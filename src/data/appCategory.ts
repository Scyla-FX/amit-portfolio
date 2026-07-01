export interface AppProject {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  thumbnail: string;
  screenImage: string;
  gallery?: string[];
}

export const appCategoryContent = {
  title: 'Mobile Product Design',
  titleWatermark: 'mobile product',
  pageTitle: 'Mobile Product Design',
  intro:
    'Mobile product design sits at the intersection of user psychology, business strategy, and technical execution. As a Senior Product Designer, my approach goes beyond creating visually appealing interfaces — I focus on architecting end-to-end product experiences that solve real user problems on smartphones and tablets. Every mobile product I design is grounded in user research, validated through usability testing, and refined through data-driven iteration — ensuring the final product is not just beautiful, but measurably effective.',
  definitionLead:
    'Mobile Product Design is the discipline of planning, designing, and validating the complete user experience of a mobile application — encompassing UI design, UX strategy, interaction design, and information architecture to deliver seamless, accessible, and high-performing experiences across Android and iOS platforms.',
  definitionPillars: [
    {
      title: 'Product Thinking',
      text: 'Framing mobile design challenges within business goals, user needs, and technical constraints — ensuring every design decision drives measurable product outcomes.',
    },
    {
      title: 'User Interface (UI) Design',
      text: 'Crafting pixel-perfect visual interfaces including layout systems, color schemes, typography hierarchies, iconography, and imagery — all aligned to brand identity and platform conventions (Material Design / Apple HIG).',
    },
    {
      title: 'User Experience (UX) Design',
      text: 'Defining how users navigate, interact with, and accomplish goals within the product — through intuitive flows, clear information architecture, and friction-free interactions.',
    },
    {
      title: 'Responsive & Adaptive Design',
      text: 'Designing fluid layouts and adaptive components that respond intelligently to varying screen sizes, orientations, and device resolutions across the full mobile ecosystem.',
    },
    {
      title: 'Information Architecture',
      text: 'Structuring content, features, and navigation in a logical, scannable hierarchy — reducing cognitive load and helping users find what they need instantly.',
    },
    {
      title: 'Interaction & Micro-interaction Design',
      text: 'Designing meaningful motion, gestures, transitions, and touch interactions that provide feedback, guide user attention, and elevate product feel.',
    },
    {
      title: 'Performance-Aware Design',
      text: 'Designing with performance in mind — optimizing asset weights, skeleton states, loading patterns, and offline experiences to ensure the product feels fast and reliable.',
    },
    {
      title: 'Accessibility (WCAG 2.1 AA)',
      text: 'Building inclusive mobile experiences by adhering to accessibility guidelines — ensuring the product is usable by people of all abilities across contrast ratios, touch targets, screen readers, and dynamic type.',
    },
    {
      title: 'Platform-Specific Design',
      text: 'Designing within and around the conventions of Android (Material You) and iOS (Human Interface Guidelines) to deliver native-feeling, consistent product experiences.',
    },
    {
      title: 'Usability Testing & Iteration',
      text: 'Running moderated and unmoderated usability testing sessions, analyzing behavioral data, and iterating on designs to continuously improve product performance and user satisfaction.',
    },
  ],
  bodyParagraphs: [
    "Great mobile products don't happen by accident — they are the result of intentional product design that aligns user goals with business outcomes. My mobile product design process starts with deep discovery: understanding who the users are, what problems they face, and what success looks like for the product and the business.",
    'From there, I translate insights into clear product requirements, user flows, and information architecture before moving into wireframes and high-fidelity UI design. Every design decision is validated — through peer reviews, stakeholder feedback, and real user testing — before being handed off to engineering with comprehensive Figma specs, component documentation, and design tokens.',
    "The result is mobile products that don't just look great — they perform, convert, retain, and delight.",
  ],
  workExamplesHeading: 'Mobile Product Design',
  workExamplesScript: 'here is the work examples of mobile application',
  heroIllustration: '/images/apps/hero-illustration.png',
  closing:
    'Explore my portfolio showcasing a collection of meticulously crafted mobile application designs. With a focus on harmonizing aesthetics and functionality, each project reflects my dedication to creating compelling product experiences — from intuitive navigation to visually captivating interfaces tailored to user and business goals.',
};

export const appProjects: AppProject[] = [
  {
    slug: 'fitness-app',
    name: 'Fitness Journey',
    tagline: 'Fitness Tracking App',
    description:
      'Designed a comprehensive fitness tracking application focusing on personalized workout journeys, hydration monitoring, and progress visualization with an immersive dark-mode UI.',
    thumbnail: '/images/apps/fitness-app.jpg',
    screenImage: '/images/apps/fitness-app.jpg',
    gallery: [
      '/images/apps/fitness-journey/seq-1.png',
      '/images/apps/fitness-journey/seq-2.png',
      '/images/apps/fitness-journey/seq-3.png',
      '/images/apps/fitness-journey/seq-4.png',
      '/images/apps/fitness-journey/seq-5.png',
      '/images/apps/fitness-journey/seq-6.png',
      '/images/apps/fitness-journey/seq-7.png',
      '/images/apps/fitness-journey/seq-8.png',
      '/images/apps/fitness-journey/seq-9.png',
      '/images/apps/fitness-journey/seq-10.png',
    ],
  },
  {
    slug: 'travel-app',
    name: 'Vibrant Odyssey',
    tagline: 'Travel Booking App',
    description:
      'Designed a seamless travel discovery and booking platform featuring intuitive date selection, destination preview cards, and streamlined search architecture for modern travelers.',
    thumbnail: '/images/apps/travel-app.jpg',
    screenImage: '/images/apps/travel-app.jpg',
    gallery: [
      '/images/apps/travel-app/new-seq-1.png',
      '/images/apps/travel-app/new-seq-2.png',
      '/images/apps/travel-app/new-seq-3.png',
      '/images/apps/travel-app/new-seq-4.png',
      '/images/apps/travel-app/new-seq-5.png',
      '/images/apps/travel-app/new-seq-6.png',
      '/images/apps/travel-app/new-seq-7.png',
      '/images/apps/travel-app/new-seq-8.png',
      '/images/apps/travel-app/new-seq-9.png',
    ],
  },
  {
    slug: 'finance-app',
    name: 'Jewel Bank',
    tagline: 'Fintech Mobile App',
    description:
      'Led product design for a fintech savings and banking application — designing secure onboarding, transaction flows, and dashboard UI with a focus on trust, clarity, and conversion.',
    thumbnail: '/images/apps/finance-app.jpg',
    screenImage: '/images/apps/finance-app.jpg',
    gallery: [
      '/images/apps/finance-app/seq-1.png',
      '/images/apps/finance-app/seq-2.png',
      '/images/apps/finance-app/seq-3.png',
      '/images/apps/finance-app/seq-4.png',
      '/images/apps/finance-app/seq-5.png',
      '/images/apps/finance-app/seq-6.png',
      '/images/apps/finance-app/seq-7.png',
      '/images/apps/finance-app/seq-8.png',
      '/images/apps/finance-app/seq-9.png',
      '/images/apps/finance-app/seq-10.png',
    ],
  },
  {
    slug: 'diet-app',
    name: 'Diet Journey',
    tagline: 'Diet & Calorie Tracker',
    description:
      'Designed an engaging diet and calorie tracking mobile product with macronutrient breakdown, daily calorie charts, and clear progress indicators to motivate users on their health journey.',
    thumbnail: '/images/apps/diet-app.jpg',
    screenImage: '/images/apps/diet-app.jpg',
  },
  {
    slug: 'social-app',
    name: 'Connect',
    tagline: 'Social Discovery App',
    description:
      'Designed a proximity-based social networking application featuring intuitive connection flows, interactive map UI, and seamless onboarding to help users meet new people around them.',
    thumbnail: '/images/apps/social-app.jpg',
    screenImage: '/images/apps/social-app.jpg',
  },
  {
    slug: 'journal-app',
    name: 'Lumen',
    tagline: 'AI Journaling App',
    description:
      'Designed a minimalist, distraction-free writing environment for self-reflection. Features include an AI companion interface, calming typography, and smooth authentication flows.',
    thumbnail: '/images/apps/journal-app.jpg',
    screenImage: '/images/apps/journal-app.jpg',
  },
  {
    slug: 'quiz-app',
    name: 'Trivia Master',
    tagline: 'Gamified Quiz App',
    description:
      'Designed an engaging educational application with vibrant UI, progress indicators, interactive quiz categories, and competitive leaderboards to sustain learning engagement.',
    thumbnail: '/images/apps/quiz-app.jpg',
    screenImage: '/images/apps/quiz-app.jpg',
  },
  {
    slug: 'memory-app',
    name: 'Time Vault',
    tagline: 'Memory Capsule App',
    description:
      'Designed a nostalgic and elegant application for sending messages to the future. Focuses on premium visual aesthetics, countdown timers, and emotional user interactions.',
    thumbnail: '/images/apps/memory-app.jpg',
    screenImage: '/images/apps/memory-app.jpg',
  },
];

export function getAppProject(slug: string): AppProject | undefined {
  return appProjects.find((p) => p.slug === slug);
}
