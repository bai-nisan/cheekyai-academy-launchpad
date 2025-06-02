
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_SECTIONS } from "./constants";

interface HorizontalTableOfContentsProps {
  activeSection: string;
}

export const HorizontalTableOfContents = ({ activeSection }: HorizontalTableOfContentsProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="relative">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-xl blur-sm"></div>
          
          <Card className="relative bg-slate-900/70 backdrop-blur-xl border-slate-700/50 shadow-2xl overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-900/20"></div>
            
            <CardContent className="relative p-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {BLOG_SECTIONS.filter(section => section.level === 2).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-slate-100 shadow-lg border border-blue-500/40 backdrop-blur-sm"
                        : "hover:bg-slate-800/60 text-slate-300 hover:text-slate-100 hover:shadow-md hover:border hover:border-slate-600/30 bg-slate-800/20"
                    }`}
                  >
                    <span className={`relative ${
                      activeSection === section.id 
                        ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold" 
                        : "group-hover:text-slate-100"
                    }`}>
                      {section.title}
                    </span>
                    
                    {/* Active Section Indicator */}
                    {activeSection === section.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
