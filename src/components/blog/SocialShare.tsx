
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Linkedin, Twitter, Link } from "lucide-react";
import { useState } from "react";

export const SocialShare = () => {
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
    <Card className="bg-slate-900/30 backdrop-blur-sm border-slate-700/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2 text-slate-200">
          <Share2 className="h-4 w-4" />
          Share
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start bg-slate-800/40 border-slate-700/50 text-slate-300 hover:bg-slate-700/60 hover:text-slate-100 hover:border-slate-600"
          asChild
        >
          <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter className="h-4 w-4 mr-2" />
            Twitter
          </a>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start bg-slate-800/40 border-slate-700/50 text-slate-300 hover:bg-slate-700/60 hover:text-slate-100 hover:border-slate-600"
          asChild
        >
          <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4 mr-2" />
            LinkedIn
          </a>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start bg-slate-800/40 border-slate-700/50 text-slate-300 hover:bg-slate-700/60 hover:text-slate-100 hover:border-slate-600"
          onClick={copyLink}
        >
          <Link className="h-4 w-4 mr-2" />
          {copied ? "Copied!" : "Copy Link"}
        </Button>
      </CardContent>
    </Card>
  );
};
