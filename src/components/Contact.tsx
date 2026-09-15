import { useState, type FormEvent } from "react";
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send, XCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import { actionClass } from "@/components/ui/action";
import { cn } from "@/lib/utils";

type Errors = { name?: string; email?: string; message?: string };

const inputClass =
  "mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent";

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [isSending, setIsSending] = useState(false);

  const update = (key: keyof typeof values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setStatus("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const next: Errors = {};

    if (values.name.trim().length < 2) {
      next.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (values.message.trim().length < 10) {
      next.message = "Please write at least 10 characters.";
    }

    setErrors(next);

    if (Object.keys(next).length > 0) return;

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");

      setValues({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Connect"
      subtitle="Have an opportunity or want to discuss a project? I'd love to hear from you."
      muted
    >
      <div className="grid gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <ul className="space-y-3">
          {[
            {
              icon: Mail,
              label: "Email",
              value: profile.email,
              href: `mailto:${profile.email}`,
            },
            {
              icon: MapPin,
              label: "Location",
              value: profile.location,
            },
            {
              icon: Github,
              label: "GitHub",
              value: "github.com/shifana200",
              href: profile.github,
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "linkedin.com/in/shifanasaleem",
              href: profile.linkedin,
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <li
              key={label}
              className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-4"
            >
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent"
              >
                <Icon className="size-4" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>

                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    className="block truncate text-sm font-medium transition-colors hover:text-accent"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your full name"
                className={cn(
                  inputClass,
                  errors.name ? "border-destructive" : "border-input",
                )}
              />

              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1.5 text-xs font-medium text-destructive"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="you@company.com"
                className={cn(
                  inputClass,
                  errors.email ? "border-destructive" : "border-input",
                )}
              />

              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1.5 text-xs font-medium text-destructive"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "message-error" : "form-note"
                }
                placeholder="Tell me about the role or project…"
                className={cn(
                  inputClass,
                  "resize-y",
                  errors.message
                    ? "border-destructive"
                    : "border-input",
                )}
              />

              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1.5 text-xs font-medium text-destructive"
                >
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={cn(
              actionClass("primary", "mt-4 w-full"),
              isSending && "cursor-not-allowed opacity-70",
            )}
          >
            <Send className="size-4" aria-hidden="true" />
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div
              role="status"
              className="mt-4 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-300"
            >
              <CheckCircle2
                className="mt-0.5 size-5 shrink-0"
                aria-hidden="true"
              />

              <div>
                <p className="font-semibold">Message sent successfully!</p>
                <p className="mt-1 leading-relaxed opacity-90">
                  Thanks for reaching out. I&apos;ll get back to you as soon as
                  possible.
                </p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300"
            >
              <XCircle
                className="mt-0.5 size-5 shrink-0"
                aria-hidden="true"
              />

              <div>
                <p className="font-semibold">Unable to send your message.</p>
                <p className="mt-1 leading-relaxed opacity-90">
                  Please try again or email me directly.
                </p>
              </div>
            </div>
          )}

          <p
            id="form-note"
            className="mt-3 text-xs leading-relaxed text-muted-foreground"
          >
            Your message will be sent directly to my inbox. You can also email
            me directly at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-medium underline hover:text-accent"
            >
              {profile.email}
            </a>
            .
          </p>
        </form>
      </div>
    </Section>
  );
}