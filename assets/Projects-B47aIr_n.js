import{r as e}from"./rolldown-runtime-hePW80VL.js";import{d as t,u as n}from"./motion-D4psEU6N.js";import{rt as r}from"./vendor-CGe-Pfak.js";import{i,l as a,n as o,s}from"./index-CUEmubWm.js";import{n as c,r as l,t as u}from"./Section-BhsG-sta.js";import{t as d}from"./Modal-hMkgGbCH.js";var f=`# ---------------------------------------------------------------------------\r
# PROJECTS — English.\r
#\r
# There is ONE CARD PER PROJECT in the carousel. The front shows the project\r
# name and its information; clicking "View images" flips the card to reveal its\r
# images, and clicking one of them opens it enlarged in a popup window.\r
#\r
# Fields for each project:\r
#   title   → project name\r
#   kicker  → short category shown on top\r
#   period  → dates\r
#   summary → the information shown on the front face\r
#   tags    → technologies (the first four are shown)\r
#   images  → its images; a project may hold several mini-projects, and each\r
#             one is an image with its name:\r
#               file → file inside \`public/\`\r
#               name → name of the image or mini-project\r
#               note → explanation shown when enlarged (optional)\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Featured projects\r
title: What I have worked on\r
lead: ''\r
\r
# Note shown under the carousel.\r
flipHint: Flip the card to see the images; click them to enlarge.\r
\r
items:\r
  - title: MultiSort-AI-APP\r
    kicker: Master's thesis · Applied AI at GED\r
    period: MSc in AI · 2026\r
    summary: >-\r
      An artificial intelligence application built for Grupo Empresarial\r
      Colombia GED as a thesis project: it classifies and organizes large\r
      volumes of images with filters and segmentation, and adds an image\r
      generation and editing mode. It is internal software and runs locally.\r
    tags: [Python, Computer vision, Segmentation, Generative AI]\r
    images:\r
      - file: proyectos/multisort-clasificacion.webp\r
        name: Image classification and sorting\r
        note: >-\r
          Main screen: you pick the input folder, the formats to include and\r
          the output folder. Classification can be automatic or by category.\r
      - file: proyectos/multisort-generacion.webp\r
        name: Image generation\r
        note: >-\r
          The app's second mode: text-to-image generation, transformations and\r
          upscaling.\r
\r
  - title: Master's in AI projects\r
    kicker: AI and optimization · Academic projects\r
    period: MSc in AI · 2024 – 2026\r
    summary: >-\r
      Two exercises from the master's where the theory had to actually run: a\r
      vacuum that looks for the best route with the energy it has left, and a\r
      car detector working live on the camera feed.\r
    tags: [Python, Search and optimization, Computer vision, YOLOv5]\r
    images:\r
      - file: proyectos/aspiradora.webp\r
        name: Smart vacuum cleaner\r
        note: >-\r
          A vacuum that travels a grid environment through nodes, spots the\r
          cells it still has to visit and collects the dirt along the way.\r
          Energy is limited and drains with every move and every pickup, so the\r
          challenge is optimizing the route to cover as much area as possible\r
          before running out.\r
      - file: proyectos/deteccion-carros.webp\r
        name: Car detection\r
        note: >-\r
          Real-time object detection over the camera feed: the model draws a\r
          box around each car with its confidence score, processing frame by\r
          frame.\r
\r
  - title: Corporate websites\r
    kicker: Web development · GED and AXCOR\r
    period: Dec 2022 – Aug 2026\r
    summary: >-\r
      Development and maintenance of the corporate websites of both companies\r
      I worked for, alongside support for social media and the digital\r
      marketing strategies behind their positioning.\r
    tags: [HTML/CSS, JavaScript, Adobe Dreamweaver, Digital marketing]\r
    images:\r
      - file: proyectos/web-ged.webp\r
        name: GED website\r
        note: >-\r
          Home page of Grupo Empresarial Colombia GED, covering its renewable\r
          energy, eco-friendly packaging, environmental engineering and\r
          advertising lines.\r
      - file: proyectos/web-axcor-inicio.webp\r
        name: AXCOR website\r
        note: AXCOR's home page.\r
      - file: proyectos/web-axcor-garantias.webp\r
        name: AXCOR warranty system\r
        note: >-\r
          Warranty tracking board: each order with its customer, item, validity\r
          and current status.\r
\r
  - title: Teaching educational robotics\r
    kicker: Teaching · Colegio Enrique Olaya Herrera\r
    period: Aug 2022 – Dec 2022\r
    summary: >-\r
      A C++ programming logic course and hands-on training on\r
      microcontrollers. With the students we took part in a line-follower\r
      contest and worked through the systems of a submarine: radar, motor and\r
      lights.\r
    tags: [Robotics, C++, Arduino, Microcontrollers]\r
    images:\r
      - file: proyectos/colegio-seguidor.webp\r
        name: Line follower\r
        note: The contest robot, built and programmed with the students.\r
      - file: proyectos/colegio-submarino.webp\r
        name: Submarine\r
        note: Submarine model with its radar, motor and lighting systems.\r
      - file: proyectos/colegio-esquema-submarino.webp\r
        name: Submarine system diagram\r
        note: Diagram of how each of the submarine's systems works.\r
      - file: proyectos/colegio-carrito.webp\r
        name: Remote-controlled car\r
        note: A remote-controlled vehicle built in class.\r
      - file: proyectos/colegio-lego.webp\r
        name: Lego architecture\r
        note: A construction and mechanical design exercise with Lego bricks.\r
      - file: proyectos/colegio-ultrasonido.webp\r
        name: Ultrasonic sensor\r
        note: Distance measurement practice with an ultrasonic sensor and Arduino.\r
`,p=`# ---------------------------------------------------------------------------\r
# PROYECTOS — español.\r
#\r
# Hay UNA TARJETA POR PROYECTO en el carrusel. Por delante se lee el nombre del\r
# proyecto y su información; al pulsar «Ver imágenes» la tarjeta gira y enseña\r
# sus imágenes, y al pulsar una de ellas se abre ampliada en una ventana\r
# emergente.\r
#\r
# Campos de cada proyecto:\r
#   title   → nombre del proyecto\r
#   kicker  → categoría corta que aparece arriba\r
#   period  → fechas\r
#   summary → la información que se lee en la cara frontal\r
#   tags    → tecnologías (se muestran las cuatro primeras)\r
#   images  → sus imágenes; un proyecto puede tener varios miniproyectos, y\r
#             cada uno es una imagen con su nombre:\r
#               file → archivo dentro de \`public/\`\r
#               name → nombre de la imagen o del miniproyecto\r
#               note → explicación que se lee al ampliarla (opcional)\r
# ---------------------------------------------------------------------------\r
\r
eyebrow: Proyectos destacados\r
title: En qué he trabajado\r
lead: ''\r
\r
# Aviso que aparece bajo el carrusel.\r
flipHint: Gira la tarjeta para ver las imágenes; púlsalas para ampliarlas.\r
\r
items:\r
  - title: MultiSort-AI-APP\r
    kicker: Tesis de maestría · IA aplicada en GED\r
    period: Maestría en IA · 2026\r
    summary: >-\r
      Aplicación de inteligencia artificial hecha para Grupo Empresarial\r
      Colombia GED como proyecto de tesis: clasifica y organiza grandes\r
      volúmenes de imágenes con filtros y segmentación, y suma un modo de\r
      generación y edición. Es de uso interno y corre en local.\r
    tags: [Python, Visión artificial, Segmentación, IA generativa]\r
    images:\r
      - file: proyectos/multisort-clasificacion.webp\r
        name: Clasificación y organización de imágenes\r
        note: >-\r
          Pantalla principal: se elige la carpeta de entrada, los formatos que\r
          se tienen en cuenta y la carpeta de salida. La clasificación puede\r
          ser automática o por categorías.\r
      - file: proyectos/multisort-generacion.webp\r
        name: Generación de imágenes\r
        note: >-\r
          El segundo modo de la aplicación: generación por texto,\r
          transformaciones y escalado de imágenes.\r
\r
  - title: Proyectos de la Maestría en IA\r
    kicker: IA y optimización · Proyectos académicos\r
    period: Maestría en IA · 2024 – 2026\r
    summary: >-\r
      Dos ejercicios de la maestría en los que la teoría se puso a funcionar:\r
      una aspiradora que busca la mejor ruta con la energía que le queda, y un\r
      detector de carros que trabaja en vivo sobre el video de la cámara.\r
    tags: [Python, Búsqueda y optimización, Visión artificial, YOLOv5]\r
    images:\r
      - file: proyectos/aspiradora.webp\r
        name: Aspiradora inteligente\r
        note: >-\r
          Aspiradora que recorre un entorno en cuadrícula mediante nodos,\r
          identifica las casillas que faltan y recoge la suciedad del camino.\r
          La energía es limitada y se gasta con cada movimiento y cada\r
          recolección, así que el reto está en optimizar el recorrido para\r
          cubrir la mayor área posible antes de quedarse sin carga.\r
      - file: proyectos/deteccion-carros.webp\r
        name: Detección de carros\r
        note: >-\r
          Detección de objetos en tiempo real sobre el video de la cámara: el\r
          modelo marca cada carro con su recuadro y su nivel de confianza,\r
          procesando cuadro a cuadro.\r
\r
  - title: Páginas web corporativas\r
    kicker: Desarrollo web · GED y AXCOR\r
    period: Dic 2022 – Ago 2026\r
    summary: >-\r
      Desarrollo y mantenimiento de las páginas corporativas de las dos\r
      empresas donde trabajé, acompañados del apoyo en redes sociales y de las\r
      estrategias de marketing digital para su posicionamiento.\r
    tags: [HTML/CSS, JavaScript, Adobe Dreamweaver, Marketing digital]\r
    images:\r
      - file: proyectos/web-ged.webp\r
        name: Página de GED\r
        note: >-\r
          Portada del sitio de Grupo Empresarial Colombia GED, con sus líneas\r
          de energía renovable, empaques ecológicos, ingeniería ambiental y\r
          publicidad.\r
      - file: proyectos/web-axcor-inicio.webp\r
        name: Página de AXCOR\r
        note: Portada del sitio de AXCOR.\r
      - file: proyectos/web-axcor-garantias.webp\r
        name: Sistema de garantías de AXCOR\r
        note: >-\r
          Tablero de seguimiento de garantías: cada pedido con su cliente, su\r
          artículo, su vigencia y el estado en que va.\r
\r
  - title: Docencia en robótica educativa\r
    kicker: Docencia · Colegio Enrique Olaya Herrera\r
    period: Ago 2022 – Dic 2022\r
    summary: >-\r
      Curso de lógica de programación en C++ y formación práctica en\r
      microcontroladores. Con los estudiantes participamos en un concurso de\r
      seguidores de línea y trabajamos el funcionamiento de los sistemas de un\r
      submarino: radar, motor y luces.\r
    tags: [Robótica, C++, Arduino, Microcontroladores]\r
    images:\r
      - file: proyectos/colegio-seguidor.webp\r
        name: Seguidor de línea\r
        note: Robot del concurso, construido y programado con los estudiantes.\r
      - file: proyectos/colegio-submarino.webp\r
        name: Submarino\r
        note: Maqueta del submarino con sus sistemas de radar, motor y luces.\r
      - file: proyectos/colegio-esquema-submarino.webp\r
        name: Esquema del sistema del submarino\r
        note: Diagrama del funcionamiento de cada sistema del submarino.\r
      - file: proyectos/colegio-carrito.webp\r
        name: Carrito con control\r
        note: Vehículo controlado a distancia, hecho en clase.\r
      - file: proyectos/colegio-lego.webp\r
        name: Arquitectura en Lego\r
        note: Ejercicio de construcción y diseño mecánico con piezas de Lego.\r
      - file: proyectos/colegio-ultrasonido.webp\r
        name: Sensor de ultrasonido\r
        note: Práctica de medición de distancia con sensor ultrasónico y Arduino.\r
`,m=e(t(),1),h=n();function g({items:e=[],flipHint:t}){let{t:n}=r(),o=e.length,[s,c]=(0,m.useState)(0),[l,u]=(0,m.useState)(()=>new Set),[f,p]=(0,m.useState)(null),g=(0,m.useRef)(null),_=(0,m.useCallback)(e=>{c(t=>t+e),u(new Set)},[]),v=(0,m.useCallback)(e=>{c(t=>{let n=e-(t%o+o)%o;return n>o/2&&(n-=o),n<-o/2&&(n+=o),t+n}),u(new Set)},[o]),y=(0,m.useCallback)(e=>{u(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),b=(0,m.useCallback)(e=>{e.key===`ArrowLeft`?(e.preventDefault(),_(-1)):e.key===`ArrowRight`&&(e.preventDefault(),_(1))},[_]),x=(0,m.useCallback)(e=>{p(t=>{if(!t)return t;let n=t.proyecto.images.length;return{...t,indice:(t.indice+e+n)%n}})},[]);if(o===0)return null;let S=360/o,C=(s%o+o)%o,w=f?f.proyecto.images[f.indice]:null;return(0,h.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,h.jsxs)(`div`,{role:`group`,tabIndex:0,"aria-roledescription":`carrusel`,onKeyDown:b,onTouchStart:e=>{g.current=e.changedTouches[0].clientX},onTouchEnd:e=>{if(g.current===null)return;let t=g.current-e.changedTouches[0].clientX;Math.abs(t)>50&&_(t>0?1:-1),g.current=null},className:`nc-carousel-3d relative h-[34rem] w-full sm:h-[42rem]`,style:{perspective:2e3},children:[(0,h.jsx)(`div`,{className:`absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`,style:{transformStyle:`preserve-3d`,transform:`rotateY(${-s*S}deg)`},children:e.map((e,t)=>{let r=t-C;r>o/2&&(r-=o),r<-o/2&&(r+=o);let s=r===0,c=Math.abs(r)<=2,u=l.has(e.title),d=e.images??[];return(0,h.jsx)(`div`,{className:`absolute top-1/2 left-1/2 h-[23rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] sm:h-[26rem] sm:w-[19rem]`,style:{transformStyle:`preserve-3d`,transform:`rotateY(${t*S}deg) translateZ(var(--radio-carrusel)) scale(${s?1.08:.82})`,opacity:c?s?1:.3:0,filter:s?`none`:`grayscale(0.85) brightness(0.7) blur(1px)`,pointerEvents:s?`auto`:`none`},children:(0,h.jsxs)(`div`,{className:`relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`,style:{transformStyle:`preserve-3d`,transform:u?`rotateY(180deg)`:`rotateY(0deg)`,borderRadius:`1rem`,boxShadow:s?`0 0 0 1px var(--line-accent), 0 18px 50px rgb(0 0 0 / 0.55), 0 0 70px var(--accent-glow)`:`none`},children:[(0,h.jsxs)(`div`,{className:`nc-card absolute inset-0 flex flex-col gap-3 p-6`,style:{backfaceVisibility:`hidden`,backgroundColor:`var(--canvas-elevated)`},children:[(0,h.jsx)(`span`,{className:`nc-eyebrow`,children:e.kicker}),(0,h.jsx)(`h3`,{className:`text-lg font-semibold tracking-tight text-balance text-ink`,children:e.title}),e.period?(0,h.jsx)(`span`,{className:`font-mono text-[0.6875rem] tracking-widest text-ink-subtle uppercase`,children:e.period}):null,(0,h.jsx)(`p`,{className:`flex-1 overflow-hidden text-[0.8125rem] leading-relaxed text-ink-muted`,children:e.summary}),(0,h.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:(e.tags??[]).slice(0,4).map(e=>(0,h.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-[0.625rem] text-ink-subtle`,children:e},e))}),(0,h.jsxs)(`button`,{type:`button`,onClick:()=>y(e.title),tabIndex:s?0:-1,className:`inline-flex items-center justify-center gap-1.5 rounded-lg border border-line-accent bg-accent/10 px-3 py-2 text-[0.8125rem] font-medium text-ink shadow-inner-top transition-colors duration-200 hover:bg-accent/20`,children:[(0,h.jsx)(a.image,{"aria-hidden":`true`,className:`h-4 w-4 text-accent-ink`}),n(`actions.viewImages`,{count:d.length})]})]}),(0,h.jsxs)(`div`,{className:`nc-card absolute inset-0 flex flex-col gap-3 p-5`,style:{backfaceVisibility:`hidden`,transform:`rotateY(180deg)`,backgroundColor:`var(--canvas-elevated)`},children:[(0,h.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,h.jsx)(`span`,{className:`nc-eyebrow truncate`,children:e.title}),(0,h.jsx)(`button`,{type:`button`,onClick:()=>y(e.title),tabIndex:s?0:-1,"aria-label":n(`actions.back`),className:`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink-muted transition-colors duration-200 hover:border-line-accent hover:text-ink`,children:(0,h.jsx)(a.arrowUpRight,{"aria-hidden":`true`,className:`h-3.5 w-3.5 rotate-180`})})]}),(0,h.jsx)(`ul`,{className:`nc-scroll-area -mr-1 flex-1 space-y-2 overflow-y-auto pr-1`,children:d.map((t,n)=>(0,h.jsx)(`li`,{children:(0,h.jsxs)(`button`,{type:`button`,onClick:()=>p({proyecto:e,indice:n}),tabIndex:s?0:-1,className:`group/mini flex w-full items-center gap-3 rounded-xl border border-line bg-surface p-1.5 text-left transition-colors duration-200 hover:border-line-accent hover:bg-surface-hover`,children:[(0,h.jsx)(`img`,{src:i(t.file),alt:t.name,loading:`lazy`,decoding:`async`,draggable:`false`,className:`h-12 w-16 shrink-0 rounded-lg object-cover`}),(0,h.jsx)(`span`,{className:`min-w-0 flex-1 text-[0.75rem] leading-snug text-ink-muted`,children:t.name}),(0,h.jsx)(a.search,{"aria-hidden":`true`,className:`h-3.5 w-3.5 shrink-0 text-ink-subtle transition-colors duration-200 group-hover/mini:text-accent-ink`})]})},t.file))})]})]})},e.title)})}),(0,h.jsx)(`button`,{type:`button`,onClick:()=>_(-1),"aria-label":n(`actions.prev`),className:`absolute top-1/2 left-0 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-ink-muted shadow-inner-top backdrop-blur-md transition-colors duration-200 hover:border-line-accent hover:text-ink`,children:(0,h.jsx)(a.arrowUp,{"aria-hidden":`true`,className:`h-4 w-4 -rotate-90`})}),(0,h.jsx)(`button`,{type:`button`,onClick:()=>_(1),"aria-label":n(`actions.next`),className:`absolute top-1/2 right-0 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-ink-muted shadow-inner-top backdrop-blur-md transition-colors duration-200 hover:border-line-accent hover:text-ink`,children:(0,h.jsx)(a.arrowUp,{"aria-hidden":`true`,className:`h-4 w-4 rotate-90`})})]}),t?(0,h.jsx)(`p`,{className:`mt-6 text-center text-xs text-ink-subtle`,children:t}):null,(0,h.jsx)(`div`,{className:`mt-4 flex flex-wrap items-center justify-center gap-2`,children:e.map((e,t)=>(0,h.jsx)(`button`,{type:`button`,onClick:()=>v(t),"aria-label":e.title,"aria-current":t===C?`true`:void 0,className:`h-2 rounded-full transition-all duration-300 ${t===C?`w-5 bg-accent`:`w-2 bg-line-hover hover:bg-line-accent`}`},e.title))}),(0,h.jsx)(d,{open:f!==null,onClose:()=>p(null),titleId:`proyecto-imagen`,size:`wide`,children:w?(0,h.jsxs)(`div`,{className:`flex flex-col gap-4 p-6 sm:p-8`,children:[(0,h.jsxs)(`div`,{className:`pr-12`,children:[(0,h.jsx)(`span`,{className:`nc-eyebrow`,children:f.proyecto.title}),(0,h.jsx)(`h3`,{id:`proyecto-imagen`,className:`mt-1 text-lg font-semibold tracking-tight text-ink`,children:w.name})]}),(0,h.jsxs)(`div`,{className:`relative overflow-hidden rounded-xl border border-line bg-canvas-deep`,children:[(0,h.jsx)(`img`,{src:i(w.file),alt:w.name,className:`max-h-[72vh] w-full object-contain`}),f.proyecto.images.length>1?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`button`,{type:`button`,onClick:()=>x(-1),"aria-label":n(`actions.prev`),className:`absolute top-1/2 left-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas-base/80 text-ink-muted backdrop-blur-md transition-colors duration-200 hover:text-ink`,children:(0,h.jsx)(a.arrowUp,{"aria-hidden":`true`,className:`h-4 w-4 -rotate-90`})}),(0,h.jsx)(`button`,{type:`button`,onClick:()=>x(1),"aria-label":n(`actions.next`),className:`absolute top-1/2 right-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas-base/80 text-ink-muted backdrop-blur-md transition-colors duration-200 hover:text-ink`,children:(0,h.jsx)(a.arrowUp,{"aria-hidden":`true`,className:`h-4 w-4 rotate-90`})})]}):null]}),w.note?(0,h.jsx)(`p`,{className:`text-sm leading-relaxed text-ink-muted`,children:w.note}):null]}):null})]})}var _=Object.assign({"./content.en.yaml":f,"./content.es.yaml":p});function v(){let e=o(),t=(0,m.useMemo)(()=>s(_,e)??{},[e]),n=t.items??[];return(0,h.jsxs)(u,{id:`projects`,children:[(0,h.jsx)(c,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,h.jsx)(l,{className:`mt-16 lg:mt-20`,children:(0,h.jsx)(g,{items:n,flipHint:t.flipHint})})]})}export{v as default};