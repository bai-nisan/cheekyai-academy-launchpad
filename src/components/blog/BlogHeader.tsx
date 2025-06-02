
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const BlogHeader = () => {
  return (
    <header className="container mx-auto px-4 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="secondary" asChild className="mb-6 bg-slate-700/80 backdrop-blur-sm border-slate-600 text-slate-200 hover:bg-slate-600/80">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-slate-700/60 backdrop-blur-sm text-slate-200 border-slate-600 hover:bg-slate-600/60">
                AI Development
              </Badge>
              <Badge variant="secondary" className="bg-slate-700/60 backdrop-blur-sm text-slate-200 border-slate-600 hover:bg-slate-600/60">
                Workflow
              </Badge>
              <Badge variant="secondary" className="bg-slate-700/60 backdrop-blur-sm text-slate-200 border-slate-600 hover:bg-slate-600/60">
                Best Practices
              </Badge>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            🚀 AI-Powered Development Workflow Framework
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
            A comprehensive guide to integrating AI-first development workflows across any codebase
          </p>

          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="font-medium">CheakyAI Academy Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>25 min read</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
