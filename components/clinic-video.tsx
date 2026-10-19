import { existsSync } from 'node:fs';
import path from 'node:path';
import { Reveal } from './reveal';
export function ClinicVideo() {
 const configured = process.env.NEXT_PUBLIC_CLINIC_VIDEO_URL?.trim();
 const source = configured && (/^https:\/\//.test(configured) || /^\/(?!\/)/.test(configured)) ? configured : existsSync(path.join(process.cwd(), 'public/videos/metodo-lure.mp4')) ? '/videos/metodo-lure.mp4' : null;
 return <section className="clinic-video section-pad" aria-labelledby="video-title"><Reveal><div className="section-heading"><div><p className="eyebrow">UM OLHAR MAIS PRÓXIMO</p><h2 id="video-title">Por trás de cada detalhe,<br/><em>um propósito.</em></h2></div><p>Dra. Laís Vilela · Dallure Clinic<br/>Harmonização facial em Uberlândia</p></div>{source ? <video controls playsInline preload="none" poster="/dra-lais-hero.png" aria-label="Conheça o Método Lure com a Dra. Laís Vilela"><source src={source}/>Seu navegador não suporta vídeo HTML5.</video> : <div className="video-pending"><p className="eyebrow">MÉTODO LURE · DRA. LAÍS VILELA</p><p>Um encontro com a nossa essência.</p><small>Vídeo de apresentação em breve.</small></div>}</Reveal></section>;
}
