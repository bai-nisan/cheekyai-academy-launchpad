
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  collapsible?: boolean;
  title?: string;
}

export const CodeBlock = ({ code, language = "bash", collapsible = false, title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!collapsible);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative codeblock-wrapper my-6">
      {title && (
        <div className="flex items-center justify-between bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm px-4 py-3 rounded-t-lg border border-slate-600/50 border-b-0">
          <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            {title}
          </span>
          {collapsible && (
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-slate-100 hover:bg-slate-700/60 transition-all duration-200"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Collapse" : "Expand"}
            </Button>
          )}
        </div>
      )}
      
      {isExpanded && (
        <div className="relative group">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative code-block-container [&_pre]:!text-slate-200 [&_code]:!text-slate-200 [&_span]:!text-slate-200 [&_*]:!text-slate-200">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 z-10 text-slate-400 hover:text-slate-100 hover:bg-slate-700/80 backdrop-blur-sm transition-all duration-200 border border-slate-600/30 hover:border-slate-500/50"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            
            <pre 
              className={`overflow-x-auto p-4 bg-slate-900/90 backdrop-blur-sm border border-slate-600/50 ${title ? "rounded-t-none rounded-b-lg" : "rounded-lg"} !text-slate-200 relative`}
            >
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 via-transparent to-slate-900/10 rounded-lg pointer-events-none"></div>
              
              <code 
                className="text-sm block !text-inherit relative z-10" 
              >
                {code}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
