import salonImg from "../assets/img/salon(1).jpg";
import todoImg from "../assets/img/todo(1).jpg";
import jobImg from "../assets/img/job(1).jpg";
import eduflowImg from "../assets/img/eduflow(1).jpg";
import stasImg from "../assets/img/stas(1).jpg";
import microImg from "../assets/img/micro(1).jpg";

export const projectsData = [
  {
    id: 1,
    title: "Salon Pabalu",
    category: "Web Development",
    img: salonImg,
    rotate: -9,
    top: 30,
    left: 0,
    width: 305,
    height: 410,
    bg: "#E8C5B4",
    color: "#5a2a10",
    year: "2024",
    client: "Pabalu Beauty & Wellness",
    role: "Full-Stack Developer & UI Designer",
    subtitle: "Bespoke appointment booking and client management web experience.",
    description:
      "A complete digital overhaul for a premium beauty salon, featuring real-time stylist availability, automated SMS booking confirmations, customer loyalty tracking, and a high-fashion lookbook portfolio.",
    overview:
      "Salon Pabalu required an intuitive, friction-free booking platform that would replace traditional phone-based scheduling. The application empowers clients to select individual stylists, schedule complex multi-treatment sessions, and receive instant calendar confirmations, resulting in higher appointment volume and improved customer retention.",
    challenges:
      "Balancing overlapping stylist availability across distinct beauty stations, handling last-minute cancellations without revenue loss, and maintaining ultra-fast load times on mobile devices for clients browsing via social media ads.",
    solution:
      "Engineered an atomic time-slot reservation engine with optimistic concurrency controls, automated reminder notifications, and optimized responsive layouts that achieved a sub-second initial render.",
    stats: [
      { label: "Online Bookings", value: "+180%", desc: "Increase in direct reservations within 60 days" },
      { label: "No-Show Rate", value: "-42%", desc: "Reduced via automated reminder SMS" },
      { label: "Customer Rating", value: "4.9 / 5", desc: "Based on 350+ verified client reviews" },
      { label: "Page Load Time", value: "0.7s", desc: "Optimized Core Web Vitals score" },
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion", "Twilio API"],
    liveUrl: "https://salonpabalu.example.com",
    githubUrl: "https://github.com/RuchiraRTG/salon-pabalu",
  },
  {
    id: 2,
    title: "JOB Expert",
    category: "Full Stack App",
    img: jobImg,
    rotate: 5,
    top: 100,
    left: 330,
    width: 290,
    height: 395,
    bg: "#E8E8C5",
    color: "#3a3a10",
    year: "2024",
    client: "JobExpert Global",
    role: "Lead Full-Stack Engineer",
    subtitle: "Modern recruitment ecosystem connecting global talent with verified employers.",
    description:
      "A comprehensive talent portal designed to streamline technical hiring with smart skill-matching algorithms, candidate application tracking, live chat, and automated interview scheduling.",
    overview:
      "JOB Expert bridges the gap between ambitious professionals and world-class organizations. Built to withstand high concurrency, the platform handles multi-role job postings, automated resume screening, salary comparison insights, and employer applicant management pipelines.",
    challenges:
      "Filtering through thousands of applicant submissions accurately while providing applicants with transparent, real-time stage updates without burdening recruiters with manual messaging.",
    solution:
      "Constructed a granular role-based access pipeline with indexed search filters, webhook notifications, and an intuitive drag-and-drop applicant tracking kanban board.",
    stats: [
      { label: "Matched Candidates", value: "15,000+", desc: "Successful career connections facilitated" },
      { label: "Application Speed", value: "3x Faster", desc: "Compared to legacy email submissions" },
      { label: "Active Employers", value: "450+", desc: "Actively hiring top tech talent" },
      { label: "Platform Uptime", value: "99.98%", desc: "High availability architecture" },
    ],
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "JWT Auth", "REST APIs"],
    liveUrl: "https://jobexpert.example.com",
    githubUrl: "https://github.com/RuchiraRTG/job-expert",
  },
  {
    id: 3,
    title: "EduFlow",
    category: "Education Platform",
    img: eduflowImg,
    rotate: -4,
    top: 10,
    left: 650,
    width: 283,
    height: 388,
    bg: "#C5D8E8",
    color: "#0f2f4a",
    year: "2023",
    client: "EduFlow Academy",
    role: "Frontend Architect & UX Lead",
    subtitle: "Interactive digital classroom and modular learning management system.",
    description:
      "An immersive online learning environment equipped with bite-sized video courses, interactive code snippets, automated quiz grading, and collaborative peer discussion boards.",
    overview:
      "EduFlow was conceived to make technical education accessible, engaging, and structured. By blending visual curriculum progress trackers with gamified milestone badges, students maintain continuous learning habits throughout multi-week cohort tracks.",
    challenges:
      "Delivering high-resolution video streaming and interactive quizzes on bandwidth-constrained networks without stuttering or video playback dropouts.",
    solution:
      "Implemented adaptive bitrate streaming integration, intelligent client-side state caching, and lazy-loaded course modules ensuring a lightning-fast responsive interface across all viewports.",
    stats: [
      { label: "Active Students", value: "28,000+", desc: "Enrolled in active technical courses" },
      { label: "Completion Rate", value: "+35%", desc: "Higher than average industry LMS metrics" },
      { label: "Student Rating", value: "4.8 / 5", desc: "Rated across 1,200+ course feedback submissions" },
      { label: "Video Uptime", value: "100%", desc: "Seamless streaming with zero dropouts" },
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Chart.js", "REST APIs"],
    liveUrl: "https://eduflow.example.com",
    githubUrl: "https://github.com/RuchiraRTG/eduflow",
  },
  {
    id: 4,
    title: "Business Startup",
    category: "Landing Page",
    img: stasImg,
    rotate: 7,
    top: 50,
    left: 980,
    width: 293,
    height: 398,
    bg: "#F5C6D8",
    color: "#5a1030",
    year: "2024",
    client: "Stas Ventures",
    role: "UI/UX & Creative Developer",
    subtitle: "High-impact SaaS landing page engineered for investor and waitlist conversion.",
    description:
      "A visually captivating product launchpad showcasing fintech product capabilities through smooth GSAP animations, interactive product mockups, and friction-free waitlist signups.",
    overview:
      "Created for an emerging B2B fintech startup preparing for their seed funding round, this landing page delivers an unforgettable first impression. Every section blends bespoke micro-interactions, dark mode accents, and clear CTA triggers.",
    challenges:
      "Achieving complex scroll-driven motion and visual flair while maintaining a perfect 99+ Google Lighthouse performance score and ensuring instantaneous mobile interactivity.",
    solution:
      "Crafted lightweight CSS transforms, GPU-accelerated motion layers, and pre-baked SVG vector illustrations to keep bundle sizes compact and animations at a locked 60 FPS.",
    stats: [
      { label: "Conversion Rate", value: "18.4%", desc: "Visitor to early-access waitlist ratio" },
      { label: "Waitlist Signups", value: "12,500+", desc: "Acquired prior to official public launch" },
      { label: "Bounce Rate", value: "-28%", desc: "Significant reduction through engaging storytelling" },
      { label: "Lighthouse Score", value: "99 / 100", desc: "Top-tier Performance & Accessibility" },
    ],
    technologies: ["React", "GSAP", "Tailwind CSS", "HTML5", "EmailJS", "Responsive Design"],
    liveUrl: "https://stasstartup.example.com",
    githubUrl: "https://github.com/RuchiraRTG/business-startup",
  },
  {
    id: 5,
    title: "TODO App",
    category: "Android · Kotlin",
    img: todoImg,
    rotate: -6,
    top: 410,
    left: 170,
    width: 298,
    height: 402,
    bg: "#C8E8C5",
    color: "#1a4a10",
    year: "2023",
    client: "Open Source Project",
    role: "Mobile Application Developer",
    subtitle: "Minimalist productivity companion featuring offline-first local database sync.",
    description:
      "An elegant, distraction-free task management Android app developed using Kotlin, Jetpack Compose, Room database, and modern Material 3 dynamic color theming.",
    overview:
      "Designed for individuals seeking a pure, unbloated productivity tool. Users can categorize tasks into hierarchical projects, configure recurring deadline reminders, and experience fluid gesture controls like swipe-to-complete.",
    challenges:
      "Ensuring zero data loss during unexpected battery shutdowns and managing offline-first persistence with seamless background synchronization.",
    solution:
      "Leveraged Android Jetpack Room DB with Coroutines and StateFlow for declarative, reactive state observation, guaranteeing instant local storage writes without freezing the main UI thread.",
    stats: [
      { label: "Play Store Downloads", value: "5,000+", desc: "Organic downloads from developer community" },
      { label: "Daily Active Users", value: "2,200", desc: "Consistent user engagement retention" },
      { label: "Crash-Free Sessions", value: "99.9%", desc: "Rigorous unit test coverage" },
      { label: "App Size", value: "6.2 MB", desc: "Ultra-compact APK footprint" },
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Room DB", "Coroutines", "Flow", "Material You"],
    liveUrl: "https://github.com/RuchiraRTG/todo-kotlin-android",
    githubUrl: "https://github.com/RuchiraRTG/todo-kotlin-android",
  },
  {
    id: 6,
    title: "Business Portal",
    category: "Web Application",
    img: microImg,
    rotate: 8,
    top: 400,
    left: 700,
    width: 290,
    height: 392,
    bg: "#D5C5E8",
    color: "#2f105a",
    year: "2024",
    client: "Micro Enterprise Corp",
    role: "Full-Stack Software Engineer",
    subtitle: "Enterprise management portal for resource scheduling, metrics, and billing.",
    description:
      "A secure multi-department operations hub that consolidates client records, staff resource distribution, milestone billing, and automated PDF invoice generation in one central portal.",
    overview:
      "Built for mid-sized enterprises managing distributed teams and complex client portfolios. The portal centralizes disparate spreadsheets into a unified dashboard with role-based security and detailed audit trails.",
    challenges:
      "Handling real-time data synchronization between multiple departments while enforcing strict access control lists (ACL) across sensitive client billing records.",
    solution:
      "Designed a robust Spring Boot microservice architecture paired with a reactive React frontend, containerized using Docker and secured with multi-factor authentication.",
    stats: [
      { label: "Operational Speed", value: "+60%", desc: "Faster report generation and data entry" },
      { label: "Hours Saved / Week", value: "35 hrs", desc: "Per administrative department team" },
      { label: "Query Latency", value: "<120ms", desc: "Indexed database performance optimization" },
      { label: "Security Compliance", value: "100%", desc: "Enterprise-grade role-based access" },
    ],
    technologies: ["React", "Spring Boot", "MySQL", "Docker", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://businessportal.example.com",
    githubUrl: "https://github.com/RuchiraRTG/business-portal",
  },
];
