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

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  muted,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={cn(
        "section-y",
        muted && "border-y border-border bg-secondary/60",
        className,
      )}
    >
      <div className="container-page">
        {(eyebrow || title || subtitle) && (
          <div className="max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}

            {title && (
              <h2
                id={`${id}-heading`}
                className="mt-1.5 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={cn(eyebrow || title ? "mt-6 md:mt-7" : undefined)}>
          {children}
        </div>
      </div>
    </section>
  );
}