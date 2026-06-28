export interface ErpProject {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  thumbnail: string;
  screenImage: string;
}

export const erpCategoryContent = {
  title: 'Enterprise SaaS Product Design',
  titleWatermark: 'enterprise saas',
  pageTitle: 'Enterprise Product Design — ERP & CRM Systems',
  intro:
    'Designing for enterprise ERP and CRM platforms is one of the most complex and high-stakes challenges in product design. These systems sit at the core of how businesses operate — managing finances, inventory, human resources, customer relationships, and sales pipelines simultaneously. As a Senior Product Designer specializing in enterprise software, I translate this complexity into clear, efficient, and intuitive product experiences that empower business users to make faster decisions, reduce operational errors, and drive measurable productivity gains.',
  erpDefinition:
    "Enterprise Resource Planning (ERP) is a comprehensive business software solution that integrates and streamlines an organization's core internal operations — including finance, HR, inventory, manufacturing, procurement, and analytics — into a single unified platform. Designing for ERP requires deep understanding of complex user workflows, role-based access patterns, and data-dense dashboard design.",
  erpPractice: [
    {
      title: 'Financial Management Modules',
      text: 'Designing intuitive interfaces for accounting, budgeting, financial reporting dashboards, and audit trail workflows — prioritizing data clarity and error prevention.',
    },
    {
      title: 'Inventory & Supply Chain',
      text: 'Designing real-time inventory tracking interfaces, supply chain visibility dashboards, and procurement workflow tools that reduce operational overhead.',
    },
    {
      title: 'Human Resources & Payroll',
      text: 'Designing employee management portals, payroll processing flows, and HR self-service interfaces that reduce administrative friction.',
    },
    {
      title: 'Manufacturing & Operations',
      text: 'Designing production planning interfaces and operational dashboards that give floor managers real-time visibility and control.',
    },
    {
      title: 'Sales & Distribution Management',
      text: 'Designing sales order management, shipment tracking, and customer data interfaces that connect operations with revenue.',
    },
    {
      title: 'Analytics & Reporting Dashboards',
      text: 'Designing data visualization systems — charts, KPI dashboards, drill-down reports — that transform complex business data into actionable intelligence for decision-makers.',
    },
  ],
  crmDefinition:
    'Customer Relationship Management (CRM) is a specialized enterprise software solution centered on managing customer interactions, sales pipelines, marketing campaigns, and support operations. CRM product design demands a deep focus on workflow efficiency, sales user empathy, and reducing friction across high-frequency daily tasks.',
  crmPractice: [
    {
      title: 'Contact & Account Management',
      text: 'Designing clean, scannable contact record interfaces and account hierarchy views that give sales reps instant context at a glance.',
    },
    {
      title: 'Sales Pipeline & Lead Management',
      text: 'Designing Kanban-style pipeline views, lead scoring interfaces, and opportunity management workflows that help sales teams close deals faster.',
    },
    {
      title: 'Marketing Automation',
      text: 'Designing campaign builder interfaces, email marketing workflows, audience segmentation tools, and lead nurturing flow editors with clarity and efficiency.',
    },
    {
      title: 'Customer Support & Service Desk',
      text: 'Designing ticket management systems, support queue interfaces, SLA tracking dashboards, and customer communication tools optimized for support team productivity.',
    },
    {
      title: 'Analytics & Sales Performance Reporting',
      text: 'Designing sales performance dashboards, funnel analytics views, and forecasting interfaces that give revenue leaders real-time visibility into pipeline health.',
    },
  ],
  bodyParagraphs: [
    'ERP and CRM systems represent the backbone of modern business operations. When poorly designed, they create friction, errors, and lost productivity at scale. When designed well, they become competitive advantages — enabling faster decisions, better customer relationships, and streamlined operations across the entire organization.',
    'My approach to enterprise product design starts with deep stakeholder discovery — understanding the mental models, daily workflows, and pain points of every user role, from C-suite executives reviewing dashboards to frontline operators processing transactions. This role-based design thinking ensures every interface is purposefully crafted for the person using it, not just the system it connects to.',
    'I apply established enterprise UX patterns — progressive disclosure, contextual actions, inline editing, bulk operations, and role-based access controls — to reduce training time, minimize errors, and maximize user adoption across complex multi-module platforms.',
  ],
  workExamplesHeading: 'Enterprise Product Design',
  workExamplesScript: 'here is the work examples of erp & crm',
  heroIllustration: '/images/erp/hero-illustration.png',
  closingQuote:
    'Enterprise product design is where complexity meets consequence — the decisions I make directly impact how efficiently businesses operate and how confidently users do their jobs. Every ERP and CRM product in this portfolio reflects a rigorous design process: deep stakeholder discovery, role-based workflow mapping, data-driven design decisions, and relentless iteration. My goal is always the same — turn enterprise complexity into product clarity.',
};

export const erpProjects: ErpProject[] = [
  {
    slug: 'erp-01',
    name: 'Coral Lab — Employee Shift Scheduling Platform',
    tagline: 'Staff Scheduling & Operations',
    description:
      'Designed a real-time workforce operations and shift scheduling dashboard for hospitality and service teams. Features multi-role views, drag-and-drop shift planning, role-based resource allocation, and automated leave/absence management to streamline daily ops.',
    thumbnail: '/images/erp/coral-scheduling.jpg',
    screenImage: '/images/erp/coral-scheduling-preview.jpg',
  },
  {
    slug: 'erp-02',
    name: 'Carvo — Fleet Operations & Vehicle Tracking Platform',
    tagline: 'Fleet Tracking & Operations',
    description:
      'Designed a real-time vehicle fleet tracking and operations dashboard. Features interactive live maps, vehicle telemetry data, booking statistics, scheduling modules, and order pricing management in a clean, responsive interface.',
    thumbnail: '/images/erp/carvo-fleet.jpg',
    screenImage: '/images/erp/carvo-fleet-preview.jpg',
  },
  {
    slug: 'erp-03',
    name: 'Enterprise E-Learning & Course Operations Portal',
    tagline: 'Learning Management System',
    description:
      'Designed a dark-mode enterprise learning management system (LMS) and video instruction portal. Unifies course progress tracking, interactive video playback modules, sidebar assignments, peer comments, and related curriculum recommendations into a dense, immersive workspace.',
    thumbnail: '/images/erp/e-learning-platform.jpg',
    screenImage: '/images/erp/e-learning-platform-preview.jpg',
  },
  {
    slug: 'erp-04',
    name: 'Fintech Wealth Management & Payment Dashboard',
    tagline: 'Financial Analytics & Cards',
    description:
      'Designed a high-fidelity personal finance and wealth management dashboard. Integrates multi-card balances, transaction categorization, real-time spending analytics charts, connected marketplace subscriptions, and instant quick-transfer workflows in a clean, high-contrast interface.',
    thumbnail: '/images/erp/banking-dashboard.jpg',
    screenImage: '/images/erp/banking-dashboard-preview.jpg',
  },
  {
    slug: 'erp-05',
    name: 'Property & Real Estate Operations Dashboard',
    tagline: 'Property & Rental Management',
    description:
      'Designed an enterprise property management and sales dashboard. Unifies property metrics, monthly revenue trends, inventory sales performance charts, maintenance requests, and rental transaction logs into a clean, modern control center.',
    thumbnail: '/images/erp/property-dashboard.jpg',
    screenImage: '/images/erp/property-dashboard-preview.jpg',
  },
  {
    slug: 'erp-06',
    name: 'BeatBay — Music Streaming & Artist Analytics Platform',
    tagline: 'Media Operations & Streaming',
    description:
      'Designed a dark-mode music streaming and artist management portal. Features popular release listings, custom music players, real-time song popularity analytics, and related artist recommendations into a polished, immersive workspace.',
    thumbnail: '/images/erp/beatbay-media.jpg',
    screenImage: '/images/erp/beatbay-media-preview.jpg',
  },
];

export function getErpProject(slug: string): ErpProject | undefined {
  return erpProjects.find((p) => p.slug === slug);
}
