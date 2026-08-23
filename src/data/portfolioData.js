import { 
  Code, Layout, Server, Database, Brain, Shield, Terminal, Globe, Mail
} from 'lucide-react';

export const personalInfo = {
  name: "Neeraj Gahlout",
  title: "Full-Stack Web Developer",
  tagline: "Building modern web applications, backend systems, and AI-powered products with a focus on clean architecture, real-world problem solving, and scalable development.",
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "Garden City University, Bengaluru",
    graduation: "2027"
  },
  location: "Bengaluru, India",
  github: "https://github.com/neerajcoder1",
  linkedin: "https://www.linkedin.com/in/neeraj-gahlout-b39993308/",
  email: "neerajgahlout36@gmail.com",
};

export const about = "I am a Full-Stack Web Developer pursuing a BCA in Bengaluru. My focus is on building API-driven web applications, backend systems, and AI-powered solutions. I regularly participate in hackathons, contribute to team and open-source projects, and prioritize practical engineering over tutorial-following. I'm passionate about continuous learning and implementing scalable architectures to solve real-world problems.";

export const techStack = [
  {
    category: "Backend",
    icon: Server,
    technologies: ["Python", "FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "Asyncio", "JWT", "RBAC", "API Validation"]
  },
  {
    category: "Databases",
    icon: Database,
    technologies: ["MySQL", "SQLite", "MongoDB", "SQLAlchemy", "SQL/NoSQL", "Database Design", "CRUD"]
  },
  {
    category: "Tools",
    icon: Terminal,
    technologies: ["Git", "GitHub", "Postman", "Swagger/OpenAPI", "Uvicorn", "VS Code", "Linux"]
  },
  {
    category: "AI & Security",
    icon: Brain,
    technologies: ["YOLOv8", "MediaPipe", "Scikit-learn", "AI Agents", "VirusTotal API", "OWASP Concepts"]
  },
  {
    category: "Deployment",
    icon: Globe,
    technologies: ["Render", "Vercel", "Environment Variables", "Frontend-Backend Integration"]
  },
  {
    category: "Frontend",
    icon: Layout,
    technologies: ["React", "JavaScript", "HTML", "CSS", "Vite", "Tailwind CSS"]
  }
];

export const projects = [
  {
    id: "ai-job-command-centre",
    title: "AI Job Application Command Centre",
    category: "Agentic AI Platform",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    technologies: ["AI Agents", "Lemma Workflows", "Lemma Tables", "HTML", "CSS", "JavaScript"],
    description: "Agentic AI Platform for Job Search and Application Management.",
    problem: "Managing job applications, tracking statuses, and tailoring resumes to job descriptions is a repetitive and time-consuming process.",
    solution: "Designed an agentic platform for job-description parsing, resume matching, skill-gap analysis, and application tracking.",
    role: "Structured specialized agents for job parsing, resume analysis, cover-letter generation, application tracking, and interview preparation. Built an interactive dashboard.",
    architecture: "AI Agents ↔ Lemma Workflows ↔ Interactive Dashboard",
    engineering: {
      agents: "Structured specialized agents for parsing, cover-letter generation, and interview preparation.",
      dashboard: "Built an interactive dashboard with structured workflows and tables.",
      analysis: "Implemented skill-gap analysis and resume matching."
    },
    github: "https://github.com/neerajcoder1",
    featured: true
  },
  {
    id: "visionx-swarmassist",
    title: "AI Voice Agents / SwarmAssist",
    category: "Multi-Agent Productivity & Wellness",
    thumbnail: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "FastAPI", "Uvicorn", "Asyncio", "Ollama", "Llama 3"],
    description: "Multi-Agent Productivity & Wellness Swarm Engine.",
    problem: "Single LLM calls are insufficient for complex, multi-step problem solving and interactive voice tasks.",
    solution: "Designed a sequential multi-agent architecture for task planning, personalization, execution, recommendations, and voice interaction.",
    role: "Built the FastAPI backend and integrated a local Llama 3 inference engine through Ollama.",
    architecture: "Frontend (React) ↔ Backend Controller (FastAPI) ↔ Swarm Agents (Llama 3)",
    engineering: {
      architecture: "Sequential multi-agent architecture for task planning.",
      inference: "Integrated local Llama 3 inference engine through Ollama.",
      processing: "Implemented an asynchronous timeout guard with structured fallback JSON to keep the frontend responsive."
    },
    github: "https://github.com/neerajcoder1/Ai-Voice-Agents",
    link: "https://ai-voice-agents-six.vercel.app/",
    featured: true
  },
  {
    id: "secureshop-cybersecurity-lab",
    title: "SecureShop Cybersecurity Lab",
    category: "Cybersecurity / Pentesting",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "Node.js", "OWASP", "Security Testing", "Docker"],
    description: "A vulnerable e-commerce platform designed for practicing penetration testing and identifying security flaws.",
    problem: "Security professionals need safe, legal environments to practice identifying and exploiting vulnerabilities.",
    solution: "Developed an intentional intentionally vulnerable web application incorporating OWASP Top 10 vulnerabilities.",
    role: "Architected the backend and implemented various security misconfigurations for educational purposes.",
    architecture: "Client ↔ Vulnerable API ↔ Database",
    engineering: {
      vulnerabilities: "Implemented SQLi, XSS, CSRF, and broken authentication scenarios.",
      testing: "Created comprehensive lab guides for discovering and patching the vulnerabilities.",
      deployment: "Containerized with Docker for easy, isolated local deployment."
    },
    github: "https://github.com/neerajcoder1/SecureShop-Cybersecurity-Lab",
    link: "https://secure-shop-cybersecurity-lab.vercel.app/",
    featured: true
  },
  {
    id: "phishshield",
    title: "PhishShield Cybersecurity",
    category: "Security Awareness Platform",
    thumbnail: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "FastAPI", "React", "AI Detection", "Security"],
    description: "AI-Assisted Phishing Detection & Cybersecurity Awareness Platform.",
    problem: "Users are frequently targeted by sophisticated phishing campaigns via email and SMS.",
    solution: "A platform that analyzes URLs and content to detect phishing attempts and provides awareness training.",
    role: "Built the backend detection engine and user-facing awareness dashboard.",
    architecture: "Frontend ↔ API Engine ↔ Threat Intelligence APIs",
    engineering: {
      detection: "Implemented URL analysis using machine learning heuristics.",
      integrations: "Connected to external threat intelligence feeds.",
      ui: "Developed an interactive dashboard for users to simulate and learn about attacks."
    },
    github: "https://github.com/neerajcoder1/phishshield-cybersecurity-awareness",
    link: "https://phishshield-cybersecurity-awareness.vercel.app/",
    featured: true
  },
  {
    id: "redbull-experience",
    title: "RedBull Experience",
    category: "Frontend UI/UX",
    thumbnail: "https://images.unsplash.com/photo-1534142475651-404543b593eb?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
    description: "A high-performance, visually engaging frontend landing page inspired by RedBull.",
    problem: "Modern brands require immersive web experiences that capture user attention immediately.",
    solution: "Built a highly interactive promotional landing page with advanced scroll animations and 3D effects.",
    role: "Led the frontend development, focusing entirely on visual polish, performance, and accessibility.",
    architecture: "React Components ↔ Framer Motion ↔ Tailwind CSS",
    engineering: {
      animations: "Implemented complex scroll-linked animations and parallax effects.",
      performance: "Optimized image loading and component rendering for 60fps scrolling.",
      responsive: "Ensured pixel-perfect design across all device viewports."
    },
    github: "https://github.com/neerajcoder1/redbull-experience",
    link: "https://redbull-experience-blush.vercel.app/",
    featured: true
  },
  {
    id: "employee-leave-manager",
    title: "Employee Leave Manager",
    category: "Full-Stack Web Application",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Vite", "Node.js", "Express", "PostgreSQL"],
    description: "An employee leave-management application handling employee workflows and leave operations.",
    problem: "Organizations struggle to manage employee leave requests, balances, and approvals efficiently without dedicated tools.",
    solution: "A complete full-stack web application with role-based access to request, review, and manage leave operations seamlessly.",
    role: "Developed the entire full-stack application, implementing the React frontend, designing the REST API with Node/Express, and structuring the PostgreSQL database.",
    architecture: "React (Frontend) → REST API (Node/Express) → PostgreSQL (Database)",
    engineering: {
      apis: "RESTful endpoints for leave CRUD operations and user management.",
      database: "PostgreSQL with normalized schemas for users, roles, and leave requests.",
      authentication: "JWT-based authentication with role-based access control (RBAC)."
    },
    github: "https://github.com/neerajcoder1/employee-leave-manager",
    link: "https://employee-leave-manager-one.vercel.app/",
    featured: true
  }
];

export const hackathons = [
  {
    name: "Smart India Hackathon (SIH)",
    year: "Recent",
    theme: "AI/Recommendations",
    project: "VisionX – AI-Based Internship Recommendation Engine",
    role: "Backend/AI Developer",
    technology: ["Backend", "AI Integration", "Recommendation System"],
    description: "Worked on the backend and AI recommendation system for a team project.",
  },
  {
    name: "Smart Campus Hackathon 2026",
    year: "2026",
    theme: "Campus Productivity & Wellness",
    project: "VisionX SwarmAssist",
    role: "Full-Stack / AI Developer",
    technology: ["Full-Stack", "AI Swarm", "Multi-Agent System"],
    description: "Developed a multi-agent productivity & wellness system for campus use.",
  },
  {
    name: "ISRO Hackathon",
    year: "Recent",
    theme: "Satellite Imagery & Space Tech",
    project: "P5 – Enhancing Temporal Resolution of Satellite Imagery using Optical Flow",
    role: "Idea Proposal / Participant",
    technology: ["Optical Flow", "Satellite Imagery", "LISS-Clear"],
    description: "Proposed selected idea for enhancing temporal resolution, along with LISS-Clear cloud-removal concept.",
  },
  {
    name: "HackArena 2.0 – Bengaluru Zonals",
    year: "Recent",
    theme: "General Hackathon",
    project: "Team Project",
    role: "Hackathon Participant",
    technology: ["Collaboration", "Software Development"],
    description: "Participated and collaborated on team software projects.",
  },
  {
    name: "FAR AWAY Hackathon",
    year: "Recent",
    theme: "General Hackathon",
    project: "Team Project",
    role: "Hackathon Participant",
    technology: ["Collaboration", "Problem Solving"],
    description: "Participated and collaborated in hackathon problem-solving.",
  }
];

export const experience = [
  {
    role: "Technical Contributor",
    company: "VisionX Projects",
    date: "2023 - Present",
    description: "Collaborated on technical project development, encompassing full-stack web development, backend/API design, and AI integration. Participated in team-driven hackathon projects focusing on scalable architectures.",
  }
];

export const selectedCertifications = [
  {
    title: "Web Application Development with JavaScript and MongoDB",
    issuer: "University of London / Goldsmiths",
    category: "Web Development"
  },
  {
    title: "Introduction to HTML, CSS, & JavaScript",
    issuer: "IBM",
    category: "Web Development"
  },
  {
    title: "Introduction to Web Development",
    issuer: "Microsoft",
    category: "Web Development"
  },
  {
    title: "Python Scripting: Files, Inheritance, and Databases",
    issuer: "LearnQuest",
    category: "Backend & Database"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    category: "Backend & Database"
  },
  {
    title: "Relational Database Systems",
    issuer: "Universidad Nacional Autónoma de México",
    category: "Backend & Database"
  },
  {
    title: "Linux for Developers",
    issuer: "The Linux Foundation",
    category: "Cloud & Systems"
  },
  {
    title: "Data Structures",
    issuer: "University of California San Diego",
    category: "Computer Science"
  },
  {
    title: "Algorithms for Searching, Sorting, and Indexing",
    issuer: "University of Colorado Boulder",
    category: "Computer Science"
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    category: "Cloud & Systems"
  },
  {
    title: "Software Development Processes and Methodologies",
    issuer: "University of Minnesota",
    category: "Cloud & Systems"
  }
];

export const allCertifications = [
  ...selectedCertifications,
  { title: "Introduction to Artificial Intelligence", issuer: "IBM", category: "AI" },
  { title: "AI for Everyone", issuer: "DeepLearning.AI", category: "AI" },
  { title: "Machine Learning for All", issuer: "University of London", category: "AI" },
  { title: "Introduction to Cybersecurity Essentials", issuer: "IBM", category: "Cybersecurity" },
  { title: "Cybersecurity Policy for Aviation and Internet Infrastructures", issuer: "University of Colorado System", category: "Cybersecurity" },
  { title: "Introduction to Big Data with Spark and Hadoop", issuer: "IBM", category: "Data" },
  { title: "Linux System Administration with IBM Power Systems", issuer: "IBM", category: "Cloud & Systems" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Google", category: "Cloud & Systems" },
  { title: "Fundamentals of Network Communication", issuer: "University of Colorado System", category: "Cloud & Systems" },
  { title: "Introduction to Data Analytics", issuer: "IBM", category: "Data" },
  { title: "Excel Basics for Data Analysis", issuer: "IBM", category: "Data" },
  { title: "Visualization for Data Analysis with Power BI", issuer: "Microsoft", category: "Data" },
  { title: "Text Mining and Analytics", issuer: "University of Illinois", category: "Data" },
  { title: "Java Programming: Principles of Software Design", issuer: "Duke University", category: "Computer Science" },
  { title: "C++ Basic Structures: Vectors, Pointers, Strings, and Files", issuer: "Codio", category: "Computer Science" },
  { title: "Object-Oriented Data Structures in C++", issuer: "University of Illinois Urbana-Champaign", category: "Computer Science" },
  { title: "Algorithmic Toolbox", issuer: "UC San Diego", category: "Computer Science" },
  { title: "Operating Systems and You: Becoming a Power User", issuer: "Google", category: "Cloud & Systems" },
  { title: "Technical Support Fundamentals", issuer: "Google", category: "Cloud & Systems" },
  { title: "Digital Footprint", issuer: "University of Edinburgh", category: "Cybersecurity" },
  { title: "Understanding Research Methods", issuer: "University of London / SOAS", category: "Computer Science" }
];
