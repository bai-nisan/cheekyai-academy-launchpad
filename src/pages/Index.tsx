import React, { useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, ChartBar, Smile, TrendingUp, Calendar, Check, Star, ArrowRight, Menu, X, Car, Target, Rocket, Trophy, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-x-hidden scroll-smooth">
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
            <button className="md:hidden p-2 text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="md:hidden bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl mt-2 p-6">
              <div className="flex flex-col space-y-4">
                <a href="#program" className="text-slate-300 hover:text-blue-400 transition-colors">Program</a>
                <a href="#stages" className="text-slate-300 hover:text-blue-400 transition-colors">Stages</a>
                <a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors">Pricing</a>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                  Book Discovery Call
                </Button>
              </div>
            </motion.div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
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
              <Button size="lg" variant="outline" className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 backdrop-blur-sm">
                Book Discovery Call
                <Calendar className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters Section - Dark Theme */}
      <section id="program" className="bg-slate-800/50">
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
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-2">
                  Why This Matters
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="lg:col-span-7">
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
                }}>
                    {/* Pull Quote */}
                    <div className="bg-slate-700/30 backdrop-blur-md border-l-4 border-blue-500 p-6 rounded-r-lg mb-6 shadow-lg">
                      <p className="text-xl md:text-2xl italic text-slate-200 leading-relaxed">"Most dev teams think AI tools are 'nice to have'
a few ChatGPT prompts here, maybe some Copilot autocomplete there. But that's like having a Ferrari in your garage and only using it to check your mail."</p>
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
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>

                {/* Right Column - Ferrari Illustration */}
                <div className="lg:col-span-5 text-center">
                  <motion.div initial={{
                  opacity: 0,
                  scale: 0.8
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.8,
                  delay: 0.4
                }} className="flex justify-center">
                    <div className="relative">
                      <Car className="w-48 h-48 md:w-64 md:h-64 text-blue-400 stroke-1" />
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl scale-150"></div>
                    </div>
                  </motion.div>
                </div>
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
                    <h3 className="text-2xl font-semibold text-white mb-6 text-center">
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
                    <h3 className="text-2xl font-semibold text-white mb-6 text-center">
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

              {/* Ideal Cohort Size */}
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
              delay: 0.4
            }} className="mt-12 text-center">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 max-w-lg mx-auto">
                  <p className="text-lg text-slate-200">
                    <span className="font-semibold text-blue-300">Ideal size:</span> 2-10 developers per team
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Stages Section */}
      <section id="stages" className="py-32 bg-gradient-to-br from-slate-900 to-gray-900">
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
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-2">
              The Three-Stage Journey
            </h2>

            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[28px] top-8 bottom-0 w-0.5 bg-slate-700 opacity-70"></div>

              {/* Stage 1 - Learn */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mb-16 pl-16"
              >
                {/* Timeline Circle with Number */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white font-bold text-lg z-10">
                  1
                </div>
                
                {/* Stage Badge */}
                <div className="flex items-center mb-4">
                  <span className="text-blue-400 font-medium mr-2">Learn</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
                
                {/* Content */}
                <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 shadow-xl">
                  <Badge className="mb-4 bg-slate-700/70 text-white border-slate-600">Stage 1</Badge>
                  <h3 className="text-xl font-bold mb-2 text-white break-words">AI Core Concepts Workshop</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">3 hours</p>
                  <p className="text-slate-300 mb-4 break-words leading-relaxed">Build your team's AI foundation with shared understanding</p>
                  
                  {/* Outcome Badge - Inline Style */}
                  <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg px-4 py-2 mb-6">
                    <p className="text-sm font-semibold text-blue-300">
                      <span className="text-slate-300">Outcome:</span> Team speaks AI fluently
                    </p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">LLM mechanics demystified</span>
                        <span className="text-slate-300"> - Tokens, embeddings, context windows, hallucinations</span>
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">AI Agents & MCP explained</span>
                        <span className="text-slate-300"> - The "USB" between AI and your tools</span>
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">Trust-but-verify mindset</span>
                        <span className="text-slate-300"> - When to rely on AI, when to double-check</span>
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">AI-friendly task sizing</span>
                        <span className="text-slate-300"> - Break work into 30-120 min AI-executable chunks</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Stage 2 - Prepare */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mb-16 pl-16"
              >
                {/* Timeline Circle with Number */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-purple-500 text-white font-bold text-lg z-10">
                  2
                </div>
                
                {/* Stage Badge */}
                <div className="flex items-center mb-4">
                  <span className="text-purple-400 font-medium mr-2">Prepare</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
                
                {/* Content */}
                <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 shadow-xl">
                  <Badge className="mb-4 bg-slate-700/70 text-white border-slate-600">Stage 2</Badge>
                  <h3 className="text-xl font-bold mb-2 text-white break-words">Codebase AI-Priming</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">10-15 hours over 2 weeks</p>
                  <p className="text-slate-300 mb-4 break-words leading-relaxed">Transform your repo into an AI-ready knowledge base</p>
                  
                  {/* Outcome Badge - Inline Style */}
                  <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg px-4 py-2 mb-6">
                    <p className="text-sm font-semibold text-blue-300">
                      <span className="text-slate-300">Outcome:</span> Codebase optimized for AI accuracy
                    </p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">Eliminate AI confusion</span>
                        <span className="text-slate-300"> - Isolate deprecated code so AI learns only from your best</span>
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">Codify tribal knowledge</span>
                        <span className="text-slate-300"> - Extract unwritten conventions into enforceable AI rules</span>
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">Capture YOUR standards</span>
                        <span className="text-slate-300"> - From API design to testing strategies to security patterns</span>
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">Make every dev code like your best</span>
                        <span className="text-slate-300"> - AI enforces your architecture and quality bar</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Stage 3 - Execute */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative pl-16"
              >
                {/* Timeline Circle with Number */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white font-bold text-lg z-10">
                  3
                </div>
                
                {/* Stage Badge */}
                <div className="flex items-center mb-4">
                  <span className="text-green-400 font-medium mr-2">Execute</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
                
                {/* Content */}
                <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 shadow-xl">
                  <Badge className="mb-4 bg-slate-700/70 text-white border-slate-600">Stage 3</Badge>
                  <h3 className="text-xl font-bold mb-2 text-white break-words">Hands-On AI Workflow</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">4 hours</p>
                  <p className="text-slate-300 mb-4 break-words leading-relaxed">Practice the complete AI development loop on real features</p>
                  
                  {/* Outcome Badge - Inline Style */}
                  <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg px-4 py-2 mb-6">
                    <p className="text-sm font-semibold text-blue-300">
                      <span className="text-slate-300">Outcome:</span> 50-70% faster delivery with confidence
                    </p>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">Requirements → specs with AI</span>
                        <span className="text-slate-300"> - Transform business needs into technical plans</span>
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">Decompose into AI tasks</span>
                        <span className="text-slate-300"> - Create perfectly-sized work chunks for AI execution</span>
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">Code with Cursor + your rules</span>
                        <span className="text-slate-300"> - AI follows YOUR codebase standards automatically</span>
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="break-words leading-relaxed">
                        <span className="font-semibold text-white">AI-driven review</span>
                        <span className="text-slate-300"> - Catch issues before they hit PR, ship with confidence</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Success Quote - Keep the existing success quote */}
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
          }} className="mt-16 text-center">
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-8 max-w-4xl mx-auto">
                <p className="text-lg italic text-slate-300 mb-4">
                  "After Stage 2, our AI started suggesting code that actually followed our patterns. It was like having a senior dev who had read our entire codebase."
                </p>
                <p className="text-sm text-slate-400">— Team Lead, 15-developer team</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-32 bg-slate-800/50">
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
        }} className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-2">
              Proven Results
            </h2>

            <div className="grid md:grid-cols-5 gap-8 overflow-visible">
              {[{
              icon: Zap,
              value: 60,
              suffix: "%",
              label: "Faster Development"
            }, {
              icon: Shield,
              value: 90,
              suffix: "%",
              label: "Code Standards"
            }, {
              icon: ChartBar,
              value: 85,
              suffix: "%",
              label: "Test Coverage"
            }, {
              icon: Smile,
              value: 95,
              suffix: "%",
              label: "Team Satisfaction"
            }, {
              icon: TrendingUp,
              value: 40,
              suffix: "%",
              label: "KPI Improvement"
            }].map((metric, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: index * 0.1
            }} className="text-center">
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
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-gradient-to-br from-slate-900 to-gray-900">
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
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-2">
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
                        <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg' : 'bg-slate-700/70 hover:bg-slate-600/70'} hover:scale-105 transition-all duration-200`}>
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

            <Card className="bg-slate-800/70 backdrop-blur-md border border-slate-700/50 p-8 shadow-xl">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Multiple Teams?</h3>
                <p className="text-slate-300 mb-6">Contact us for custom pricing and enterprise support</p>
                <Button variant="outline" className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-600/50">
                  Contact us for custom pricing
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Your Journey Timeline */}
      <section className="py-32 bg-slate-800/50">
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
        }} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-2">
              Your Journey
            </h2>

            <div className="space-y-8">
              {[{
              step: "1",
              icon: "🎯",
              title: "Discovery Call",
              duration: "30 minutes",
              description: "30 minutes to identify your AI transformation opportunity",
              outcome: "Pinpoint your team's bottlenecks and select the ideal pilot team for maximum impact"
            }, {
              step: "2",
              icon: "🔧",
              title: "AI Foundations Workshop",
              duration: "3 hours",
              description: "Stage 1: Get your team speaking AI (3 hours)",
              outcome: "Align your entire team with shared AI mental models, tools, and development practices"
            }, {
              step: "3",
              icon: "🚀",
              title: "Repository Optimization",
              duration: "10-15 hours",
              description: "Stage 2: Make your codebase AI-ready (10-15 hours)",
              outcome: "Transform your repo into an AI knowledge base that enforces YOUR standards automatically"
            }, {
              step: "4",
              icon: "📊",
              title: "Hands-On Implementation",
              duration: "4 hours",
              description: "Stage 3: Build real features with AI (4 hours)",
              outcome: "Practice the complete AI workflow—from requirements to deployment—on your actual codebase"
            }, {
              step: "5",
              icon: "✅",
              title: "Success Review",
              duration: "30 minutes",
              description: "30-day check-in to measure your 10× transformation",
              outcome: "Review metrics, refine workflows, and plan your continued AI-first evolution"
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: index * 0.1
            }} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <Badge className="bg-slate-700/70 text-blue-300 border-slate-600 text-xs">
                        {item.duration}
                      </Badge>
                    </div>
                    <p className="text-lg font-medium text-blue-300 mb-3">{item.description}</p>
                    <p className="text-slate-300 leading-relaxed">{item.outcome}</p>
                    
                    {/* Progress Arrow */}
                    {index < 4 && <div className="flex justify-center mt-6 mb-4">
                        <ArrowDown className="w-5 h-5 text-slate-500" />
                      </div>}
                  </div>
                </motion.div>)}
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
          }} className="mt-16 text-center">
              <div className="bg-slate-700/30 backdrop-blur-md border border-slate-600/50 rounded-lg p-6 max-w-2xl mx-auto">
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
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 relative bg-gradient-to-br from-slate-900 to-gray-900">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Development Team?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the growing number of development teams who have already made the leap to AI-first development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 shadow-2xl shadow-blue-500/25">
                Book Your Discovery Call
                <Calendar className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 backdrop-blur-sm">
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
    </div>;
};
export default Index;
