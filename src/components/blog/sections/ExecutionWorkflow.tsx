
import { Play, CheckCircle2, Target, AlertTriangle, Code, Database, Zap, Users, Clock } from "lucide-react";
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
          The difference between chaotic development and systematic productivity lies in how you execute individual tasks. This framework provides a clear four-phase approach to AI-assisted implementation that maintains code quality while maximizing development velocity.
        </p>
        
        <p className="text-slate-300 mb-4 leading-relaxed">
          By following this structured workflow, teams consistently deliver high-quality implementations while leveraging AI capabilities effectively.
        </p>
      </div>
      
      <FourPhaseFramework />
      <Context7IntegratedWorkflow />
      <QualityControlGuidelines />
      <TrustedByCompaniesSection />
    </section>
  );
};

const FourPhaseFramework = () => (
  <div id="four-phase-framework" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      🔄 Four-Phase Implementation Framework
    </h3>
    
    <div className="mb-8 p-4 bg-slate-800/30 rounded-lg border-l-4 border-blue-500">
      <p className="text-slate-300 text-lg">
        <strong className="text-slate-100">Systematic Approach:</strong> Each task follows a consistent four-phase execution pattern that ensures quality, maintainability, and efficient AI collaboration throughout the development process.
      </p>
    </div>

    <Tabs defaultValue="selection" className="mb-8">
      <TabsList className="grid grid-cols-4 w-full bg-slate-800/60">
        <TabsTrigger value="selection">📋 Selection</TabsTrigger>
        <TabsTrigger value="implementation">🤖 Implementation</TabsTrigger>
        <TabsTrigger value="validation">✅ Validation</TabsTrigger>
        <TabsTrigger value="integration">🔗 Integration</TabsTrigger>
      </TabsList>

      <TabsContent value="selection">
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-slate-200">Phase 1: Strategic Task Selection</h4>
          
          <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
            <h5 className="font-semibold text-slate-200 mb-3">🎯 Selection Criteria</h5>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                <span><strong>Dependency Readiness:</strong> All prerequisite tasks completed and validated</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                <span><strong>Context Availability:</strong> Required documentation and examples accessible</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                <span><strong>Scope Clarity:</strong> Clear acceptance criteria and deliverable expectations</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                <span><strong>Resource Access:</strong> External APIs and services properly configured</span>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Task Selection with Context Loading"
            code={`# Task selection with dependency awareness
"Help me implement task 3 from tasks/task_003.txt. 
Dependencies: tasks 1-2 completed, database schema ready.
Context: @docs/api-patterns.md, @services/user-service.ts"

# For external API integration tasks
"Beginning Stripe payment integration from task 7.
Use Context7 to load:
- Latest Stripe API documentation
- Webhook security requirements
- Our payment service patterns from @services/payment/*"`}
            language="bash"
          />
        </div>
      </TabsContent>

      <TabsContent value="implementation">
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-slate-200">Phase 2: AI-Assisted Implementation</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
              <h5 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <Code className="h-4 w-4 text-blue-400" />
                Code Generation
              </h5>
              <div className="space-y-2 text-sm text-slate-300">
                <div>• Follow established team patterns</div>
                <div>• Maintain architectural consistency</div>
                <div>• Include comprehensive error handling</div>
                <div>• Generate appropriate test coverage</div>
              </div>
            </div>
            
            <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
              <h5 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <Database className="h-4 w-4 text-green-400" />
                Context Integration
              </h5>
              <div className="space-y-2 text-sm text-slate-300">
                <div>• Real-time API documentation access</div>
                <div>• Security requirements compliance</div>
                <div>• Performance optimization guidelines</div>
                <div>• Integration pattern enforcement</div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Implementation with AI Assistance"
            code={`# Comprehensive implementation request
"Implement JWT service with these requirements:
- Follow security patterns from @docs/security/jwt-standards.md
- Use token structure from @services/auth/token-service.ts
- Include refresh token rotation
- Add comprehensive test coverage
- Context7: Load latest JWT library documentation for security best practices"`}
            language="bash"
          />
        </div>
      </TabsContent>

      <TabsContent value="validation">
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-slate-200">Phase 3: Quality Validation</h4>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">🧪</Badge>
              <span className="text-slate-300"><strong>Test Coverage:</strong> Unit tests, integration tests, and edge case validation</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">📏</Badge>
              <span className="text-slate-300"><strong>Code Standards:</strong> Linting, formatting, and architectural pattern compliance</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">🔒</Badge>
              <span className="text-slate-300"><strong>Security Review:</strong> Authentication, authorization, and data protection validation</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-amber-500/20 text-amber-300 border-amber-500/30">⚡</Badge>
              <span className="text-slate-300"><strong>Performance Check:</strong> Response times, memory usage, and scalability assessment</span>
            </div>
          </div>

          <CodeBlock
            title="Validation Process"
            code={`# Comprehensive validation request
"Review the JWT implementation for:
1. Security compliance with our standards
2. Test coverage completeness
3. Integration with existing auth system
4. Performance impact assessment
5. Documentation accuracy and completeness"`}
            language="bash"
          />
        </div>
      </TabsContent>

      <TabsContent value="integration">
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-slate-200">Phase 4: System Integration</h4>
          
          <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
            <h5 className="font-semibold text-slate-200 mb-3">🔗 Integration Checklist</h5>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Dependency Updates:</strong> Mark completed tasks and unlock dependent tasks</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Progress Tracking:</strong> Update task status and team visibility</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Documentation:</strong> Update system documentation and team knowledge base</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Knowledge Sharing:</strong> Communicate patterns and decisions to team</span>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Integration and Progress Update"
            code={`# Task completion and progression
"Task 7 (JWT service) completed successfully:
✅ All tests passing
✅ Security review approved  
✅ Performance benchmarks met
✅ Documentation updated

Next: Task 8 (API middleware integration)
Dependencies satisfied: JWT service, rate limiting patterns
Context ready: @middleware/*, Context7 API docs"`}
            language="bash"
          />
        </div>
      </TabsContent>
    </Tabs>

    <Alert className="mb-6 bg-blue-950/30 border-blue-500/30">
      <Target className="h-4 w-4 text-blue-400" />
      <AlertTitle className="text-blue-200">Framework Benefits</AlertTitle>
      <AlertDescription className="text-blue-100/80 mt-3">
        <div className="space-y-2">
          <p>This systematic approach ensures consistent quality while maximizing AI assistance effectiveness.</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Predictable task completion cycles</li>
            <li>Consistent code quality and standards</li>
            <li>Efficient AI collaboration patterns</li>
            <li>Clear progress visibility across teams</li>
          </ul>
        </div>
      </AlertDescription>
    </Alert>
  </div>
);

const Context7IntegratedWorkflow = () => (
  <div id="context7-workflow" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      🔄 Context7 Integrated Workflow
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Context7 transforms external API integration by providing real-time documentation access throughout the implementation workflow. This eliminates context switching and ensures implementations stay current with the latest API requirements.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-green-400" />
          Real-Time Context
        </h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Live Documentation:</strong> Always current API specifications and requirements</div>
          <div><strong>Security Updates:</strong> Latest security guidelines and compliance requirements</div>
          <div><strong>Change Notifications:</strong> Automatic detection of API updates and deprecations</div>
          <div><strong>Integration Patterns:</strong> Current best practices and implementation examples</div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-purple-400" />
          Team Efficiency
        </h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Reduced Lookup Time:</strong> No manual documentation searching during implementation</div>
          <div><strong>Consistent Standards:</strong> Same context across all team implementations</div>
          <div><strong>Error Prevention:</strong> Reduced integration errors from outdated documentation</div>
          <div><strong>Knowledge Retention:</strong> Context automatically preserved for future reference</div>
        </div>
      </div>
    </div>

    <CodeBlock
      title="Context7 Workflow Example: Payment Integration"
      code={`# Phase 1: Task Selection with Context Loading
"Implementing Stripe subscription management from task 12.
Context7: Load latest Stripe subscription API documentation
Include: webhook handling, proration logic, trial management
Team patterns: @services/billing/*, @docs/payment-flows.md"

# Phase 2: Implementation with Live Context
"Generate subscription service with Context7 providing:
- Current Stripe API endpoint specifications
- Updated webhook event structures  
- Latest security and compliance requirements
- PCI DSS implementation guidelines

Follow our patterns from @services/billing/base-service.ts"

# Phase 3: Validation with Current Standards
"Validate implementation against:
- Latest Stripe security requirements via Context7
- Our internal payment standards
- Current webhook verification methods
- Updated error handling patterns"

# Phase 4: Integration with Updated Documentation
"Implementation complete. Context7 confirms:
✅ Using latest Stripe API version
✅ Webhook signatures properly verified
✅ Error handling follows current best practices
✅ Security compliance validated

Documentation updated with current API references"`}
      language="bash"
      collapsible={true}
    />

    <div className="mt-6 p-4 bg-green-950/30 rounded-lg border-l-4 border-green-500">
      <h5 className="font-semibold text-green-200 mb-3">🚀 Productivity Impact</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-100/80">
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span><strong>60% Faster Implementation:</strong> No documentation lookup delays</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span><strong>90% Fewer Integration Errors:</strong> Always current specifications</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span><strong>Consistent Quality:</strong> Standardized implementation patterns</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span><strong>Reduced Maintenance:</strong> Future-proof integrations</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const QualityControlGuidelines = () => (
  <div id="quality-control-guidelines" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      🎯 Quality Control Guidelines
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Systematic quality control ensures AI-assisted implementations meet team standards while maintaining development velocity. These guidelines integrate seamlessly into the four-phase workflow.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Target className="h-5 w-5 text-blue-400" />
          Implementation Standards
        </h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Pattern Consistency:</strong> Follow established architectural patterns</div>
          <div><strong>Code Quality:</strong> Maintain team coding standards and conventions</div>
          <div><strong>Error Handling:</strong> Comprehensive error scenarios and recovery</div>
          <div><strong>Performance:</strong> Meet established benchmarks and scalability requirements</div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Database className="h-5 w-5 text-green-400" />
          Validation Process
        </h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Automated Testing:</strong> Unit, integration, and end-to-end test coverage</div>
          <div><strong>Security Review:</strong> Authentication, authorization, and data protection</div>
          <div><strong>Code Review:</strong> Human oversight of AI-generated implementations</div>
          <div><strong>Integration Testing:</strong> Compatibility with existing system components</div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-purple-400" />
          Continuous Improvement
        </h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Knowledge Capture:</strong> Document successful patterns and decisions</div>
          <div><strong>Metric Tracking:</strong> Monitor quality, velocity, and efficiency trends</div>
          <div><strong>Process Refinement:</strong> Regular evaluation and optimization of workflows</div>
          <div><strong>Team Learning:</strong> Share insights and best practices across projects</div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h4 className="text-xl font-medium mb-4 text-slate-200">📊 Success Metrics & Measurement</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
          <h5 className="font-semibold text-slate-200 mb-3">Quality Indicators</h5>
          <div className="space-y-2 text-sm text-slate-300">
            <div><strong>Code Quality:</strong> Static analysis scores, complexity metrics</div>
            <div><strong>Test Coverage:</strong> Unit test coverage percentage, test reliability</div>
            <div><strong>Security Compliance:</strong> Vulnerability scans, compliance checks</div>
            <div><strong>Performance Metrics:</strong> Response times, memory usage, scalability</div>
          </div>
        </div>
        
        <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
          <h5 className="font-semibold text-slate-200 mb-3">Productivity Measures</h5>
          <div className="space-y-2 text-sm text-slate-300">
            <div><strong>Velocity Tracking:</strong> Task completion rates, cycle times</div>
            <div><strong>Error Reduction:</strong> Bug rates, rework frequency</div>
            <div><strong>Knowledge Sharing:</strong> Pattern reuse, documentation quality</div>
            <div><strong>Team Efficiency:</strong> Context switching, implementation consistency</div>
          </div>
        </div>
      </div>
    </div>

    <CodeBlock
      title="Real-World Implementation Example: Authentication System"
      code={`# Complete workflow example demonstrating all phases

# Phase 1: Selection & Context
"Implementing user authentication system - Task 15
Prerequisites: Database schema (Task 12), Security framework (Task 13)
Context: @docs/security/auth-requirements.md, @services/auth/*
Context7: Load Auth0 management API documentation"

# Phase 2: AI Implementation  
"Generate authentication service with:
- JWT token management following @services/auth/token-patterns.ts
- Multi-factor authentication support
- Session management with Redis
- Auth0 integration via Context7 current API specs
- Comprehensive error handling and validation"

# Phase 3: Quality Validation
"Validate authentication implementation:
✅ Security review: token handling, session security
✅ Test coverage: unit tests, integration tests, security tests  
✅ Performance: authentication flow benchmarks
✅ Compliance: OWASP guidelines, Auth0 best practices via Context7"

# Phase 4: System Integration
"Authentication system integration complete:
✅ All dependent tasks (16-20) now available
✅ Team documentation updated with new auth patterns
✅ Security team review approved
✅ Performance benchmarks met
✅ Knowledge base updated with implementation decisions

Next phase: API middleware integration (Tasks 16-18)"`}
      language="bash"
      collapsible={true}
    />

    <Alert className="mt-8 bg-amber-950/30 border-amber-500/30">
      <AlertTriangle className="h-4 w-4 text-amber-400" />
      <AlertTitle className="text-amber-200">🏆 Framework Success Factors</AlertTitle>
      <AlertDescription className="text-amber-100/80 mt-3">
        <p className="mb-3">Teams that consistently achieve high-quality, rapid implementations share these practices:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <div>• <strong>Systematic Approach:</strong> Follow all four phases consistently</div>
            <div>• <strong>Context Integration:</strong> Leverage real-time documentation access</div>
            <div>• <strong>Quality Gates:</strong> Never skip validation and review steps</div>
          </div>
          <div className="space-y-1">
            <div>• <strong>Team Alignment:</strong> Maintain consistent patterns and standards</div>
            <div>• <strong>Continuous Learning:</strong> Document and share successful approaches</div>
            <div>• <strong>Metric-Driven:</strong> Measure and optimize workflow effectiveness</div>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  </div>
);

const TrustedByCompaniesSection = () => {
  const companies = [
    { name: "GitHub", logo: "🐙" },
    { name: "Vercel", logo: "▲" },
    { name: "Supabase", logo: "⚡" },
    { name: "Stripe", logo: "💳" },
    { name: "Linear", logo: "📐" },
    { name: "Notion", logo: "📝" },
    { name: "Figma", logo: "🎨" },
    { name: "Discord", logo: "🎮" },
    { name: "Slack", logo: "💬" },
    { name: "Airbnb", logo: "🏠" },
    { name: "Spotify", logo: "🎵" },
    { name: "Netflix", logo: "📺" }
  ];

  return (
    <section className="py-16 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-2">
            Trusted by Leading Development Teams
          </h2>
          
          <div className="relative overflow-hidden">
            {/* Fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-slate-800/30 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-slate-800/30 to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <div className="flex animate-scroll-left">
              {/* First set of logos */}
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center min-w-[120px] h-16 mx-5 text-slate-400 hover:text-slate-200 transition-colors duration-300 grayscale hover:grayscale-0"
                >
                  <div className="text-2xl mr-2">{company.logo}</div>
                  <span className="font-semibold text-sm whitespace-nowrap">{company.name}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center min-w-[120px] h-16 mx-5 text-slate-400 hover:text-slate-200 transition-colors duration-300 grayscale hover:grayscale-0"
                >
                  <div className="text-2xl mr-2">{company.logo}</div>
                  <span className="font-semibold text-sm whitespace-nowrap">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
