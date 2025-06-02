
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
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start"
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
          className="w-full justify-start"
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
          className="w-full justify-start"
          onClick={copyLink}
        >
          <Link className="h-4 w-4 mr-2" />
          {copied ? "Copied!" : "Copy Link"}
        </Button>
      </CardContent>
    </Card>
  );
};
