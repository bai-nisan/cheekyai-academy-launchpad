
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, FileText, Brain, Settings, Workflow, FolderOpen, Bot, Database, Zap, CheckCircle, Lightbulb, AlertTriangle, Code2 } from "lucide-react";
import { CodeBlock } from "../CodeBlock";

export const AIAssistedPlanning = () => {
  return (
    <section id="ai-assisted-planning" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-blue-400" />
        AI-Assisted Planning
      </h2>
      
      <p className="text-lg text-slate-300 mb-8 italic">
        Transform requirements into executable specifications using AI-powered workflows
      </p>
      
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-8">
        <p className="text-blue-300 font-medium">
          <strong>Key Outcome:</strong> Comprehensive technical specifications that align with your architecture and accelerate development
        </p>
      </div>
      
      <PlanningMethodology />
      <ImplementationWorkflow />
      <PlanningBestPractices />
      <PracticalExample />
    </section>
  );
};

const PlanningMethodology = () => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-6 text-slate-200 flex items-center gap-3">
      <Target className="h-6 w-6 text-blue-400" />
      Planning Methodology
    </h3>
    
    <Card className="mb-6 bg-slate-800/80 backdrop-blur-md border-slate-600/50 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-slate-200">The Three-Pillar Approach</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">1. Requirements Gathering</h4>
              <ul className="space-y-1 text-slate-300">
                <li>• Feature tickets and business requirements</li>
                <li>• Technical constraints and dependencies</li>
                <li>• Acceptance criteria and success metrics</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">2. AI Context Integration</h4>
              <ul className="space-y-1 text-slate-300">
                <li>• Reasoning models (e.g., o1-mini) for complex planning</li>
                <li>• Reference existing patterns with @ mentions</li>
                <li>• Architectural documentation integration</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
              <Settings className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">3. Specification Generation</h4>
              <ul className="space-y-1 text-slate-300">
                <li>• Comprehensive technical approach</li>
                <li>• API contracts and data models</li>
                <li>• Component architecture and testing strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const ImplementationWorkflow = () => {
  const workflowSteps = [
    { 
      step: 1, 
      title: "Input Collection",
      icon: <FolderOpen className="h-5 w-5" />,
      content: (
        <>
          <p className="text-slate-300 mb-3"><strong>Gather Your Materials:</strong></p>
          <CodeBlock
            code={`• Main feature requirements (@feature_ticket.md)
• Specification templates (@templates/prd_template.md)
• Technical documentation:
  - Backend patterns (@docs/backend/microservices.md)
  - Frontend standards (@docs/frontend/component-patterns.md)
  - API documentation (@docs/api/swagger.yaml)`}
            language="markdown"
          />
        </>
      )
    },
    { 
      step: 2, 
      title: "AI Model Selection",
      icon: <Bot className="h-5 w-5" />,
      content: (
        <>
          <p className="text-slate-300 mb-3"><strong>Choose the Right Model:</strong></p>
          <ul className="space-y-1 text-slate-300">
            <li>• Use reasoning-optimized models for planning tasks</li>
            <li>• Excellent for structure, integration, and clarity</li>
            <li>• Critical when integrating external docs via Context7</li>
          </ul>
        </>
      )
    },
    { 
      step: 3, 
      title: "Context Loading",
      icon: <Database className="h-5 w-5" />,
      content: (
        <>
          <p className="text-slate-300 mb-3"><strong>Load Comprehensive Context:</strong></p>
          <ul className="space-y-1 text-slate-300">
            <li>• Use @ mentions for relevant documents</li>
            <li>• Include coding standards and architectural decisions</li>
            <li>• Inject external API docs with Context7</li>
            <li>• Ensure all constraints are included</li>
          </ul>
        </>
      )
    },
    { 
      step: 4, 
      title: "Specification Generation",
      icon: <Zap className="h-5 w-5" />,
      content: (
        <>
          <p className="text-slate-300 mb-3"><strong>Generate Your Specification:</strong></p>
          <p className="text-slate-300 mb-3">Recommended Prompt Structure:</p>
          <CodeBlock
            code={`"Create a detailed technical specification including:
- Feature: @requirements/feature.md
- Template: @templates/specification.md  
- Backend rules: @docs/backend/patterns.md
- Frontend rules: @docs/frontend/standards.md
- External APIs: Use Context7 for Stripe/Auth0/AWS docs
- Constraints: Focus on planning, not implementation"`}
            language="bash"
          />
        </>
      )
    },
    { 
      step: 5, 
      title: "Review & Refinement",
      icon: <CheckCircle className="h-5 w-5" />,
      content: (
        <>
          <p className="text-slate-300 mb-3"><strong>Quality Assurance:</strong></p>
          <ul className="space-y-1 text-slate-300">
            <li>• Verify technical accuracy</li>
            <li>• Ensure completeness against requirements</li>
            <li>• Align with team standards</li>
            <li>• Iterate with follow-up prompts</li>
            <li>• Add external API context via Context7</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="mb-8">
      <h4 className="text-xl font-medium mb-6 text-slate-200 flex items-center gap-3">
        <Workflow className="h-6 w-6 text-blue-400" />
        Implementation Workflow
      </h4>
      
      <div className="space-y-4">
        {workflowSteps.map((item) => (
          <Card key={item.step} className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold mb-3 text-slate-200 text-lg flex items-center gap-2">
                    {item.icon}
                    Phase {item.step}: {item.title}
                  </h5>
                  {item.content}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const PlanningBestPractices = () => (
  <div className="mb-8">
    <h4 className="text-xl font-medium mb-6 text-slate-200 flex items-center gap-3">
      <Lightbulb className="h-6 w-6 text-blue-400" />
      Planning Best Practices
    </h4>
    
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="bg-slate-800/60 backdrop-blur-md border-slate-600/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-200">Model Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <span className="font-medium text-blue-300">o1-mini/o1-preview:</span>
              <span className="text-slate-300"> Complex architectural decisions</span>
            </div>
            <div>
              <span className="font-medium text-blue-300">Claude Sonnet:</span>
              <span className="text-slate-300"> Detailed technical documentation</span>
            </div>
            <div>
              <span className="font-medium text-blue-300">GPT-4:</span>
              <span className="text-slate-300"> Integration planning and API design</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-slate-800/60 backdrop-blur-md border-slate-600/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-200">Context Optimization</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-slate-300">
            <li>• Include 3-5 relevant documentation files maximum</li>
            <li>• Use Context7 for live API documentation</li>
            <li>• Reference recent similar implementations</li>
            <li>• Include team coding standards and conventions</li>
          </ul>
        </CardContent>
      </Card>
    </div>
    
    <Card className="mt-6 bg-red-500/10 border-red-500/30">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-red-300 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Common Pitfalls to Avoid
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1 text-red-200">
          <li>• Overwhelming AI with too much context</li>
          <li>• Skipping architectural constraint documentation</li>
          <li>• Not iterating on initial specifications</li>
          <li>• Forgetting to include testing requirements</li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

const PracticalExample = () => (
  <div>
    <h4 className="text-xl font-medium mb-6 text-slate-200 flex items-center gap-3">
      <Code2 className="h-6 w-6 text-blue-400" />
      Planning in Practice
    </h4>
    
    <Card className="bg-slate-800/60 backdrop-blur-md border-slate-600/50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-200">Example: User Authentication Feature</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-slate-200 mb-2">Input Materials:</h5>
            <CodeBlock
              code={`Required Context:
- User stories: @features/auth-requirements.md
- Security standards: @docs/security/authentication.md
- API patterns: @docs/api/rest-conventions.md
- Frontend components: @components/auth/`}
              language="markdown"
            />
          </div>
          
          <div>
            <h5 className="font-semibold text-slate-200 mb-2">Generated Specification Includes:</h5>
            <ul className="space-y-1 text-slate-300">
              <li>• JWT implementation strategy</li>
              <li>• Database schema changes</li>
              <li>• Frontend component architecture</li>
              <li>• API endpoint definitions</li>
              <li>• Security testing requirements</li>
              <li>• Integration test scenarios</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);
