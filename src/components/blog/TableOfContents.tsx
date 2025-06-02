
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
    <Card className="w-full bg-slate-800/80 backdrop-blur-sm border-slate-700 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "hover:bg-slate-700 text-slate-300 hover:text-slate-200"
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
