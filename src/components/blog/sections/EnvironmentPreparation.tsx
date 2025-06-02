import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Info, ChevronRight, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "../CodeBlock";

const AI_TOOLS_LIST = [
  {
    name: "Cursor",
    desc: "AI-powered code editor with intelligent code completion and generation",
    link: "https://www.cursor.com/"
  },
  {
    name: "Context7",
    desc: "Context management tool for AI development workflows",
    link: "https://context7.com/"
  },
  {
    name: "Task Master",
    desc: "Claude-based task management and execution framework",
    link: "https://github.com/eyaltoledano/claude-task-master"
  },
  {
    name: "Repomix",
    desc: "Repository documentation generator for AI context",
    link: "https://repomix.com/guide/prompt-examples"
  }
];

export const EnvironmentPreparation = () => {
  return (
    <section id="environment-preparation" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <Wrench className="h-8 w-8 text-blue-400" />
        Environment Preparation
      </h2>
      
      <div className="mb-8">
        <p className="text-slate-300 mb-4 leading-relaxed text-lg">
          Establishing a standardized development environment is crucial for maximizing AI assistance effectiveness across your team. 
          This preparation phase ensures that AI tools can understand your codebase context, follow your conventions, and generate 
          consistent, high-quality code that aligns with your project standards.
        </p>
      </div>
      
      <ToolSetup />
      <StandardsRequirements />
      <Implementation />
    </section>
  );
};

const ToolSetup = () => (
  <div id="tool-setup" className="mb-8">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">Tool Setup</h3>
    <p className="text-slate-300 mb-4">
      We are using these essential AI development tools to create an optimal workflow:
    </p>
    
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      {AI_TOOLS_LIST.map((tool, idx) => (
        <Card key={idx} className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/30 transition-all">
          <CardContent className="p-4">
            <h4 className="font-semibold text-slate-200">
              <a href={tool.link} className="text-blue-400 hover:text-blue-300 underline transition-colors" target="_blank" rel="noopener noreferrer">
                {tool.name}
              </a>
            </h4>
            <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const StandardsRequirements = () => (
  <div id="standards-requirements" className="mb-8">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">Part 1: Standards & Requirements</h3>
    
    <Tabs defaultValue="indexing" className="mb-6">
      <TabsList className="grid grid-cols-3 w-full bg-slate-800/60">
        <TabsTrigger value="indexing">📁 Codebase Indexing</TabsTrigger>
        <TabsTrigger value="documentation">📄 Repository Documentation</TabsTrigger>
        <TabsTrigger value="rules">🧩 AI Context Rules</TabsTrigger>
      </TabsList>
      
      <IndexingTab />
      <DocumentationTab />
      <RulesTab />
    </Tabs>
  </div>
);

const IndexingTab = () => (
  <TabsContent value="indexing" className="mt-6">
    <h4 className="text-xl font-medium mb-3 text-slate-200">📁 Codebase Indexing</h4>
    <Alert className="mb-4 bg-slate-800/40 border-blue-500/30">
      <Info className="h-4 w-4 text-blue-400" />
      <AlertTitle className="text-slate-200">Create a `.cursorignore` file</AlertTitle>
      <AlertDescription className="text-slate-300">
        Prevent AI confusion in large codebases by excluding irrelevant files
      </AlertDescription>
    </Alert>
    
    <Accordion type="single" collapsible className="mb-4">
      <AccordionItem value="exclude">
        <AccordionTrigger className="text-slate-200 hover:text-slate-100">
          What to exclude from AI context
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
              <span>Old feature implementations that are no longer used</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
              <span>Deprecated API endpoints or services</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
              <span>Legacy migration files or outdated scripts</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
              <span>Generated files, build artifacts, and temporary code</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
              <span>Test fixtures or mock data that don't represent current patterns</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="structure">
        <AccordionTrigger className="text-slate-200 hover:text-slate-100">
          Define clear repository structure
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
              <span>Consistent folder conventions (e.g., `shared/`, `components/`, `lib/`, `services/`)</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
              <span>Short inline documentation or README files in key directories</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
              <span>Clear naming conventions across the codebase</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </TabsContent>
);

const DocumentationTab = () => (
  <TabsContent value="documentation" className="mt-6">
    <h4 className="text-xl font-medium mb-3 text-slate-200">📄 Repository Documentation</h4>
    <div className="space-y-3">
      {[
        { text: "Use Repomix to generate comprehensive codebase documentation", link: "https://repomix.com/guide/prompt-examples" },
        { text: "Create contextual prompts for AI interactions", link: null },
        { text: "Maintain up-to-date architectural documentation", link: null }
      ].map((item, idx) => (
        <Card key={idx} className="bg-slate-800/30 border-slate-700/30">
          <CardContent className="p-4 flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
            <span className="text-slate-300">
              {item.link ? (
                <>
                  Use <a href={item.link} className="text-blue-400 hover:text-blue-300 underline transition-colors">Repomix</a> to generate comprehensive codebase documentation
                </>
              ) : (
                item.text
              )}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  </TabsContent>
);

const RulesTab = () => (
  <TabsContent value="rules" className="mt-6">
    <h4 className="text-xl font-medium mb-3 text-slate-200">🧩 AI Context Rules (MDC Files)</h4>
    <p className="text-slate-300 mb-4">
      Create comprehensive Cursor rules files to standardize your development practices:
    </p>
    
    <h5 className="text-lg font-medium mb-3 text-slate-200">Rule Categories:</h5>
    
    <Accordion type="multiple" className="mb-6">
      <AccordionItem value="categories-1">
        <AccordionTrigger className="text-slate-200">
          Core Development Rules (1-7)
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-2">
            {[
              { num: 1, title: "Code Conventions", desc: "Styling guidelines, error handling patterns, testing expectations, logging standards" },
              { num: 2, title: "Boilerplate Rules", desc: "Service/module templates, API client configuration, database connection patterns" },
              { num: 3, title: "Refactoring Guidelines", desc: "Database migration conventions, service replacement patterns, test preservation" },
              { num: 4, title: "Architecture Rules", desc: "DDD boundaries, microservices, state management" },
              { num: 5, title: "Security & Compliance", desc: "Input validation, PII handling, audit logging" },
              { num: 6, title: "Performance Guidelines", desc: "Query optimization, caching, bundle constraints" },
              { num: 7, title: "API Design Standards", desc: "REST/GraphQL conventions, versioning, documentation" }
            ].map(rule => (
              <div key={rule.num} className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    {rule.num}
                  </Badge>
                  <div className="flex-1">
                    <h6 className="font-semibold text-slate-200">{rule.title}</h6>
                    <p className="text-sm text-slate-400 mt-1">{rule.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="categories-2">
        <AccordionTrigger className="text-slate-200">
          Advanced Rules & Best Practices (8-14)
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-2">
            {[
              { num: 8, title: "Database Patterns", desc: "Migrations, indexing, naming conventions" },
              { num: 9, title: "Testing Strategies", desc: "Test organization, mocking patterns, coverage" },
              { num: 10, title: "DevOps & Deployment", desc: "CI/CD, feature flags, monitoring" },
              { num: 11, title: "Frontend Patterns", desc: "Accessibility, responsive design, SEO" },
              { num: 12, title: "Documentation Standards", desc: "Comments, ADRs, changelog maintenance" },
              { num: 13, title: "Team Collaboration", desc: "PR templates, code review, branch naming" },
              { num: 14, title: "Domain-Specific Rules", desc: "Business logic, workflows, integrations" }
            ].map(rule => (
              <div key={rule.num} className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    {rule.num}
                  </Badge>
                  <div className="flex-1">
                    <h6 className="font-semibold text-slate-200">{rule.title}</h6>
                    <p className="text-sm text-slate-400 mt-1">{rule.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </TabsContent>
);

const Implementation = () => (
  <div id="implementation" className="mb-8">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">Part 2: Implementation with AI Tools</h3>
    
    <Alert className="mb-6 bg-amber-950/30 border-amber-500/30">
      <AlertCircle className="h-4 w-4 text-amber-400" />
      <AlertTitle className="text-amber-200">Important Note</AlertTitle>
      <AlertDescription className="text-amber-100/80">
        In large codebases, AI agents can get confused by outdated patterns, deprecated code, and legacy implementations. 
        The following examples show how to quickly clean up your codebase context for optimal AI performance.
      </AlertDescription>
    </Alert>

    <QuickStartRepomix />
    <QuickStartMDCRules />
    <ProTips />
    <ExampleMDCFiles />
    <OrganizingContext />
    <BestPracticesForMDC />
  </div>
);

const QuickStartRepomix = () => (
  <>
    <h4 className="text-xl font-medium mb-3 text-slate-200">🚀 Quick Start: Repository Documentation with Repomix</h4>
    
    <Tabs defaultValue="example1" className="mb-6">
      <TabsList className="grid grid-cols-2 w-full bg-slate-800/60">
        <TabsTrigger value="example1">Example 1: Repository Overview</TabsTrigger>
        <TabsTrigger value="example2">Example 2: AI-Optimized Structure</TabsTrigger>
      </TabsList>
      
      <TabsContent value="example1">
        <CodeBlock
          title="Generate Complete Repository Overview"
          code={`# Install Repomix
npm install -g repomix

# Generate comprehensive documentation
repomix --output "codebase-docs.md" \\
  --include "src/**/*.ts,src/**/*.tsx" \\
  --exclude "node_modules,dist,coverage" \\
  --format markdown

# Use with AI to create README
"Based on this codebase analysis from @codebase-docs.md, create a comprehensive README.md with:
- Project overview
- Architecture diagram (mermaid)
- Setup instructions
- Folder structure explanation
- Key design decisions"`}
          language="bash"
          collapsible={true}
        />
      </TabsContent>
      
      <TabsContent value="example2">
        <CodeBlock
          title="Create AI-Optimized Repository Structure"
          code={`# Use AI to analyze and restructure your codebase
"Analyze my current project structure and suggest improvements:
@codebase-docs.md

Create:
1. Optimal folder structure
2. .cursorignore file with smart exclusions
3. Directory-specific README templates
4. Migration script to reorganize files"

# AI will generate:
# - New folder structure
# - Move commands for reorganization
# - README templates for each directory
# - Updated import paths

# Example .cursorignore output:
# legacy/           # Old codebase before migration
# deprecated/       # Features marked for removal
# *.old.js         # Backup files
# experiments/     # Proof of concepts
# temp/           # Temporary development files
# migrations/pre-2023/  # Historical migrations`}
          language="bash"
          collapsible={true}
        />
      </TabsContent>
    </Tabs>
  </>
);

const QuickStartMDCRules = () => (
  <>
    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">🎯 Quick Start: Creating MDC Rules from Existing Code</h4>

    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="exclude-deprecated">
        <AccordionTrigger className="text-slate-200">Example 1: Identify and Exclude Deprecated Code</AccordionTrigger>
        <AccordionContent>
          <CodeBlock
            code={`# Use AI to identify code to exclude from indexing
"Analyze @codebase-docs.md and identify:
1. Deprecated features or old implementations
2. Experimental or temporary code
3. Legacy patterns that conflict with current standards
4. Generated files that shouldn't be indexed

Create a .cursorignore file that will help Cursor's agent focus on active, relevant code only"

# This prevents AI confusion from:
# - Suggesting deprecated patterns
# - Mixing old and new API styles
# - Using outdated dependencies
# - Following abandoned conventions`}
            language="bash"
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="extract-patterns">
        <AccordionTrigger className="text-slate-200">Example 2: Extract Patterns from Current Codebase</AccordionTrigger>
        <AccordionContent>
          <CodeBlock
            code={`# Generate MDC rules from your existing patterns
"Analyze these files and create MDC rule files:
@src/components/*.tsx
@src/services/*.ts
@src/api/*.ts

Generate:
1. frontend-components.mdc - based on current component patterns
2. api-patterns.mdc - based on existing API structure
3. service-layer.mdc - based on service implementations"`}
            language="bash"
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="bootstrap-rules">
        <AccordionTrigger className="text-slate-200">Example 3: Bootstrap Complete Rule Set</AccordionTrigger>
        <AccordionContent>
          <CodeBlock
            code={`# Create comprehensive rules in minutes
"I need to create AI context rules for my team. Using @codebase-docs.md:

Generate MDC files for:
- Code conventions (based on patterns found)
- Testing strategies (based on test files)
- API standards (based on current endpoints)
- Database patterns (based on models/migrations)

Include both good and bad examples from the codebase"`}
            language="bash"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </>
);

const ProTips = () => (
  <Alert className="mb-6 mt-8 bg-blue-950/30 border-blue-500/30">
    <Lightbulb className="h-4 w-4 text-blue-400" />
    <AlertTitle className="text-xl font-semibold text-blue-200">💡 Pro Tips</AlertTitle>
    <AlertDescription className="mt-3">
      <div className="grid gap-3">
        {[
          { title: "Start Small", desc: "Use Repomix on a single module first, then expand" },
          { title: "Iterate with AI", desc: "Generate initial docs/rules, then refine with specific prompts" },
          { title: "Version Control", desc: "Commit generated docs and update them with each major change" },
          { title: "Team Review", desc: "Use AI-generated rules as a starting point for team discussions" },
          { title: "Prevent AI Confusion", desc: "In large codebases, prioritize excluding deprecated code over being exhaustive - a focused, clean context leads to better AI suggestions" }
        ].map((tip, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-200">{tip.title}:</span>
              <span className="text-slate-300 ml-2">{tip.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </AlertDescription>
  </Alert>
);

const ExampleMDCFiles = () => (
  <>
    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">📝 Example MDC Rule Files</h4>

    <Tabs defaultValue="frontend" className="mb-6">
      <TabsList className="grid grid-cols-3 w-full bg-slate-800/60">
        <TabsTrigger value="frontend">Frontend Rules</TabsTrigger>
        <TabsTrigger value="api">API Standards</TabsTrigger>
        <TabsTrigger value="database">Database Patterns</TabsTrigger>
      </TabsList>

      <TabsContent value="frontend">
        <CodeBlock
          title="Example: frontend-component-rules.mdc"
          code={`# Frontend Component Creation Rules

## Component Structure
- Use functional components with TypeScript
- Place in \`components/[ComponentName]/\` folder
- Include: Component.tsx, Component.test.tsx, Component.stories.tsx, index.ts
- Use named exports with default re-export in index

## Props Interface
- Define Props interface above component
- Use descriptive names, avoid abbreviations
- Optional props should have defaults
- Document complex props with JSDoc

## Styling
- Use CSS Modules or styled-components
- Follow BEM naming for class names
- Mobile-first responsive design
- Support dark/light theme variables`}
          language="markdown"
          collapsible={true}
        />
      </TabsContent>

      <TabsContent value="api">
        <CodeBlock
          title="Example: api-error-handling.mdc"
          code={`# API Error Handling Standards

## Error Response Format
\`\`\`json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "User-friendly error message",
    "details": { "field": "specific error" },
    "timestamp": "2024-01-01T00:00:00Z",
    "requestId": "uuid"
  }
}
\`\`\`

## Status Codes
- 400: Validation errors (include field details)
- 401: Authentication required
- 403: Insufficient permissions
- 404: Resource not found
- 429: Rate limit exceeded (include retry-after header)
- 500: Internal errors (log full details, return generic message)

## Client-Side Handling
- Implement exponential backoff for 429/503
- Show user-friendly messages
- Log errors to monitoring service
- Provide fallback UI states`}
          language="markdown"
          collapsible={true}
        />
      </TabsContent>

      <TabsContent value="database">
        <CodeBlock
          title="Example: database-patterns.mdc"
          code={`# Database Design Patterns

## Table Naming
- Use plural snake_case (users, user_roles)
- Junction tables: first_second (user_organizations)
- Prefix with domain for large systems (billing_invoices)

## Required Columns
- id: UUID primary key
- created_at: timestamp with timezone
- updated_at: timestamp with timezone
- deleted_at: nullable timestamp (soft deletes)

## Indexing Rules
- Add indexes for all foreign keys
- Create composite indexes for common WHERE clauses
- Include EXPLAIN plan in PR for new queries
- Monitor slow query log

## Migration Standards
- Up and down migrations required
- Test rollback in staging
- Include data migration for schema changes
- Version with timestamp prefix`}
          language="markdown"
          collapsible={true}
        />
      </TabsContent>
    </Tabs>
  </>
);

const OrganizingContext = () => (
  <>
    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">🗂️ Organizing Context Rules</h4>

    <Card className="mb-6 bg-slate-800/30 border-slate-700/50">
      <CardHeader>
        <CardTitle className="text-lg text-slate-200">Recommended Structure:</CardTitle>
      </CardHeader>
      <CardContent>
        <CodeBlock
          code={`.cursor/
├── rules/
│   ├── architecture/
│   │   ├── microservices.mdc
│   │   ├── domain-boundaries.mdc
│   │   └── state-management.mdc
│   ├── frontend/
│   │   ├── components.mdc
│   │   ├── styling.mdc
│   │   └── accessibility.mdc
│   ├── backend/
│   │   ├── api-design.mdc
│   │   ├── database.mdc
│   │   └── services.mdc
│   ├── testing/
│   │   ├── unit-tests.mdc
│   │   ├── integration.mdc
│   │   └── e2e.mdc
│   ├── security/
│   │   ├── authentication.mdc
│   │   ├── validation.mdc
│   │   └── compliance.mdc
│   └── workflows/
│       ├── ci-cd.mdc
│       ├── code-review.mdc
│       └── deployment.mdc
└── context/
    ├── project-overview.md
    ├── tech-stack.md
    └── team-conventions.md`}
          language="bash"
          collapsible={true}
        />
      </CardContent>
    </Card>
  </>
);

const BestPracticesForMDC = () => (
  <Card className="mb-6 mt-6 bg-slate-800/40 backdrop-blur-sm border-slate-700/50 shadow-lg">
    <CardHeader>
      <CardTitle className="text-lg text-slate-200">Best Practices for MDC Files:</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          "Keep rules concise and actionable",
          "Include good and bad examples",
          "Reference existing code patterns",
          "Update rules as patterns evolve",
          "Version control all MDC files",
          "Review rules in team retrospectives"
        ].map((practice, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
            <span className="text-slate-300">{practice}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);
