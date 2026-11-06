export const site = {
  name: "Akintunde Adedoyin A.",
  fullName: "Akintunde Adedoyin Afolabi",
  title: "Senior Frontend Engineer",
  valueStatement:
    "Senior Frontend Engineer with 4+ years shipping production React, Next.js and React Native products  across fintech, banking, pension, healthcare and logistics. Integrated Paystack payments into the Chartered Institute of Bankers of Nigeria's member platform and built its staff back office, including a regulated application review pipeline. Strong in TypeScript, Redux Toolkit, REST API integration, JWT authentication and role-based access control. Mentors junior engineers through code review and pair  programming. ",
  email: "akintunde_afolabi@yahoo.com",
  github: "https://github.com/4cub3",
  linkedin: "https://www.linkedin.com/in/adedoyin-akintunde-9a60901b4/",
  resume: "/file/Akintunde-Adedoyin-Afolabi-CV.pdf",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
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
  result?: string;
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
    role: "Frontend Engineer",
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
          "Led the React-based redesign and modernisation of CIBN's digital application platform, covering the member dashboard and the staff back office. Integrated Paystack for exam, membership and fee payments, with server-side verification before a payment is confirmed to the member. Built the admin review pipeline (pending review, documents, payment, approved) with application analytics so operations staff can triage cases. Turned institutional and regulatory requirements into clear, reusable frontend components, working with product managers, designers and backend engineers.",
        problem:
          "Members needed a clear home for application status, upcoming events, exam registration, and fee payments without jumping across disconnected pages.",
        built:
          "Designed and shipped the member overview with status cards, recent applications, upcoming events, and navigation into applications, exams, payments, and membership. Integrated Paystack so fees move through initiate → popup → verification → confirmation.",
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
        tech: ["React", "TypeScript"],
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
          src: "/images/projects/sulos.jpg",
          alt: "Sulos healthcare platform for senior care communication and proactive management",
        },
        summary:
          "Took over an existing Sulos cloud product used across independent living, assisted living, home health, hospice, and related senior-care settings. Focused on stabilizing and extending the HIPAA-compliant frontend for continuous patient communication and proactive care.",
        problem:
          "Providers needed one place to prioritize patients, coordinate care between visits, and keep families and care teams aligned—without rebuilding the whole product from scratch.",
        built:
          "Continued development on the web command center and shared product surfaces: population dashboard views, communication/coordination flows, and the patient-prioritization experience that helps teams intervene before unnecessary ER visits.",
        tech: ["React", "TypeScript", "React Native"],
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
          src: "/images/projects/sulos.jpg",
          alt: "My Sulos caregiver app for seniors and families to reach their care team",
        },
        summary:
          "Maintained and improved the My Sulos caregiver app so seniors and loved ones can reach their care provider between visits for more timely support.",
        problem:
          "Families needed a simple mobile path to message the care team, request supplies, report symptoms, and stay updated without waiting for the next in-person visit.",
        built:
          "Continued React Native work on the caregiver experience: login and splash polish, messaging access to the care team, and app-level unread indicators so families can follow up between visits.",
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
          src: "/images/projects/sulos.jpg",
          alt: "Sulos Care app for care team members to communicate with seniors",
        },
        summary:
          "Continued shipping the Sulos Care mobile app so care team members can quickly communicate with seniors and manage patient interactions on the go.",
        problem:
          "Clinicians and care staff needed a mobile tool to review patients, message families, and keep activity logs current outside the desktop command center.",
        built:
          "Extended the care-team React Native app after takeover—patient listing and messaging interface updates so teams can triage seniors, respond between visits, and keep coordination moving from a phone.",
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
    "I ship production-grade web and mobile products for fintech and payments, healthcare and logistics.",
  paragraph:
    "Over 4 years I have shipped React, React Native, and Next.js products in production. I led the frontend redesign of a national banking institution's digital application platform and integrated Paystack payments. I have built real-time logistics apps with maps and live notifications, and I have led intern teams while training junior developers.",
  stats: [
    "4+ years experience",
    "Web + mobile (React & React Native)",
    "Fintech, healthcare, logistics, pension",
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
    "Redux Toolkit", 
    "Paystack", 
    "JWT", 
    "role-based access control", 
    " REST APIs", 
    "testing (jest, react-testing-library, cypress,mocha)"
  ],
};

export type ProjectLink = {
  href: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "cibn",
    title: "CIBN",
    description:
      "Member and staff platforms for exam, membership, and fee applications, with Paystack payments and an admin review pipeline.",
    image: "/images/projects/cibn-member.jpg",
    tech: ["React", "TypeScript", "Paystack"],
    links: [
      { href: "https://new.cibng.org/", label: "Member platform" },
      { href: "https://backoffice.cibng.org/", label: "Admin back office" },
    ],
  },
  {
    id: "sulos",
    title: "Sulos",
    description:
      "HIPAA-compliant senior-care command center, plus caregiver and care-team mobile apps.",
    image: "/images/projects/sulos.jpg",
    tech: ["React", "React Native", "TypeScript"],
    links: [
      { href: "https://mysulos.com/", label: "Website" },
      {
        href: "https://play.google.com/store/apps/details?id=com.suloscaregiverapp&hl=en",
        label: "Caregiver app",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.suloscareteamapp&hl=en",
        label: "Care team app",
      },
    ],
  },
  {
    id: "pension-ai",
    title: "Pension AI",
    description:
      "AI-powered data automation for Pension Fund Administrators & Custodians.",
    image: "/images/projects/pension.png",
    tech: ["React", "TypeScript"],
    links: [{ href: "https://pensiondata.ai/", label: "Website" }],
  },
  {
    id: "assetlane",
    title: "AssetLane",
    description: "Independent automotive advisory platform.",
    image: "/images/projects/assetlane.png",
    tech: ["React", "TypeScript"],
    links: [{ href: "https://assetlane.ai/", label: "Website" }],
  },
  {
    id: "ontreep",
    title: "Ontreep",
    description:
      "Web platform, dashboards, and mobile apps for a logistics and dispatch company.",
    image: "/images/projects/ontreep.jpg",
    tech: ["React", "React Native", "TypeScript", "Tailwind CSS"],
    links: [{ href: "https://www.ontreep.com/", label: "Website" }],
  },
  {
    id: "devseal",
    title: "devSEAL Technologies",
    description:
      "AI-powered platform solutions across healthcare, pension, and financial services.",
    image: "/images/projects/devseal.png",
    tech: ["React", "React Native", "TypeScript"],
    links: [{ href: "https://www.devseal.tech/", label: "Website" }],
  },
  {
    id: "whitefalls",
    title: "Whitefalls Energy",
    description:
      "Energy company landing page and digital presence for the African market.",
    image: "/images/projects/whitefalls.png",
    tech: ["React", "Next.js"],
    links: [{ href: "https://whitefallsenergy.africa/", label: "Website" }],
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
    year: "Mar 2024 – Present",
    company: "devSEAL Technology",
    role: "Senior Frontend Engineer (React.js & React Native)",
    description:
      "Lead frontend architecture for React, React Native, and TypeScript products in pension, healthcare, and financial services. Build reporting dashboards, data visualisation, and document-extraction interfaces for Pension AI, plus reusable component libraries. Integrate REST APIs and Node.js services with JWT authentication and role-based access, and continue the Sulos HIPAA-compliant web command center and care apps. Mentor interns and junior engineers through code review and pair programming.",
    tools: [
      "React",
      "React Native",
      "TypeScript",
      "REST APIs",
      "JWT",
      "Role-Based Access Control",
    ],
    link: "https://devseal.tech",
  },
  {
    year: "Jan 2025 – Sep 2026",
    company: "Chartered Institute of Bankers of Nigeria (CIBN)",
    role: "Frontend Engineer (Contract)",
    description:
      "Led the React redesign of CIBN's member dashboard and staff back office. Integrated Paystack for exam, membership, and fee payments through initiate, popup, verification, and confirmation. Built admin analytics and a review pipeline (pending review, pending document, pending payment, approved), turning regulatory requirements into reusable components with product, design, and backend.",
    tools: ["React", "TypeScript", "Paystack"],
    link: "https://cibng.org/",
  },
  {
    year: "Apr 2023 – Mar 2024",
    company: "Ontreep Technology",
    role: "Frontend Engineer (React.js & React Native)",
    description:
      "Sole frontend developer for the Ontreep web platform and dashboards in React and Tailwind CSS. Built the Driver and Sender apps in React Native and TypeScript, with Google Maps, WebSocket notifications, Expo EAS builds, and REST API integration.",
    tools: [
      "React",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Google Maps",
      "WebSockets",
    ],
    link: "https://ontreep.com",
  },
  {
    year: "May 2023 – Nov 2023",
    company: "Nupat Technologies",
    role: "Frontend Developer (React Native Intern), Team Lead",
    description:
      "Led a team of interns to design, build, and ship Caplog, a bookkeeping app in React Native. Managed state with Redux Toolkit, kept UI standards consistent, and ran standups and code reviews.",
    tools: ["React Native", "Redux Toolkit", "TypeScript"],
    link: "https://nupat.africa/",
  },
  {
    year: "Sep 2022 – Jul 2023",
    company: "NIIT (National Institute of Information Technology)",
    role: "Web Developer Intern",
    description:
      "Built web applications with React, JavaScript, TypeScript, PHP, and MySQL, and deployed static and dynamic websites. Delivered weekly frontend training to junior developers and contributed to the academic curriculum.",
    tools: ["React", "JavaScript", "TypeScript", "PHP", "MySQL"],
    link: "https://www.niit.com/nigeria/",
  },
];

export type EducationItem = {
  credential: string;
  school: string;
};

export const education: EducationItem[] = [
  {
    credential: "B.Sc. Computer Science",
    school: "Kwara State University Malete (KWASU)",
  },
  {
    credential: "Diploma in Web Development",
    school: "NIIT",
  },
  {
    credential: "UI/UX Essentials",
    school: "Udemy",
  },
];
