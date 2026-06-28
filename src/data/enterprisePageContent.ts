import { homePage } from './homePage';
import type { PremiumPageContent } from './premiumPageTypes';

export const enterprisePageContent: PremiumPageContent = {
  slug: 'erp',
  dataCategory: 'enterprise',
  routePrefix: '/erp',
  layout: 'landscape',
  altCategoryLabel: 'Enterprise SaaS',
  pageTitle: 'Enterprise SaaS Product Design',
  titleWatermark: 'enterprise saas',
  heroSubtitle:
    'Designing ERP, CRM, dashboards, internal tools, and operational platforms for complex enterprise workflows across aviation, healthcare, HR tech, and other business-critical systems.',
  capabilitySummary:
    'I design enterprise SaaS products where operational complexity, role-based access, and data-heavy workflows meet real business outcomes. My work spans ERP and CRM platforms, admin dashboards, internal tools, and multi-step operational systems — translating stakeholder needs, user flows, and business rules into scalable product experiences. From product discovery and information architecture to high-fidelity UI systems, I help teams ship clearer workflows, stronger dashboard UX, and consistent design patterns across modules.',
  metadataCards: [
    { label: 'Role', value: 'Senior Product Designer' },
    {
      label: 'Focus Areas',
      value: 'ERP, CRM, Admin Platforms, Dashboards, Internal Tools',
    },
    {
      label: 'Core Skills',
      value: 'Workflow Mapping, Design Systems, RBAC UX, Data Visualization, Prototyping',
    },
    {
      label: 'Industries',
      lines: ['Aviation, healthcare, HR, retail, gaming,', 'media, enterprise platforms.'],
    },
    {
      label: 'Work Type',
      value: '0→1 builds, redesigns, workflow optimization, complex enterprise UX',
    },
    {
      label: 'Stakeholders / Deliverables',
      value: 'Product teams, founders, ops teams — wireframes, UI systems, prototypes',
    },
  ],
  problemsTitle: 'Problems I help solve through enterprise product design',
  problemCards: [
    {
      title: 'Operational complexity',
      description:
        'Turning messy multi-step workflows into clear product experiences with logical user flows, progressive disclosure, and task-focused interfaces.',
    },
    {
      title: 'Role confusion',
      description:
        'Designing around permissions, ownership, access levels, and user responsibilities — so RBAC and role-based UX feel intuitive, not restrictive.',
    },
    {
      title: 'Data overload',
      description:
        'Creating dashboards, data tables, filters, and reporting views that support faster decision-making through information hierarchy and data visualization.',
    },
    {
      title: 'System inconsistency',
      description:
        'Building reusable UI patterns, modular components, and scalable design systems that stay consistent across enterprise modules.',
    },
  ],
  workTitle: 'Selected Enterprise & Product Work',
  workIntro:
    'A selection of dashboards, internal tools, CRM workflows, commerce systems, and operational interfaces designed for multi-role, data-heavy product environments.',
  workHighlights: [
    {
      slug: 'erp-04',
      categoryTag: 'CRM · Dashboard',
      summary:
        'Designed lead tracking, task management, and deal workflow visibility for a multi-role sales environment.',
      focus: 'Dashboard UX, workflow clarity, action states, information hierarchy',
    },
    {
      slug: 'erp-02',
      categoryTag: 'Internal Tools',
      summary:
        'Built channel-based messaging, presence, and notification flows for enterprise team collaboration.',
      focus: 'Operational workflows, async collaboration, role-aware messaging UX',
    },
    {
      slug: 'erp-03',
      categoryTag: 'Operations Platform',
      summary:
        'Designed catalog, inventory, and order processing flows for a data-heavy commerce operations stack.',
      focus: 'Multi-step workflows, admin dashboards, inventory visibility',
    },
    {
      slug: 'erp-01',
      categoryTag: 'Enterprise Dashboard',
      summary:
        'Created a multi-panel analytics and content management surface for high-volume operational teams.',
      focus: 'Data visualization, dense layouts, power-user information architecture',
    },
    {
      slug: 'erp-06',
      categoryTag: 'Media Operations',
      summary:
        'Designed scheduling, publishing, and performance analytics for content operations at scale.',
      focus: 'Reporting dashboards, publishing workflows, media library UX',
    },
    {
      slug: 'erp-05',
      categoryTag: 'Retail Operations',
      summary:
        'Shaped product discovery, catalog management, and order tracking for retail operator workflows.',
      focus: 'Catalog UX, filtering systems, operator-facing admin tools',
    },
  ],
  approachTitle: 'How I design enterprise systems',
  approachCards: [
    {
      title: 'Workflow-first discovery',
      description:
        'Understanding stakeholders, tasks, dependencies, and operational bottlenecks before designing screens — through research, mapping, and cross-functional collaboration.',
    },
    {
      title: 'Role-based UX structure',
      description:
        'Designing around permissions, visibility, responsibilities, and user context so each role sees what they need without noise.',
    },
    {
      title: 'Data-heavy interface systems',
      description:
        'Translating business complexity into dashboards, forms, filters, tables, and operational flows built for daily enterprise use.',
    },
    {
      title: 'Scalable product patterns',
      description:
        'Building modular systems, reusable UI patterns, and design consistency across multiple enterprise modules and product surfaces.',
    },
  ],
  modulesTitle: 'Enterprise modules & platform depth',
  capabilityModules: [
    {
      title: 'ERP & Operational Systems',
      items: [
        'Financial management dashboards',
        'Inventory & supply chain interfaces',
        'Procurement workflows',
        'HR operations systems',
        'Manufacturing & operations tracking',
        'Analytics and reporting dashboards',
      ],
    },
    {
      title: 'CRM & Revenue Systems',
      items: [
        'Contact & account management',
        'Lead pipeline workflows',
        'Deal management surfaces',
        'Customer support & service tools',
        'Marketing operations',
        'Revenue reporting & performance dashboards',
      ],
    },
  ],
  outcomesTitle: 'What good enterprise design improves',
  outcomePoints: [
    'Clearer operational visibility',
    'Faster task completion',
    'Reduced friction across complex workflows',
    'Better decision-making through data clarity',
    'More consistent UX across modules',
    'Scalable internal systems for growing teams',
  ],
  philosophy:
    'Enterprise product design is about turning operational complexity into clarity — so teams can move faster, make better decisions, and trust the systems they use every day.',
  cta: {
    heading: 'Need a designer for ERP, CRM, dashboards, or internal tools?',
    body: 'I help teams transform complex workflows into clear, scalable product experiences through UX strategy, workflow mapping, and polished UI systems.',
    email: homePage.contact.email,
  },
  seo: {
    title: 'Enterprise SaaS Product Design — Amit Tadvi | Senior Product Designer',
    description:
      'Enterprise SaaS product design by Amit Tadvi — ERP, CRM, dashboard design, internal tools, workflow mapping, RBAC UX, and design systems for aviation, healthcare, and HR tech.',
    keywords:
      'enterprise SaaS product design, ERP UX, CRM design, dashboard design, internal tools, RBAC, workflow mapping, design systems, senior product designer',
    canonical: 'https://amittadvi.com/category/erp',
  },
  knowsAbout: [
    'Enterprise SaaS Product Design',
    'ERP',
    'CRM',
    'Dashboard Design',
    'Workflow Mapping',
    'Role-Based Access',
    'Design Systems',
    'Internal Tools',
    'Data Visualization',
  ],
};
