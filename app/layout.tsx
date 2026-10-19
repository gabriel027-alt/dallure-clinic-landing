import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Dallure Clinic | Sua essência. Nossa arte.', description: 'Harmonização facial em Uberlândia. Dra. Laís Vilela. Conheça o Método Lure: cuidado individual, naturalidade e elegância em cada detalhe.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
