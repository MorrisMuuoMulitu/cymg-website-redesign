import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  detail?: string;
}

export default function StatCounter({ value, suffix = '', label, detail }: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }
  }, [reducedMotion, value]);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          if (reducedMotion) {
            setDisplayValue(value);
            return;
          }
          const duration = 1200;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);

    // Fallback: ensure value is shown even if observer never fires
    const fallback = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true);
        setDisplayValue(value);
      }
    }, 4000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [value, hasAnimated, reducedMotion]);

  return (
    <div ref={ref} className="flex flex-col">
      <span
        className="text-display font-display font-bold"
        style={{ color: 'var(--assembly-blue)' }}
      >
        {displayValue}
        {suffix}
      </span>
      <span className="text-body-lg font-medium mt-1" style={{ color: 'var(--ink)' }}>
        {label}
      </span>
      {detail && (
        <span className="text-sm mt-1" style={{ color: 'var(--ink-60)' }}>
          {detail}
        </span>
      )}
    </div>
  );
}
