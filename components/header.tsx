'use client';
import { useState } from 'react';
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a href="#inicio" className="wordmark" aria-label="Dallure Clinic — início">dallure<span>CLINIC</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Menu'} <span>{open ? '−' : '+'}</span></button><nav id="navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navegação principal"><a href="#metodo" onClick={() => setOpen(false)}>O método</a><a href="#tratamentos" onClick={() => setOpen(false)}>Tratamentos</a><a href="#resultados" onClick={() => setOpen(false)}>Resultados</a><a className="header-cta" href="#triagem" onClick={() => setOpen(false)}>Iniciar triagem ↗</a></nav></header>;
}
