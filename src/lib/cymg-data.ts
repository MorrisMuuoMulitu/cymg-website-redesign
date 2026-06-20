/**
 * CYMG Data Constants
 * Verified content from the brief. No fabricated data.
 */

// ─── Working Groups ──────────────────────────────────────────────
// Cluster color mapping uses the CYMG green family so the interface stays
// cohesive and official. We still keep the three clusters for filtering.

export type WGCluster = "pollution" | "nature" | "policy";

export interface WorkingGroup {
  slug: string;
  name: string;
  shortName: string;
  cluster: WGCluster;
  description: string;
  icon: string; // Lucide icon name
}

export const WORKING_GROUPS: WorkingGroup[] = [
  {
    slug: "chemicals-waste-pollution",
    name: "Chemicals, Waste & Pollution",
    shortName: "Chemicals & Waste",
    cluster: "pollution",
    description:
    "Engaging youth in the sound management of chemicals and waste, including the Strategic Approach to International Chemicals Management (SAICM) and the Basel, Rotterdam, and Stockholm Conventions.",
    icon: "FlaskConical",
  },
  {
    slug: "eco-faith",
    name: "Eco-Faith",
    shortName: "Eco-Faith",
    cluster: "policy",
    description:
    "Bridging environmental action and faith-based communities to harness the moral and spiritual imperative for ecological stewardship.",
    icon: "Leaf",
  },
  {
    slug: "environmental-health",
    name: "Environmental Health",
    shortName: "Env. Health",
    cluster: "pollution",
    description:
    "Addressing the nexus between environmental degradation and public health, from air pollution to waterborne diseases and toxic exposures.",
    icon: "HeartPulse",
  },
  {
    slug: "youth-plastic-action-network",
    name: "Youth Plastic Action Network (YPAN)",
    shortName: "YPAN",
    cluster: "pollution",
    description:
    "Coordinating youth advocacy for an ambitious international plastics treaty and reduction of plastic pollution worldwide.",
    icon: "Recycle",
  },
  {
    slug: "adaptation-resilience",
    name: "Adaptation & Resilience",
    shortName: "Adaptation",
    cluster: "nature",
    description:
    "Focusing on climate adaptation strategies and building community resilience to environmental shocks and stresses.",
    icon: "ShieldCheck",
  },
  {
    slug: "childrens-affairs",
    name: "Children's Affairs",
    shortName: "Children's Affairs",
    cluster: "policy",
    description:
    "Ensuring children's voices, rights, and perspectives are centred in environmental governance and decision-making processes.",
    icon: "Baby",
  },
  {
    slug: "environmental-law-rights",
    name: "Environmental Law & Rights",
    shortName: "Law & Rights",
    cluster: "policy",
    description:
    "Advancing environmental rule of law, the right to a clean environment, and youth participation in environmental justice mechanisms.",
    icon: "Scale",
  },
  {
    slug: "green-economy-resources",
    name: "Green Economy & Resources",
    shortName: "Green Economy",
    cluster: "policy",
    description:
    "Promoting transitions to green economies, sustainable consumption and production, and the efficient use of natural resources.",
    icon: "TrendingUp",
  },
  {
    slug: "nature-ecosystems",
    name: "Nature & Ecosystems",
    shortName: "Nature",
    cluster: "nature",
    description:
    "Working on biodiversity conservation, ecosystem restoration, and the implementation of the Kunming-Montreal Global Biodiversity Framework.",
    icon: "TreePine",
  },
  {
    slug: "ocean-science-governance",
    name: "Ocean Science & Governance",
    shortName: "Ocean",
    cluster: "nature",
    description:
    "Engaging with ocean governance processes, marine biodiversity beyond national jurisdiction (BBNJ), and the UN Decade of Ocean Science.",
    icon: "Waves",
  },
  {
    slug: "ozone-climate-protection",
    name: "Ozone & Climate Protection",
    shortName: "Ozone & Climate",
    cluster: "pollution",
    description:
    "Following the Montreal Protocol and Kigali Amendment, linking ozone-layer protection with climate change mitigation.",
    icon: "Sun",
  },
  {
    slug: "science-policy",
    name: "Science-Policy",
    shortName: "Science-Policy",
    cluster: "policy",
    description:
    "Strengthening the interface between scientific evidence and environmental policy-making, including UNEP's science-policy panels.",
    icon: "Microscope",
  },
  {
    slug: "sustainable-finance",
    name: "Sustainable Finance",
    shortName: "Finance",
    cluster: "policy",
    description:
    "Advocating for sustainable financial systems, climate finance access for youth-led initiatives, and the greening of financial flows.",
    icon: "Banknote",
  },
];

export const WG_COUNT = WORKING_GROUPS.length; // 13

export const CLUSTER_COLORS: Record<WGCluster, { bg: string; text: string; darkBg: string; darkText: string }> = {
  pollution: { bg: "bg-[var(--cymg-green-light)]/10", text: "text-[var(--cymg-green)]", darkBg: "dark:bg-[var(--cymg-green-light)]/20", darkText: "dark:text-[var(--cymg-green-light)]" },
  nature: { bg: "bg-[var(--cymg-green)]/10", text: "text-[var(--cymg-green)]", darkBg: "dark:bg-[var(--cymg-green)]/20", darkText: "dark:text-[var(--cymg-green-light)]" },
  policy: { bg: "bg-[var(--cymg-green-deep)]/10", text: "text-[var(--cymg-green-deep)]", darkBg: "dark:bg-[var(--cymg-green-deep)]/20", darkText: "dark:text-[var(--cymg-green-light)]" },
};

// ─── Timeline Milestones ─────────────────────────────────────────
export interface TimelineEntry {
  year: number;
  title: string;
  description: string;
  status: "verified" | "coming-soon";
}

export const TIMELINE: TimelineEntry[] = [
  {
    year: 1972,
    title: "Stockholm Conference & UNEP Founded",
    description:
    "The United Nations Conference on the Human Environment in Stockholm leads to the creation of the United Nations Environment Programme (UNEP).",
    status: "verified",
  },
  {
    year: 1985,
    title: "International Youth Year",
    description:
    "The UN designates 1985 as International Youth Year, recognising the role of young people in global development.",
    status: "verified",
  },
  {
    year: 1992,
    title: "Major Groups & Agenda 21",
    description:
    "The Rio Earth Summit establishes the Major Groups approach via Agenda 21, formally including nine sectors of society — including children and youth — in UN sustainability processes.",
    status: "verified",
  },
  {
    year: 2003,
    title: "TUNZA Strategy Launched",
    description:
    "UNEP launches the TUNZA strategy for youth engagement, creating a structured programme for children and youth participation in environmental action.",
    status: "verified",
  },
  {
    year: 2009,
    title: "TUNZA International Youth Conference, Daejeon",
    description:
    "The TUNZA International Youth Conference in Daejeon, Republic of Korea, gathers young environmental leaders from around the world.",
    status: "verified",
  },
  {
    year: 2010,
    title: "TUNZA International Children's Conference, Nagoya",
    description:
    "Held in Nagoya, Japan, alongside the CBD COP10, this conference brings children's voices to the forefront of biodiversity discussions.",
    status: "verified",
  },
  {
    year: 2011,
    title: "TUNZA International Youth Conference, Bandung",
    description:
    "The Bandung Declaration is adopted at the TUNZA International Youth Conference in Indonesia, charting a youth vision for sustainable development.",
    status: "verified",
  },
  {
    year: 2012,
    title: "CYMG Founded",
    description:
    "The Children and Youth Major Group to UNEP is formally established as the official UN-recognized constituency for children and youth engaging with UNEP.",
    status: "verified",
  },
  {
    year: 2013,
    title: "UNEA Established, 9 Major Groups Formalised",
    description:
    "The United Nations Environment Assembly (UNEA) is established as UNEP's governing body. Nine Major Groups, including children and youth, are formally recognised in the stakeholder engagement framework.",
    status: "verified",
  },
  {
    year: 2020,
    title: "Inaugural Virtual Youth Environment Assembly",
    description:
    "The first virtual Youth Environment Assembly (YEA) is held, adapting youth engagement to the constraints of the global pandemic.",
    status: "verified",
  },
  {
    year: 2021,
    title: "Second Virtual YEA & Chemicals & Waste Youth Platform",
    description:
    "A second virtual YEA is convened, and the Chemicals & Waste Youth Platform is established to strengthen youth input on chemicals and waste governance.",
    status: "verified",
  },
  {
    year: 2022,
    title: "First Global Youth Environment Assembly & Stockholm+50",
    description:
    "The first in-person Global Youth Environment Assembly is held alongside Stockholm+50, marking a major mobilisation of youth voices in environmental governance.",
    status: "verified",
  },
  {
    year: 2024,
    title: "Second Global Youth Environment Assembly",
    description:
    "The second Global Youth Environment Assembly convenes youth delegates ahead of UNEA-6, shaping youth policy inputs and declarations.",
    status: "verified",
  },
];

// ─── Regions ─────────────────────────────────────────────────────
export interface Region {
  id: string;
  name: string;
  shortName: string;
  type: "standard" | "special";
}

export const REGIONS: Region[] = [
  { id: "africa", name: "Africa", shortName: "AF", type: "standard" },
  { id: "asia-pacific", name: "Asia-Pacific", shortName: "AP", type: "standard" },
  { id: "europe", name: "Europe", shortName: "EU", type: "standard" },
  { id: "lac", name: "Latin America & Caribbean", shortName: "LAC", type: "standard" },
  { id: "north-america", name: "North America", shortName: "NA", type: "standard" },
  { id: "west-asia", name: "West Asia", shortName: "WA", type: "standard" },
  { id: "kenya-liaison", name: "Kenya Host-Country Liaison", shortName: "KE", type: "special" },
  { id: "unea-presidency", name: "UNEA Presidency Liaison", shortName: "UNEA", type: "special" },
];

// ─── UNEA Cycle ──────────────────────────────────────────────────
export interface UNEAEntry {
  slug: string;
  title: string;
  subtitle: string;
  status: "active" | "completed" | "upcoming";
  cycle: string;
}

export const UNEA_ENTRIES: UNEAEntry[] = [
  {
    slug: "unea-7-consultations",
    title: "UNEA-7 Consultations",
    subtitle: "Preparatory youth consultations for the seventh session of UNEA",
    status: "upcoming",
    cycle: "UNEA-7",
  },
  {
    slug: "yea-2025",
    title: "Youth Environment Assembly 2025",
    subtitle: "The global youth convening ahead of UNEA-7",
    status: "upcoming",
    cycle: "UNEA-7",
  },
  {
    slug: "gyd-2025",
    title: "Global Youth Declaration 2025",
    subtitle: "Youth declaration process feeding into UNEA-7 outcomes",
    status: "upcoming",
    cycle: "UNEA-7",
  },
  {
    slug: "group-of-friends",
    title: "Group of Friends",
    subtitle: "UN member states championing youth engagement in environmental governance",
    status: "active",
    cycle: "Ongoing",
  },
  {
    slug: "unea-6-explainers",
    title: "UNEA-6 Explainers",
    subtitle: "Breakdowns and analysis of UNEA-6 outcomes and resolutions",
    status: "completed",
    cycle: "UNEA-6",
  },
  {
    slug: "yea-2024",
    title: "Youth Environment Assembly 2024",
    subtitle: "The second Global Youth Environment Assembly held ahead of UNEA-6",
    status: "completed",
    cycle: "UNEA-6",
  },
];

// ─── MEA Engagement ──────────────────────────────────────────────
export interface MEARecord {
  name: string;
  status: string;
  description: string;
}

export const MEA_ENGAGEMENTS: MEARecord[] = [
  {
    name: "Cartagena Convention",
    status: "Observer Entity since 2023",
    description:
    "CYMG holds Observer Entity status under the Cartagena Convention for the Protection and Development of the Marine Environment of the Wider Caribbean Region.",
  },
  {
    name: "Montreal Protocol (MOP35)",
    status: "Youth Observer Nomination",
    description:
    "CYMG has pursued youth observer nomination at the Meeting of the Parties to the Montreal Protocol, linking ozone protection with climate action.",
  },
  {
    name: "Montevideo Environmental Law Programme",
    status: "Alignment & Engagement",
    description:
    "CYMG aligns with the Montevideo Programme V for the development and periodic review of environmental law, advocating for youth perspectives in environmental law-making.",
  },
];

// ─── Mandate Legal Basis ─────────────────────────────────────────
export interface MandateRef {
  code: string;
  title: string;
  plainLanguage: string;
}

export const MANDATE_REFS: MandateRef[] = [
  {
    code: "A/RES/68/288",
    title: "Resolution on the United Nations Environment Assembly",
    plainLanguage:
    "Establishes UNEA as UNEP's universal-membership governing body and the world's highest-level decision-making body on the environment.",
  },
  {
    code: "A/RES/67/290",
    title: "Resolution on the United Nations Environment Programme",
    plainLanguage:
    "Strengthened UNEP's role and established the universal membership of its governing council, paving the way for UNEA.",
  },
  {
    code: "A/69/L.43",
    title: "Draft resolution on stakeholder engagement policy",
    plainLanguage:
    "Sets out the framework for how Major Groups and other stakeholders engage with UNEP, including the Children and Youth Major Group.",
  },
  {
    code: "A/RES/70/1",
    title: "2030 Agenda for Sustainable Development",
    plainLanguage:
    "The Sustainable Development Goals (SDGs), which CYMG's working groups align with across environmental dimensions.",
  },
  {
    code: "UNEA Rules of Procedure",
    title: "Rules governing UNEA proceedings",
    plainLanguage:
    "Define the modalities for Major Group participation in UNEA sessions, including speaking rights and credentialing.",
  },
  {
    code: "Stakeholder Engagement Mechanism",
    title: "UNEP stakeholder engagement framework",
    plainLanguage:
    "The formal mechanism through which Major Groups, including children and youth, input into UNEP policy processes.",
  },
  {
    code: "Major Group Facilitation Committee",
    title: "MGFC mandate",
    plainLanguage:
    "The committee that coordinates across the nine Major Groups to ensure coherent stakeholder engagement with UNEP.",
  },
];

// ─── Governance Structure ────────────────────────────────────────
export interface GovernanceNode {
  id: string;
  label: string;
  description: string;
  level: number;
}

export const GOVERNANCE_NODES: GovernanceNode[] = [
  {
    id: "assembly",
    label: "Assembly (UNEA)",
    description: "The United Nations Environment Assembly — the world's highest-level decision-making body on the environment.",
    level: 0,
  },
  {
    id: "committee-accredited",
    label: "Committee of Accredited Organisations",
    description: "Open to all accredited organisations, this committee reviews credentialing and participation modalities.",
    level: 1,
  },
  {
    id: "steering",
    label: "Global Steering Committee",
    description: "The elected body that coordinates CYMG's strategic direction, consisting of Global Coordinators and Regional Facilitators.",
    level: 2,
  },
  {
    id: "operations",
    label: "Operations Facilitation Team",
    description: "The volunteer team managing day-to-day operations, communications, and project delivery.",
    level: 3,
  },
  {
    id: "pcg",
    label: "Policy Coordination Group",
    description: "Coordinates CYMG's policy inputs and positions across working groups and engagement processes.",
    level: 3,
  },
  {
    id: "working-groups",
    label: "Working Groups",
    description: "13 thematic working groups covering pollution, nature, and policy/governance/finance clusters.",
    level: 4,
  },
  {
    id: "regional-groups",
    label: "Regional Groups",
    description: "Six UNEP regions plus host-country and UNEA-presidency liaison seats.",
    level: 4,
  },
];

// ─── Blog Posts (placeholder — awaiting content migration) ────────
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  featuredImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "unea-6-resolution-recap-series",
    title: "Resolution Recap Series: Key Outcomes from UNEA-6",
    excerpt:
    "A comprehensive breakdown of the resolutions adopted at the sixth session of the United Nations Environment Assembly and what they mean for youth engagement.",
    author: "CYMG Policy Team",
    date: "2024-04-15",
    readTime: "8 min",
    tags: ["Resolution Recap Series", "UNEA-6", "Policy"],
    featured: true,
    featuredImage: "/images/bento/resolution-recap.jpg",
  },
  {
    slug: "youth-environment-assembly-2024-recap",
    title: "Global Youth Environment Assembly 2024: Voices from the Floor",
    excerpt:
    "Highlights from the second Global Youth Environment Assembly, where delegates from over 100 countries shaped the youth declaration for UNEA-6.",
    author: "CYMG Communications",
    date: "2024-03-01",
    readTime: "6 min",
    tags: ["YEA", "Youth Declaration", "UNEA-6"],
    featured: false,
    featuredImage: "/images/photo-essay/yea-session.jpg",
  },
  {
    slug: "plastics-treaty-youth-perspectives",
    title: "Youth Perspectives on the International Plastics Treaty",
    excerpt:
    "How the Youth Plastic Action Network and partners are ensuring youth voices are heard in the negotiation of a legally binding instrument on plastic pollution.",
    author: "YPAN Focal Points",
    date: "2024-02-20",
    readTime: "5 min",
    tags: ["Plastics", "YPAN", "Treaty Negotiations"],
    featured: false,
    featuredImage: "/images/bento/chemicals-waste.jpg",
  },
];

// ─── Social Links (verified) ─────────────────────────────────────
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/cymgunep",
  twitter: "https://x.com/cymgunep",
  youtube: "https://youtube.com/@cymgunep",
  linkedin: "https://linkedin.com/company/cymgunep",
  facebook: "https://facebook.com/cymgunep",
} as const;

// ─── Stats ───────────────────────────────────────────────────────
export const STATS = {
  foundingYear: 2012,
  workingGroups: 13,
  regions: "6+",
  tagline: "Youth Leading Environmental Action",
} as const;
