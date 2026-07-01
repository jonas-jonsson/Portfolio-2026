import type { Project } from "@/types/Project";
import lokkanImage from "@/assets/images/projects/Lokkan2.png";
import devtalkImage from "@/assets/images/projects/DevTalk.png";
import springsecImage from "@/assets/images/projects/springboot-security.png";
import freeisfunImage from "@/assets/images/projects/free-is-fun.png";
import portfolio2025Image from "@/assets/images/projects/portfolio-2025.png";
import portfolio2026Image from "@/assets/images/projects/portfolio-2026.png";

export const MY_PROJECTS: Project[] = [
  // Portfolio 2026
  {
    title: "Portfolio 2026",
    description: [
      "You're looking at it!",
      "My current personal portfolio, built with built with Typescript, Vite React, React Router, Tailwind CSS, Three.js and vantajs.",
    ],
    tags: [
      "Typescript",
      "Vite React",
      "React Router",
      "Tailwind CSS",
      "Three.js",
      "vantajs",
    ],
    imageUrl: portfolio2026Image,
    imageAlt: "Portfolio 2026 project screenshot",
    gitHubLink: "https://github.com/jonas-jonsson/portfolio-2026",
  },

  // Lokkan
  {
    title: "Lokkan",
    description: [
      "A local-first kanban. Your plan, your data. Built with Rust and React, powered by Tauri.",
      "- Local-first: All data stored in SQLite on your machine",
      "- Offline-capable: Works without internet connection",
      "- Privacy-focused: No external services, no telemetry",
    ],
    tags: [
      "Rust",
      "Tauri",
      "SQLite",
      "React",
      "Vite",
      "React Router",
      "Zustand",
      "Typescript",
      "Tailwind CSS",
    ],
    imageUrl: lokkanImage,
    imageAlt: "Lokkan project screenshot",
    gitHubLink: "https://github.com/jonas-jonsson/Lokkan",
  },

  // DevTalk
  {
    title: "DevTalk",
    description: [
      "DevTalk is a Slack/Discord-inspired chatting platform tailored for developers, made as a collab with my class mates.",
      "We provide an intuitive, responsive interface with real-time messaging capabilities, GitHub OAuth authentication, and a sleek dark/light theme system.",
    ],
    tags: [
      "React",
      "Vite",
      "React Router",
      "Zustand",
      "Typescript",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "Framer Motion",
      "stompjs",
      "SockJS",
      "i18next",
      "Java",
      "Springboot",
      "Swagger",
    ],
    imageUrl: devtalkImage,
    imageAlt: "DevTalk project screenshot",
    gitHubLink: "https://github.com/WictorNisa/DevTalk",
  },

  // Portfolio 2025
  {
    title: "Portfolio 2025",
    description: [
      "My older portfolio, that I am still very happy with. Personal portfolio site, built with React, TypeScript, and PostCSS.",
    ],
    tags: [
      "React",
      "Vite",
      "React Router",
      "Typescript",
      "Vanilla CSS",
      "PostCSS",
    ],
    imageUrl: portfolio2025Image,
    imageAlt: "Portfolio 2025 project screenshot",
    gitHubLink: "https://github.com/jonas-jonsson/portfolio",
  },

  // Springboot Security
  {
    title: "Library: Springboot Security",
    description: [
      "A secure and extensible REST API for managing a library system",
      "Built with modern Spring Boot practices, hardened for production, and targeting VG-level criteria.",
    ],
    tags: [
      "Java",
      "Springboot",
      "Maven",
      "SQLite",
      "Spring Data JPA",
      "Spring Web",
      "Spring Security",
      "JWT",
      "Stateless Auth",
      "Role & Method-based ACL",
      "JUnit 5",
      "MockMv",
      "SLF4J",
      "Jakarta Bean Validation",
      "Spring DevTools",
      "Lombok",
    ],
    imageUrl: springsecImage,
    imageAlt: "Springboot Security screenshot",
    gitHubLink: "https://github.com/jonas-jonsson/library-springboot-security",
  },

  // Free is Fun
  {
    title: "Free Is Fun",
    description: [
      "This web app was created as a personal practice project, inspired by a close friend who would always drag me along to try out every hyped free-to-play game he could find.",
      "Whether they were hidden gems or complete flops, the thrill of discovering new games together was always fun. This site is a tribute to that experience - a way to explore and find free games worth playing.",
    ],
    tags: [
      "React",
      "Vite",
      "React Router",
      "Typescript",
      "Tailwind CSS",
      "REST API",
    ],
    imageUrl: freeisfunImage,
    imageAlt: "free is fun screenshot",
    gitHubLink: "https://github.com/jonas-jonsson/free-is-fun",
  },
];
