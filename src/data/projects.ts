import type { Project } from "@/types/Project";
import lokkanImage from "@/assets/images/projects/Lokkan2.png";
import devtalkImage from "@/assets/images/projects/DevTalk.png";

export const MY_PROJECTS: Project[] = [
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
];
