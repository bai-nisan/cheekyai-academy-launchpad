
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, CheckCircle2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "../CodeBlock";

export const TaskDecomposition = () => {
  return (
    <section id="task-decomposition" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <GitBranch className="h-8 w-8 text-blue-400" />
        Task Decomposition
      </h2>
      
      <div className="mb-8">
        <p className="text-slate-300 mb-6 leading-relaxed text-lg">
          Transform comprehensive specifications into executable, self-contained tasks that can be completed independently with AI assistance. In the world of AI-first development, the difference between scattered, confusing work and laser-focused productivity comes down to one thing: <strong className="text-slate-100">proper task decomposition</strong>. After working with hundreds of development teams using AI tools, I've discovered that spending time breaking down work properly can turn weeks of confusion into days of focused execution.
        </p>
        
        <p className="text-slate-300 mb-4 leading-relaxed">
          This guide covers the essential methodology for transforming any specification into AI-executable tasks: structured breakdown, comprehensive context integration, and systematic refinement. Let's dive in.
        </p>
      </div>
      
      <BreakingDownWork />
      <ImplementationWorkflow />
      <TaskManagementBestPractices />
    </section>
  );
};

const BreakingDownWork = () => (
  <div id="breaking-down-work" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      Breaking Down Work
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Large specifications are like complex blueprints - without proper decomposition, even the best AI assistance can't navigate the interconnected requirements effectively. When AI agents encounter monolithic specifications, they struggle to maintain context across multiple concerns, leading to inconsistent implementations and missed requirements.
    </p>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      The solution? A systematic approach to <code className="bg-slate-800 px-2 py-1 rounded text-blue-300">task decomposition</code> that creates focused, executable work units.
    </p>

    <h4 className="text-xl font-medium mb-4 text-slate-200">Methodology</h4>
    
    <p className="text-slate-300 mb-4">
      Transform specifications into executable, self-contained tasks that can be completed independently by development team members using AI assistance.
    </p>

    <Card className="mb-6 bg-slate-800/80 backdrop-blur-md border-slate-600/50 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-slate-200">Core Principles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Each task scoped to 30-120 minutes for optimal focus",
            "Self-contained with minimal external dependencies", 
            "Clear success criteria and testing approach",
            "Comprehensive context including documentation and API references",
            "External API documentation integration via Context7",
            "Clear objective and scope definition"
          ].map((principle, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-300">{principle}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    <h4 className="text-xl font-medium mb-4 text-slate-200">Task Structure Requirements</h4>
    
    <CodeBlock
      title="Essential Task Components"
      code={`# Each task must include:

## Clear Objective
- Specific, measurable outcome
- Scope boundaries clearly defined
- Success criteria explicitly stated

## Context References
- File references using @ mentions (@models/User.ts)
- Documentation links (@docs/api-guide.md)  
- External API documentation via Context7
- Service dependencies documented

## Implementation Details
- Step-by-step approach
- Testing and validation requirements
- Integration points with other tasks`}
      language="markdown"
    />

    <Alert className="my-6 bg-blue-950/30 border-blue-500/30">
      <CheckCircle2 className="h-4 w-4 text-blue-400" />
      <AlertTitle className="text-blue-200">Why This Structure Matters</AlertTitle>
      <AlertDescription className="text-blue-100/80">
        Consider this scenario: Your team is building a payment system. Without proper task decomposition, AI might suggest implementing payment processing, webhook handling, and error management all in one go. By breaking this into focused tasks (payment intent creation, webhook endpoint, error handling service), each team member can work independently with AI assistance while maintaining system coherence.
      </AlertDescription>
    </Alert>
  </div>
);

const ImplementationWorkflow = () => (
  <div id="implementation-workflow" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      Implementation Workflow
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      The key to successful task decomposition lies in systematic workflow execution. Using tools like{" "}
      <strong className="text-slate-100">Task Master</strong> for automated breakdown and{" "}
      <strong className="text-slate-100">Context7</strong> for comprehensive documentation integration, you can transform any specification into executable work units.
    </p>

    <h4 className="text-xl font-medium mb-4 text-slate-200">Phase 1: Specification Parsing</h4>
    
    <CodeBlock
      title="Initial Setup and Parsing"
      code={`# Save specification to designated folder
mkdir -p scripts/specifications
cp feature_spec.md scripts/specifications/feature_spec.md

# Use Task Master to parse specification
"Can you parse my specification at scripts/specifications/feature_spec.md?"`}
      language="bash"
    />

    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">Phase 2: Task Structure Generation</h4>
    
    <p className="text-slate-300 mb-4">
      Task Master creates structured breakdown with intelligent scoping:
    </p>

    <Card className="mb-6 bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Creates tasks.json with initial breakdown",
            "Each task scoped to 30-120 minutes",
            "Clear dependencies identified", 
            "Logical execution order established"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="text-sm text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">Phase 3: Individual Task File Creation</h4>
    
    <CodeBlock
      title="Generate Detailed Task Files"
      code={`# Generate individual task files from breakdown
"Please generate individual task files from tasks.json"`}
      language="bash"
    />
    
    <p className="text-slate-300 mt-3 mb-4">Output structure:</p>
    <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
      <ul className="space-y-1 text-sm text-slate-400 font-mono">
        <li>• tasks/task_001.txt</li>
        <li>• tasks/task_002.txt</li>
        <li>• tasks/task_003.txt</li>
        <li>• etc.</li>
      </ul>
    </div>

    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">Phase 4: Task Completeness Validation</h4>
    
    <p className="text-slate-300 mb-4">
      Ensure each task includes all necessary components for independent execution:
    </p>

    <div className="grid md:grid-cols-2 gap-3 mb-6">
      {[
        "Clear objective: Specific, measurable outcome",
        "File references: Direct @ mentions (@models/User.ts)",
        "Documentation links: Relevant guides (@docs/api-guide.md)",
        "External API documentation: Context7 integration for third-party APIs",
        "Service dependencies: Clear integration requirements",
        "Success criteria: Specific validation and test approach"
      ].map((item, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-slate-300">{item}</span>
        </div>
      ))}
    </div>

    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">Phase 5: Task Refinement & Enhancement</h4>
    
    <p className="text-slate-300 mb-4">
      Systematically refine tasks for optimal execution:
    </p>

    <CodeBlock
      title="Task Refinement Examples"
      code={`# Break down complex tasks
"Task 3 seems too broad. Can you split it into subtasks?"

# Add specificity and detail
"Please expand task 5 with focus on validation, error states, and API integration"

# Add documentation context with Context7
"Use Context7 to add relevant documentation to task 7:
- Search for 'authentication' docs from Auth0
- Include our internal auth service patterns
- Add the JWT validation requirements
This task needs external API documentation context"

# Update for architectural changes
"We've switched from SQL to NoSQL. Please update all database tasks"`}
      language="bash"
      collapsible={true}
    />

    <Context7Integration />
  </div>
);

const Context7Integration = () => (
  <>
    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">Context7 Integration for Task Enhancement</h4>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Use Context7 to ensure tasks have comprehensive external API context and documentation integration. This transforms isolated tasks into well-informed work units that understand both internal patterns and external requirements.
    </p>
    
    <Card className="bg-blue-950/20 border-blue-500/30 mb-6">
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

    <h4 className="text-xl font-medium mb-4 text-slate-200">Context Integration Benefits</h4>
    
    <div className="grid md:grid-cols-2 gap-3 mb-6">
      {[
        "Latest third-party API documentation automatically included",
        "Internal implementation patterns referenced consistently",
        "Security and compliance requirements embedded",
        "Related code examples and patterns available"
      ].map((benefit, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-slate-300">{benefit}</span>
        </div>
      ))}
    </div>
  </>
);

const TaskManagementBestPractices = () => (
  <div id="task-management-best-practices" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      Task Management Best Practices
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Effective task decomposition extends beyond initial breakdown. Successful implementation requires ongoing management of scope, dependencies, and quality assurance to ensure AI-assisted development maintains both velocity and coherence.
    </p>

    <Tabs defaultValue="scope" className="mb-6">
      <TabsList className="grid grid-cols-4 w-full bg-slate-800/60">
        <TabsTrigger value="scope">Scope Management</TabsTrigger>
        <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
        <TabsTrigger value="quality">Quality Assurance</TabsTrigger>
        <TabsTrigger value="example">Practice Example</TabsTrigger>
      </TabsList>
      
      <TabsContent value="scope">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-lg text-slate-200">Scope Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Maintain 30-120 minute completion window",
                "Avoid tasks requiring multiple team members",
                "Ensure clear boundaries between related tasks", 
                "Include buffer time for testing and validation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="dependencies">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-lg text-slate-200">Dependency Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Document clear execution order",
                "Identify blocking dependencies early",
                "Create parallel execution opportunities where possible",
                "Plan for integration points between tasks"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="quality">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-lg text-slate-200">Quality Assurance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Include specific testing requirements in each task",
                "Define clear success criteria and validation steps",
                "Ensure external API integration is properly documented",
                "Maintain traceability back to original specifications"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="example">
        <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-lg text-slate-200">Task Decomposition in Practice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 mb-4">
              <strong>Example: User Authentication Implementation</strong>
            </p>
            <p className="text-slate-300 mb-4 text-sm">
              Demonstrating complete task breakdown from specification to executable tasks:
            </p>
            
            <div className="mb-4">
              <h5 className="text-sm font-medium text-slate-200 mb-2">Specification Input:</h5>
              <ul className="text-sm text-slate-400 space-y-1 mb-4">
                <li>• User registration and login system</li>
                <li>• JWT token implementation with refresh logic</li>
                <li>• Social authentication integration</li>
                <li>• Role-based access control</li>
              </ul>
            </div>

            <CodeBlock
              code={`Task 001: Database user schema and migration
Task 002: JWT service implementation with refresh tokens
Task 003: Password hashing and validation service
Task 004: OAuth integration for social providers
Task 005: Frontend authentication components
Task 006: API middleware for route protection
Task 007: End-to-end authentication testing`}
              language="bash"
            />

            <div className="mt-4">
              <h5 className="text-sm font-medium text-slate-200 mb-2">Task Enhancement Process:</h5>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Each task enriched with Context7 documentation</li>
                <li>• External API patterns included (Auth0, OAuth providers)</li>
                <li>• Internal security standards referenced</li>
                <li>• Clear testing and validation criteria defined</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

    <Alert className="mb-6 bg-amber-950/30 border-amber-500/30">
      <AlertCircle className="h-4 w-4 text-amber-400" />
      <AlertTitle className="text-amber-200">Implementation Success</AlertTitle>
      <AlertDescription className="text-amber-100/80">
        Teams that follow this systematic approach to task decomposition report 3x faster development cycles and significantly reduced integration issues. The key is maintaining discipline in task scoping and ensuring comprehensive context in every work unit.
      </AlertDescription>
    </Alert>
  </div>
);
