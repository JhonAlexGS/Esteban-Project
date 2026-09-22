import{r as e}from"./rolldown-runtime-hePW80VL.js";import{c as t,d as n,l as r,u as i}from"./motion-D4psEU6N.js";import{L as a,N as o}from"./vendor-CLLkG1WV.js";import{d as s,i as c,l,m as u,n as d,s as f}from"./index-BIIhhft0.js";import{n as p,r as m,t as h}from"./Section-C_9OB13A.js";import{t as g}from"./SpotlightCard-zRF-zP7r.js";var _=`# ---------------------------------------------------------------------------
# REFERENCES & TESTIMONIALS — English.
#
# Each person is shown in one of two ways:
#   · WITH \`quote\` → testimonial card (their review, opened in full on click).
#   · WITHOUT \`quote\` → reference card (photo, name, role and relationship).
# That way a real person never appears signing words they didn't write: once
# you have their words, paste them into \`quote\` and the card switches itself.
#
# Fields for each person:
#   quote        → what they say about you (optional, see above)
#   name         → full name
#   role         → job title
#   company      → company or university (may be empty)
#   relationship → how they know you
#   link         → LinkedIn, portfolio or personal site; empty if none.
#   initials     → shown in the avatar when there's no photo
#   photo        → file inside \`public/\`, e.g. \`testimonios/ana.webp\`
#                  Recommended: square, at least 200×200 px
#   phone        → NOT published. See the note below.
#   email        → NOT published. See the note below.
#
# 🔒  Phone and email are kept here as a contact sheet, but the page
#     deliberately does NOT render them. They are third-party data and
#     publishing them on an open site exposes those people to spam.
# ---------------------------------------------------------------------------

eyebrow: References
title: People who can speak to my work
lead: >-
  Personal and family references who know me closely.

placeholderLabel: Example content
# Subheading that separates references from testimonials when there are both.
referencesTitle: References

items:
  - name: Jhon Alexander García Sierra
    initials: JG
    role: Systems & Telecommunications Engineer
    company: ''
    relationship: Personal reference
    link: https://www.linkedin.com/in/jhonalexandergarciasierra
    photo: 'testimonios/jhon-garcia.webp'
    phone: "+57 318 211 1063"
    email: ''
    quote: ''

  - name: Dayana Michel Trujillo Montaña
    initials: DT
    role: Electronics Engineering Student
    company: ''
    relationship: Personal reference
    link: ''
    photo: 'testimonios/dayana-trujillo.webp'
    phone: "+57 322 940 5680"
    email: ''
    quote: ''

  - name: Andrés Felipe Jordán Gusman
    initials: AJ
    role: Civil Engineer
    company: ''
    relationship: Family reference
    link: ''
    photo: 'testimonios/andres-jordan.webp'
    phone: "+57 322 309 5291"
    email: ''
    quote: ''

  - name: Luz Nury Losada Dussan
    initials: LL
    role: Hair Stylist
    company: ''
    relationship: Family reference
    link: ''
    photo: 'testimonios/luz-losada.webp'
    phone: "+57 310 293 5025"
    email: ''
    quote: ''
`,v=`# ---------------------------------------------------------------------------
# REFERENCIAS Y TESTIMONIOS — español.
#
# Cada persona aparece de una de dos formas:
#   · CON \`quote\` → tarjeta de testimonio (su reseña, que se abre completa al
#     pulsarla).
#   · SIN \`quote\` → tarjeta de referencia (foto, nombre, cargo y vínculo).
# Así nunca aparece una persona real firmando un texto que no escribió: en
# cuanto tengas sus palabras, pégalas en \`quote\` y la tarjeta cambia sola.
#
# Campos de cada persona:
#   quote        → lo que esa persona dice de ti (opcional, ver arriba)
#   name         → nombre y apellidos
#   role         → cargo
#   company      → empresa o universidad (puede quedar vacío)
#   relationship → vínculo contigo
#   link         → LinkedIn, portafolio o web personal; vacío si no tiene.
#   initials     → se muestran en el avatar cuando no hay foto
#   photo        → archivo dentro de \`public/\`, por ejemplo \`testimonios/ana.webp\`
#                  Recomendado: cuadrada, mínimo 200×200 px
#   phone        → NO se publica. Ver la nota de abajo.
#   email        → NO se publica. Ver la nota de abajo.
#
# 🔒  El teléfono y el correo se guardan aquí como ficha de contacto, pero la
#     página NO los muestra a propósito. Son datos de terceros y publicarlos
#     en una web abierta expone a esas personas a spam.
# ---------------------------------------------------------------------------

eyebrow: Referencias
title: Personas que pueden hablar de mi trabajo
lead: >-
  Referencias personales y familiares que me conocen de cerca.

placeholderLabel: Contenido de ejemplo
# Subtítulo que separa las referencias de los testimonios cuando hay de ambos.
referencesTitle: Referencias

items:
  - name: Jhon Alexander García Sierra
    initials: JG
    role: Ingeniero de Sistemas y Telecomunicaciones
    company: ''
    relationship: Referencia personal
    link: https://www.linkedin.com/in/jhonalexandergarciasierra
    photo: 'testimonios/jhon-garcia.webp'
    phone: "+57 318 211 1063"
    email: ''
    quote: ''

  - name: Dayana Michel Trujillo Montaña
    initials: DT
    role: Estudiante de Ingeniería Electrónica
    company: ''
    relationship: Referencia personal
    link: ''
    photo: 'testimonios/dayana-trujillo.webp'
    phone: "+57 322 940 5680"
    email: ''
    quote: ''

  - name: Andrés Felipe Jordán Gusman
    initials: AJ
    role: Ingeniero Civil
    company: ''
    relationship: Referencia familiar
    link: ''
    photo: 'testimonios/andres-jordan.webp'
    phone: "+57 322 309 5291"
    email: ''
    quote: ''

  - name: Luz Nury Losada Dussan
    initials: LL
    role: Estilista
    company: ''
    relationship: Referencia familiar
    link: ''
    photo: 'testimonios/luz-losada.webp'
    phone: "+57 310 293 5025"
    email: ''
    quote: ''
`,y=e(n(),1),b=i();function x({reference:e,index:t=0}){let n=c(e.photo),r=e.link,i=r?.includes(`linkedin.`)?l.linkedin:l.arrowUpRight,a=[e.role,e.company].filter(Boolean).join(` · `);return(0,b.jsx)(m,{as:`figure`,variants:u,delay:t*.08,className:`min-w-0`,children:(0,b.jsxs)(g,{className:`flex h-full flex-col items-center gap-4 p-6 text-center`,children:[n?(0,b.jsx)(`img`,{src:n,alt:e.name,width:`96`,height:`96`,loading:`lazy`,decoding:`async`,className:`h-24 w-24 rounded-full border border-line-accent object-cover shadow-card transition-transform duration-300 ease-expo group-hover:scale-[1.03]`}):(0,b.jsx)(`span`,{"aria-hidden":`true`,className:`grid h-24 w-24 place-items-center rounded-full border border-line-accent bg-accent/10 font-mono text-lg font-semibold text-accent-ink shadow-inner-top`,children:e.initials}),(0,b.jsxs)(`figcaption`,{className:`flex min-w-0 flex-col items-center gap-1.5`,children:[e.relationship?(0,b.jsx)(`span`,{className:`nc-eyebrow`,children:e.relationship}):null,(0,b.jsxs)(`span`,{className:`flex items-center gap-1.5 text-base font-semibold tracking-tight text-balance text-ink`,children:[e.name,r?(0,b.jsx)(`a`,{href:r,target:`_blank`,rel:`noreferrer noopener`,"aria-label":e.name,className:`shrink-0 text-ink-subtle transition-colors duration-200 hover:text-accent-ink`,children:(0,b.jsx)(i,{"aria-hidden":`true`,className:`h-3.5 w-3.5`})}):null]}),a?(0,b.jsx)(`span`,{className:`text-sm text-ink-muted`,children:a}):null]})]})})}function S({testimonial:e,placeholderLabel:t,index:n=0,className:r=``,onOpen:i}){let{t:a}=o(),s=c(e.photo),d=e.link,f=d?.includes(`linkedin.`)?l.linkedin:l.arrowUpRight,p=[e.role,e.company].filter(Boolean).join(` · `);return(0,b.jsx)(m,{as:`figure`,variants:u,delay:n*.08,className:`min-w-0 ${r}`,children:(0,b.jsxs)(g,{className:`flex h-full flex-col gap-4 p-6 md:p-7`,children:[(0,b.jsx)(`button`,{type:`button`,onClick:i,className:`absolute inset-0 z-0 rounded-2xl`,children:(0,b.jsx)(`span`,{className:`sr-only`,children:a(`actions.readFullOf`,{name:e.name})})}),(0,b.jsxs)(`div`,{className:`pointer-events-none relative z-[1] flex flex-1 flex-col gap-4`,children:[(0,b.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-2`,children:[e.relationship?(0,b.jsx)(`span`,{className:`nc-eyebrow`,children:e.relationship}):null,e.placeholder?(0,b.jsx)(`span`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase`,children:t}):null]}),(0,b.jsx)(`span`,{"aria-hidden":`true`,className:`font-serif text-5xl leading-none text-accent/40 select-none`,children:`“`}),(0,b.jsx)(`blockquote`,{className:`-mt-5 line-clamp-4 flex-1 text-base leading-relaxed text-ink-muted`,children:e.quote}),(0,b.jsxs)(`span`,{className:`inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent-ink underline decoration-transparent underline-offset-4 transition-all duration-200 group-hover:text-accent-bright group-hover:decoration-current`,children:[a(`actions.readFull`),(0,b.jsx)(l.arrowUpRight,{"aria-hidden":`true`,className:`h-4 w-4 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5`})]}),(0,b.jsxs)(`figcaption`,{className:`flex items-center gap-3 border-t border-line pt-5`,children:[s?(0,b.jsx)(`img`,{src:s,alt:e.name,width:`44`,height:`44`,loading:`lazy`,decoding:`async`,className:`h-11 w-11 shrink-0 rounded-full border border-line object-cover`}):(0,b.jsx)(`span`,{"aria-hidden":`true`,className:`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-accent bg-accent/10 font-mono text-xs font-semibold text-accent-ink shadow-inner-top`,children:e.initials}),(0,b.jsxs)(`span`,{className:`flex min-w-0 flex-col`,children:[(0,b.jsxs)(`span`,{className:`flex items-center gap-1.5 text-sm font-semibold text-ink`,children:[(0,b.jsx)(`span`,{className:`truncate`,children:e.name}),d?(0,b.jsx)(`a`,{href:d,target:`_blank`,rel:`noreferrer noopener`,"aria-label":e.name,onClick:e=>e.stopPropagation(),className:`pointer-events-auto shrink-0 text-ink-subtle transition-colors duration-200 hover:text-accent-ink`,children:(0,b.jsx)(f,{"aria-hidden":`true`,className:`h-3.5 w-3.5`})}):null]}),(0,b.jsx)(`span`,{className:`truncate text-xs text-ink-subtle`,children:p})]})]})]})]})})}var C=a(),w=`a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])`;function T({open:e,onClose:n,titleId:i,children:a}){let{t:c}=o(),u=(0,y.useRef)(null),d=(0,y.useRef)(null);(0,y.useEffect)(()=>{if(!e)return;d.current=document.activeElement;let t=document.body.style.overflow;document.body.style.overflow=`hidden`;let n=setTimeout(()=>{(u.current?.querySelector(w)??u.current)?.focus()},20);return()=>{clearTimeout(n),document.body.style.overflow=t,d.current instanceof HTMLElement&&d.current.focus()}},[e]);let f=(0,y.useCallback)(e=>{if(e.key===`Escape`){e.preventDefault(),n();return}if(e.key!==`Tab`)return;let t=Array.from(u.current?.querySelectorAll(w)??[]);if(t.length===0)return;let r=t[0],i=t[t.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus())},[n]);return typeof document>`u`?null:(0,C.createPortal)((0,b.jsx)(r,{children:e?(0,b.jsxs)(`div`,{className:`fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6`,onKeyDown:f,children:[(0,b.jsx)(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:`easeOut`},onClick:n,"aria-hidden":`true`,className:`absolute inset-0 bg-canvas-deep/75 backdrop-blur-md`}),(0,b.jsxs)(t.div,{ref:u,role:`dialog`,"aria-modal":`true`,"aria-labelledby":i,tabIndex:-1,initial:{opacity:0,y:24,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:16,scale:.98},transition:{duration:.3,ease:s},className:`nc-card nc-scroll-area relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-b-none sm:rounded-2xl`,children:[(0,b.jsx)(`button`,{type:`button`,onClick:n,"aria-label":c(`actions.close`),className:`absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-ink-muted transition-colors duration-200 hover:border-line-hover hover:bg-surface-hover hover:text-ink`,children:(0,b.jsx)(l.close,{"aria-hidden":`true`,className:`h-4 w-4`})}),a]})]}):null}),document.body)}function E({testimonial:e,open:t,onClose:n,placeholderLabel:r}){let i=c(e?.photo),a=e?.link,o=a?.includes(`linkedin.`)?l.linkedin:l.arrowUpRight;return(0,b.jsx)(T,{open:t,onClose:n,titleId:`testimonio-nombre`,children:e?(0,b.jsxs)(`div`,{className:`flex flex-col gap-6 p-6 pt-14 sm:p-8 sm:pt-8`,children:[(0,b.jsxs)(`div`,{className:`flex items-start gap-4 pr-10`,children:[i?(0,b.jsx)(`img`,{src:i,alt:e.name,width:`64`,height:`64`,className:`h-16 w-16 shrink-0 rounded-full border border-line object-cover`}):(0,b.jsx)(`span`,{"aria-hidden":`true`,className:`grid h-16 w-16 shrink-0 place-items-center rounded-full border border-line-accent bg-accent/10 font-mono text-sm font-semibold text-accent-ink shadow-inner-top`,children:e.initials}),(0,b.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-1.5`,children:[e.relationship?(0,b.jsx)(`span`,{className:`nc-eyebrow`,children:e.relationship}):null,(0,b.jsx)(`h3`,{id:`testimonio-nombre`,className:`text-xl font-semibold tracking-tight text-balance text-ink`,children:e.name}),(0,b.jsx)(`p`,{className:`text-sm leading-relaxed text-ink-muted`,children:[e.role,e.company].filter(Boolean).join(` · `)})]})]}),e.placeholder?(0,b.jsx)(`span`,{className:`w-fit rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase`,children:r}):null,(0,b.jsx)(`div`,{className:`nc-divider`}),(0,b.jsxs)(`blockquote`,{className:`relative pl-6 text-base leading-relaxed text-ink-muted`,children:[(0,b.jsx)(`span`,{"aria-hidden":`true`,className:`absolute top-0 left-0 font-serif text-4xl leading-none text-accent/40 select-none`,children:`“`}),e.quote]}),a?(0,b.jsxs)(`a`,{href:a,target:`_blank`,rel:`noreferrer noopener`,className:`inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent-ink transition-colors duration-200 hover:text-accent-bright`,children:[e.name,(0,b.jsx)(o,{"aria-hidden":`true`,className:`h-4 w-4`})]}):null]}):null})}var D=Object.assign({"./content.en.yaml":_,"./content.es.yaml":v}),O={3:`lg:col-span-2`,2:`lg:col-span-3`,1:`lg:col-span-6`};function k(e){let t=[],n=e;for(;n>0;)n===4?(t.push(2,2),n=0):n>4||n%3==0?(t.push(3),n-=3):(t.push(n),n=0);return t.flatMap(e=>Array(e).fill(O[e]))}function A(){let e=d(),t=(0,y.useMemo)(()=>f(D,e)??{},[e]),n=e=>String(e.quote??``).trim().length>0,r=(0,y.useMemo)(()=>(t.items??[]).filter(n),[t.items]),i=(0,y.useMemo)(()=>(t.items??[]).filter(e=>!n(e)),[t.items]),a=(0,y.useMemo)(()=>k(r.length),[r.length]),[o,s]=(0,y.useState)(null);return r.length===0&&i.length===0?null:(0,b.jsxs)(h,{id:`testimonials`,children:[(0,b.jsx)(p,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),r.length>0?(0,b.jsx)(`div`,{className:`mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-6`,children:r.map((e,n)=>{let i=n===r.length-1&&r.length%2==1;return(0,b.jsx)(S,{testimonial:e,placeholderLabel:t.placeholderLabel,index:n,className:`${a[n]} ${i?`md:col-span-2`:``}`,onOpen:()=>s(n)},`${e.name}-${n}`)})}):null,i.length>0?(0,b.jsxs)(`div`,{className:r.length>0?`mt-12 flex flex-col gap-6`:`mt-12 lg:mt-16`,children:[r.length>0?(0,b.jsx)(`h3`,{className:`nc-eyebrow`,children:t.referencesTitle}):null,(0,b.jsx)(`div`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:i.map((e,t)=>(0,b.jsx)(x,{reference:e,index:t},`${e.name}-${t}`))})]}):null,(0,b.jsx)(E,{testimonial:o===null?null:r[o],open:o!==null,onClose:()=>s(null),placeholderLabel:t.placeholderLabel})]})}export{A as default};