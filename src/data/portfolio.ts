export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  aboutArr: string[];
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    mobile: string[];
    ai: string[];
    web: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "William Wei Ming",
  role: "Senior Full-Stack Engineer | AI Backend | Open Source Miner",
  about: "Hi 👋 I’m William Wei Ming",
  aboutArr: [
    "🏆 Backend Developer & AI Engineer · 8+ Years",
    "⚙️ Microservices, REST APIs & Distributed Systems",
    "☁️ Cloud-Native Apps with Python, Java & Node.js",
    "🧠 LLM Integration, RAG & Vector Databases",
    "🤖 Generative AI & Intelligent Automation",
    "🚀 Secure, Scalable & Maintainable Solutions",
    "🤝 Lead Projects from Concept to Production",
    "🌐 Open Source Miner · Remote Contractor",
    "🏠 Based in Selangor, Malaysia 🇲🇾",
  ],
  profileImage: "/images/profile.jpg",
  blogUrl: "https://medium.com/@bittensorrider",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/bittensorrider",
      icon: "Github",
    },
    {
      platform: "LindedIn",
      url: "https://www.linkedin.com/in/william-ming-476240419/",
      icon: "Linkedin",
    },
    {
      platform: "X",
      url: "https://x.com/bittensorrider",
      icon: "Twitter",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/bittensorrider",
      icon: "Instagram",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/15097803683",
      icon: "Whatsapp",
    },
    {
      platform: "Email",
      url: "mailto:weimingwilliam6@gmail.com",
      icon: "Mail",
    },
  ],
  skills: {
    mobile: [
      "Android",
      "Java",
      "Kotlin",
      "iOS",
      "Swift",
      "React Native",
      "Ionic Framework",
      "Flutter",
      "Dart",
      "Electron",
      "C++",
      "C#",
    ],
    ai: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "YOLO",
      "Hugging Face",
      "LLM",
      "RAG",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Vector Databases",
      "pgvector",
      "PostgreSQL",
      "Prompt Engineering",
      "Prompt Injection",
      "Loop Engineering",
      "Anthropic",
      "Claude",
      "OpenAI",
      "Gemini",
      "Mistral",
      "Ollama",
      "Rasa",
      "FastAPI",
      "gRPC",
      "Bittensor",
    ],
    web: [
      "React",
      "Next.js",
      "Vue",
      "Nuxt.js",
      "Tailwind CSS",
      "Laravel",
      "CodeIgniter",
      "WordPress",
      "Magento 2",
      "Django",
      "Flask",
      "FastAPI",
      "SpringBoot",
      "REST APIs",
      "AWS",
      "Firebase",
      "Supabase",
      "n8n",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "Cloudflare",
      "Nginx",
      "Web3",
      "DeFi",
      "Cryptocurrency",
    ],
    tools: [
      "Cursor",
      "Claude",
      "VS Code",
      "Visual Studio",
      "Android Studio",
      "Xcode",
      "Docker Desktop",
      "Postman",
      "Google Chrome",
      "Figma",
      "Adobe Photoshop",
      "Git",
      "Vercel",
      "Trello",
      "Notion",
      "Jira",
      "Slack",
      "Discord",
      "WhatsApp",
      "MS Teams",
    ],
  },
  experience: [
    {
      company: "Bittensor Network - SN74 Gittensor",
      role: "Open Source Miner & Contributor",
      period: "April, 2026 - Present",
      description: [
        "Mining on Bittensor's SN74 Gittensor subnet by contributing merged PRs to whitelisted open source repositories, earning TAO alpha token emissions based on code quality and credibility scores.",
        "Contributed bug fixes and feature improvements to hot repositories, including resolving credibility display mismatches, dependency conflicts, and memoization bugs in Rails-based financial dashboards.",
        "Managed Bittensor wallet infrastructure using btcli, including coldkey/hotkey configuration, TAO deposits, and subnet registration on the Bittensor mainnet.",
      ],
    },
    {
      company: "ABC Digital Solutions Sdn Bhd - Malaysia",
      role: "Senior AI Backend Engineer",
      period: "2025 - 2026",
      description: [
        "Designed and developed AI-powered backend services using Python, FastAPI, and LangChain.",
        "Implemented Retrieval-Augmented Generation (RAG) solutions utilizing vector databases and large language models.",
        "Built scalable microservices architecture deployed on AWS using Docker and Kubernetes.",
      ],
    },
    {
      company: "ABC Digital Solutions Sdn Bhd - Malaysia",
      role: "Senior AI Backend Engineer",
      period: "January, 2024 - March, 2025",
      description: [
        "Developed secure RESTful APIs supporting over 500,000 monthly transactions.",
        "Optimized backend performance, reducing API response times by 40%.",
        "Integrated OpenAI and enterprise AI models into customer-facing applications.",
        "Led a team of 6 engineers delivering AI automation projects across finance and e-commerce sectors.",
      ],
    },
    {
      company: "TechVision Systems Sdn Bhd - Malaysia",
      role: "Backend Software Engineer (Remote)",
      period: "January, 2021 - December, 2023",
      description: [
        "Developed enterprise backend systems using Java Spring Boot and PostgreSQL.",
        "Designed microservices and event-driven architectures supporting high-volume transactions.",
        "Built API integrations with payment gateways, ERP systems, and third-party platforms.",
        "Implemented CI/CD pipelines using Jenkins, Docker, and GitLab.",
        "Improved application scalability and system reliability through cloud migration initiatives.",
        "Reduced infrastructure costs by 25% through system optimization and containerization.",
        "Collaborated with product teams to deliver multiple customer-facing platforms.",
      ],
    },
    {
      company: "Innovate Technologies, Inc. - Malaysia",
      role: "Software Engineer (Remote)",
      period: "June, 2018 - December, 2020",
      description: [
        "Developed web applications and backend services using Python, Node.js, and MySQL.",
        "Created REST APIs for mobile and web applications.",
        "Participated in software design, coding, testing, and deployment activities.",
        "Built reporting and analytics modules for business intelligence platforms.",
        "Automated manual workflows, improving operational efficiency by 30%.",
        "Maintained application security, database performance, and system availability.",
        "Supported Agile development practices and continuous delivery initiatives.",
      ],
    },
    {
      company: "CrowdWorks.jp - Japan",
      role: "Freelance Web Developer",
      period: "September, 2017 - May, 2018",
      description: [
        "Developed and delivered custom web applications for Japanese clients through CrowdWorks.jp, focusing on responsive UI and performance optimization.",
        "Collaborated remotely with Japanese clients to translate business requirements into scalable technical solutions.",
        "Successfully completed multiple freelance projects (Fixed and Hourly) while maintaining high client satisfaction and meeting strict deadlines.",
      ],
    },
    {
      company: "Upwork.com - US",
      role: "Junior Freelance Web Developer",
      period: "November, 2015 - July, 2017",
      description: [
        "Worked as a junior freelancer on Upwork.com, contributing to website development, bug fixing, and UI enhancements across multiple client projects.",
        "Assisted in translating client ideas into functional web solutions using modern web technologies such as MEAN stack.",
        "Gained hands-on experience in remote collaboration, time management, and agile development practices.",
      ],
    },
  ],
  projects: [
    {
      title: "Sure - Personal Finance for Everyone | v0.7.3",
      description:
        "Sure is an open-source personal finance app built with Ruby on Rails. As a Gittensor SN74 miner, I contributed three merged PRs to the Sure v0.7.3 release — Insights, property/rental valuations, and (experimental) macOS app: categories index N+1 query fixes via batched lookups, accounts controller index performance optimization, and transactions controller updates.",
      techStack: [
        "Ruby on Rails",
        "ActiveRecord",
        "PostgreSQL",
        "REST APIs",
        "Minitest",
        "Hotwire",
        "Bittensor",
        "Gittensor",
      ],
      link: "https://sure.am/",
      github: "https://github.com/we-promise/sure/releases/tag/v0.7.3",
      thumbnail: "/images/projects/gittensor-sure-v073.png",
    },
    {
      title: "Sure - Personal Finance for Everyone | v0.7.2",
      description:
        "Sure is an open-source personal finance app built with Ruby on Rails. As a Gittensor SN74 miner, I contributed three merged PRs to the Sure v0.7.2 release — Goals, mobile polish and native Anthropic support: dashboard endpoint performance optimization, Income Statement query performance fixes, and HTTP timeout configuration for the GitHub Octokit provider client.",
      techStack: [
        "Ruby on Rails",
        "Bittensor",
        "Gittensor",
        "Minitest",
        "PostgreSQL",
        "Tailwind CSS",
        "Hotwire",
        "Anthropic",
      ],
      link: "https://sure.am/",
      github: "https://github.com/we-promise/sure/discussions/2540",
      thumbnail: "/images/projects/gittensor-sure-v072.png",
    },
    {
      title: "Sure - Personal Finance for Everyone | v0.7.1",
      description:
        "Sure is an open-source personal finance app built with Ruby on Rails. As a Gittensor SN74 miner, I contributed a memoization optimization to net_category_totals() using explicit cache-key presence checks, which was officially included in the Sure v0.7.1 release — Bank Sync cleanup, Statement Vault and DS overhaul.",
      techStack: [
        "Ruby on Rails",
        "Bittensor",
        "Gittensor",
        "Minitest",
        "PostgreSQL",
        "Tailwind CSS",
        "Hotwire",
      ],
      link: "https://sure.am/",
      github: "https://github.com/we-promise/sure/discussions/2067",
      thumbnail: "/images/projects/gittensor-sure.png",
    },
    {
      title: "UXBIT - Trade Smarter, Faster, Safer",
      description:
        "UXBIT is The Global Standard for Borderless Crypto Trading. With UXBIT, you can manage Bitcoin (BTC), Ethereum (ETH), and Tether (USDT) from one platform, making it easier to track, trade, and grow your portfolio.",
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Rest APIs",
        "TypeScript",
        "OneSignal",
        "MySQL",
        "pm2",
        "Nginx",
      ],
      link: "https://uxbit.wtf",
      github: "https://github.com/dvtech888/uxbit_lp_next",
      thumbnail: "/images/projects/uxbit.jpeg",
    },
    {
      title: "UltimoPay - Always Forward",
      description:
        "UltimoPay.io is a fintech payment solution focused on borderless digital transactions, empowering users to send, receive, and manage payments efficiently through one integrated platform.",
      techStack: [
        "PHP",
        "Laravel",
        "Vue",
        "Bootstrap",
        "Rest APIs",
        "Fireblocks SDK",
        "MySQL",
        "Nginx",
        "Cryptocurrency",
      ],
      link: "https://ultimopay.io/",
      github: "https://github.com/dvtech888/ultimopay_v4",
      thumbnail: "/images/projects/ultimo.png",
    },
    {
      title: "DrapeFit Inc. - Personal Styling Service",
      description:
        "DRAPE FIT is a personal styling service that sends you a FIT Box of hand-picked styles right to your door every month. DrapeFit do personalized style selection for Men, Women and Kids.",
      techStack: [
        "Python",
        "FastAPI",
        "RASA",
        "PyTorch",
        "LLM",
        "CTSM",
        "AI Chatbot",
        "Nginx",
      ],
      link: "https://www.drapefit.com/",
      github: "https://github.com/dvtech888/drapefit-web",
      thumbnail: "/images/projects/drapefit.jpg",
    },
    {
      title:
        "Kindy.jp - 園と保護者をつなぐ - 保育管理WEBアプリケーション「Kindy」",
      description:
        "Kindy.jp is the smart childcare platform for modern kindergarten management. With Kindy, nursery staff and parents can seamlessly manage communication, child data, and daily activities in one secure system, making childcare organization simpler, safer, and more connected.",
      techStack: [
        "React",
        "React Native",
        "Expo",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS EC2",
        "AWS S3",
        "AWS SNS",
        "Nginx",
      ],
      link: "https://kindy-app.jp/",
      github: "",
      thumbnail: "/images/projects/kindy.png",
    },
    {
      title: "KaguAruoo - Furnished Apartments in Tokyo and all of Japan",
      description:
        "KaguAruoo is Japan's 1st platform for long-term rentals that can complete contracts & settlements online.",
      techStack: [
        "Ruby on Rails",
        "AirBnb",
        "CoffeeScript",
        "PostgreSQL",
        "WordPress",
        "Google Map APIs",
        "Tailwind CSS",
        "New Relic",
        "Nginx",
      ],
      link: "https://kaguaruoo.com/en/",
      github: "",
      thumbnail: "/images/projects/kaguaruoo.jpeg",
    },
    {
      title: "StakTask - Easy Task Tracking",
      description:
        "StakTask is an Australian-developed application created by StakOne designed to automate operational tasks, focusing primarily on the hospitality industry. This Trello-style app enables real-time tracking of staff tasks, aiming to increase productivity, improve staff retention, and reduce training costs.",
      techStack: [
        "JavaScript",
        "Cordova",
        "jQuery",
        "Trello-style Task Panel",
        "Hybrid Mobile App",
        "iOS",
        "iPad",
      ],
      link: "https://stakone.com.au/",
      github: "",
      thumbnail: "/images/projects/staktask.png",
    },
  ],
};
