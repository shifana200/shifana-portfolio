import { ExternalLink, Github, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";
import { actionClass } from "@/components/ui/action";

export function ProjectCard({ project }: { project: Project }) {
  const { name, description, tech, features, image, imageAlt, githubUrl, liveUrl, placeholder } =
    project;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-lift)]">
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ""}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[3/2] w-full border-b border-border bg-secondary object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="grid aspect-[3/2] w-full place-items-center border-b border-border bg-secondary text-muted-foreground"
        >
          <Sparkles className="size-8" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug">{name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{description}</p>

        {tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${name}`}>
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {features.length > 0 && (
          <div className="mt-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Key features
            </h4>
            <ul className="mt-2.5 space-y-1.5 text-sm text-muted-foreground">
              {features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-2.5 pt-1 sm:flex-row">
          {placeholder ? (
            <p className="text-sm font-medium text-muted-foreground">
              Details and links coming soon.
            </p>
          ) : (
            <>
              <a
                href={githubUrl}
                data-placeholder-link={githubUrl?.startsWith("YOUR_") ? "github" : undefined}
                target="_blank"
                rel="noreferrer noopener"
                className={actionClass("outline", "flex-1")}
              >
                <Github className="size-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={liveUrl}
                data-placeholder-link={liveUrl?.startsWith("YOUR_") ? "live-demo" : undefined}
                target="_blank"
                rel="noreferrer noopener"
                className={actionClass("primary", "flex-1")}
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                Live Demo
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
