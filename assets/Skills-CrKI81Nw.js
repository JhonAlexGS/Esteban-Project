import{r as e}from"./rolldown-runtime-hePW80VL.js";import{c as t,d as n,t as r,u as i}from"./motion-D4psEU6N.js";import{_ as a,a as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as S}from"./vendor-CGe-Pfak.js";import{d as C,l as w,m as T,n as E,s as D,u as O}from"./index-sGxW7g-M.js";import{n as k,r as A,t as j}from"./Section-BicXDDXv.js";import{t as M}from"./SpotlightCard-8Qw2FDrF.js";var N=`# ---------------------------------------------------------------------------\r
# TECH STACK — English.\r
#\r
# Each block in \`groups\` is a card with its list of skills and the proficiency\r
# level of each one (the progress bar).\r
#\r
# Fields for each skill:\r
#   name  → visible name\r
#   level → proficiency from 0 to 100 (this fills the bar)\r
#   brand → technology logo (optional). Available names live in\r
#           \`src/components/ui/brands.jsx\`; skills that aren't a specific\r
#           product (e.g. "Industrial control") are left without \`brand\`.\r
#   url   → link to the tool (optional): with it, the name becomes a link.\r
#           The artificial intelligence tools use it.\r
#   icon  → skill icon when it isn't a product with a logo. Without one, the\r
#           card's icon is used.\r
#\r
# \`icon\` is the card icon and accepts: terminal, layers, devops, cloud, server,\r
# database, tool, cpu, shield, sun, code, radio, globe, book, award.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Tech stack\r
title: A tool for every idea\r
# Optional lead: when empty, the section goes straight from title to cards.\r
lead: ''\r
\r
groups:\r
  - icon: terminal\r
    title: Programming\r
    items:\r
      - name: Python\r
        level: 65\r
        brand: python\r
      - name: Arduino\r
        level: 70\r
        brand: arduino\r
      - name: C/C++\r
        level: 62\r
        brand: cpp\r
      - name: JavaScript\r
        level: 58\r
        brand: javascript\r
      - name: MATLAB\r
        level: 58\r
        brand: matlab\r
      - name: HTML/CSS\r
        level: 62\r
        brand: html\r
\r
  - icon: layers\r
    title: CAD design\r
    items:\r
      - name: SolidWorks\r
        level: 58\r
        brand: solidworks\r
      - name: Solid Edge\r
        level: 52\r
        brand: solidedge\r
      - name: FreeDFD\r
        level: 58\r
        brand: freedfd\r
\r
  - icon: tool\r
    title: Robotics\r
    items:\r
      - name: Sensors & actuators\r
        level: 72\r
        icon: radio\r
      - name: Anthropomorphic robotics\r
        level: 70\r
        icon: tool\r
      - name: Mechanical design\r
        level: 65\r
        icon: layers\r
      - name: Motion control\r
        level: 52\r
        icon: activity\r
\r
  - icon: devops\r
    title: Automation\r
    items:\r
      - name: PLC\r
        level: 70\r
        icon: cpu\r
      - name: Industrial control\r
        level: 66\r
        icon: server\r
      - name: Instrumentation\r
        level: 65\r
        icon: activity\r
      - name: SCADA systems\r
        level: 62\r
        icon: database\r
\r
  # Everyday AI tools, each with its logo and link.\r
  - icon: cpu\r
    title: Artificial intelligence\r
    items:\r
      - name: Claude\r
        level: 75\r
        brand: claude\r
        url: https://claude.ai\r
      - name: ChatGPT\r
        level: 70\r
        brand: chatgpt\r
        url: https://chatgpt.com\r
      - name: Gemini\r
        level: 65\r
        brand: gemini\r
        url: https://gemini.google.com\r
      - name: Midjourney\r
        level: 58\r
        brand: midjourney\r
        url: https://www.midjourney.com\r
      - name: Perplexity\r
        level: 52\r
        brand: perplexity\r
        url: https://www.perplexity.ai\r
      - name: ElevenLabs\r
        level: 55\r
        brand: elevenlabs\r
        url: https://elevenlabs.io\r
      - name: Seedance\r
        level: 50\r
        brand: seedance\r
        url: https://seedance.ai\r
\r
  - icon: activity\r
    title: Applied AI\r
    items:\r
      - name: Data processing\r
        level: 62\r
        icon: database\r
      - name: Machine learning\r
        level: 58\r
        icon: cpu\r
      - name: Computer vision\r
        level: 55\r
        icon: image\r
      - name: AI-driven automation\r
        level: 52\r
        icon: devops\r
\r
  - icon: sun\r
    title: Solar energy\r
    items:\r
      - name: Photovoltaic systems\r
        level: 65\r
        icon: sun\r
      - name: Renewable energy\r
        level: 62\r
        icon: sun\r
      - name: Installation design\r
        level: 58\r
        icon: layers\r
\r
  - icon: shield\r
    title: Cybersecurity\r
    items:\r
      - name: Information security\r
        level: 35\r
        icon: shield\r
      - name: Data protection\r
        level: 32\r
        icon: shield\r
      - name: Secure networks\r
        level: 30\r
        icon: globe\r
      - name: Vulnerability analysis\r
        level: 28\r
        icon: search\r
\r
  - icon: code\r
    title: Tools & software\r
    items:\r
      - name: Arduino IDE\r
        level: 75\r
        brand: arduino\r
      - name: Microsoft Office\r
        level: 75\r
        brand: office\r
      - name: Moodle\r
        level: 70\r
        brand: moodle\r
      - name: Adobe Dreamweaver\r
        level: 65\r
        brand: dreamweaver\r
      - name: GitHub\r
        level: 58\r
        brand: github\r
      - name: Google Meet\r
        level: 72\r
        brand: meet\r
        url: https://meet.google.com\r
      - name: Zoom\r
        level: 72\r
        brand: zoom\r
        url: https://zoom.us\r
\r
  - icon: box\r
    title: Hands-on trades\r
    items:\r
      - name: Computer assembly & maintenance\r
        level: 70\r
        icon: monitor\r
      - name: General maintenance\r
        level: 62\r
        icon: tool\r
      - name: Carpentry\r
        level: 58\r
        icon: box\r
      - name: Electrical wiring\r
        level: 52\r
        icon: zap\r
\r
  - icon: award\r
    title: Management & teaching\r
    items:\r
      - name: Administrative management\r
        level: 70\r
        icon: award\r
      - name: Project management\r
        level: 66\r
        icon: check\r
      - name: Pedagogy\r
        level: 65\r
        icon: book\r
      - name: Digital marketing\r
        level: 58\r
        icon: globe\r
\r
languagesTitle: Languages\r
languages:\r
  - name: Spanish\r
    level: Native\r
`,P=`# ---------------------------------------------------------------------------\r
# STACK TÉCNICO — español.\r
#\r
# Cada bloque de \`groups\` es una tarjeta con su lista de habilidades y el nivel\r
# de dominio de cada una (la barra de progreso).\r
#\r
# Campos de cada habilidad:\r
#   name  → nombre visible\r
#   level → dominio de 0 a 100 (es lo que llena la barra)\r
#   brand → logo de la tecnología (opcional). Los nombres disponibles están en\r
#           \`src/components/ui/brands.jsx\`; si una habilidad no es un producto\r
#           concreto (por ejemplo «Control industrial»), se deja sin \`brand\`.\r
#   url   → enlace a la herramienta (opcional): con él, el nombre se vuelve un\r
#           enlace. Lo usan las herramientas de inteligencia artificial.\r
#   icon  → ícono de la habilidad cuando no es un producto con logo. Si no se\r
#           pone ninguno, se usa el ícono de la tarjeta.\r
#\r
# \`icon\` es el ícono de la tarjeta y acepta: terminal, layers, devops, cloud,\r
# server, database, tool, cpu, shield, sun, code, radio, globe, book, award.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Stack técnico\r
title: Una herramienta para cada idea\r
# Entradilla opcional: vacía, la sección pasa directo del titular a las\r
# tarjetas.\r
lead: ''\r
\r
groups:\r
  - icon: terminal\r
    title: Programación\r
    items:\r
      - name: Python\r
        level: 65\r
        brand: python\r
      - name: Arduino\r
        level: 70\r
        brand: arduino\r
      - name: C/C++\r
        level: 62\r
        brand: cpp\r
      - name: JavaScript\r
        level: 58\r
        brand: javascript\r
      - name: MATLAB\r
        level: 58\r
        brand: matlab\r
      - name: HTML/CSS\r
        level: 62\r
        brand: html\r
\r
  - icon: layers\r
    title: Diseño CAD\r
    items:\r
      - name: SolidWorks\r
        level: 58\r
        brand: solidworks\r
      - name: Solid Edge\r
        level: 52\r
        brand: solidedge\r
      - name: FreeDFD\r
        level: 58\r
        brand: freedfd\r
\r
  - icon: tool\r
    title: Robótica\r
    items:\r
      - name: Sensores y actuadores\r
        level: 72\r
        icon: radio\r
      - name: Robótica antropomórfica\r
        level: 70\r
        icon: tool\r
      - name: Diseño mecánico\r
        level: 65\r
        icon: layers\r
      - name: Control de movimiento\r
        level: 52\r
        icon: activity\r
\r
  - icon: devops\r
    title: Automatización\r
    items:\r
      - name: PLC\r
        level: 70\r
        icon: cpu\r
      - name: Control industrial\r
        level: 66\r
        icon: server\r
      - name: Instrumentación\r
        level: 65\r
        icon: activity\r
      - name: Sistemas SCADA\r
        level: 62\r
        icon: database\r
\r
  # Herramientas de IA de uso diario, cada una con su logo y su enlace.\r
  - icon: cpu\r
    title: Inteligencia artificial\r
    items:\r
      - name: Claude\r
        level: 75\r
        brand: claude\r
        url: https://claude.ai\r
      - name: ChatGPT\r
        level: 70\r
        brand: chatgpt\r
        url: https://chatgpt.com\r
      - name: Gemini\r
        level: 65\r
        brand: gemini\r
        url: https://gemini.google.com\r
      - name: Midjourney\r
        level: 58\r
        brand: midjourney\r
        url: https://www.midjourney.com\r
      - name: Perplexity\r
        level: 52\r
        brand: perplexity\r
        url: https://www.perplexity.ai\r
      - name: ElevenLabs\r
        level: 55\r
        brand: elevenlabs\r
        url: https://elevenlabs.io\r
      - name: Seedance\r
        level: 50\r
        brand: seedance\r
        url: https://seedance.ai\r
\r
  - icon: activity\r
    title: IA aplicada\r
    items:\r
      - name: Procesamiento de datos\r
        level: 62\r
        icon: database\r
      - name: Machine learning\r
        level: 58\r
        icon: cpu\r
      - name: Visión artificial\r
        level: 55\r
        icon: image\r
      - name: Automatización con IA\r
        level: 52\r
        icon: devops\r
\r
  - icon: sun\r
    title: Energía solar\r
    items:\r
      - name: Sistemas fotovoltaicos\r
        level: 65\r
        icon: sun\r
      - name: Energías renovables\r
        level: 62\r
        icon: sun\r
      - name: Diseño de instalaciones\r
        level: 58\r
        icon: layers\r
\r
  - icon: shield\r
    title: Ciberseguridad\r
    items:\r
      - name: Seguridad informática\r
        level: 35\r
        icon: shield\r
      - name: Protección de datos\r
        level: 32\r
        icon: shield\r
      - name: Redes seguras\r
        level: 30\r
        icon: globe\r
      - name: Análisis de vulnerabilidades\r
        level: 28\r
        icon: search\r
\r
  - icon: code\r
    title: Herramientas y software\r
    items:\r
      - name: Arduino IDE\r
        level: 75\r
        brand: arduino\r
      - name: Microsoft Office\r
        level: 75\r
        brand: office\r
      - name: Moodle\r
        level: 70\r
        brand: moodle\r
      - name: Adobe Dreamweaver\r
        level: 65\r
        brand: dreamweaver\r
      - name: GitHub\r
        level: 58\r
        brand: github\r
      - name: Google Meet\r
        level: 72\r
        brand: meet\r
        url: https://meet.google.com\r
      - name: Zoom\r
        level: 72\r
        brand: zoom\r
        url: https://zoom.us\r
\r
  - icon: box\r
    title: Oficios prácticos\r
    items:\r
      - name: Mantenimiento y armado de computadores\r
        level: 70\r
        icon: monitor\r
      - name: Mantenimiento general\r
        level: 62\r
        icon: tool\r
      - name: Carpintería\r
        level: 58\r
        icon: box\r
      - name: Redes eléctricas\r
        level: 52\r
        icon: zap\r
\r
  - icon: award\r
    title: Gestión y docencia\r
    items:\r
      - name: Gerencia administrativa\r
        level: 70\r
        icon: award\r
      - name: Gestión de proyectos\r
        level: 66\r
        icon: check\r
      - name: Pedagogía\r
        level: 65\r
        icon: book\r
      - name: Marketing digital\r
        level: 58\r
        icon: globe\r
\r
languagesTitle: Idiomas\r
languages:\r
  - name: Español\r
    level: Nativo\r
`,F=e(n(),1),I=i();function L({level:e,label:n,showValue:i=!0}){let a=r(),o=Math.max(0,Math.min(100,Number(e)||0));return(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(`div`,{role:`progressbar`,"aria-valuenow":o,"aria-valuemin":0,"aria-valuemax":100,"aria-label":n,className:`h-1.5 w-full overflow-hidden rounded-full bg-line`,children:(0,I.jsx)(t.span,{initial:!a&&{width:0},whileInView:{width:`${o}%`},viewport:{once:!0,amount:.4},transition:{duration:.9,ease:C},className:`block h-full rounded-full bg-gradient-to-r from-accent to-accent-bright`,style:a?{width:`${o}%`}:void 0})}),i?(0,I.jsxs)(`span`,{className:`w-9 shrink-0 text-right font-mono text-[0.6875rem] text-ink-subtle`,children:[o,`%`]}):null]})}var R={python:{Icon:d,color:`#3776AB`},c:{Icon:v,color:`#5C6BC0`},cpp:{Icon:o,color:`#00599C`},javascript:{Icon:c,color:`#E6B800`},html:{Icon:x,color:`#E34F26`},arduino:{Icon:h,color:`#00979D`},github:{Icon:y,color:null},linux:{Icon:l,color:null},raspberry:{Icon:u,color:`#C51A4A`},claude:{Icon:f,color:`#D97757`},anthropic:{Icon:b,color:null},gemini:{Icon:s,color:`#4285F4`},perplexity:{Icon:m,color:`#20808D`},chatgpt:{monogram:`AI`,color:`#10A37F`},midjourney:{monogram:`MJ`,color:`#8B7BD8`},elevenlabs:{Icon:g,color:null},seedance:{monogram:`SD`,color:`#3C8CFF`},matlab:{monogram:`M`,color:`#E16737`},solidworks:{monogram:`SW`,color:`#E1181F`},solidedge:{Icon:a,color:`#00A5A5`},freedfd:{monogram:`DFD`,color:`#6B70A8`},dreamweaver:{monogram:`Dw`,color:`#37C177`},photoshop:{monogram:`Ps`,color:`#31A8FF`},office:{monogram:`O`,color:`#D83B01`},moodle:{Icon:_,color:`#F98012`},zoom:{Icon:S,color:`#0B5CFF`},meet:{Icon:p,color:`#00897B`}};function z({name:e,label:t,className:n=`h-5 w-5`}){let r=R[e]??{monogram:String(t??e??`?`).slice(0,2)},i=r.color?{color:r.color}:void 0;return r.Icon?(0,I.jsx)(r.Icon,{"aria-hidden":`true`,className:n,style:i}):(0,I.jsx)(`span`,{"aria-hidden":`true`,style:i,className:`grid place-items-center font-mono text-[0.625rem] font-bold tracking-tight ${n}`,children:r.monogram})}var B=Object.assign({"./content.en.yaml":N,"./content.es.yaml":P});function V(){let e=E(),t=(0,F.useMemo)(()=>D(B,e)??{},[e]),n=t.groups??[];return(0,I.jsxs)(j,{id:`skills`,children:[(0,I.jsx)(k,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,I.jsx)(`div`,{className:`mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3`,children:n.map((e,t)=>{let r=O(e.icon),i=t===n.length-1,a=i&&n.length%2==1,o=i&&n.length%3==1;return(0,I.jsx)(A,{variants:T,delay:t*.06,className:`min-w-0 ${a?`sm:col-span-2 lg:col-span-1`:``} ${o?`lg:col-start-2`:``}`,children:(0,I.jsxs)(M,{className:`flex h-full flex-col gap-5 p-6`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(`span`,{className:`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent-ink shadow-inner-top transition-colors duration-200 group-hover:border-line-accent`,children:(0,I.jsx)(r,{"aria-hidden":`true`,className:`h-[1.15rem] w-[1.15rem]`})}),(0,I.jsx)(`h3`,{className:`text-base font-semibold tracking-tight text-ink`,children:e.title})]}),(0,I.jsx)(`ul`,{className:`flex flex-col gap-4`,children:(e.items??[]).map(t=>(0,I.jsxs)(`li`,{className:`flex flex-col gap-2`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,I.jsx)(`span`,{className:`grid h-6 w-6 shrink-0 place-items-center rounded-md border border-line bg-surface`,children:t.brand?(0,I.jsx)(z,{name:t.brand,label:t.name,className:`h-3.5 w-3.5`}):(()=>{let n=O(t.icon??e.icon);return(0,I.jsx)(n,{"aria-hidden":`true`,className:`h-3.5 w-3.5 text-ink-subtle`})})()}),t.url?(0,I.jsxs)(`a`,{href:t.url,target:`_blank`,rel:`noreferrer noopener`,className:`inline-flex min-w-0 flex-1 items-center gap-1 text-sm text-ink-muted transition-colors duration-200 hover:text-accent-ink`,children:[t.name,(0,I.jsx)(w.arrowUpRight,{"aria-hidden":`true`,className:`h-3.5 w-3.5`})]}):(0,I.jsx)(`span`,{className:`min-w-0 flex-1 text-sm text-ink-muted`,children:t.name})]}),(0,I.jsx)(L,{level:t.level,label:t.name})]},t.name))})]})},e.title)})}),t.languages?.length?(0,I.jsxs)(A,{className:`mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-line bg-surface px-6 py-4 shadow-inner-top`,children:[(0,I.jsx)(`h3`,{className:`nc-eyebrow`,children:t.languagesTitle}),(0,I.jsx)(`ul`,{className:`flex flex-wrap gap-x-6 gap-y-2`,children:t.languages.map(e=>(0,I.jsxs)(`li`,{className:`text-sm text-ink-muted`,children:[(0,I.jsx)(`span`,{className:`font-medium text-ink`,children:e.name}),(0,I.jsxs)(`span`,{className:`text-ink-subtle`,children:[` · `,e.level]})]},e.name))})]}):null]})}export{V as default};