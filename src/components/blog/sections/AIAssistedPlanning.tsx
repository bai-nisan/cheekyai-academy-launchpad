import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CodeBlock } from "../CodeBlock";

export const AIAssistedPlanning = () => {
  return (
    <section id="ai-assisted-planning" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-blue-400" />
        AI-Assisted Planning
      </h2>
      
      <h3 className="text-2xl font-semibold mb-4 text-slate-200">Creating Technical Specifications</h3>
      
      <Methodology />
      <WorkflowProcess />
    </section>
  );
};

const Methodology = () => (
  <Card className="mb-6 bg-slate-800/80 backdrop-blur-md border-slate-600/50 shadow-2xl">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-slate-200">🎯 Methodology</CardTitle>
    </CardHeader>
    <CardContent>
      <Accordion type="single" collapsible defaultValue="gather">
        <AccordionItem value="gather">
          <AccordionTrigger className="text-lg font-semibold text-slate-200">
            1. Gather Requirements
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>Feature tickets or business requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>Technical constraints and dependencies</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>Acceptance criteria</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="leverage">
          <AccordionTrigger className="text-lg font-semibold text-slate-200">
            2. Leverage AI Context
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>Use reasoning models (e.g., o4-mini) for complex planning</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>Reference existing patterns with @ mentions</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>Include architectural documentation</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="generate">
          <AccordionTrigger className="text-lg font-semibold text-slate-200">
            3. Generate Specifications
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>Comprehensive technical approach</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>API contracts and data models</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>Component architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>Testing strategy</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
);

const WorkflowProcess = () => {
  const workflowSteps = [
    { 
      step: 1, 
      title: "Collect Input Materials", 
      content: (
        <CodeBlock
          code={`- Main feature requirements (@feature_ticket.md)
- Specification templates (@templates/prd_template.md)
- Technical documentation:
  - Backend patterns (@docs/backend/microservices.md)
  - Frontend standards (@docs/frontend/component-patterns.md)
  - API documentation (@docs/api/swagger.yaml)`}
          language="markdown"
        />
      )
    },
    { 
      step: 2, 
      title: "Model Selection", 
      content: (
        <ul className="space-y-1 text-slate-300">
          <li>• Use reasoning-optimized models for planning tasks</li>
          <li>• These excel at structure, integration, and maintaining clarity</li>
          <li>• Especially important when integrating external documentation via Context7</li>
        </ul>
      )
    },
    { 
      step: 3, 
      title: "Context Loading", 
      content: (
        <ul className="space-y-1 text-slate-300">
          <li>• Use @ mentions to bring all relevant documents into AI context</li>
          <li>• Include coding standards, architectural decisions, and constraints</li>
          <li>• Use Context7 to inject external API documentation when needed</li>
        </ul>
      )
    },
    { 
      step: 4, 
      title: "Specification Generation", 
      content: (
        <>
          <p className="text-slate-300 mb-3">Prompt structure:</p>
          <CodeBlock
            code={`"Create a detailed technical specification including:
- Feature: @requirements/feature.md
- Template: @templates/specification.md
- Backend rules: @docs/backend/patterns.md
- Frontend rules: @docs/frontend/standards.md
- External APIs: Use Context7 to include Stripe/Auth0/AWS documentation
- Constraints: Focus on planning, not implementation"`}
            language="bash"
          />
        </>
      )
    },
    { 
      step: 5, 
      title: "Review and Refinement", 
      content: (
        <ul className="space-y-1 text-slate-300">
          <li>• Verify technical accuracy</li>
          <li>• Ensure completeness</li>
          <li>• Align with team standards</li>
          <li>• Iterate with follow-up prompts</li>
          <li>• Use Context7 to add external API documentation where needed</li>
        </ul>
      )
    }
  ];

  return (
    <>
      <h4 className="text-xl font-medium mb-3 text-slate-200">🔄 Workflow Process</h4>
      
      <div className="space-y-4 mb-6">
        {workflowSteps.map((item) => (
          <Card key={item.step} className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold mb-3 text-slate-200 text-lg">{item.title}</h5>
                  {item.content}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}; 