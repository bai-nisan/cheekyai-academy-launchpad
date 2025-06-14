
import { BlogHeader, BlogContent, ReadingProgress, TopNavigation } from "@/components/blog";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <ReadingProgress />
      
      {/* Full-width Hero Section */}
      <BlogHeader />

      {/* Top Navigation with Share */}
      <TopNavigation />

      {/* Main Content - Full Width with Optimal Reading Constraints */}
      <main className="relative">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-sm"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl p-8 lg:p-16 border border-slate-700/50 overflow-hidden">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-900/20 rounded-2xl"></div>
                <div className="relative">
                  <BlogContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
