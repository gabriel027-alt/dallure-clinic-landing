'use client';
import { useRef, useState } from 'react';
import { whatsappUrl } from '@/lib/clinic';
import { Reveal } from './reveal';
import { Arrow } from './icons';
export function Triage() {
 const dialog = useRef<HTMLDialogElement>(null);
 const [step, setStep] = useState(0);
 const [treatment, setTreatment] = useState('');
 const [timing, setTiming] = useState('');
 const [budget, setBudget] = useState('');
 const choices = [ ['Rinomodelação', 'Full Face', 'Quero orientação profissional'], ['Nos próximos 30 dias', 'Nos próximos 3 meses', 'Estou pesquisando'], ['Está dentro do meu planejamento', 'Quero entender as possibilidades'] ];
 const answers = [treatment, timing, budget];
 const setters = [setTreatment, setTiming, setBudget];
 const questions = ['O que você deseja valorizar?', 'Quando gostaria de começar?', 'Vamos alinhar suas expectativas?'];
 const url = whatsappUrl(`uma avaliação. Interesse: ${treatment}. Prazo: ${timing}. Investimento de referência de R$ 3.000: ${budget}`);
 function close() { dialog.current?.close(); }
 return <section id="triagem" className="triage-section section-pad"><Reveal className="triage-layout"><div><p className="eyebrow">UM CUIDADO QUE COMEÇA NA ESCUTA</p><h2>O seu próximo passo,<br/><em>com intenção.</em></h2></div><div className="triage-intro"><p>Conte um pouco sobre o que você busca. Em três perguntas, preparamos uma conversa mais próxima do seu momento.</p><p className="investment">Investimento de referência <strong>R$ 3.000</strong></p><small>O plano e o valor final são definidos após avaliação individual. A triagem não substitui uma consulta.</small><button className="button button-primary" onClick={() => { setStep(0); dialog.current?.showModal(); }}>Iniciar minha triagem <Arrow diagonal/></button></div></Reveal><dialog ref={dialog} className="triage-dialog" aria-labelledby="triage-title" onClick={e => { if (e.target === dialog.current) close(); }}><div className="triage-dialog-inner"><button className="dialog-close" onClick={close} aria-label="Fechar triagem">×</button><p className="eyebrow">DAL LURE / SUA AVALIAÇÃO · {Math.min(step+1,3)} DE 3</p><h2 id="triage-title">{step < 3 ? questions[step] : 'Seu primeiro passo está dado.'}</h2>{step === 2 && <p>Considere um investimento de referência de R$ 3.000, sujeito à avaliação e ao plano indicado.</p>}{step < 3 ? <><fieldset className="triage-options"><legend className="sr-only">{questions[step]}</legend>{choices[step].map(choice => <label key={choice}><input type="radio" name={`step-${step}`} value={choice} checked={answers[step] === choice} onChange={() => setters[step](choice)}/><span>{choice}</span></label>)}</fieldset><div className="triage-controls">{step > 0 && <button className="text-link dark-link" onClick={() => setStep(step-1)}>Voltar</button>}<button className="button button-primary" disabled={!answers[step]} onClick={() => setStep(step+1)}>{step === 2 ? 'Concluir' : 'Continuar'} <Arrow/></button></div></> : <><p>Interesse: {treatment}<br/>Momento: {timing}<br/>Investimento: {budget}</p>{url ? <a className="button button-primary" href={url} target="_blank" rel="noopener noreferrer">Enviar interesse pelo WhatsApp <Arrow diagonal/></a> : <p className="contact-pending">O canal de agendamento será disponibilizado em breve. Suas respostas não foram enviadas.</p>}<button className="text-link dark-link" onClick={close}>Concluir e fechar</button></>}<small>As respostas ficam apenas nesta página até você optar por enviá-las pelo WhatsApp. Não informe dados de saúde.</small></div></dialog></section>;
}
