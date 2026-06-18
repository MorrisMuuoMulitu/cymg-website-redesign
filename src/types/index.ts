export interface WorkingGroup {
  id: string;
  name: string;
  slug: string;
  cluster: 'pollution' | 'nature' | 'policy';
  description: string;
  mission: string;
  highlights: { title: string; excerpt: string; image?: string }[];
  engagements: { title: string; description: string; image?: string }[];
  focalPoints: { name: string; country: string; email: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  roleCategory: 'global-coordinator' | 'regional-facilitator' | 'thematic-facilitator' | 'operations';
  role: string;
  region?: string;
  workingGroup?: string;
  country: string;
  email: string;
  photo?: string;
  bio?: string;
  isVacant?: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  status: 'live' | 'coming-soon';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: { name: string; avatar?: string; bio?: string };
  tags: string[];
  publishDate: string;
  readTime: number;
  relatedSlugs?: string[];
}

export interface Document {
  id: string;
  title: string;
  slug: string;
  type: 'policy' | 'resolution' | 'report' | 'declaration';
  year: number;
  relatedMEA?: string;
  description: string;
  fileSize: string;
  fileUrl?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  category: 'working-group' | 'unea' | 'mea' | 'yea';
  description: string;
  location: string;
  timezone: string;
}

export interface Region {
  id: string;
  name: string;
  slug: string;
  type: 'standard' | 'special';
  facilitator?: TeamMember;
  initiatives: string[];
  events: { title: string; date: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export type ClusterColor = {
  pollution: { bg: string; text: string; };
  nature: { bg: string; text: string; };
  policy: { bg: string; text: string; };
};
