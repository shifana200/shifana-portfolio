import { Check } from "lucide-react";
import { Section } from "@/components/Section";

const highlights = [
  "Full Stack Development",
  "MERN Stack",
  "REST API Development",
  "Responsive UI",
  "Database Management",
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me" muted>
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a Full Stack MERN Developer who became interested in web development because I enjoy
            building functional, user-friendly web applications.
          </p>
          <p>
            I have trained in the MERN stack and have hands-on experience building frontend
            interfaces, REST APIs, authentication systems, database-driven applications, and complete
            web application workflows.
          </p>
          <p>
            I enjoy transforming ideas into practical digital products and continuously improving my
            development skills.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Core Focus Areas
          </h3>
          <ul className="mt-4 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-medium">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent"
                >
                  <Check className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
