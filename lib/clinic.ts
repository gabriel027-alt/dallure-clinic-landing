export const clinic = {
  city: 'Uberlândia · MG',
  address: process.env.NEXT_PUBLIC_CLINIC_ADDRESS?.trim() || '',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || '',
  instagram: process.env.NEXT_PUBLIC_CLINIC_INSTAGRAM_URL?.trim() || '',
};
export function whatsappUrl(treatment = 'uma avaliação') {
  if (!/^55\d{10,11}$/.test(clinic.whatsapp)) return null;
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${treatment} na Dallure Clinic.`)}`;
}
export const treatments = [
  { number: '01', name: 'Rinomodelação', label: 'EQUILÍBRIO EM CADA ÂNGULO', description: 'Um olhar cuidadoso para o perfil. Planejamento individual para valorizar proporções e a harmonia do rosto, respeitando sua anatomia.', detail: 'Avaliação de perfil · Planejamento personalizado', className: 'nose' },
  { number: '02', name: 'Full Face', label: 'A BELEZA DO CONJUNTO', description: 'O rosto visto por inteiro. Uma abordagem integrada que considera contornos, volumes e expressões para realçar o que já é seu.', detail: 'Análise facial · Cuidado integrado', className: 'face' },
];
