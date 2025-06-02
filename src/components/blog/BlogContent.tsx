
import { Separator } from "@/components/ui/separator";
import {
  FrameworkOverview,
  EnvironmentPreparation,
  AIAssistedPlanning,
  TaskDecomposition,
  ExecutionWorkflow,
  BestPractices,
  ResourcesCommunity
} from "./sections";

export const BlogContent = () => {
  return (
    <article className="prose prose-lg max-w-none prose-slate prose-invert">
      {/* Custom prose styles for gradient headings */}
      <style jsx>{`
        article :global(h2) {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
        }
        
        article :global(h3) {
          background: linear-gradient(135deg, #06B6D4, #3B82F6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        article :global(p) {
          color: #CBD5E1;
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }
        
        article :global(strong) {
          color: #F1F5F9;
          font-weight: 600;
        }
        
        article :global(code) {
          background: #1E293B;
          color: #06B6D4;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          border: 1px solid #334155;
        }
        
        article :global(blockquote) {
          border-left: 4px solid #3B82F6;
          background: #1E293B/50;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          border-radius: 0.5rem;
          backdrop-filter: blur(10px);
        }
        
        article :global(ul) {
          color: #CBD5E1;
        }
        
        article :global(li) {
          margin: 0.5rem 0;
        }
        
        article :global(li::marker) {
          color: #3B82F6;
        }
      `}</style>
      
      <div className="space-y-12">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur-sm"></div>
          <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
            <FrameworkOverview />
          </div>
        </section>
        
        <div className="relative">
          <Separator className="bg-gradient-to-r from-transparent via-slate-600 to-transparent h-px" />
        </div>
        
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-lg blur-sm"></div>
          <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
            <EnvironmentPreparation />
          </div>
        </section>
        
        <div className="relative">
          <Separator className="bg-gradient-to-r from-transparent via-slate-600 to-transparent h-px" />
        </div>
        
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg blur-sm"></div>
          <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
            <AIAssistedPlanning />
          </div>
        </section>
        
        <div className="relative">
          <Separator className="bg-gradient-to-r from-transparent via-slate-600 to-transparent h-px" />
        </div>
        
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur-sm"></div>
          <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
            <TaskDecomposition />
          </div>
        </section>
        
        <div className="relative">
          <Separator className="bg-gradient-to-r from-transparent via-slate-600 to-transparent h-px" />
        </div>
        
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-lg blur-sm"></div>
          <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
            <ExecutionWorkflow />
          </div>
        </section>
        
        <div className="relative">
          <Separator className="bg-gradient-to-r from-transparent via-slate-600 to-transparent h-px" />
        </div>
        
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg blur-sm"></div>
          <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
            <BestPractices />
          </div>
        </section>
        
        <div className="relative">
          <Separator className="bg-gradient-to-r from-transparent via-slate-600 to-transparent h-px" />
        </div>
        
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur-sm"></div>
          <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30">
            <ResourcesCommunity />
          </div>
        </section>
      </div>
    </article>
  );
};
