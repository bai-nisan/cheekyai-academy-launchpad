
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, FileText, Brain, Settings, Workflow, FolderOpen, Bot, Database, Zap, CheckCircle, Lightbulb, AlertTriangle, Code2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "../CodeBlock";

export const AIAssistedPlanning = () => {
  return (
    <section id="ai-assisted-planning" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-blue-400" />
        AI-Assisted Planning
      </h2>
      
      <div className="mb-8">
        <p className="text-slate-300 mb-6 leading-relaxed text-lg">
          Transform requirements into executable specifications using AI-powered workflows that integrate with your existing architecture and development processes. This systematic approach ensures your AI assistance is grounded in your team's standards and produces consistent, high-quality technical plans.
        </p>
        
        <p className="text-slate-300 mb-4 leading-relaxed">
          The key difference between random AI prompting and professional AI-assisted planning lies in structure, context, and methodology. Let's explore how to create technical specifications that accelerate development while maintaining quality.
        </p>
      </div>
      
      <CreatingTechnicalSpecifications />
      <ImplementationProcess />
      <PlanningBestPractices />
    </section>
  );
};

const CreatingTechnicalSpecifications = () => (
  <div id="creating-technical-specifications" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200 flex items-center gap-3">
      <Target className="h-6 w-6 text-blue-400" />
      Creating Technical Specifications
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Effective AI-assisted planning follows a systematic methodology that transforms business requirements into detailed technical specifications. Rather than hoping AI understands your context, we explicitly provide architecture, patterns, and constraints.
    </p>

    <h4 className="text-xl font-medium mb-4 text-slate-200">🎯 Methodology</h4>
    
    <p className="text-slate-300 mb-4">
      Follow this systematic approach to leverage AI for comprehensive technical planning:
    </p>

    <div className="space-y-6">
      <div className="border-l-4 border-blue-500 pl-6">
        <h5 className="text-lg font-semibold text-slate-200 mb-2">1. Requirements Gathering</h5>
        <ul className="space-y-1 text-slate-300">
          <li>• Collect feature tickets and business requirements</li>
          <li>• Document technical constraints and dependencies</li>
          <li>• Define acceptance criteria and success metrics</li>
          <li>• Establish architectural boundaries and integration points</li>
        </ul>
      </div>
      
      <div className="border-l-4 border-purple-500 pl-6">
        <h5 className="text-lg font-semibold text-slate-200 mb-2">2. AI Context Integration</h5>
        <ul className="space-y-1 text-slate-300">
          <li>• Use reasoning models (o1-mini/o1-preview) for complex architectural decisions</li>
          <li>• Reference existing patterns with @ mentions for consistency</li>
          <li>• Include architectural documentation and coding standards</li>
          <li>• Inject external API documentation via Context7</li>
        </ul>
      </div>
      
      <div className="border-l-4 border-green-500 pl-6">
        <h5 className="text-lg font-semibold text-slate-200 mb-2">3. Specification Generation</h5>
        <ul className="space-y-1 text-slate-300">
          <li>• Generate comprehensive technical approach and architecture</li>
          <li>• Define API contracts and data model specifications</li>
          <li>• Create component architecture and integration patterns</li>
          <li>• Establish testing strategy and quality assurance requirements</li>
        </ul>
      </div>
    </div>
  </div>
);

const ImplementationProcess = () => (
  <div id="implementation-process" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200 flex items-center gap-3">
      <Workflow className="h-6 w-6 text-green-400" />
      Implementation Process
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      A structured five-phase approach that transforms business requirements into detailed technical specifications through systematic AI assistance.
    </p>

    <h4 className="text-xl font-medium mb-4 text-slate-200">🔄 Implementation Process</h4>

    <div className="space-y-8">
      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <FolderOpen className="h-5 w-5 text-blue-400" />
          Phase 1: Input Collection
        </h5>
        
        <p className="text-slate-300 mb-4">
          Gather all necessary project materials and documentation to provide comprehensive context for AI planning:
        </p>

        <CodeBlock
          title="Essential Materials"
          code={`Essential Materials:
• Feature requirements (@feature_ticket.md)
• Specification templates (@templates/prd_template.md)
• Technical documentation:
  - Backend patterns (@docs/backend/microservices.md)
  - Frontend standards (@docs/frontend/component-patterns.md)
  - API documentation (@docs/api/swagger.yaml)
• Architectural constraints and coding standards`}
          language="bash"
        />
      </div>

      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Bot className="h-5 w-5 text-purple-400" />
          Phase 2: Model Selection
        </h5>
        
        <p className="text-slate-300 mb-4">
          Choose the appropriate AI model based on planning complexity:
        </p>

        <div className="space-y-3 pl-4">
          <div className="flex items-start gap-3">
            <span className="font-medium text-blue-300 min-w-fit">o1-mini/o1-preview:</span>
            <span className="text-slate-300">Complex architectural decisions and system design</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-medium text-purple-300 min-w-fit">Claude Sonnet:</span>
            <span className="text-slate-300">Detailed technical documentation and analysis</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-medium text-green-300 min-w-fit">GPT-4:</span>
            <span className="text-slate-300">Integration planning and API design</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-medium text-cyan-300 min-w-fit">Context7 Integration:</span>
            <span className="text-slate-300">Live external API documentation injection</span>
          </div>
        </div>
      </div>

      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Database className="h-5 w-5 text-cyan-400" />
          Phase 3: Context Loading
        </h5>
        
        <p className="text-slate-300 mb-4">
          Load comprehensive context to ensure AI has complete understanding:
        </p>

        <ul className="space-y-2 text-slate-300 pl-4">
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Use @ mentions to reference all relevant internal documentation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Include coding standards, architectural decisions, and constraints</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Inject external API documentation with Context7 when needed</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Limit to 3-5 core documentation files to avoid overwhelming the model</span>
          </li>
        </ul>
      </div>

      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-400" />
          Phase 4: Specification Generation
        </h5>
        
        <p className="text-slate-300 mb-4">
          Use structured prompts to generate detailed technical specifications:
        </p>

        <CodeBlock
          title="Recommended Prompt Structure"
          code={`"Create a detailed technical specification including:
- Feature requirements: @requirements/feature.md
- Template structure: @templates/specification.md
- Backend patterns: @docs/backend/patterns.md
- Frontend standards: @docs/frontend/standards.md
- External APIs: Use Context7 for Stripe/Auth0/AWS documentation
- Constraints: Focus on planning and architecture, not implementation
- Testing: Include comprehensive testing strategy
- Documentation: Ensure all decisions are well-documented"`}
          language="bash"
          collapsible={true}
        />
      </div>

      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-400" />
          Phase 5: Review & Refinement
        </h5>
        
        <p className="text-slate-300 mb-4">
          Systematically review and refine specifications to ensure quality:
        </p>

        <ul className="space-y-2 text-slate-300 pl-4">
          <li className="flex items-start gap-2">
            <span className="text-green-400">•</span>
            <span>Verify technical accuracy against architectural standards</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">•</span>
            <span>Ensure completeness against original requirements</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">•</span>
            <span>Validate alignment with team coding standards and conventions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">•</span>
            <span>Iterate with focused follow-up prompts for refinement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">•</span>
            <span>Add external API context via Context7 as needed</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const PlanningBestPractices = () => (
  <div id="planning-best-practices" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200 flex items-center gap-3">
      <Lightbulb className="h-6 w-6 text-purple-400" />
      Planning Best Practices
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Professional AI-assisted planning requires understanding model capabilities, context optimization, and common pitfalls. Here's how to maximize effectiveness while maintaining quality.
    </p>

    <h4 className="text-xl font-medium mb-4 text-slate-200">💡 Planning Best Practices</h4>

    <div className="space-y-8">
      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Brain className="h-5 w-5 text-blue-400" />
          Model Selection Guidelines
        </h5>
        <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Use reasoning-optimized models for complex architectural planning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>These excel at structure, integration, and maintaining clarity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Especially important when integrating external documentation via Context7</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Database className="h-5 w-5 text-green-400" />
          Context Optimization
        </h5>
        <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span>Include 3-5 relevant documentation files maximum</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span>Use Context7 for live external API documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span>Reference recent similar implementations for patterns</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span>Always include team coding standards and architectural conventions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Alert className="mt-8 bg-red-950/30 border-red-500/30">
      <AlertTriangle className="h-4 w-4 text-red-400" />
      <AlertTitle className="text-red-200">Common Pitfalls to Avoid</AlertTitle>
      <AlertDescription className="text-red-100/80 mt-3">
        <ul className="space-y-2">
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
      </AlertDescription>
    </Alert>

    <PracticalExample />
    <ResourcesAndTools />
  </div>
);

const PracticalExample = () => (
  <div className="mt-12">
    <h4 className="text-xl font-medium mb-8 text-slate-200 flex items-center gap-3">
      <Code2 className="h-6 w-6 text-purple-400" />
      Planning in Practice
    </h4>
    
    <div className="space-y-6">
      <div>
        <h5 className="text-lg font-semibold text-slate-200 mb-3">
          Example: User Authentication Feature Implementation
        </h5>
        <p className="text-slate-300 mb-4">
          Demonstrating the complete planning workflow for implementing secure user authentication with JWT tokens.
        </p>
      </div>
      
      <CodeBlock
        title="Input Materials Example"
        code={`Required Context Files:
• User stories: @features/auth-requirements.md
• Security standards: @docs/security/authentication.md
• API patterns: @docs/api/rest-conventions.md
• Frontend components: @components/auth/
• Database schema: @docs/database/user-tables.sql
• Testing framework: @docs/testing/integration-tests.md`}
        language="bash"
        collapsible={true}
      />
      
      <div>
        <h6 className="font-semibold text-slate-200 mb-3">Generated Specification Includes:</h6>
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

const ResourcesAndTools = () => (
  <div className="mt-12">
    <h4 className="text-xl font-medium mb-8 text-slate-200 flex items-center gap-3">
      <Settings className="h-6 w-6 text-cyan-400" />
      Resources & Tools
    </h4>
    
    <Tabs defaultValue="tools" className="mb-6">
      <TabsList className="grid grid-cols-2 w-full bg-slate-800/60">
        <TabsTrigger value="tools">Essential Tools</TabsTrigger>
        <TabsTrigger value="integration">Integration Setup</TabsTrigger>
      </TabsList>
      
      <TabsContent value="tools">
        <div className="space-y-4">
          <h5 className="font-semibold text-slate-200 mb-3">Essential Tools for AI-Assisted Planning:</h5>
          <div className="space-y-3 pl-4">
            <div className="flex items-start gap-3">
              <span className="font-medium text-blue-300 min-w-fit">Context7:</span>
              <span className="text-slate-300">Documentation injection for enhanced AI context</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-medium text-purple-300 min-w-fit">Reasoning Models:</span>
              <span className="text-slate-300">o1-mini, Claude Sonnet, GPT-4 for different planning needs</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-medium text-green-300 min-w-fit">Documentation Tools:</span>
              <span className="text-slate-300">Repomix for codebase analysis</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-medium text-cyan-300 min-w-fit">Template Systems:</span>
              <span className="text-slate-300">Standardized specification templates</span>
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="integration">
        <div className="space-y-4">
          <h5 className="font-semibold text-slate-200 mb-3">Integration Requirements:</h5>
          <ul className="space-y-2 text-slate-300 pl-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Cursor IDE with proper @ mention support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Context7 setup for external API documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Access to reasoning-optimized AI models</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Comprehensive documentation structure in your repository</span>
            </li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  </div>
);
