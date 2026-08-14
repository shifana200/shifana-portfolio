import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { actionClass } from "@/components/ui/action";

const stack = ["MongoDB", "Express.js", "React", "Node.js"];

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="min-w-0 reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            {profile.location} · Open to opportunities
          </p>

          <h1 id="hero-heading" className="mt-6 text-3xl font-bold leading-[1.15] sm:text-4xl md:text-5xl">
            Hi, I&apos;m Shifana.
            <span className="mt-2 block text-accent">Full Stack MERN Developer.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I build responsive, user-focused web applications using modern JavaScript technologies,
            with a focus on clean interfaces, scalable backend systems, and practical solutions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className={actionClass("primary")}>
              View My Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.resumeUrl}
              className={actionClass("outline")}
              data-placeholder-link="resume"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <Linkedin className="size-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="min-w-0 reveal" style={{ animationDelay: "120ms" }}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/70 px-4 py-3">
              <span aria-hidden="true" className="size-2.5 rounded-full bg-destructive/60" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-accent/50" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">developer.ts</span>
            </div>
            <div className="overflow-x-auto p-4 sm:p-6">
              <pre className="font-mono text-[0.7rem] leading-relaxed text-muted-foreground sm:text-xs">
                <code>{`const shifana = {
  role: "Full Stack MERN Developer",
  location: "Abu Dhabi, UAE",
  frontend: ["React", "TypeScript", "Tailwind"],
  backend: ["Node.js", "Express", "REST APIs"],
  database: ["MongoDB", "Mongoose", "MySQL"],
  focus: "clean UI + scalable APIs",
};`}</code>
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-px border-t border-border bg-border sm:grid-cols-4">
              {stack.map((item) => (
                <div key={item} className="bg-card px-3 py-4 text-center">
                  <p className="text-xs font-semibold sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
