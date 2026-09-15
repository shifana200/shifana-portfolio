import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { actionClass } from "@/components/ui/action";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="pt-14 pb-12 sm:pt-18 md:pt-18 md:pb-16"
    >
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center reveal">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            {profile.location} - Open to full-time opportunities
          </p>

          <h1
            id="hero-heading"
            className="mt-7 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m Shifana.
            <span className="mt-3 block text-accent">
              Full Stack MERN Developer.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I build responsive, user-focused web applications using React,
            Node.js, Express and MongoDB, with a focus on clean interfaces,
            reliable APIs and practical solutions.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#projects" className={actionClass("primary")}>
              View My Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
           href={profile.resumeUrl}
           download="Shifana-Resume.pdf"
           className={actionClass("outline")}
            >
           <Download className="size-4" aria-hidden="true" />
           Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm">
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
      </div>
    </section>
  );
}
