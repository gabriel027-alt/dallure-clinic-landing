'use client';
import { useEffect, useRef } from 'react';
export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const node = ref.current;
  if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { node.classList.remove('reveal-pending'); observer.disconnect(); } }, { threshold: 0.08 });
  node.classList.add('reveal-pending'); observer.observe(node);
  return () => { observer.disconnect(); node.classList.remove('reveal-pending'); };
 }, []);
 return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
