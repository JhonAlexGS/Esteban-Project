import{r as e}from"./rolldown-runtime-hePW80VL.js";import{d as t,u as n}from"./motion-D4psEU6N.js";import{l as r,m as i,n as a,s as o}from"./index-Cbg2B4r5.js";import{n as s,t as c}from"./brands-BWKTK8lh.js";import{n as l,r as u,t as d}from"./Section-B38RfVrf.js";import{t as f}from"./SpotlightCard-CBYcIXmY.js";var p=`# ---------------------------------------------------------------------------\r
# ARTIFICIAL INTELLIGENCE — English.\r
#\r
# \`items\` is the list of AI tools. To add one, copy a whole block keeping the\r
# indentation.\r
#\r
# Fields for each tool:\r
#   name        → visible name\r
#   category    → short label shown at the top right\r
#   description → what it is used for\r
#   level       → proficiency from 0 to 100 (this fills the bar)\r
#   brand       → tool logo. Available names live in\r
#                 \`src/components/ui/brands.jsx\`\r
#   url         → link to the tool (optional: without it the card doesn't link\r
#                 anywhere)\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Artificial intelligence\r
title: The AI tools I use daily\r
lead: >-\r
  Artificial intelligence tools that are part of my workflow, from analysis and\r
  writing code to visual design.\r
\r
levelLabel: Proficiency\r
\r
items:\r
  - name: Claude\r
    category: Conversational\r
    description: Anthropic's AI for analysis, code development and technical writing.\r
    level: 90\r
    brand: claude\r
    url: https://claude.ai\r
\r
  - name: ChatGPT\r
    category: Conversational\r
    description: AI assistant for text generation, code and analysis.\r
    level: 85\r
    brand: chatgpt\r
    url: https://chatgpt.com\r
\r
  - name: Gemini\r
    category: Conversational\r
    description: Google's multimodal AI for text, code and images.\r
    level: 80\r
    brand: gemini\r
    url: https://gemini.google.com\r
\r
  - name: Midjourney\r
    category: Image generation\r
    description: Generative AI for artistic image creation and visual design.\r
    level: 75\r
    brand: midjourney\r
    url: https://www.midjourney.com\r
\r
  - name: Perplexity\r
    category: Search\r
    description: AI-powered search engine with cited sources.\r
    level: 70\r
    brand: perplexity\r
    url: https://www.perplexity.ai\r
`,m=`# ---------------------------------------------------------------------------\r
# INTELIGENCIAS ARTIFICIALES — español.\r
#\r
# \`items\` es la lista de herramientas de IA. Para añadir una, copia un bloque\r
# completo respetando la indentación.\r
#\r
# Campos de cada herramienta:\r
#   name        → nombre visible\r
#   category    → etiqueta corta que aparece arriba a la derecha\r
#   description → para qué la usa\r
#   level       → dominio de 0 a 100 (es lo que llena la barra)\r
#   brand       → logo de la herramienta. Los nombres disponibles están en\r
#                 \`src/components/ui/brands.jsx\`\r
#   url         → enlace a la herramienta (opcional: sin él la tarjeta no\r
#                 enlaza a ninguna parte)\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Inteligencia artificial\r
title: Las IA que uso a diario\r
lead: >-\r
  Herramientas de inteligencia artificial que forman parte de mi flujo de\r
  trabajo, del análisis y la escritura de código al diseño visual.\r
\r
levelLabel: Dominio\r
\r
items:\r
  - name: Claude\r
    category: Conversacional\r
    description: IA de Anthropic para análisis, desarrollo de código y redacción técnica.\r
    level: 90\r
    brand: claude\r
    url: https://claude.ai\r
\r
  - name: ChatGPT\r
    category: Conversacional\r
    description: Asistente de IA para generación de texto, código y análisis.\r
    level: 85\r
    brand: chatgpt\r
    url: https://chatgpt.com\r
\r
  - name: Gemini\r
    category: Conversacional\r
    description: IA multimodal de Google para texto, código e imágenes.\r
    level: 80\r
    brand: gemini\r
    url: https://gemini.google.com\r
\r
  - name: Midjourney\r
    category: Generación de imágenes\r
    description: IA generativa para creación de imágenes artísticas y diseño visual.\r
    level: 75\r
    brand: midjourney\r
    url: https://www.midjourney.com\r
\r
  - name: Perplexity\r
    category: Búsqueda\r
    description: Motor de búsqueda potenciado por IA, con fuentes citadas.\r
    level: 70\r
    brand: perplexity\r
    url: https://www.perplexity.ai\r
`,h=e(t(),1),g=n(),_=Object.assign({"./content.en.yaml":p,"./content.es.yaml":m});function v(){let e=a(),t=(0,h.useMemo)(()=>o(_,e)??{},[e]),n=t.items??[];return n.length===0?null:(0,g.jsxs)(d,{id:`ai-tools`,children:[(0,g.jsx)(l,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,g.jsx)(`div`,{className:`mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3`,children:n.map((e,n)=>{let a=e.url?`a`:`div`,o=e.url?{href:e.url,target:`_blank`,rel:`noreferrer noopener`}:{};return(0,g.jsx)(u,{variants:i,delay:n*.07,className:`min-w-0`,children:(0,g.jsx)(f,{className:`h-full`,children:(0,g.jsxs)(a,{...o,className:`flex h-full flex-col gap-4 p-6`,children:[(0,g.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,g.jsx)(`span`,{className:`grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface shadow-inner-top transition-colors duration-200 group-hover:border-line-accent`,children:(0,g.jsx)(c,{name:e.brand,label:e.name,className:`h-5 w-5`})}),e.category?(0,g.jsx)(`span`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase`,children:e.category}):null]}),(0,g.jsxs)(`div`,{className:`flex flex-1 flex-col gap-2`,children:[(0,g.jsxs)(`h3`,{className:`flex items-center gap-1.5 text-lg font-semibold tracking-tight text-ink`,children:[e.name,e.url?(0,g.jsx)(r.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4 text-ink-subtle transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent-ink`}):null]}),(0,g.jsx)(`p`,{className:`text-sm leading-relaxed text-ink-muted`,children:e.description})]}),(0,g.jsxs)(`div`,{className:`flex flex-col gap-2 border-t border-line pt-4`,children:[(0,g.jsx)(`span`,{className:`nc-eyebrow`,children:t.levelLabel}),(0,g.jsx)(s,{level:e.level,label:`${t.levelLabel}: ${e.name}`})]})]})})},e.name)})})]})}export{v as default};