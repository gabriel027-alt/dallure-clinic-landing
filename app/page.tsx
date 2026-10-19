import { ScrollAtmosphere } from '@/components/scroll-atmosphere';
import { Triage } from '@/components/triage';
import { ClinicVideo } from '@/components/clinic-video';
import { Header } from '@/components/header';
import { Hero, Manifesto, Treatments, Results } from '@/components/sections';
import { Footer } from '@/components/footer';
export default function Page() { return <><ScrollAtmosphere/><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header/><main id="conteudo"><Hero/><Manifesto/><ClinicVideo/><Treatments/><Results/><Triage/><Footer/></main></>; }
