
import { useEffect, useState } from "react";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogContent } from "@/components/blog/BlogContent";
import { SocialShare } from "@/components/blog/SocialShare";
import { ReadingProgress } from "@/components/blog/ReadingProgress";

const BlogPost = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("h2[id], h3[id]");
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <div className="container mx-auto px-4 py-8">
        <BlogHeader />
        
        <div className="grid lg:grid-cols-4 gap-8 mt-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <TableOfContents activeSection={activeSection} />
              <div className="mt-8">
                <SocialShare />
              </div>
            </div>
          </aside>
          
          <main className="lg:col-span-3">
            <BlogContent />
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
