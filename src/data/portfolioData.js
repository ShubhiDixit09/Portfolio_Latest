export const personalInfo = {
  name: "Shubhi Dixit",
  pronouns: "She/Her",
  role: "Second-Year B.Tech CSE @ DTU",
  title: "Developer @ DTU Times • 5x Hackathon Finalist • McKinsey Forward'26",
  shortBio: "Computer Science undergraduate at DTU exploring AI/ML through research, intelligent systems, and software built around real-world problems.",
  status: "Open to Software Engineering & AI/ML Internships",
  location: "Delhi, India",
  avatarUrl: "/profile.jpg",
  email: "shubhidtu@gmail.com",
  phone: "+91 9311535683",
  github: "https://github.com/ShubhiDixit09",
  linkedin: "https://www.linkedin.com/in/shubhi-dixit-dtu/",
  leetcode: "https://leetcode.com/u/shubhi_dixit_09/",
  codeforces: "https://codeforces.com/profile/shubhi.dixit.dtu",
  resumeUrl: "/Shubhi-Dixit-Resume.pdf",
};

export const stats = [
  { label: "Hackathons", value: "5x Finalist" },
  { label: "Logitech Zonal", value: "Top 1.9%" },
  { label: "DSA Problems", value: "200+" },
  { label: "Projects Shipped", value: "6+" },
];

export const about = {
  summary: [
    "I’m a Computer Science student at Delhi Technological University, building systems at the intersection of AI, algorithms, and real-world decision-making.",
    "My work spans agentic AI, retrieval and reasoning systems, distributed coordination, and optimization — from evidence-grounded legal AI and temporal knowledge systems to disaster-response meshes and geospatial decision platforms.",
    "I currently build products at DTU Times, experiment with ML/LLM systems and research prototypes, and solve algorithmic problems on LeetCode and Codeforces. I was also selected for McKinsey Forward ’26."
  ],
  highlights: [
    {
      num: "01",
      title: "AI, Agents & Reasoning",
      desc: "RAG, tool-using agents, temporal knowledge systems, grounded generation, and on-device LLM experiments."
    },
    {
      num: "02",
      title: "Systems & Optimization",
      desc: "Distributed meshes, partition-tolerant coordination, spatial algorithms, and combinatorial optimization."
    },
    {
      num: "03",
      title: "Research & Engineering",
      desc: "Building and evaluating experimental systems across multimodal reasoning, decision support, and trustworthy AI."
    },
    {
      num: "04",
      title: "Building & Problem Solving",
      desc: "Developer @ DTU Times · competitive programming · 5× hackathon finalist · research-driven prototyping."
    },
  ]
};

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "C++", level: "Proficient", icon: "Cpu" },
      { name: "Python", level: "Advanced", icon: "Terminal" },
      { name: "JavaScript", level: "Advanced", icon: "Code2" },
      { name: "TypeScript", level: "Intermediate", icon: "FileCode" },
      { name: "SQL", level: "Intermediate", icon: "Database" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Palette" },
    ]
  },
  {
    category: "AI, ML & Agentic Systems",
    skills: [
      { name: "Agentic AI", level: "Advanced", icon: "Workflow" },
      { name: "RAG Pipelines", level: "Advanced", icon: "Sparkles" },
      { name: "PyTorch", level: "Advanced", icon: "Zap" },
      { name: "LangGraph", level: "Intermediate", icon: "Workflow" },
      { name: "ChromaDB", level: "Advanced", icon: "Database" },
      { name: "Ollama / Gemma", level: "Intermediate", icon: "Server" },
    ]
  },
  {
    category: "Full Stack & Systems",
    skills: [
      { name: "React & Next.js", level: "Advanced", icon: "Layout" },
      { name: "Node & Express", level: "Advanced", icon: "Server" },
      { name: "FastAPI", level: "Advanced", icon: "Server" },
      { name: "MongoDB & SQLite", level: "Advanced", icon: "HardDrive" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "Distributed Systems", level: "Intermediate", icon: "Globe" },
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "Docker", level: "Intermediate", icon: "Container" },
      { name: "REST APIs", level: "Advanced", icon: "Send" },
    ]
  }
];

export const projects = [
  {
    id: "muskmelon",
    title: "MuskMelon — Temporal RAG Digital Twin",
    category: "AI & Full Stack",
    description: "Adaptive knowledge twin tracking how documented beliefs evolve over time with traceable Knowledge Commits and Answer Receipts.",
    metric: "4th / 250+ teams • VibeWright @ NSUT",
    image: "/projects/muskmelon.png",
    tags: ["Next.js", "TypeScript", "Temporal RAG", "Weaviate", "OpenAI"],
    liveUrl: "https://github.com/ShubhiDixit09/muskmelon",
    githubUrl: "https://github.com/ShubhiDixit09/muskmelon",
    featured: true,
    architecture: ["User Query", "Temporal Embedding Index", "RAG with Knowledge Commits", "Answer Receipt + Diff Output"],
    caseStudy: {
      problem: "Standard RAG systems treat knowledge as static or flat in time. When queries require understanding how positions or facts evolve over months or years, typical vector databases return conflicting statements without temporal provenance.",
      solution: "Engineered a time-indexed Retrieval-Augmented Generation pipeline using timestamped Knowledge Commits and audit-grade Answer Receipts, allowing deterministic diffing across conflicting historical statements.",
      decisions: [
        { title: "Temporal Indexing over Naive Vector Store", reason: "Embedded timestamp metadata directly into distance metrics to prioritize chronologically coherent reasoning chains." },
        { title: "Deterministic Answer Receipts", reason: "Emitted cryptographic-style reference receipts so users can verify exact source documents and commit timestamps." },
        { title: "Next.js + Fast Vector Retrieval", reason: "Sub-100ms vector lookups with streaming UI responses for responsive interactive exploration." }
      ],
      impact: "Placed 4th out of 250+ competing teams at VibeWright NSUT Hackathon."
    }
  },
  {
    id: "jeevanmesh",
    title: "JeevanMesh — Disaster Drone Swarm",
    category: "Distributed Systems",
    description: "Leaderless, partition-tolerant drone swarm simulation with BubbleNet search and self-repairing store-carry-forward relay meshes.",
    metric: "39.7% faster search over grid scan",
    image: "/projects/jeevanmesh.png",
    tags: ["Next.js", "TypeScript", "Google Maps API", "Multi-Agent"],
    liveUrl: "https://github.com/ShubhiDixit09/nsut-JeevanMesh",
    githubUrl: "https://github.com/ShubhiDixit09/nsut-JeevanMesh",
    featured: true,
    architecture: ["Drone Agent Fleet", "BubbleNet Spatial Search", "Store-Carry-Forward Relay Mesh", "Live Geospatial Visualization"],
    caseStudy: {
      problem: "Post-disaster search-and-rescue operations face completely shattered telecom infrastructure. Centralized drone swarms fail when leader nodes crash or network partitions occur.",
      solution: "Built a fully decentralized, leaderless agent coordination protocol with BubbleNet dynamic coverage algorithms and a delay-tolerant store-carry-forward relay mesh.",
      decisions: [
        { title: "Leaderless Peer Gossip", reason: "Zero single point of failure; nodes discover neighbors dynamically using local beaconing without central coordination." },
        { title: "BubbleNet Spatial Search", reason: "Adaptive expanding circles optimized for probabilistic survivor cluster densities instead of exhaustive brute-force grid passes." },
        { title: "Store-Carry-Forward Routing", reason: "Drones physically ferry cached telemetry packets across disconnected communication voids to base stations." }
      ],
      impact: "Achieved 39.7% faster target discovery over traditional sequential grid scans under simulated packet-loss conditions."
    }
  },
  {
    id: "vcr-aims",
    title: "VCR — Multimodal Visual Reasoning",
    category: "AI & Deep Learning",
    description: "Multi-stage visual commonsense reasoning pipeline using grounded dual-view modeling and attention masking.",
    metric: "80% Q-A & 40% Q-AR Accuracy",
    image: "/projects/vcr.png",
    tags: ["Python", "PyTorch", "Multimodal Learning", "SSVL"],
    liveUrl: "https://github.com/ShubhiDixit09/updated_VCR_AIMS_R2",
    githubUrl: "https://github.com/ShubhiDixit09/updated_VCR_AIMS_R2",
    featured: true,
    architecture: ["Image + Question Input", "Dual-View Grounded Encoder", "Attention Masking Layer", "Answer & Rationale Output"],
    caseStudy: {
      problem: "Traditional Vision-Language models often succeed at shallow recognition but fail at high-order cognitive reasoning (e.g. predicting human intent or causal antecedents behind a scene).",
      solution: "Implemented a dual-view multimodal grounding pipeline with object-level bounding box attention and cross-modal rationale generators.",
      decisions: [
        { title: "Dual-View Grounding", reason: "Decouples global scene contextual features from localized object embeddings to prevent background hallucination." },
        { title: "Joint Q-A and Rationale Prediction", reason: "Requires the model to justify its chosen answer with grounded commonsense explanations rather than lucky classification." }
      ],
      impact: "Reached 80% Question-Answer and 40% Question-Answer-Rationale benchmark accuracy on difficult visual reasoning benchmarks."
    }
  },
  {
    id: "chronosync",
    title: "ChronoSync — Timetable Optimizer (SIH 2025)",
    category: "Full Stack & Algorithms",
    description: "Combinatorial optimization platform converting complex university academic requirements into conflict-free schedules.",
    metric: "Genetic Algorithm + Tabu Search",
    image: "/projects/chronosync.png",
    tags: ["Next.js", "FastAPI", "Genetic Algorithm", "Docker"],
    liveUrl: "https://github.com/ShubhiDixit09/ChronoSync-updated",
    githubUrl: "https://github.com/ShubhiDixit09/ChronoSync-updated",
    featured: true,
    architecture: ["Constraint Input (Rooms, Faculty, Slots)", "Genetic Algorithm Population", "Tabu Search Local Optimization", "Conflict-Free Schedule Output"],
    caseStudy: {
      problem: "University scheduling is an NP-hard combinatorial problem with hundreds of hard constraints (faculty clashes, room capacities) and soft preferences (evenly distributed workload).",
      solution: "Engineered a hybrid heuristic engine combining Genetic Algorithms for global population exploration with Tabu Search to escape local minima in strict constraint graphs.",
      decisions: [
        { title: "Hybrid Metaheuristic", reason: "Pure genetic crossover easily creates illegal states; local Tabu search resolves micro-conflicts rapidly." },
        { title: "FastAPI Backend + Asynchronous Solver", reason: "Isolated heavy CPU compute workloads into worker processes without blocking the interactive schedule preview UI." }
      ],
      impact: "Reduced timetable generation time from days of manual clerical scheduling to under 45 seconds of automated constraint satisfaction."
    }
  },
  {
    id: "nyayabot",
    title: "NyayaBot — Offline Legal Assistant Engine",
    category: "AI & Full Stack",
    description: "On-device legal-assistance engine on Gemma 4 running under 6GB VRAM with ShieldAI prompt-injection guards and SQLite audit trails.",
    metric: "100% on-device local inference",
    image: "/projects/nyayabot.png",
    tags: ["Python", "FastAPI", "React", "Gemma 4", "ChromaDB"],
    liveUrl: "https://github.com/ShubhiDixit09/NyayaBot.ShieldAI",
    githubUrl: "https://github.com/ShubhiDixit09/NyayaBot.ShieldAI",
    featured: false,
    caseStudy: {
      problem: "Legal document analysis often involves sensitive, privileged client data that cannot be sent to cloud LLM APIs due to regulatory and confidentiality requirements.",
      solution: "Engineered an entirely local, air-gapped legal RAG system optimized for quantised Gemma models running on consumer hardware under 6GB VRAM.",
      decisions: [
        { title: "Prompt-Injection Guardrails", reason: "Built ShieldAI filtering layer to prevent adversarial injection in untrusted case files." },
        { title: "Local Vector Retrieval", reason: "Local ChromaDB embedding search for instant offline reference lookup with zero cloud egress." }
      ],
      impact: "Zero cloud dependencies, guaranteeing absolute data confidentiality for offline legal intelligence."
    }
  },
  {
    id: "oon-nirnay",
    title: "Oon Nirnay — AI Decision Navigator",
    category: "AI & Full Stack",
    description: "Evidence-first AI decision-support system for rural wool artisans comparing market options with numerical cost-benefit analysis.",
    metric: "Logitech Hackathon • Top 1.9%",
    image: "/projects/oon-nirnay.png",
    tags: ["AWS PartyRock", "Generative AI", "LLMs", "Prompt Eng"],
    liveUrl: "https://partyrock.aws/u/shubhidixit/YF8fKzGqq/or-Oon-Nirnay",
    liveLabel: "Link",
    githubUrl: "https://github.com/ShubhiDixit09",
    featured: false
  }
];

export const experience = [
  {
    title: "Developer",
    organization: "DTU Times",
    period: "Sep 2026 - Present",
    type: "Current Role",
    desc: "Developing web platforms and official student portals using React.js and Node.js.",
    skills: ["React.js", "Node.js", "Web Development"]
  },
  {
    title: "Intern — Agentic AI & RAG",
    organization: "Coding Blocks School of Technology",
    period: "May 2026 - Jul 2026",
    type: "Internship",
    desc: "Engineered Agentic AI workflows, vector chunking strategies, and RAG evaluation pipelines.",
    skills: ["Agentic AI", "RAG", "Python"]
  },
  {
    title: "Member & Volunteer",
    organization: "National Service Scheme (NSS), DTU",
    period: "Jan 2026 - Present",
    type: "Community",
    desc: "Mentoring underprivileged students, leading educational outreach drives and campus initiatives.",
    skills: ["Mentorship", "Outreach", "Leadership"]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Delhi Technological University (DTU)",
    period: "2025 - 2029",
    score: "Second-Year (DTU CSE'29)",
    detail: "JEE Main 99.08%ile • Qualified JEE Advanced"
  },
  {
    degree: "Senior Secondary (XII) & High School (X)",
    institution: "Jaspal Kaur Public School (CBSE)",
    period: "2010 - 2024",
    score: "Class X: 95.8% | Class XII: 89.8%",
    detail: "2nd in State Mental Math (₹10.5k Prize) • MVPP Rank 12"
  }
];

export const achievements = [
  { title: "JEE Main: 99.08 Percentile", subtitle: "Qualified JEE Advanced", tag: "National" },
  { title: "Logitech Women Who Master", subtitle: "Top 1,727 of 91k+ candidates (Zonal)", tag: "Top 1.9%" },
  { title: "1st Place, Guessapalooza", subtitle: "IEEE DTU INVICTUS'26 (₹3,000 Prize)", tag: "Winner" },
  { title: "4th Place, VibeWright", subtitle: "Oblivion'26, NSUT (Among 250+ teams)", tag: "Finalist" },
  { title: "CodeBuild 1.0", subtitle: "Selected in Top 35 Teams", tag: "Top 35" },
  { title: "McKinsey Forward '26", subtitle: "Selected for McKinsey leadership cohort", tag: "Selected" },
  { title: "200+ DSA Problems", subtitle: "Active on LeetCode & Codeforces", tag: "DSA" }
];

export const certifications = [
  {
    name: "Women Who Master — Certificate of Excellence",
    issuer: "Logitech x Aspire For Her",
    date: "Aug 2026",
    image: "/certificates/logitech_excellence.png",
    highlight: "Top 1,727 / 91k+ participants (Guinness Record Attempt)"
  },
  {
    name: "VibeWright Hackathon — Finalist",
    issuer: "D'Code NSUT (Oblivion'26)",
    date: "2026",
    image: "/certificates/viberight.png",
    highlight: "4th Place among 250+ teams"
  },
  {
    name: "Adobe University Hackathon",
    issuer: "Adobe & Unstop",
    date: "Aug 2026",
    image: "/certificates/adobe.png",
    highlight: "Certificate of Participation & National Finalist"
  },
  {
    name: "CodeBuild 1.0 — Top 35 Teams",
    issuer: "CoBuild",
    date: "2026",
    image: "/certificates/cobuild.png",
    highlight: "Selected in Top 35 Teams across India"
  },
  {
    name: "ONEHACK 2026",
    issuer: "Hackers Cult & NSUT",
    date: "Sep 2026",
    image: "/certificates/invictus_dtu.png",
    highlight: "Certificate of Participation"
  },
  {
    name: "Logitech Zonal Participation",
    issuer: "Logitech & Aspire For Her",
    date: "Aug 2026",
    image: "/certificates/logitech_zonal.jpg",
    highlight: "Official Attempt Zonal Round"
  },
  {
    name: "Guessapalooza — 1st Place",
    issuer: "Technical Council DTU (Invictus'26)",
    date: "2026",
    image: "/certificates/invictus_winner.jpg",
    highlight: "1st Position — Certificate of Appreciation"
  },
  {
    name: "Master Full Stack Web Dev (MERN)",
    issuer: "Coding Blocks",
    date: "Jan – Jun 2026",
    image: "/certificates/cb_mern.jpg",
    highlight: "Certificate of Completion"
  },
  {
    name: "Master DSA with C++ & System Design",
    issuer: "Coding Blocks",
    date: "Jul – Dec 2025",
    image: "/certificates/cb_dsa.jpg",
    highlight: "Certificate of Completion"
  },
  {
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "Jul 2026",
    image: "/certificates/hackerrank_python.jpg",
    highlight: "Certificate of Accomplishment — Skill Test Passed",
    verifyUrl: "https://www.hackerrank.com/certificates"
  },
  {
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "Jul 2026",
    image: "/certificates/kaggle_intro_ml.png",
    highlight: "Certificate of Completion",
    verifyUrl: "https://www.kaggle.com/learn/certification"
  },
  {
    name: "Intermediate Machine Learning",
    issuer: "Kaggle",
    date: "Jul 2026",
    image: "/certificates/kaggle_intermediate_ml.png",
    highlight: "Certificate of Completion",
    verifyUrl: "https://www.kaggle.com/learn/certification"
  }
];
