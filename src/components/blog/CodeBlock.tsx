
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
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between bg-muted px-4 py-2 rounded-t-lg border-b">
          <span className="text-sm font-medium">{title}</span>
          {collapsible && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Collapse" : "Expand"}
            </Button>
          )}
        </div>
      )}
      
      {isExpanded && (
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 z-10"
            onClick={copyToClipboard}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
          
          <pre className={`overflow-x-auto p-4 bg-muted rounded-lg ${title ? "rounded-t-none" : ""}`}>
            <code className={`language-${language} text-sm`}>
              {code}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};
