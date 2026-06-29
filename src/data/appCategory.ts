export interface AppProject {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  thumbnail: string;
  screenImage: string;
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
    slug: 'fashion-app',
    name: 'Haruki',
    tagline: 'Lifestyle & Content App',
    description:
      'Designed end-to-end product experience for a lifestyle content platform — including onboarding flow, home feed architecture, and content discovery patterns optimized for engagement and retention.',
    thumbnail: '/images/apps/app-thumbnail.jpg',
    screenImage: '/images/apps/app-thumbnail.jpg',
  },
  {
    slug: 'finance-app',
    name: 'Jewel Bank',
    tagline: 'Fintech Mobile App',
    description:
      'Led product design for a fintech savings and banking application — designing secure onboarding, transaction flows, and dashboard UI with a focus on trust, clarity, and conversion.',
    thumbnail: '/images/apps/app-thumbnail.jpg',
    screenImage: '/images/apps/app-thumbnail.jpg',
  },
  {
    slug: 'food-ninja-app',
    name: 'FoodNinja',
    tagline: 'Food Delivery App',
    description:
      'Designed complete user journey for a food delivery mobile product — restaurant discovery, menu browsing, cart, and checkout flows — reducing ordering friction and improving task completion rate.',
    thumbnail: '/images/apps/app-thumbnail.jpg',
    screenImage: '/images/apps/app-thumbnail.jpg',
  },
  {
    slug: 'social-media-app',
    name: 'Social Connect',
    tagline: 'Social Networking App',
    description:
      'Designed social networking mobile product with a focus on connection flows, real-time interaction patterns, and onboarding experiences that drive user activation and retention.',
    thumbnail: '/images/apps/app-thumbnail.jpg',
    screenImage: '/images/apps/app-thumbnail.jpg',
  },
  {
    slug: 'notes-app',
    name: 'Note App',
    tagline: 'Productivity Tool',
    description:
      'Designed a minimalist productivity mobile application featuring clean note creation flows, organizational architecture, and gesture-based interactions for power users.',
    thumbnail: '/images/apps/app-thumbnail.jpg',
    screenImage: '/images/apps/app-thumbnail.jpg',
  },
  {
    slug: 'food-app',
    name: 'Cooking Experience',
    tagline: 'Cooking Guide App',
    description:
      'Designed an immersive step-by-step cooking guide application — including recipe discovery, in-session cooking mode, and progress-tracking interactions optimized for one-handed use.',
    thumbnail: '/images/apps/app-thumbnail.jpg',
    screenImage: '/images/apps/app-thumbnail.jpg',
  },
  {
    slug: 'quiz-app',
    name: 'Quiz',
    tagline: 'Gamified Learning App',
    description:
      'Designed a gamified quiz and learning mobile product — including question flow UX, progress indicators, reward systems, and leaderboard interactions to drive engagement and retention.',
    thumbnail: '/images/apps/app-thumbnail.jpg',
    screenImage: '/images/apps/app-thumbnail.jpg',
  },
  {
    slug: 'real-estate-app',
    name: 'Dream Home',
    tagline: 'Real Estate App',
    description:
      'Designed end-to-end property discovery mobile experience — including search filters, listing detail views, virtual tour integration touchpoints, and lead capture flows optimized for conversion.',
    thumbnail: '/images/apps/app-thumbnail.jpg',
    screenImage: '/images/apps/app-thumbnail.jpg',
  },
];

export function getAppProject(slug: string): AppProject | undefined {
  return appProjects.find((p) => p.slug === slug);
}
