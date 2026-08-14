import { Section } from "@/components/Section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical Skills"
      subtitle="Technologies I work with across the frontend, backend, and database layers."
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map(({ title, icon: Icon, items }) => (
          <article
            key={title}
            className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-lift)]"
          >
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent"
            >
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
