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
