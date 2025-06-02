
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
  const [activeTab, setActiveTab] = useState("environment-preparation");

  const coreComponents = [
    { 
      title: "Environment Preparation", 
      desc: "Standardizing your codebase for AI assistance", 
      value: "environment-preparation"
    },
    { 
      title: "AI-Assisted Planning", 
      desc: "Creating technical specifications with AI", 
      value: "ai-assisted-planning"
    },
    { 
      title: "Task Decomposition", 
      desc: "Breaking down work into AI-executable chunks", 
      value: "task-decomposition"
    },
    { 
      title: "Execution Workflow", 
      desc: "Implementing tasks with AI assistance", 
      value: "execution-workflow"
    },
    { 
      title: "Best Practices", 
      desc: "Ensuring quality and consistency", 
      value: "best-practices"
    }
  ];

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
        
        <div className="w-full">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Professional Tab Bar with Enhanced Styling */}
            <div className="relative mb-6">
              {/* Gradient background container */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-slate-800/40 to-slate-800/60 rounded-xl blur-sm"></div>
              
              <TabsList className="relative w-full h-auto p-2 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-lg grid grid-cols-5 gap-1">
                {coreComponents.map((item) => (
                  <TabsTrigger 
                    key={item.value} 
                    value={item.value}
                    className="relative h-12 text-xs sm:text-sm font-medium transition-all duration-300 ease-out rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 data-[state=active]:border-blue-400/50 text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 hover:shadow-md hover:border-slate-600/30 border border-transparent backdrop-blur-sm"
                  >
                    <span className="relative z-10 font-semibold tracking-wide">
                      {item.title.split(' ')[0]}
                    </span>
                    {/* Active tab indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300"></div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {/* Enhanced Content Area */}
            {coreComponents.map((item) => (
              <TabsContent 
                key={item.value} 
                value={item.value} 
                className="mt-0 w-full animate-fade-in"
              >
                {/* Professional content container with gradient border */}
                <div className="relative">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-cyan-500/20 rounded-xl blur-sm"></div>
                  
                  {/* Content container */}
                  <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl rounded-xl p-8 border border-slate-700/40 shadow-2xl overflow-hidden">
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 via-transparent to-slate-900/20 rounded-xl"></div>
                    
                    {/* Content with enhanced spacing and typography */}
                    <div className="relative">
                      {/* Content area with professional typography */}
                      <div className="prose prose-lg max-w-none prose-slate prose-invert">
                        {renderTabContent(item.value)}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
