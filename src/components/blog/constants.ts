import { BlogSection } from './types';

export const BLOG_SECTIONS: BlogSection[] = [
  { id: "framework-overview", title: "Framework Overview", level: 2 },
  { id: "environment-preparation", title: "Environment Preparation", level: 2 },
  { id: "tool-setup", title: "Tool Setup", level: 3 },
  { id: "standards-requirements", title: "Part 1: Standards & Requirements", level: 3 },
  { id: "implementation", title: "Part 2: Implementation with AI Tools", level: 3 },
  { id: "ai-assisted-planning", title: "AI-Assisted Planning", level: 2 },
  { id: "task-decomposition", title: "Task Decomposition", level: 2 },
  { id: "execution-workflow", title: "Execution Workflow", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
  { id: "resources-community", title: "Resources & Community", level: 2 },
];

export const TOOLS_LIST = [
  { name: "MCP Atlassian", desc: "For project management integration", link: null },
  { name: "Context7", desc: "Knowledge and documentation injection for enhanced task context", link: "https://github.com/upstash/context7" },
  { name: "Task Master", desc: "PRD to subtask planning automation", link: null },
  { name: "Cursor", desc: "AI-powered IDE with context awareness", link: null }
];

export const KEY_FIGURES = [
  { handle: "@mntruell", desc: "Cursor CEO, development workflows" },
  { handle: "@amanrsanger", desc: "Cursor co-founder, implementation patterns" },
  { handle: "@sualehasif996", desc: "Architecture insights" },
  { handle: "@arvidxyz", desc: "Startup workflows and AI toolchains" },
  { handle: "@eyaltoledano", desc: "Task Master creator, agent development" },
  { handle: "Andrej Karpathy", desc: "YouTube - Understanding LLM architecture" }
];

export const LEARNING_RESOURCES = [
  { text: "Cursor Forum", link: "https://forum.cursor.sh/", desc: "Best practices and use cases" },
  { text: "MCP Server Registry", link: "https://github.com/modelcontextprotocol/servers", desc: "Available integrations" },
  { text: "Task Master Documentation", link: "https://github.com/eyaltoledano/task-master", desc: "PRD to task automation" },
  { text: "Context7", link: "https://github.com/upstash/context7", desc: "Documentation injection for AI context" }
]; 