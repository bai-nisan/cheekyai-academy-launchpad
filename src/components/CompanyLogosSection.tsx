
import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CompanyLogosSection.module.css';

// Extract company data to separate constant
const COMPANY_LOGOS = [
  { 
    name: "AMIMON", 
    logo: "/lovable-uploads/8e3b3ffe-b885-461b-9ad5-a83e81af986b.png",
    alt: "AMIMON company logo - wireless connectivity solutions"
  },
  { 
    name: "LUDANTECH", 
    logo: "/lovable-uploads/9067bc25-56cc-450d-8738-7c337f961b01.png",
    alt: "LUDANTECH company logo - technology solutions"
  },
  { 
    name: "Neuronics", 
    logo: "/lovable-uploads/8ca33ebd-a1d9-4d0f-a2db-e47c35c3d34d.png",
    alt: "Neuronics company logo - neural technology"
  },
  { 
    name: "Yad2", 
    logo: "/lovable-uploads/cca2477d-2c7f-4227-aa69-034f69118ea6.png",
    alt: "Yad2 company logo - classified advertising platform"
  },
  { 
    name: "Maman", 
    logo: "/lovable-uploads/dc8979ab-e518-4d97-92c5-eed0af94e199.png",
    alt: "Maman company logo - educational services"
  },
];

// Configuration constants
const ANIMATION_CONFIG = {
  duration: 25, // Slower for better UX
  repetitions: 15,
} as const;

interface CompanyLogoProps {
  company: typeof COMPANY_LOGOS[0];
  index: number;
}

// Memoized logo component for performance
const CompanyLogo = memo(({ company, index }: CompanyLogoProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    console.log(`Image error for ${company.name} logo:`, company.logo);
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    console.log(`Image loaded successfully for ${company.name} logo:`, company.logo);
    setImageLoading(false);
  };

  console.log(`Rendering logo component for ${company.name}`, { imageError, imageLoading });

  if (imageError) {
    return (
      <div className="flex-shrink-0 mx-12">
        <div className="w-96 h-48 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
          <span className="text-white/60 text-sm">{company.name}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 mx-12">
      <div className="w-96 h-48 flex items-center justify-center bg-transparent rounded-lg">
        {imageLoading && (
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg animate-pulse" />
        )}
        <img
          src={company.logo}
          alt={company.alt}
          className="max-w-full max-h-full object-contain filter grayscale transition-opacity duration-300"
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
          style={{ opacity: imageLoading ? 0 : 1 }}
        />
      </div>
    </div>
  );
});

CompanyLogo.displayName = 'CompanyLogo';

const CompanyLogosSection = memo(() => {
  // Create circular pattern with configurable repetitions
  const createCircularPattern = () => {
    const pattern = [];
    for (let i = 0; i < ANIMATION_CONFIG.repetitions; i++) {
      pattern.push(COMPANY_LOGOS[i % COMPANY_LOGOS.length]);
    }
    return pattern;
  };

  const circularCompanies = createCircularPattern();
  
  console.log('Total companies in pattern:', circularCompanies.length);
  console.log('Maman instances in pattern:', circularCompanies.filter(c => c.name === 'Maman').length);

  return (
    <section className="py-32 bg-black" aria-label="Companies that trust our development teams">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] pb-2">
            Trusted by Leading Development Teams
          </h2>

          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden"
            role="region"
            aria-label="Company logos carousel"
          >
            {/* Scrolling logos container with respectful animation */}
            <div 
              className={`flex ${styles.scrollAnimation}`}
              style={{
                animationDuration: `${ANIMATION_CONFIG.duration}s`,
                animationPlayState: 'var(--animation-play-state, running)'
              }}
            >
              {circularCompanies.map((company, index) => (
                <CompanyLogo
                  key={`${company.name}-${index}`}
                  company={company}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CompanyLogosSection.displayName = 'CompanyLogosSection';

export default CompanyLogosSection;
