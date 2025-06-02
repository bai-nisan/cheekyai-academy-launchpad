
import { Play, CheckCircle2, Target, AlertTriangle, Code, Database, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "../CodeBlock";

export const ExecutionWorkflow = () => {
  return (
    <section id="execution-workflow" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <Play className="h-8 w-8 text-blue-400" />
        Execution Workflow
      </h2>
      
      <div className="mb-8">
        <p className="text-slate-300 mb-6 leading-relaxed text-lg">
          The difference between chaotic development and systematic productivity lies in how you execute individual tasks. After implementing hundreds of features using AI assistance, I've discovered that the most successful teams follow a structured execution workflow that maintains code quality while leveraging AI capabilities and implementing proven execution practices.
        </p>
        
        <p className="text-slate-300 mb-4 leading-relaxed">
          This section covers the complete implementation process: from task selection through AI-assisted coding to progress tracking, continuous refinement, and execution best practices that ensure consistent quality.
        </p>
      </div>
      
      <ImplementingWithAI />
      <Context7Integration />
      <ComprehensiveImplementationGuidelines />
    </section>
  );
};

const ImplementingWithAI = () => (
  <div id="implementing-with-ai" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      Implementing with AI
    </h3>
    
    <div className="mb-8 p-4 bg-slate-800/30 rounded-lg border-l-4 border-blue-500">
      <p className="text-slate-300 text-lg">
        <strong className="text-slate-100">Methodology:</strong> Developers use AI assistance to complete each self-contained task efficiently while maintaining team standards and ensuring systematic progress tracking throughout the development process.
      </p>
    </div>

    <h4 className="text-xl font-medium mb-4 text-slate-200">Core Implementation Principles</h4>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Successful AI-assisted development requires a balance between leveraging AI capabilities and maintaining human oversight. Here are the fundamental principles:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {[
        "AI-assisted task completion with human oversight and validation",
        "Systematic progress tracking and dependency management", 
        "Continuous refinement and adaptation throughout execution",
        "Integration with external API documentation via Context7",
        "Maintenance of code quality and team pattern consistency"
      ].map((principle, idx) => (
        <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/20 rounded-lg">
          <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
          <span className="text-slate-300">{principle}</span>
        </div>
      ))}
    </div>

    <h4 className="text-xl font-medium mb-4 text-slate-200">Task Execution Framework</h4>
    
    <p className="text-slate-300 mb-4">
      Every successful implementation follows this systematic approach:
    </p>

    <div className="space-y-3 mb-8">
      {[
        { icon: Target, text: "Select appropriate tasks from decomposed task list" },
        { icon: Code, text: "Leverage AI for implementation guidance and code generation" },
        { icon: Database, text: "Track progress and manage dependencies systematically" },
        { icon: Zap, text: "Continuously refine approach based on results and blockers" },
        { icon: CheckCircle2, text: "Validate implementations against team standards and requirements" }
      ].map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500/20 text-blue-300 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500/30">
            <item.icon className="h-4 w-4" />
          </div>
          <span className="text-slate-300">{item.text}</span>
        </div>
      ))}
    </div>

    <ImplementationProcess />
  </div>
);

const ImplementationProcess = () => (
  <>
    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">Implementation Process</h4>

    <Tabs defaultValue="selection" className="mb-6">
      <TabsList className="grid grid-cols-4 w-full bg-slate-800/60">
        <TabsTrigger value="selection">Task Selection</TabsTrigger>
        <TabsTrigger value="implementation">AI Implementation</TabsTrigger>
        <TabsTrigger value="tracking">Progress Tracking</TabsTrigger>
        <TabsTrigger value="refinement">Refinement</TabsTrigger>
      </TabsList>

      <TabsContent value="selection">
        <div className="space-y-4">
          <h5 className="font-semibold text-slate-200 text-lg">Phase 1: Task Selection & Context Loading</h5>
          <p className="text-slate-300 mb-4">
            Begin by selecting appropriate tasks and loading comprehensive context for AI assistance:
          </p>
          
          <CodeBlock
            title="Task Selection and Context Preparation"
            code={`# Task selection and context preparation
"Please help me implement task 3 from tasks/task_003.txt"

# For tasks involving external APIs, load comprehensive context
"This task requires Twilio integration. Use Context7 to load:
- Twilio SMS API documentation
- Webhook security requirements  
- Rate limiting guidelines
Then implement the notification service following our patterns"`}
            language="bash"
          />
        </div>
      </TabsContent>

      <TabsContent value="implementation">
        <div className="space-y-4">
          <h5 className="font-semibold text-slate-200 text-lg">Phase 2: AI-Assisted Implementation</h5>
          <p className="text-slate-300 mb-4">
            Leverage AI capabilities for comprehensive implementation support:
          </p>
          
          <div className="space-y-2 mb-6">
            {[
              "Read and analyze task context and requirements thoroughly",
              "Suggest optimal implementation approach based on team patterns",
              "Generate code following established standards and conventions",
              "Validate implementation against architectural constraints",
              "Include comprehensive test coverage and validation",
              "Reference current API documentation via Context7 during coding"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="tracking">
        <div className="space-y-4">
          <h5 className="font-semibold text-slate-200 text-lg">Phase 3: Progress Tracking & Dependency Management</h5>
          <p className="text-slate-300 mb-4">
            Maintain systematic tracking of task completion and dependency relationships:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">✓</Badge>
              <span className="text-slate-300"><strong>Task Completion:</strong> Mark tasks as complete with validation criteria</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">↻</Badge>
              <span className="text-slate-300"><strong>Dependency Updates:</strong> Update task dependencies and execution order</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-amber-500/20 text-amber-300 border-amber-500/30">⚠</Badge>
              <span className="text-slate-300"><strong>Blocker Management:</strong> Track and document any implementation blockers</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">📊</Badge>
              <span className="text-slate-300"><strong>Progress Visibility:</strong> Maintain clear visibility into overall implementation progress</span>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="refinement">
        <div className="space-y-4">
          <h5 className="font-semibold text-slate-200 text-lg">Phase 4: Continuous Refinement & Adaptation</h5>
          <p className="text-slate-300 mb-4">
            Adapt implementation approach based on results and changing requirements:
          </p>
          
          <CodeBlock
            title="Refinement Examples"
            code={`# Progress continuation and next task selection
"I've completed task 4. What's next?"

# Blocker management and task updates
"Task 5 is blocked by API changes. Please update it."

# Context updates for external dependencies
"The AWS SDK documentation has been updated. Use Context7 to refresh the S3 integration context for task 8."

# Adaptation for architectural changes
"We've updated our authentication approach. Please modify tasks 6-8 to use the new JWT implementation."`}
            language="bash"
            collapsible={true}
          />
        </div>
      </TabsContent>
    </Tabs>

    <EnhancedAIImplementationBestPractices />
    <ExecutionWorkflowInPractice />
  </>
);

const EnhancedAIImplementationBestPractices = () => (
  <div className="mt-8 mb-8">
    <h4 className="text-xl font-medium mb-4 text-slate-200">AI-Assisted Implementation Best Practices</h4>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h5 className="font-semibold text-slate-200 mb-3">Trust but Verify</h5>
        <div className="space-y-2 text-sm">
          <div><strong className="text-slate-300">Code Review:</strong> <span className="text-slate-400">Always review AI-generated code for accuracy and standards compliance</span></div>
          <div><strong className="text-slate-300">Pattern Consistency:</strong> <span className="text-slate-400">Ensure AI implementations follow established team patterns</span></div>
          <div><strong className="text-slate-300">Validation Testing:</strong> <span className="text-slate-400">Test all AI-generated implementations thoroughly</span></div>
          <div><strong className="text-slate-300">Decision Documentation:</strong> <span className="text-slate-400">Track implementation decisions and document reasoning</span></div>
        </div>
      </div>
      
      <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h5 className="font-semibold text-slate-200 mb-3">Maintain Standards</h5>
        <div className="space-y-2 text-sm">
          <div><strong className="text-slate-300">Team Patterns:</strong> <span className="text-slate-400">Ensure consistency with established architectural patterns</span></div>
          <div><strong className="text-slate-300">Code Quality:</strong> <span className="text-slate-400">Maintain coding standards and quality benchmarks</span></div>
          <div><strong className="text-slate-300">Integration Checks:</strong> <span className="text-slate-400">Verify seamless integration with existing codebase</span></div>
          <div><strong className="text-slate-300">Performance Standards:</strong> <span className="text-slate-400">Ensure implementations meet performance requirements</span></div>
        </div>
      </div>
      
      <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h5 className="font-semibold text-slate-200 mb-3">Test Coverage</h5>
        <div className="space-y-2 text-sm">
          <div><strong className="text-slate-300">Comprehensive Testing:</strong> <span className="text-slate-400">Validate all implementations with thorough test coverage</span></div>
          <div><strong className="text-slate-300">Edge Cases:</strong> <span className="text-slate-400">Include testing for boundary conditions and error scenarios</span></div>
          <div><strong className="text-slate-300">Integration Testing:</strong> <span className="text-slate-400">Verify proper integration with dependent services</span></div>
          <div><strong className="text-slate-300">Regression Protection:</strong> <span className="text-slate-400">Ensure new implementations don't break existing functionality</span></div>
        </div>
      </div>
      
      <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h5 className="font-semibold text-slate-200 mb-3">Context Optimization</h5>
        <div className="space-y-2 text-sm">
          <div><strong className="text-slate-300">Focused Context:</strong> <span className="text-slate-400">Provide specific, relevant context for each task</span></div>
          <div><strong className="text-slate-300">External Documentation:</strong> <span className="text-slate-400">Use Context7 for live API documentation integration</span></div>
          <div><strong className="text-slate-300">Pattern References:</strong> <span className="text-slate-400">Include team coding standards and architectural patterns</span></div>
          <div><strong className="text-slate-300">Constraint Documentation:</strong> <span className="text-slate-400">Ensure all technical constraints are clearly communicated</span></div>
        </div>
      </div>
    </div>

    <Alert className="mb-6 bg-blue-950/30 border-blue-500/30">
      <CheckCircle2 className="h-4 w-4 text-blue-400" />
      <AlertTitle className="text-blue-200">Context Integration Benefits</AlertTitle>
      <AlertDescription className="text-blue-100/80 mt-3">
        <div className="space-y-2">
          <p>Real-time external API documentation access ensures your implementations stay current with the latest requirements.</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Consistent implementation patterns across tasks</li>
            <li>Reduced context switching and documentation lookup</li>
            <li>Automated integration of latest API changes and requirements</li>
          </ul>
        </div>
      </AlertDescription>
    </Alert>
  </div>
);

const ExecutionWorkflowInPractice = () => (
  <div className="mt-8">
    <h4 className="text-xl font-medium mb-4 text-slate-200">Execution Workflow in Practice</h4>
    
    <p className="text-slate-300 mb-4">
      Here's a complete example demonstrating the execution workflow for implementing authentication components:
    </p>

    <CodeBlock
      title="Example: User Authentication Task Implementation"
      code={`# Select authentication task with comprehensive context
"Please help me implement task 7 from tasks/task_007.txt: JWT token service implementation

Context includes:
- Security requirements: @docs/security/jwt-standards.md
- Token patterns: @services/auth/token-service.ts
- Testing framework: @tests/auth/token.test.ts
- External dependencies: Use Context7 for JWT library documentation"`}
      language="bash"
      collapsible={true}
    />

    <div className="mt-6 p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
      <h5 className="font-semibold text-slate-200 mb-3">AI Implementation Process:</h5>
      <div className="space-y-2 text-slate-300">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
          <span><strong>Requirements Analysis:</strong> AI analyzes task requirements and security constraints</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
          <span><strong>Implementation Strategy:</strong> Suggests approach based on existing patterns and standards</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
          <span><strong>Code Generation:</strong> Creates JWT service following team conventions and security requirements</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
          <span><strong>Test Implementation:</strong> Generates comprehensive test coverage for token operations</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
          <span><strong>Integration Validation:</strong> Ensures proper integration with existing authentication system</span>
        </div>
      </div>
    </div>

    <CodeBlock
      title="Progress Tracking Example"
      code={`# Task completion with validation
"Task 7 (JWT service) completed. Tests passing. Ready for code review.
Next: Task 8 (API middleware integration)"

# Dependency management
"Task 8 depends on task 7 completion. All dependencies satisfied.
Beginning middleware implementation with Context7 API documentation."`}
      language="bash"
    />
  </div>
);

const Context7Integration = () => (
  <div id="context7-integration" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      Context7 Integration for Implementation
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Context7 transforms how teams handle external API documentation during implementation. Instead of constantly switching between documentation sites and your IDE, Context7 provides real-time access to current API specifications directly within your AI-assisted workflow.
    </p>

    <h4 className="text-xl font-medium mb-4 text-slate-200">External Documentation Integration</h4>
    
    <p className="text-slate-300 mb-4">
      Use Context7 to maintain current external API context throughout implementation:
    </p>

    <CodeBlock
      title="Real-time API Documentation Integration"
      code={`# Real-time API documentation integration
"For payment processing implementation:
1. Load latest Stripe API documentation via Context7
2. Include webhook security requirements and validation
3. Reference our payment service patterns from @services/payment/*
4. Add PCI compliance requirements from @docs/security/pci.md"

# Context updates for changing APIs
"Auth0 has updated their SDK. Use Context7 to refresh authentication context for tasks 12-15."`}
      language="bash"
    />

    <div className="mt-6 p-4 bg-green-950/30 rounded-lg border-l-4 border-green-500">
      <h5 className="font-semibold text-green-200 mb-3">Implementation Context Benefits:</h5>
      <div className="space-y-2 text-green-100/80">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
          <span>Latest third-party API documentation automatically available</span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
          <span>Consistent integration patterns across all external services</span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
          <span>Security and compliance requirements embedded in implementation context</span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
          <span>Reduced implementation errors from outdated documentation</span>
        </div>
      </div>
    </div>
  </div>
);

const ComprehensiveImplementationGuidelines = () => (
  <div id="implementation-guidelines" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      Implementation Guidelines
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      These comprehensive guidelines ensure consistent, high-quality implementations across your team while maximizing the benefits of AI assistance and incorporating proven execution practices.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Target className="h-5 w-5 text-blue-400" />
          Quality Control
        </h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Code Review:</strong> Every AI-generated implementation requires human review</div>
          <div><strong>Testing:</strong> Comprehensive test coverage for all new functionality</div>
          <div><strong>Standards:</strong> Consistent adherence to team coding standards</div>
          <div><strong>Documentation:</strong> Clear documentation of implementation decisions</div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Database className="h-5 w-5 text-green-400" />
          Progress Management
        </h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Incremental:</strong> Complete tasks in logical, incremental steps</div>
          <div><strong>Dependencies:</strong> Clear tracking of task dependencies and blockers</div>
          <div><strong>Validation:</strong> Regular validation checkpoints throughout implementation</div>
          <div><strong>Integration:</strong> Smooth integration with existing codebase</div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-purple-400" />
          AI Optimization
        </h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Context:</strong> Provide specific, relevant context for each task</div>
          <div><strong>Patterns:</strong> Reference established team patterns and standards</div>
          <div><strong>Constraints:</strong> Clearly communicate technical and business constraints</div>
          <div><strong>Feedback:</strong> Continuous refinement based on implementation results</div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h4 className="text-xl font-medium mb-4 text-slate-200">Execution Best Practices Integration</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
          <h5 className="font-semibold text-slate-200 mb-3">Knowledge Sharing & Documentation</h5>
          <div className="space-y-2 text-sm text-slate-300">
            <div><strong>Document Decisions:</strong> Track why implementation choices were made</div>
            <div><strong>Share Knowledge:</strong> Document successful patterns for team use</div>
            <div><strong>Pattern Libraries:</strong> Build reusable implementation templates</div>
            <div><strong>Lessons Learned:</strong> Capture insights for future development cycles</div>
          </div>
        </div>
        
        <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
          <h5 className="font-semibold text-slate-200 mb-3">Productivity Measurement</h5>
          <div className="space-y-2 text-sm text-slate-300">
            <div><strong>Track Impact:</strong> Measure productivity improvements from AI assistance</div>
            <div><strong>Quality Metrics:</strong> Monitor code quality and implementation consistency</div>
            <div><strong>Velocity Tracking:</strong> Measure task completion rates and cycle times</div>
            <div><strong>Team Efficiency:</strong> Assess overall team development velocity improvements</div>
          </div>
        </div>
      </div>
    </div>

    <Alert className="mt-8 bg-amber-950/30 border-amber-500/30">
      <AlertTriangle className="h-4 w-4 text-amber-400" />
      <AlertTitle className="text-amber-200">Implementation Success Factors</AlertTitle>
      <AlertDescription className="text-amber-100/80 mt-3">
        <p className="mb-3">The most successful AI-assisted implementations share these characteristics:</p>
        <div className="text-sm space-y-1">
          <div>• <strong>Clear Context:</strong> Well-defined requirements and constraints</div>
          <div>• <strong>Incremental Progress:</strong> Small, testable implementation steps</div>
          <div>• <strong>Human Oversight:</strong> Regular review and validation of AI outputs</div>
          <div>• <strong>Pattern Consistency:</strong> Adherence to established team standards</div>
          <div>• <strong>Knowledge Sharing:</strong> Documentation and distribution of successful practices</div>
          <div>• <strong>Continuous Improvement:</strong> Regular measurement and refinement of processes</div>
        </div>
      </AlertDescription>
    </Alert>
  </div>
);
