
import { Share2, Linkedin, Twitter, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const TopNavigation = () => {
  const [copied, setCopied] = useState(false);
  
  const url = window.location.href;
  const title = "AI-Powered Development Workflow Framework";
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border-b border-slate-700/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <Share2 className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium">Share this article</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-slate-100 hover:bg-slate-800/60 transition-all duration-200"
              asChild
            >
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4 mr-1" />
                Twitter
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-slate-100 hover:bg-slate-800/60 transition-all duration-200"
              asChild
            >
              <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-1" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-slate-100 hover:bg-slate-800/60 transition-all duration-200"
              onClick={copyLink}
            >
              <Link className="h-4 w-4 mr-1" />
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
