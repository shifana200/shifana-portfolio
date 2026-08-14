import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { actionClass } from "@/components/ui/action";

export function ResumeCTA() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="section-y">
      <div className="container-page">
        <div className="rounded-2xl border border-border bg-primary px-6 py-10 text-primary-foreground sm:px-10 md:py-14">
          <h2 id="resume-heading" className="text-2xl font-bold sm:text-3xl">
            Interested in working together?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            I&apos;m currently open to opportunities where I can contribute as a Full Stack or MERN
            Developer and continue growing as a software developer.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.resumeUrl}
              data-placeholder-link="resume"
              className={actionClass("accent")}
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className={actionClass(
                "outline",
                "border-primary-foreground/25 bg-transparent text-primary-foreground hover:border-accent hover:text-accent",
              )}
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
