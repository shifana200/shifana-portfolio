import { ExternalLink, Github, Database, Figma, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { actionClass } from "@/components/ui/action";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  style?: CSSProperties;
};

export function ProjectCard({
  project,
  featured = false,
  style,
}: ProjectCardProps) {
  const {
    name,
    description,
    tech,
    features,
    image,
    imageAlt,
    video,
    videoPoster,
    githubUrl,
    liveUrl,
    figmaUrl,
    databaseUrl,
    status,
  } = project;

  const isInProgress = status === "in-progress";

  const visibleFeatures = featured
    ? features.slice(0, 6)
    : features.slice(0, 4);

  return (
    <article
      style={style}
      className={[
        "group overflow-hidden rounded-2xl border border-border bg-card",
        "shadow-[var(--shadow-soft)] transition-all duration-200",
        "hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-lift)]",
        featured
          ? "lg:grid lg:grid-cols-[1.05fr_0.95fr]"
          : "flex h-full flex-col",
      ].join(" ")}
    >
      {/* CONTENT */}
      <div
        className={
          featured
            ? "flex flex-col justify-center p-6 sm:p-8 lg:p-10"
            : "flex flex-1 flex-col p-5 sm:p-6"
        }
      >
        {/* Labels */}
        <div className="flex flex-wrap items-center gap-2">
          {featured && (
            <span className="inline-flex w-fit items-center rounded-full bg-accent-soft px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-accent">
              Featured Project
            </span>
          )}

          {isInProgress && (
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="size-3" aria-hidden="true" />
              Currently Building
            </span>
          )}
        </div>

        {/* TITLE */}
        <h3
          className={
            featured
              ? "mt-5 text-2xl font-bold leading-tight sm:text-3xl"
              : "mt-3 text-lg font-semibold leading-snug"
          }
        >
          {featured ? (
            <>
              <span className="text-accent">Cosmix</span>
              <span className="text-foreground">
                {" "}
                — Cosmetics E-Commerce Platform
              </span>
            </>
          ) : (
            name
          )}
        </h3>

        {/* DESCRIPTION */}
        <p
          className={
            featured
              ? "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
              : "mt-2.5 text-sm leading-relaxed text-muted-foreground"
          }
        >
          {description}
        </p>

        {/* PROJECT METRICS */}
        {featured && (
          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-accent/20 bg-accent-soft/60 p-4 text-center">
              <p className="text-2xl font-bold text-accent sm:text-3xl">
                20+
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                Pages
              </p>
            </div>

            <div className="rounded-xl border border-accent/20 bg-accent-soft/60 p-4 text-center">
              <p className="text-2xl font-bold text-accent sm:text-3xl">
                6
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                Admin Modules
              </p>
            </div>

            <div className="rounded-xl border border-accent/20 bg-accent-soft/60 p-4 text-center">
              <p className="text-2xl font-bold text-accent sm:text-3xl">
                Full
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                Order Lifecycle
              </p>
            </div>
          </div>
        )}

        {/* TECHNOLOGIES */}
        {tech.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Technologies
            </h4>

            <ul
              className="mt-3 flex flex-wrap gap-2"
              aria-label={`Technologies used in ${name}`}
            >
              {tech.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* KEY FEATURES */}
        {visibleFeatures.length > 0 && (
          <div className={featured ? "mt-7" : "mt-5"}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Key Features
            </h4>

            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {visibleFeatures.map((feature) => (
                <li key={feature} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                  />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* LINKS */}
        <div className="mt-8 flex flex-col gap-2.5 pt-1 sm:flex-row sm:flex-wrap">
          {/* GitHub */}
          {githubUrl && !githubUrl.startsWith("YOUR_") && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={actionClass("outline", "flex-1")}
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </a>
          )}

          {/* Live Demo */}
          {liveUrl && !liveUrl.startsWith("YOUR_") && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={actionClass("primary", "flex-1")}
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Live Demo
            </a>
          )}

          {/* Figma */}
          {figmaUrl && !figmaUrl.startsWith("YOUR_") && (
            <a
              href={figmaUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={actionClass("outline", "flex-1")}
            >
              <Figma className="size-4" aria-hidden="true" />
              Figma Design
            </a>
          )}

          {/* Database Design */}
          {databaseUrl && !databaseUrl.startsWith("YOUR_") && (
            <a
              href={databaseUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={actionClass("outline", "flex-1")}
            >
              <Database className="size-4" aria-hidden="true" />
              Database Design
            </a>
          )}

          {/* In-progress status */}
          {isInProgress &&
            !figmaUrl &&
            !databaseUrl && (
              <p className="flex items-center text-sm font-medium text-muted-foreground">
                Currently in development
              </p>
            )}
        </div>
      </div>

      {/* MEDIA */}
      <div
        className={
          featured
            ? "order-first border-b border-border bg-secondary p-3 sm:p-4 lg:order-none lg:border-b-0 lg:border-l"
            : "order-first border-b border-border bg-secondary"
        }
      >
        {featured && video ? (
          <div className="flex h-full flex-col gap-3">
            {/* VIDEO */}
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <video
                className="aspect-video w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={videoPoster}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>

            {/* HOMEPAGE COLLAGE */}
            {image && (
              <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-border bg-background">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        ) : image ? (
          <img
            src={image}
            alt={imageAlt ?? ""}
            loading="lazy"
            width={1200}
            height={800}
            className={
              featured
                ? "h-full min-h-[280px] w-full object-cover sm:min-h-[360px] lg:min-h-full"
                : "aspect-[3/2] w-full object-cover"
            }
          />
        ) : (
          <div
            aria-hidden="true"
            className={
              featured
                ? "grid min-h-[280px] w-full place-items-center text-muted-foreground sm:min-h-[360px] lg:min-h-full"
                : "grid aspect-[3/2] w-full place-items-center text-muted-foreground"
            }
          >
            <Sparkles className="size-8" />
          </div>
        )}
      </div>
    </article>
  );
}