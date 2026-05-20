import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  blender,
  hardhat,
  solidity,
  threejs,
  studynotion,
  tripguide,
  shoppingcart,
  bioPage,
  githubFetch,
  cuberto,
  shareModal,
  coming,
  webdev,
  certificate1,
  fitt,
} from "../assets";

export const navLinks = [
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "play",
    title: "Playground",
  },
];



const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Solidity", icon: solidity },
  { name: "Hardhat", icon: hardhat },
  { name: "Three JS", icon: threejs },
  { name: "Docker", icon: docker },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
];


const experiences = [];

export const experiences1 = [
  {
    id: 0,
    img: "https://avatars.githubusercontent.com/u/0xwaya?v=4",
    role: "Founder & Lead Architect",
    company: "wayalabs / OpenClaw",
    date: "2025 - Present",
    desc: "Designed and deployed OpenClaw — a fully autonomous AI agent system running natively on macOS. Built the LangGraph 16-agent CEO/CTO/CFO hierarchy (ceo-agent-system) with real-time SocketIO dashboard, artifact pipeline, and Telegram integration.",
    skills: ["LangGraph", "LangChain", "Python", "OpenAI", "SocketIO", "Flask", "Autonomous Agents", "Multi-Agent AI"],
  },
  {
    id: 1,
    img: "https://opengraph.githubassets.com/1/0xwaya/ceo-agent-system",
    role: "Lead Developer",
    company: "CEO Agent System",
    date: "Feb 2025 - May 2026",
    desc: "Built a 16-agent LangGraph multi-agent AI system featuring a CEO/CTO/CFO leadership layer, 6 domain directors, and 7 execution specialists. Includes real-time dashboard, artifact pipeline, and SocketIO chat. Published open-source.",
    skills: ["LangGraph", "LangChain", "Python", "OpenAI", "Flask", "SocketIO", "Web3"],
  },
  {
    id: 2,
    img: "https://opengraph.githubassets.com/1/0xwaya/loro-app",
    role: "Full Stack Web3 Developer",
    company: "Pandemonium Squad / Loro App",
    date: "2022 - 2024",
    desc: "Led front-end and smart contract development for Pandemonium Squad NFT collection. Built the Loro Dapp (testnet v0.1) with NFT minting, trait-layer generation, and wallet integration. Deployed at loro.vercel.app.",
    skills: ["Solidity", "Hardhat", "React.js", "Ethers.js", "NFT", "Web3", "IPFS"],
  },
  {
    id: 3,
    img: "https://opengraph.githubassets.com/1/0xwaya/queencity-soundboard",
    role: "Full Stack Developer",
    company: "QueenCity Soundboard",
    date: "2024 - Present",
    desc: "Built a mobile-first event platform connecting Venezuelan artists with Midwest audiences. Full-stack Next.js + Supabase + Ticket Tailor, deployed at queencitysoundboard.com.",
    skills: ["Next.js", "Supabase", "TypeScript", "TailwindCSS", "PostgreSQL"],
  },
  {
    id: 4,
    img: "https://opengraph.githubassets.com/1/0xwaya/devreluni_rss",
    role: "Developer Relations & Open Source",
    company: "DevRel Uni / ETHDenver",
    date: "2022 - 2023",
    desc: "Active in DevRel community, ETHDenver bootcamp, and ETHGlobal FVM Space Warp hackathon. Contributed to open-source Web3 tooling and created the DevRel Resources collaborative hub.",
    skills: ["Web3", "Open Source", "Solidity", "Developer Relations", "Community Building"],
    doc: "https://github.com/0xwaya/bufficorn.bootcamp",
  },
];

const testimonials = [
  {
    project: "AI Agent Architecture",
    testimonial: webdev,
    name: "Edward Mercado",
    designation: "0xwaya — CEO Agent System",
    company: "16-agent LangGraph hierarchy with CEO/CTO/CFO layer, 6 domain directors, and 7 execution specialists. Real-time SocketIO dashboard, artifact pipeline, and autonomous task execution.",
    image: "https://avatars.githubusercontent.com/u/0xwaya?v=4",
    source_code_link: "https://github.com/0xwaya/ceo-agent-system",
  },
  {
    project: "Web3 & NFT Development",
    testimonial: certificate1,
    name: "Pandemonium Squad",
    designation: "NFT Dapp — loro.vercel.app",
    company: "Macaw NFT collection Dapp featuring trait-layered generation, rarity scoring, and testnet minting. Built with Solidity, Hardhat, and React.",
    image: "https://opengraph.githubassets.com/1/0xwaya/loro-app",
    source_code_link: "https://github.com/0xwaya/loro-app",
  },
  {
    project: "Full Stack & Automation",
    testimonial: fitt,
    name: "QueenCity Soundboard",
    designation: "queencitysoundboard.com",
    company: "Mobile-first event platform for Venezuelan artists in the Midwest. Next.js + Supabase + Ticket Tailor with full ticketing and RSVP flow.",
    image: "https://opengraph.githubassets.com/1/0xwaya/queencity-soundboard",
    source_code_link: "https://github.com/0xwaya/queencity-soundboard",
  },
];

const certificates = [
  {
    project: "Multi-Agent AI Systems",
    testimonial: webdev,
    name: "Edward Mercado",
    designation: "LangGraph / OpenAI",
    company: "Advanced multi-agent AI system design using LangGraph, LangChain, and OpenAI — applied directly to the ceo-agent-system project.",
    image: "https://avatars.githubusercontent.com/u/0xwaya?v=4",
    source_code_link: "https://github.com/0xwaya/ceo-agent-system",
  },
  {
    project: "Blockchain Security",
    testimonial: certificate1,
    name: "Cyfrin / Updraft",
    designation: "Smart Contract Security",
    company: "Full security course using Foundry framework — covered auditing, reentrancy, storage layout, and exploit patterns.",
    image: "https://opengraph.githubassets.com/1/0xwaya/simple-storage-f23",
    source_code_link: "https://github.com/0xwaya/simple-storage-f23",
  },
  {
    project: "Web3 Development",
    testimonial: fitt,
    name: "ETHDenver / ETHGlobal",
    designation: "Bootcamp + Hackathon",
    company: "ETHDenver bootcamp and ETHGlobal FVM Space Warp hackathon. Shipped on Filecoin Virtual Machine.",
    image: "https://opengraph.githubassets.com/1/0xwaya/space-warp",
    source_code_link: "https://github.com/0xwaya/space-warp",
  },
];

const projects = [
  {
    name: "CEO Agent System",
    description:
      "16-agent LangGraph AI hierarchy — CEO/CTO/CFO + domain directors + execution specialists. Real-time SocketIO dashboard and autonomous artifact pipeline.", 
    tags: [
      { name: "LangGraph", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
    ],
    image: "https://opengraph.githubassets.com/1/0xwaya/ceo-agent-system",
    image2: "https://wayalabs.com",
    source_code_link: "https://github.com/0xwaya/ceo-agent-system",
  },
  {
    name: "Loro App — NFT Dapp",
    description:
      "Pandemonium Squad Macaw NFT Dapp. Testnet v0.1 with trait-layer generation, rarity scoring, and wallet-connected minting.",
    tags: [
      { name: "Solidity", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "Ethers.js", color: "pink-text-gradient" },
    ],
    image: "https://opengraph.githubassets.com/1/0xwaya/loro-app",
    image2: "https://loro.vercel.app",
    source_code_link: "https://github.com/0xwaya/loro-app",
  },
  {
    name: "QueenCity Soundboard",
    description:
      "Mobile-first event platform connecting Venezuelan artists with Midwest audiences. Next.js + Supabase + Ticket Tailor with full ticketing flow.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Supabase", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    image: "https://opengraph.githubassets.com/1/0xwaya/queencity-soundboard",
    image2: "https://queencitysoundboard.com",
    source_code_link: "https://github.com/0xwaya/queencity-soundboard",
  },
  {
    name: "Tarot AI",
    description:
      "Tarot project with separate frontend and AI backend. LLM-powered card interpretation layered on traditional tarot symbolism.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
    ],
    image: "https://opengraph.githubassets.com/1/0xwaya/tarot",
    image2: "https://github.com/0xwaya/tarot",
    source_code_link: "https://github.com/0xwaya/tarot",
  },
  {
    name: "Dream Car Auto Repair",
    description:
      "Conversion-focused landing page for Dream Car Auto Repair (Norwood, OH). Mobile-first, fast-loading, and optimized for local SEO.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: "https://opengraph.githubassets.com/1/0xwaya/dreamcar",
    image2: "https://0xwaya.github.io/dreamcar/",
    source_code_link: "https://github.com/0xwaya/dreamcar",
  },
  {
    name: "DevRel Uni RSS",
    description:
      "Collaborative hub for Developer Relations professionals. Community-driven RSS aggregator deployed at dru-resources.vercel.app.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "RSS", color: "green-text-gradient" },
      { name: "Community", color: "pink-text-gradient" },
    ],
    image: "https://opengraph.githubassets.com/1/0xwaya/devreluni_rss",
    image2: "https://dru-resources.vercel.app",
    source_code_link: "https://github.com/0xwaya/devreluni_rss",
  },
];

export const projects1 = [
  {
    id: 0,
    title: "CEO Agent System",
    date: "Feb 2025 - May 2026",
    description:
      "16-agent LangGraph multi-agent AI system — CEO/CTO/CFO + 6 domain directors + 7 execution specialists. Real-time SocketIO dashboard, artifact pipeline, and autonomous task execution. Live at wayalabs.com.",
    image: "https://opengraph.githubassets.com/1/0xwaya/ceo-agent-system",
    tags: ["LangGraph", "LangChain", "Python", "OpenAI", "Flask", "SocketIO", "Web3", "Multi-Agent AI"],
    category: "ai agents",
    github: "https://github.com/0xwaya/ceo-agent-system",
    webapp: "https://wayalabs.com",
  },
  {
    id: 1,
    title: "Loro App — Pandemonium Squad NFT",
    date: "2022 - 2024",
    description:
      "Macaw NFT collection Dapp. Pandemonium Squad Beta v0.1 testnet with trait-layer generation, rarity engine, and wallet-connected minting.",
    image: "https://opengraph.githubassets.com/1/0xwaya/loro-app",
    tags: ["Solidity", "Hardhat", "React.js", "Ethers.js", "NFT", "IPFS"],
    category: "web3",
    github: "https://github.com/0xwaya/loro-app",
    webapp: "https://loro.vercel.app",
  },
  {
    id: 2,
    title: "QueenCity Soundboard",
    date: "2024 - Present",
    description:
      "Mobile-first event platform connecting Venezuelan artists and Midwest audiences. Built with Next.js + Supabase + Ticket Tailor.",
    image: "https://opengraph.githubassets.com/1/0xwaya/queencity-soundboard",
    tags: ["Next.js", "Supabase", "TypeScript", "TailwindCSS", "Ticket Tailor", "PostgreSQL"],
    category: "full stack",
    github: "https://github.com/0xwaya/queencity-soundboard",
    webapp: "https://queencitysoundboard.com",
  },
  {
    id: 3,
    title: "Tarot AI",
    date: "2024 - Present",
    description:
      "Canonical tarot project with separate frontend and AI backend. LLM-powered card interpretation layered on traditional tarot symbolism.",
    image: "https://opengraph.githubassets.com/1/0xwaya/tarot",
    tags: ["React", "Python", "OpenAI", "AI", "Node.js"],
    category: "ai agents",
    github: "https://github.com/0xwaya/tarot",
    webapp: "https://github.com/0xwaya/tarot",
  },
  {
    id: 4,
    title: "Amazon Granite — Supplier Scraper",
    date: "Apr 2026 - May 2026",
    description:
      "Public source snapshot of the Amazon Granite rebrand site and supplier scraper prototype for urbanstone.co.",
    image: "https://opengraph.githubassets.com/1/0xwaya/amazon-granite",
    tags: ["Python", "Web Scraping", "Node.js", "React"],
    category: "full stack",
    github: "https://github.com/0xwaya/amazon-granite",
    webapp: "https://urbanstone.co",
  },
  {
    id: 5,
    title: "RadarTV",
    date: "2025 - Present",
    description:
      "Consolidating personal brand with media entity. Modern tech stack for high-performance streaming and community engagement.",
    image: "https://opengraph.githubassets.com/1/0xwaya/radartv",
    tags: ["React", "Streaming", "Next.js", "TailwindCSS"],
    category: "full stack",
    github: "https://github.com/0xwaya/radartv",
    webapp: "https://github.com/0xwaya/radartv",
  },
  {
    id: 6,
    title: "DevRel Uni RSS",
    date: "May 2026",
    description:
      "Collaborative hub for Developer Relations professionals to share and discover resources. Community-driven RSS aggregator.",
    image: "https://opengraph.githubassets.com/1/0xwaya/devreluni_rss",
    tags: ["Next.js", "RSS", "Community", "Developer Relations"],
    category: "web app",
    github: "https://github.com/0xwaya/devreluni_rss",
    webapp: "https://dru-resources.vercel.app",
  },
  {
    id: 7,
    title: "Dream Car Auto Repair",
    date: "May 2026",
    description:
      "Conversion-focused landing page for Dream Car Auto Repair (Norwood, OH). Mobile-first, local SEO optimized.",
    image: "https://opengraph.githubassets.com/1/0xwaya/dreamcar",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "javascript",
    github: "https://github.com/0xwaya/dreamcar",
    webapp: "https://0xwaya.github.io/dreamcar/",
  },
  {
    id: 8,
    title: "web3-4dummies",
    date: "2023",
    description:
      "Web3 dapp for beginners using Next.js and a mock of create.web3.dapp. Educational resource for getting started in Web3.",
    image: "https://opengraph.githubassets.com/1/0xwaya/web3-4dummies",
    tags: ["Next.js", "Web3", "Ethers.js", "React"],
    category: "web3",
    github: "https://github.com/0xwaya/web3-4dummies",
    webapp: "https://github.com/0xwaya/web3-4dummies",
  },
  {
    id: 9,
    title: "ETHGlobal Space Warp",
    date: "Jan - Feb 2023",
    description:
      "ETHGlobal FVM Space Warp hackathon project. Built on Filecoin Virtual Machine exploring decentralized storage and compute.",
    image: "https://opengraph.githubassets.com/1/0xwaya/space-warp",
    tags: ["Solidity", "Filecoin", "FVM", "Web3", "Hardhat"],
    category: "web3",
    github: "https://github.com/0xwaya/space-warp",
    webapp: "https://github.com/0xwaya/space-warp",
  },
  {
    id: 10,
    title: "0xwaya Portfolio",
    date: "2025 - Present",
    description:
      "This portfolio — React + Three.js + Vite + TailwindCSS + Framer Motion. Interactive 3D elements, animated sections, full project and experience showcase.",
    image: "https://opengraph.githubassets.com/1/0xwaya",
    tags: ["React", "Three.js", "TailwindCSS", "Framer Motion", "Vite"],
    category: "react",
    github: "https://github.com/0xwaya",
    webapp: "https://github.com/0xwaya",
  },
];

export { technologies, testimonials, projects, certificates };
