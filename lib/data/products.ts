export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface Persona {
  role: string;
  useCase: string;
  icon: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  gradient: string;
}

export interface ProductPricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface ProductData {
  slug: string;
  name: string;
  website?: string;
  tagline: string;
  valueProp: string;
  description: string;
  gradient: string;
  heroImage?: string;
  accentColor: string;
  emoji: string;
  problem: { heading: string; problemStatement: string; solutionStatement: string };
  features: ProductFeature[];
  howItWorks: HowItWorksStep[];
  personas: Persona[];
  techStack: TechItem[];
  testimonials: Testimonial[];
  pricing: ProductPricingTier[];
  faqs: FaqItem[];
  seo: { title: string; description: string; keywords: string[] };
}

const products: ProductData[] = [
  {
    slug: "inn-professionals",
    name: "Inn Professionals",
    website: "https://innprof.com/",
    tagline: "Invoicing, HR & Projects — All in One",
    valueProp:
      "Stop juggling spreadsheets and six different apps. Inn Professionals puts your invoices, team, and projects in one clean workspace.",
    description:
      "A complete SaaS platform for freelancers and small businesses — invoicing, HR management, project tracking, expense reports, and team collaboration in one powerful app.",
    gradient: "from-blue-500 to-blue-700",
    heroImage: "/innprofessional.png",
    accentColor: "text-blue-400",
    emoji: "📄",
    problem: {
      heading: "Running a Business Shouldn't Require a Spreadsheet PhD",
      problemStatement:
        "Freelancers and small teams waste 6+ hours per week switching between invoicing tools, HR spreadsheets, project trackers, and expense apps that don't talk to each other — losing money in unbilled time and administrative chaos.",
      solutionStatement:
        "Inn Professionals unifies your entire back-office in one platform. Create and send invoices in 60 seconds, track your team's time and attendance, manage project milestones, and report expenses — all connected, all in real time.",
    },
    features: [
      {
        icon: "FileText",
        title: "Invoice Generation",
        description:
          "Create professional invoices in under 60 seconds. Customizable templates, automatic tax calculations, multi-currency support, and PDF / email delivery.",
      },
      {
        icon: "Users",
        title: "HR Management",
        description:
          "Employee records, leave tracking, performance reviews, onboarding checklists, and org chart management in one place.",
      },
      {
        icon: "Kanban",
        title: "Project Tracking",
        description:
          "Kanban boards, Gantt timelines, milestone tracking, and time logging — all linked to your invoiceable projects.",
      },
      {
        icon: "Receipt",
        title: "Expense Reports",
        description:
          "Snap receipts with mobile, categorize expenses, submit for approval, and export for accountants — no paper required.",
      },
      {
        icon: "Clock",
        title: "Time Tracking",
        description:
          "Billable time tracking with one-click timers. Automatically populate invoices with tracked hours for accurate billing every time.",
      },
      {
        icon: "BarChart2",
        title: "Business Reporting",
        description:
          "P&L snapshots, invoice aging reports, project profitability analysis, and team utilization dashboards.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Create Your Workspace",
        description: "Sign up free, add your business details, logo, and tax information in minutes.",
      },
      {
        step: 2,
        title: "Add Your Clients & Team",
        description: "Import or add clients, set up your team, and assign roles and project access.",
      },
      {
        step: 3,
        title: "Start Working",
        description:
          "Create invoices, track time, manage projects, and log expenses — everything linked together.",
      },
      {
        step: 4,
        title: "Get Paid & Grow",
        description:
          "Send invoices, accept payments, review reports, and use the insights to grow your business.",
      },
    ],
    personas: [
      {
        role: "Freelancer / Consultant",
        useCase:
          "Invoice clients professionally, track billable hours, and manage projects end-to-end without paying for six different tools.",
        icon: "💻",
      },
      {
        role: "Small Business Owner",
        useCase:
          "Manage your team's attendance, process expense reports, and keep projects on track alongside your billing workflow.",
        icon: "🏢",
      },
      {
        role: "Accounting & Finance Team",
        useCase:
          "Export clean data for bookkeeping, review expense submissions, and generate financial reports without manual reconciliation.",
        icon: "📊",
      },
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "AWS S3", category: "Storage" },
      { name: "Stripe", category: "Payments" },
      { name: "Redis", category: "Caching" },
      { name: "Docker", category: "Infrastructure" },
    ],
    testimonials: [
      {
        quote:
          "Inn Professionals replaced 4 tools for us. Invoicing, project tracking, expense reports, and basic HR — all in one. Saved us $200/month in subscriptions.",
        author: "Sarah K.",
        role: "Founder",
        company: "Pixel Studio",
        initials: "SK",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        quote:
          "The time tracking to invoice flow is seamless. I bill more hours because I actually capture them all now. My revenue went up 20% in the first quarter.",
        author: "Marcus T.",
        role: "Freelance Developer",
        company: "Independent",
        initials: "MT",
        gradient: "from-indigo-400 to-purple-600",
      },
    ],
    pricing: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        description: "Perfect for freelancers just getting started.",
        features: [
          "Up to 3 clients",
          "5 invoices per month",
          "Basic time tracking",
          "1 project",
          "PDF export",
          "Email support",
        ],
        cta: "Start Free",
        highlighted: false,
      },
      {
        name: "Pro",
        price: "$19",
        period: "/month",
        description: "Everything you need to run your business.",
        features: [
          "Unlimited clients",
          "Unlimited invoices",
          "HR management module",
          "Unlimited projects",
          "Expense reports",
          "Business reporting",
          "Priority support",
        ],
        cta: "Start Pro Trial",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Multi-company, SSO, and dedicated support for teams.",
        features: [
          "Everything in Pro",
          "Multi-company accounts",
          "SSO / SAML",
          "Custom integrations",
          "Dedicated account manager",
          "SLA support",
          "On-premise option",
        ],
        cta: "Contact Sales",
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: "Is Inn Professionals really free?",
        answer:
          "Yes. The Free tier is genuinely free with no credit card required. It supports up to 3 clients and 5 invoices per month — enough to get started. The Pro plan unlocks unlimited everything for $19/month.",
      },
      {
        question: "Can I import data from FreshBooks or QuickBooks?",
        answer:
          "Yes. We support CSV import for clients, invoices, and expenses. Direct API-based migration from FreshBooks and QuickBooks is available on the Pro plan.",
      },
      {
        question: "Is my financial data secure?",
        answer:
          "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We use AWS infrastructure with daily backups, SOC 2 Type II compliance in progress, and role-based access control on all accounts.",
      },
      {
        question: "Does it have a mobile app?",
        answer:
          "The web app is fully responsive and works on all mobile browsers. Dedicated iOS and Android apps are on our 2026 roadmap.",
      },
      {
        question: "What payment gateways are supported?",
        answer:
          "Stripe is natively integrated for online invoice payments. PayPal and Interac e-Transfer support are on the roadmap. You can also record manual payments for cash, cheque, or bank transfer.",
      },
    ],
    seo: {
      title: "Inn Professionals — Invoicing, HR & Project Management SaaS",
      description:
        "Free online invoicing platform with HR management, project tracking, and expense reports. Built for freelancers and small businesses.",
      keywords: [
        "free invoicing software",
        "online invoice generator",
        "HR management software",
        "project tracking",
        "small business software Canada",
      ],
    },
  },

  {
    slug: "teamconnect",
    name: "TeamConnect",
    tagline: "Your Whole Team, Always in Sync",
    valueProp:
      "Stop managing shifts in group chats and printed schedules. TeamConnect gives managers and staff a single place to schedule, communicate, and stay accountable.",
    description:
      "A comprehensive team management platform for scheduling shifts, coordinating staff, tracking attendance, and keeping teams connected — built for businesses with flexible workforces.",
    gradient: "from-purple-500 to-violet-700",
    heroImage: "/team_connect.png",
    accentColor: "text-purple-400",
    emoji: "👥",
    problem: {
      heading: "Shift Scheduling Shouldn't Live in a WhatsApp Group",
      problemStatement:
        "Managers at restaurants, retail stores, and service businesses lose 3–5 hours per week to shift scheduling, last-minute swap requests, and chasing staff for availability updates buried in group chats.",
      solutionStatement:
        "TeamConnect gives every shift a clear owner, every message a proper thread, and every attendance record an automatic audit trail — replacing group chats, scheduling spreadsheets, and manual timesheets with one purpose-built platform.",
    },
    features: [
      {
        icon: "Calendar",
        title: "Shift Scheduling",
        description:
          "Drag-and-drop weekly schedule builder with availability management, shift templates, and automatic conflict detection.",
      },
      {
        icon: "MessageSquare",
        title: "Team Chat",
        description:
          "Channel-based messaging with direct messages, shift-specific threads, file sharing, and push notifications.",
      },
      {
        icon: "Clock",
        title: "Attendance Tracking",
        description:
          "Clock-in/out via mobile with GPS verification, automatic overtime calculation, and real-time attendance dashboard.",
      },
      {
        icon: "RefreshCw",
        title: "Shift Swap & Cover",
        description:
          "Staff request shift swaps through the app. Managers approve with one tap — no back-and-forth texts needed.",
      },
      {
        icon: "DollarSign",
        title: "Payroll Integration",
        description:
          "Export attendance and hours directly to ADP, Gusto, and other payroll platforms — no manual data entry.",
      },
      {
        icon: "Bell",
        title: "Smart Notifications",
        description:
          "Automated shift reminders, coverage alerts, availability deadline notifications, and labour law compliance warnings.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Set Up Your Team",
        description:
          "Add staff profiles, define roles, set availability rules, and configure your locations in under 30 minutes.",
      },
      {
        step: 2,
        title: "Publish Your Schedule",
        description:
          "Build shifts with the drag-and-drop scheduler and publish to your team with one click — staff are notified instantly.",
      },
      {
        step: 3,
        title: "Manage in Real Time",
        description:
          "Track clock-ins, approve swaps, send announcements, and export payroll data — all from one dashboard.",
      },
    ],
    personas: [
      {
        role: "Shift Manager (Hospitality / Retail)",
        useCase:
          "Build the weekly schedule 80% faster, handle swaps without phone calls, and always know who is actually in the building.",
        icon: "🏪",
      },
      {
        role: "Multi-Location Business Owner",
        useCase:
          "See attendance and coverage across all locations in one dashboard. Spot staffing gaps before they become service problems.",
        icon: "🏢",
      },
      {
        role: "Hourly Employee",
        useCase:
          "See your schedule, request time off, swap shifts, and communicate with your team without needing a company email.",
        icon: "👷",
      },
    ],
    techStack: [
      { name: "React Native", category: "Mobile" },
      { name: "Next.js", category: "Web" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Firebase", category: "Notifications" },
      { name: "WebSockets", category: "Real-time" },
      { name: "AWS", category: "Infrastructure" },
    ],
    testimonials: [
      {
        quote:
          "We cut scheduling time from 3 hours a week to under 20 minutes. And swap requests are handled in the app — I don't get 11pm texts anymore.",
        author: "James R.",
        role: "General Manager",
        company: "The Harbour Restaurant",
        initials: "JR",
        gradient: "from-purple-400 to-violet-600",
      },
      {
        quote:
          "Managing 4 locations used to mean 4 separate group chats and 4 spreadsheets. TeamConnect gave me one dashboard for everything.",
        author: "Priya M.",
        role: "Operations Director",
        company: "QuickClean Services",
        initials: "PM",
        gradient: "from-pink-400 to-purple-600",
      },
    ],
    pricing: [
      {
        name: "Starter",
        price: "Free",
        description: "For small teams getting organized.",
        features: [
          "Up to 10 staff",
          "Basic shift scheduling",
          "Team chat",
          "1 location",
          "Mobile app",
          "Email support",
        ],
        cta: "Start Free",
        highlighted: false,
      },
      {
        name: "Pro",
        price: "$4",
        period: "/staff/month",
        description: "Full attendance, payroll export, and multi-location.",
        features: [
          "Unlimited staff",
          "Attendance tracking + GPS",
          "Payroll export",
          "Multi-location",
          "Shift swap management",
          "Advanced reporting",
          "Priority support",
        ],
        cta: "Start Pro Trial",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "SSO, compliance reporting, and dedicated support.",
        features: [
          "Everything in Pro",
          "SSO / SAML",
          "Labour law compliance tools",
          "Custom integrations",
          "Dedicated account manager",
          "SLA support",
          "API access",
        ],
        cta: "Contact Sales",
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: "Does TeamConnect work for businesses with irregular shift patterns?",
        answer:
          "Yes. The scheduler supports any combination of fixed shifts, rotating patterns, split shifts, and on-call availability. You can create shift templates for recurring patterns or build schedules from scratch each week.",
      },
      {
        question: "How does GPS clock-in work?",
        answer:
          "Staff clock in via the mobile app. If GPS verification is enabled for their location, the app checks that they are within a configurable radius of the work site before allowing clock-in. Managers can review GPS logs and override clock-in times if needed.",
      },
      {
        question: "Which payroll systems do you integrate with?",
        answer:
          "We currently support direct export to ADP Workforce Now and Gusto. QuickBooks Payroll and Ceridian Dayforce are on the roadmap. For other systems we provide a standardized CSV export that most payroll platforms accept.",
      },
      {
        question: "Can staff use it without a company email?",
        answer:
          "Yes. Staff can sign up with a personal email address or phone number. Managers invite staff by email or via a QR code that links to the team — no IT setup required.",
      },
      {
        question: "Is there a minimum team size?",
        answer:
          "No minimum. The free tier works for teams of 1–10. The Pro plan is priced per staff member, so you only pay for what you use.",
      },
    ],
    seo: {
      title: "TeamConnect — Shift Management & Team Communication",
      description:
        "Shift scheduling, team chat, attendance tracking, and payroll integration for businesses with flexible workforces. Built by Acme Technologies.",
      keywords: [
        "shift management software",
        "employee scheduling app",
        "team communication",
        "attendance tracking",
        "workforce management Canada",
      ],
    },
  },

  {
    slug: "datum51",
    name: "Datum51",
    tagline: "One Platform to Rule Your Data",
    valueProp:
      "Stop writing custom integration scripts that break silently at 3am. Datum51 gives your team a visual, maintainable, and monitored data pipeline from any source to any destination.",
    description:
      "A powerful data integration platform that connects your disparate systems via webhooks and pull-based data pipelines — enabling real-time data flow across your entire tech stack.",
    gradient: "from-orange-500 to-amber-600",
    heroImage: "/datum-51.png",
    accentColor: "text-orange-400",
    emoji: "🔗",
    problem: {
      heading: "Your Integration Scripts Are a Time Bomb",
      problemStatement:
        "Engineering teams spend 30–40% of their sprint capacity on integration maintenance: fixing broken webhooks, debugging third-party API changes, rewriting ETL scripts, and untangling the spaghetti that forms when 8 SaaS tools need to talk to each other.",
      solutionStatement:
        "Datum51 is a dedicated data hookpull and integration platform. Define your data sources and destinations once, configure transformation rules visually, and let Datum51 handle delivery, retries, error handling, and monitoring — so your engineers can focus on product.",
    },
    features: [
      {
        icon: "Webhook",
        title: "Webhook Orchestration",
        description:
          "Receive and dispatch webhooks from any service. Dead-letter queues, automatic retries with exponential backoff, and full payload inspection.",
      },
      {
        icon: "GitBranch",
        title: "Data Pipelines",
        description:
          "Visual pipeline builder for ETL workflows: filter, transform, map, and aggregate data between systems without custom scripts.",
      },
      {
        icon: "Plug",
        title: "500+ Connectors",
        description:
          "Pre-built connectors for Shopify, Stripe, Salesforce, HubSpot, PostgreSQL, MySQL, S3, and hundreds more — plus a universal REST / GraphQL connector.",
      },
      {
        icon: "Activity",
        title: "Real-Time Monitoring",
        description:
          "Live event stream, delivery success rates, latency metrics, and error alerting — see exactly what your data is doing at all times.",
      },
      {
        icon: "Shield",
        title: "Data Security",
        description:
          "End-to-end encryption, field-level masking, GDPR-compliant data handling, and SOC 2 Type II in progress.",
      },
      {
        icon: "Code2",
        title: "Developer-First API",
        description:
          "Every feature in the UI is available via REST API. Build pipelines programmatically, manage from CI/CD, and version-control your integration configs.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Connect Your Sources",
        description:
          "Add credentials for your data sources using pre-built connectors or the universal API connector — no code required.",
      },
      {
        step: 2,
        title: "Define Your Pipelines",
        description:
          "Use the visual builder to configure transformation rules, field mappings, filters, and destination routing.",
      },
      {
        step: 3,
        title: "Activate & Monitor",
        description:
          "Publish your pipeline and watch data flow in real time. Set alerts for failures, volume anomalies, or latency spikes.",
      },
      {
        step: 4,
        title: "Scale Confidently",
        description:
          "Datum51 scales horizontally with your data volume — from 1,000 to 100M events per day without reconfiguration.",
      },
    ],
    personas: [
      {
        role: "Backend Engineer / DevOps",
        useCase:
          "Replace bespoke integration scripts with a managed, monitored platform. Less code to maintain, fewer 3am pages.",
        icon: "⚙️",
      },
      {
        role: "Data Engineer / Analytics Team",
        useCase:
          "Build and manage ETL pipelines from production databases to your data warehouse without spinning up custom Airflow infrastructure.",
        icon: "📈",
      },
      {
        role: "CTO / Engineering Lead",
        useCase:
          "Gain visibility into all data flows across your entire stack. Reduce integration maintenance burden from 30% of sprint to under 5%.",
        icon: "🎯",
      },
    ],
    techStack: [
      { name: "Go", category: "Core Engine" },
      { name: "React / Next.js", category: "Dashboard" },
      { name: "PostgreSQL", category: "Metadata Store" },
      { name: "Kafka", category: "Event Streaming" },
      { name: "Redis", category: "Queue" },
      { name: "Kubernetes", category: "Orchestration" },
      { name: "AWS", category: "Infrastructure" },
    ],
    testimonials: [
      {
        quote:
          "We replaced 6 hand-rolled webhook handlers with Datum51 in a week. Our on-call alert volume dropped 70% in the first month.",
        author: "Alex C.",
        role: "Lead Engineer",
        company: "FinFlow Inc.",
        initials: "AC",
        gradient: "from-orange-400 to-amber-600",
      },
      {
        quote:
          "Setting up a Shopify-to-warehouse sync used to be a 2-week sprint. With Datum51 it took an afternoon. The visual pipeline builder is genuinely impressive.",
        author: "Dana W.",
        role: "Data Engineer",
        company: "NorthCart",
        initials: "DW",
        gradient: "from-yellow-400 to-orange-600",
      },
    ],
    pricing: [
      {
        name: "Free",
        price: "$0",
        period: "/month",
        description: "For developers exploring and small integration needs.",
        features: [
          "Up to 10,000 events/month",
          "3 active pipelines",
          "Community connectors",
          "7-day event history",
          "Community support",
        ],
        cta: "Start Free",
        highlighted: false,
      },
      {
        name: "Pro",
        price: "$99",
        period: "/month",
        description: "For teams running production integrations.",
        features: [
          "5 million events/month",
          "Unlimited pipelines",
          "All 500+ connectors",
          "90-day event history",
          "Real-time monitoring",
          "Email + Slack alerts",
          "Priority support",
        ],
        cta: "Start Pro Trial",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Unlimited scale, dedicated infra, and SLA.",
        features: [
          "Unlimited events",
          "Dedicated infrastructure",
          "Custom connectors",
          "1-year event history",
          "SSO / SAML",
          "SLA guarantee",
          "Dedicated solutions engineer",
        ],
        cta: "Contact Sales",
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: "How is Datum51 different from Zapier or Make?",
        answer:
          "Zapier and Make are designed for business users connecting cloud apps with simple trigger-action flows. Datum51 is built for engineering teams handling high-volume, real-time data pipelines with custom transformation logic, dead-letter queues, schema validation, and API-first management. It's an integration infrastructure platform, not a no-code automation tool.",
      },
      {
        question: "What happens when a destination is temporarily unavailable?",
        answer:
          "Events are queued and retried automatically with exponential backoff. Failed deliveries go to a dead-letter queue where you can inspect the payload, fix the issue, and replay events. No data is lost during downstream outages.",
      },
      {
        question: "Can I version-control my pipeline configurations?",
        answer:
          "Yes. All pipeline configurations are available via the REST API as JSON. You can commit them to your repository, manage changes through pull requests, and deploy via CI/CD just like application code.",
      },
      {
        question: "Is there a self-hosted option?",
        answer:
          "A self-hosted Docker Compose configuration is available on the Enterprise plan. Kubernetes Helm charts are also available for teams running on their own infrastructure. Contact us for self-hosted pricing.",
      },
      {
        question: "How is event volume calculated?",
        answer:
          "An event is one inbound webhook receipt, one outbound delivery, or one pipeline execution triggered by a scheduled pull. Most integrations generate between 1 and 3 events per business action depending on pipeline configuration.",
      },
    ],
    seo: {
      title: "Datum51 — Data Integration & Hookpull Platform",
      description:
        "Connect your entire tech stack with webhook automation, data pipelines, and API orchestration. Real-time data integration without the complexity.",
      keywords: [
        "data integration platform",
        "webhook automation",
        "ETL pipeline",
        "API integration",
        "data pipeline software",
      ],
    },
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): ProductData[] {
  return products;
}
