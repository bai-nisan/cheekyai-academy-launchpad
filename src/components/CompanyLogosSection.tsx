
import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogosSection = () => {
  // Company logos data with placeholder images that represent tech companies
  const companies = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center" },
    { name: "DevSolutions", logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=120&h=60&fit=crop&crop=center" },
    { name: "CodeFlow", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
    { name: "AITech", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop&crop=center" },
    { name: "DataSync", logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=120&h=60&fit=crop&crop=center" },
    { name: "CloudBase", logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop&crop=center" },
    { name: "InnovateHub", logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=120&h=60&fit=crop&crop=center" },
    { name: "ScaleUp", logo: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=120&h=60&fit=crop&crop=center" },
  ];

  // Duplicate the companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-[1.2] pb-2">
            Trusted by Leading Development Teams
          </h2>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 w-10 h-full bg-gradient-to-r from-slate-800 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 w-10 h-full bg-gradient-to-l from-slate-800 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling logos container */}
            <div className="flex animate-scroll-logos">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 mx-5 transition-all duration-300 group"
                >
                  <div className="w-30 h-16 flex items-center justify-center bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogosSection;
