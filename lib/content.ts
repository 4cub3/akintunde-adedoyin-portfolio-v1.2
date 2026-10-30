export const site = {
  name: "Akintunde Adedoyin A.",
  fullName: "Akintunde Adedoyin Afolabi",
  title: "Senior Frontend Engineer",
  valueStatement:
    "I ship production grade web and mobile products for fintech, healthcare, and logistics.",
  email: "akintunde_afolabi@yahoo.com",
  github: "https://github.com/4cub3",
  linkedin: "https://www.linkedin.com/in/adedoyin-akintunde-9a60901b4/",
  resume: "/file/Akintunde-Adedoyin-Afolabi-CV.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#featured" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export type FeaturedSlide = {
  id: string;
  label: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  summary: string;
  problem: string;
  built: string;
  // TODO metrics must stay marked until real numbers are provided
  result: string;
  tech: string[];
  highlightsLabel: string;
  highlights: { label: string; detail: string }[];
  link: {
    href: string;
    label: string;
  };
};

export type FeaturedCaseStudy = {
  id: string;
  shortName: string;
  title: string;
  client: string;
  role: string;
  context?: string;
  slides: FeaturedSlide[];
};

export const featuredProjects: FeaturedCaseStudy[] = [
  {
    id: "cibn",
    shortName: "CIBN",
    title: "CIBN digital application platform",
    client: "Chartered Institute of Bankers of Nigeria",
    role: "Senior Frontend Engineer",
    slides: [
      {
        id: "member",
        label: "Member platform",
        title: "Member dashboard",
        image: {
          src: "/images/projects/cibn-member.jpg",
          alt: "CIBN member dashboard showing applications, activities, and upcoming events",
        },
        summary:
          "Built the member-facing dashboard where bankers track applications, activities, exams, payments, and membership in one place.",
        problem:
          "Members needed a clear home for application status, upcoming events, exam registration, and fee payments without jumping across disconnected pages.",
        built:
          "Designed and shipped the member overview with status cards, recent applications, upcoming events, and navigation into applications, exams, payments, and membership. Integrated Paystack so fees move through initiate → popup → verification → confirmation.",
        // TODO: add real metric, e.g. completion rate or processing time
        result:
          "TODO: add real metric (e.g. completion rate or processing time).",
        tech: ["React", "TypeScript", "Paystack"],
        highlightsLabel: "Payment flow",
        highlights: [
          { label: "01", detail: "Initiate payment" },
          { label: "02", detail: "Paystack popup" },
          { label: "03", detail: "Verification" },
          { label: "04", detail: "Confirmation" },
        ],
        link: {
          href: "https://new.cibng.org/",
          label: "View member platform",
        },
      },
      {
        id: "admin",
        label: "Admin back office",
        title: "Admin dashboard",
        image: {
          src: "/images/projects/cibn-admin.jpg",
          alt: "CIBN admin back office with application overview charts and status workflow",
        },
        summary:
          "Built the CIBN back office so staff can review applications, inspect documents, and move cases through a regulated approval pipeline.",
        problem:
          "Operations teams needed visibility into application volume, status bottlenecks, and recent submissions to review membership and exam applications at institutional scale.",
        built:
          "Shipped the admin overview with application analytics, a status pipeline (pending review, documents, payment, approved), and a recent-applications table for case triage and follow-up.",
        // TODO: add real metric, e.g. review turnaround or applications processed
        result:
          "TODO: add real metric (e.g. review turnaround or applications processed).",
        tech: ["React", "TypeScript"], // TODO: add charting/admin stack details if public
        highlightsLabel: "Review pipeline",
        highlights: [
          { label: "01", detail: "Pending review" },
          { label: "02", detail: "Pending document" },
          { label: "03", detail: "Pending payment" },
          { label: "04", detail: "Approved" },
        ],
        link: {
          href: "https://backoffice.cibng.org/",
          label: "View admin back office",
        },
      },
    ],
  },
  {
    id: "sulos",
    shortName: "Sulos",
    title: "Sulos care platform",
    client: "Sulos LLC",
    role: "Senior Frontend Engineer",
    context:
      "Inherited an ongoing HIPAA compliant senior-care product and continued shipping the web command center plus caregiver and care-team mobile apps.",
    slides: [
      {
        id: "sulos-platform",
        label: "Platform",
        title: "Command center & care web",
        image: {
          // TODO: replace with a dedicated command-center screenshot if available
          src: "/images/projects/sulos.jpg",
          alt: "Sulos healthcare platform for senior care communication and proactive management",
        },
        summary:
          "Took over an existing Sulos cloud product used across independent living, assisted living, home health, hospice, and related senior-care settings. Focused on stabilizing and extending the HIPAA-compliant frontend for continuous patient communication and proactive care.",
        problem:
          "Providers needed one place to prioritize patients, coordinate care between visits, and keep families and care teams aligned—without rebuilding the whole product from scratch.",
        built:
          "Continued development on the web command center and shared product surfaces: population dashboard views, communication/coordination flows, and the patient-prioritization experience that helps teams intervene before unnecessary ER visits.",
        // TODO: add real metric from takeover period (e.g. release cadence, defect reduction)
        result:
          "TODO: add real metric from the takeover period (e.g. release cadence or defect reduction).",
        tech: ["React", "TypeScript", "React Native"], // TODO: confirm web stack details
        highlightsLabel: "Product surfaces",
        highlights: [
          { label: "01", detail: "Population dashboard" },
          { label: "02", detail: "Care coordination" },
          { label: "03", detail: "Symptom check-ins" },
          { label: "04", detail: "Early intervention" },
        ],
        link: {
          href: "https://mysulos.com/",
          label: "View website",
        },
      },
      {
        id: "sulos-caregiver",
        label: "Caregiver app",
        title: "My Sulos",
        image: {
          // TODO: add Play Store / device screenshots for My Sulos
          src: "/images/projects/sulos.jpg",
          alt: "My Sulos caregiver app for seniors and families to reach their care team",
        },
        summary:
          "Maintained and improved the My Sulos caregiver app so seniors and loved ones can reach their care provider between visits for more timely support.",
        problem:
          "Families needed a simple mobile path to message the care team, request supplies, report symptoms, and stay updated without waiting for the next in-person visit.",
        built:
          "Continued React Native work on the caregiver experience: login and splash polish, messaging access to the care team, and app-level unread indicators so families can follow up between visits.",
        // TODO: add real metric (e.g. message response time or store rating)
        result:
          "TODO: add real metric (e.g. store rating or engagement after takeover).",
        tech: ["React Native", "TypeScript"],
        highlightsLabel: "Caregiver flows",
        highlights: [
          { label: "01", detail: "Reach care team" },
          { label: "02", detail: "Request supplies" },
          { label: "03", detail: "Report symptoms" },
          { label: "04", detail: "Unread alerts" },
        ],
        link: {
          href: "https://play.google.com/store/apps/details?id=com.suloscaregiverapp&hl=en",
          label: "Google Play — Caregiver",
        },
      },
      {
        id: "sulos-careteam",
        label: "Care team app",
        title: "Sulos Care",
        image: {
          // TODO: add Play Store / device screenshots for Sulos Care
          src: "/images/projects/sulos.jpg",
          alt: "Sulos Care app for care team members to communicate with seniors",
        },
        summary:
          "Continued shipping the Sulos Care mobile app so care team members can quickly communicate with seniors and manage patient interactions on the go.",
        problem:
          "Clinicians and care staff needed a mobile tool to review patients, message families, and keep activity logs current outside the desktop command center.",
        built:
          "Extended the care-team React Native app after takeover—patient listing and messaging interface updates so teams can triage seniors, respond between visits, and keep coordination moving from a phone.",
        // TODO: add real metric (e.g. active care-team users or response time)
        result:
          "TODO: add real metric (e.g. active care-team users or response time).",
        tech: ["React Native", "TypeScript"],
        highlightsLabel: "Care team flows",
        highlights: [
          { label: "01", detail: "Patient listing" },
          { label: "02", detail: "Team messaging" },
          { label: "03", detail: "Activity logging" },
          { label: "04", detail: "On-the-go triage" },
        ],
        link: {
          href: "https://play.google.com/store/apps/details?id=com.suloscareteamapp&hl=en",
          label: "Google Play — Care team",
        },
      },
    ],
  },
];

export const about = {
  headline:
    "Senior frontend engineer who ships production grade web and mobile products for fintech, healthcare, and logistics.",
  paragraph:
    "Over 5+ years I have shipped React, React Native, and Next.js products in production. I led the frontend redesign of a national banking institution's digital application platform and integrated Paystack payments. I have built real-time logistics apps with maps and live notifications, and I have led intern teams while training junior developers.",
  stats: [
    "5+ years experience",
    "Web + mobile (React & React Native)",
    "Fintech, healthcare, logistics, pension",
    // TODO: add a real fourth metric only if available (users, revenue, performance)
  ],
  bring: [
    "Ships end to end: from UI architecture to payments, maps, and real-time features",
    "Works in regulated, high stakes products (banking, healthcare)",
    "Leads and mentors: ran intern teams, taught frontend to junior devs",
  ],
  skills: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
  elevated?: boolean;
};

export const projects: Project[] = [
  {
    id: "pension-ai",
    title: "Pension AI",
    description:
      "AI-powered data automation for Pension Fund Administrators & Custodians.",
    image: "/images/projects/pension.png",
    link: "https://pensiondata.ai/",
    tech: ["React", "TypeScript"], // TODO: confirm full stack
    elevated: true,
  },
  {
    id: "ontreep",
    title: "Ontreep",
    description:
      "Web platform, dashboards, and mobile apps for a logistics and dispatch company.",
    image: "/images/projects/ontreep.jpg",
    link: "https://www.ontreep.com/",
    tech: ["React", "React Native", "TypeScript", "Tailwind CSS"],
    elevated: true,
  },
  {
    id: "assetlane",
    title: "AssetLane",
    description: "Independent automotive advisory platform.",
    image: "/images/projects/assetlane.png",
    link: "https://assetlane.ai/",
    tech: ["React", "TypeScript"], // TODO: confirm full stack
    elevated: true,
  },
  {
    id: "whitefalls",
    title: "Whitefalls Energy",
    description:
      "Energy company landing page and digital presence for the African market.",
    image: "/images/projects/whitefalls.png",
    link: "https://whitefallsenergy.africa/",
    tech: ["React", "Next.js"], // TODO: confirm full stack
    elevated: true,
  },
  {
    id: "thriller-travels",
    title: "Thriller Travels",
    description: "Admin dashboard for a travel management platform.",
    image: "/images/projects/thriller-travels.jpg",
    link: "https://thriller-travels-six.vercel.app/",
    tech: ["React", "TypeScript"], // TODO: confirm full stack
    elevated: true,
  },
  {
    id: "devseal",
    title: "devSEAL Technologies",
    description:
      "AI-powered platform solutions across healthcare, pension, and financial services.",
    image: "/images/projects/devseal.png",
    link: "https://www.devseal.tech/",
    tech: ["React", "React Native", "TypeScript"],
  },
  {
    id: "github-finder",
    title: "Github Finder",
    description: "GitHub user search app consuming the GitHub REST API.",
    image: "/images/projects/githubFinder.jpg",
    link: "https://majestic-concha-7a2192.netlify.app/",
    tech: ["React", "REST API"],
  },
  {
    id: "campaign",
    title: "Campaign Dashboard",
    description: "Campaign management dashboard with data visualisation.",
    image: "/images/projects/campaign.jpg",
    link: "https://nupat-dashboard4cub3.netlify.app/",
    tech: ["React"], // TODO: confirm full stack
  },
  {
    id: "gtexthome",
    title: "GtextHome",
    description: "Marketing landing page for a real estate company.",
    image: "/images/projects/gtextHome.jpg",
    link: "https://stately-klepon-e1f13b.netlify.app",
    tech: ["HTML", "CSS", "JavaScript"], // TODO: confirm stack
  },
  {
    id: "fitnesser",
    title: "Fitnesser",
    description: "Landing page for a fitness brand with responsive design.",
    image: "/images/projects/fitnesser.jpg",
    link: "https://fitnesser.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"], // TODO: confirm stack
  },
  {
    id: "quote",
    title: "Quote App",
    description: "Interactive web app for browsing and sharing quotes.",
    image: "/images/projects/quote.jpg",
    link: "https://quote4cub3.netlify.app/quotes",
    tech: ["React"], // TODO: confirm full stack
  },
  {
    id: "loopstudio",
    title: "Loop Studio",
    description: "Creative studio landing page with modern layout.",
    image: "/images/projects/loopstudio.jpg",
    link: "https://loopstudio4cub3.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"], // TODO: confirm stack
  },
  {
    id: "clipboard",
    title: "Clipboard",
    description: "Product landing page for a clipboard management tool.",
    image: "/images/projects/clipboard.jpg",
    link: "https://clipboardwebsite4cub3.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"], // TODO: confirm stack
  },
  {
    id: "transit-flow",
    title: "Transit Flow",
    description: "Transport and transit management web application.",
    image: "/images/projects/transitFlow.jpg",
    link: "https://transitflow4cub3.netlify.app/",
    tech: ["React"], // TODO: confirm full stack
  },
  {
    id: "foodiler",
    title: "Foodiler",
    description: "Interactive food ordering web application.",
    image: "/images/projects/foodiler.jpg",
    link: "https://foodorderingapp4cub3.netlify.app/",
    tech: ["React"], // TODO: confirm full stack
  },
];

export type ExperienceItem = {
  year: string;
  company: string;
  role: string;
  description: string;
  tools: string[];
  link: string;
};

export const experiences: ExperienceItem[] = [
  {
    year: "2024 – Present",
    company: "devSEAL Technology",
    role: "Senior Software Engineer (React.js & React Native)",
    description:
      "Lead development of scalable web and mobile applications. Build and maintain AI-powered frontend solutions including reporting dashboards, data visualization tools, and document-extraction interfaces. Contribute to products across healthcare, pension management, financial services, and charity platforms. Mentor interns and junior engineers, drive code quality culture, and support production deployments.",
    tools: [
      "React",
      "React Native",
      "TypeScript",
      "REST APIs",
      "Role-Based Access Control",
    ],
    link: "https://devseal.tech",
  },
  {
    year: "2024 – 2025",
    company: "Chartered Institute of Bankers of Nigeria (CIBN)",
    role: "Senior Software Engineer",
    description:
      "Contributed to the redesign and modernisation of CIBN's digital application platforms. Translated complex institutional and regulatory requirements into scalable frontend solutions. Collaborated with product managers, designers, and backend engineers to deliver high-quality features and support CIBN's digital transformation initiatives.",
    tools: ["React", "TypeScript", "Modern Web Technologies"],
    link: "https://cibng.org/",
  },
  {
    year: "2023 – 2024",
    company: "Ontreep Technology",
    role: "Software Engineer (Frontend)",
    description:
      "Sole frontend developer for the Ontreep web platform and dashboards. Developed two mobile apps (Driver & Sender). Integrated APIs, built real-time features, and maintained production-grade frontend code.",
    tools: [
      "React",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    link: "https://ontreep.com",
  },
  {
    year: "May 2023 – October 2023",
    company: "Nupat Technologies",
    role: "Frontend Developer (React Native Intern)",
    description:
      "Led a team of interns to deliver Caplog, a logistics mobile app. Implemented core features, managed state using Redux Toolkit, maintained UI/UX standards, and facilitated standups and code reviews.",
    tools: ["React Native", "Redux Toolkit", "TypeScript"],
    link: "https://nupat.africa/",
  },
  {
    year: "September 2022 – July 2023",
    company: "NIIT (National Institute of Information Technology)",
    role: "Web Developer & Instructor",
    description:
      "Built web apps and delivered weekly training to junior developers. Contributed to the academic curriculum and deployed static and dynamic websites.",
    tools: ["React", "JavaScript", "TypeScript", "PHP", "MySQL"],
    link: "https://www.niit.com/nigeria/",
  },
];
