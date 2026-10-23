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
    id: "sarvam-swarm",
    title: "Sarvam Swarm",
    category: "Multi-Agent AI System",
    thumbnail: "/sarvam-swarm-preview.png",
    technologies: ["Python", "FastAPI", "Swarm Agents", "AI", "REST APIs"],
    description: "A multi-agent AI swarm system built for intelligent task orchestration and automation.",
    problem: "Complex tasks require coordination between multiple AI agents with different specializations.",
    solution: "Built a swarm-based multi-agent system where specialized agents collaborate to solve complex tasks efficiently.",
    role: "Designed the agent orchestration layer, built the FastAPI backend, and implemented inter-agent communication protocols.",
    architecture: "Swarm Controller <-> Specialized Agents <-> FastAPI Backend",
    engineering: {
      orchestration: "Implemented a swarm controller to route and coordinate tasks across agents.",
      backend: "Built with FastAPI for async, high-performance API handling.",
      agents: "Designed specialized agents for distinct task domains with fallback strategies."
    },
    isDemo: true,
    github: "https://github.com/neerajcoder1/sarvam-swarm",
    link: "https://github.com/neerajcoder1/sarvam-swarm",
    featured: true
  },
  {
    id: "netrayan",
    title: "Netrayan",
    category: "AI Vision & Analytics",
    thumbnail: "/netrayan-preview.png",
    technologies: ["Python", "YOLOv8", "MediaPipe", "OpenCV", "FastAPI"],
    description: "An AI-powered vision and analytics platform for real-time object detection and tracking.",
    problem: "Real-time visual data processing and intelligent object recognition remain challenging without specialized infrastructure.",
    solution: "Developed a computer vision platform using YOLOv8 and MediaPipe for real-time detection, tracking, and analytics.",
    role: "Built the vision pipeline, integrated YOLOv8 models, and developed the backend API for streaming analytics.",
    architecture: "Camera/Video Input <-> Vision Pipeline (YOLOv8 + MediaPipe) <-> Analytics API",
    engineering: {
      detection: "Integrated YOLOv8 for real-time object detection with high accuracy.",
      tracking: "Used MediaPipe for pose and landmark tracking.",
      api: "Exposed analytics and detection results via FastAPI endpoints."
    },
    isDemo: true,
    github: "https://github.com/neerajcoder1/netrayan",
    link: "https://github.com/neerajcoder1/netrayan",
    featured: true
  },
  {
    id: "ayusetu-ai",
    title: "AyuSetu AI",
    category: "AI Healthcare Platform",
    thumbnail: "/ayusetu-preview.png",
    technologies: ["Python", "FastAPI", "React", "AI/ML", "Healthcare APIs"],
    description: "An AI-powered healthcare bridge platform connecting patients with intelligent symptom analysis and doctor recommendations.",
    problem: "Patients in rural and semi-urban areas lack easy access to timely medical guidance and doctor recommendations.",
    solution: "Built an AI-assisted platform that analyzes symptoms, suggests possible conditions, and recommends appropriate medical specialists.",
    role: "Developed the AI symptom-analysis engine, REST API backend, and integrated the frontend dashboard.",
    architecture: "Frontend (React) <-> FastAPI Backend <-> AI Symptom Engine <-> Doctor DB",
    engineering: {
      ai: "Built symptom classification using ML models trained on medical datasets.",
      backend: "FastAPI with structured endpoints for patient intake, analysis, and recommendations.",
      frontend: "React dashboard for patient-facing interaction and doctor listings."
    },
    isDemo: true,
    github: "https://github.com/neerajcoder1/AyuSetu-AI",
    link: "https://github.com/neerajcoder1/AyuSetu-AI",
    featured: true
  },
  {
    id: "repopulse-lite",
    title: "RepoPulse Lite",
    category: "Developer Tools",
    thumbnail: "/repopulse-preview.png",
    technologies: ["React", "GitHub API", "Node.js", "REST APIs", "Data Visualization"],
    description: "A lightweight GitHub repository analytics dashboard for tracking repo health and activity metrics.",
    problem: "Developers lack a quick, clean way to visualize repository activity, contributor trends, and project health at a glance.",
    solution: "Built a lightweight analytics tool that fetches GitHub data and presents it in an intuitive, visual dashboard.",
    role: "Developed the GitHub API integration, data processing layer, and the React analytics dashboard.",
    architecture: "React Dashboard <-> Node.js API Layer <-> GitHub REST API",
    engineering: {
      integration: "Consumed GitHub REST API for repo stats, commits, issues, and contributor data.",
      visualization: "Built interactive charts and metrics cards for at-a-glance repo health.",
      performance: "Implemented caching to reduce API rate-limit hits."
    },
    isDemo: true,
    github: "https://github.com/neerajcoder1/repopulse-lite",
    link: "https://github.com/neerajcoder1/repopulse-lite",
    featured: true
  },
  {
    id: "secureshop-cybersecurity-lab",
    title: "SecureShop Cybersecurity Lab",
    category: "Cybersecurity / Pentesting",
    thumbnail: "/secureshop-preview.png",
    technologies: ["Python", "Node.js", "OWASP", "Security Testing", "Docker"],
    description: "A vulnerable e-commerce platform designed for practicing penetration testing and identifying security flaws.",
    problem: "Security professionals need safe, legal environments to practice identifying and exploiting vulnerabilities.",
    solution: "Developed an intentionally vulnerable web application incorporating OWASP Top 10 vulnerabilities for hands-on learning.",
    role: "Architected the backend and implemented various security misconfigurations for educational purposes.",
    architecture: "Client <-> Vulnerable API <-> Database",
    engineering: {
      vulnerabilities: "Implemented SQLi, XSS, CSRF, and broken authentication scenarios.",
      testing: "Created comprehensive lab guides for discovering and patching the vulnerabilities.",
      deployment: "Containerized with Docker for easy, isolated local deployment."
    },
    isDemo: true,
    github: "https://github.com/neerajcoder1/SecureShop-Cybersecurity-Lab",
    link: "https://secure-shop-cybersecurity-lab.vercel.app/",
    featured: true
  },
  {
    id: "phishshield",
    title: "PhishShield Cybersecurity",
    category: "Security Awareness Platform",
    thumbnail: "/phishshield-preview.png",
    technologies: ["Python", "FastAPI", "React", "AI Detection", "Security"],
    description: "AI-Assisted Phishing Detection & Cybersecurity Awareness Platform.",
    problem: "Users are frequently targeted by sophisticated phishing campaigns via email and SMS.",
    solution: "A platform that analyzes URLs and content to detect phishing attempts and provides awareness training.",
    role: "Built the backend detection engine and user-facing awareness dashboard.",
    architecture: "Frontend <-> API Engine <-> Threat Intelligence APIs",
    engineering: {
      detection: "Implemented URL analysis using machine learning heuristics.",
      integrations: "Connected to external threat intelligence feeds.",
      ui: "Developed an interactive dashboard for users to simulate and learn about attacks."
    },
    isDemo: true,
    github: "https://github.com/neerajcoder1/phishshield-cybersecurity-awareness",
    link: "https://phishshield-cybersecurity-awareness.vercel.app/",
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
