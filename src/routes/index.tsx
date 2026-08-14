import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { WhatIBring } from "@/components/WhatIBring";
import { Workflow } from "@/components/Workflow";
import { ResumeCTA } from "@/components/ResumeCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Shifana | Full Stack MERN Developer";
const description =
  "Portfolio of Shifana, a Full Stack MERN Developer building responsive and user-focused web applications with React, Node.js, Express, and MongoDB.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Shifana",
          jobTitle: "Full Stack MERN Developer",
          email: "mailto:shifanasaleem50@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Abu Dhabi", addressCountry: "AE" },
          sameAs: [
            "https://github.com/shifana200",
            "https://www.linkedin.com/in/shifanasaleem/",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhatIBring />
        <Workflow />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
