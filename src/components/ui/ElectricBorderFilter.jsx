/**
 * Filtros SVG del borde de las tarjetas: el «eléctrico» y el de «llamas».
 *
 * Los dos funcionan igual: varias capas de ruido que se desplazan y, al
 * combinarse, deforman el trazo del borde. Se declaran una sola vez en toda la
 * página (lo monta `App`) y las tarjetas los invocan desde CSS con
 * `filter: url(#nc-electric-border)` y `url(#nc-flame-border)`.
 *
 * ⚠️ Cada filtro necesita **cuatro** capas de ruido, desplazándose dos a dos en
 * sentidos opuestos (dos en vertical y dos en horizontal). Con menos, llega un
 * momento en que el ruido se ha corrido fuera de la zona del filtro, el mapa de
 * desplazamiento se queda plano y el borde vuelve a verse como un rectángulo
 * recto. Con las cuatro, siempre hay ruido cubriendo el trazo.
 *
 * Ajustes respecto al ejemplo original, para no penalizar el rendimiento con
 * decenas de tarjetas: `numOctaves` 3 en vez de 10, y los filtros sólo se
 * aplican mientras el cursor está encima de la tarjeta.
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
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" seed="1" result="ruido1" />
          <feOffset in="ruido1" dx="0" dy="0" result="desp1">
            <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" seed="1" result="ruido2" />
          <feOffset in="ruido2" dx="0" dy="0" result="desp2">
            <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" seed="2" result="ruido3" />
          <feOffset in="ruido3" dx="0" dy="0" result="desp3">
            <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" seed="2" result="ruido4" />
          <feOffset in="ruido4" dx="0" dy="0" result="desp4">
            <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feComposite in="desp1" in2="desp2" result="parte1" />
          <feComposite in="desp3" in2="desp4" result="parte2" />
          <feBlend in="parte1" in2="parte2" mode="color-dodge" result="ruidoFinal" />

          <feDisplacementMap
            in="SourceGraphic"
            in2="ruidoFinal"
            scale="16"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>

        {/* Llamas: mismo esquema de cuatro ruidos, pero estirados en vertical y
            más rápidos, así la deformación sale en lenguas altas y estrechas
            alrededor de toda la tarjeta.

            Aquí NO se recorta ningún canal para forzar que el fuego suba: al
            hacerlo, las zonas sin ruido quedaban con un desplazamiento
            constante que empujaba el trazo fuera de su sitio y la tarjeta se
            quedaba sin borde. La sensación de que sube la da el degradado
            animado del anillo (ver `.nc-flame` en `src/index.css`). */}
        <filter
          id="nc-flame-border"
          colorInterpolationFilters="sRGB"
          x="-35%"
          y="-35%"
          width="170%"
          height="170%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.014 0.05"
            numOctaves="3"
            seed="4"
            result="fuego1"
          />
          <feOffset in="fuego1" dx="0" dy="0" result="f1">
            <animate attributeName="dy" values="600; 0" dur="3s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.014 0.05"
            numOctaves="3"
            seed="4"
            result="fuego2"
          />
          <feOffset in="fuego2" dx="0" dy="0" result="f2">
            <animate attributeName="dy" values="0; -600" dur="3s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.06"
            numOctaves="2"
            seed="9"
            result="fuego3"
          />
          <feOffset in="fuego3" dx="0" dy="0" result="f3">
            <animate attributeName="dx" values="420; 0" dur="4.5s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.06"
            numOctaves="2"
            seed="9"
            result="fuego4"
          />
          <feOffset in="fuego4" dx="0" dy="0" result="f4">
            <animate attributeName="dx" values="0; -420" dur="4.5s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>

          <feComposite in="f1" in2="f2" result="fuegoVertical" />
          <feComposite in="f3" in2="f4" result="fuegoHorizontal" />
          <feBlend in="fuegoVertical" in2="fuegoHorizontal" mode="color-dodge" result="fuegoFinal" />

          <feDisplacementMap
            in="SourceGraphic"
            in2="fuegoFinal"
            scale="22"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
}
