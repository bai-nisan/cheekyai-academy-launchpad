import { useCallback, useMemo, useRef, useEffect, useState } from 'react';

/**
 * Custom hook for debouncing values to prevent excessive re-renders
 * Follows React performance best practices
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook for memoized event handlers
 * Prevents unnecessary re-renders of child components
 */
export function useStableCallback<T extends (...args: any[]) => any>(callback: T): T {
  const callbackRef = useRef<T>(callback);
  
  // Update the ref with the latest callback
  useEffect(() => {
    callbackRef.current = callback;
  });

  // Return a stable callback that calls the latest version
  return useCallback(((...args: any[]) => {
    return callbackRef.current(...args);
  }) as T, []);
}

/**
 * Custom hook for managing intersection observer with performance optimizations
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setElement = useCallback((element: Element | null) => {
    elementRef.current = element;
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create observer with memoized options
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    observer.observe(element);
    observerRef.current = observer;

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [options]);

  return { entry, setElement };
}

/**
 * Custom hook for optimized scroll event handling
 */
export function useOptimizedScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const updateScrollPosition = useCallback(() => {
    const scrollY = window.scrollY;
    
    setScrollDirection(scrollY > lastScrollY.current ? 'down' : 'up');
    setScrollPosition(scrollY);
    lastScrollY.current = scrollY;
    ticking.current = false;
  }, []);

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollPosition);
      ticking.current = true;
    }
  }, [updateScrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', requestTick, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', requestTick);
    };
  }, [requestTick]);

  return { scrollPosition, scrollDirection };
}

/**
 * Custom hook for memoized calculations with dependency tracking
 */
export function useMemoizedCalculation<T, D extends readonly unknown[]>(
  calculation: () => T,
  dependencies: D
): T {
  return useMemo(calculation, dependencies);
}

/**
 * Custom hook for stable object references to prevent unnecessary re-renders
 */
export function useStableObject<T extends Record<string, any>>(obj: T): T {
  return useMemo(() => obj, Object.values(obj));
}

/**
 * Custom hook for managing component mount state
 * Useful for preventing state updates after component unmount
 */
export function useMountedState() {
  const mountedRef = useRef(false);
  const isMounted = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
}

/**
 * Custom hook for performance monitoring in development
 */
export function usePerformanceMonitor(componentName: string) {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(Date.now());

  useEffect(() => {
    renderCount.current += 1;
    const now = Date.now();
    const timeSinceLastRender = now - lastRenderTime.current;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${componentName} rendered ${renderCount.current} times. Time since last render: ${timeSinceLastRender}ms`);
    }
    
    lastRenderTime.current = now;
  });

  return {
    renderCount: renderCount.current,
    resetRenderCount: () => {
      renderCount.current = 0;
    },
  };
}

/**
 * Custom hook combining multiple performance optimizations
 */
export function usePerformanceOptimized<T>(
  value: T,
  dependencies: readonly unknown[] = []
) {
  const isMounted = useMountedState();
  const stableValue = useMemo(() => value, dependencies);
  const debouncedValue = useDebounce(stableValue, 100);
  
  return {
    value: stableValue,
    debouncedValue,
    isMounted,
  };
} 