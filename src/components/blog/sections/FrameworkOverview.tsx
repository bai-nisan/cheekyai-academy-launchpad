
import { Rocket, Wrench, BookOpen, Code2, CheckCircle2, ArrowRight } from "lucide-react";

export const FrameworkOverview = () => {
  const coreComponents = [
    { 
      title: "Environment Preparation", 
      desc: "Standardizing your codebase for AI assistance", 
      icon: <Wrench className="h-5 w-5" />, 
      sectionId: "environment-preparation"
    },
    { 
      title: "AI-Assisted Planning", 
      desc: "Creating technical specifications with AI", 
      icon: <BookOpen className="h-5 w-5" />, 
      sectionId: "ai-assisted-planning"
    },
    { 
      title: "Task Decomposition", 
      desc: "Breaking down work into AI-executable chunks", 
      icon: <Code2 className="h-5 w-5" />, 
      sectionId: "task-decomposition"
    },
    { 
      title: "Execution Workflow", 
      desc: "Implementing tasks with AI assistance", 
      icon: <Rocket className="h-5 w-5" />, 
      sectionId: "execution-workflow"
    },
    { 
      title: "Best Practices", 
      desc: "Ensuring quality and consistency", 
      icon: <CheckCircle2 className="h-5 w-5" />, 
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
    <section id="framework-overview">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <Rocket className="h-8 w-8 text-blue-400" />
        Framework Overview
      </h2>
      
      <p className="text-slate-300 mb-8 leading-relaxed text-lg">
        This framework outlines a comprehensive approach to integrating AI-first development workflows 
        across any codebase and planning process. It guides technical leads and senior developers in 
        establishing environment standards, aligning processes, and enabling AI-powered task execution.
      </p>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-slate-200 mb-6">Core Components</h3>
        
        <div className="space-y-4">
          {coreComponents.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex items-start gap-4 p-5 rounded-lg bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-200 cursor-pointer"
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
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-blue-400 font-bold text-lg w-6">{idx + 1}.</span>
                <div className="text-blue-400 bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  {item.icon}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-slate-200 text-lg mb-1">
                  {item.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
              
              <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
