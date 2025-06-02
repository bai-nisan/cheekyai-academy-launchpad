
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react";

// Single featured blog post
const featuredPost = {
  id: "1",
  title: "🚀 AI-Powered Development Workflow Framework",
  excerpt: "A comprehensive guide to integrating AI-first development workflows across any codebase. Master the fundamentals of modern AI-assisted development and transform your productivity.",
  author: "CheakyAI Academy Team",
  date: new Date().toLocaleDateString(),
  readingTime: "25 min",
  tags: ["AI Development", "Workflow", "Best Practices"],
  thumbnail: "/src/assets/ai_workflow_thumbnail.html",
  slug: "ai-powered-development-workflow",
  category: "AI Development"
};

const relevantCategories = ["AI Development", "Workflow", "Best Practices"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const isPostVisible = useMemo(() => {
    const matchesSearch = featuredPost.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         featuredPost.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || featuredPost.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header Navigation */}
      <header className="relative z-50 bg-slate-900/50 backdrop-blur-xl border-b border-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CheakyAI Academy
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Home</Link>
              <Link to="/blog" className="text-blue-400 font-medium">Blog</Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Article
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Master AI-powered development workflows and transform your coding productivity
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search within this article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/50 rounded-xl backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-slate-800/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant="default"
                onClick={() => setSelectedCategory("All")}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === "All"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/50 hover:text-blue-400 backdrop-blur-sm"
                }`}
              >
                All Topics
              </Button>
              {relevantCategories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 border-transparent"
                      : "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/50 hover:text-blue-400 backdrop-blur-sm"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="container mx-auto px-4">
          {!isPostVisible ? (
            <div className="text-center py-16">
              <div className="text-slate-400 text-lg mb-6">No content matches your search criteria</div>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <Link to={`/blog/${featuredPost.slug}`} className="block group">
                <Card className="h-full bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <iframe
                      src={featuredPost.thumbnail}
                      title="AI Workflow Thumbnail"
                      className="w-full h-full border-0 group-hover:scale-110 transition-transform duration-700"
                      style={{ pointerEvents: 'none' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none shadow-lg">
                        Featured Article
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 relative">
                    <div className="flex flex-wrap gap-3 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-slate-800/50 text-slate-300 border-slate-700 backdrop-blur-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-6 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readingTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read Article CTA */}
                    <div className="flex items-center justify-between">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg group">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800 py-12 backdrop-blur-xl relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              CheakyAI Academy
            </div>
            <p className="text-slate-400 mb-6">
              Empowering developers with AI-driven workflows
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/blog" className="text-slate-400 hover:text-blue-400 transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
