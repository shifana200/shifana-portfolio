import { Section } from "@/components/Section";

const steps = [
  { no: "01", title: "Understand", text: "Understand the problem and requirements." },
  { no: "02", title: "Plan", text: "Plan the application structure, data flow, and user experience." },
  { no: "03", title: "Build", text: "Develop the frontend, backend, APIs, and database integration." },
  { no: "04", title: "Test", text: "Test functionality, responsiveness, and user flows." },
  { no: "05", title: "Deploy", text: "Deploy and continuously improve the application." },
];

export function Workflow() {
  return (
    <Section id="workflow" eyebrow="Process" title="Development Approach" muted>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {steps.map((step) => (
          <li key={step.no} className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-sm font-bold text-accent">{step.no}</p>
            <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
