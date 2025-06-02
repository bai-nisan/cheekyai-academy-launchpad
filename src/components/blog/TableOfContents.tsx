
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BLOG_SECTIONS } from "./constants";

interface TableOfContentsProps {
  activeSection: string;
}

export const TableOfContents = ({ activeSection }: TableOfContentsProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-xl blur-sm"></div>
      
      <Card className="relative w-full bg-slate-900/70 backdrop-blur-xl border-slate-700/50 shadow-2xl overflow-hidden">
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-900/20"></div>
        
        <CardHeader className="pb-4 relative">
          <CardTitle className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Table of Contents
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative">
          <nav className="space-y-1">
            {BLOG_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left text-sm py-3 px-4 rounded-lg transition-all duration-300 group ${
                  section.level === 3 ? "ml-4 text-xs" : ""
                } ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-slate-100 shadow-lg border border-blue-500/30 backdrop-blur-sm"
                    : "hover:bg-slate-800/60 text-slate-300 hover:text-slate-100 hover:shadow-md hover:border hover:border-slate-600/30"
                }`}
              >
                <span className={`relative ${
                  activeSection === section.id 
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium" 
                    : "group-hover:text-slate-100"
                }`}>
                  {section.title}
                </span>
                
                {/* Active Section Indicator */}
                {activeSection === section.id && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r-full"></div>
                )}
              </button>
            ))}
          </nav>
        </CardContent>
      </Card>
    </div>
  );
};
