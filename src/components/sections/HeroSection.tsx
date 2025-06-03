import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Floating Orbs Component - Memoized for performance
const FloatingOrbs = memo(() => (
  <>
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
  </>
));

FloatingOrbs.displayName = 'FloatingOrbs';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export const HeroSection = memo<HeroSectionProps>(({ onOpenForm }) => {
  const scrollToProgram = () => {
    document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
      <FloatingOrbs />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            Turn One Dev Team Into an AI-Powered 10× Squad
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            AI-First Development Transformation Program
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 shadow-2xl shadow-blue-500/25"
              onClick={scrollToProgram}
            >
              See the Program
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 hover:scale-105 transition-all duration-200 text-lg px-10 py-4 backdrop-blur-sm"
              onClick={onOpenForm}
            >
              Book Discovery Call
              <Calendar className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection'; 