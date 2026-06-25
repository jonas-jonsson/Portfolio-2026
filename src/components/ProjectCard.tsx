import { Card } from "@/components/Card";

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  previewText?: string;
  previewBgClass?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  previewText = "Project Preview",
  previewBgClass = "bg-orange-500/10 text-orange-500",
}: ProjectProps) => {
  return (
    <Card className="flex-col gap-4 p-5 bg-(--surface)/35 rounded-xl h-full">
      {/* Dynamic Visual Box */}
      <div
        className={`h-40 rounded-lg flex items-center justify-center font-mono text-sm ${previewBgClass}`}
      >
        {previewText}
      </div>

      {/* Info Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Tags Wrapper - mt-auto keeps this locked to the bottom of the card */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-white/10 px-2 py-1 rounded-lg text-gray-300 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
};
