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
  previewBgClass = "bg-[color:var(--accent-orange-soft)] text-[color:var(--accent-orange)]",
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
            <div className="p-2 rounded-lg bg-[color:var(--accent-gold-soft)] text-[color:var(--accent-gold)] group-hover:bg-[color:var(--accent-gold)] group-hover:text-(--text-h) transition-colors duration-200">
              <GitHubIcon className="w-5 h-5" />
            </div>
          </a>
        ) : null}
      </div>

      {/* Info Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-bold text-(--text-h)">{title}</h3>
        <div className="flex flex-col gap-3 text-(--text) text-sm leading-relaxed">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-lg bg-(--surface)/70 border border-(--border)/15 text-(--text-h) font-semibold tracking-wide shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
};
