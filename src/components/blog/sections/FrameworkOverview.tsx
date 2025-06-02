
import { Target } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  EnvironmentPreparation,
  AIAssistedPlanning,
  TaskDecomposition,
  ExecutionWorkflow,
  BestPractices
} from "./";

export const FrameworkOverview = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const coreComponents = [
    { 
      title: "Environment Preparation", 
      desc: "Standardizing your codebase for AI assistance", 
      sectionId: "environment-preparation",
      value: "environment-preparation"
    },
    { 
      title: "AI-Assisted Planning", 
      desc: "Creating technical specifications with AI", 
      sectionId: "ai-assisted-planning",
      value: "ai-assisted-planning"
    },
    { 
      title: "Task Decomposition", 
      desc: "Breaking down work into AI-executable chunks", 
      sectionId: "task-decomposition",
      value: "task-decomposition"
    },
    { 
      title: "Execution Workflow", 
      desc: "Implementing tasks with AI assistance", 
      sectionId: "execution-workflow",
      value: "execution-workflow"
    },
    { 
      title: "Best Practices", 
      desc: "Ensuring quality and consistency", 
      sectionId: "best-practices",
      value: "best-practices"
    }
  ];

  const handleComponentClick = (value: string) => {
    if (activeTab === value) {
      setActiveTab(null);
    } else {
      setActiveTab(value);
    }
  };

  const renderTabContent = (value: string) => {
    switch (value) {
      case "environment-preparation":
        return <EnvironmentPreparation />;
      case "ai-assisted-planning":
        return <AIAssistedPlanning />;
      case "task-decomposition":
        return <TaskDecomposition />;
      case "execution-workflow":
        return <ExecutionWorkflow />;
      case "best-practices":
        return <BestPractices />;
      default:
        return null;
    }
  };

  return (
    <section id="framework-overview">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <Target className="h-8 w-8 text-blue-400" />
        Framework Overview
      </h2>
      
      <p className="text-slate-300 mb-8 leading-relaxed text-lg">
        This framework outlines a comprehensive approach to integrating AI-first development workflows 
        across any codebase and planning process. It guides technical leads and senior developers in 
        establishing environment standards, aligning processes, and enabling AI-powered task execution.
      </p>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-slate-200 mb-6">Core Components</h3>
        
        <div className="space-y-4 mb-8">
          {coreComponents.map((item, idx) => (
            <div 
              key={idx} 
              className={`group flex items-start gap-4 p-5 rounded-lg border transition-all duration-200 cursor-pointer ${
                activeTab === item.value 
                  ? 'bg-slate-800/60 border-blue-400/50' 
                  : 'bg-slate-800/40 hover:bg-slate-800/60 border-slate-700/30 hover:border-slate-600/50'
              }`}
              onClick={() => handleComponentClick(item.value)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleComponentClick(item.value);
                }
              }}
              aria-label={`Toggle ${item.title} section`}
              aria-expanded={activeTab === item.value}
            >
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className={`font-bold text-lg w-6 transition-colors ${
                  activeTab === item.value ? 'text-blue-300' : 'text-blue-400'
                }`}>
                  {idx + 1}.
                </span>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className={`font-semibold text-lg mb-1 transition-colors ${
                  activeTab === item.value ? 'text-blue-200' : 'text-slate-200'
                }`}>
                  {item.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
              
              <div className={`flex-shrink-0 transition-transform duration-200 ${
                activeTab === item.value ? 'rotate-90' : ''
              }`}>
                <div className={`h-5 w-5 transition-colors ${
                  activeTab === item.value ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400'
                }`}>
                  <svg 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabbed Content Area */}
        {activeTab && (
          <div className="w-full">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 border border-slate-700/50">
                {coreComponents.map((item) => (
                  <TabsTrigger 
                    key={item.value} 
                    value={item.value}
                    className="text-xs sm:text-sm data-[state=active]:bg-blue-600/20 data-[state=active]:text-blue-300 text-slate-400 hover:text-slate-200"
                  >
                    {item.title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {coreComponents.map((item) => (
                <TabsContent 
                  key={item.value} 
                  value={item.value} 
                  className="mt-6 w-full"
                >
                  <div className="bg-slate-900/40 rounded-lg p-6 border border-slate-700/30">
                    {renderTabContent(item.value)}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}
      </div>
    </section>
  );
};
