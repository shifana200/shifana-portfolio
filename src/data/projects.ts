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
      "A full-stack cosmetics e-commerce platform built with Node.js, Express.js, MongoDB and EJS, featuring a complete customer shopping experience and a dedicated admin dashboard for managing products, orders, users, inventory and sales.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Passport.js",
      "OAuth 2.0",
      "Razorpay",
      "Nodemailer",
    ],
    features: [
      "Secure authentication with Google OAuth, OTP verification and bcrypt password hashing",
      "Product discovery with search, filtering, sorting and pagination",
      "Complete shopping flow with wishlist, cart, coupons, offers and checkout",
      "Razorpay online payments and Cash on Delivery",
      "Admin management for products, categories, orders, users, offers and coupons",
      "Inventory management with low-stock alerts and complete order lifecycle tracking",
      "Wallet, referral rewards and refund management",
      "Admin analytics with sales charts, custom date-range filtering and report exports",
      "PDF and Excel invoice generation",
      "MongoDB aggregation pipelines for sales, category analytics and reporting",
    ],
  
    video: cosmixVideo,
    videoPoster: cosmixOverallCollage,
  
    image: cosmixOverallCollage,
    imageAlt:
      "Cosmix e-commerce application collage showing the homepage and key application screens",
  
    githubUrl: "https://github.com/shifana200/CosmixProject",
    liveUrl: "https://cosmix-project.onrender.com/",
    status: "completed",
  },


{
  id: "budget",
  name: "Budget Maintenance — Personal Finance Dashboard",
  description:
    "A full-stack budget management application for tracking income and expenses, managing transactions, monitoring savings and analyzing financial activity through interactive dashboards and reports.",
  tech: [
    "React",
    "Vite",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Tailwind CSS",
    "Recharts",
    "Axios",
  ],
  features: [
    "Income and expense tracking with add, edit and delete transaction management",
    "Dashboard with total income, expenses, savings and recent transaction history",
    "Transaction search, filtering by type and date, and pagination",
    "Category-based transaction organization for income and expenses",
    "Interactive income vs expense and category-wise spending charts",
    "Monthly financial analysis with week-wise income and expense reports",
    "Financial statistics including savings and highest expense category",
    "Downloadable financial reports",
    "Responsive interface with client-side and server-side form validation",
    "REST API integration between the React frontend and Express backend",
  ],
  image: "/src/assets/budget-maintanance.png",
  imageAlt:
    "Budget Maintenance personal finance dashboard showing transactions and financial analytics",
  githubUrl:
    "https://github.com/shifana200/Budget-Maintanance",
  liveUrl: "https://budget-maintanance.vercel.app/",
  status: "completed",
},
{
  id: "student-management",
  name: "Student Management System",
  description:
    "A full-stack student management application with secure authentication, student profile management and an admin dashboard for managing student records through a React frontend and Node.js, Express and MongoDB backend.",
  tech: [
    "React",
    "Vite",
    "Redux Toolkit",
    "React Router",
    "Axios",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "bcrypt",
    "Multer",
  ],
  features: [
    "Student registration and login with JWT-based authentication",
    "Protected student profile viewing and updating",
    "Profile picture upload and management",
    "Admin authentication with protected student management routes",
    "Admin dashboard for creating, viewing, updating and deleting student records",
    "Redux Toolkit for frontend state management",
    "RESTful API integration between the React frontend and Express backend",
    "MongoDB database integration using Mongoose",
    "Password hashing with bcrypt",
  ],
  image: "/src/assets/budget-maintanance.png",
  imageAlt:
    "Student Management System showing student records and management interface",
  githubUrl:
    "https://github.com/shifana200/StudentDetails-Management",
  liveUrl: "https://student-details-xi.vercel.app/",
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