export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  icon: string;
  category: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroGradient: string;
  accentColor: string;
  accentBg: string;
  iconName: string;
  stats: ServiceStat[];
  overview: { heading: string; body: string };
  features: ServiceFeature[];
  process: ProcessStep[];
  differentiators: Differentiator[];
  portfolioItems: PortfolioItem[];
  pricing: PricingTier[];
  faqs: FaqItem[];
  seo: { title: string; description: string; keywords: string[] };
}

const services: ServiceData[] = [
  {
    slug: "wordpress",
    name: "WordPress Development",
    tagline: "Websites That Work As Hard As You Do",
    description:
      "We craft WordPress websites that are fast, secure, and built to rank — from brochure sites to full WooCommerce platforms. Every pixel intentional, every line of code purposeful.",
    heroGradient: "from-blue-500 to-blue-700",
    accentColor: "text-blue-400",
    accentBg: "bg-blue-50",
    iconName: "Globe",
    stats: [
      { value: "50+", label: "Sites Launched" },
      { value: "98", label: "Avg PageSpeed Score" },
      { value: "5+", label: "Years WordPress Expertise" },
      { value: "100%", label: "Client Retention" },
    ],
    overview: {
      heading: "Strategic WordPress Development, Not Just Websites",
      body: "WordPress powers 43% of the web for good reason — it's flexible, extensible, and developer-friendly. But most WordPress agencies deliver templated results. We treat every project as a bespoke engineering challenge: choosing the right architecture, writing clean maintainable code, and delivering sites that load in under 2 seconds on mobile. Whether you need a conversion-focused landing page, a multi-author editorial platform, or a full WooCommerce store with custom checkout flows, we design and build it from the ground up.",
    },
    features: [
      {
        icon: "Globe",
        title: "Custom Theme Development",
        description:
          "Purpose-built themes coded from scratch or refined from a starter — no bloated page builders, no compromises.",
      },
      {
        icon: "ShoppingBag",
        title: "WooCommerce Stores",
        description:
          "End-to-end WooCommerce development: product catalogs, checkout optimization, payment gateways, and inventory management.",
      },
      {
        icon: "Puzzle",
        title: "Plugin Development",
        description:
          "Custom plugins for any functionality requirement — from booking systems to membership portals to complex pricing calculators.",
      },
      {
        icon: "Search",
        title: "Technical SEO Architecture",
        description:
          "Semantic HTML, Core Web Vitals optimization, structured data, XML sitemaps, and search-ready URL structures baked in from day one.",
      },
      {
        icon: "Shield",
        title: "Security & Hardening",
        description:
          "Role-based access control, malware scanning, two-factor authentication, and regular security audits to keep your site airtight.",
      },
      {
        icon: "Zap",
        title: "Performance Optimization",
        description:
          "Object caching, CDN integration, image optimization pipelines, and lazy loading for sub-2-second load times globally.",
      },
      {
        icon: "Smartphone",
        title: "Mobile-First Responsive",
        description:
          "Every site is designed for mobile as the primary experience, then scaled up — not the other way around.",
      },
      {
        icon: "HeartHandshake",
        title: "Ongoing Maintenance",
        description:
          "Monthly security updates, performance monitoring, content updates, and priority support so you never worry about your site.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Discovery",
        description:
          "We audit your current site, map your goals, identify your audience, and define success metrics before writing a single line of code.",
      },
      {
        number: 2,
        title: "Design",
        description:
          "Wireframes and high-fidelity mockups. We design for conversion first, aesthetics second — then make both work together.",
      },
      {
        number: 3,
        title: "Build",
        description:
          "Development sprint with weekly check-ins. We build in a staging environment with version control so you can track every change.",
      },
      {
        number: 4,
        title: "Launch",
        description:
          "Pre-launch checklist: speed test, cross-browser QA, accessibility audit, SEO verification, and backup configuration before going live.",
      },
      {
        number: 5,
        title: "Support",
        description:
          "Post-launch support window, documentation handoff, team training session, and optional ongoing maintenance retainer.",
      },
    ],
    differentiators: [
      {
        title: "No Page Builders",
        description:
          "We write real code. No Elementor, no Divi — just clean, fast, maintainable WordPress that you own entirely.",
      },
      {
        title: "Core Web Vitals First",
        description:
          "Every delivery passes our internal performance checklist. We target LCP under 1.5s, FID under 100ms, and CLS under 0.1.",
      },
      {
        title: "SEO Built In, Not Bolted On",
        description:
          "Technical SEO is an engineering discipline, not a plugin setting. We build it into the architecture from the first commit.",
      },
      {
        title: "Full Ownership",
        description:
          "No proprietary frameworks, no licence locks. You own every theme, plugin, and line of code we write.",
      },
    ],
    portfolioItems: [
      {
        title: "E-Commerce Platform",
        description:
          "High-volume WooCommerce store with custom product configurator, tiered pricing, and advanced filtering for 10,000+ SKUs.",
        tags: ["WooCommerce", "PHP", "React", "MySQL"],
        gradient: "from-orange-500 to-yellow-500",
        icon: "🛒",
        category: "E-Commerce",
      },
      {
        title: "InnProfessionals",
        description:
          "Hospitality management SaaS with booking, staff scheduling, and revenue tracking built on WordPress + custom REST API.",
        tags: ["WordPress", "REST API", "React", "PostgreSQL"],
        gradient: "from-blue-500 to-indigo-700",
        icon: "💼",
        category: "SaaS Platform",
      },
      {
        title: "Real Estate Portal",
        description:
          "Custom property listing theme with MLS integration, advanced search filters, and agent CRM built on WordPress.",
        tags: ["WordPress", "PHP", "ACF", "REST API"],
        gradient: "from-teal-500 to-cyan-600",
        icon: "🏠",
        category: "Web Application",
      },
    ],
    pricing: [
      {
        name: "Starter",
        price: "Starting from $2,500",
        description: "Perfect for small businesses needing a professional online presence.",
        features: [
          "Up to 10 pages",
          "Custom responsive theme",
          "Basic SEO setup",
          "Contact form integration",
          "30-day post-launch support",
          "1 revision round",
        ],
        cta: "Get a Quote",
        highlighted: false,
      },
      {
        name: "Growth",
        price: "Starting from $7,500",
        description: "Full-featured site with e-commerce and advanced functionality.",
        features: [
          "Everything in Starter",
          "WooCommerce integration",
          "Custom plugin development",
          "Advanced SEO package",
          "Performance optimization",
          "90-day post-launch support",
          "Unlimited revisions",
        ],
        cta: "Start Project",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        description: "Enterprise-grade sites with complex integrations and dedicated support.",
        features: [
          "Everything in Growth",
          "Multi-site network",
          "ERP / CRM integrations",
          "Custom checkout flows",
          "Priority support SLA",
          "Quarterly strategy calls",
          "Dedicated project manager",
        ],
        cta: "Contact Us",
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: "How long does a WordPress project take?",
        answer:
          "A brochure site (5–10 pages) typically takes 4–6 weeks from kickoff. A WooCommerce store with custom features usually runs 8–14 weeks. We provide a detailed timeline after the discovery call.",
      },
      {
        question: "Do you build with page builders like Elementor?",
        answer:
          "No. We write clean, custom code. Page builders create technical debt, performance issues, and lock-in. Our themes are built from scratch or from lean starter themes.",
      },
      {
        question: "Will I be able to update my own content?",
        answer:
          "Yes. We configure the WordPress admin so non-technical users can manage content comfortably. We also provide a 1-hour training session and written documentation.",
      },
      {
        question: "Do you offer hosting?",
        answer:
          "We don't sell hosting directly, but we recommend and configure managed WordPress hosts like WP Engine, Kinsta, or Cloudways based on your traffic and budget.",
      },
      {
        question: "What happens after launch?",
        answer:
          "All projects include a 30–90 day post-launch support window for bug fixes. We also offer monthly maintenance retainers for ongoing updates, security monitoring, and content support.",
      },
    ],
    seo: {
      title: "WordPress Development Services | Acme Technologies",
      description:
        "Professional WordPress development in Canada. Custom themes, WooCommerce stores, plugins, and SEO-optimized websites. 50+ sites launched.",
      keywords: [
        "WordPress development",
        "WooCommerce development",
        "custom WordPress themes",
        "WordPress agency Canada",
        "SEO WordPress",
      ],
    },
  },

  {
    slug: "shopify",
    name: "Shopify Development",
    tagline: "E-Commerce That Converts and Scales",
    description:
      "We build Shopify stores and custom apps that turn browsers into buyers. From headless Shopify frontends to custom apps on the Partner Program, every solution is engineered around your revenue goals.",
    heroGradient: "from-green-500 to-emerald-700",
    accentColor: "text-green-400",
    accentBg: "bg-green-50",
    iconName: "ShoppingBag",
    stats: [
      { value: "30+", label: "Stores Launched" },
      { value: "35%", label: "Avg Conversion Lift" },
      { value: "Partner", label: "Shopify Certified" },
      { value: "24hr", label: "App Review Turnaround" },
    ],
    overview: {
      heading: "Shopify Development That Drives Revenue",
      body: "Shopify is the world's leading commerce platform — but the default out-of-the-box experience is rarely enough to stand out. We build bespoke Shopify themes, custom apps, and advanced integrations that give your store a competitive edge. Whether you need a pixel-perfect theme, a custom Shopify app in the Partner Program, or a headless Shopify frontend built with Next.js and the Storefront API, we have the expertise to deliver. Every project is instrumented with analytics so you can see the impact from day one.",
    },
    features: [
      {
        icon: "ShoppingBag",
        title: "Custom Theme Development",
        description:
          "Pixel-perfect Shopify themes built with Liquid and React — optimized for speed, conversions, and your brand identity.",
      },
      {
        icon: "Puzzle",
        title: "Custom Shopify Apps",
        description:
          "Public or private Shopify apps built on the Partner Program. OAuth, webhooks, Polaris UI, and full App Bridge integration.",
      },
      {
        icon: "RefreshCw",
        title: "Third-Party Integrations",
        description:
          "Connect Shopify to your ERP, CRM, 3PL warehouse, accounting software, or any REST / GraphQL API.",
      },
      {
        icon: "BarChart2",
        title: "Conversion Rate Optimization",
        description:
          "A/B tested checkout flows, product page optimization, upsell / cross-sell mechanics, and abandoned cart recovery.",
      },
      {
        icon: "Package",
        title: "Inventory & Fulfilment",
        description:
          "Multi-warehouse inventory sync, automated reorder triggers, fulfilment routing, and real-time stock management.",
      },
      {
        icon: "ArrowUpDown",
        title: "Platform Migration",
        description:
          "Seamless migration to Shopify or Shopify Plus from WooCommerce, Magento, BigCommerce, or any legacy platform.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Discovery",
        description:
          "Store audit, competitor analysis, conversion funnel review, and technical requirements mapping before any design begins.",
      },
      {
        number: 2,
        title: "Design",
        description:
          "Theme wireframes and product page UX design focused on reducing friction and increasing add-to-cart rates.",
      },
      {
        number: 3,
        title: "Build",
        description:
          "Theme development, custom app development, third-party integrations, and payment gateway configuration.",
      },
      {
        number: 4,
        title: "Launch",
        description:
          "Speed testing, SEO redirect mapping, payment flow QA, cross-browser testing, and launch-day monitoring.",
      },
      {
        number: 5,
        title: "Optimize",
        description:
          "Post-launch conversion tracking, A/B testing, performance monitoring, and iterative improvements.",
      },
    ],
    differentiators: [
      {
        title: "Shopify Partner Program",
        description:
          "We are Shopify Partners with direct access to partner resources, early feature access, and the ability to publish to the Shopify App Store.",
      },
      {
        title: "Headless-Ready",
        description:
          "We build Shopify storefronts in Next.js via the Storefront API — giving you the speed of a custom frontend with the power of Shopify.",
      },
      {
        title: "Conversion Engineering",
        description:
          "We don't just build beautiful stores — we instrument them. Every project ships with GA4, Shopify Analytics, and heatmap tracking configured.",
      },
      {
        title: "Liquid + React Expertise",
        description:
          "Fluent in both traditional Liquid theme development and modern React-based Shopify Hydrogen for headless builds.",
      },
    ],
    portfolioItems: [
      {
        title: "Shopify Custom App",
        description:
          "Custom Shopify app enabling merchants to sync inventory across multiple warehouses with real-time analytics.",
        tags: ["Shopify API", "React", "Node.js"],
        gradient: "from-green-500 to-emerald-600",
        icon: "🛍️",
        category: "Shopify App",
      },
      {
        title: "Headless Shopify Store",
        description:
          "Next.js + Shopify Storefront API headless build for a fashion brand with sub-1-second load times.",
        tags: ["Next.js", "Shopify API", "TypeScript", "Tailwind"],
        gradient: "from-teal-500 to-green-600",
        icon: "👗",
        category: "E-Commerce",
      },
      {
        title: "E-Commerce Platform",
        description:
          "High-volume store with custom product configurator, tiered B2B pricing, and advanced SKU management.",
        tags: ["Shopify Plus", "Liquid", "React", "GraphQL"],
        gradient: "from-orange-500 to-yellow-500",
        icon: "🛒",
        category: "Shopify Plus",
      },
    ],
    pricing: [
      {
        name: "Starter",
        price: "Starting from $3,500",
        description: "Theme customization + store setup for businesses getting started on Shopify.",
        features: [
          "Theme customization",
          "Product catalogue setup",
          "Payment gateway config",
          "Basic SEO setup",
          "30-day support",
          "Staff training session",
        ],
        cta: "Get a Quote",
        highlighted: false,
      },
      {
        name: "Growth",
        price: "Starting from $9,000",
        description: "Custom theme + custom app for stores needing competitive differentiation.",
        features: [
          "Everything in Starter",
          "Custom theme from scratch",
          "Custom Shopify app",
          "Third-party integrations",
          "CRO optimization pass",
          "90-day support",
          "Analytics configuration",
        ],
        cta: "Start Project",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        description: "Headless Shopify Plus builds with full integrations for high-volume stores.",
        features: [
          "Everything in Growth",
          "Shopify Plus setup",
          "Headless Next.js frontend",
          "ERP / CRM / 3PL integrations",
          "Multi-currency / multi-region",
          "Priority support SLA",
          "Dedicated project manager",
        ],
        cta: "Contact Us",
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: "How long does a Shopify store build take?",
        answer:
          "A theme customization project takes 3–5 weeks. A custom theme from scratch runs 6–10 weeks. A custom Shopify app typically adds 4–8 additional weeks depending on complexity.",
      },
      {
        question: "Should I use Shopify or WooCommerce?",
        answer:
          "Shopify is better for most e-commerce businesses — it handles hosting, security, and updates so you can focus on selling. WooCommerce is better when you need deep WordPress integration or very specific custom functionality.",
      },
      {
        question: "What's the difference between a public and private Shopify app?",
        answer:
          "A private app works only for your store and doesn't go through the App Store review process. A public app can be distributed to any Shopify merchant and listed on the App Store. We build both.",
      },
      {
        question: "Do you offer ongoing Shopify support?",
        answer:
          "Yes. All projects include a post-launch support window. We also offer monthly retainers for ongoing feature development, theme updates, and conversion optimization.",
      },
      {
        question: "Can you migrate our existing store to Shopify?",
        answer:
          "Yes. We handle migrations from WooCommerce, Magento, BigCommerce, and custom platforms — including product data, customer records, and SEO redirect mapping.",
      },
    ],
    seo: {
      title: "Shopify Development Services | Acme Technologies",
      description:
        "Custom Shopify stores and apps built in Canada. Theme development, Shopify app development, integrations, and conversion optimization. 30+ stores launched.",
      keywords: [
        "Shopify development",
        "Shopify app development",
        "custom Shopify theme",
        "Shopify agency Canada",
        "headless Shopify",
        "WooCommerce to Shopify migration",
      ],
    },
  },

  {
    slug: "custom-development",
    name: "Custom Development",
    tagline: "Software Engineered for Your Vision",
    description:
      "When off-the-shelf doesn't fit, we build yours. Full-stack SaaS platforms, enterprise CRMs, data pipelines, and API ecosystems — architected for the scale you're planning, not just the scale you're at.",
    heroGradient: "from-purple-500 to-violet-700",
    accentColor: "text-purple-400",
    accentBg: "bg-purple-50",
    iconName: "Code2",
    stats: [
      { value: "100+", label: "Projects Delivered" },
      { value: "5", label: "SaaS Products Shipped" },
      { value: "50+", label: "API Integrations" },
      { value: "5★", label: "Avg Client Rating" },
    ],
    overview: {
      heading: "Custom Software Built to Scale With You",
      body: "Generic software forces your team to adapt to the tool. We build software that adapts to your team. From multi-tenant SaaS platforms with subscription billing to enterprise CRM systems with deep integrations, we architect solutions that fit your exact workflows — and scale as your business grows. We've shipped our own SaaS products (OnlineFreeInvoice, TeamConnect, Datum51), so we understand what it takes to build, launch, and maintain software in production.",
    },
    features: [
      {
        icon: "Layers",
        title: "SaaS Platform Development",
        description:
          "Multi-tenant SaaS applications with subscription billing, role-based access, usage metering, and scalable infrastructure.",
      },
      {
        icon: "Database",
        title: "CRM & ERP Systems",
        description:
          "Custom CRM and ERP software that fits your processes instead of forcing your team to adapt to generic software.",
      },
      {
        icon: "Plug",
        title: "API Development & Integration",
        description:
          "RESTful and GraphQL APIs, webhook systems, third-party integrations, and event-driven architectures.",
      },
      {
        icon: "Shield",
        title: "Enterprise Security",
        description:
          "SOC 2-aligned development practices, end-to-end encryption, RBAC, audit logging, and penetration test-ready architecture.",
      },
      {
        icon: "TrendingUp",
        title: "Scalable Architecture",
        description:
          "Microservices, containerization with Docker, CI/CD pipelines, and infrastructure as code — built to handle 10× your current load.",
      },
      {
        icon: "BarChart2",
        title: "Analytics & Reporting",
        description:
          "Real-time dashboards, custom report builders, data export pipelines, and embedded analytics using modern BI tooling.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Discovery",
        description:
          "Architecture scoping, technical requirements gathering, user story mapping, and competitive landscape analysis.",
      },
      {
        number: 2,
        title: "Architecture",
        description:
          "System architecture design, ERD, API contracts, tech stack selection, and infrastructure planning before any code is written.",
      },
      {
        number: 3,
        title: "Build",
        description:
          "Iterative 2-week sprints with CI/CD from day one. Weekly demos, async updates, and a staging environment that mirrors production.",
      },
      {
        number: 4,
        title: "Launch",
        description:
          "Production deployment, monitoring setup, load testing, security scan, and documentation handoff.",
      },
      {
        number: 5,
        title: "Scale",
        description:
          "SLA-backed maintenance, performance monitoring, feature iterations, and architecture evolution as you grow.",
      },
    ],
    differentiators: [
      {
        title: "We Ship Our Own SaaS Products",
        description:
          "We've built and launched OnlineFreeInvoice, TeamConnect, and Datum51. We know the real challenges of production software because we face them ourselves.",
      },
      {
        title: "Tech Stack Agnostic",
        description:
          "React, Laravel, Node.js, Python, Go — we select the right tool for the problem, not the one we're most comfortable with.",
      },
      {
        title: "Documentation-First",
        description:
          "Every project ships with API docs (OpenAPI/Swagger), architecture decision records, and onboarding guides for your internal team.",
      },
      {
        title: "No Vendor Lock-In",
        description:
          "Open source stacks, your infrastructure, your code. We're your build partner — not your dependency.",
      },
    ],
    portfolioItems: [
      {
        title: "InnProfessionals",
        description:
          "Full-featured SaaS platform for hospitality professionals — booking, staff scheduling, and revenue tracking.",
        tags: ["React", "Node.js", "PostgreSQL", "AWS"],
        gradient: "from-blue-500 to-indigo-700",
        icon: "💼",
        category: "SaaS Platform",
      },
      {
        title: "Enterprise CRM",
        description:
          "Custom CRM system with pipeline tracking, email integration, team collaboration, and advanced reporting.",
        tags: ["Laravel", "Vue.js", "MySQL", "REST API"],
        gradient: "from-purple-500 to-violet-600",
        icon: "📊",
        category: "Custom CRM",
      },
      {
        title: "Data Integration Platform",
        description:
          "Real-time data pipeline platform connecting 12 disparate systems with webhook orchestration and monitoring.",
        tags: ["Go", "Kafka", "PostgreSQL", "Kubernetes"],
        gradient: "from-orange-500 to-amber-600",
        icon: "🔗",
        category: "Data Platform",
      },
    ],
    pricing: [
      {
        name: "MVP",
        price: "Starting from $15,000",
        description: "Single-module MVP to validate your concept and get to market fast.",
        features: [
          "Core feature set",
          "User authentication",
          "Basic admin dashboard",
          "REST API",
          "Deployment setup",
          "30-day post-launch support",
        ],
        cta: "Get a Quote",
        highlighted: false,
      },
      {
        name: "Product",
        price: "Starting from $40,000",
        description: "Full product with integrations, analytics, and production-grade infrastructure.",
        features: [
          "Everything in MVP",
          "Third-party integrations",
          "Analytics & reporting",
          "Role-based access control",
          "CI/CD pipeline",
          "90-day support",
          "Documentation package",
        ],
        cta: "Start Project",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        description: "Multi-system enterprise builds with dedicated team and SLA-backed support.",
        features: [
          "Everything in Product",
          "Multi-module architecture",
          "ERP / CRM integrations",
          "SOC 2 alignment",
          "Priority SLA support",
          "Dedicated project team",
          "Quarterly architecture review",
        ],
        cta: "Contact Us",
        highlighted: false,
      },
    ],
    faqs: [
      {
        question: "How do you estimate project cost?",
        answer:
          "We provide estimates after a discovery session where we scope requirements, review architecture options, and break down the work. Fixed-price engagements are available for well-defined scopes; larger projects typically use a time-and-materials model with regular milestone checkpoints.",
      },
      {
        question: "What tech stack do you recommend for a SaaS product?",
        answer:
          "For most SaaS products we recommend React or Next.js on the frontend, Node.js or Laravel on the backend, and PostgreSQL for the database. For high-throughput data systems we evaluate Go or Python. Stack choice depends on team skillset, performance requirements, and long-term maintainability.",
      },
      {
        question: "Do you handle DevOps and infrastructure?",
        answer:
          "Yes. We set up CI/CD pipelines, containerize applications with Docker, provision infrastructure on AWS or GCP, and configure monitoring with tools like Datadog or Sentry. Infrastructure as code (Terraform) is standard on Enterprise engagements.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Yes. We start with a code audit to assess quality, identify technical debt, and establish a baseline. We then propose a remediation plan before adding new features. We've inherited and successfully scaled many codebases.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do. All code is committed to a repository you control, and we transfer all IP upon project completion. We use open source frameworks and libraries — no proprietary tooling that creates vendor lock-in.",
      },
    ],
    seo: {
      title: "Custom Software Development | Acme Technologies",
      description:
        "Full-stack custom software development in Canada. SaaS platforms, CRM/ERP systems, API integrations, and enterprise applications. Built to scale.",
      keywords: [
        "custom software development",
        "SaaS development Canada",
        "CRM development",
        "API development",
        "enterprise software",
        "full-stack development",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServices(): ServiceData[] {
  return services;
}
