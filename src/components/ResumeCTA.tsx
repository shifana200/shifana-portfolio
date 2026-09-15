import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { actionClass } from "@/components/ui/action";

export function ResumeCTA() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="section-y">
      <div className="container-page">
        <div className="rounded-2xl border border-border bg-primary px-5 py-8 text-primary-foreground sm:px-8 sm:py-10 md:px-10 md:py-12">
        <h2 id="resume-heading" className="text-2xl font-bold sm:text-3xl">
  Let&apos;s Build Something Great Together
</h2>

<p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
  I&apos;m open to opportunities where I can contribute my skills in
  full-stack development, build meaningful web applications, and grow
  alongside a collaborative team.
</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
           
            <a
  href={profile.resumeUrl}
  download="Shifana-Resume.pdf"
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
