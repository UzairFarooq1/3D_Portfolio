import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  nodejs,
  mongodb,
  git,
  figma,
  vanguard,
  freelance,
  brainstorm,
  school,
  halalEventbrite,
  attendanceSystem,
  shoemania,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "IT Support Specialist",
    icon: backend,
  },
  {
    title: "Freelance Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Flutter",
    icon: mobile,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Admin Assistant & IT Admin",
    companyName: "Nairobi X-ray Supplies / Vanguard Group",
    icon: vanguard,
    iconBg: "#0047A7",
    date: "Nov 2024 - Current",
    points: [
      "Gained hands-on experience in SAP for business operations and handled sales activities.",
      "Provided IT support for computers and managed office printers and networking infrastructure.",
      "Administered firewalls to ensure network security and maintained Google Workspace Emails.",
      "Designed and implemented an IT support system and an E-job card system.",
      "Managed and updated websites for companies under the Vanguard Group.",
    ],
  },
  {
    title: "Freelance Web/Mobile Developer",
    companyName: "Self-Employed",
    icon: freelance,
    iconBg: "#28A745",
    date: "May 2024 - Current",
    points: [
      "Developing Halal EventBrite Website - Event Hosting Platform.",
      "Created Mobile Company Attendance System for efficient workforce management.",
      "Built Ecommerce Website for Shoes (ShoeMania) with full payment integration.",
      "Working with ReactJS, NextJS, Kotlin, and Flutter technologies.",
    ],
  },
  {
    title: "Assistant Sales Manager Intern",
    companyName: "Brainstorm Solutions Limited",
    icon: brainstorm,
    iconBg: "#6F42C1",
    date: "Feb 2023 - April 2023",
    points: [
      "Handled customer & supplier communication and managed inventory systems.",
      "Created and tracked invoices using QuickBooks for accurate financial records.",
      "Installed and updated operating systems for improved system performance.",
      "Gained experience in business operations and customer relationship management.",
    ],
  },
  {
    title: "Assistant Teacher (Volunteer)",
    companyName: "Highridge Primary School",
    icon: school,
    iconBg: "#FD7E14",
    date: "Jan 2021 - March 2021",
    points: [
      "Taught Mathematics and Science to primary school students.",
      "Assisted in resolving technical issues and provided educational support.",
      "Developed communication and teaching skills through volunteer work.",
      "Contributed to community development through educational initiatives.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I know Uzair as a calm, smart, and dedicated individual. His technical expertise and problem-solving abilities are remarkable. He approaches challenges with a thoughtful and methodical approach that consistently delivers excellent results.",
    name: "Yahya Issa Yakub",
    designation: "Head of Procurement Department",
    company: "Aga Khan University Hospital",
    image: "",
  },
  {
    testimonial:
      "Uzair is an outstanding student with excellent academic performance and strong technical capabilities. His projects showcase both creativity and technical expertise.",
    name: "Dr Allan Omondi",
    designation: "Lecturer and Research Coordinator",
    company: "Strathmore University",
    image: "",
  },
  {
    testimonial:
      "Uzair's work as Head of IT has significantly improved our systems efficiency. His technical solutions and proactive approach to problem-solving are commendable.",
    name: "Management Team",
    designation: "Vanguard Group of Companies",
    company: "Vanguard Group",
    image: "",
  },
];

const projects: TProject[] = [
  {
    name: "Halal EventBrite",
    description:
      "A comprehensive event hosting platform specifically designed for Halal events, allowing users to create, discover, and manage Islamic events with features like event registration, payment processing, and community building.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: halalEventbrite,
    sourceCodeLink: "https://github.com/UzairFarooq1/Halal-Eventbrite",
    projectLink: "https://halal-eventbrite.vercel.app",
  },
  {
    name: "Company Attendance System",
    description:
      "Mobile application for efficient workforce management that allows employees to clock in/out, track working hours, and provides real-time attendance monitoring for HR departments.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "kotlin",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: attendanceSystem,
    sourceCodeLink: "https://github.com/UzairFarooq1/Employee-Attendance-System-Flutter",
    projectLink: "https://play.google.com/store/apps/details?id=com.attendance.app",
  },
  {
    name: "ShoeMania Ecommerce",
    description:
      "A full-featured ecommerce website for shoe sales with complete payment integration, inventory management, user authentication, and responsive design for optimal shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: shoemania,
    sourceCodeLink: "https://github.com/UzairFarooq1/shoe-mania-ecom",
    projectLink: "https://shoe-mania-ecom.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
