
import { useState, useEffect } from "react";
import { BlogHeader, TableOfContents, BlogContent, SocialShare, ReadingProgress } from "@/components/blog";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <ReadingProgress />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-950/80 backdrop-blur-sm"></div>
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
              <div className="relative">
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-sm"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl p-8 lg:p-12 border border-slate-700/50 overflow-hidden">
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-900/20 rounded-2xl"></div>
                  <div className="relative">
                    <BlogContent />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
