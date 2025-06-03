
import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogosSection = () => {
  // Company logos data with your new uploaded logos
  const companies = [
    { name: "AMIMON", logo: "/lovable-uploads/8e3b3ffe-b885-461b-9ad5-a83e81af986b.png" },
    { name: "LUDANTECH", logo: "/lovable-uploads/9067bc25-56cc-450d-8738-7c337f961b01.png" },
    { name: "Neuronics", logo: "/lovable-uploads/8ca33ebd-a1d9-4d0f-a2db-e47c35c3d34d.png" },
    { name: "Yad2", logo: "/lovable-uploads/cca2477d-2c7f-4227-aa69-034f69118ea6.png" },
    { name: "Maman", logo: "/lovable-uploads/dc8979ab-e518-4d97-92c5-eed0af94e199.png" },
  ];

  // Create circular pattern: logo1 -> logo2 -> logo3 -> logo1 -> logo2...
  const createCircularPattern = () => {
    const pattern = [];
    for (let i = 0; i < 15; i++) {
      pattern.push(companies[i % companies.length]);
    }
    return pattern;
  };

  const circularCompanies = createCircularPattern();

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
            {/* Scrolling logos container with faster animation */}
            <div className="flex animate-scroll-logos-fast">
              {circularCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 mx-12"
                >
                  <div className="w-96 h-48 flex items-center justify-center bg-transparent rounded-lg">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll-logos-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-logos-fast {
          animation: scroll-logos-fast 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CompanyLogosSection;
