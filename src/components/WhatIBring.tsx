import { Users, Layers, Puzzle, TrendingUp } from "lucide-react";
import { Section } from "@/components/Section";

const points = [
  {
    icon: Users,
    title: "User-Focused Development",
    text: "I care about creating interfaces that are clear, intuitive, and easy to use.",
  },
  {
    icon: Layers,
    title: "Full-Stack Understanding",
    text: "I understand both frontend and backend development and how they work together.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    text: "I enjoy breaking complex requirements into practical and maintainable solutions.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    text: "I continuously improve my technical skills and stay curious about modern development practices.",
  },
];

export function WhatIBring() {
  return (
    <Section id="what-i-bring" eyebrow="Why work with me" title="What I Bring">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {points.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-2xl border border-border bg-card p-5">
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent"
            >
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
