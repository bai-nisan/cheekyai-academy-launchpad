
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
    <div className="min-h-screen bg-slate-950">
      <ReadingProgress />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative">
          <BlogHeader />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-16 z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <TableOfContents activeSection={activeSection} />
                <SocialShare />
              </div>
            </aside>
            
            <main className="lg:col-span-3">
              <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-12 border border-slate-800/50">
                <BlogContent />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
