
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  activeSection: string;
}

export const TableOfContents = ({ activeSection }: TableOfContentsProps) => {
  const sections = [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'core-components', title: 'Core Components', level: 2 },
    { id: 'environment-preparation', title: 'Environment Preparation', level: 1 },
    { id: 'development-environment', title: 'Development Environment Setup', level: 2 },
    { id: 'ai-tools-configuration', title: 'AI Tools Configuration', level: 2 },
    { id: 'project-structure', title: 'Project Structure Standards', level: 2 },
    { id: 'ai-assisted-planning', title: 'AI-Assisted Planning', level: 1 },
    { id: 'requirements-analysis', title: 'Requirements Analysis', level: 2 },
    { id: 'architecture-design', title: 'Architecture Design', level: 2 },
    { id: 'task-decomposition', title: 'Task Decomposition', level: 1 },
    { id: 'feature-breakdown', title: 'Feature Breakdown', level: 2 },
    { id: 'dependency-mapping', title: 'Dependency Mapping', level: 2 },
    { id: 'execution-workflow', title: 'Execution Workflow', level: 1 },
    { id: 'development-cycle', title: 'Development Cycle', level: 2 },
    { id: 'quality-assurance', title: 'Quality Assurance', level: 2 },
    { id: 'best-practices', title: 'Best Practices', level: 1 },
    { id: 'ai-prompt-engineering', title: 'AI Prompt Engineering', level: 2 },
    { id: 'code-quality', title: 'Code Quality Standards', level: 2 },
    { id: 'resources-community', title: 'Resources & Community', level: 1 },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                'block w-full text-left text-sm py-1 px-2 rounded hover:bg-accent transition-colors',
                section.level === 2 && 'ml-4',
                activeSection === section.id && 'bg-accent font-medium'
              )}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
};
