import type * as React from "react";
import type { JSX } from "react";

// Type definitions shared across the portfolio
interface Stat {
  num: string;
  label: string;
}
interface Fact {
  k: string;
  v: string;
}
interface ExperienceItem {
  year: string;
  isNow?: boolean;
  role: string;
  company: string;
  type: string;
  desc: string;
  tags: string[];
  androidUrl?: string;
  iosUrl?: string;
}
interface Skill {
  name: string;
  lvl: number;
}
interface ProjectItem {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  year: string;
  githubUrl?: string;
}
export interface PortfolioData {
  name: string;
  role: string;
  roles: string[];
  handle: string;
  location: string;
  relocateStatus: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  about: string[];
  stats: Stat[];
  facts: Fact[];
  experience: ExperienceItem[];
  skills: Record<string, Skill[]>;
  projects: ProjectItem[];
}

declare global {
  interface Window {
    PORTFOLIO_DATA: PortfolioData;
    UIIcons: Record<string, () => JSX.Element>;
    SkillIcons: Record<string, JSX.Element>;
    Nav: React.FC<{ theme: string; setTheme: (t: string) => void }>;
    Hero: React.FC<{ data: PortfolioData }>;
    About: React.FC<{ data: PortfolioData }>;
    Experience: React.FC<{ data: PortfolioData }>;
    Skills: React.FC<{ data: PortfolioData }>;
    Projects: React.FC<{ data: PortfolioData }>;
    Contact: React.FC<{ data: PortfolioData }>;
  }
}

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Dhruva Patil",
  role: "Software Engineer",
  roles: ["Software Engineer", "AI Engineer", "Mobile App Developer"],
  handle: "dhruva",
  location: "Halifax, Canada",
  relocateStatus: "Any province in Canada",
  status: "Open to opportunities",
  email: "dhruvasp.ca@gmail.com",
  github: "github.com/DhRuva-1509",
  linkedin: "www.linkedin.com/in/dhruva-patil-692baa214/",

  about: [
    "I'm a software engineer who has evolved with time, from full-stack development to mobile engineering to AI systems, following hard problems wherever they lead. I care deeply about software: how it's designed, how it holds up under pressure, and how it feels to the people who use it.",
    "Most of my work sits at the intersection of product and pace: agile teams, startup timelines, and systems that need to work at scale. I'm a night owl who can't rest until a feature is shipped from my end and no matter how late, I'm at my desk on time the next morning.",
    "I actively use Claude Code and Claude in my daily development, and I'm currently going deep on distributed systems, event-driven architectures, and applied ML tooling.",
  ],
  stats: [
    { num: "2+", label: "Years building" },
    { num: "10+", label: "Projects shipped" },
    { num: "1", label: "Open-source repos" },
    { num: "∞", label: "Lines refactored" },
  ],
  facts: [
    { k: "location", v: "Halifax, NS — UTC-4" },
    { k: "current", v: "Software Engineer" },
    {
      k: "stack",
      v: "React · React Native · Swift · TypeScript · React Native · Postgres · MongoDB · SpringBoot · ExpressJS",
    },
    // { k: "available", v: "Q3 2026" }
  ],
  experience: [
    {
      year: "NOW",
      isNow: true,
      role: "Master in Applied Computer Science (MACS)",
      company: "Dalhousie University",
      type: "Education",
      desc: "Pursuing Master of Applied Computer Science at Dalhousie University, with coursework spanning, Database Management and Wareshousing Analytics, Advanced topics in Software Engineering, Serverless Data Processing, Deep Learning Applications, Advanced Cloud Architecting, and Advanced Topics in Web Development.",
      tags: [
        "MERN",
        "TypeScript",
        "Amazon Web Services",
        "Google Cloud Platform",
        "React",
        "SpringBoot",
      ],
    },
    {
      year: "Sept 2025 - Dec 2026",
      role: "Graduate Teaching Assistant",
      company: "Dalhousie University",
      type: "Part-time",
      desc: "Mentored 20+ graduate students as a Teaching Assistant, conducting lab sessions on database development, SQL optimization, and data analytics tools like PowerBI and IBM Cognos.",
      tags: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Distributed Databases",
        "Data Analytics",
        "PowerBI",
        "IBM Cognos",
      ],
    },
    {
      year: "Dec 2023 - Nov 2024",
      role: "Software Engineer",
      company: "Teknospire",
      type: "Full-time",
      desc: "Engineered mobile banking features at a fast-paced fintech startup, from biometric authentication serving 10K+ daily users to resolving critical production crashes within 5 hours, delivering across iOS and Android while maintaining 99.9% uptime.",
      tags: [
        "React Native",
        "JavaScript",
        "Android/iOS App Development",
        "UI/UX",
        "Mixpanel",
        "Braze",
      ],
      androidUrl: "https://play.google.com/store/apps/details?id=com.baobabgroup.customer.mobile.app",
      iosUrl: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/ng/app/my-baobab/id6504950461&ved=2ahUKEwi45vDfnJ6UAxVuD1kFHWBHM6AQFnoECBsQAQ&usg=AOvVaw0WB81kph2r6nGNam1cF_Ck",
    },
    {
      year: "June 2023 - Nov 2023",
      role: "Software Engineer Intern",
      company: "Teknospire",
      type: "Full-time",
      desc: "Built a mobile-responsive education charity platform and dashboard for Teknospire using React Native, adhering to clean coding standards and UI/UX principles, achieving a 30% improvement in load time and ensuring seamless responsiveness across 95% of mobile screen sizes.",
      tags: [
        "React Native",
        "JavaScript",
        "Android/iOS App Development",
        "UI/UX",
      ],
    },
    {
      year: "May 2022 - July 2022",
      role: "Research Intern",
      company: "Mitacs",
      type: "Internship",
      desc: "Built a VR application at Toronto Metropolitan University using Unity to simulate bullying scenarios in 12 weeks, enabling researchers to study empathy and perspective-taking through immersive volumetric storytelling.",
      tags: ["Unity", "VR", "Immersive Storytelling"],
    },
    {
      year: "Aug 2019 - May 2023",
      role: "B.E, Computer Science and Engineering",
      company:
        "KLE Technological University's, Dr. M. S. Sheshgiri of Engineering and Technology",
      type: "Education",
      desc: "Graduated with First Class Distinction, CGPA 8.95",
      tags: [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Database Systems and Management",
        "Artificial Intelligence",
      ],
    },
  ],
  skills: {
    Languages: [
      { name: "Python", lvl: 0.9 },
      { name: "Java", lvl: 0.85 },
      { name: "TypeScript", lvl: 0.95 },
      { name: "JavaScript", lvl: 0.9 },
      { name: "Node.js", lvl: 0.9 },
      { name: "C", lvl: 0.75 },
    ],
    Frontend: [
      { name: "React.js", lvl: 0.95 },
      { name: "React Native", lvl: 0.85 },
      { name: "HTML5", lvl: 0.95 },
      { name: "CSS3", lvl: 0.9 },
      { name: "Tailwind CSS", lvl: 0.9 },
      { name: "SwiftUI", lvl: 0.7 },
      { name: "Responsive Design", lvl: 0.9 },
    ],
    Backend: [
      { name: "RESTful APIs", lvl: 0.9 },
      { name: "PostgreSQL", lvl: 0.85 },
      { name: "MySQL", lvl: 0.8 },
      { name: "MongoDB (NoSQL)", lvl: 0.75 },
      { name: "Redis", lvl: 0.7 },
      { name: "Kafka", lvl: 0.6 },
      { name: "Scalable System Design", lvl: 0.8 },
    ],
    "Infra & Tools": [
      { name: "Docker", lvl: 0.85 },
      { name: "Kubernetes", lvl: 0.7 },
      { name: "Terraform", lvl: 0.65 },
      { name: "Bicep IaC", lvl: 0.65 },
      { name: "CI/CD Pipelines", lvl: 0.85 },
      { name: "GitLab CI/CD", lvl: 0.8 },
      { name: "Version Control (Git, Gitlab, Github)", lvl: 0.9 },
      { name: "AWS / GCP", lvl: 0.75 },
      { name: "Azure", lvl: 0.75 },
      { name: "GitHub Actions", lvl: 0.85 },
    ],
    "Engineering Practices": [
      { name: "Object-Oriented Design", lvl: 0.9 },
      { name: "Design Patterns", lvl: 0.85 },
      { name: "Code Reviews", lvl: 0.9 },
      { name: "Agile Methodologies", lvl: 0.85 },
      { name: "SDLC", lvl: 0.9 },
    ],
    "AI & ML": [
      { name: "LLM Agents", lvl: 0.85 },
      { name: "RAG Pipelines", lvl: 0.85 },
      { name: "Tool Calling", lvl: 0.85 },
      { name: "Multi-Step Reasoning", lvl: 0.8 },
      { name: "MCP (Model Context Protocol)", lvl: 0.75 },
      { name: "LangChain", lvl: 0.8 },
      { name: "LangGraph", lvl: 0.8 },
      { name: "OpenAI SDK", lvl: 0.85 },
      { name: "Azure OpenAI", lvl: 0.8 },
      { name: "Claude Code", lvl: 0.95 },
      { name: "Claude", lvl: 0.95 },
    ],
  },
  projects: [
    {
      num: "01",
      title: "DevMind",
      desc: "DevMind is an AI-powered VS Code extension that acts as an intelligent coding companion, detecting deprecated APIs, explaining merge conflicts, generating PR summaries, and surfacing tribal knowledge from past reviews, all without leaving your editor. Built on Azure OpenAI, Azure AI Search, and Cosmos DB, it uses a multi-agent architecture with a GPT-4o routing classifier and reflection loops to stay accurate under real-world conditions. The result is a tool that saves developers hours of context-switching and keeps institutional knowledge from dying in old PR threads.",
      tags: ["VsCode Plugin", "Typescript", "Azure", "MCPs", "AI Agents"],
      year: "2026",
      githubUrl: "https://github.com/DhRuva-1509/DevMind",
    },
    {
      num: "02",
      title: "CodeLens",
      desc: "CodeLens is a full-stack Chrome extension and web application that brings AI-powered code comprehension directly into the browser, letting users summarize code snippets, define technical terms, and generate shareable documentation without leaving the page. Built with React, Spring Boot, MongoDB, and a local LLaMA model, it handles everything from on-page text selection to full file uploads, with 97-100% test coverage across all core services and a fully containerized Docker setup for seamless deployment.",
      tags: ["Chrome Extension", "Website", "React.js", "SpringBoot", "MongoDB", "LLaMA", "Docker"],
      year: "2025",
      githubUrl: "https://github.com/DhRuva-1509/CodeLens",
    },
    {
      num: "03",
      title: "CareBridge",
      desc: "CareBridge is a full-stack telehealth platform connecting doctors and patients through a role-based dual portal system built with React, TypeScript, Node.js, and MongoDB. It ships real-time video consultations via VideoSDK, secure messaging with Socket.IO, and a complete EHR workflow covering appointments, prescriptions, and file uploads to AWS S3, with OWASP ZAP security analysis and a Lighthouse performance score of 4/4 validating it for production readiness.",
      tags: ["Website", "React.js", "TypeScript", "Express.js", "MongoDB", "VideoSDK", "Socket.IO", "AWS S3", "OWASP ZAP"],
      year: "2025",
      githubUrl: "https://github.com/DhRuva-1509/CareBridge",
    },
    {
      num: "04",
      title: "FlightAgent.ai",
      desc: "FlightAgent.ai is a fully local, stateful flight booking assistant built on Meta's Llama 3.2 model, combining natural language understanding with a custom tool-calling orchestrator and an embedded SQLite database. The agent maintains full conversation history, automatically chains tool calls until all required information is gathered, and handles everything from fuzzy date parsing to multi-criteria flight filtering and booking, all running privately on your machine with a Gradio interface for non-technical users.",
      tags: ["python", "gradio", "sqlite3", "LLaMA 3.2", "Tool Calling", "Stateful Agents"],
      year: "2026",
      githubUrl: "https://github.com/DhRuva-1509/FlightAgent.ai",
    },
    {
      num: "05",
      title: "Cashcraft",
      desc: "CashCraft is a full-stack personal finance iOS application built with SwiftUI and MVVM, backed by a Python Flask API deployed on AWS using Terraform. It covers the full cloud-native stack: Amazon Cognito for authentication, ECS for containerized deployment, RDS for persistent storage, and Secrets Manager for runtime credential injection, all provisioned as infrastructure-as-code and aligned with the AWS Well-Architected Framework across all six pillars.",
      tags: ["Swift", "SwiftUI", "MVVM", "AWS Amplify", "Amazon Cognito", "Python", "Flask", "PostgreSQL", "JWT", "Docker", "ECS", "RDS", "Secrets Manager", "Terraform"],
      year: "2025",
      githubUrl: "https://github.com/DhRuva-1509/Cashcraft",
    },
  ],
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
