
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Clock, Target, Zap, Shield } from 'lucide-react';

const ExecutionWorkflow = () => {
  return (
    <div className="space-y-16">
      {/* Four-Phase Framework */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8">The Four-Phase Framework</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Phase 1: AI-Assisted Planning */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <h3 className="text-xl font-semibold">AI-Assisted Planning</h3>
            </div>
            <p className="text-slate-300 mb-4">Transform requirements into actionable technical specifications using AI.</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Requirements analysis with Context7</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Technical specification generation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Architecture decision documentation</span>
              </li>
            </ul>
          </div>

          {/* Phase 2: Task Decomposition */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <h3 className="text-xl font-semibold">Task Decomposition</h3>
            </div>
            <p className="text-slate-300 mb-4">Break down complex features into AI-executable chunks.</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>30-120 minute task sizing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Dependency mapping</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Context preparation</span>
              </li>
            </ul>
          </div>

          {/* Phase 3: AI Implementation */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <h3 className="text-xl font-semibold">AI Implementation</h3>
            </div>
            <p className="text-slate-300 mb-4">Execute development tasks with AI-powered coding tools.</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Code generation with standards enforcement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Real-time quality validation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Automated testing integration</span>
              </li>
            </ul>
          </div>

          {/* Phase 4: Quality Control */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <h3 className="text-xl font-semibold">Quality Control</h3>
            </div>
            <p className="text-slate-300 mb-4">Validate, review, and refine AI-generated solutions.</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>AI-assisted code review</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Performance validation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Integration testing</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Context7 Integrated Workflow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8">Context7 Integrated Workflow</h2>
        
        <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Pre-Implementation Setup</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business Requirements</p>
                    <p className="text-sm text-slate-400">Define clear success criteria and constraints</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Technical Context</p>
                    <p className="text-sm text-slate-400">Architecture, patterns, and existing codebase analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Quality Standards</p>
                    <p className="text-sm text-slate-400">Performance, security, and maintainability requirements</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-300">Implementation Flow</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span className="text-sm">Requirements → AI Planning</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span className="text-sm">Context7 → Task Breakdown</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-sm">AI Coding → Standards Check</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <span className="text-sm">Review → Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quality Control Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8">Quality Control Guidelines</h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
            <Shield className="w-8 h-8 text-green-400 mb-4" />
            <h4 className="text-lg font-semibold mb-3">Code Review Protocol</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• AI-suggested changes validation</li>
              <li>• Architecture compliance check</li>
              <li>• Security vulnerability scan</li>
              <li>• Performance impact assessment</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
            <Zap className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="text-lg font-semibold mb-3">Testing Strategy</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• AI-generated test coverage</li>
              <li>• Edge case identification</li>
              <li>• Integration test automation</li>
              <li>• Regression test validation</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
            <Target className="w-8 h-8 text-purple-400 mb-4" />
            <h4 className="text-lg font-semibold mb-3">Deployment Checklist</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Performance benchmarking</li>
              <li>• Documentation completeness</li>
              <li>• Rollback plan verification</li>
              <li>• Monitoring setup validation</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Company Logos Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Leading Development Teams</h2>
        
        <div className="relative overflow-hidden">
          {/* Fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center justify-center min-w-full">
              <div className="flex items-center space-x-12 md:space-x-16">
                {/* Microsoft */}
                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <rect x="0" y="0" width="18" height="18" className="logo-rect" />
                    <rect x="20" y="0" width="18" height="18" className="logo-rect" />
                    <rect x="0" y="20" width="18" height="18" className="logo-rect" />
                    <rect x="20" y="20" width="18" height="18" className="logo-rect" />
                    <text x="50" y="25" className="logo-text" fontSize="14" fontWeight="600">Microsoft</text>
                  </svg>
                </div>

                {/* Google */}
                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <circle cx="20" cy="20" r="15" className="logo-circle" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Google</text>
                  </svg>
                </div>

                {/* Amazon */}
                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <path d="M5 20 L20 5 L35 20 L20 35 Z" className="logo-path" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Amazon</text>
                  </svg>
                </div>

                {/* Slack */}
                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <rect x="5" y="15" width="8" height="8" rx="2" className="logo-rect" />
                    <rect x="15" y="5" width="8" height="8" rx="2" className="logo-rect" />
                    <rect x="25" y="15" width="8" height="8" rx="2" className="logo-rect" />
                    <rect x="15" y="25" width="8" height="8" rx="2" className="logo-rect" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Slack</text>
                  </svg>
                </div>

                {/* Stripe */}
                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <path d="M5 20 Q20 10 35 20 Q20 30 5 20" className="logo-path" strokeWidth="3" fill="none" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Stripe</text>
                  </svg>
                </div>

                {/* Spotify */}
                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <circle cx="20" cy="20" r="15" className="logo-circle" />
                    <path d="M10 15 Q20 12 30 15" className="logo-path" strokeWidth="2" fill="none" />
                    <path d="M10 20 Q20 17 30 20" className="logo-path" strokeWidth="2" fill="none" />
                    <path d="M10 25 Q20 22 30 25" className="logo-path" strokeWidth="2" fill="none" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Spotify</text>
                  </svg>
                </div>

                {/* Airbnb */}
                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <circle cx="20" cy="15" r="8" className="logo-circle" />
                    <path d="M12 23 Q20 35 28 23" className="logo-path" strokeWidth="2" fill="none" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Airbnb</text>
                  </svg>
                </div>

                {/* Shopify */}
                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <rect x="8" y="8" width="24" height="24" rx="4" className="logo-rect" />
                    <circle cx="20" cy="20" r="4" className="logo-circle" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Shopify</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center justify-center min-w-full">
              <div className="flex items-center space-x-12 md:space-x-16">
                {/* Duplicate logos for seamless scrolling */}
                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <rect x="0" y="0" width="18" height="18" className="logo-rect" />
                    <rect x="20" y="0" width="18" height="18" className="logo-rect" />
                    <rect x="0" y="20" width="18" height="18" className="logo-rect" />
                    <rect x="20" y="20" width="18" height="18" className="logo-rect" />
                    <text x="50" y="25" className="logo-text" fontSize="14" fontWeight="600">Microsoft</text>
                  </svg>
                </div>

                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <circle cx="20" cy="20" r="15" className="logo-circle" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Google</text>
                  </svg>
                </div>

                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <path d="M5 20 L20 5 L35 20 L20 35 Z" className="logo-path" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Amazon</text>
                  </svg>
                </div>

                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <rect x="5" y="15" width="8" height="8" rx="2" className="logo-rect" />
                    <rect x="15" y="5" width="8" height="8" rx="2" className="logo-rect" />
                    <rect x="25" y="15" width="8" height="8" rx="2" className="logo-rect" />
                    <rect x="15" y="25" width="8" height="8" rx="2" className="logo-rect" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Slack</text>
                  </svg>
                </div>

                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <path d="M5 20 Q20 10 35 20 Q20 30 5 20" className="logo-path" strokeWidth="3" fill="none" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Stripe</text>
                  </svg>
                </div>

                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <circle cx="20" cy="20" r="15" className="logo-circle" />
                    <path d="M10 15 Q20 12 30 15" className="logo-path" strokeWidth="2" fill="none" />
                    <path d="M10 20 Q20 17 30 20" className="logo-path" strokeWidth="2" fill="none" />
                    <path d="M10 25 Q20 22 30 25" className="logo-path" strokeWidth="2" fill="none" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Spotify</text>
                  </svg>
                </div>

                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <circle cx="20" cy="15" r="8" className="logo-circle" />
                    <path d="M12 23 Q20 35 28 23" className="logo-path" strokeWidth="2" fill="none" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Airbnb</text>
                  </svg>
                </div>

                <div className="company-logo">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
                    <rect x="8" y="8" width="24" height="24" rx="4" className="logo-rect" />
                    <circle cx="20" cy="20" r="4" className="logo-circle" />
                    <text x="45" y="25" className="logo-text" fontSize="14" fontWeight="600">Shopify</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 35s linear infinite;
          }

          .company-logo {
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .logo-svg {
            filter: grayscale(100%);
            opacity: 0.7;
            transition: all 0.3s ease;
          }

          .company-logo:hover .logo-svg {
            filter: grayscale(0%);
            opacity: 1;
            transform: scale(1.05);
          }

          .logo-rect, .logo-circle, .logo-path {
            fill: #64748b;
            stroke: #64748b;
            transition: all 0.3s ease;
          }

          .logo-text {
            fill: #64748b;
            transition: all 0.3s ease;
          }

          .company-logo:hover .logo-rect {
            fill: #3b82f6;
          }

          .company-logo:hover .logo-circle {
            fill: #10b981;
            stroke: #10b981;
          }

          .company-logo:hover .logo-path {
            stroke: #8b5cf6;
          }

          .company-logo:hover .logo-text {
            fill: #f1f5f9;
          }

          /* Mobile responsive */
          @media (max-width: 768px) {
            .animate-scroll {
              animation: scroll 25s linear infinite;
            }
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default ExecutionWorkflow;
