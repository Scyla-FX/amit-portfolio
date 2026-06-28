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
    name: 'Gaming & Entertainment Dashboard',
    tagline: 'Web Platform',
    description:
      'Designed a complex multi-panel entertainment management dashboard featuring real-time content feeds, user activity analytics, and media management interfaces. Focused on high-density data layout with clear visual hierarchy to support power users managing large content libraries.',
    thumbnail: '/images/erp/gaming-dashboard.png',
    screenImage: '/images/erp/gaming-dashboard.png',
  },
  {
    slug: 'erp-02',
    name: 'Team Communication & Collaboration Platform',
    tagline: 'Enterprise Messaging',
    description:
      'Designed a real-time team communication product featuring channel-based messaging, user presence indicators, file sharing interfaces, and notification management — optimized for enterprise team productivity and async collaboration workflows.',
    thumbnail: '/images/erp/team-communication.png',
    screenImage: '/images/erp/team-communication.png',
  },
  {
    slug: 'erp-03',
    name: 'E-Commerce & Product Management Platform',
    tagline: 'Operations Dashboard',
    description:
      'Designed an end-to-end e-commerce operations platform including product catalog management, inventory tracking, order processing workflows, and seller analytics dashboards — reducing operational task time through streamlined interface design.',
    thumbnail: '/images/erp/ecommerce-platform.png',
    screenImage: '/images/erp/ecommerce-platform.png',
  },
  {
    slug: 'erp-04',
    name: 'CRM Sales Pipeline & Task Management Dashboard',
    tagline: 'Kanban CRM',
    description:
      'Designed a full-featured CRM dashboard with Kanban pipeline views, lead management interfaces, task tracking, calendar integration, and sales performance analytics — enabling sales teams to manage their entire workflow from a single, unified product surface.',
    thumbnail: '/images/erp/crm-pipeline.png',
    screenImage: '/images/erp/crm-pipeline.png',
  },
  {
    slug: 'erp-05',
    name: 'Furniture & Home Decor E-Commerce Platform',
    tagline: 'Retail Management',
    description:
      'Designed a product discovery and e-commerce management interface for a furniture retail platform — including product catalog browsing, filtering systems, inventory management views, and order tracking dashboards optimized for both customer-facing and operator-facing use cases.',
    thumbnail: '/images/erp/furniture-ecommerce.png',
    screenImage: '/images/erp/furniture-ecommerce.png',
  },
  {
    slug: 'erp-06',
    name: 'Media & Content Management Dashboard',
    tagline: 'Media Operations',
    description:
      'Designed a dark-mode content management and media operations dashboard featuring content scheduling interfaces, media library management, performance analytics, and multi-channel publishing workflows — designed for media operations teams managing high-volume content pipelines.',
    thumbnail: '/images/erp/media-dashboard.png',
    screenImage: '/images/erp/media-dashboard.png',
  },
];

export function getErpProject(slug: string): ErpProject | undefined {
  return erpProjects.find((p) => p.slug === slug);
}
