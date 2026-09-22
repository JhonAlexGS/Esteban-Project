import{r as e}from"./rolldown-runtime-hePW80VL.js";import{c as t,d as n,u as r}from"./motion-D4psEU6N.js";import{d as i,m as a,n as o,s,u as c}from"./index-BIIhhft0.js";import{n as l,r as u,t as d}from"./Section-C_9OB13A.js";import{t as f}from"./SpotlightCard-zRF-zP7r.js";var p=`# ---------------------------------------------------------------------------
# TECH STACK — English.
# Each block in \`groups\` is a card. Add or remove technologies inside \`items\`
# without touching code.
# \`icon\` accepts: terminal, layers, devops, cloud, server, database, tool, cpu,
# shield, sun, code, radio, globe, book.
#
# \`size\` sets the card width on desktop (6-column grid):
#   narrow = 2 columns · half = 3 columns · wide = 4 columns
# Try to make each row add up to 6 so there are no gaps.
# Current layout: 2+2+2 · 3+3 · 3+3 · 4+2
# ---------------------------------------------------------------------------

eyebrow: Tech stack
title: The tools I build with
lead: >-
  From code and CAD design to the PLC, the robot and the solar panel: a stack
  that covers the whole mechatronics journey, with AI as a cross-cutting layer.

groups:
  - icon: terminal
    size: narrow
    title: Programming languages
    items: [Python, JavaScript, C/C++, MATLAB, Arduino, HTML/CSS]

  - icon: layers
    size: narrow
    title: CAD software
    items: [SolidWorks, Solid Edge, FreeDFD]

  - icon: cpu
    size: narrow
    title: AI tools
    items: [Claude, ChatGPT, Gemini, Midjourney]

  - icon: devops
    size: half
    title: Automation
    items: [PLC, SCADA systems, Industrial control, Instrumentation]

  - icon: tool
    size: half
    title: Robotics
    items: [Anthropomorphic robotics, Sensors & actuators, Motion control, Mechanical design]

  - icon: sun
    size: half
    title: Solar energy
    items: [Photovoltaic systems, Installation design, Renewable energy]

  - icon: shield
    size: half
    title: Cybersecurity
    items: [Information security, Data protection, Vulnerability analysis, Secure networks]

  - icon: code
    size: wide
    title: Tools
    items: [Arduino IDE, MATLAB, Adobe Dreamweaver, GitHub, Microsoft Office, Moodle]

  - icon: server
    size: narrow
    title: Hands-on trades
    items: [Carpentry, Electrical wiring, General maintenance]

languagesTitle: Languages
languages:
  - name: Spanish
    level: Native
`,m=`# ---------------------------------------------------------------------------
# STACK TÉCNICO — español.
# Cada bloque de \`groups\` es una tarjeta. Añade o quita tecnologías dentro de
# \`items\` sin tocar el código.
# \`icon\` acepta: terminal, layers, devops, cloud, server, database, tool, cpu,
# shield, sun, code, radio, globe, book.
#
# \`size\` controla el ancho de la tarjeta en escritorio (rejilla de 6 columnas):
#   narrow = 2 columnas · half = 3 columnas · wide = 4 columnas
# Procura que los tamaños de cada fila sumen 6, así no quedan huecos.
# El reparto actual es: 2+2+2 · 3+3 · 3+3 · 4+2
# ---------------------------------------------------------------------------

eyebrow: Stack técnico
title: Las herramientas con las que construyo
lead: >-
  Del código y el diseño CAD al PLC, el robot y el panel solar: un stack que
  cubre el recorrido completo de la mecatrónica, con la IA como capa transversal.

groups:
  - icon: terminal
    size: narrow
    title: Lenguajes de programación
    items: [Python, JavaScript, C/C++, MATLAB, Arduino, HTML/CSS]

  - icon: layers
    size: narrow
    title: Software CAD
    items: [SolidWorks, Solid Edge, FreeDFD]

  - icon: cpu
    size: narrow
    title: Herramientas de IA
    items: [Claude, ChatGPT, Gemini, Midjourney]

  - icon: devops
    size: half
    title: Automatización
    items: [PLC, Sistemas SCADA, Control industrial, Instrumentación]

  - icon: tool
    size: half
    title: Robótica
    items: [Robótica antropomórfica, Sensores y actuadores, Control de movimiento, Diseño mecánico]

  - icon: sun
    size: half
    title: Energía solar
    items: [Sistemas fotovoltaicos, Diseño de instalaciones, Energías renovables]

  - icon: shield
    size: half
    title: Ciberseguridad
    items: [Seguridad informática, Protección de datos, Análisis de vulnerabilidades, Redes seguras]

  - icon: code
    size: wide
    title: Herramientas
    items: [Arduino IDE, MATLAB, Adobe Dreamweaver, GitHub, Microsoft Office, Moodle]

  - icon: server
    size: narrow
    title: Oficios prácticos
    items: [Carpintería, Redes eléctricas, Mantenimiento general]

languagesTitle: Idiomas
languages:
  - name: Español
    level: Nativo
`,h=e(n(),1),g=r(),_=Object.assign({"./content.en.yaml":p,"./content.es.yaml":m}),v={narrow:`lg:col-span-2`,half:`lg:col-span-3`,wide:`lg:col-span-4`};function y(){let e=o(),n=(0,h.useMemo)(()=>s(_,e)??{},[e]),r=n.groups??[];return(0,g.jsxs)(d,{id:`skills`,children:[(0,g.jsx)(l,{eyebrow:n.eyebrow,title:n.title,lead:n.lead}),(0,g.jsx)(`div`,{className:`mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6`,children:r.map((e,n)=>{let o=c(e.icon),s=n===r.length-1&&r.length%2==1;return(0,g.jsx)(u,{variants:a,delay:n*.06,className:`min-w-0 ${v[e.size]??v.narrow} ${s?`sm:col-span-2`:``}`,children:(0,g.jsxs)(f,{className:`flex h-full flex-col gap-4 p-6`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(`span`,{className:`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent-ink shadow-inner-top transition-colors duration-200 group-hover:border-line-accent`,children:(0,g.jsx)(o,{"aria-hidden":`true`,className:`h-[1.15rem] w-[1.15rem]`})}),(0,g.jsx)(`h3`,{className:`text-base font-semibold tracking-tight text-ink`,children:e.title})]}),(0,g.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:(e.items??[]).map(e=>(0,g.jsx)(t.li,{whileHover:{y:-2},transition:{duration:.2,ease:i},className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 hover:border-line-accent hover:text-ink`,children:e},e))})]})},e.title)})}),n.languages?.length?(0,g.jsxs)(u,{className:`mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-line bg-surface px-6 py-4 shadow-inner-top`,children:[(0,g.jsx)(`h3`,{className:`nc-eyebrow`,children:n.languagesTitle}),(0,g.jsx)(`ul`,{className:`flex flex-wrap gap-x-6 gap-y-2`,children:n.languages.map(e=>(0,g.jsxs)(`li`,{className:`text-sm text-ink-muted`,children:[(0,g.jsx)(`span`,{className:`font-medium text-ink`,children:e.name}),(0,g.jsxs)(`span`,{className:`text-ink-subtle`,children:[` · `,e.level]})]},e.name))})]}):null]})}export{y as default};