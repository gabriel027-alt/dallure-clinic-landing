import { whatsappUrl } from '@/lib/clinic';
import { Arrow } from './icons';
export function ContactLink({ children = 'Agendar minha avaliação', treatment, className = 'button button-primary' }: { children?: React.ReactNode; treatment?: string; className?: string }) {
  const url = whatsappUrl(treatment);
  return <a className={className} href={url || '#contato'} {...(url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}<Arrow diagonal /></a>;
}
