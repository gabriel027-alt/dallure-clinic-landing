# Dallure Clinic

Landing page responsiva em Next.js 15 (App Router), React 19 e Tailwind CSS 4. Sem banco de dados ou credenciais obrigatórias para desenvolvimento.

## Executar

Requisito: Node.js 22 ou 24 e npm.

```sh
npm ci
npm run dev
```

Servidor na porta 3000. Validação de produção:

```sh
npm run build
npm run typecheck
npm start
```

Não execute `dev` e `start` simultaneamente na mesma porta. O build gera os tipos usados pelo typecheck.

## Conteúdo a fornecer

- A imagem original do repositório está instalada em `public/dra-lais-hero.png`, sem alteração de conteúdo. O hero usa a imagem integral como fundo `object-fit: cover`, sem moldura. O recorte se adapta ao dispositivo. Enquanto o arquivo estiver ausente, há apenas um fundo neutro, sem fotografia alternativa. Reinicie o servidor depois de adicionar arquivos.
- Copie `.env.example` para `.env.local`. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` com o telefone real (`55` + DDD + número, somente dígitos), `NEXT_PUBLIC_CLINIC_ADDRESS` e, opcionalmente, `NEXT_PUBLIC_CLINIC_INSTAGRAM_URL`. Reinicie o dev server ou refaça o build depois de mudar variáveis.
- Sem telefone válido, os CTAs levam ao contato e nenhum número fictício é usado. Não há formulário ou coleta de dados pessoais. WhatsApp abre uma mensagem de interesse, sem solicitar informações clínicas.
- Para cada caso autorizado, inclua **as duas** fotos `public/results/caso-1-antes.jpg` e `caso-1-depois.jpg` (repita para casos 2 e 3). A grade exibe somente pares completos. Sem fotos há placeholders identificados, sem pacientes ou depoimentos fictícios. Revise legendas, consentimento e informações profissionais antes da publicação.

## Organização

- `app/`: layout, metadata e estilos responsivos com tokens Tailwind.
- `components/`: navegação móvel, hero, manifesto, tratamentos, galeria, contato e animação por IntersectionObserver.
- `lib/clinic.ts`: dados configuráveis e links de WhatsApp.

Tipografia serifada usa fontes disponíveis no dispositivo (`Bodoni MT`, `Didot`, `Times New Roman`), sem dependência de serviços de fontes. Desenhos de contorno dos tratamentos são SVG decorativos, não resultados clínicos. Animações respeitam a preferência de movimento reduzido; navegação funciona sem JavaScript, exceto o menu móvel.

Os vídeos de referência foram usados como direção visual: fotografia dominante, composição editorial e paleta nude. Nenhum vídeo de terceiros é distribuído pelo aplicativo.

## Triagem e vídeo

A triagem usa três perguntas (interesse, prazo e alinhamento com investimento de referência de R$ 3.000). As respostas não são persistidas nem enviadas automaticamente. Com um telefone válido configurado, o usuário pode enviá-las ao WhatsApp da clínica. O preço final depende de avaliação individual.

O player HTML5 usa controles nativos, `playsInline`, `preload="none"`, poster original e nenhum autoplay. Adicione o vídeo oficial em `public/videos/metodo-lure.mp4` ou configure `NEXT_PUBLIC_CLINIC_VIDEO_URL` (URL HTTPS ou caminho local). Sem vídeo, aparece um aviso honesto de conteúdo em breve. Os vídeos de Pinterest são referências de design, não vídeos institucionais para publicação.

Deploy Vercel: framework Next.js, diretório raiz do repositório, instalação `npm ci`, build `npm run build`. Configure os contatos reais nas variáveis do projeto Vercel e refaça o deploy. O push não cria uma integração Vercel automaticamente.

## Movimento editorial

`Reveal` aplica fade e deslocamento de 28px uma única vez, com atraso escalonado nos cards. O conteúdo permanece acessível sem JavaScript e é revelado imediatamente ao receber foco. `ScrollAtmosphere` usa listener passivo e `requestAnimationFrame` para paralaxe decorativa limitada a 14px, sem mover textos ou interceptar a rolagem. Ambos respeitam `prefers-reduced-motion`, inclusive quando a preferência muda durante a sessão.

O Hero usa proporção 16:9 no desktop (altura mínima de 760px para acomodar o conteúdo em telas intermediárias), `object-fit: cover` e foco central. No celular, a fotografia mantém sua proporção original completa, acima do conteúdo editorial.

### Refinamento a partir dos vídeos de referência

A sequência dos dois vídeos foi analisada em quadros distribuídos pelos 13 e 10 segundos de duração: tipografia com recorte, entradas de painéis em sequência e profundidade entre fotografia e conteúdo. A adaptação usa linhas de título mascaradas (atrasos de 90/210ms), painéis com revelação por `clip-path` (1,2s), cards escalonados (160ms) e entrada inicial do Hero. A fotografia recebe paralaxe limitada a 12px e escala de 1,04 para evitar bordas vazias; em celular o movimento da foto é desativado para preservar o enquadramento integral. Não há interceptação de scroll, reprodução dos vídeos de referência ou promessa de equivalência quadro a quadro com demonstrações editadas.
