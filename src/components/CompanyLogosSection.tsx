import React, { memo, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { usePerformanceMonitor } from '@/hooks/usePerformanceOptimized';
import styles from './CompanyLogosSection.module.css';

// Extract company data to separate constant with proper typing
interface CompanyLogo {
  name: string;
  logo: string;
  alt: string;
  id: string;
}

const COMPANY_LOGOS: CompanyLogo[] = [
  { 
    id: 'amimon',
    name: "AMIMON", 
    logo: "/lovable-uploads/8e3b3ffe-b885-461b-9ad5-a83e81af986b.png",
    alt: "AMIMON company logo - wireless connectivity solutions"
  },
  { 
    id: 'ludantech',
    name: "LUDANTECH", 
    logo: "/lovable-uploads/9067bc25-56cc-450d-8738-7c337f961b01.png",
    alt: "LUDANTECH company logo - technology solutions"
  },
  { 
    id: 'neuronics',
    name: "Neuronics", 
    logo: "/lovable-uploads/8ca33ebd-a1d9-4d0f-a2db-e47c35c3d34d.png",
    alt: "Neuronics company logo - neural technology"
  },
  { 
    id: 'yad2',
    name: "Yad2", 
    logo: "/lovable-uploads/cca2477d-2c7f-4227-aa69-034f69118ea6.png",
    alt: "Yad2 company logo - classified advertising platform"
  },
  { 
    id: 'maman',
    name: "Maman", 
    logo: "/lovable-uploads/8c3edef5-591d-4b78-9040-3e49ec3265cd.png",
    alt: "Maman company logo - educational services"
  },
] as const;

// Configuration constants
const ANIMATION_CONFIG = {
  duration: 20,
  repetitions: 15,
} as const;

interface CompanyLogoProps {
  company: CompanyLogo;
  index: number;
}

// Memoized logo component with improved error handling and accessibility
const CompanyLogo = memo<CompanyLogoProps>(({ company, index }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = useCallback(() => {
    console.warn(`Failed to load image for ${company.name}:`, company.logo);
    setImageError(true);
    setImageLoading(false);
  }, [company.name, company.logo]);

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  // Memoize the error fallback content
  const errorFallback = useMemo(() => (
    <div 
      className="flex-shrink-0 mx-1"
      role="img"
      aria-label={`${company.name} logo (failed to load)`}
    >
      <div className="w-96 h-48 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
        <span className="text-white/60 text-sm font-medium">{company.name}</span>
      </div>
    </div>
  ), [company.name]);

  if (imageError) {
    return errorFallback;
  }

  return (
    <div className="flex-shrink-0 mx-1">
      <div className="w-96 h-48 relative flex items-center justify-center bg-transparent rounded-lg group">
        {imageLoading && (
          <div 
            className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg animate-pulse"
            aria-hidden="true"
          />
        )}
        
        <div className="w-72 h-36 relative flex items-center justify-center">
          <img
            src={company.logo}
            alt={company.alt}
            className={`
              max-w-full max-h-full object-contain 
              filter grayscale hover:grayscale-0 
              transition-all duration-300 absolute inset-0 m-auto
              ${imageLoading ? 'opacity-0' : 'opacity-100'}
            `}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
            decoding="async"
            // Improve accessibility
            role="img"
          />
        </div>
      </div>
    </div>
  );
});

CompanyLogo.displayName = 'CompanyLogo';

const CompanyLogosSection = memo(() => {
  // Performance monitoring in development
  usePerformanceMonitor('CompanyLogosSection');

  // Memoize the circular pattern creation
  const circularCompanies = useMemo(() => {
    // Create two sets of logos for seamless loop
    return [...COMPANY_LOGOS, ...COMPANY_LOGOS];
  }, []);

  // Memoize animation styles
  const animationStyles = useMemo(() => ({
    animationDuration: `${ANIMATION_CONFIG.duration}s`,
    animationPlayState: 'var(--animation-play-state, running)',
    width: 'fit-content'
  }), []);

  return (
    <section 
      className="py-32 section-primary" 
      aria-label="Companies that trust our development teams"
      role="region"
    >
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

          {/* Carousel Container with overflow mask */}
          <div 
            className="relative overflow-hidden"
            role="region"
            aria-label="Company logos carousel"
            aria-live="polite"
          >

            
            {/* Scrolling logos container */}
            <div 
              className={`flex ${styles.scrollAnimation}`}
              style={animationStyles}
              role="list"
              aria-label="Company logos"
            >
              {circularCompanies.map((company, index) => (
                <div key={`${company.id}-${index}`} role="listitem">
                  <CompanyLogo
                    company={company}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Screen reader accessible list of companies */}
          <div className="sr-only">
            <h3>Companies we work with:</h3>
            <ul>
              {COMPANY_LOGOS.map((company) => (
                <li key={company.id}>{company.name}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CompanyLogosSection.displayName = 'CompanyLogosSection';

export default CompanyLogosSection;
