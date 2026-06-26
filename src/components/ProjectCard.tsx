import { Card } from "@/components/Card";
import { GitHubIcon } from "@/components/SocialIcons";
import type { Project } from "@/types/Project";

export const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  imageAlt,
  previewText = "Project Preview",
  previewBgClass = "bg-orange-500/10 text-orange-500",
  gitHubLink,
}: Project) => {
  return (
    <Card className="flex-col gap-4 p-5 bg-(--surface)/35 rounded-xl h-full">
      {/* Dynamic Visual Box */}
      <div className="relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt ?? `${title} preview image`}
            className="h-40 w-full rounded-lg object-cover object-top-left"
            loading="lazy"
          />
        ) : (
          <div
            className={`h-40 rounded-lg flex items-center justify-center font-mono text-sm ${previewBgClass}`}
          >
            {previewText}
          </div>
        )}

        {gitHubLink ? (
          <a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View project on GitHub"
            className="absolute bottom-2 right-2 group w-fit flex gap-1 items-center"
          >
            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-200">
              <GitHubIcon className="w-5 h-5" />
            </div>
          </a>
        ) : null}
      </div>

      {/* Info Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

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
