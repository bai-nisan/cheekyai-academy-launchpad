import React, { useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Shield, 
  ChartBar, 
  Smile, 
  TrendingUp,
  Calendar,
  Check,
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

// Floating Orbs Component
const FloatingOrbs = () => (
  <>
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
  </>
);

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-x-hidden scroll-smooth">
      {/* Subtle Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CheakyAI Academy
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#program" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Program</a>
              <a href="#stages" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Stages</a>
              <a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Pricing</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg">
                Book Discovery Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl mt-2 p-6"
            >
              <div className="flex flex-col space-y-4">
                <a href="#program" className="text-slate-300 hover:text-blue-400 transition-colors">Program</a>
                <a href="#stages" className="text-slate-300 hover:text-blue-400 transition-colors">Stages</a>
                <a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors">Pricing</a>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                  Book Discovery Call
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        <FloatingOrbs />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Turn One Dev Team Into an AI-Powered 10× Squad
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
              AI-First Development Transformation Program
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 shadow-2xl shadow-blue-500/25"
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See the Program
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 backdrop-blur-sm"
              >
                Book Discovery Call
                <Calendar className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section id="program" className="py-32 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why This Matters
            </h2>
            
            <Card className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 p-8 mb-8 shadow-xl">
              <CardContent className="p-0">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Most dev teams think AI tools are "nice to have" - a few ChatGPT prompts here, maybe some Copilot autocomplete there. 
                  But that's like having a Ferrari and only using it to check your mail.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  <strong className="text-white">Real AI-first development</strong> means your entire workflow, from planning to deployment, 
                  is designed around AI capabilities. It means your team thinks in terms of AI-assisted architecture, 
                  AI-generated tests, AI-powered code reviews, and AI-enhanced debugging.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  The teams that master this approach aren't just 10-20% faster. They're operating at a completely different level.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 overflow-visible">
              <Card className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 p-6 hover:bg-slate-700/50 transition-all duration-300 overflow-visible shadow-xl">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400 break-words">Prerequisites</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Team with existing codebase (6+ months old)
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Active development (commits within last month)
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      At least 2-3 developers willing to participate
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 p-6 hover:bg-slate-700/50 transition-all duration-300 overflow-visible shadow-xl">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400 break-words">Works Best With</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-3" />
                      Teams feeling behind on AI adoption
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-3" />
                      Pressure to deliver faster without sacrificing quality
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-3" />
                      Leadership committed to transformation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Stages Section */}
      <section id="stages" className="py-32 bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Three-Stage Journey
            </h2>

            <div className="grid md:grid-cols-3 gap-8 overflow-visible">
              {[
                {
                  stage: "Stage 1",
                  title: "AI Core Concepts Workshop",
                  duration: "3 hours",
                  description: "Foundation workshop covering AI development principles and tool mastery",
                  details: [
                    "AI-first development mindset",
                    "Tool ecosystem mastery",
                    "Prompt engineering for developers",
                    "Code generation strategies"
                  ]
                },
                {
                  stage: "Stage 2", 
                  title: "Codebase AI-Priming",
                  duration: "10-15 hours",
                  description: "Hands-on transformation of your actual codebase with AI integration",
                  details: [
                    "Codebase analysis and documentation",
                    "AI-assisted refactoring",
                    "Test generation automation",
                    "Code review enhancement"
                  ]
                },
                {
                  stage: "Stage 3",
                  title: "Hands-On AI Workflow",
                  duration: "4 hours",
                  description: "Implementation of complete AI-powered development workflows",
                  details: [
                    "End-to-end AI workflows",
                    "Team collaboration patterns",
                    "Quality assurance integration",
                    "Deployment automation"
                  ]
                }
              ].map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="group overflow-visible"
                >
                  <Card className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 p-6 h-full hover:bg-slate-700/50 transition-all duration-300 overflow-visible shadow-xl hover:shadow-2xl">
                    <CardContent className="p-0">
                      <Badge className="mb-4 bg-slate-700/70 text-white border-slate-600">{stage.stage}</Badge>
                      <h3 className="text-xl font-bold mb-2 text-white break-words">{stage.title}</h3>
                      <p className="text-sm text-slate-400 mb-4">{stage.duration}</p>
                      <p className="text-slate-300 mb-6 break-words">{stage.description}</p>
                      <ul className="space-y-3">
                        {stage.details.map((detail, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-300">
                            <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="break-words">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-32 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Proven Results
            </h2>

            <div className="grid md:grid-cols-5 gap-8 overflow-visible">
              {[
                { icon: Zap, value: 60, suffix: "%", label: "Faster Development" },
                { icon: Shield, value: 90, suffix: "%", label: "Code Standards" },
                { icon: ChartBar, value: 85, suffix: "%", label: "Test Coverage" },
                { icon: Smile, value: 95, suffix: "%", label: "Team Satisfaction" },
                { icon: TrendingUp, value: 40, suffix: "%", label: "KPI Improvement" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 p-6 hover:bg-slate-700/50 hover:scale-105 transition-all duration-300 overflow-visible shadow-xl">
                    <CardContent className="p-0">
                      <metric.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                      <div className="text-4xl font-bold text-white mb-2">
                        <AnimatedCounter end={metric.value} />
                        {metric.suffix}
                      </div>
                      <p className="text-slate-300 text-sm whitespace-nowrap">{metric.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Transformation
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12 overflow-visible">
              {[
                {
                  name: "Foundation",
                  price: "₪7,990",
                  description: "Perfect for getting started with AI-first development",
                  features: [
                    "Stage 1: AI Core Concepts Workshop (3 hours)",
                    "Foundational AI development training",
                    "Tool setup and configuration",
                    "Basic prompt engineering",
                    "30 days email support"
                  ],
                  popular: false
                },
                {
                  name: "Practitioner",
                  price: "₪14,990", 
                  description: "Most comprehensive package for complete transformation",
                  features: [
                    "All Foundation features",
                    "Stage 2: Codebase AI-Priming (10-15 hours)",
                    "Hands-on codebase transformation",
                    "AI workflow implementation",
                    "Team collaboration training",
                    "60 days priority support"
                  ],
                  popular: true
                },
                {
                  name: "Transformation",
                  price: "₪29,990",
                  description: "Complete end-to-end AI transformation with ongoing support",
                  features: [
                    "All Practitioner features", 
                    "Stage 3: Hands-On AI Workflow (4 hours)",
                    "Complete workflow automation",
                    "Advanced AI integration",
                    "Custom tool development",
                    "90 days dedicated support",
                    "Monthly check-ins"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-visible"
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-1 border-0 shadow-lg">
                      Most Popular
                    </Badge>
                  )}
                  <Card className={`h-full p-8 ${plan.popular ? 'bg-slate-700/70 border-blue-500/30 shadow-2xl shadow-blue-500/10' : 'bg-slate-800/70 border-slate-700/50'} backdrop-blur-md border hover:bg-slate-700/50 transition-all duration-300 overflow-visible shadow-xl`}>
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold text-white mb-2 break-words">{plan.name}</h3>
                      <div className="text-4xl font-bold text-white mb-4">{plan.price}</div>
                      <p className="text-slate-300 mb-6 break-words">{plan.description}</p>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-slate-300">
                            <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg' : 'bg-slate-700/70 hover:bg-slate-600/70'} hover:scale-105 transition-all duration-200`}>
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 p-8 shadow-xl">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Multiple Teams?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">2-3 Teams</h4>
                    <p className="text-slate-300 mb-4">15% discount on total package price</p>
                    <p className="text-sm text-slate-400">Includes cross-team coordination and shared best practices</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-4">4+ Teams</h4>
                    <p className="text-slate-300 mb-4">25% discount + custom enterprise support</p>
                    <p className="text-sm text-slate-400">Full organizational transformation with executive reporting</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Your Journey Timeline */}
      <section className="py-32 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Journey
            </h2>

            <div className="space-y-8">
              {[
                { step: "1", title: "Discovery Call", description: "We analyze your team's current state and development challenges" },
                { step: "2", title: "Program Design", description: "Custom program design based on your tech stack and goals" },
                { step: "3", title: "Kickoff Workshop", description: "Stage 1 implementation with your entire development team" },
                { step: "4", title: "Hands-On Transformation", description: "Stages 2-3 with real codebase integration and workflow setup" },
                { step: "5", title: "Ongoing Support", description: "Continued guidance as your team masters AI-first development" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 relative bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Development Team?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the growing number of development teams who have already made the leap to AI-first development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 shadow-2xl shadow-blue-500/25"
              >
                Book Your Discovery Call
                <Calendar className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 backdrop-blur-sm"
              >
                Download Program Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-700/50 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              CheakyAI Academy
            </div>
            <p className="text-slate-400 mb-6">Transforming development teams with AI-first methodologies</p>
            <div className="flex justify-center space-x-8 text-slate-400">
              <a href="mailto:contact@cheakyai.academy" className="hover:text-blue-400 transition-colors">
                contact@cheakyai.academy
              </a>
              <span>|</span>
              <a href="tel:+972-50-555-0123" className="hover:text-blue-400 transition-colors">
                +972-50-555-0123
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
