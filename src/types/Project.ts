export interface Project {
  title: string;
  description: string[];
  tags: string[];
  imageUrl?: string;
  imageAlt?: string;
  previewText?: string;
  previewBgClass?: string; // Tailwind color utility classes
  gitHubLink?: string;
}
