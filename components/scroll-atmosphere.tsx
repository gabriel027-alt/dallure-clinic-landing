'use client';
import { useEffect } from 'react';

/** Only decorative artwork moves; layout, text, focus and native scrolling stay stable. */
export function ScrollAtmosphere() {
 useEffect(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const artwork = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  let frame = 0;
  const reset = () => artwork.forEach(node => node.style.removeProperty('--parallax-y'));
  const render = () => {
   frame = 0;
   if (preference.matches) { reset(); return; }
   artwork.forEach(node => {
    const bounds = node.getBoundingClientRect();
    if (bounds.bottom < -50 || bounds.top > window.innerHeight + 50) return;
    const distance = (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) * 0.035;
    node.style.setProperty('--parallax-y', `${Math.max(-14, Math.min(14, distance)).toFixed(2)}px`);
   });
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
  const change = () => { if (preference.matches) reset(); else schedule(); };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  preference.addEventListener('change', change);
  schedule();
  return () => { cancelAnimationFrame(frame); reset(); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); preference.removeEventListener('change', change); };
 }, []);
 return null;
}
