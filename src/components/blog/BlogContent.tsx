import { CodeBlock } from "./CodeBlock";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export const BlogContent = () => {
  return (
    <article className="prose prose-lg max-w-none prose-slate prose-invert">
      <section id="framework-overview" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-100">Framework Overview</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          This framework outlines a comprehensive approach to integrating AI-first development workflows 
          across any codebase and planning process. It guides technical leads and senior developers in 
          establishing environment standards, aligning processes, and enabling AI-powered task execution.
        </p>
        
        <Card className="mb-6 bg-slate-800/40 backdrop-blur-sm border-slate-700/50 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Core Components</h3>
            <ol className="space-y-2 list-decimal list-inside text-slate-300">
              <li><strong className="text-slate-200">Environment Preparation</strong> - Standardizing your codebase for AI assistance</li>
              <li><strong className="text-slate-200">AI-Assisted Planning</strong> - Creating technical specifications with AI</li>
              <li><strong className="text-slate-200">Task Decomposition</strong> - Breaking down work into AI-executable chunks</li>
              <li><strong className="text-slate-200">Execution Workflow</strong> - Implementing tasks with AI assistance</li>
              <li><strong className="text-slate-200">Best Practices</strong> - Ensuring quality and consistency</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section id="environment-preparation" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-100">Environment Preparation</h2>
        
        <div id="tool-setup" className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-slate-200">Tool Setup</h3>
          <p className="text-slate-300 mb-4">
            Ensure AI development tools are installed:
          </p>
          
          <Card className="mb-6 bg-slate-800/40 backdrop-blur-sm border-slate-700/50 shadow-lg">
            <CardContent className="p-6">
              <ul className="space-y-2 text-slate-300">
                <li>• <strong className="text-slate-200">MCP Atlassian</strong> - For project management integration</li>
                <li>• <strong className="text-slate-200">Context7</strong> - Knowledge and documentation injection for enhanced task context</li>
                <li>• <strong className="text-slate-200">Task Master</strong> - PRD to subtask planning automation</li>
                <li>• <strong className="text-slate-200">Cursor</strong> - AI-powered IDE with context awareness</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div id="standards-requirements" className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-slate-200">Standards & Requirements</h3>
          
          <h4 className="text-xl font-medium mb-3 text-slate-200">📁 Codebase Indexing</h4>
          <p className="text-slate-300 mb-4">
            Create a `.cursorignore` file to prevent AI confusion in large codebases:
          </p>
          
          <Card className="mb-6 bg-slate-800/40 backdrop-blur-sm border-slate-700/50 shadow-lg">
            <CardContent className="p-6">
              <p className="mb-3 text-slate-300">Exclude redundant, deprecated, or legacy code that could mislead Cursor's agent:</p>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Old feature implementations that are no longer used</li>
                <li>• Deprecated API endpoints or services</li>
                <li>• Legacy migration files or outdated scripts</li>
                <li>• Generated files, build artifacts, and temporary code</li>
                <li>• Test fixtures or mock data that don't represent current patterns</li>
              </ul>
            </CardContent>
          </Card>

          <h4 className="text-xl font-medium mb-3 text-slate-200">📄 Repository Documentation</h4>
          <ul className="space-y-2 mb-6 text-slate-300">
            <li>• Use <a href="https://repomix.com/guide/prompt-examples" className="text-blue-400 hover:text-blue-300 underline transition-colors">Repomix</a> to generate comprehensive codebase documentation</li>
            <li>• Create contextual prompts for AI interactions</li>
            <li>• Maintain up-to-date architectural documentation</li>
          </ul>

          <h4 className="text-xl font-medium mb-3 text-slate-200">🧩 AI Context Rules (MDC Files)</h4>
          <p className="text-slate-300 mb-4">
            Create comprehensive Cursor rules files to standardize your development practices:
          </p>
          
          <Collapsible>
            <CollapsibleTrigger className="flex items-center gap-2 text-lg font-medium mb-4 text-slate-200 hover:text-blue-400 transition-colors">
              <ChevronDown className="h-5 w-5" />
              Rule Categories
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-4">
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• Code Conventions</li>
                      <li>• Boilerplate Rules</li>
                      <li>• Refactoring Guidelines</li>
                      <li>• Architecture Rules</li>
                      <li>• Security & Compliance</li>
                      <li>• Performance Guidelines</li>
                      <li>• API Design Standards</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-4">
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• Database Patterns</li>
                      <li>• Testing Strategies</li>
                      <li>• DevOps & Deployment</li>
                      <li>• Frontend Patterns</li>
                      <li>• Documentation Standards</li>
                      <li>• Team Collaboration</li>
                      <li>• Domain-Specific Rules</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div id="implementation" className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-slate-200">Implementation</h3>
          
          <h4 className="text-xl font-medium mb-3 text-slate-200">🚀 Quick Start: Repository Documentation with Repomix</h4>
          
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

          <Collapsible>
            <CollapsibleTrigger className="flex items-center gap-2 text-lg font-medium mb-4 text-slate-200 hover:text-blue-400 transition-colors">
              <ChevronDown className="h-5 w-5" />
              Example MDC Rule Files
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-6">
                <CodeBlock
                  title="frontend-component-rules.mdc"
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
                />

                <CodeBlock
                  title="database-patterns.mdc"
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
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      <section id="ai-assisted-planning" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-100">AI-Assisted Planning</h2>
        
        <h3 className="text-2xl font-semibold mb-4 text-slate-200">Creating Technical Specifications</h3>
        
        <Card className="mb-6 bg-slate-800/40 backdrop-blur-sm border-slate-700/50 shadow-lg">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold mb-4 text-slate-200">🎯 Methodology</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              <li><strong>Gather Requirements</strong> - Feature tickets, technical constraints, acceptance criteria</li>
              <li><strong>Leverage AI Context</strong> - Use reasoning models, reference patterns, include documentation</li>
              <li><strong>Generate Specifications</strong> - Technical approach, API contracts, component architecture, testing strategy</li>
            </ol>
          </CardContent>
        </Card>

        <h4 className="text-xl font-medium mb-3 text-slate-200">🔄 Workflow Process</h4>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">1</div>
            <div>
              <h5 className="font-semibold">Collect Input Materials</h5>
              <p className="text-sm text-muted-foreground">Feature requirements, specification templates, technical documentation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">2</div>
            <div>
              <h5 className="font-semibold">Model Selection</h5>
              <p className="text-sm text-muted-foreground">Use reasoning-optimized models for planning tasks</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">3</div>
            <div>
              <h5 className="font-semibold">Context Loading</h5>
              <p className="text-sm text-muted-foreground">Use @ mentions and Context7 for comprehensive context</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">4</div>
            <div>
              <h5 className="font-semibold">Specification Generation</h5>
              <p className="text-sm text-muted-foreground">Create detailed technical specifications with all requirements</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">5</div>
            <div>
              <h5 className="font-semibold">Review and Refinement</h5>
              <p className="text-sm text-muted-foreground">Verify accuracy, ensure completeness, align with standards</p>
            </div>
          </div>
        </div>

        <CodeBlock
          title="Specification Generation Example"
          code={`"Create a detailed technical specification including:
- Feature: @requirements/feature.md
- Template: @templates/specification.md
- Backend rules: @docs/backend/patterns.md
- Frontend rules: @docs/frontend/standards.md
- External APIs: Use Context7 to include Stripe/Auth0/AWS documentation
- Constraints: Focus on planning, not implementation"`}
          language="bash"
        />
      </section>

      <section id="task-decomposition" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-100">Task Decomposition</h2>
        
        <p className="text-muted-foreground mb-6">
          Transform specifications into executable, self-contained tasks that can be completed independently.
        </p>

        <Card className="mb-6 bg-slate-800/40 backdrop-blur-sm border-slate-700/50 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-slate-200">🔄 Workflow Process</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Parse Specifications</h4>
                <p className="text-sm text-muted-foreground">Save specification and use Task Master to parse</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Generate Task Structure</h4>
                <p className="text-sm text-muted-foreground">Creates tasks.json with 30-120 minute scoped tasks</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Create Individual Task Files</h4>
                <p className="text-sm text-muted-foreground">Generate separate files for each task with full context</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4. Ensure Task Completeness</h4>
                <p className="text-sm text-muted-foreground">Each task includes objective, references, dependencies, success criteria</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">5. Refine Tasks</h4>
                <p className="text-sm text-muted-foreground">Break down complex tasks, add specificity, update for changes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeBlock
          title="Task Decomposition Commands"
          code={`# Save specification to designated folder
scripts/specifications/feature_spec.md

# Use Task Master to parse
"Can you parse my specification at scripts/specifications/feature_spec.md?"

# Generate individual task files
"Please generate individual task files from tasks.json"

# Output structure:
# - tasks/task_001.txt
# - tasks/task_002.txt
# - etc.`}
          language="bash"
        />

        <Collapsible>
          <CollapsibleTrigger className="flex items-center gap-2 text-lg font-medium mb-4 text-slate-200 hover:text-blue-400 transition-colors">
            <ChevronDown className="h-5 w-5" />
            Using Context7 for Task Enhancement
          </CollapsibleTrigger>
          <CollapsibleContent>
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
          </CollapsibleContent>
        </Collapsible>
      </section>

      <section id="execution-workflow" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-100">Execution Workflow</h2>
        
        <p className="text-muted-foreground mb-6">
          Developers use AI assistance to complete each self-contained task efficiently.
        </p>

        <Card className="mb-6 bg-slate-800/40 backdrop-blur-sm border-slate-700/50 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-slate-200">⚡ Process</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Task Selection</h4>
                <p className="text-sm text-muted-foreground">Choose and load task context, including external APIs via Context7</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. AI-Assisted Implementation</h4>
                <p className="text-sm text-muted-foreground">AI reads context, suggests approach, generates code following standards</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Progress Tracking</h4>
                <p className="text-sm text-muted-foreground">Mark tasks complete, update dependencies, track blockers</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4. Continuous Refinement</h4>
                <p className="text-sm text-muted-foreground">Update tasks as requirements change, refresh external documentation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <CodeBlock
          title="Execution Examples"
          code={`# Basic task implementation
"Please help me implement task 3 from tasks/task_003.txt"

# Task with external API integration
"This task requires Twilio integration. Use Context7 to load:
- Twilio SMS API documentation
- Webhook security requirements
- Rate limiting guidelines
Then implement the notification service following our patterns"

# Progress updates
"I've completed task 4. What's next?"
"Task 5 is blocked by API changes. Please update it."
"The AWS SDK documentation has been updated. Use Context7 to refresh the S3 integration context for task 8."`}
          language="bash"
        />
      </section>

      <section id="best-practices" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-100">Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-200">Planning Phase</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Rich Context = Better Results:</strong> Include all relevant documentation</li>
                <li>• <strong>Use Strong Examples:</strong> Good templates guide AI output</li>
                <li>• <strong>Set Clear Boundaries:</strong> Be explicit about planning vs. coding</li>
                <li>• <strong>Model Selection:</strong> Use reasoning models for complex planning</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-200">Task Decomposition</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Clear Scope:</strong> Each task takes 30-120 minutes</li>
                <li>• <strong>Full Context:</strong> Include all necessary references</li>
                <li>• <strong>External Documentation:</strong> Use Context7 for third-party APIs</li>
                <li>• <strong>Define "Done":</strong> Clear success criteria</li>
                <li>• <strong>Maintain Flexibility:</strong> Update as requirements change</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-200">Execution Phase</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Trust but Verify:</strong> Review AI-generated code</li>
                <li>• <strong>Maintain Standards:</strong> Ensure consistency with team patterns</li>
                <li>• <strong>Test Coverage:</strong> Validate all implementations</li>
                <li>• <strong>Document Decisions:</strong> Track why choices were made</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-200">General Guidelines</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Start Small:</strong> Begin with low-risk features</li>
                <li>• <strong>Iterate Frequently:</strong> Refine prompts and processes</li>
                <li>• <strong>Share Knowledge:</strong> Document successful patterns</li>
                <li>• <strong>Measure Impact:</strong> Track productivity improvements</li>
                <li>• <strong>Stay Current:</strong> Use Context7 to keep documentation up-to-date</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="resources-community" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-100">Resources & Community</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-200">📚 Learning Resources</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <a href="https://forum.cursor.sh/" className="text-primary hover:underline">Cursor Forum</a> - Best practices and use cases</li>
                <li>• <a href="https://github.com/modelcontextprotocol/servers" className="text-primary hover:underline">MCP Server Registry</a> - Available integrations</li>
                <li>• <a href="https://github.com/eyaltoledano/task-master" className="text-primary hover:underline">Task Master Documentation</a> - PRD to task automation</li>
                <li>• <a href="https://github.com/upstash/context7" className="text-primary hover:underline">Context7</a> - Documentation injection for AI context</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-200">👥 Key Figures to Follow</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• @mntruell - Cursor CEO, development workflows</li>
                <li>• @amanrsanger - Cursor co-founder, implementation patterns</li>
                <li>• @sualehasif996 - Architecture insights</li>
                <li>• @arvidxyz - Startup workflows and AI toolchains</li>
                <li>• @eyaltoledano - Task Master creator, agent development</li>
                <li>• Andrej Karpathy (YouTube) - Understanding LLM architecture</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-200">🌐 Communities</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Cursor Forum - Sort by "Top" for key discussions</li>
                <li>• Cursor Reddit - Community updates and feedback</li>
                <li>• AI Development Discord servers</li>
                <li>• Tool-specific Slack workspaces</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  );
};
