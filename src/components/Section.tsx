import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
};

export function Section({ id, eyebrow, title, subtitle, children, className, muted }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={cn("section-y", muted && "bg-secondary/60 border-y border-border", className)}
    >
      <div className="container-page">
        {(eyebrow || title || subtitle) && (
          <div className="max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2
                id={`${id}-heading`}
                className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
        <div className={cn(eyebrow || title ? "mt-10 md:mt-12" : undefined)}>{children}</div>
      </div>
    </section>
  );
}
