import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Featured Projects"
      subtitle="A selection of applications I've designed and developed."
      muted
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
