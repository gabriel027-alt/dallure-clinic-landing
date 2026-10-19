'use client';
import { useEffect, useRef, type CSSProperties } from 'react';

/** Content is visible without JavaScript. Reveal once; never hide focused content. */
export function Reveal({ children, className = '', delay = 0, variant = 'rise' }: { children: React.ReactNode; className?: string; delay?: number; variant?: 'rise' | 'curtain' | 'fade' }) {
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const node = ref.current;
  if (!node || !('IntersectionObserver' in window)) return;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer: IntersectionObserver | undefined;
  const show = () => { node.classList.remove('reveal-pending'); observer?.disconnect(); };
  if (!preference.matches) {
   observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) show();
   }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
   node.classList.add('reveal-pending');
   observer.observe(node);
  }
  node.addEventListener('focusin', show);
  preference.addEventListener('change', show);
  return () => { show(); node.removeEventListener('focusin', show); preference.removeEventListener('change', show); };
 }, []);
 return <div ref={ref} data-reveal={variant} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>{children}</div>;
}
