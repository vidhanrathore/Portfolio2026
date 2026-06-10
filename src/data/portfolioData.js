export const personalInfo = {
  name: "Vidhan Rathore",
  title: "AI Engineer",
  roles: ["AI Engineer", "GenAI Engineer", "Python Developer", "LLM Specialist"],
  location: "Hyderabad, India",
  email: "rathorevidhan2001@gmail.com",
  phone: "+91-6232371031",
  linkedin: "https://www.linkedin.com/in/vidhan-rathore/",
  github: "https://github.com/vidhanrathore/",
  summary:
    "AI Engineer with 3+ years of experience building production-grade Generative AI systems, RAG pipelines, and LLM-powered applications. Expert in Prompt Engineering, LangChain, LangGraph, AI Agents, Vector Databases, and FastAPI backends. Delivered end-to-end GenAI features — semantic search, agentic workflows, multimodal AI — for large-scale enterprise clients. Hands-on with OpenAI, Groq, Hugging Face, Llama 3, and Gemini APIs.",
};

export const experience = [
  {
    company: "ValueLabs",
    role: "Software Engineer — AI/GenAI Engineering",
    period: "Jan 2023 – Present",
    location: "Hyderabad, India",
    clients: [
      {
        name: "WebMD",
        type: "GenAI Engineering",
        period: "2023 – 2025",
        highlights: [
          {
            title: "RAG Pipeline",
            detail:
              "Designed and deployed a production RAG system using LangChain and ChromaDB, enabling Semantic Search over large-scale health content with sub-2s retrieval latency.",
          },
          {
            title: "LLM-Powered Features",
            detail:
              "Built AI solutions with OpenAI API and Groq API using advanced Prompt Engineering (chain-of-thought, few-shot, RAG-augmented) for bio generation, review summarization, and false review detection.",
          },
          {
            title: "Embeddings & Vector Search",
            detail:
              "Engineered Embedding pipelines using Hugging Face models for high-quality vector representations enabling semantic similarity and document retrieval.",
          },
          {
            title: "AI Agents & Agentic Workflows",
            detail:
              "Built LangGraph-based multi-step AI Agent workflows (ReAct pattern, Tool Calling) for automated content classification and a VS Code AI code-review plugin, boosting developer productivity by 30%.",
          },
          {
            title: "FastAPI Microservices",
            detail:
              "Developed robust FastAPI backends for GenAI feature endpoints, ensuring scalability under high load. Monitored agent performance via LangSmith.",
          },
          {
            title: "POC Leadership",
            detail:
              "Led multiple simultaneous GenAI POCs; awarded Star of the Month for delivering high-impact AI solutions to WebMD.",
          },
        ],
      },
      {
        name: "Achievers",
        type: "Backend Engineering",
        period: "2025 – Present",
        highlights: [
          {
            title: "API Migration & Modernization",
            detail:
              "Migrated core system APIs from V2 to V5 in PHP/Laravel, enhancing performance, security, and maintainability with zero downtime.",
          },
          {
            title: "Mobile Push Notifications",
            detail:
              "Implemented real-time mobile push notification functionality for order status updates, improving user engagement across enterprise clients.",
          },
          {
            title: "Feature Development",
            detail:
              "Developed and optimized the Award & Approval Center and introduced a Leaderboard proof-of-concept — a net-new capability for the platform serving 500K+ users.",
          },
          {
            title: "Performance Optimization",
            detail:
              "Optimized SQL query performance and Redis caching strategies, reducing average API response time by 40%.",
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "LinkedIn Post Generator",
    subtitle: "for Content Creators",
    description:
      "An LLM-powered content generation tool using LangChain and OpenAI API with advanced Prompt Engineering — few-shot prompting, chain-of-thought reasoning, tone/style control, and Structured Outputs — generating professional LinkedIn posts across 5+ content categories.",
    highlights: [
      "Integrated Semantic Search via ChromaDB to match creator's previous post style",
      "Reduced content creation time from ~30 minutes to under 3 minutes",
      "Personalized tone-consistent generation across 5+ content categories",
    ],
    tech: ["LangChain", "OpenAI API", "ChromaDB", "Groq API", "Prompt Engineering", "Python"],
    github: "https://github.com/vidhanrathore/LinkedIn-Post-Generator",
    demo: null,
    featured: true,
    icon: "✍️",
    gradient: "from-purple-600/20 to-violet-600/20",
    border: "border-purple-500/20",
  },
  {
    id: 2,
    title: "Smart Resume Feedback Assistant",
    subtitle: "",
    description:
      "An LLM-powered resume feedback tool using LangChain and OpenAI API that analyzes resumes against job descriptions, providing actionable, section-wise improvement suggestions via advanced Prompt Engineering.",
    highlights: [
      "FastAPI backend with Streamlit frontend for real-time structured feedback",
      "Analyzes skills, experience alignment, and keyword gaps",
      "Reduces manual resume review effort significantly",
    ],
    tech: ["LangChain", "OpenAI API", "FastAPI", "Streamlit", "Prompt Engineering", "Python"],
    github: "https://github.com/vidhanrathore/Smart-Resume-Feedback-Assistant",
    demo: null,
    featured: true,
    icon: "📄",
    gradient: "from-cyan-600/20 to-blue-600/20",
    border: "border-cyan-500/20",
  },
  {
    id: 3,
    title: "Multimodal AI Image Search Engine",
    subtitle: "",
    description:
      "A Multimodal AI semantic search system using OpenAI CLIP to generate joint image-text Embeddings; indexed ~20 GB dataset in ChromaDB and FAISS with top-5 retrieval under 1 second.",
    highlights: [
      "Cross-modal retrieval over ~20 GB personal dataset",
      "Top-5 matches in under 1 second using FAISS and ChromaDB",
      "Smart metadata filters (location, time) for intuitive search UX",
    ],
    tech: ["CLIP", "Hugging Face", "ChromaDB", "FAISS", "FastAPI", "Streamlit"],
    github: "https://github.com/vidhanrathore/",
    demo: null,
    featured: false,
    icon: "🔍",
    gradient: "from-emerald-600/20 to-teal-600/20",
    border: "border-emerald-500/20",
  },
  {
    id: 4,
    title: "Local News Summarizer",
    subtitle: "",
    description:
      "A LangChain-powered tool that fetches real-time local news, applies LLM-driven summarization, and tags sentiment with Groq API. Achieved over 90% accuracy in sentiment tagging.",
    highlights: [
      "90%+ accuracy in sentiment tagging",
      "Reduced reading time with concise structured news digests",
      "Real-time news fetching with LLM summarization",
    ],
    tech: ["Python", "LangChain", "Groq API", "News APIs"],
    github: "https://github.com/vidhanrathore/",
    demo: null,
    featured: false,
    icon: "📰",
    gradient: "from-orange-600/20 to-amber-600/20",
    border: "border-orange-500/20",
  },
];

export const skills = [
  {
    category: "AI & GenAI",
    icon: "🤖",
    color: "purple",
    items: [
      "Generative AI",
      "LLMs (GPT-4, Llama 3, Mistral, Gemini)",
      "RAG Architecture",
      "Prompt Engineering",
      "AI Agents (ReAct, Tool Calling)",
      "Agentic Workflows",
      "Embeddings",
      "Vector Databases",
      "Semantic Search",
      "Multimodal AI",
      "Structured Outputs",
    ],
  },
  {
    category: "Frameworks & Tools",
    icon: "🛠️",
    color: "cyan",
    items: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "FastAPI",
      "Flask",
      "ChromaDB",
      "FAISS",
      "Hugging Face",
      "OpenAI API",
      "Groq API",
      "Gemini API",
      "Streamlit",
      "LangSmith",
    ],
  },
  {
    category: "Languages",
    icon: "💻",
    color: "violet",
    items: ["Python", "JavaScript", "PHP", "SQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "sky",
    items: ["AWS (S3, EC2)", "GCP", "Docker", "Git", "CI/CD"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "emerald",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ChromaDB", "FAISS"],
  },
];

export const certifications = [
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    year: "2024",
    status: "completed",
    icon: "🎓",
    color: "purple",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud (Coursera)",
    year: "2024",
    status: "completed",
    icon: "🌐",
    color: "cyan",
  },
  {
    title: "Python: AI, Machine Learning & Data Science",
    issuer: "CodeBasics",
    year: "2023",
    status: "completed",
    icon: "🐍",
    color: "emerald",
  },
  {
    title: "Full Stack With Python",
    issuer: "Fynd Academy",
    year: "2023",
    status: "completed",
    icon: "🔧",
    color: "violet",
  },
  {
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud",
    year: "2024",
    status: "ongoing",
    icon: "☁️",
    color: "sky",
  },
];

export const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Samrat Ashok Technological Institute",
    period: "2019 – 2023",
    grade: "CGPA: 8.78 / 10",
    icon: "🎓",
  },
  {
    degree: "Class XII",
    institution: "The Oxford H.S. School, Sehore",
    period: "2019",
    grade: "90%",
    icon: "📚",
  },
  {
    degree: "Class X",
    institution: "The Oxford H.S. School, Sehore",
    period: "2017",
    grade: "84.5%",
    icon: "📚",
  },
];

export const extras = [
  "Mentored around 50+ students during college",
  "Conducted training and seminars for school students during COVID-19",
  "Passionate about strategy games — chess and carrom",
  "Avid reader",
  "Solved 350+ problems on LeetCode & GeeksforGeeks",
];

export const achievements = [
  {
    id: 1,
    title: "Star of the Month",
    org: "ValueLabs",
    year: "2024",
    description:
      "Awarded Star of the Month for leading multiple simultaneous GenAI POCs and delivering high-impact AI solutions to WebMD — the company's flagship enterprise client.",
    icon: "⭐",
    color: "yellow",
    gradient: "from-yellow-500/20 to-amber-500/20",
    border: "border-yellow-500/25",
    badge: "Award",
  },
  {
    id: 2,
    title: "500K+ Users Impacted",
    org: "Achievers Platform",
    year: "2025",
    description:
      "Developed and optimized the Award & Approval Center and introduced a Leaderboard proof-of-concept — a net-new capability now serving over 500K enterprise users globally.",
    icon: "🚀",
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/25",
    badge: "Impact",
  },
  {
    id: 3,
    title: "30% Productivity Boost",
    org: "WebMD — VS Code Plugin",
    year: "2024",
    description:
      "Built a LangGraph-based multi-step AI Agent VS Code plugin for automated code review, measurably boosting developer productivity by 30% across engineering teams.",
    icon: "⚡",
    color: "purple",
    gradient: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/25",
    badge: "Performance",
  },
  {
    id: 4,
    title: "350+ Problems Solved",
    org: "LeetCode & GeeksforGeeks",
    year: "2021–2023",
    description:
      "Solved 350+ algorithmic and data structure problems across LeetCode and GeeksforGeeks, building a strong foundation in competitive problem-solving.",
    icon: "💡",
    color: "emerald",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/25",
    badge: "DSA",
  },
  {
    id: 5,
    title: "50+ Students Mentored",
    org: "College & Community",
    year: "2021–2023",
    description:
      "Actively mentored 50+ junior students in programming fundamentals, career guidance, and AI topics. Also conducted training and seminars for school students during COVID-19.",
    icon: "🎓",
    color: "sky",
    gradient: "from-sky-500/20 to-indigo-500/20",
    border: "border-sky-500/25",
    badge: "Mentoring",
  },
  {
    id: 6,
    title: "CGPA 8.78 / 10",
    org: "Samrat Ashok Technological Institute",
    year: "2019–2023",
    description:
      "Graduated with distinction in B.Tech Electronics & Communication Engineering with a CGPA of 8.78/10, ranking among the top performers in the department.",
    icon: "📚",
    color: "violet",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/25",
    badge: "Academic",
  },
];

// Gallery: replace src values with your actual image paths inside portfolio/public/gallery/
// e.g. place photos as: portfolio/public/gallery/photo1.jpg  →  src: "/gallery/photo1.jpg"
export const galleryItems = [
  {
    id: 1,
    src: null, // "/gallery/photo1.jpg"
    alt: "Team photo at ValueLabs",
    caption: "Team at ValueLabs 🚀",
    category: "Work",
  },
  {
    id: 2,
    src: null,
    alt: "Hackathon / project demo",
    caption: "Project Demo Day",
    category: "Work",
  },
  {
    id: 3,
    src: null,
    alt: "College days memory",
    caption: "College Days 🎓",
    category: "College",
  },
  {
    id: 4,
    src: null,
    alt: "Friends & memories",
    caption: "Good Times 🎉",
    category: "Personal",
  },
  {
    id: 5,
    src: null,
    alt: "Travel memory",
    caption: "Exploring 🌄",
    category: "Travel",
  },
  {
    id: 6,
    src: null,
    alt: "Another memory",
    caption: "Moments ✨",
    category: "Personal",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
