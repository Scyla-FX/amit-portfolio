import { homePage } from './homePage';
import type { PremiumPageContent } from './premiumPageTypes';

export const mobilePageContent: PremiumPageContent = {
  slug: 'app',
  dataCategory: 'mobile',
  routePrefix: '/app',
  layout: 'portrait',
  altCategoryLabel: 'Mobile Product Design',
  pageTitle: 'Mobile Product Design',
  titleWatermark: 'mobile product',
  heroSubtitle:
    'Designing iOS and Android product experiences grounded in user research, platform conventions, accessibility, and measurable product outcomes.',
  capabilitySummary:
    'I design mobile products where user psychology, business strategy, and platform constraints meet real-world usage. My work spans consumer apps, fintech products, food delivery, productivity tools, and cross-platform experiences — from discovery and onboarding to core flows and retention patterns. Using Apple HIG and Material You conventions, I translate research into intuitive navigation, polished UI systems, and prototypes teams can ship with confidence.',
  metadataCards: [
    { label: 'Role', value: 'Senior Product Designer' },
    {
      label: 'Focus Areas',
      value: 'iOS, Android, Consumer Apps, FinTech, Productivity, Onboarding UX',
    },
    {
      label: 'Core Skills',
      value: 'Interaction Design, User Flows, Prototyping, Usability Testing, Design Systems',
    },
    {
      label: 'Industries',
      lines: ['Fintech, food, lifestyle, social, productivity,', 'real estate, learning apps.'],
    },
    {
      label: 'Work Type',
      value: '0→1 apps, redesigns, flow optimization, cross-platform mobile UX',
    },
    {
      label: 'Stakeholders / Deliverables',
      value: 'Product teams, founders — wireframes, UI kits, interactive prototypes',
    },
  ],
  problemsTitle: 'Problems I help solve through mobile product design',
  problemCards: [
    {
      title: 'Drop-off in onboarding',
      description:
        'Designing activation flows that build trust quickly, explain value clearly, and reduce early-session abandonment.',
    },
    {
      title: 'Platform inconsistency',
      description:
        'Balancing brand identity with iOS and Android conventions so products feel native, not ported.',
    },
    {
      title: 'Low engagement & retention',
      description:
        'Structuring core loops, navigation, and micro-interactions that keep users returning and completing key tasks.',
    },
    {
      title: 'Accessibility gaps',
      description:
        'Designing inclusive mobile experiences with proper contrast, touch targets, dynamic type, and WCAG-aligned patterns.',
    },
  ],
  workTitle: 'Selected Mobile Product Work',
  workIntro:
    'A selection of iOS and Android apps across fintech, food, lifestyle, productivity, and learning — designed for clarity, engagement, and platform-native usability.',
  workHighlights: [
    {
      slug: 'finance-app',
      categoryTag: 'FinTech · iOS',
      summary:
        'Led design for a banking app with secure onboarding, transaction flows, and trust-focused dashboard UI.',
      focus: 'Onboarding UX, financial clarity, conversion and trust signals',
    },
    {
      slug: 'food-ninja-app',
      categoryTag: 'Food Delivery',
      summary:
        'Designed restaurant discovery, cart, and checkout flows that reduce ordering friction on mobile.',
      focus: 'Core user flows, task completion, one-handed usability',
    },
    {
      slug: 'social-media-app',
      categoryTag: 'Social · Cross-platform',
      summary:
        'Built connection flows, feed interactions, and onboarding patterns that drive activation and retention.',
      focus: 'Engagement loops, real-time UX, social interaction patterns',
    },
    {
      slug: 'real-estate-app',
      categoryTag: 'PropTech',
      summary:
        'Shaped property search, listing detail, and lead capture flows for a real estate discovery app.',
      focus: 'Search filters, listing UX, conversion-focused detail screens',
    },
    {
      slug: 'food-app',
      categoryTag: 'Cooking · Lifestyle',
      summary:
        'Designed step-by-step cooking mode and recipe discovery optimized for one-handed, in-session use.',
      focus: 'Interaction design, progress states, immersive session UX',
    },
    {
      slug: 'quiz-app',
      categoryTag: 'EdTech · Gamified',
      summary:
        'Created quiz flows, progress indicators, and reward patterns to sustain learning engagement.',
      focus: 'Gamification UX, feedback systems, retention-oriented flows',
    },
  ],
  approachTitle: 'How I design mobile products',
  approachCards: [
    {
      title: 'Research-first discovery',
      description:
        'Understanding user goals, context of use, and product constraints before defining flows and screen structure.',
    },
    {
      title: 'Platform-native patterns',
      description:
        'Designing within Apple HIG and Material You conventions while maintaining a cohesive product identity.',
    },
    {
      title: 'Flow & interaction design',
      description:
        'Mapping navigation, gestures, and micro-interactions that make complex tasks feel simple on small screens.',
    },
    {
      title: 'Test-driven iteration',
      description:
        'Validating flows through usability testing and refining UI based on behavioral feedback and product metrics.',
    },
  ],
  modulesTitle: 'Mobile product types & platform depth',
  capabilityModules: [
    {
      title: 'Consumer & Lifestyle Apps',
      items: [
        'Food delivery and on-demand services',
        'Social and community products',
        'Lifestyle and content apps',
        'Cooking, fitness, and daily-use tools',
        'Gamified learning and quiz products',
        'Real estate and discovery apps',
      ],
    },
    {
      title: 'Productivity & FinTech Apps',
      items: [
        'Banking and fintech mobile products',
        'Notes and productivity tools',
        'Onboarding and KYC flows',
        'Dashboard and account management',
        'Cross-platform iOS & Android systems',
        'Accessibility and WCAG-aligned mobile UX',
      ],
    },
  ],
  outcomesTitle: 'What good mobile design improves',
  outcomePoints: [
    'Higher activation and onboarding completion',
    'Stronger task completion rates',
    'Better retention and engagement',
    'More native platform usability',
    'Inclusive, accessible mobile experiences',
    'Clearer design-to-development handoff',
  ],
  philosophy:
    'Mobile product design is about earning attention in seconds and keeping trust through every tap — clarity, speed, and usability on small screens.',
  cta: {
    heading: 'Need a designer for iOS, Android, or cross-platform apps?',
    body: 'I help teams ship mobile products with research-led UX, platform-native UI, and prototypes ready for engineering.',
    email: homePage.contact.email,
  },
  seo: {
    title: 'Mobile App Design Portfolio — Amit Tadvi | Senior Product Designer',
    description:
      'Mobile product design by Amit Tadvi — iOS and Android app design with user research, Apple HIG, Material You, and WCAG 2.1 AA accessibility.',
    keywords:
      'mobile product design, iOS app design, Android app design, UX design, interaction design, prototyping, senior product designer',
    canonical: 'https://amittadvi.com/category/app',
  },
  knowsAbout: [
    'Mobile Product Design',
    'iOS Design',
    'Android Design',
    'Interaction Design',
    'User Flows',
    'Prototyping',
    'Usability Testing',
    'Apple HIG',
    'Material Design',
    'Accessibility',
  ],
};
