import React, { useEffect, useState, useRef, memo, useCallback } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter = memo<AnimatedCounterProps>(({
  end,
  duration = 2,
  className = '',
  suffix = '',
  prefix = ''
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const animate = useCallback((currentTime: number, startTime: number) => {
    const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
    const currentCount = Math.floor(progress * end);
    
    setCount(currentCount);
    
    if (progress < 1) {
      requestAnimationFrame((time) => animate(time, startTime));
    }
  }, [end, duration]);

  useEffect(() => {
    if (!isInView) return;

    let rafId: number;
    
    const startAnimation = (startTime: number) => {
      animate(startTime, startTime);
    };

    rafId = requestAnimationFrame(startAnimation);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isInView, animate]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter'; 