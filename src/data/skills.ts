import { Code2, Server, Database, Wrench, type LucideIcon } from "lucide-react";

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "React Router",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "MVC Architecture"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "Mongoose", "MySQL", "SQL"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "Figma", "Vite", "Netlify", "Render"],
  },
];
