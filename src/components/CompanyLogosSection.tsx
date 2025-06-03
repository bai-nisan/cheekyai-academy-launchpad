
import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogosSection = () => {
  // Company logos data with your uploaded logos (no duplicates)
  const companies = [
    { name: "LUDANTECH", logo: "/lovable-uploads/f6e934e8-18ea-40f7-84f1-d85fcf5b36c8.png" },
    { name: "Mamanidoo", logo: "/lovable-uploads/4b1042a5-af25-45c1-9e66-762eed039df4.png" },
    { name: "Neuronics", logo: "/lovable-uploads/20831caf-5fb2-48f2-86ae-04f6c0eb3774.png" },
    { name: "Yad2", logo: "/lovable-uploads/89f611f4-e528-4158-a945-5af8a7ae3b8b.png" },
    { name: "AMIMON", logo: "/lovable-uploads/764f8afe-0cb8-4f89-8648-0ecf06de90db.png" },
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
                  className="flex-shrink-0 mx-8 transition-all duration-300 group"
                >
                  <div className="w-32 h-16 flex items-center justify-center bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
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
