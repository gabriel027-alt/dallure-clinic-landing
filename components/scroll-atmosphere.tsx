'use client';
import { useEffect } from 'react';

/** Native scrolling, one scheduled frame, stable anchors and bounded image movement. */
export function ScrollAtmosphere() {
 useEffect(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compact = window.matchMedia('(max-width: 640px)');
  const artwork = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax], [data-parallax-image]'));
  const items = artwork.map(node => ({ node, anchor: node.parentElement!, image: node.hasAttribute('data-parallax-image') }));
  let frame = 0;
  const reset = () => artwork.forEach(node => node.style.removeProperty('--parallax-y'));
  const render = () => {
   frame = 0;
   if (preference.matches) { reset(); return; }
   // Read all geometry before writing styles; do not measure the translated element.
   const updates = items.map(({node, anchor, image}) => {
    const bounds = anchor.getBoundingClientRect();
    if (bounds.bottom < -50 || bounds.top > window.innerHeight + 50) return null;
    const limit = image ? 12 : 14;
    const distance = image && compact.matches ? 0 : (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) * (image ? 0.025 : 0.035);
    return { node, y: Math.max(-limit, Math.min(limit, distance)) };
   });
   updates.forEach(update => { if (update) update.node.style.setProperty('--parallax-y', `${update.y.toFixed(2)}px`); });
  };
  const schedule = () => { if (!preference.matches && !frame) frame = requestAnimationFrame(render); };
  const change = () => { if (preference.matches) { cancelAnimationFrame(frame); frame = 0; reset(); } else schedule(); };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  preference.addEventListener('change', change);
  schedule();
  return () => { cancelAnimationFrame(frame); reset(); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); preference.removeEventListener('change', change); };
 }, []);
 return null;
}
