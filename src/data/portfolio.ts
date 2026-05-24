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
  role: "Full-Stack Architect | SWE | Trust Dev",
  about: "Hi 👋 I’m William from Malaysia 🇲🇾",
  aboutArr: [
    "🏆 Senior Full-Stack Engineer 👨‍💻",
    "🚀 Build Scalable Systems ⚙️",
    "🎁 Ship Real Products 👍",
    "🎲 Turn Complexity Into Elegance 🎯",
    "💬 Strong Async Communication 🤝",
    "🌱 Startup Experiences With Clients 💼",
    "🇺🇸 US Timezone Friendly ⏰",
    "🌐 Remote Contractor 📡",
    "🧠 Bittensor Rider 🚴‍♀️",
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
      platform: "Discord",
      url: "https://discord.gg/M4pJbNhQc",
      icon: "Discord",
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
      "iOS",
      "Android",
      "React Native",
      "Flutter",
      "Dart",
      "Java",
      "Kotlin",
      "C++",
      "Swift",
      "Ionic",
      "Electron",
      "Reverse Engineering",
      "Unity",
      "Unreal Engine",
      "Cocos",
    ],
    ai: [
      "Bittensor",
      "PyTorch",
      "Keras",
      "TensorFlow",
      "Yolo",
      "LLM",
      "Rasa",
      "Hugging Face",
      "LangChain",
      "FastAPI",
      "gRPC",
      "Prompt Engineering",
      "OpenAI",
      "Gemini",
      "Claude",
      "Mistral",
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
      "Shopify",
      "Django",
      "Flask",
      "SpringBoot",
      "REST APIs",
      "Amazon Web Services",
      "Firebase",
      "Supabase",
      "n8n",
      "RDBMS",
      "NoSQL",
      "Redis",
      "Docker",
      "Cloudflare",
      "Nginx",
      "Web3",
      "DeFi",
      "Cryptocurrency",
    ],
    tools: [
      "iMac",
      "MacBook Pro",
      "Xiaomi 15",
      "iPad",
      "XCode",
      "Android Studio",
      "Visual Studio",
      "VS Code",
      "Cursor",
      "PyCharm",
      "IntelliJ IDEA",
      "Git",
      "GitHub Desktop",
      "Postman",
      "Google Chrome",
      "Safari",
      "Figma",
      "Adobe Photoshop",
      "Adobe XD",
      "Sketch",
      "Slack",
      "MS Teams",
      "WhatsApp",
      "Telegram",
    ],
  },
  experience: [
    {
      company: "Bittensor Network - SN74 Gittensor (Decentralized)",
      role: "Open Source Miner & Contributor (Full-Remote)",
      period: "April, 2026 - Present",
      description: [
        "Mining on Bittensor's SN74 Gittensor subnet by contributing merged PRs to whitelisted open source repositories, earning TAO alpha token emissions based on code quality and credibility scores.",
        "Contributed bug fixes and feature improvements to hot repositories, including resolving credibility display mismatches, dependency conflicts, and memoization bugs in Rails-based financial dashboards.",
        "Managed Bittensor wallet infrastructure using btcli, including coldkey/hotkey configuration, TAO deposits, and subnet registration on the Bittensor mainnet.",
      ],
    },
    {
      company: "Optlynx Co.,Ltd. - Japan",
      role: "Senior Software Engineer (Full-Remote)",
      period: "August, 2023 - November, 2025",
      description: [
        "Built the dashboard for UXBIT trading platform, leveraging Next.js and Tailwind CSS.",
        "Built the backend for UltimoPay debit card Exchange services (BTC/USDT), leveraging PHP, Node.js and Fireblocks SDK.",
        "Developed internal APIs and tools for the company's various projects, such as XApiServer backend and BOS admin panel.",
      ],
    },
    {
      company: "DrapeFit - US",
      role: "AI Specialist at Algorithms Team (Full-Remote)",
      period: "October, 2021 - June, 2023",
      description: [
        "Built a cutting-edge multi-tiered AI recommender system to personalize styling recommendations at scale.",
        "Implemented scoring module of the AI recommender system based on the Client Time Series Model (CTSM), leveraging PyTorch and multi-GPU distributed training.",
        "Enhanced the internal AI Chatbot for DrapeFit personal styling advice, leveraging Rasa, LLM and FastAPI, improving its accuracy and user experience.",
      ],
    },
    {
      company: "Value Applications Co.,Ltd. - Japan",
      role: "Full-Stack Developer (Full-Remote)",
      period: "January, 2019 - March, 2021",
      description: [
        "Built a childcare nursery management system called Kindy.jp, leveraging React Native, MERN stack and AWS.",
        "Introduced Kindy.jp to the kindergarten community in Tokyo, Japan.",
        "Built a healthcare counseling platform called Hapiage.jp for mental health support based on keiraku theory, leveraging Ionic Framework and Node.js.",
      ],
    },
    {
      company: "CrowdWorks.jp - Japan",
      role: "Freelance Web Developer",
      period: "September, 2017 - December, 2018",
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
      github: "https://github.com/ultimodevboris/uxbit_lp_next",
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
      github: "https://github.com/ultimodevboris/ultimopay_v4",
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
      github: "",
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
