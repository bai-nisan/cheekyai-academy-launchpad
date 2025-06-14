import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, ChartBar, Smile, TrendingUp, Calendar, Check, Star, ArrowRight, Menu, X, Target, Rocket, Trophy, GraduationCap, Wrench, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DiscoveryCallForm } from '@/components/DiscoveryCallForm';
import CompanyLogosSection from '@/components/CompanyLogosSection';
import { Link } from 'react-router-dom';

// Animated Counter Component
const AnimatedCounter = ({
  end,
  duration = 2
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
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
const FloatingOrbs = () => <>
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
  </>;

// Hero Section Component
const HeroSection = ({
  onOpenForm
}: {
  onOpenForm: () => void;
}) => <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
    <FloatingOrbs />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }}>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-tight">
          Turn One Dev Team Into an AI-Powered 10× Squad
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
          AI-First Development Transformation Program
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 shadow-2xl shadow-blue-500/25" onClick={() => document.getElementById('program')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            See the Program
            <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 backdrop-blur-sm" onClick={onOpenForm}>
            Book Discovery Call
            <Calendar className="ml-2" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>;

// Why This Matters Section Component
const WhyThisMattersSection = () => <section id="program" className="bg-slate-800/50">
    {/* Top Panel - Why This Matters */}
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Centered Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent leading-[1.2] pb-2">
              Why This Matters
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Centered Content */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-center">
              {/* Pull Quote */}
              <div className="bg-slate-700/30 backdrop-blur-md border-l-4 border-blue-500 p-6 rounded-r-lg mb-6 shadow-lg">
                <p className="text-xl md:text-2xl italic text-slate-200 leading-relaxed">"Most dev teams think AI tools are 'nice to have'—a few ChatGPT prompts here, maybe some Copilot autocomplete there. But that's like having a Ferrari in your garage and only using it to check your mail."</p>
              </div>

              {/* Body Paragraph */}
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Real AI-first development means your entire workflow—planning, coding, testing, and deployment—is designed around AI capabilities. It means your team thinks in terms of AI-assisted architecture, AI-generated tests, AI-powered code reviews, and AI-enhanced debugging.
              </p>

              {/* CTA Button */}
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-md inline-flex items-center hover:scale-105 transition-all duration-200 shadow-lg" onClick={() => document.getElementById('stages')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                See the 3 Stages
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Panel - What You Need & Works Best With */}
    <div className="bg-slate-700/30 backdrop-blur-md py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* What You Need Card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <div className="bg-slate-800/70 backdrop-blur-md border border-slate-600/50 rounded-xl shadow-xl p-8 h-full">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6 text-center">
                  What You Need
                </h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 leading-relaxed">
                      <span className="font-semibold text-white">Curiosity about AI development</span>
                      <br />
                      <span className="text-blue-300 font-medium text-sm">No prior AI experience needed</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 leading-relaxed">
                      <span className="font-semibold text-white">Open mind</span>
                      <br />
                      <span className="text-sm">Ready to rethink how development works</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 leading-relaxed">
                      <span className="font-semibold text-white">Any tech stack</span>
                      <br />
                      <span className="text-sm">We adapt to YOUR codebase and tools</span>
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Works Best With Card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <div className="bg-slate-800/70 backdrop-blur-md border border-slate-600/50 rounded-xl shadow-xl p-8 h-full">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-6 text-center">
                  Works Best With
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 leading-relaxed">
                      <span className="font-semibold text-white">Teams feeling behind on AI</span>
                      <br />
                      <span className="text-sm">Watching competitors ship faster with AI tools</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 leading-relaxed">
                      <span className="font-semibold text-white">Delivery pressure mounting</span>
                      <br />
                      <span className="text-sm">Need speed without sacrificing code quality</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 leading-relaxed">
                      <span className="font-semibold text-white">Leadership ready to invest</span>
                      <br />
                      <span className="text-sm">Committed to real transformation, not just experiments</span>
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>;

// Three Stages Section Component
const ThreeStagesSection = () => <section id="stages" className="py-32 bg-slate-800/50">
    <div className="container mx-auto px-6">
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }} className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-[1.2] pb-2">
          The Three-Stage Journey
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Enhanced Vertical Timeline Line with Gradient */}
          <div className="absolute left-[28px] top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-80 rounded-full"></div>

          {/* Stage 1 - Learn */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative mb-24 pl-20">
            {/* Timeline Circle with Icon */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg z-10 ring-4 ring-blue-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>

            {/* Connecting Line */}
            <div className="absolute left-14 top-7 w-6 h-0.5 bg-blue-500/60"></div>

            {/* Content */}
            <div className="bg-[#1a2332] backdrop-blur-md border border-[#2a3442] rounded-xl p-8 shadow-xl hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
              {/* Stage Label */}
              <div className="mb-3">
                <Badge className="bg-slate-600/70 text-slate-300 border-slate-500 text-xs font-medium">
                  Stage 1
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-white">AI Core Concepts Workshop</h3>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1 text-sm font-semibold">
                  3 hours
                </Badge>
              </div>

              <p className="text-slate-300 mb-6 text-lg leading-relaxed">Build your team's AI foundation with shared understanding</p>

              {/* Outcome Badge */}
              <div className="inline-flex items-center bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400 mr-2">💚</span>
                <span className="text-sm font-semibold text-green-300">Team speaks AI fluently</span>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-blue-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">LLM mechanics demystified</span>
                    <div className="text-sm text-slate-400 mt-1">Tokens, embeddings, context windows, hallucinations</div>
                  </div>
                </div>

                <hr className="border-slate-600/50" />

                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-blue-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">AI Agents & MCP explained</span>
                    <div className="text-sm text-slate-400 mt-1">The "USB" between AI and your tools</div>
                  </div>
                </div>

                <hr className="border-slate-600/50" />

                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-blue-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Trust-but-verify mindset</span>
                    <div className="text-sm text-slate-400 mt-1">When to rely on AI, when to double-check</div>
                  </div>
                </div>

                <hr className="border-slate-600/50" />

                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-blue-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">AI-friendly task sizing</span>
                    <div className="text-sm text-slate-400 mt-1">Break work into 30-120 min AI-executable chunks</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stage 2 - Prepare */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative mb-24 pl-20">
            {/* Timeline Circle with Icon */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-purple-500 text-white shadow-lg z-10 ring-4 ring-purple-500/20">
              <Wrench className="w-6 h-6" />
            </div>

            {/* Connecting Line */}
            <div className="absolute left-14 top-7 w-6 h-0.5 bg-purple-500/60"></div>

            {/* Content */}
            <div className="bg-[#1a2332] backdrop-blur-md border border-[#2a3442] rounded-xl p-8 shadow-xl hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              {/* Stage Label */}
              <div className="mb-3">
                <Badge className="bg-slate-600/70 text-slate-300 border-slate-500 text-xs font-medium">
                  Stage 2
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-white">Codebase AI-Priming</h3>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1 text-sm font-semibold">
                  10-15 hours
                </Badge>
              </div>

              <p className="text-slate-300 mb-6 text-lg leading-relaxed">Transform your repo into an AI-ready knowledge base</p>

              {/* Outcome Badge */}
              <div className="inline-flex items-center bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400 mr-2">💚</span>
                <span className="text-sm font-semibold text-green-300">Codebase optimized for AI accuracy</span>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-purple-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Eliminate AI confusion</span>
                    <div className="text-sm text-slate-400 mt-1">Isolate deprecated code so AI learns only from your best</div>
                  </div>
                </div>

                <hr className="border-slate-600/50" />

                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-purple-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Codify tribal knowledge</span>
                    <div className="text-sm text-slate-400 mt-1">Extract unwritten conventions into enforceable AI rules</div>
                  </div>
                </div>

                <hr className="border-slate-600/50" />

                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-purple-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Capture YOUR standards</span>
                    <div className="text-sm text-slate-400 mt-1">From API design to testing strategies to security patterns</div>
                  </div>
                </div>

                <hr className="border-slate-600/50" />

                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-purple-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Make every dev code like your best</span>
                    <div className="text-sm text-slate-400 mt-1">AI enforces your architecture and quality bar</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stage 3 - Execute */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative pl-20">
            {/* Timeline Circle with Icon */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg z-10 ring-4 ring-green-500/20">
              <Rocket className="w-6 h-6" />
            </div>

            {/* Connecting Line */}
            <div className="absolute left-14 top-7 w-6 h-0.5 bg-green-500/60"></div>

            {/* Content */}
            <div className="bg-[#1a2332] backdrop-blur-md border border-[#2a3442] rounded-xl p-8 shadow-xl hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
              {/* Stage Label */}
              <div className="mb-3">
                <Badge className="bg-slate-600/70 text-slate-300 border-slate-500 text-xs font-medium">
                  Stage 3
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-white">Hands-On AI Workflow</h3>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-3 py-1 text-sm font-semibold">
                  4 hours
                </Badge>
              </div>

              <p className="text-slate-300 mb-6 text-lg leading-relaxed">Practice the complete AI development loop on real features</p>

              {/* Outcome Badge */}
              <div className="inline-flex items-center bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400 mr-2">💚</span>
                <span className="text-sm font-semibold text-green-300">50-70% faster delivery with confidence</span>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Requirements → specs with AI</span>
                    <div className="text-sm text-slate-400 mt-1">Transform business needs into technical plans</div>
                  </div>
                </div>

                <hr className="border-slate-600/50" />

                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Decompose into AI tasks</span>
                    <div className="text-sm text-slate-400 mt-1">Create perfectly-sized work chunks for AI execution</div>
                  </div>
                </div>

                <hr className="border-slate-600/50" />

                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Code with Cursor + your rules</span>
                    <div className="text-sm text-slate-400 mt-1">AI follows YOUR codebase standards automatically</div>
                  </div>
                </div>

                <hr className="border-slate-600/50" />

                <div className="flex items-start text-slate-300">
                  <Check className="w-5 h-5 text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">AI-driven review</span>
                    <div className="text-sm text-slate-400 mt-1">Catch issues before they hit PR, ship with confidence</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>;

// Pricing Section Component
const PricingSection = ({
  onOpenForm
}: {
  onOpenForm: () => void;
}) => <section id="pricing" className="py-32 bg-gradient-to-br from-slate-900 to-gray-900">
    <div className="container mx-auto px-6">
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }} className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent leading-[1.2] pb-2">
          Choose Your Transformation
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[{
          name: "Explorer",
          icon: Target,
          subtitle: "AI Fundamentals Workshop",
          timeInvestment: "3 hours",
          description: "Get your team speaking AI fluently in just 3 hours. Learn LLM mechanics, AI agents, and development best practices.",
          bestFor: "Teams exploring AI development",
          features: ["**Stage 1: AI Core Concepts Workshop** (3 hours)", "Shared mental model for entire team", "Understand AI power & limitations", "Practical prompt engineering basics", "30-day email support"],
          popular: false
        }, {
          name: "Pioneer",
          icon: Rocket,
          subtitle: "Rapid AI Skills Development",
          timeInvestment: "7 hours",
          description: "Transform your team into AI practitioners with hands-on training on your actual tech stack.",
          bestFor: "Teams ready to implement AI workflows",
          features: ["Everything in Explorer", "**Stage 3: Hands-On AI Workflow** (4 hours)", "Live feature implementation practice", "AI-driven code review techniques", "Custom exercises for your tech stack", "60-day priority support"],
          popular: true
        }, {
          name: "Leader",
          icon: Trophy,
          subtitle: "Complete AI-First Evolution",
          timeInvestment: "25+ hours",
          description: "Full transformation from traditional to AI-augmented development with custom repository optimization.",
          bestFor: "Teams committed to 50-70% faster delivery",
          features: ["Everything in Pioneer", "**Stage 2: Codebase AI-Priming** (10-15 hours)", "Repository optimization for AI accuracy", "Codified team standards & patterns", "Custom AI rules for your architecture", "90-day dedicated support", "Monthly progress check-ins"],
          popular: false
        }].map((plan, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: index * 0.2
        }} whileHover={{
          scale: 1.02
        }} className="relative h-full">
              {plan.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-1 border-0 shadow-lg z-10">
                Most Popular
              </Badge>}
              <Card className={`h-full p-8 relative flex flex-col ${plan.popular ? 'bg-slate-700/70 border-blue-500/30 shadow-2xl shadow-blue-500/10' : 'bg-slate-800/70 border-slate-700/50'} backdrop-blur-md border hover:bg-slate-700/50 transition-all duration-300 shadow-xl`}>
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <plan.icon className="w-8 h-8 text-blue-400" />
                    <div>
                      <h3 className="text-2xl font-bold text-white break-words">{plan.name}</h3>
                      <p className="text-sm text-slate-400">{plan.timeInvestment} total</p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-blue-300 mb-4">{plan.subtitle}</h4>

                  <p className="text-slate-300 mb-4 break-words leading-relaxed">{plan.description}</p>

                  <div className="bg-slate-700/30 rounded-lg p-3 mb-6">
                    <p className="text-sm font-medium text-blue-300">Best for: {plan.bestFor}</p>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, i) => {
                  const isStage = feature.includes('**Stage');
                  const cleanFeature = feature.replace(/\*\*/g, '');
                  return <li key={i} className="flex items-start text-slate-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`break-words ${isStage ? 'font-semibold text-white' : ''}`}>
                          {cleanFeature}
                        </span>
                      </li>;
                })}
                  </ul>

                  {/* Button at bottom */}
                  <div className="mt-auto">
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg' : 'bg-slate-700/70 hover:bg-slate-600/70'} hover:scale-105 transition-all duration-200`} onClick={onOpenForm}>
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>

        {/* Success Metric Highlight */}
        <div className="text-center mb-8">
          <p className="text-lg text-slate-300">
            <span className="text-blue-400 font-semibold">Up to 10 developers</span> per team •
            <span className="text-purple-400 font-semibold ml-2">50-70% faster delivery</span> with Transformation tier
          </p>
        </div>
      </motion.div>
    </div>
  </section>;

// Your Journey Timeline Section Component
const YourJourneyTimelineSection = () => <section className="py-32 bg-slate-800/50">
    <div className="container mx-auto px-6">
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }} className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent leading-[1.2] pb-2">
          Your Journey
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Enhanced Vertical Timeline Line with Gradient */}
          <div className="absolute left-[28px] top-8 bottom-8 w-1 bg-gradient-to-b from-teal-400 via-cyan-500 via-blue-500 via-purple-500 to-green-500 opacity-80 rounded-full"></div>

          {/* Step 1 - Discovery Call */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative mb-16 pl-20">
            {/* Timeline Circle with Icon */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-teal-500 text-white shadow-lg z-10 ring-4 ring-teal-500/20">
              <Target className="w-6 h-6" />
            </div>

            {/* Connecting Line */}
            <div className="absolute left-14 top-7 w-6 h-0.5 bg-teal-500/60"></div>

            {/* Content */}
            <div className="bg-[#1a2332] backdrop-blur-md border border-[#2a3442] rounded-xl p-8 shadow-xl hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">Discovery Call</h3>
                <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-3 py-1 text-sm font-semibold">
                  30 minutes
                </Badge>
              </div>

              <p className="text-slate-300 mb-4 text-lg leading-relaxed">30 minutes to identify your AI transformation opportunity</p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Pinpoint your team's bottlenecks and select the ideal pilot team for maximum impact
              </p>
            </div>
          </motion.div>

          {/* Step 2 - AI Foundations Workshop */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} className="relative mb-16 pl-20">
            {/* Timeline Circle with Icon */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500 text-white shadow-lg z-10 ring-4 ring-cyan-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>

            {/* Connecting Line */}
            <div className="absolute left-14 top-7 w-6 h-0.5 bg-cyan-500/60"></div>

            {/* Content */}
            <div className="bg-[#1a2332] backdrop-blur-md border border-[#2a3442] rounded-xl p-8 shadow-xl hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">AI Foundations Workshop</h3>
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-3 py-1 text-sm font-semibold">
                  3 hours
                </Badge>
              </div>

              <p className="text-slate-300 mb-4 text-lg leading-relaxed">
                <span className="font-semibold text-blue-300">Stage 1:</span> Get your team speaking AI (3 hours)
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Align your entire team with shared AI mental models, tools, and development practices
              </p>
            </div>
          </motion.div>

          {/* Step 3 - Repository Optimization */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative mb-16 pl-20">
            {/* Timeline Circle with Icon */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg z-10 ring-4 ring-blue-500/20">
              <Wrench className="w-6 h-6" />
            </div>

            {/* Connecting Line */}
            <div className="absolute left-14 top-7 w-6 h-0.5 bg-blue-500/60"></div>

            {/* Content */}
            <div className="bg-[#1a2332] backdrop-blur-md border border-[#2a3442] rounded-xl p-8 shadow-xl hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">Repository Optimization</h3>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1 text-sm font-semibold">
                  10-15 hours
                </Badge>
              </div>

              <p className="text-slate-300 mb-4 text-lg leading-relaxed">
                <span className="font-semibold text-purple-300">Stage 2:</span> Make your codebase AI-ready (10-15 hours)
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Transform your repo into an AI knowledge base that enforces YOUR standards automatically
              </p>
            </div>
          </motion.div>

          {/* Step 4 - Hands-On Implementation */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative mb-16 pl-20">
            {/* Timeline Circle with Icon */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-purple-500 text-white shadow-lg z-10 ring-4 ring-purple-500/20">
              <Rocket className="w-6 h-6" />
            </div>

            {/* Connecting Line */}
            <div className="absolute left-14 top-7 w-6 h-0.5 bg-purple-500/60"></div>

            {/* Content */}
            <div className="bg-[#1a2332] backdrop-blur-md border border-[#2a3442] rounded-xl p-8 shadow-xl hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">Hands-On Implementation</h3>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1 text-sm font-semibold">
                  4 hours
                </Badge>
              </div>

              <p className="text-slate-300 mb-4 text-lg leading-relaxed">
                <span className="font-semibold text-green-300">Stage 3:</span> Build real features with AI (4 hours)
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Practice the complete AI workflow—from requirements to deployment—on your actual codebase
              </p>
            </div>
          </motion.div>

          {/* Step 5 - Success Review */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative pl-20">
            {/* Timeline Circle with Icon */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg z-10 ring-4 ring-green-500/20">
              <BarChart className="w-6 h-6" />
            </div>

            {/* Connecting Line */}
            <div className="absolute left-14 top-7 w-6 h-0.5 bg-green-500/60"></div>

            {/* Content */}
            <div className="bg-[#1a2332] backdrop-blur-md border border-[#2a3442] rounded-xl p-8 shadow-xl hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">Success Review</h3>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-3 py-1 text-sm font-semibold">
                  30-day check-in
                </Badge>
              </div>

              <p className="text-slate-300 mb-4 text-lg leading-relaxed">30-day check-in to measure your 10× transformation</p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Review metrics, refine workflows, and plan your continued AI-first evolution
              </p>
            </div>
          </motion.div>
        </div>

        {/* Total Time Investment */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="mt-20 text-center">
          <div className="bg-[#1a2332] backdrop-blur-md border border-[#2a3442] rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
            <h4 className="text-lg font-semibold text-white mb-2">Total Investment</h4>
            <p className="text-slate-300">
              <span className="text-blue-400 font-semibold">17-22 hours</span> spread over 4-6 weeks for complete transformation
            </p>
            <p className="text-sm text-slate-400 mt-2">
              From traditional development to 50-70% faster AI-first delivery
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>;

// Company Logos Section Component
// This section replaces the testimonial and proven results sections
// It features a continuous horizontal scrolling carousel of company logos
// with grayscale to color hover effect and fade gradients on sides
// Responsive display shows different number of logos per breakpoint
// Logos are placeholders representing tech companies

// Final CTA Section Component
const FinalCTASection = ({
  onOpenForm
}: {
  onOpenForm: () => void;
}) => <section id="contact" className="py-32 relative bg-gradient-to-br from-slate-900 to-gray-900">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }} className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          Ready to Transform Your Development Team?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Join the growing number of development teams who have already made the leap to AI-first development.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 shadow-2xl shadow-blue-500/25" onClick={onOpenForm}>
            Book Your Discovery Call
            <Calendar className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 backdrop-blur-sm">
            Download Program Guide
          </Button>
        </div>
      </motion.div>
    </div>
  </section>;

// Footer Component
const Footer = () => <footer className="py-16 border-t border-slate-700/50 bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
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
  </footer>;

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none" />

      {/* Header */}
      <header className="relative z-50 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">CheakyAI Academy</div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Home</a>
              <a href="#program" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Program</a>
              <a href="#stages" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Stages</a>
              <a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Pricing</a>
              <Link to="/blog" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Blog</Link>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg" onClick={handleOpenForm}>
                Book Discovery Call
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-4 border-t border-slate-700 pt-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <a href="#hero" className="text-slate-300 hover:text-blue-400 transition-colors">Home</a>
                <a href="#program" className="text-slate-300 hover:text-blue-400 transition-colors">Program</a>
                <a href="#stages" className="text-slate-300 hover:text-blue-400 transition-colors">Stages</a>
                <a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors">Pricing</a>
                <Link to="/blog" className="text-slate-300 hover:text-blue-400 transition-colors">Blog</Link>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg" onClick={handleOpenForm}>
                  Book Discovery Call
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section Component */}
      <HeroSection onOpenForm={handleOpenForm} />
      {/* Why This Matters Section Component */}
      <WhyThisMattersSection />
      {/* Three Stages Section Component */}
      <ThreeStagesSection />
      {/* Pricing Section Component */}
      <PricingSection onOpenForm={handleOpenForm} />
      {/* Company Logos Section Component - Moved here */}
      <CompanyLogosSection />
      {/* Your Journey Timeline Section Component */}
      <YourJourneyTimelineSection />
      {/* Final CTA Section Component */}
      <FinalCTASection onOpenForm={handleOpenForm} />
      {/* Footer Component */}
      <Footer />

      {/* Discovery Call Form Component */}
      <DiscoveryCallForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </div>;
};
export default Index;
