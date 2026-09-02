import { Code2, Database, GitBranch, Server } from "lucide-react";
import { Section } from "@/components/Section";

const focusAreas = [
  {
    icon: Code2,
    title: "Frontend",
    skills: "React · TypeScript · Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend",
    skills: "Node.js · Express.js · REST APIs",
  },
  {
    icon: Database,
    title: "Database",
    skills: "MongoDB · Mongoose · MySQL",
  },
  {
    icon: GitBranch,
    title: "Development",
    skills: "Git · GitHub · Postman · Figma",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About me" muted>
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a Full Stack MERN Developer focused on building responsive
            and practical web applications. I enjoy working across both
            frontend and backend development, from creating intuitive React
            interfaces to building REST APIs and database-driven applications
            with Node.js, Express and MongoDB.
          </p>

          <p>
            I&apos;ve built complete applications with features such as
            authentication, OTP verification, product management, cart and
            checkout workflows, payment integration and admin functionality.
          </p>

          <p>
            I&apos;m currently looking for an opportunity where I can contribute
            to real-world products, strengthen my engineering skills and grow
            as part of a collaborative development team.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {focusAreas.map(({ icon: Icon, title, skills }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"
                >
                  <Icon className="size-5" />
                </span>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {skills}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}