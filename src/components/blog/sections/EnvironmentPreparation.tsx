
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, CheckCircle2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "../CodeBlock";

export const EnvironmentPreparation = () => {
  return (
    <section id="environment-preparation" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <Settings className="h-8 w-8 text-blue-400" />
        Environment Preparation
      </h2>
      
      <div className="mb-8">
        <p className="text-slate-300 mb-6 leading-relaxed text-lg">
          In the world of AI-assisted coding, the difference between a frustrating experience and a productivity superpower often comes down to one thing: <strong className="text-slate-100">environment preparation</strong>. After months of working with Cursor and other AI tools, I've discovered that spending a few hours setting up your codebase properly can save you weeks of confusion and rework.
        </p>
        
        <p className="text-slate-300 mb-4 leading-relaxed">
          This guide covers the essential steps to prepare any codebase for AI assistance: smart indexing, comprehensive documentation, context rules, and planning best practices. Let's dive in.
        </p>
      </div>
      
      <CodebaseIndexing />
      <RepositoryDocumentation />
      <AIContextRules />
      <PlanningBestPractices />
    </section>
  );
};

const CodebaseIndexing = () => (
  <div id="codebase-indexing" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      Codebase Indexing
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Large codebases are like cluttered workshops - the more junk lying around, the harder it is to find the tools you need. AI assistants face the same challenge. When Cursor's AI agent encounters deprecated code, old migrations, or experimental features, it can suggest outdated patterns or mix incompatible approaches.
    </p>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      The solution? A well-crafted <code className="bg-slate-800 px-2 py-1 rounded text-blue-300">.cursorignore</code> file.
    </p>

    <h4 className="text-xl font-medium mb-4 text-slate-200">Creating Your .cursorignore File</h4>
    
    <p className="text-slate-300 mb-4">
      Think of <code className="bg-slate-800 px-2 py-1 rounded text-blue-300">.cursorignore</code> as a filter that helps AI focus on the code that matters. Here's what you should exclude:
    </p>

    <CodeBlock
      title="Example .cursorignore File"
      code={`# Build artifacts and generated files
dist/
build/
*.bundle.js
coverage/

# Deprecated code that could confuse AI
legacy/                    # Old codebase before migration
deprecated/               # Features marked for removal
*.old.js                  # Backup files
src/components-v1/        # Previous component library

# Experimental or temporary code
experiments/              # Proof of concepts
spikes/                  # Technical experiments
temp/                    # Temporary development files

# Large test fixtures that add noise
__fixtures__/large-datasets/
cypress/fixtures/bulk-*.json
tests/performance/data/

# Historical migrations and outdated scripts
migrations/pre-2023/      # Old migration files
scripts/legacy/          # Deprecated automation
database/old-schema/     # Previous database structure`}
      language="gitignore"
      collapsible={true}
    />

    <Alert className="my-6 bg-amber-950/30 border-amber-500/30">
      <AlertCircle className="h-4 w-4 text-amber-400" />
      <AlertTitle className="text-amber-200">Why This Matters</AlertTitle>
      <AlertDescription className="text-amber-100/80">
        Consider this real scenario: Your team migrated from REST to GraphQL last year. Without proper exclusions, AI might suggest REST endpoint patterns when you're working on new GraphQL resolvers. By excluding the old API directory, you ensure AI only references your current architectural patterns.
      </AlertDescription>
    </Alert>

    <h4 className="text-xl font-medium mb-4 text-slate-200">Quick Implementation</h4>
    
    <CodeBlock
      code={`# Use AI to identify what to exclude
"Analyze my codebase and identify:
1. Deprecated features or old implementations
2. Experimental or temporary code
3. Legacy patterns that conflict with current standards
4. Generated files that shouldn't be indexed

Create a .cursorignore file that will help Cursor's agent focus on active, relevant code only"`}
      language="bash"
    />
  </div>
);

const RepositoryDocumentation = () => (
  <div id="repository-documentation" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      Repository Documentation
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Even the best codebase is useless to AI without proper context. This is where{" "}
      <a href="https://repomix.com" className="text-blue-400 hover:text-blue-300 underline transition-colors">
        Repomix
      </a>{" "}
      becomes invaluable - it transforms your repository into a structured document that AI can understand and reference.
    </p>

    <h4 className="text-xl font-medium mb-4 text-slate-200">Generating Comprehensive Documentation</h4>
    
    <CodeBlock
      title="Install and Generate Documentation"
      code={`# Install Repomix
npm install -g repomix

# Generate complete repository documentation
repomix --output "codebase-docs.md" \\
  --include "src/**/*.ts,src/**/*.tsx" \\
  --exclude "node_modules,dist,coverage" \\
  --format markdown`}
      language="bash"
    />

    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">Leveraging Documentation for AI</h4>
    
    <p className="text-slate-300 mb-4">
      Once generated, use this documentation to create AI-optimized materials:
    </p>

    <Tabs defaultValue="readme" className="mb-6">
      <TabsList className="grid grid-cols-2 w-full bg-slate-800/60">
        <TabsTrigger value="readme">Create README</TabsTrigger>
        <TabsTrigger value="architecture">Generate Architecture</TabsTrigger>
      </TabsList>
      
      <TabsContent value="readme">
        <CodeBlock
          code={`# Create a comprehensive README
"Based on this codebase analysis from @codebase-docs.md, create a comprehensive README.md with:
- Project overview
- Architecture diagram (mermaid)
- Setup instructions
- Folder structure explanation
- Key design decisions"`}
          language="bash"
        />
      </TabsContent>
      
      <TabsContent value="architecture">
        <CodeBlock
          code={`# Generate architectural documentation
"Analyze @codebase-docs.md and create:
1. A technical architecture document
2. API patterns and conventions used
3. State management approach
4. Key dependencies and their purposes"`}
          language="bash"
        />
      </TabsContent>
    </Tabs>

    <Alert className="mb-6 bg-blue-950/30 border-blue-500/30">
      <CheckCircle2 className="h-4 w-4 text-blue-400" />
      <AlertTitle className="text-blue-200">Practical Example</AlertTitle>
      <AlertDescription className="text-blue-100/80 mt-3">
        <div className="space-y-3">
          <p>Here's how one team used Repomix to improve their AI assistance:</p>
          <CodeBlock
            code={`# They discovered their codebase had mixed patterns
repomix --output "analysis.md" --include "src/**/*.ts"

# Used AI to identify inconsistencies
"Review @analysis.md and identify:
- Inconsistent naming patterns
- Mixed architectural approaches
- Areas lacking documentation
Suggest a migration plan to standardize these patterns"`}
            language="bash"
          />
          <p className="text-sm">
            <strong>The result?</strong> Their AI suggestions became 3x more consistent because the AI could now understand their intended patterns rather than guessing from mixed examples.
          </p>
        </div>
      </AlertDescription>
    </Alert>
  </div>
);

const AIContextRules = () => (
  <div id="ai-context-rules" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      Cursor Rules
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      This is where the magic happens. MDC (Markdown Context) files are like coding standards that AI actually follows. Instead of hoping AI picks up your patterns, you explicitly tell it what you want.
    </p>

    <h4 className="text-xl font-medium mb-4 text-slate-200">Organizing Your Rules</h4>
    
    <p className="text-slate-300 mb-4">
      Create a clear structure in your repository:
    </p>

    <CodeBlock
      title="Recommended Rule Structure"
      code={`.cursor/
├── rules/
│   ├── frontend/
│   │   ├── components.mdc
│   │   └── styling.mdc
│   ├── backend/
│   │   ├── api-design.mdc
│   │   └── database.mdc
│   └── testing/
│       └── test-patterns.mdc
└── context/
    └── project-overview.md`}
      language="bash"
    />

    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">Creating Effective MDC Rules</h4>
    
    <p className="text-slate-300 mb-4">
      The best rules come from your existing code. Here's a practical approach:
    </p>

    <CodeBlock
      code={`# Extract patterns from your best code
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

    <MDCExamples />
  </div>
);

const MDCExamples = () => (
  <>
    <h4 className="text-xl font-medium mb-4 mt-8 text-slate-200">Example MDC Rules</h4>

    <Tabs defaultValue="components" className="mb-6">
      <TabsList className="grid grid-cols-3 w-full bg-slate-800/60">
        <TabsTrigger value="components">Frontend Components</TabsTrigger>
        <TabsTrigger value="api">API Error Handling</TabsTrigger>
        <TabsTrigger value="database">Database Patterns</TabsTrigger>
      </TabsList>

      <TabsContent value="components">
        <CodeBlock
          title=".cursor/rules/frontend/components.mdc"
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

## Example from our codebase:
// From: src/components/Button/Button.tsx
interface ButtonProps {
  /** Button display text */
  label: string;
  /** Handler for click events */
  onClick?: () => void;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Disable interactions */
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  // Component implementation
};`}
          language="markdown"
          collapsible={true}
        />
      </TabsContent>

      <TabsContent value="api">
        <CodeBlock
          title=".cursor/rules/backend/api-errors.mdc"
          code={`# API Error Handling Standards

## Error Response Format
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "User-friendly error message",
    "details": { "field": "specific error" },
    "timestamp": "2024-01-01T00:00:00Z",
    "requestId": "uuid"
  }
}

## Status Codes
- 400: Validation errors (include field details)
- 401: Authentication required
- 403: Insufficient permissions
- 404: Resource not found
- 429: Rate limit exceeded (include retry-after header)
- 500: Internal errors (log full details, return generic message)

## Implementation Example:
// From: src/lib/errors/index.ts
export class APIError extends Error {
  constructor(
    public code: string,
    public statusCode: number,
    message: string,
    public details?: Record<string, any>
  ) {
    super(message);
  }
}

// Usage in handlers
if (!user) {
  throw new APIError(
    'USER_NOT_FOUND',
    404,
    'The requested user does not exist',
    { userId: id }
  );
}`}
          language="markdown"
          collapsible={true}
        />
      </TabsContent>

      <TabsContent value="database">
        <CodeBlock
          title=".cursor/rules/backend/database.mdc"
          code={`# Database Design Patterns

## Table Naming
- Use plural snake_case (users, user_roles)
- Junction tables: first_second (user_organizations)
- Prefix with domain for large systems (billing_invoices)

## Required Columns
Every table must include:
- id: UUID primary key
- created_at: timestamp with timezone
- updated_at: timestamp with timezone
- deleted_at: nullable timestamp (soft deletes)

## Migration Standards
// From: migrations/20240315_add_user_preferences.sql
-- Up Migration
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  theme VARCHAR(20) DEFAULT 'light',
  notifications_enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_user_preferences_user_id ON user_preferences(user_id);

-- Down Migration
DROP TABLE IF EXISTS user_preferences;`}
          language="markdown"
          collapsible={true}
        />
      </TabsContent>
    </Tabs>
  </>
);

const PlanningBestPractices = () => (
  <div id="planning-best-practices" className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
      Planning Best Practices
    </h3>
    
    <p className="text-slate-300 mb-6 leading-relaxed">
      Effective environment preparation requires understanding how to optimize your planning phase for AI assistance. These practices ensure your preparation work translates into productive development cycles.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4">Rich Context = Better Results</h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Documentation:</strong> Include all relevant documentation and specifications</div>
          <div><strong>Examples:</strong> Provide concrete examples of desired patterns and outcomes</div>
          <div><strong>Constraints:</strong> Clearly articulate technical and business limitations</div>
          <div><strong>Dependencies:</strong> Document all external services and API requirements</div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4">Use Strong Examples</h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Template Quality:</strong> Good templates guide AI output effectively</div>
          <div><strong>Pattern Consistency:</strong> Show existing patterns AI should follow</div>
          <div><strong>Best Practices:</strong> Include examples of your team's best implementations</div>
          <div><strong>Anti-patterns:</strong> Document what to avoid and why</div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4">Set Clear Boundaries</h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Planning vs. Coding:</strong> Be explicit about planning vs. implementation phases</div>
          <div><strong>Scope Definition:</strong> Clearly define what's in and out of scope</div>
          <div><strong>Decision Points:</strong> Identify when human input is required</div>
          <div><strong>Quality Gates:</strong> Define validation checkpoints throughout the process</div>
        </div>
      </div>

      <div className="p-6 bg-slate-800/20 rounded-lg border border-slate-700/30">
        <h4 className="font-semibold text-slate-200 mb-4">Model Selection</h4>
        <div className="space-y-3 text-sm text-slate-300">
          <div><strong>Reasoning Models:</strong> Use reasoning models for complex planning tasks</div>
          <div><strong>Context Windows:</strong> Consider token limits when providing documentation</div>
          <div><strong>Iteration Cycles:</strong> Plan for multiple refinement passes</div>
          <div><strong>Validation Methods:</strong> Establish how to verify planning outputs</div>
        </div>
      </div>
    </div>

    <Alert className="mb-6 bg-blue-950/30 border-blue-500/30">
      <CheckCircle2 className="h-4 w-4 text-blue-400" />
      <AlertTitle className="text-blue-200">Implementation Success Pattern</AlertTitle>
      <AlertDescription className="text-blue-100/80 mt-3">
        <div className="space-y-2">
          <p>Teams that excel at AI-assisted development follow this pattern:</p>
          <div className="text-sm space-y-1">
            <div>• <strong>Start Small:</strong> Begin with low-risk features to establish patterns</div>
            <div>• <strong>Iterate Frequently:</strong> Refine prompts and processes based on results</div>
            <div>• <strong>Document Success:</strong> Capture what works for future reference</div>
            <div>• <strong>Share Knowledge:</strong> Distribute successful patterns across the team</div>
          </div>
        </div>
      </AlertDescription>
    </Alert>

    <CodeBlock
      title="Planning Phase Example"
      code={`# Effective planning preparation
"Based on our environment setup:
1. Review @codebase-docs.md for current patterns
2. Reference @.cursor/rules/ for coding standards
3. Use Context7 to load latest API documentation
4. Create task breakdown following our decomposition methodology

Goal: Implement user authentication system
Constraints: Must integrate with existing session management
Context: @docs/auth-requirements.md, @services/session/*"`}
      language="bash"
    />
  </div>
);
