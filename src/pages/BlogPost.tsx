import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { BlogContent } from '@/components/blog/BlogContent';
import { SocialShare } from '@/components/blog/SocialShare';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { NewsletterSignup } from '@/components/blog/NewsletterSignup';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { ThemeToggle } from '@/components/blog/ThemeToggle';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const [activeSection, setActiveSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));

      // Update active section based on scroll position
      const sections = document.querySelectorAll('[data-section]');
      let current = '';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          current = section.getAttribute('data-section') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress progress={readingProgress} />
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Table of Contents - Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <TableOfContents activeSection={activeSection} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <BlogHeader />
              <Separator className="my-8" />
              <BlogContent />
            </article>

            {/* Social Share */}
            <div className="mt-12 pt-8 border-t">
              <SocialShare 
                title="🚀 AI-Powered Development Workflow Framework"
                url={window.location.href}
              />
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <RelatedArticles />
            </div>
          </main>

          {/* Mobile TOC */}
          <div className="lg:hidden">
            <Card className="mb-8">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Table of Contents
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-4">
                    <TableOfContents activeSection={activeSection} />
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 max-w-4xl mx-auto">
          <NewsletterSignup />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button variant="outline" onClick={scrollToTop}>
              Back to Top
            </Button>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">AI Development Resources</a>
              <a href="#" className="hover:text-foreground">Community</a>
              <a href="#" className="hover:text-foreground">Documentation</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;
