
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
        <p className="text-blue-300 font-medium text-center">
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
  <div className="mb-12">
    <h3 className="text-2xl font-semibold mb-8 text-slate-200 flex items-center gap-3">
      <Target className="h-6 w-6 text-blue-400" />
      Planning Methodology
    </h3>
    
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
          1
        </div>
        <div>
          <h4 className="text-xl font-semibold text-slate-200 mb-3 flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-400" />
            Requirements Gathering
          </h4>
          <p className="text-slate-300 mb-3">
            Collect and organize all project requirements, constraints, and success criteria before engaging AI tools.
          </p>
          <ul className="space-y-1 text-slate-300 pl-4">
            <li>• Feature tickets and business requirements</li>
            <li>• Technical constraints and dependencies</li>
            <li>• Acceptance criteria and success metrics</li>
            <li>• Architecture documentation and coding standards</li>
          </ul>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
          2
        </div>
        <div>
          <h4 className="text-xl font-semibold text-slate-200 mb-3 flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-400" />
            AI Context Integration
          </h4>
          <p className="text-slate-300 mb-3">
            Load comprehensive context using reasoning models and documentation injection for accurate planning.
          </p>
          <ul className="space-y-1 text-slate-300 pl-4">
            <li>• Use reasoning models (o1-mini/o1-preview) for complex planning</li>
            <li>• Reference existing patterns with @ mentions</li>
            <li>• Integrate architectural documentation and standards</li>
            <li>• Inject external API docs with Context7</li>
          </ul>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
          3
        </div>
        <div>
          <h4 className="text-xl font-semibold text-slate-200 mb-3 flex items-center gap-2">
            <Settings className="h-5 w-5 text-blue-400" />
            Specification Generation
          </h4>
          <p className="text-slate-300 mb-3">
            Generate comprehensive technical specifications that serve as actionable blueprints for development.
          </p>
          <ul className="space-y-1 text-slate-300 pl-4">
            <li>• Detailed technical approach and architecture</li>
            <li>• API contracts and data model definitions</li>
            <li>• Component architecture and integration patterns</li>
            <li>• Testing strategy and quality assurance requirements</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ImplementationWorkflow = () => {
  const workflowSteps = [
    { 
      step: 1, 
      title: "Input Collection",
      icon: <FolderOpen className="h-5 w-5" />,
      description: "Gather all project materials and documentation",
      content: (
        <>
          <p className="text-slate-300 mb-4">
            Collect feature requirements, technical documentation, and architectural patterns to provide comprehensive context for AI planning.
          </p>
          <CodeBlock
            code={`Essential Materials:
• Feature requirements (@feature_ticket.md)
• Specification templates (@templates/prd_template.md)
• Backend patterns (@docs/backend/microservices.md)
• Frontend standards (@docs/frontend/component-patterns.md)
• API documentation (@docs/api/swagger.yaml)
• Coding standards and conventions`}
            language="markdown"
          />
        </>
      )
    },
    { 
      step: 2, 
      title: "AI Model Selection",
      icon: <Bot className="h-5 w-5" />,
      description: "Choose reasoning-optimized models for complex planning tasks",
      content: (
        <>
          <p className="text-slate-300 mb-4">
            Select AI models optimized for planning and reasoning to ensure high-quality technical specifications.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="font-medium text-blue-300">o1-mini/o1-preview:</span>
              <span className="text-slate-300">Complex architectural decisions and system integration</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-medium text-blue-300">Claude Sonnet:</span>
              <span className="text-slate-300">Detailed technical documentation and analysis</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-medium text-blue-300">GPT-4:</span>
              <span className="text-slate-300">API design and integration planning</span>
            </div>
          </div>
        </>
      )
    },
    { 
      step: 3, 
      title: "Context Loading",
      icon: <Database className="h-5 w-5" />,
      description: "Load comprehensive context using @ mentions and Context7",
      content: (
        <>
          <p className="text-slate-300 mb-4">
            Systematically load relevant documentation and constraints to ensure AI has complete context for accurate planning.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Use @ mentions for internal documentation and standards</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Include architectural decisions and coding conventions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Inject external API documentation with Context7</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Load 3-5 relevant files maximum to avoid overwhelming the model</span>
            </li>
          </ul>
        </>
      )
    },
    { 
      step: 4, 
      title: "Specification Generation",
      icon: <Zap className="h-5 w-5" />,
      description: "Generate comprehensive technical specifications",
      content: (
        <>
          <p className="text-slate-300 mb-4">
            Use structured prompts to generate detailed technical specifications that serve as actionable development blueprints.
          </p>
          <CodeBlock
            code={`Recommended Prompt Structure:
"Create a detailed technical specification including:
- Feature requirements: @requirements/feature.md
- Template structure: @templates/specification.md  
- Backend patterns: @docs/backend/patterns.md
- Frontend standards: @docs/frontend/standards.md
- External APIs: Use Context7 for Stripe/Auth0/AWS docs
- Focus: Planning and architecture, not implementation details"`}
            language="bash"
          />
        </>
      )
    },
    { 
      step: 5, 
      title: "Review & Refinement",
      icon: <CheckCircle className="h-5 w-5" />,
      description: "Validate and iterate on generated specifications",
      content: (
        <>
          <p className="text-slate-300 mb-4">
            Systematically review and refine specifications to ensure technical accuracy and completeness.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Verify technical accuracy against architectural standards</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Ensure completeness against original requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Validate alignment with team coding standards</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Iterate with focused follow-up prompts for refinement</span>
            </li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="mb-12">
      <h4 className="text-xl font-medium mb-8 text-slate-200 flex items-center gap-3">
        <Workflow className="h-6 w-6 text-blue-400" />
        Implementation Workflow
      </h4>
      
      <div className="space-y-8">
        {workflowSteps.map((item, index) => (
          <div key={item.step} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
              {item.step}
            </div>
            <div className="flex-1">
              <h5 className="font-semibold mb-2 text-slate-200 text-lg flex items-center gap-2">
                {item.icon}
                {item.title}
              </h5>
              <p className="text-slate-400 mb-4 italic">{item.description}</p>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlanningBestPractices = () => (
  <div className="mb-12">
    <h4 className="text-xl font-medium mb-8 text-slate-200 flex items-center gap-3">
      <Lightbulb className="h-6 w-6 text-blue-400" />
      Planning Best Practices
    </h4>
    
    <div className="space-y-8">
      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Brain className="h-5 w-5 text-blue-400" />
          Model Selection Guidelines
        </h5>
        <div className="space-y-3 pl-7">
          <div className="flex items-start gap-3">
            <span className="font-medium text-blue-300 min-w-fit">o1-mini/o1-preview:</span>
            <span className="text-slate-300">Complex architectural decisions and system design</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-medium text-blue-300 min-w-fit">Claude Sonnet:</span>
            <span className="text-slate-300">Detailed technical documentation and analysis</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-medium text-blue-300 min-w-fit">GPT-4:</span>
            <span className="text-slate-300">Integration planning and API design</span>
          </div>
        </div>
      </div>
      
      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Database className="h-5 w-5 text-blue-400" />
          Context Optimization
        </h5>
        <ul className="space-y-2 text-slate-300 pl-7">
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Include 3-5 relevant documentation files maximum</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Use Context7 for live external API documentation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Reference recent similar implementations for patterns</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Always include team coding standards and conventions</span>
          </li>
        </ul>
      </div>
    </div>
    
    <Card className="mt-8 bg-red-500/10 border-red-500/30">
      <CardContent className="p-6">
        <h5 className="text-lg font-semibold text-red-300 mb-4 flex items-center gap-2 justify-center">
          <AlertTriangle className="h-5 w-5" />
          Common Pitfalls to Avoid
        </h5>
        <ul className="space-y-2 text-red-200">
          <li className="flex items-start gap-2">
            <span className="text-red-400">•</span>
            <span>Overwhelming AI with too much context or documentation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400">•</span>
            <span>Skipping architectural constraint documentation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400">•</span>
            <span>Not iterating on initial specifications for refinement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400">•</span>
            <span>Forgetting to include testing requirements and quality standards</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

const PracticalExample = () => (
  <div className="mb-8">
    <h4 className="text-xl font-medium mb-8 text-slate-200 flex items-center gap-3">
      <Code2 className="h-6 w-6 text-blue-400" />
      Planning in Practice
    </h4>
    
    <div className="space-y-6">
      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-3">
          Example: User Authentication Feature
        </h5>
        <p className="text-slate-300 mb-4">
          Demonstrating the complete planning workflow for implementing secure user authentication with JWT tokens.
        </p>
      </div>
      
      <div>
        <h6 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
          <FolderOpen className="h-4 w-4 text-blue-400" />
          Input Materials
        </h6>
        <CodeBlock
          code={`Required Context Files:
- User stories: @features/auth-requirements.md
- Security standards: @docs/security/authentication.md
- API patterns: @docs/api/rest-conventions.md
- Frontend components: @components/auth/
- Database schema: @docs/database/user-tables.sql`}
          language="markdown"
        />
      </div>
      
      <div>
        <h6 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
          <Zap className="h-4 w-4 text-blue-400" />
          Generated Specification Includes
        </h6>
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>JWT implementation strategy with refresh token handling</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Database schema changes and migration scripts</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Frontend component architecture and state management</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>API endpoint definitions with request/response schemas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Security testing requirements and penetration test scenarios</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Integration test scenarios and end-to-end user flows</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
