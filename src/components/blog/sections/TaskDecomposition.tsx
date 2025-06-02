
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "../CodeBlock";

export const TaskDecomposition = () => {
  return (
    <section id="task-decomposition" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <GitBranch className="h-8 w-8 text-blue-400" />
        Task Decomposition
      </h2>
      
      <h3 className="text-2xl font-semibold mb-4 text-slate-200">Breaking Down Work</h3>
      
      <Card className="mb-6 bg-slate-800/80 backdrop-blur-md border-slate-600/50 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-200">Methodology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300">
            Transform specifications into executable, self-contained tasks that can be completed independently.
          </p>
        </CardContent>
      </Card>

      <WorkflowProcess />
      <Context7Enhancement />
    </section>
  );
};

const WorkflowProcess = () => (
  <>
    <h4 className="text-xl font-medium mb-3 text-slate-200">Workflow Process</h4>

    <Tabs defaultValue="parse" className="mb-6">
      <TabsList className="grid grid-cols-5 w-full bg-slate-800/60">
        <TabsTrigger value="parse">1. Parse</TabsTrigger>
        <TabsTrigger value="generate">2. Generate</TabsTrigger>
        <TabsTrigger value="create">3. Create</TabsTrigger>
        <TabsTrigger value="ensure">4. Ensure</TabsTrigger>
        <TabsTrigger value="refine">5. Refine</TabsTrigger>
      </TabsList>

      <TabsContent value="parse" className="mt-6">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-lg text-slate-200">1. Parse Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`# Save specification to designated folder
scripts/specifications/feature_spec.md

# Use Task Master to parse
"Can you parse my specification at scripts/specifications/feature_spec.md?"`}
              language="bash"
            />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="generate" className="mt-6">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-lg text-slate-200">2. Generate Task Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Creates `tasks.json` with initial breakdown
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Each task scoped to 30-120 minutes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Clear dependencies identified
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="create" className="mt-6">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-lg text-slate-200">3. Create Individual Task Files</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`"Please generate individual task files from tasks.json"`}
              language="bash"
            />
            <p className="text-slate-300 mt-3">Output structure:</p>
            <div className="mt-2 p-3 bg-slate-900/50 rounded-lg">
              <ul className="space-y-1 text-sm text-slate-400 font-mono">
                <li>• tasks/task_001.txt</li>
                <li>• tasks/task_002.txt</li>
                <li>• tasks/task_003.txt</li>
                <li>• ...</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="ensure" className="mt-6">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-lg text-slate-200">4. Ensure Task Completeness</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 mb-3">Each task must include:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Clear objective",
                "File references (@models/User.ts)",
                "Documentation links (@docs/api-guide.md)",
                "External API documentation (via Context7)",
                "Service dependencies",
                "Success criteria / test approach"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="refine" className="mt-6">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-lg text-slate-200">5. Refine Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`# Break down complex tasks
"Task 3 seems too broad. Can you split it into subtasks?"

# Add specificity
"Please expand task 5 with focus on validation, error states, and API integration"

# Add documentation context with Context7
"Use Context7 to add relevant documentation to task 7:
- Search for 'authentication' docs from Auth0
- Include our internal auth service patterns
- Add the JWT validation requirements
This task needs external API documentation context"

# Update for changes
"We've switched from SQL to NoSQL. Please update all database tasks"`}
              language="bash"
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </>
);

const Context7Enhancement = () => (
  <>
    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">Using Context7 for Task Enhancement:</h4>
    
    <Card className="bg-blue-950/20 border-blue-500/30">
      <CardContent className="p-6">
        <CodeBlock
          code={`# Example: Enriching a payment integration task
"For task 12 (payment processing):
1. Use Context7 to fetch Stripe API documentation
2. Filter for 'payment intents' and 'webhooks'
3. Include our payment service patterns from @services/payment/*
4. Add PCI compliance requirements from @docs/security/pci.md

Update the task file with all relevant context"

# Context7 helps ensure each task has:
# - Latest third-party API documentation
# - Internal implementation patterns
# - Security/compliance requirements
# - Related code examples`}
          language="bash"
        />
      </CardContent>
    </Card>
  </>
);
