
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const BlogHeader = () => {
  return (
    <header className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">AI Development</Badge>
            <Badge variant="secondary">Workflow</Badge>
            <Badge variant="secondary">Best Practices</Badge>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          🚀 AI-Powered Development Workflow Framework
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed">
          A comprehensive guide to integrating AI-first development workflows across any codebase
        </p>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>CheakyAI Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>January 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>25 min read</span>
          </div>
        </div>
      </div>
    </header>
  );
};
