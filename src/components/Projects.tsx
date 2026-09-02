import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProject = projects.find((project) => project.id === "cosmix");

  const otherProjects = projects.filter(
    (project) => project.id !== "cosmix"
  );

  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Selected Projects"
      subtitle="A selection of applications I've designed and developed."
      muted
    >
      <div className="space-y-14">
        {/* Featured Project */}
        {featuredProject && (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Featured Project
              </span>
            </div>

            <ProjectCard project={featuredProject} featured />
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold tracking-tight">
                Other Projects
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Additional projects exploring different areas of web
                development and software engineering.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  style={{ animationDelay: `${index * 80}ms` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}