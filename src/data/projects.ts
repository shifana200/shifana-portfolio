import cosmixVideo from "@/assets/cosmixVideo.mp4";
import cosmixOverallCollage from "@/assets/cosmixOverallCollage.png";
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
  figmaUrl?: string;
  databaseUrl?: string;
  status?: "completed" | "in-progress";
};

export const projects: Project[] = [
  {
    id: "cosmix",
    name: "Cosmix — Cosmetics E-Commerce Platform",
    description:
      "A feature-rich full-stack cosmetics e-commerce platform built with Node.js, Express.js, MongoDB and EJS, covering the complete customer shopping journey alongside a dedicated admin management system for products, orders, users, inventory and sales.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "JWT",
      "OAuth 2.0",
      "Razorpay",
      "Nodemailer",
    ],
    features: [
      "Secure authentication with JWT, Google OAuth, OTP verification and bcrypt password hashing",
      "Product discovery with search, filtering, sorting and pagination",
      "Complete shopping flow with wishlist, cart, coupons, offers and checkout",
      "Razorpay online payments and Cash on Delivery",
      "Six admin modules covering products, categories, orders, users, offers and coupons",
      "Inventory management with low-stock alerts and complete order lifecycle tracking",
      "Wallet, referral rewards and refund management",
      "Admin analytics with sales charts, custom date-range filtering and report exports",
      "PDF and Excel invoice generation",
      "MongoDB aggregation pipeline for optimized search, filtering and reporting queries",
    ],

    video: cosmixVideo,
    videoPoster: cosmixOverallCollage,

    image: cosmixOverallCollage,
    imageAlt:
      "Cosmix e-commerce application collage showing the homepage and key application screens",

    githubUrl: "https://github.com/shifana200/CosmixProject",
    liveUrl: " https://cosmix-project.onrender.com/",
    status: "completed",
  },

  {
    id: "budget",
    name: "Budget Maintenance — Personal Finance Dashboard",
    description:
      "A full-stack personal finance application that helps users track income and expenses, organize transactions, monitor spending patterns and generate financial reports through an interactive dashboard.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Recharts",
      "Axios",
    ],
    features: [
      "Income and expense tracking with transaction management",
      "Interactive dashboard for monitoring financial activity",
      "Transaction filtering, pagination and category-based organization",
      "Visual spending analysis using charts and graphs",
      "Financial reports with downloadable report generation",
      "REST API integration between React frontend and Express backend",
    ],
    image: budgetImage,
    imageAlt:
      "Budget Maintenance personal finance dashboard showing transactions and spending analytics",
    githubUrl:
      "https://github.com/shifana200/Budget-Maintanance",
    liveUrl: "https://budget-maintanance.vercel.app/",
    status: "completed",
  },
  {
    id: "student-management",
    name: "Student Management System",
    description:
      "A TypeScript-based management application for maintaining student records through a structured CRUD workflow, RESTful APIs and MongoDB data persistence.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    features: [
      "Student record creation and management",
      "Create, read, update and delete operations",
      "RESTful API development",
      "MongoDB database integration with Mongoose",
      "TypeScript-based backend development",
    ],
    githubUrl:
      "https://github.com/shifana200/Student-Management-Typescript",
    liveUrl: " https://student-details-xi.vercel.app/",
    status: "completed",
  },

  {
    id: "weather-api",
    name: "Weather App — Live Weather Application",
    description:
      "A Node.js and Express-based weather application that integrates a third-party weather API to retrieve and display real-time weather information through a server-rendered interface.",
    tech: [
      "Node.js",
      "Express.js",
      "EJS",
      "Axios",
      "REST API",
      "OpenWeather API",
    ],
    features: [
      "Real-time weather data retrieval",
      "Third-party OpenWeather API integration",
      "Server-side rendering with EJS",
      "Asynchronous API handling using Axios",
      "Dynamic weather information based on user input",
      "Environment-based API configuration",
    ],
    githubUrl:
      "https://github.com/shifana200/Weather-App",
    liveUrl: "https://weather-app-b5g9.onrender.com",
    status: "completed",
  },

 
  {
    id: "typescript-todo",
    name: "TypeScript To-Do List",
    description:
      "A lightweight task management application built with TypeScript, designed to demonstrate typed data structures, DOM manipulation and interactive task management.",
    tech: [
      "TypeScript",
      "HTML5",
      "CSS3",
      "DOM Manipulation",
    ],
    features: [
      "Create and manage tasks",
      "Mark tasks as completed",
      "Edit existing tasks through an interactive modal",
      "Delete tasks dynamically",
      "Type-safe task data structure using TypeScript",
    ],
    githubUrl:
      "https://github.com/shifana200/Typescript-TODO-LIST",
    liveUrl: " https://todo-list00189.netlify.app/",
    status: "completed",
  },
  {
    id: "codence",
    name: "Codence — AI-Powered Job Portal",
    description:
      "An AI-powered job portal currently in development, designed to help candidates discover relevant opportunities, improve their applications and make better career decisions through intelligent recommendations and analysis.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "SQL",
      "AI",
    ],
    features: [
      "AI-powered job recommendations",
      "AI chatbot for job-search assistance",
      "AI resume analysis",
      "Resume and job description matching",
      "Candidate and job management",
      "Personalized application assistance",
    ],
    figmaUrl: "https://www.figma.com/design/Jf34bNXWQAY45UchRCx7wx/CODENCE?node-id=0-1&p=f",
    databaseUrl: "https://app.eraser.io/workspace/40cwoZrlpPjqlEluqrcH",
    status: "in-progress",
  },
];