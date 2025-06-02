
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const BlogHeader = () => {
  return (
    <header className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Full-width gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>
      
      {/* Floating Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="max-w-5xl mx-auto">
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              🚀 AI-Powered Development Workflow Framework
            </h1>

            <p className="text-xl md:text-3xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
              A comprehensive guide to integrating AI-first development workflows across any codebase
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
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
      </div>
    </header>
  );
};
