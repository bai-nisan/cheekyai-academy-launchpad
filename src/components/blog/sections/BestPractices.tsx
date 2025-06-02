import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const BestPractices = () => {
  return (
    <section id="best-practices" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <CheckCircle2 className="h-8 w-8 text-blue-400" />
        Best Practices
      </h2>
      
      <Tabs defaultValue="planning" className="mb-6">
        <TabsList className="grid grid-cols-4 w-full bg-slate-800/60">
          <TabsTrigger value="planning">Planning Phase</TabsTrigger>
          <TabsTrigger value="decomposition">Task Decomposition</TabsTrigger>
          <TabsTrigger value="execution">Execution Phase</TabsTrigger>
          <TabsTrigger value="general">General Guidelines</TabsTrigger>
        </TabsList>

        <PlanningPhase />
        <TaskDecompositionPractices />
        <ExecutionPhase />
        <GeneralGuidelines />
      </Tabs>
    </section>
  );
};

const PlanningPhase = () => (
  <TabsContent value="planning" className="mt-6">
    <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <CardContent className="p-6">
        <div className="grid gap-3">
          {[
            { title: "Rich Context = Better Results", desc: "Include all relevant documentation" },
            { title: "Use Strong Examples", desc: "Good templates guide AI output" },
            { title: "Set Clear Boundaries", desc: "Be explicit about planning vs. coding" },
            { title: "Model Selection", desc: "Use reasoning models for complex planning" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-slate-200">{item.title}:</span>
                <span className="text-slate-300 ml-2">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </TabsContent>
);

const TaskDecompositionPractices = () => (
  <TabsContent value="decomposition" className="mt-6">
    <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <CardContent className="p-6">
        <div className="grid gap-3">
          {[
            { title: "Clear Scope", desc: "Each task takes 30-120 minutes" },
            { title: "Full Context", desc: "Include all necessary references" },
            { title: "External Documentation", desc: "Use Context7 to inject third-party API docs" },
            { title: "Define 'Done'", desc: "Clear success criteria" },
            { title: "Maintain Flexibility", desc: "Update as requirements change" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-slate-200">{item.title}:</span>
                <span className="text-slate-300 ml-2">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </TabsContent>
);

const ExecutionPhase = () => (
  <TabsContent value="execution" className="mt-6">
    <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <CardContent className="p-6">
        <div className="grid gap-3">
          {[
            { title: "Trust but Verify", desc: "Review AI-generated code" },
            { title: "Maintain Standards", desc: "Ensure consistency with team patterns" },
            { title: "Test Coverage", desc: "Validate all implementations" },
            { title: "Document Decisions", desc: "Track why choices were made" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-slate-200">{item.title}:</span>
                <span className="text-slate-300 ml-2">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </TabsContent>
);

const GeneralGuidelines = () => (
  <TabsContent value="general" className="mt-6">
    <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <CardContent className="p-6">
        <div className="grid gap-3">
          {[
            { title: "Start Small", desc: "Begin with low-risk features" },
            { title: "Iterate Frequently", desc: "Refine prompts and processes" },
            { title: "Share Knowledge", desc: "Document successful patterns" },
            { title: "Measure Impact", desc: "Track productivity improvements" },
            { title: "Stay Current", desc: "Use Context7 to keep external API documentation up-to-date" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-slate-200">{item.title}:</span>
                <span className="text-slate-300 ml-2">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </TabsContent>
); 