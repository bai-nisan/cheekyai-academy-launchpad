
import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogosSection = () => {
  // Company logos data with your new uploaded logos
  const companies = [
    { name: "AMIMON", logo: "/lovable-uploads/8e3b3ffe-b885-461b-9ad5-a83e81af986b.png" },
    { name: "LUDANTECH", logo: "/lovable-uploads/9067bc25-56cc-450d-8738-7c337f961b01.png" },
    { name: "Neuronics", logo: "/lovable-uploads/8ca33ebd-a1d9-4d0f-a2db-e47c35c3d34d.png" },
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
                  className="flex-shrink-0 mx-8"
                >
                  <div className="w-64 h-32 flex items-center justify-center bg-transparent rounded-lg">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain"
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
