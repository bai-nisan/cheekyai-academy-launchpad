
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  tags: string[];
  thumbnail: string;
  slug: string;
  category: string;
}

const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "🚀 AI-Powered Development Workflow Framework",
    excerpt: "A comprehensive guide to integrating AI-first development workflows across any codebase",
    author: "Lovable Team",
    date: new Date().toLocaleDateString(),
    readingTime: "25 min",
    tags: ["AI Development", "Workflow", "Best Practices"],
    thumbnail: "/placeholder.svg",
    slug: "ai-powered-development-workflow",
    category: "AI Development"
  },
  {
    id: "2",
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure and build maintainable React applications using TypeScript best practices",
    author: "Development Team",
    date: "2024-05-28",
    readingTime: "15 min",
    tags: ["Tutorials", "Best Practices"],
    thumbnail: "/placeholder.svg",
    slug: "scalable-react-typescript",
    category: "Tutorials"
  },
  {
    id: "3",
    title: "Optimizing Development Workflow with AI Tools",
    excerpt: "Discover how AI tools can streamline your development process and boost productivity",
    author: "AI Research Team",
    date: "2024-05-25",
    readingTime: "12 min",
    tags: ["Workflow", "AI Development"],
    thumbnail: "/placeholder.svg",
    slug: "ai-tools-optimization",
    category: "Workflow"
  },
  {
    id: "4",
    title: "Advanced Component Design Patterns",
    excerpt: "Master advanced React component patterns for building flexible and reusable UI components",
    author: "UI Team",
    date: "2024-05-20",
    readingTime: "18 min",
    tags: ["Best Practices", "Tutorials"],
    thumbnail: "/placeholder.svg",
    slug: "component-design-patterns",
    category: "Best Practices"
  }
];

const categories = ["All", "AI Development", "Workflow", "Best Practices", "Tutorials"];
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "popular", label: "Most Popular" }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = mockPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "popular":
          return b.readingTime.localeCompare(a.readingTime);
        default: // newest
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Navigation */}
      <header className="relative z-50 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Lovable
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Lovable Blog
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Insights on AI development, best practices, and workflow optimization
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <span className="text-slate-300 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-800 border border-slate-600 text-white rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredAndSortedPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-slate-400 text-lg mb-4">No articles found matching your criteria</div>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="group h-full bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-blue-600/20 text-blue-300 border-blue-600/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-300 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-slate-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readingTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Lovable
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
