import cosmixImage from "@/assets/project-cosmix.jpg";
import budgetImage from "@/assets/project-budget.jpg";

export type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  features: string[];
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  liveUrl?: string;
  placeholder?: boolean;
};

/**
 * Replace the placeholder URLs below (YOUR_..._URL) with the real links.
 * Add new projects by appending an object to this array — no UI changes needed.
 */
export const projects: Project[] = [
  {
    id: "cosmix",
    name: "Cosmix — Cosmetics E-Commerce Platform",
    description:
      "A full-stack cosmetics e-commerce application designed to provide users with a smooth shopping experience, from account creation and product discovery to cart management and checkout.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JavaScript", "REST APIs"],
    features: [
      "User registration and login",
      "OTP verification",
      "Product browsing and categories",
      "Cart management and checkout",
      "Cash on Delivery and online payment integration",
      "Admin functionality",
      "REST API architecture",
    ],
    image: cosmixImage,
    imageAlt: "Cosmix cosmetics e-commerce storefront interface with a product grid",
    githubUrl: "YOUR_COSMIX_GITHUB_URL",
    liveUrl: "YOUR_COSMIX_LIVE_URL",
  },
  {
    id: "budget",
    name: "Budget Maintenance",
    description:
      "A web application for managing personal transactions and tracking financial records through a simple and responsive interface.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    features: [
      "Add transactions",
      "Manage financial records",
      "API integration",
      "Responsive interface",
      "Backend API",
    ],
    image: budgetImage,
    imageAlt: "Budget maintenance dashboard showing a transaction list and spending chart",
    githubUrl: "YOUR_BUDGET_GITHUB_URL",
    liveUrl: "YOUR_BUDGET_LIVE_URL",
  },
  {
    id: "coming-soon",
    name: "Project Coming Soon",
    description:
      "A new application is currently in development. Details, technologies and links will be added here once it is ready.",
    tech: [],
    features: [],
    placeholder: true,
  },
];
