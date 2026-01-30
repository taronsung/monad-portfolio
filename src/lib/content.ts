export const profile = {
  name: "Seokrin Taron Sung",
  handle: "@taronsung",
  location: "Seoul, Korea",
  education: "SNU Law School (on leave), SNU Economics + CS",
  email: "taronsung@gmail.com",
  github: "taronsung",
  medium: "@taronsung",
} as const;

export const experiences = [
  {
    company: "ZEP",
    role: "Web3 Team Lead",
    period: "2022-2024",
    description: "NAVER Z x Supercat JV",
    highlights: [
      "Built non-custodial wallet (EVM + non-EVM: Ethereum, Klaytn, Polygon, NEAR, Aptos)",
      "Shipped NFT Launchpad to production",
      "Led Klaytn + NEAR Foundation grant negotiations",
      "Filed 4 blockchain+metaverse patents",
    ],
  },
  {
    company: "A41 Ventures",
    role: "Protocol Specialist",
    period: "2024",
    description: "Crypto VC Research",
    highlights: [
      "ZKP (Zero-Knowledge Proof) research",
      "Governance mechanism analysis",
      "Published 'Replicated Security' series on Cosmos ICS",
    ],
  },
  {
    company: "Hashed",
    role: "Open Research Researcher",
    period: "2024-Present",
    description: "Leading Korean Crypto VC",
    highlights: [
      "Blockchain research and analysis",
      "Investment thesis development",
      "Policy research and regulatory analysis",
    ],
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
    title: "Replicated Security Series (Cosmos ICS)",
    url: "https://medium.com/a41-ventures",
    language: "Bilingual (EN/KR)",
  },
  {
    publisher: "Decipher (SNU Blockchain Society)",
    title: "ZK-STARK Explainers, Sui Deep-Dive",
    url: "https://medium.com/decipher-media",
    language: "Bilingual (EN/KR)",
  },
] as const;

export const skills = {
  languages: ["TypeScript", "Solidity", "Python", "Rust", "Move"],
  frameworks: ["React", "Next.js", "Node.js", "Hardhat", "Foundry"],
  blockchain: ["Ethereum", "Klaytn/Kaia", "Polygon", "NEAR", "Aptos"],
  specialties: [
    "Smart Contract Security",
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
