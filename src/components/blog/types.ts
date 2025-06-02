// Blog component type definitions

export interface BlogSection {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface CodeBlockProps {
  code: string;
  language?: string;
  collapsible?: boolean;
  title?: string;
}

export interface ShareLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface BlogMetadata {
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
} 