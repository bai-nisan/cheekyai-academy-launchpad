
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TableOfContentsProps {
  activeSection: string;
}

const sections = [
  { id: "framework-overview", title: "Framework Overview", level: 2 },
  { id: "environment-preparation", title: "Environment Preparation", level: 2 },
  { id: "tool-setup", title: "Tool Setup", level: 3 },
  { id: "standards-requirements", title: "Standards & Requirements", level: 3 },
  { id: "implementation", title: "Implementation", level: 3 },
  { id: "ai-assisted-planning", title: "AI-Assisted Planning", level: 2 },
  { id: "task-decomposition", title: "Task Decomposition", level: 2 },
  { id: "execution-workflow", title: "Execution Workflow", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
  { id: "resources-community", title: "Resources & Community", level: 2 },
];

export const TableOfContents = ({ activeSection }: TableOfContentsProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Card className="w-full bg-slate-900/30 backdrop-blur-sm border-slate-700/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-200">
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                section.level === 3 ? "ml-4 text-xs" : ""
              } ${
                activeSection === section.id
                  ? "bg-slate-700/60 text-slate-100 shadow-md border border-slate-600/50"
                  : "hover:bg-slate-800/40 text-slate-300 hover:text-slate-200"
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
};
