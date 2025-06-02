
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const BlogHeader = () => {
  return (
    <header className="container mx-auto px-4 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button 
            variant="secondary" 
            asChild 
            className="mb-6 bg-slate-800/60 backdrop-blur-sm border-slate-600/50 text-slate-200 hover:bg-slate-700/70 hover:border-slate-500/70 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Badge 
                variant="secondary" 
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-slate-200 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 shadow-lg"
              >
                AI Development
              </Badge>
              <Badge 
                variant="secondary" 
                className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm text-slate-200 border border-purple-500/30 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 shadow-lg"
              >
                Workflow
              </Badge>
              <Badge 
                variant="secondary" 
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-slate-200 border border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 shadow-lg"
              >
                Best Practices
              </Badge>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
            🚀 AI-Powered Development Workflow Framework
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl font-light">
            A comprehensive guide to integrating AI-first development workflows across any codebase
          </p>

          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2 hover:text-slate-200 transition-colors">
              <User className="h-5 w-5 text-blue-400" />
              <span className="font-medium">CheakyAI Academy Team</span>
            </div>
            <div className="flex items-center gap-2 hover:text-slate-200 transition-colors">
              <Calendar className="h-5 w-5 text-purple-400" />
              <span>January 2025</span>
            </div>
            <div className="flex items-center gap-2 hover:text-slate-200 transition-colors">
              <Clock className="h-5 w-5 text-cyan-400" />
              <span>25 min read</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
