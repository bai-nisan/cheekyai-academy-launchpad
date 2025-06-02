
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';

export const RelatedArticles = () => {
  const articles = [
    {
      title: "Getting Started with AI-Assisted Coding",
      excerpt: "Learn the fundamentals of integrating AI tools into your development workflow",
      readTime: "10 min read",
      tags: ["AI", "Beginner", "Tutorial"],
      href: "#"
    },
    {
      title: "Advanced Prompt Engineering for Developers",
      excerpt: "Master the art of crafting effective prompts for code generation and review",
      readTime: "15 min read", 
      tags: ["AI", "Advanced", "Prompting"],
      href: "#"
    },
    {
      title: "Building AI-First Development Teams",
      excerpt: "Strategies for organizing and managing development teams in the AI era",
      readTime: "12 min read",
      tags: ["Management", "Team", "Strategy"],
      href: "#"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div key={index} className="flex justify-between items-start gap-4 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
              <div className="flex-1">
                <h4 className="font-semibold mb-2">{article.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                  <div className="flex gap-1">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <a href={article.href}>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
