import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-bold">Shifana — Full Stack MERN Developer</p>
          <p className="mt-1.5 text-sm text-muted-foreground">{profile.location}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-3">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid size-10 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Github className="size-4" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid size-10 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="size-4" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
              className="grid size-10 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <div className="container-page border-t border-border py-5">
        <p className="text-xs text-muted-foreground">© 2026 Shifana. All rights reserved.</p>
      </div>
    </footer>
  );
}
