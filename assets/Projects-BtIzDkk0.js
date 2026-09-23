import{r as e}from"./rolldown-runtime-hePW80VL.js";import{d as t,u as n}from"./motion-D4psEU6N.js";import{rt as r}from"./vendor-CGe-Pfak.js";import{l as i,m as a,n as o,s,t as c}from"./index-sGxW7g-M.js";import{n as l,r as u,t as d}from"./Section-BicXDDXv.js";import{t as f}from"./SpotlightCard-8Qw2FDrF.js";var p=`# ---------------------------------------------------------------------------\r
# FEATURED PROJECTS — English.\r
# \`items\` is the list of cards. To add a project, copy a whole block keeping\r
# the indentation.\r
#\r
# Fields for each project:\r
#   title    → project name\r
#   kicker   → short category shown on top\r
#   period   → dates\r
#   summary  → description (supports Markdown **bold**)\r
#   metrics  → highlighted figures (optional, 2 at most)\r
#   tags     → technologies\r
#   icon     → cpu, radio, code, database, cloud, shield, server, terminal,\r
#              tool, sun, book...\r
#   size     → hero | tall | wide | full  (controls the size in the grid)\r
#   links    → list of links, each with \`label\` and \`url\`.\r
#              Add several (repo, demo, site…) or none: with an empty list\r
#              the card simply shows no buttons.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Featured projects\r
title: What I've worked on\r
# Optional lead: when empty, the section goes straight from title to cards.\r
lead: ''\r
\r
items:\r
  - id: multisort-ai\r
    title: MultiSort-AI-APP\r
    kicker: Master's thesis · Applied AI at GED\r
    period: MSc in AI · 2026\r
    icon: cpu\r
    size: hero\r
    links: []\r
    summary: >-\r
      An **artificial intelligence** application built for **Grupo Empresarial\r
      Colombia GED** as the thesis project of the **Master's in Artificial\r
      Intelligence**. It organizes large volumes of **images** through\r
      **filters and segmentation**, and also supports **image editing and\r
      generation** within the same workflow. It is an internal application: it\r
      runs locally and belongs to the company, so it has no public\r
      repository.\r
    tags: [Python, Computer vision, Image segmentation, Generative AI, Data processing]\r
\r
  - id: sitio-ged\r
    title: GED and AXCOR corporate websites\r
    kicker: Web development · GED and AXCOR\r
    period: Dec 2022 – Aug 2026\r
    icon: code\r
    size: tall\r
    links: []\r
    summary: >-\r
      **Development and maintenance** of both companies' corporate websites,\r
      alongside support for **social media** and the **digital marketing**\r
      strategies behind their positioning.\r
    tags: [HTML/CSS, JavaScript, Adobe Dreamweaver, Digital marketing]\r
\r
  - id: robotica-educativa\r
    title: Teaching educational robotics\r
    kicker: Teaching · Colegio Enrique Olaya Herrera\r
    period: Aug 2022 – Dec 2022\r
    icon: tool\r
    size: full\r
    links: []\r
    summary: >-\r
      A **C++ programming logic** course and hands-on training on\r
      **microcontrollers**. With the students we took part in a **line-follower\r
      contest** and worked through the systems of a **submarine**: radar, motor\r
      and lights.\r
    tags: [Robotics, C++, Arduino, Microcontrollers, Line follower]\r
`,m=`# ---------------------------------------------------------------------------\r
# PROYECTOS DESTACADOS — español.\r
# \`items\` es la lista de tarjetas. Para añadir un proyecto, copia un bloque\r
# completo respetando la indentación.\r
#\r
# Campos de cada proyecto:\r
#   title    → nombre del proyecto\r
#   kicker   → categoría corta que se muestra arriba\r
#   period   → fechas\r
#   summary  → descripción (admite **negritas** de Markdown)\r
#   metrics  → cifras destacadas (opcional, máximo 2)\r
#   tags     → tecnologías\r
#   icon     → cpu, radio, code, database, cloud, shield, server, terminal,\r
#              tool, sun, book...\r
#   size     → hero | tall | wide | full  (controla el tamaño en la grilla)\r
#   links    → lista de enlaces, cada uno con \`label\` y \`url\`.\r
#              Puedes poner varios (repo, demo, sitio…) o ninguno:\r
#              si la lista está vacía, la tarjeta simplemente no muestra\r
#              botones. El \`label\` es el texto visible, cámbialo a tu gusto.\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Proyectos destacados\r
title: En qué he trabajado\r
# Entradilla opcional: vacía, la sección pasa directo del titular a las\r
# tarjetas.\r
lead: ''\r
\r
items:\r
  - id: multisort-ai\r
    title: MultiSort-AI-APP\r
    kicker: Tesis de maestría · IA aplicada en GED\r
    period: Maestría en IA · 2026\r
    icon: cpu\r
    size: hero\r
    links: []\r
    summary: >-\r
      Aplicación de **inteligencia artificial** desarrollada para **Grupo\r
      Empresarial Colombia GED** como proyecto de tesis de la **Maestría en\r
      Inteligencia Artificial**. Organiza grandes volúmenes de **imágenes**\r
      mediante **filtros y segmentación**, y apoya además la **edición y\r
      generación de imágenes** dentro del mismo flujo de trabajo. Es una\r
      aplicación de uso interno: corre en local y pertenece a la empresa, así\r
      que no tiene repositorio público.\r
    tags: [Python, Visión artificial, Segmentación de imágenes, IA generativa, Procesamiento de datos]\r
\r
  - id: sitio-ged\r
    title: Páginas web corporativas de GED y AXCOR\r
    kicker: Desarrollo web · GED y AXCOR\r
    period: Dic 2022 – Ago 2026\r
    icon: code\r
    size: tall\r
    links: []\r
    summary: >-\r
      **Desarrollo y mantenimiento** de las páginas corporativas de las dos\r
      empresas, acompañados del apoyo en **redes sociales** y de las estrategias\r
      de **marketing digital** para su posicionamiento.\r
    tags: [HTML/CSS, JavaScript, Adobe Dreamweaver, Marketing digital]\r
\r
  - id: robotica-educativa\r
    title: Docencia en robótica educativa\r
    kicker: Docencia · Colegio Enrique Olaya Herrera\r
    period: Ago 2022 – Dic 2022\r
    icon: tool\r
    size: full\r
    links: []\r
    summary: >-\r
      Curso de **lógica de programación en C++** y formación práctica en\r
      **microcontroladores**. Con los estudiantes participamos en un **concurso\r
      de seguidores de línea** y trabajamos el funcionamiento de los sistemas de\r
      un **submarino**: radar, motor y luces.\r
    tags: [Robótica, C++, Arduino, Microcontroladores, Seguidor de línea]\r
`,h=e(t(),1),g=n(),_={hero:`md:col-span-6 lg:col-span-4 lg:row-span-2`,tall:`md:col-span-6 lg:col-span-2 lg:row-span-2`,wide:`md:col-span-3 lg:col-span-3`,full:`md:col-span-6 lg:col-span-6`};function v({project:e,index:t=0}){let{t:n}=r(),o=i[e.icon]??i.layers,s=e.size===`hero`,l=e.links?.length>0?e.links:e.url?[{label:n(`actions.viewProject`),url:e.url}]:[];return(0,g.jsx)(u,{as:`article`,variants:a,delay:t*.08,className:`${_[e.size]??_.wide} min-w-0`,children:(0,g.jsxs)(f,{className:`flex h-full flex-col justify-between gap-4 p-6 md:p-7`,children:[(0,g.jsxs)(`header`,{className:`flex items-start justify-between gap-4`,children:[(0,g.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-2`,children:[(0,g.jsx)(`span`,{className:`nc-eyebrow`,children:e.kicker}),(0,g.jsx)(`h3`,{className:`font-semibold tracking-tight text-balance text-ink ${s?`text-2xl md:text-3xl`:`text-xl`}`,children:e.title})]}),(0,g.jsx)(`span`,{className:`grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent-ink shadow-inner-top transition-colors duration-200 group-hover:border-line-accent`,children:(0,g.jsx)(o,{"aria-hidden":`true`,className:`h-5 w-5`})})]}),(0,g.jsx)(`p`,{className:`font-mono text-[0.6875rem] tracking-widest text-ink-subtle uppercase`,children:e.period}),(0,g.jsx)(c,{className:`gap-3`,children:e.summary??``}),e.metrics?.length?(0,g.jsx)(`dl`,{className:`flex flex-wrap gap-3 pt-2`,children:e.metrics.map(e=>(0,g.jsxs)(`div`,{className:`min-w-0 flex-1 rounded-xl border border-line bg-surface px-4 py-3 shadow-inner-top`,children:[(0,g.jsx)(`dt`,{className:`text-[0.6875rem] tracking-wide text-ink-subtle`,children:e.label}),(0,g.jsx)(`dd`,{className:`font-mono text-lg font-semibold tracking-tight text-ink`,children:e.value})]},e.label))}):null,e.tags?.length?(0,g.jsx)(`ul`,{className:`flex flex-wrap gap-1.5 ${e.metrics?.length?``:`pt-2`}`,children:e.tags.map(e=>(0,g.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 group-hover:border-line-accent group-hover:text-ink`,children:e},e))}):null,l.length>0?(0,g.jsx)(`ul`,{className:`flex flex-wrap items-center gap-x-5 gap-y-2 pt-1`,children:l.map(e=>(0,g.jsx)(`li`,{children:(0,g.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer noopener`,className:`inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink transition-colors duration-200 hover:text-accent-bright`,children:[e.label,(0,g.jsx)(i.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4`})]})},e.url))}):null]})})}var y=Object.assign({"./content.en.yaml":p,"./content.es.yaml":m});function b(){let e=o(),t=(0,h.useMemo)(()=>s(y,e)??{},[e]),n=t.items??[];return(0,g.jsxs)(d,{id:`projects`,children:[(0,g.jsx)(l,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,g.jsx)(`div`,{className:`mt-12 grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-6 lg:mt-16 lg:auto-rows-[minmax(11.25rem,auto)]`,children:n.map((e,t)=>(0,g.jsx)(v,{project:e,index:t},e.id??e.title))})]})}export{b as default};