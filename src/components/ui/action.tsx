import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "accent";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90 hover:-translate-y-0.5",
  outline: "border border-input bg-card text-foreground hover:border-accent hover:text-accent",
  ghost: "text-muted-foreground hover:text-accent",
};

export function actionClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}
