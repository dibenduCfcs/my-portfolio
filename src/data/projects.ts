import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'omada-hrms',
    name: 'Omada HRMS',
    category: 'In-House Product',
    categoryGroup: 'In-House Products',
    subtitle: 'Enterprise Human Resource Management & Field Attendance System',
    duration: '8 months',
    technologies: ['React Native', 'Redux Toolkit', 'Google Auth', 'Push Notifications', 'REST APIs'],
    summary:
      'A comprehensive enterprise HR management mobile application supporting 500+ active employees. Features geofenced and selfie-verified attendance punches, shift scheduling, real-time leaves, payroll visibility, and document management.',
    impactHighlight: 'Empowers 500+ employees with real-time biometric and location-based attendance logging.',
    features: [
      'Employee Management & Directory',
      'Location and selfie-based attendance punch with Geo-fencing',
      'Configurable enterprise attendance rules & shifts',
      'Real-time Leave Application & Approval workflows',
      'Employee Document & Asset Tracking',
      'Payroll information & digital salary slip downloads'
    ],
    contribution: [
      'Engineered core React Native mobile interfaces for iOS and Android',
      'Integrated geofencing, camera modules, and GPS coordinates for fraud-proof attendance punch',
      'Architected centralized state with Redux Toolkit for seamless multi-screen state hydration',
      'Implemented real-time push notifications for manager approval alerts'
    ],
    architectureNotes: [
      'Configurable client-side geofencing distance calculation to prevent mock location abuse',
      'Cached payroll & document data for quick offline glance'
    ],
    mockupTheme: {
      badge: 'HR & Workforce',
      primaryColor: '#3875DE',
      screenTitle: 'Employee Punch & Portal',
      accentGradient: 'from-blue-600 to-indigo-600'
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cfcs.app.omada&hl=en_IN',
    iconUrl: './images/omada/omada_icon.png',
    realScreenshotUrl: './images/omada/omada_login.jpg',
    gallery: [
      './images/omada/omada_login.jpg',
      './images/omada/omada_screen_1.png',
      './images/omada/omada_screen_2.png',
      './images/omada/omada_screen_3.png',
      './images/omada/omada_screen_4.png'
    ]
  },
  {
    id: 'frontizo-core',
    name: 'Frontizo Core',
    category: 'In-House Product',
    categoryGroup: 'In-House Products',
    subtitle: 'SMT Machine Service Request & Field Installation Management System',
    duration: '10 months',
    technologies: ['React Native', 'Redux', 'REST APIs', 'Push Notifications', 'Role-Based Access Control'],
    summary:
      'Frontizo Core is an enterprise Service Request Management and complaint tracking mobile application for Fuji SMT (Surface Mount Technology) machines. Manages the complete equipment maintenance lifecycle across on-site machine installations, service request dispatches, daily engineering timesheets, and global report verification.',
    impactHighlight: 'Achieved a 93% service closure rate with transparent job tracking, automated task allocation, and real-time machine service reporting.',
    features: [
      'Machine Installation: On-site machine commissioning tracking, installation workflows, and warranty verification',
      'Service Request Management: Multi-stage ticket tracking (0–9 days to >30 days) with automated technician assignment',
      'Global Report Management: Standardized global service report creation, supervisor verification, and audit sign-offs',
      'Daily Report Management: Shift summaries, engineer timesheets, work logs, and on-site customer digital signatures',
      'PM Schedule & AMC Tracking: Preventative maintenance countdowns and overdue machine maintenance alerts',
      'Dual Role Dashboards: Real-time toggles between Service Dashboard and Head Repair Dashboard with live KPI counters'
    ],
    contribution: [
      'Engineered core React Native mobile client for field service engineers and maintenance managers',
      'Implemented real-time Service Dashboard featuring ticket aging categorization and 93% closure rate gauge',
      'Developed digital signature capture and inspection photo upload modules for on-site machine commissioning',
      'Built offline report queue to ensure zero data loss during daily logs in shielded manufacturing facilities',
      'Integrated role-based navigation guards separating field technicians from verification managers'
    ],
    architectureNotes: [
      'Offline queueing for daily inspection and service reports to withstand noisy industrial factory environments',
      'Image compression pipeline before uploading on-site equipment inspection photos to CFCS endpoints'
    ],
    mockupTheme: {
      badge: 'SMT Machine Service',
      primaryColor: '#c74c40',
      screenTitle: 'Frontizo Service Dashboard',
      accentGradient: 'from-rose-600 to-indigo-600'
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cfcs.app.frontizo.core&hl=en_IN',
    iconUrl: './images/frontizo/frontizo_icon.png',
    realScreenshotUrl: './images/frontizo/frontizo_screen.jpg',
    gallery: [
      './images/frontizo/frontizo_screen.jpg',
      './images/frontizo/frontizo_screen_1.png',
      './images/frontizo/frontizo_screen_2.png',
      './images/frontizo/frontizo_screen_3.png',
      './images/frontizo/frontizo_screen_4.png',
      './images/frontizo/frontizo_screen_5.png',
      './images/frontizo/frontizo_screen_6.png'
    ],
    liveUrl: 'https://www.cfcs.co.in/complaint-management-software.html'
  },
  {
    id: 'kardblink',
    name: 'KardBlink',
    category: 'In-House Product',
    categoryGroup: 'In-House Products',
    subtitle: 'Smart Business Card Scanner, OCR & Digital Identity Networking App',
    duration: '5 months',
    technologies: ['React Native', 'Camera OCR', 'Redux Toolkit', 'Fastlane', 'Offline Storage', 'REST APIs'],
    summary:
      'KardBlink is an in-house mobile product engineered for intelligent paper business card scanning, optical character recognition (OCR), and digital identity management. Enables sales executives and founders to digitize contacts instantly, export vCards, and share digital profile links via QR code.',
    impactHighlight: 'High-accuracy on-device OCR engine with 98% contact field recognition accuracy.',
    features: [
      'High-Speed Camera OCR: Auto-detects physical business card borders with real-time perspective correction',
      'Smart Field Extraction: Automatically categorizes names, job titles, mobile numbers, company names, and emails',
      'Interactive Digital Card: Build and share personal networking profiles via live QR codes and web links',
      'One-Tap Contact Export: Directly saves scanned cards into native phone contacts and exports vCards',
      'Search & Tagging: Organize contacts into custom categories, tags, and follow-up reminders'
    ],
    contribution: [
      'Engineered core React Native mobile client for camera viewfinder, edge detection, and crop adjustment',
      'Integrated OCR extraction pipeline and regex sanitization logic for diverse card layouts',
      'Built interactive digital card generator with live QR code rendering and vCard exporter',
      'Configured Fastlane automated build and release pipelines for staged Google Play Store deployments'
    ],
    architectureNotes: [
      'On-device image pre-processing (contrast normalization, binarization) to boost OCR accuracy',
      'Encrypted local SQLite storage for contact confidentiality and offline access'
    ],
    mockupTheme: {
      badge: 'OCR & Identity',
      primaryColor: '#4f46e5',
      screenTitle: 'KardBlink Card Scanner',
      accentGradient: 'from-indigo-600 to-blue-600'
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kardblink&hl=en_IN',
    iconUrl: './images/kardblink/kardblink_icon.png',
    realScreenshotUrl: './images/kardblink/kardblink_login.jpg',
    gallery: [
      './images/kardblink/kardblink_login.jpg',
      './images/kardblink/kardblink_screen_1.png',
      './images/kardblink/kardblink_screen_2.png',
      './images/kardblink/kardblink_screen_3.png',
      './images/kardblink/kardblink_screen_4.png',
      './images/kardblink/kardblink_screen_5.png'
    ]
  },
  {
    id: 'onestack-bharat-bank',
    name: 'OneStack Bharat Bank',
    category: 'B2B FinTech SaaS',
    categoryGroup: '3rd-Party (SaaS/PaaS)',
    subtitle: 'B2B FinTech SaaS • White-Label Banking-as-a-Service (BaaS) Super App',
    duration: '6 months',
    technologies: ['React Native', 'Firebase', 'Fastlane', 'Biometrics', 'Deep Linking', 'REST APIs'],
    summary:
      'Developed as a white-label B2B FinTech SaaS and Banking-as-a-Service (BaaS) mobile application for 3rd-party banking partners, OneStack Bharat Bank enables cooperative and regional banks to deliver modern digital banking. Powers instant UPI money transfers, Net Worth tracking, multi-biller utility payments, and biometric authentication.',
    impactHighlight: 'Enterprise B2B FinTech SaaS platform integrated with Core Banking Systems (CBS) and automated Fastlane CI/CD releases.',
    features: [
      'Net Worth Dashboard: Real-time consolidated view of balances and linked savings accounts',
      'Core Banking System (CBS) Integration: Direct synchronization with cooperative and regional banking cores',
      'Instant UPI Money Transfers: QR code scanner, UPI ID lookup, and instant transaction history',
      'Multi-Biller Utility Payments: Broadband, prepaid/postpaid mobile recharges, DTH, and electricity bills',
      'Biometric Security: Fingerprint and FaceID authentication for zero-trust transaction authorization',
      'White-Label Architecture: Dynamic branding configuration for multiple financial institution deployments'
    ],
    contribution: [
      'Built high-security mobile banking user flows and dynamic financial keypad interfaces in React Native',
      'Configured biometrics (FaceID / Fingerprint) for zero-trust authorization barriers',
      'Integrated Core Banking System REST APIs for real-time account hydration and balance verification',
      'Integrated deep linking handlers for direct payment intents and SMS notification reminders',
      'Set up Fastlane automated build generation for rapid Google Play Store release staging'
    ],
    architectureNotes: [
      'Zero-storage policy on sensitive card numbers / UPI pins on the mobile client runtime',
      'Session inactivity timeout guards and payload cryptographic signing before network dispatch'
    ],
    mockupTheme: {
      badge: 'B2B FinTech SaaS',
      primaryColor: '#c85a17',
      screenTitle: 'OneStack Bharat Bank',
      accentGradient: 'from-amber-600 to-orange-600'
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.onestack.bharatbank&hl=en_IN',
    iconUrl: './images/bharatbank/bharatbank_icon.png',
    realScreenshotUrl: './images/bharatbank/bharatbank_screen.webp',
    gallery: [
      './images/bharatbank/bharatbank_screen.webp',
      './images/bharatbank/bharatbank_screen_1.png',
      './images/bharatbank/bharatbank_screen_2.png',
      './images/bharatbank/bharatbank_screen_3.png',
      './images/bharatbank/bharatbank_screen_4.png',
      './images/bharatbank/bharatbank_screen_5.png'
    ]
  },
  {
    id: 'urban-mandi',
    name: 'Urban Mandi',
    category: 'E-Commerce SaaS',
    categoryGroup: '3rd-Party (SaaS/PaaS)',
    subtitle: 'E-Commerce SaaS • Hyperlocal Grocery & Fresh Produce Platform',
    duration: '6 months',
    technologies: ['React Native', 'Redux Toolkit', 'Google Maps API', 'Push Notifications', 'REST APIs'],
    summary:
      'Delivered as a 3rd-party E-Commerce SaaS quick-commerce mobile solution for RSND, Urban Mandi connects local households with fresh fruits, vegetables, dairy, snacks, and daily essentials. Features catalog search, real-time cart discounts, slotted delivery scheduling, and live order tracking.',
    impactHighlight: 'End-to-end quick-commerce shopping app with instant checkout, live order tracking, and push notifications.',
    features: [
      'Fresh Grocery Catalog: Comprehensive categories across fruits, fresh veggies, dairy, snacks, and staples',
      'Instant & Scheduled Delivery: Flexible doorstep delivery windows with address management',
      'Smart Cart & Checkout: Real-time promo codes, wallet credits, and secure online payment gateways',
      'Live Order Tracking: Real-time order fulfillment status from packing to delivery partner dispatch',
      'Push Notifications & Alerts: Instant updates on order progress, discounts, and flash sales'
    ],
    contribution: [
      'Architected responsive React Native shopping and checkout flows optimized for mobile consumers',
      'Integrated payment gateway SDK and wallet balance deduction modules',
      'Implemented Google Maps geocoding and address picker for precise delivery drop-off coordinates',
      'Configured background push notification channels for order dispatch and delivery arrival alerts'
    ],
    mockupTheme: {
      badge: 'E-Commerce SaaS',
      primaryColor: '#16a34a',
      screenTitle: 'Urban Mandi Grocery',
      accentGradient: 'from-green-600 to-emerald-600'
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rsnd.app.urbanmandi&hl=en_IN',
    iconUrl: './images/urbanmandi/urbanmandi_icon.png',
    realScreenshotUrl: './images/urbanmandi/urbanmandi_screen_1.png',
    gallery: [
      './images/urbanmandi/urbanmandi_screen_1.png',
      './images/urbanmandi/urbanmandi_screen_2.png',
      './images/urbanmandi/urbanmandi_screen_3.png',
      './images/urbanmandi/urbanmandi_screen_4.png',
      './images/urbanmandi/urbanmandi_screen_5.png'
    ]
  },
  {
    id: 'gangotri-sales',
    name: 'Gangotri Sales',
    category: 'Service-Based Work',
    categoryGroup: 'Service-Based Work',
    subtitle: 'FMCG Field Sales, Retail Distribution & Order Tracking System',
    duration: '16 months',
    technologies: ['React Native', 'Redux Toolkit', 'Realm', 'Google Maps API', 'Offline Storage', 'REST APIs'],
    summary:
      'Gangotri Sales is an enterprise field-force automation and retail distribution mobile application built for the sales teams of Gangotri Holy Products Pvt Ltd. Empowers sales executives across on-site retailing, joint work visits, new retailer onboarding, order placement, real-time dispatch tracking, and geofenced daily attendance.',
    impactHighlight: 'Resume-reported outcome: Improved field-force visibility, route tracking, and retail order placement contributed to a 50% increase in sales reporting efficiency.',
    features: [
      'Retailing & Order Placement: Instant catalog order booking at retail counters with tiered trade discounts',
      'Order Tracking: Real-time order dispatch status, invoice tracking, and fulfillment updates',
      'Retailer Onboarding: Geotagged retailer registration, KYC document uploads, and outlet discovery',
      'Sales Person Attendance: Location-verified and selfie-checked daily field attendance punch',
      'Joint Work & Official Visits: Collaborative field route accompaniment with area managers and audit logs',
      'Statistics & Performance: Real-time analytics tracking daily sales bookings, route coverage, and target progress'
    ],
    contribution: [
      'Engineered core React Native mobile client for sales representatives and field supervisors',
      'Architected resilient offline-first storage with Realm DB, ensuring continuous order bookings in rural coverage zones',
      'Integrated Google Maps API for route navigation, dealer geolocation tagging, and territory heatmaps',
      'Engineered automatic two-way synchronization engine to upload queued offline orders upon network restoration',
      'Optimized catalog rendering with virtualized lists for smooth browsing across hundreds of FMCG product SKUs'
    ],
    architectureNotes: [
      'Offline-first data sync engine powered by Realm DB with conflict resolution for rural field operations',
      'Background location checks and distance calculation guards to prevent fake attendance spoofing'
    ],
    mockupTheme: {
      badge: 'FMCG Field Sales',
      primaryColor: '#059669',
      screenTitle: 'Gangotri Sales Dashboard',
      accentGradient: 'from-emerald-600 to-teal-600'
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gangotrisales&hl=en_IN',
    iconUrl: './images/gangotri/gangotri_icon.png',
    realScreenshotUrl: './images/gangotri/gangotri_screen_1.png',
    gallery: [
      './images/gangotri/gangotri_screen_1.png',
      './images/gangotri/gangotri_screen_2.png',
      './images/gangotri/gangotri_screen_3.png',
      './images/gangotri/gangotri_screen_4.png',
      './images/gangotri/gangotri_screen_5.png',
      './images/gangotri/gangotri_screen_6.png',
      './images/gangotri/gangotri_screen_7.png',
      './images/gangotri/gangotri_screen_8.png'
    ]
  },
  {
    id: 'gepdec-infratech',
    name: 'GEPDEC Infratech',
    platform: 'web',
    category: 'Enterprise Web Platform',
    categoryGroup: 'Web Applications',
    subtitle: 'React.js • Power Infrastructure & Smart Grid Engineering Corporate Platform',
    duration: '4 months',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'SEO Optimization', 'Responsive Design'],
    summary:
      'Official responsive corporate web platform engineered for GEPDEC Infratech Ltd., a premier power engineering and infrastructure EPC enterprise. Features comprehensive showcases of AIS/GIS high-voltage substations, transmission lines, smart grid energy metering, and international infrastructure projects.',
    impactHighlight: 'High-performance React.js single-page application with optimized Core Web Vitals, sub-second routing, and dynamic service portals.',
    features: [
      'Power Transmission & Substation Showcase: Detailed engineering case studies across 33kV to 400kV AIS/GIS substations',
      'Smart Grid & Metering Verticals: Dedicated engineering portals for AMI, Head End Systems (HES), and Meter Data Management',
      'Interactive Corporate Directory: Client portfolios, vendor registrations, career portals, and corporate governance',
      'Fluid Multi-Device Layout: Responsive grid systems and typography optimized from high-density monitors to smartphones',
      'SEO & Google Tag Manager Integration: Structured metadata, OpenGraph tags, and analytics tracking for global search indexing'
    ],
    contribution: [
      'Architected frontend SPA using React.js with modular component hierarchy and clean state management',
      'Implemented responsive design across all viewports ensuring cross-browser fidelity',
      'Integrated lead capture and contact forms with client-side validation and secure endpoint dispatch',
      'Optimized asset delivery, image pipelines, and bundle chunking for sub-second initial load speeds'
    ],
    architectureNotes: [
      'Client-side routing with lazy-loaded chunk splittings to minimize initial bundle footprint',
      'Semantic HTML5 structure ensuring high accessibility and Google search engine discoverability'
    ],
    mockupTheme: {
      badge: 'React.js Web',
      primaryColor: '#79C151',
      screenTitle: 'GEPDEC Power Infrastructure',
      accentGradient: 'from-emerald-600 to-teal-700'
    },
    liveUrl: 'https://www.gepdec.in/',
    iconUrl: './images/web/gepdec/gepdec_logo.svg',
    realScreenshotUrl: './images/web/gepdec/gepdec_banner.jpg',
    gallery: [
      './images/web/gepdec/gepdec_banner.jpg'
    ]
  },
  {
    id: 'loyaltynest-ai',
    name: 'LoyaltyNest AI',
    platform: 'web',
    category: 'B2B FinTech SaaS',
    categoryGroup: 'Web Applications',
    subtitle: 'React.js • AI Customer Loyalty, Rewards & Digital Wallet Platform',
    duration: '5 months',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Apple & Google Wallet Integration', 'REST APIs'],
    summary:
      'High-converting web application developed for LoyaltyNest AI—an enterprise customer loyalty and retention platform. Enables businesses to launch points-based loyalty programs, instant QR cashback payouts, and digital wallet loyalty cards compatible with Apple Wallet and Google Wallet.',
    impactHighlight: 'Engineered conversion-focused marketing and customer onboarding web flows driving user retention and merchant demo requests.',
    features: [
      'Digital Wallet Loyalty Cards: Frictionless pass generation and passes stored directly in Apple Wallet and Google Wallet',
      'Multi-Tier Reward Engines: Dynamic points-based, tier-based, and QR-verified instant cashback architectures',
      'Interactive Solution Portals: Comprehensive solution breakdown for digital wallets, stamp cards, and point ledgers',
      'Enterprise Demo & Admin Portal: High-converting demo request workflows with reCAPTCHA verification',
      'Modern UI & Media Experience: Responsive hero video banners, glassmorphism headers, and smooth micro-interactions'
    ],
    contribution: [
      'Built responsive marketing web platform with React.js and modern component architecture',
      'Created interactive mega-menus, solution dropdowns, and dynamic product breakdown tabs',
      'Integrated automated lead generation forms connected to backend CRM endpoints',
      'Engineered accessible, SEO-optimized landing pages with zero layout shifts'
    ],
    architectureNotes: [
      'High-performance client rendering with optimized media pipelines for hero video and vector graphics',
      'Integrated Google Analytics 4, Meta Pixel, and Microsoft Clarity for user funnel tracking'
    ],
    mockupTheme: {
      badge: 'React.js • SaaS',
      primaryColor: '#3b82f6',
      screenTitle: 'LoyaltyNest AI Software',
      accentGradient: 'from-blue-600 to-cyan-600'
    },
    liveUrl: 'https://www.loyaltynestai.com/',
    iconUrl: './images/web/loyaltynest/loyaltynest_logo.svg',
    realScreenshotUrl: './images/web/loyaltynest/loyaltynest_banner.webp',
    gallery: [
      './images/web/loyaltynest/loyaltynest_banner.webp'
    ]
  },
  {
    id: 'sn-worldwide-logistics',
    name: 'SN Worldwide Logistics',
    platform: 'web',
    category: 'Next.js Web Platform',
    categoryGroup: 'Web Applications',
    subtitle: 'Next.js • Global Freight Forwarding, Cargo & Logistics Platform',
    duration: '4 months',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'Server-Side Rendering (SSR)', 'REST APIs'],
    summary:
      'Modern enterprise web platform engineered with Next.js for SN Worldwide Logistics Co., an international freight forwarding and supply chain stalwart with over a decade of domain leadership. Features dedicated verticals for high-value cargo handling, air/ocean freight, ISO tanks, reefers, customs brokerage, and free trade zones.',
    impactHighlight: 'Next.js SSR architecture delivering sub-second page transitions, dynamic solution galleries, and global client showcases.',
    features: [
      'Mission-Critical Logistics Showcase: Dedicated solution pages for High-Value Cargo, Luxury Goods, Freight, and ISO Tanks',
      'Dynamic Solutions Grid & Hover Previews: Interactive service cards with instant hover overlays and deep subpage routing',
      'Global Client & Certification Carousel: Marquee showcase of international enterprise partners and compliance credentials',
      'Inquiry & Rate Quote Workflows: Interactive forms for immediate freight quotes, customs inquiries, and route logistics',
      'Next.js SSR & Image Optimization: Responsive Next/Image pipelines with blur placeholders and zero CLS (Cumulative Layout Shift)'
    ],
    contribution: [
      'Developed complete frontend web application using Next.js, React, and Tailwind CSS',
      'Implemented responsive mega-menus, multi-level dropdowns, and fluid navigation drawer',
      'Architected dynamic solution cards and container gallery showcases',
      'Configured automated SEO metadata, sitemaps, and OpenGraph social previews for global visibility'
    ],
    architectureNotes: [
      'Server-Side Rendering (SSR) powered by Next.js ensuring optimal search indexing across international trade routes',
      'Optimized font sub-setting and asset caching headers for enterprise-grade performance'
    ],
    mockupTheme: {
      badge: 'Next.js Web',
      primaryColor: '#035882',
      screenTitle: 'SN Worldwide Logistics',
      accentGradient: 'from-sky-700 to-blue-900'
    },
    liveUrl: 'https://www.snworldwidelogistics.com/',
    iconUrl: './images/web/snlogistics/snlogistics_logo.svg',
    realScreenshotUrl: './images/web/snlogistics/snlogistics_banner.jpg',
    gallery: [
      './images/web/snlogistics/snlogistics_banner.jpg'
    ]
  }
];
