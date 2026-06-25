// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  tags: string[];
  previewText?: string;
  previewBgClass?: string; // Tailwind color utility classes
}

export const MY_PROJECTS: Project[] = [
  {
    title: "Awesome Backend API",
    description:
      "A robust, highly scalable REST API built using Go and PostgreSQL.",
    tags: ["Go", "PostgreSQL", "Docker"],
    previewText: "Backend Service",
    previewBgClass: "bg-orange-500/10 text-orange-500",
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
