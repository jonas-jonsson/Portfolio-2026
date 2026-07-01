import { useState } from "react";
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
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <Card className="flex-col gap-4 p-5 bg-(--surface)/35 rounded-xl h-full">
      {/* Dynamic Visual Box */}
      <div className="relative">
        {imageUrl ? (
          <button
            type="button"
            onClick={() => setIsImageOpen(true)}
            className="block h-40 w-full cursor-zoom-in overflow-hidden rounded-lg"
            aria-label={`Open larger preview for ${title}`}
          >
            <img
              src={imageUrl}
              alt={imageAlt ?? `${title} preview image`}
              className="h-full w-full object-cover object-top-left"
              loading="lazy"
            />
          </button>
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
            <div className="p-2 rounded-lg bg-(--accent-gold-soft) text-(--accent-gold) group-hover:bg-(--accent-gold) group-hover:text-(--text-h) transition-colors duration-200">
              <GitHubIcon className="w-5 h-5" />
            </div>
          </a>
        ) : null}
      </div>

      {isImageOpen && imageUrl ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} enlarged preview`}
          onClick={() => setIsImageOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-(--surface)/80 px-3 py-2 text-sm font-medium text-(--text-h) shadow-lg"
            aria-label="Close image preview"
          >
            Close
          </button>
          <img
            src={imageUrl}
            alt={imageAlt ?? `${title} enlarged preview image`}
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}

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
