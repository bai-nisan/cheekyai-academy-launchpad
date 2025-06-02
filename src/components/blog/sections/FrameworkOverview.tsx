
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Wrench, BookOpen, Code2, CheckCircle2 } from "lucide-react";

export const FrameworkOverview = () => {
  const coreComponents = [
    { 
      title: "Environment Preparation", 
      desc: "Standardizing your codebase for AI assistance", 
      icon: <Wrench className="h-5 w-5" />, 
      color: "from-blue-600/30 to-blue-700/30 border-blue-500/50 hover:from-blue-600/40 hover:to-blue-700/40",
      sectionId: "environment-preparation"
    },
    { 
      title: "AI-Assisted Planning", 
      desc: "Creating technical specifications with AI", 
      icon: <BookOpen className="h-5 w-5" />, 
      color: "from-purple-600/30 to-purple-700/30 border-purple-500/50 hover:from-purple-600/40 hover:to-purple-700/40",
      sectionId: "ai-assisted-planning"
    },
    { 
      title: "Task Decomposition", 
      desc: "Breaking down work into AI-executable chunks", 
      icon: <Code2 className="h-5 w-5" />, 
      color: "from-green-600/30 to-green-700/30 border-green-500/50 hover:from-green-600/40 hover:to-green-700/40",
      sectionId: "task-decomposition"
    },
    { 
      title: "Execution Workflow", 
      desc: "Implementing tasks with AI assistance", 
      icon: <Rocket className="h-5 w-5" />, 
      color: "from-orange-600/30 to-orange-700/30 border-orange-500/50 hover:from-orange-600/40 hover:to-orange-700/40",
      sectionId: "execution-workflow"
    },
    { 
      title: "Best Practices", 
      desc: "Ensuring quality and consistency", 
      icon: <CheckCircle2 className="h-5 w-5" />, 
      color: "from-cyan-600/30 to-cyan-700/30 border-cyan-500/50 hover:from-cyan-600/40 hover:to-cyan-700/40",
      sectionId: "best-practices"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="framework-overview" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <Rocket className="h-8 w-8 text-blue-400" />
        Framework Overview
      </h2>
      <p className="text-slate-300 mb-6 leading-relaxed text-lg">
        This framework outlines a comprehensive approach to integrating AI-first development workflows 
        across any codebase and planning process. It guides technical leads and senior developers in 
        establishing environment standards, aligning processes, and enabling AI-powered task execution.
      </p>
      
      <Card className="mb-6 bg-slate-800/80 backdrop-blur-md border-slate-600/50 shadow-2xl">
        <CardHeader className="pb-6 border-b border-slate-700/50">
          <CardTitle className="text-xl font-semibold text-white">Core Components</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4">
            {coreComponents.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br ${item.color} border backdrop-blur-sm hover:scale-[1.02] transition-all duration-200 cursor-pointer group`}
                onClick={() => scrollToSection(item.sectionId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToSection(item.sectionId);
                  }
                }}
                aria-label={`Navigate to ${item.title} section`}
              >
                <div className="text-white bg-white/20 p-2.5 rounded-lg backdrop-blur-sm group-hover:bg-white/25 transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-lg flex items-center gap-2">
                    <span className="text-blue-400 font-bold">{idx + 1}.</span>
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-200/90 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}; 
