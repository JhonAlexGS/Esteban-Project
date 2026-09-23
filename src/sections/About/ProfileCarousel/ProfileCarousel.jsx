import { useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LevelBar } from '../../../components/ui/LevelBar'
import { Brand } from '../../../components/ui/brands'
import { getIcon, ICONS } from '../../../components/ui/icons'

/**
 * Sub-componente de «Perfil profesional»: no tiene contenido propio.
 * Recibe los frentes de trabajo desde `About/content.<idioma>.md` (`pillars`).
 *
 * Carrusel en profundidad: la tarjeta activa va al frente y las vecinas se
 * alejan hacia los lados, encogidas y desaturadas. Cada tarjeta se explica
 * sola —título y lista de habilidades—, así que debajo solo van los puntos.
 *
 * Se puede mover con las flechas, con los puntos, pulsando una tarjeta lateral,
 * con las teclas ← → cuando el carrusel tiene el foco, y deslizando en móvil.
 */

// Cada posición define dónde se coloca la tarjeta respecto al centro.
const POSICIONES = {
  centro: { x: 0, z: 0, escala: 1, opacidad: 1, z_index: 30, gris: 0 },
  derecha: { x: 165, z: -160, escala: 0.8, opacidad: 0.65, z_index: 20, gris: 1 },
  izquierda: { x: -165, z: -160, escala: 0.8, opacidad: 0.65, z_index: 20, gris: 1 },
  // La que queda «detrás» no se muestra: con cuatro tarjetas asomaba por los
  // bordes de la central y se leía su texto encima del de la del frente.
  fondo: { x: 0, z: -320, escala: 0.72, opacidad: 0, z_index: 0, gris: 1 },
}

/** Dónde va cada tarjeta según su distancia a la activa. */
function posicionDe(indice, activa, total) {
  const salto = (indice - activa + total) % total
  if (salto === 0) return 'centro'
  if (salto === 1) return 'derecha'
  if (salto === total - 1) return 'izquierda'
  return 'fondo'
}

export function ProfileCarousel({ items = [] }) {
  const { t } = useTranslation()
  const [activa, setActiva] = useState(0)
  const total = items.length
  const inicioTactil = useRef(null)

  const mover = useCallback(
    (paso) => setActiva((actual) => (actual + paso + total) % total),
    [total],
  )

  // Flechas del teclado, sólo cuando el carrusel tiene el foco.
  const alPulsarTecla = useCallback(
    (evento) => {
      if (evento.key === 'ArrowLeft') {
        evento.preventDefault()
        mover(-1)
      } else if (evento.key === 'ArrowRight') {
        evento.preventDefault()
        mover(1)
      }
    },
    [mover],
  )

  if (total === 0) return null

  // Si alguien quita una tarjeta del YAML, el índice guardado podría quedar
  // fuera de rango: el resto se encarga de que siempre apunte a una existente.
  const indiceActivo = activa % total

  return (
    <div className="flex flex-col items-center">
      <div
        role="group"
        tabIndex={0}
        aria-roledescription="carrusel"
        onKeyDown={alPulsarTecla}
        onTouchStart={(evento) => {
          inicioTactil.current = evento.changedTouches[0].clientX
        }}
        onTouchEnd={(evento) => {
          if (inicioTactil.current === null) return
          const recorrido = inicioTactil.current - evento.changedTouches[0].clientX
          if (Math.abs(recorrido) > 50) mover(recorrido > 0 ? 1 : -1)
          inicioTactil.current = null
        }}
        className="relative flex h-[24rem] w-full items-center justify-center sm:h-[26rem]"
        style={{ perspective: 1000 }}
      >
        {items.map((pilar, indice) => {
          const Icon = getIcon(pilar.icon)
          const posicion = posicionDe(indice, indiceActivo, total)
          const p = POSICIONES[posicion]
          const esCentro = posicion === 'centro'
          const oculta = posicion === 'fondo'

          return (
            <button
              key={pilar.title}
              type="button"
              aria-current={esCentro ? 'true' : undefined}
              aria-hidden={oculta ? 'true' : undefined}
              aria-label={pilar.title}
              onClick={() => setActiva(indice)}
              tabIndex={esCentro || oculta ? -1 : 0}
              style={{
                pointerEvents: oculta ? 'none' : undefined,
                // Fondo opaco: las tarjetas se superponen, y con el cristal
                // translúcido del resto del sitio se leía el texto de la de
                // atrás a través de la del frente.
                backgroundColor: 'var(--canvas-elevated)',
                transform: `translateX(${p.x}px) translateZ(${p.z}px) scale(${p.escala})`,
                opacity: p.opacidad,
                zIndex: p.z_index,
                filter: `grayscale(${p.gris})`,
              }}
              className="nc-card absolute flex h-[21rem] w-[15rem] flex-col gap-4 p-5 text-left transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] sm:h-[23rem] sm:w-[17rem]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line-accent bg-accent/10 text-accent-ink shadow-inner-top">
                  <Icon aria-hidden="true" className="h-[1.15rem] w-[1.15rem]" />
                </span>
                <span className="text-sm font-semibold tracking-tight text-balance text-ink">
                  {pilar.title}
                </span>
              </div>

              {/* Lista de habilidades con su nivel, como en el stack técnico. */}
              <ul className="flex flex-col gap-3">
                {(pilar.items ?? []).map((habilidad) => {
                  const HabilidadIcon = getIcon(habilidad.icon ?? pilar.icon)
                  return (
                    <li key={habilidad.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded border border-line bg-surface">
                          {habilidad.brand ? (
                            <Brand
                              name={habilidad.brand}
                              label={habilidad.name}
                              className="h-3 w-3"
                            />
                          ) : (
                            <HabilidadIcon aria-hidden="true" className="h-3 w-3 text-ink-subtle" />
                          )}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[0.8125rem] text-ink-muted">
                          {habilidad.name}
                        </span>
                      </div>
                      <LevelBar level={habilidad.level} label={habilidad.name} />
                    </li>
                  )
                })}
              </ul>
            </button>
          )
        })}

        {/* Flechas */}
        <button
          type="button"
          onClick={() => mover(-1)}
          aria-label={t('actions.prev')}
          className="absolute left-0 z-40 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-muted shadow-inner-top backdrop-blur-md transition-colors duration-200 hover:border-line-accent hover:text-ink sm:left-4"
        >
          <ICONS.arrowUp aria-hidden="true" className="h-4 w-4 -rotate-90" />
        </button>
        <button
          type="button"
          onClick={() => mover(1)}
          aria-label={t('actions.next')}
          className="absolute right-0 z-40 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-muted shadow-inner-top backdrop-blur-md transition-colors duration-200 hover:border-line-accent hover:text-ink sm:right-4"
        >
          <ICONS.arrowUp aria-hidden="true" className="h-4 w-4 rotate-90" />
        </button>
      </div>

      {/* Puntos */}
      <div className="mt-6 flex items-center gap-2.5">
        {items.map((pilar, indice) => (
          <button
            key={pilar.title}
            type="button"
            onClick={() => setActiva(indice)}
            aria-label={pilar.title}
            aria-current={indice === indiceActivo ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              indice === indiceActivo
                ? 'w-6 bg-accent'
                : 'w-2.5 bg-line-hover hover:bg-line-accent'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
