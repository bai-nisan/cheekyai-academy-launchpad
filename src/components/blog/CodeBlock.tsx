
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, ChevronDown, ChevronRight } from "lucide-react";

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
    <div className="relative my-6">
      {title && (
        <div className="flex items-center justify-between bg-slate-800/60 px-4 py-3 rounded-t-lg border-b border-slate-600/30">
          <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            {title}
          </span>
          {collapsible && (
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-slate-100 hover:bg-slate-700/60 transition-all duration-200"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      )}
      
      {isExpanded && (
        <div className="relative group">
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 z-10 text-slate-400 hover:text-slate-100 hover:bg-slate-700/80 backdrop-blur-sm transition-all duration-200"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            
            <pre 
              className={`overflow-x-auto p-4 bg-slate-900/80 backdrop-blur-sm border border-slate-600/30 ${title ? "rounded-t-none rounded-b-lg" : "rounded-lg"} text-slate-200 relative`}
            >
              <code 
                className="text-sm block text-inherit" 
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
