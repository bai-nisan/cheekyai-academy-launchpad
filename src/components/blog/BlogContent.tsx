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
      <FrameworkOverview />
      
      <Separator className="mb-12 bg-slate-800" />
      
      <EnvironmentPreparation />
      
      <Separator className="mb-12 bg-slate-800" />
      
      <AIAssistedPlanning />
      
      <Separator className="mb-12 bg-slate-800" />
      
      <TaskDecomposition />
      
      <Separator className="mb-12 bg-slate-800" />
      
      <ExecutionWorkflow />
      
      <Separator className="mb-12 bg-slate-800" />
      
      <BestPractices />
      
      <Separator className="mb-12 bg-slate-800" />
      
      <ResourcesCommunity />
    </article>
  );
};
