export function Arrow({ diagonal = false, className = '' }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-6-6 6 6-6 6'} /></svg>;
}
export function WhatsAppIcon() {
  return <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.3-4.8a8.5 8.5 0 1 1 16.2-4Z"/><path d="M8 7.5c-.8 1-.3 3.5 1.8 5.6s4.4 2.5 5.5 1.5l.5-1.3-2.4-1.2-.9 1c-1.1-.4-2.3-1.6-2.8-2.7l.8-.9L9.4 7Z"/></svg>;
}
