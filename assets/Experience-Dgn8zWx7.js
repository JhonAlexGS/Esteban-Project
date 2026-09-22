import{r as e}from"./rolldown-runtime-hePW80VL.js";import{d as t,u as n}from"./motion-D4psEU6N.js";import{n as r,p as i,s as a}from"./index-BIIhhft0.js";import{n as o,r as s,t as c}from"./Section-C_9OB13A.js";var l=`# ---------------------------------------------------------------------------
# WORK EXPERIENCE — English.
#
# \`items\` is the list of jobs, from most recent to oldest.
# To add one, copy a whole block keeping the indentation.
#
# Fields for each job:
#   company    → company name
#   role       → your role
#   location   → city and country (optional: hidden when omitted)
#   period     → dates (optional: when omitted, the dates line isn't shown)
#   highlights → what you did there (one line per achievement)
#   stack      → technologies and areas of work
# ---------------------------------------------------------------------------

eyebrow: Experience
title: Four years across engineering, IT and the classroom
lead: >-
  From teaching robotics and programming logic to implementing artificial
  intelligence, networks and solar energy inside a company.

items:
  - company: Grupo Empresarial Colombia GED SAS
    role: Mechatronics Engineer
    period: Oct 2023 – Aug 2026
    highlights:
      - Implemented artificial intelligence solutions to optimize processes.
      - Installed and provided technical support for photovoltaic solar energy systems.
      - Administered, implemented and supported the corporate IT systems.
      - Managed and maintained wired and wireless networks.
      - Built and maintained the corporate website and supported social media management.
      - Preventive and corrective hardware maintenance, software licensing and technology inventory.
      - Technical support for internal users on hardware and software.
    stack: [Artificial intelligence, Solar energy, Networking, Web development, Technical support, Digital marketing]

  - company: AXCOR
    role: IT & Web Development Lead
    period: Dec 2022 – Oct 2023
    highlights:
      - Coordinated teams and supervised operations.
      - Built and maintained the corporate website.
      - Designed and executed digital marketing positioning strategies.
      - Computer assembly and maintenance, with on-site and remote technical support.
      - Configured and managed wired and wireless networks.
      - Managed technology inventory, quality control and strategic planning.
    stack: [Web development, Networking, Technical support, Digital marketing, IT management]

  - company: Colegio Enrique Olaya Herrera
    role: Educational Robotics Teacher (Internship)
    period: Aug 2022 – Dec 2022
    highlights:
      - Taught in the educational robotics area.
      - Designed and delivered the C++ programming logic course.
      - Hands-on training on the practical use of microcontrollers.
      - Applied creative research methodologies to technology learning.
      - Managed course content on Moodle and fostered cooperative learning.
    stack: [Robotics, C++, Microcontrollers, Arduino, Moodle]
`,u=`# ---------------------------------------------------------------------------
# EXPERIENCIA LABORAL — español.
#
# \`items\` es la lista de empleos, en orden del más reciente al más antiguo.
# Para añadir uno, copia un bloque completo respetando la indentación.
#
# Campos de cada empleo:
#   company    → nombre de la empresa
#   role       → tu cargo
#   location   → ciudad y país (opcional: si se omite, no se muestra)
#   period     → fechas (opcional: si se omite, no se muestra la línea de fechas)
#   highlights → lo que hiciste ahí (una línea por logro)
#   stack      → tecnologías y áreas de trabajo
# ---------------------------------------------------------------------------

eyebrow: Experiencia
title: Cuatro años entre la ingeniería, la TI y el aula
lead: >-
  De enseñar robótica y lógica de programación a implementar inteligencia
  artificial, redes y energía solar dentro de una empresa.

items:
  - company: Grupo Empresarial Colombia GED SAS
    role: Ingeniero Mecatrónico
    period: Oct 2023 – Ago 2026
    highlights:
      - Implementación de soluciones de inteligencia artificial para la optimización de procesos.
      - Instalación y soporte técnico de sistemas de energía solar fotovoltaica.
      - Administración, implementación y soporte de los sistemas informáticos corporativos.
      - Administración y mantenimiento de redes cableadas e inalámbricas.
      - Creación y mantenimiento de la página web corporativa y apoyo en la gestión de redes sociales.
      - Mantenimiento preventivo y correctivo de equipos, licenciamiento de software e inventario tecnológico.
      - Soporte técnico a usuarios internos en hardware y software.
    stack: [Inteligencia artificial, Energía solar, Redes, Desarrollo web, Soporte técnico, Marketing digital]

  - company: AXCOR
    role: Encargado de TI y Desarrollo Web
    period: Dic 2022 – Oct 2023
    highlights:
      - Coordinación de equipos y supervisión de operaciones.
      - Creación y mantenimiento de la página web corporativa.
      - Desarrollo e implementación de estrategias de posicionamiento en marketing digital.
      - Mantenimiento y ensamble de computadores, con soporte técnico presencial y remoto.
      - Administración y configuración de redes cableadas e inalámbricas.
      - Gestión del inventario tecnológico, control de calidad y planificación estratégica.
    stack: [Desarrollo web, Redes, Soporte técnico, Marketing digital, Gestión de TI]

  - company: Colegio Enrique Olaya Herrera
    role: Docente Practicante en Robótica Educativa
    period: Ago 2022 – Dic 2022
    highlights:
      - Enseñanza en el área de robótica educativa.
      - Desarrollo del curso de lógica de programación en C++.
      - Formación orientada al uso práctico de microcontroladores.
      - Aplicación de metodologías de investigación creativa en el aprendizaje tecnológico.
      - Gestión de contenidos en Moodle y facilitación del aprendizaje cooperativo.
    stack: [Robótica, C++, Microcontroladores, Arduino, Moodle]
`,d=e(t(),1),f=n();function p({jobs:e}){return(0,f.jsx)(`ol`,{className:`relative flex flex-col gap-8 border-l border-line pl-6 md:gap-10 md:pl-8`,children:e.map((e,t)=>(0,f.jsxs)(s,{as:`li`,variants:i,delay:t*.06,className:`relative`,children:[(0,f.jsx)(`span`,{"aria-hidden":`true`,className:`absolute top-1.5 -left-[1.6875rem] grid h-3 w-3 place-items-center rounded-full border border-line-accent bg-canvas-base md:-left-[2.1875rem]`,children:(0,f.jsx)(`span`,{className:`h-1.5 w-1.5 rounded-full bg-accent`})}),(0,f.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[e.period?(0,f.jsx)(`span`,{className:`font-mono text-[0.6875rem] tracking-widest text-accent-ink uppercase`,children:e.period}):null,(0,f.jsxs)(`h3`,{className:`text-lg font-semibold tracking-tight text-ink`,children:[e.role,(0,f.jsxs)(`span`,{className:`text-ink-muted`,children:[` · `,e.company]})]}),e.location?(0,f.jsx)(`p`,{className:`text-xs text-ink-subtle`,children:e.location}):null]}),(0,f.jsx)(`ul`,{className:`mt-3 flex flex-col gap-2`,children:(e.highlights??[]).map(e=>(0,f.jsxs)(`li`,{className:`relative pl-5 text-sm leading-relaxed text-ink-muted`,children:[(0,f.jsx)(`span`,{"aria-hidden":`true`,className:`absolute top-[0.55em] left-0 h-1 w-1 rounded-full bg-accent/70`}),e]},e))}),e.stack?.length?(0,f.jsx)(`ul`,{className:`mt-4 flex flex-wrap gap-1.5`,children:e.stack.map(e=>(0,f.jsx)(`li`,{className:`rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.6875rem] text-ink-subtle transition-colors duration-200 hover:border-line-accent hover:text-ink`,children:e},e))}):null]},`${e.company}-${e.period}`))})}var m=Object.assign({"./content.en.yaml":l,"./content.es.yaml":u});function h(){let e=r(),t=(0,d.useMemo)(()=>a(m,e)??{},[e]),n=t.items??[];return n.length===0?null:(0,f.jsxs)(c,{id:`experience`,children:[(0,f.jsx)(o,{eyebrow:t.eyebrow,title:t.title,lead:t.lead}),(0,f.jsx)(`div`,{className:`mt-12 lg:mt-16`,children:(0,f.jsx)(p,{jobs:n})})]})}export{h as default};