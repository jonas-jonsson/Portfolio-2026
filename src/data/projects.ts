import type { Project } from "@/types/Project";
import lokkanImage from "@/assets/images/projects/Lokkan2.png";

export const MY_PROJECTS: Project[] = [
  {
    title: "Lokkan",
    description:
      "A local-first kanban. Your plan, your data. Built with Rust and React, powered by Tauri.",
    tags: ["Rust", "Tauri", "SQLite", "React", "Vite", "Tailwind CSS"],
    imageUrl: lokkanImage,
    imageAlt: "Lokkan project screenshot",
    previewText: "Backend Service",
    previewBgClass: "bg-orange-500/10 text-orange-500",
    gitHubLink: "https://github.com/jonas-jonsson/Lokkan",
  },
  {
    title: "Clean UI Dashboard",
    description:
      "An accessible, blazing fast frontend dashboard built with React and Tailwind CSS.",
    tags: ["React", "Tailwind", "TypeScript"],
    previewText: "Frontend Layout",
    previewBgClass: "bg-yellow-500/10 text-yellow-500",
  },
];
