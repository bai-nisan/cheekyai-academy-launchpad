import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, ChevronRight, Code2, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "../CodeBlock";

export const ExecutionWorkflow = () => {
  return (
    <section id="execution-workflow" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <Rocket className="h-8 w-8 text-blue-400" />
        Execution Workflow
      </h2>
      
      <h3 className="text-2xl font-semibold mb-4 text-slate-200">Implementing with AI</h3>
      
      <Card className="mb-6 bg-slate-800/80 backdrop-blur-md border-slate-600/50 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-200">🎯 Methodology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300">
            Developers use AI assistance to complete each self-contained task efficiently.
          </p>
        </CardContent>
      </Card>

      <Process />
    </section>
  );
};

const Process = () => {
  const processSteps = [
    { 
      step: 1, 
      title: "Task Selection",
      icon: <ChevronRight className="h-5 w-5" />,
      content: (
        <CodeBlock
          code={`"Please help me implement task 3 from tasks/task_003.txt"

# If the task involves external APIs:
"This task requires Twilio integration. Use Context7 to load:
- Twilio SMS API documentation
- Webhook security requirements
- Rate limiting guidelines
Then implement the notification service following our patterns"`}
          language="bash"
        />
      )
    },
    {
      step: 2,
      title: "AI-Assisted Implementation",
      icon: <Code2 className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">The AI will:</p>
          <div className="grid gap-3">
            {[
              "Read task context and requirements",
              "Suggest implementation approach",
              "Generate code following standards",
              "Validate against constraints",
              "Include tests",
              "Use Context7 to reference current API documentation during coding"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      step: 3,
      title: "Progress Tracking",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: (
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">✓</Badge>
            <span className="text-slate-300">Mark tasks as complete</span>
          </li>
          <li className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">↻</Badge>
            <span className="text-slate-300">Update dependencies</span>
          </li>
          <li className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-amber-500/20 text-amber-300 border-amber-500/30">⚠</Badge>
            <span className="text-slate-300">Track blockers</span>
          </li>
        </ul>
      )
    },
    {
      step: 4,
      title: "Continuous Refinement",
      icon: <Rocket className="h-5 w-5" />,
      content: (
        <CodeBlock
          code={`"I've completed task 4. What's next?"
"Task 5 is blocked by API changes. Please update it."
"The AWS SDK documentation has been updated. Use Context7 to refresh the S3 integration context for task 8."`}
          language="bash"
        />
      )
    }
  ];

  return (
    <>
      <h4 className="text-xl font-medium mb-3 text-slate-200">🔄 Process</h4>

      <div className="grid gap-4 mb-6">
        {processSteps.map((item) => (
          <Card key={item.step} className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold mb-3 text-slate-200 text-lg">{item.step}. {item.title}</h5>
                  {item.content}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}; 