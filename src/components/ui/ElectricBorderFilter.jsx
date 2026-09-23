/**
 * Filtro SVG del «borde eléctrico» de las tarjetas.
 *
 * Dos capas de turbulencia que se desplazan en sentidos opuestos y se combinan
 * para deformar el borde: es lo que hace que la línea parezca vibrar. Se
 * declara una sola vez en toda la página (lo monta `App`) y las tarjetas lo
 * invocan desde CSS con `filter: url(#nc-electric-border)`.
 *
 * Ajustes respecto al ejemplo original, para que sea sutil y no penalice el
 * rendimiento con decenas de tarjetas en pantalla:
 *   · `numOctaves` 3 en vez de 10 (el ruido se calcula mucho más rápido).
 *   · `scale` 10 en vez de 30 (la deformación es un temblor, no un relámpago).
 *   · el filtro solo se aplica mientras el cursor está encima de la tarjeta.
 */
export function ElectricBorderFilter() {
  return (
    <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute h-0 w-0">
      <defs>
        <filter
          id="nc-electric-border"
          colorInterpolationFilters="sRGB"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" seed="1" result="ruidoA" />
          <feOffset in="ruidoA" dx="0" dy="0" result="bajaA">
            <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" seed="1" result="ruidoB" />
          <feOffset in="ruidoB" dx="0" dy="0" result="subeB">
            <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feComposite in="bajaA" in2="subeB" result="ruidoCombinado" />

          <feDisplacementMap
            in="SourceGraphic"
            in2="ruidoCombinado"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </defs>
    </svg>
  )
}
