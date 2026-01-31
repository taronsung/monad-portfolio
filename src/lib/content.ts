export const profile = {
  name: "Seokrin Taron Sung",
  handle: "@taronsung",
  location: "Seoul, Korea",
  education: "SNU Law School, SNU Economics + CS (Cum Laude)",
  email: "taronsung@gmail.com",
  github: "taronsung",
  medium: "@taronsung",
} as const;

export const experiences = [
  {
    company: "DECIPHER",
    role: "Research Member",
    period: "2022-2023",
    description: "Seoul National University Blockchain Academy",
    highlights: [
      "Published Sui L1 deep-dive: architecture, Move language, object-centric model (26 min read)",
      "Co-authored Scam Series analyzing crypto fraud taxonomies and detection patterns",
      "Contributed to ZK-STARK application research series",
      "Weekly technical presentations to 50+ members",
    ],
  },
  {
    company: "ZEP",
    role: "Web3 Team Lead",
    period: "2022-2024",
    description: "NAVER Z x Supercat JV | 30M+ users, peak 4.7M MAU",
    highlights: [
      "Architected self-custody wallet using Shamir Secret Sharing (3 shares, threshold 2)",
      "AES-256-CBC encryption with PBKDF2 key derivation, multi-storage split (MongoDB + MariaDB + device)",
      "Multi-chain support: EVM (Ethereum, Klaytn, Polygon) + NEAR Protocol + Aptos",
      "Authored ZEP20/721/1155 token standards (EIP equivalents for metaverse)",
      "Led Klaytn + NEAR Foundation grant negotiations",
      "Filed 4 blockchain+metaverse patents",
    ],
  },
  {
    company: "A41 Ventures",
    role: "Protocol Specialist",
    period: "2023-2024",
    description: "Crypto VC Research",
    highlights: [
      "Published 'Replicated Security' series on Cosmos ICS (4 articles, bilingual)",
      "Deep-dive into CCV packet flows, validator set propagation, IBC mechanics",
      "ZKP (Zero-Knowledge Proof) research",
      "Governance mechanism analysis",
    ],
  },
  {
    company: "Hashed Open Research",
    role: "Researcher",
    period: "2024-Present",
    description: "Leading Korean Crypto VC Research Initiative",
    highlights: [
      "Authored 'Capital in the AI Era' research report",
      "Authored 'KRW Stablecoin Activation Strategy' (200+ pages)",
      "Policy research and regulatory analysis",
      "Investment thesis development",
    ],
    url: "https://hashedopenresearch-inc.notion.site/5aac5cee2d11484da9c20e3d2a370b1a?v=1744d20742c2427f925a6019a6d21ab0&pvs=74",
    note: "Website/research archive migration in progress",
  },
] as const;

export const standards = [
  {
    id: "KIP-87",
    status: "Final" as const,
    title: "NFT Avatar in Multi-Metaverse",
    description: "Enabling interoperable NFT visualization across metaverse platforms",
    url: "https://kips.kaia.io/KIPs/kip-87",
  },
  {
    id: "EIP-5865",
    status: "Draft" as const,
    title: "NFT Avatar in Multi-Metaverse",
    description: "Equivalent standard proposed to Ethereum",
    url: "https://github.com/ethereum/EIPs/pull/5865",
  },
] as const;

export const publications = [
  {
    publisher: "A41 Ventures",
    title: "Replicated Security #1 & #2 (Aug-Oct 2023)",
    url: "https://medium.com/@taronsung",
    language: "Bilingual (EN/KR)",
    count: "4 articles",
  },
  {
    publisher: "Decipher Media (SNU)",
    title: "Sui Research, ZK-STARK Series, Scam Analysis (2022-2023)",
    url: "https://medium.com/@taronsung",
    language: "Bilingual (EN/KR)",
    count: "3 articles",
  },
] as const;

export const opensource = [
  {
    repo: "semantic-release/semantic-release",
    stars: "23k",
    type: "docs" as const,
    title: "Warn against registry-url conflict in setup-node",
    description: "Identified documentation gap causing EINVALIDNPMTOKEN errors; added warning section with examples",
    url: "https://github.com/semantic-release/semantic-release/pull/4024",
  },
  {
    repo: "bash-lsp/bash-language-server",
    stars: "2.6k",
    type: "fix" as const,
    title: "Handle non-file URI schemes in shellcheck linting",
    description: "Fixed bug affecting WebDAV/kio-fuse users; added safeFileURLToPath helper with tests",
    url: "https://github.com/bash-lsp/bash-language-server/pull/1371",
  },
  {
    repo: "ollama/ollama",
    stars: "161k",
    type: "docs" as const,
    title: "Capitalize Ollama in serve command help text",
    description: "Product name consistency in CLI help output",
    url: "https://github.com/ollama/ollama/pull/13965",
  },
  {
    repo: "langgenius/dify",
    stars: "60k",
    type: "fix" as const,
    title: "Remove unwanted border on sticky elements in dark mode",
    description: "Frontend styling fix for AI workflow platform",
    url: "https://github.com/langgenius/dify/pull/31699",
  },
] as const;

export const skills = {
  languages: ["TypeScript", "Solidity", "Python", "Rust", "Move"],
  frameworks: ["React", "Next.js", "Node.js", "Hardhat", "Foundry"],
  blockchain: ["Ethereum", "Klaytn/Kaia", "Polygon", "NEAR", "Aptos"],
  specialties: [
    "Blockchain Architecture",
    "ZKP Research",
    "Technical Writing",
    "Regulatory Analysis",
  ],
} as const;

export const regulatory = {
  daoLaw: "DAO Special Law draft for SNU Law School",
  stablecoin: "200+ page KRW stablecoin strategy document for Korean regulators",
} as const;

export const positioning = {
  tagline: "Technical Writer | Blockchain Engineer | Korea Bridge",
  uniqueValue: [
    "Technical writer who CODES - not just writes about code",
    "Best person for Korean market expansion - Seoul-based, SNU Law, regulatory expertise",
    "Bilingual bridge - Native Korean + fluent English technical writing",
  ],
} as const;

export const commands = {
  help: "Display available commands",
  about: "Learn about me and my background",
  work: "View my professional experience",
  skills: "See my technical skills",
  standards: "Blockchain standards I've authored",
  oss: "Open source contributions",
  contact: "Get in touch with me",
  clear: "Clear the terminal",
} as const;

export const asciiArt = `
████████╗ █████╗ ██████╗  ██████╗ ███╗   ██╗
╚══██╔══╝██╔══██╗██╔══██╗██╔═══██╗████╗  ██║
   ██║   ███████║██████╔╝██║   ██║██╔██╗ ██║
   ██║   ██╔══██║██╔══██╗██║   ██║██║╚██╗██║
   ██║   ██║  ██║██║  ██║╚██████╔╝██║ ╚████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`.trim();

export const bootSequence = [
  "MONAD BIOS v1.0",
  "Copyright (C) 2025 Monad Labs",
  "",
  "Initializing system...",
  "Loading portfolio modules...",
  "Connecting to blockchain networks...",
  "Verifying credentials...",
  "",
  "System ready.",
  "",
  "Welcome, visitor.",
  "Type 'help' for available commands.",
] as const;
