import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/profile";
import { actionClass } from "@/components/ui/action";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const linkClass = (href: string, mobile = false) =>
    cn(
      "rounded-md font-medium transition-colors",
      mobile ? "block px-2 py-3 text-base" : "px-3 py-2 text-sm",
      activeSection === href.slice(1)
        ? "bg-accent-soft text-accent"
        : "text-muted-foreground hover:text-accent",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5 text-base font-bold tracking-tight">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground"
          >
            S
          </span>
          Shifana
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={actionClass("primary", "ml-3")}>
            Let&apos;s Connect
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-lg border border-input text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={linkClass(link.href, true)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={actionClass("primary", "w-full")}
              >
                Let&apos;s Connect
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
