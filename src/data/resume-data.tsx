import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";



export const RESUME_DATA = {
  name: "Ankur Patel",
  initials: "AP",
  location: "San Jose, CA",
  locationLink: "https://www.google.com/maps/place/San+Jose,+CA",
  about:
    "Full Stack Engineer passionate about scalable systems and building tools that solve real-world problems.",
  summary: (
    <>
      Software Engineer with experience in Angular, React, Spring Boot, and
      real-time systems. Strong background in backend services, API design,
      performance optimization, and cloud deployments. Passionate about
      AI-driven tools and developer experience automation.
    </>
  ),
  avatarUrl: "https://github.com/ankur106.png",
  personalWebsiteUrl: "",
  contact: {
    email: "ankurpatelg23@gmail.com",
    tel: "+1-201-770-7483",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ankur106",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankur-patel106/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Arizona State University, Tempe, AZ",
      degree: "Master of Science in Computer Science, GPA: 3.85/4",
      start: "2023",
      end: "2025",
    },
    {
      school: "Birla Vishvakarma Mahavidyalaya, India",
      degree: "Bachelor of Technology in Computer Engineering, GPA: 8.01/10",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Crest Data",
      link: "https://www.crestdata.ai/",
      badges: [
        "Angular",
        "NGXS",
        "Spring Boot",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "Elasticsearch",
      ],
      title: "Software Engineer",
      logo: "", 
      start: "2022",
      end: "2023",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Built and scaled a multi-tenant SIEM-based endpoint security
              platform serving ∼1.5M endpoints
            </li>
            <li>
              Implemented SSO with Frontegg APIs and a real-time notification
              center with WebSockets
            </li>
            <li>
              Developed CLI tool for test data ingestion, reducing manual effort
              by 85%
            </li>
            <li>
              Designed and integrated RBAC-enforced UI components and REST APIs
              for various dashboards
            </li>
            <li>
              Led Pendo and feature flag adoption, improving product strategy
              and user satisfaction by ~30%
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Crest Data",
      link: "",
      badges: ["Flask", "Angular", "AWS", "JIRA"],
      title: "Software Engineer Intern",
      logo: "",
      start: "2022",
      end: "2022",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Built in-house tool integrating JIRA and Vtiger CRM for project
              tracking
            </li>
            <li>
              Delivered REST APIs and schedulers using Flask, deployed on AWS
              EC2
            </li>
            <li>
              Tested with Jest, Pytest, and Cypress for full stack validation
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Confidosoft Solutions",
      link: "",
      badges: ["React", "Spring Boot", "Python", "Kafka", "MongoDB"],
      title: "Software Development Intern",
      logo: "",
      start: "2020",
      end: "2021",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed real-time signal monitoring system for industrial
              processes
            </li>
            <li>
              Implemented multi-threading solution to optimize data processing
            </li>
            <li>Built REST APIs for managing sensor-based spindle systems</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "Angular",
    "React",
    "Spring Boot",
    "PostgreSQL",
    "Kafka",
    "Redis",
    "MongoDB",
    "Docker",
    "AWS",
    "AWS CDK",
    "CI/CD",
    "NGXS",
    "Jest",
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      organization: "Amazon Web Services",
      date: "May 2024",
      url: "https://www.credly.com/badges/0c8348b7-0d9d-4d05-af95-e2c9ec0b608a/public_url"
    }
  ],
  projects: [
    {
      title: "LLDB Agent",
      techStack: ["TypeScript", "LLDB", "Model Context Protocol"],
      description:
        "Integrated LLDB with Model Context Protocol for cross-host AI-driven debugging and crash diagnosis.",
      logo: "", // Optional: add a custom logo
      link: {
        label: "GitHub",
        href: "https://github.com/ankur106",
      },
    },
    {
      title: "MiniTable",
      techStack: ["Java", "Disk Management", "DBMS"],
      description:
        "Extended Minibase to build a full columnar DBMS for OLAP workloads, including disk and buffer management.",
      logo: "",
      link: {
        label: "GitHub",
        href: "https://github.com/ankur106",
      },
    },
    {
      title: "MediaInsightAI",
      techStack: ["Python", "PostgreSQL", "CLIP", "GPT", "Dropbox API", "AWS"],
      description:
        "AI-powered media manager using CLIP and GPT to tag and organize images, hosted on AWS with Dropbox integration.",
      logo: "",
      link: {
        label: "GitHub",
        href: "https://github.com/ankur106",
      },
    },
    {
      title: "Nanobase",
      techStack: ["React", "Flask", "S3", "MySQL", "Elasticsearch", "AWS"],
      description:
        "Platform for uploading and visualizing DNA/RNA and protein nanostructures to aid global collaboration.",
      logo: "",
      link: {
        label: "GitHub",
        href: "https://nanobase.org/",
      },
    },
  ],
} as const;


// export const RESUME_DATA = {
//   name: "Ankur Patel",
//   initials: "AP",
//   location: "San Jose, CA",
//   locationLink: "https://www.google.com/maps/place/San+Jose,+CA",
//   about:
//     "Passionate about building high-quality products and solving complex problems.",
//   summary: (
//     <>
//       Frontend-focused Full Stack Engineer specializing in high-performance
//       React applications, scalable Node.js services, and real-time collaboration
//       systems. Experienced in technical architecture design and remote team
//       leadership.
//     </>
//   ),
//   avatarUrl: "https://github.com/ankur106.png",
//   personalWebsiteUrl: "https://jarocki.me",
//   contact: {
//     email: "ankurpatelg23@gmail.com",
//     tel: "+1-201-770-7483",
//     social: [
//       {
//         name: "GitHub",
//         url: "https://github.com/BartoszJarocki",
//         icon: GitHubIcon,
//       },
//       {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/bjarocki/",
//         icon: LinkedInIcon,
//       },
//       {
//         name: "X",
//         url: "https://x.com/BartoszJarocki",
//         icon: XIcon,
//       },
//     ],
//   },
//   education: [
//     {
//       school: "Wrocław University of Technology",
//       degree: "Bachelor's Degree in Control systems engineering and Robotics",
//       start: "2007",
//       end: "2010",
//     },
//   ],
//   work: [
//     {
//       company: "Film.io",
//       link: "https://film.io",
//       badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
//       title: "Software Architect",
//       logo: ConsultlyLogo,
//       start: "2024",
//       end: null,
//       description: (
//         <>
//           Leading technical architecture of a blockchain-based film funding
//           platform.
//           <ul className="list-inside list-disc">
//             <li>
//               Architecting migration from CRA to Next.js for improved
//               performance, SEO, and DX
//             </li>
//             <li>
//               Established release process enabling faster deployments and
//               reliable rollbacks
//             </li>
//             <li>
//               Implementing system-wide monitoring and security improvements
//             </li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       company: "Parabol",
//       link: "https://parabol.co",
//       badges: [
//         "Remote",
//         "React",
//         "TypeScript",
//         "Node.js",
//         "GraphQL",
//         "Tailwind CSS",
//       ],
//       title: "Senior Full Stack Developer",
//       logo: ParabolLogo,
//       start: "2021",
//       end: "2024",
//       description: (
//         <>
//           Senior developer and squad leader for an enterprise agile meeting
//           platform.
//           <ul className="list-inside list-disc">
//             <li>
//               Built design system with Tailwind CSS, improving development speed
//               and time to market
//             </li>
//             <li>
//               Implemented engineering practices: PR automation, code review
//               guidelines, and workflows
//             </li>
//             <li>
//               Open source contributions to Relay DevTools and React i18n tooling
//             </li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       company: "Clevertech",
//       link: "https://clevertech.biz",
//       badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
//       title: "Lead Android Developer → Full Stack Developer",
//       logo: ClevertechLogo,
//       start: "2015",
//       end: "2021",
//       description: (
//         <>
//           Successfully transitioned from mobile to full-stack development while
//           leading distributed teams.
//           <ul className="list-inside list-disc">
//             <li>
//               Led frontend team at Evercast, building real-time platform
//               supporting 30+ users per room with HD streaming and collaboration
//               tools
//             </li>
//             <li>
//               Developed offline-first Android app for DKMS, improving donor
//               registration process
//             </li>
//             <li>
//               Led development teams across multiple successful client projects
//             </li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       company: "Jojo Mobile",
//       link: "https://bsgroup.eu/",
//       badges: ["On Site", "Android", "Java", "Kotlin"],
//       title: "Android Developer → Lead Android Developer",
//       logo: JojoMobileLogo,
//       start: "2012",
//       end: "2015",
//       description: (
//         <>
//           First Android developer, grew and led a team of 15+ engineers while
//           establishing engineering culture.
//           <ul className="list-inside list-disc">
//             <li>
//               Developed apps for major Polish companies including LOT, Polskie
//               Radio, and Agora
//             </li>
//             <li>Built and mentored high-performing mobile development team</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       company: "Nokia Siemens Networks",
//       link: "https://www.nokia.com",
//       badges: ["On Site", "C/C++", "LTE", "Agile"],
//       title: "C/C++ Developer",
//       logo: NSNLogo,
//       start: "2010",
//       end: "2012",
//       description:
//         "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
//     },
//   ],
//   skills: [
//     "React/Next.js/Remix",
//     "TypeScript",
//     "Tailwind CSS",
//     "Design Systems",
//     "WebRTC",
//     "WebSockets",
//     "Node.js",
//     "GraphQL",
//     "Relay",
//     "System Architecture",
//     "Remote Team Leadership",
//   ],
//   projects: [
//     {
//       title: "Monito",
//       techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
//       description:
//         "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
//       logo: MonitoLogo,
//       link: {
//         label: "monito.dev",
//         href: "https://monito.dev/",
//       },
//     },
//     {
//       title: "Consultly",
//       techStack: [
//         "TypeScript",
//         "Next.js",
//         "Vite",
//         "GraphQL",
//         "WebRTC",
//         "Tailwind CSS",
//         "PostgreSQL",
//         "Redis",
//       ],
//       description:
//         "Platform for online consultations with real-time video meetings and scheduling",
//       logo: ConsultlyLogo,
//       link: {
//         label: "consultly.com",
//         href: "https://consultly.com/",
//       },
//     },
//     {
//       title: "Minimalist CV",
//       techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
//       description:
//         "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
//       logo: MonitoLogo,
//       link: {
//         label: "Minimalist CV",
//         href: "https://github.com/BartoszJarocki/cv",
//       },
//     },
//   ],
// } as const;
