
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

export const BlogHeader = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="mb-12">
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">AI Development</Badge>
        <Badge variant="secondary">Workflow</Badge>
        <Badge variant="secondary">Best Practices</Badge>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        🚀 AI-Powered Development Workflow Framework
      </h1>
      
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        A comprehensive guide to integrating AI-first development workflows across any codebase
      </p>
      
      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Lovable Team</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{currentDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>25 min read</span>
        </div>
      </div>
    </header>
  );
};
