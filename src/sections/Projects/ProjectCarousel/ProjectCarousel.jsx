import { useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from '../../../components/ui/Modal'
import { ICONS } from '../../../components/ui/icons'
import { publicUrl } from '../../../lib/profile'

/**
 * Sub-componente de «Proyectos»: no tiene contenido propio.
 * Recibe los proyectos desde `Projects/content.<idioma>.yaml`.
 *
 * Carrusel circular con UNA TARJETA POR PROYECTO, repartidas sobre un cilindro
 * que gira para traer al frente la que toca.
 *
 *   · Cara frontal → nombre del proyecto y su información.
 *   · Cara trasera → sus imágenes, cada una con su nombre.
 *   · Al pulsar una imagen se abre ampliada en una ventana emergente, que se
 *     cierra para seguir mirando el resto.
 */
export function ProjectCarousel({ items = [], flipHint }) {
  const { t } = useTranslation()
  const total = items.length
  const [activa, setActiva] = useState(0)
  const [giradas, setGiradas] = useState(() => new Set())
  // Imagen abierta en la ventana emergente: { proyecto, indice } o null.
  const [ampliada, setAmpliada] = useState(null)
  const inicioTactil = useRef(null)

  const mover = useCallback((paso) => {
    setActiva((actual) => actual + paso)
    // Al girar el cilindro, las tarjetas vuelven a su cara frontal.
    setGiradas(new Set())
  }, [])

  const irA = useCallback(
    (indice) => {
      setActiva((actual) => {
        const actualIndice = ((actual % total) + total) % total
        let salto = indice - actualIndice
        if (salto > total / 2) salto -= total
        if (salto < -total / 2) salto += total
        return actual + salto
      })
      setGiradas(new Set())
    },
    [total],
  )

  const alternarGiro = useCallback((titulo) => {
    setGiradas((actuales) => {
      const siguientes = new Set(actuales)
      if (siguientes.has(titulo)) siguientes.delete(titulo)
      else siguientes.add(titulo)
      return siguientes
    })
  }, [])

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

  /** Cambia de imagen dentro de la ventana emergente. */
  const moverAmpliada = useCallback((paso) => {
    setAmpliada((actual) => {
      if (!actual) return actual
      const cuantas = actual.proyecto.images.length
      return { ...actual, indice: (actual.indice + paso + cuantas) % cuantas }
    })
  }, [])

  if (total === 0) return null

  const paso = 360 / total
  // `activa` crece o decrece sin límite para que el giro sea continuo; el
  // índice real se obtiene con el resto.
  const indiceActivo = ((activa % total) + total) % total
  const imagenAmpliada = ampliada ? ampliada.proyecto.images[ampliada.indice] : null

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
        // El alto reserva el sitio que ocupa la tarjeta del frente YA
        // proyectada: al acercarse en el eje Z se ve más grande que su caja,
        // y con menos alto se montaba sobre el titular de la sección.
        className="nc-carousel-3d relative h-[34rem] w-full sm:h-[42rem]"
        style={{ perspective: 2000 }}
      >
        {/* Cilindro */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{ transformStyle: 'preserve-3d', transform: `rotateY(${-activa * paso}deg)` }}
        >
          {items.map((proyecto, indice) => {
            // Distancia angular a la tarjeta del frente.
            let distancia = indice - indiceActivo
            if (distancia > total / 2) distancia -= total
            if (distancia < -total / 2) distancia += total

            const alFrente = distancia === 0
            const visible = Math.abs(distancia) <= 2
            const girada = giradas.has(proyecto.title)
            const imagenes = proyecto.images ?? []

            return (
              <div
                key={proyecto.title}
                className="absolute top-1/2 left-1/2 h-[23rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] sm:h-[26rem] sm:w-[19rem]"
                style={{
                  transformStyle: 'preserve-3d',
                  // La del frente crece y las vecinas se encogen: así destaca
                  // sin depender solo de la opacidad.
                  transform: `rotateY(${indice * paso}deg) translateZ(var(--radio-carrusel)) scale(${alFrente ? 1.08 : 0.82})`,
                  opacity: visible ? (alFrente ? 1 : 0.3) : 0,
                  filter: alFrente ? 'none' : 'grayscale(0.85) brightness(0.7) blur(1px)',
                  pointerEvents: alFrente ? 'auto' : 'none',
                }}
              >
                <div
                  className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: girada ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    borderRadius: '1rem',
                    // Halo de acento solo en la tarjeta del frente.
                    boxShadow: alFrente
                      ? '0 0 0 1px var(--line-accent), 0 18px 50px rgb(0 0 0 / 0.55), 0 0 70px var(--accent-glow)'
                      : 'none',
                  }}
                >
                  {/* ------- Cara frontal: el proyecto y su información ------ */}
                  <div
                    className="nc-card absolute inset-0 flex flex-col gap-3 p-6"
                    style={{
                      backfaceVisibility: 'hidden',
                      backgroundColor: 'var(--canvas-elevated)',
                    }}
                  >
                    <span className="nc-eyebrow">{proyecto.kicker}</span>
                    <h3 className="text-lg font-semibold tracking-tight text-balance text-ink">
                      {proyecto.title}
                    </h3>
                    {proyecto.period ? (
                      <span className="font-mono text-[0.6875rem] tracking-widest text-ink-subtle uppercase">
                        {proyecto.period}
                      </span>
                    ) : null}

                    <p className="flex-1 overflow-hidden text-[0.8125rem] leading-relaxed text-ink-muted">
                      {proyecto.summary}
                    </p>

                    <ul className="flex flex-wrap gap-1.5">
                      {(proyecto.tags ?? []).slice(0, 4).map((etiqueta) => (
                        <li
                          key={etiqueta}
                          className="rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-[0.625rem] text-ink-subtle"
                        >
                          {etiqueta}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => alternarGiro(proyecto.title)}
                      tabIndex={alFrente ? 0 : -1}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-line-accent bg-accent/10 px-3 py-2 text-[0.8125rem] font-medium text-ink shadow-inner-top transition-colors duration-200 hover:bg-accent/20"
                    >
                      <ICONS.image aria-hidden="true" className="h-4 w-4 text-accent-ink" />
                      {t('actions.viewImages', { count: imagenes.length })}
                    </button>
                  </div>

                  {/* ------- Cara trasera: las imágenes del proyecto --------- */}
                  <div
                    className="nc-card absolute inset-0 flex flex-col gap-3 p-5"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      backgroundColor: 'var(--canvas-elevated)',
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="nc-eyebrow truncate">{proyecto.title}</span>
                      <button
                        type="button"
                        onClick={() => alternarGiro(proyecto.title)}
                        tabIndex={alFrente ? 0 : -1}
                        aria-label={t('actions.back')}
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink-muted transition-colors duration-200 hover:border-line-accent hover:text-ink"
                      >
                        <ICONS.arrowUpRight aria-hidden="true" className="h-3.5 w-3.5 rotate-180" />
                      </button>
                    </div>

                    <ul className="nc-scroll-area -mr-1 flex-1 space-y-2 overflow-y-auto pr-1">
                      {imagenes.map((imagen, posicion) => (
                        <li key={imagen.file}>
                          <button
                            type="button"
                            onClick={() => setAmpliada({ proyecto, indice: posicion })}
                            tabIndex={alFrente ? 0 : -1}
                            className="group/mini flex w-full items-center gap-3 rounded-xl border border-line bg-surface p-1.5 text-left transition-colors duration-200 hover:border-line-accent hover:bg-surface-hover"
                          >
                            <img
                              src={publicUrl(imagen.file)}
                              alt={imagen.name}
                              loading="lazy"
                              decoding="async"
                              draggable="false"
                              className="h-12 w-16 shrink-0 rounded-lg object-cover"
                            />
                            <span className="min-w-0 flex-1 text-[0.75rem] leading-snug text-ink-muted">
                              {imagen.name}
                            </span>
                            <ICONS.search
                              aria-hidden="true"
                              className="h-3.5 w-3.5 shrink-0 text-ink-subtle transition-colors duration-200 group-hover/mini:text-accent-ink"
                            />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Flechas */}
        <button
          type="button"
          onClick={() => mover(-1)}
          aria-label={t('actions.prev')}
          className="absolute top-1/2 left-0 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-ink-muted shadow-inner-top backdrop-blur-md transition-colors duration-200 hover:border-line-accent hover:text-ink"
        >
          <ICONS.arrowUp aria-hidden="true" className="h-4 w-4 -rotate-90" />
        </button>
        <button
          type="button"
          onClick={() => mover(1)}
          aria-label={t('actions.next')}
          className="absolute top-1/2 right-0 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-ink-muted shadow-inner-top backdrop-blur-md transition-colors duration-200 hover:border-line-accent hover:text-ink"
        >
          <ICONS.arrowUp aria-hidden="true" className="h-4 w-4 rotate-90" />
        </button>
      </div>

      {flipHint ? <p className="mt-6 text-center text-xs text-ink-subtle">{flipHint}</p> : null}

      {/* Puntos: uno por proyecto */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {items.map((proyecto, indice) => (
          <button
            key={proyecto.title}
            type="button"
            onClick={() => irA(indice)}
            aria-label={proyecto.title}
            aria-current={indice === indiceActivo ? 'true' : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              indice === indiceActivo ? 'w-5 bg-accent' : 'w-2 bg-line-hover hover:bg-line-accent'
            }`}
          />
        ))}
      </div>

      {/* ---------- Ventana emergente con la imagen ampliada ---------- */}
      <Modal
        open={ampliada !== null}
        onClose={() => setAmpliada(null)}
        titleId="proyecto-imagen"
        size="wide"
      >
        {imagenAmpliada ? (
          <div className="flex flex-col gap-4 p-6 sm:p-8">
            <div className="pr-12">
              <span className="nc-eyebrow">{ampliada.proyecto.title}</span>
              <h3
                id="proyecto-imagen"
                className="mt-1 text-lg font-semibold tracking-tight text-ink"
              >
                {imagenAmpliada.name}
              </h3>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-line bg-canvas-deep">
              <img
                src={publicUrl(imagenAmpliada.file)}
                alt={imagenAmpliada.name}
                className="max-h-[72vh] w-full object-contain"
              />

              {/* Con una sola imagen no hacen falta las flechas. */}
              {ampliada.proyecto.images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => moverAmpliada(-1)}
                    aria-label={t('actions.prev')}
                    className="absolute top-1/2 left-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas-base/80 text-ink-muted backdrop-blur-md transition-colors duration-200 hover:text-ink"
                  >
                    <ICONS.arrowUp aria-hidden="true" className="h-4 w-4 -rotate-90" />
                  </button>
                  <button
                    type="button"
                    onClick={() => moverAmpliada(1)}
                    aria-label={t('actions.next')}
                    className="absolute top-1/2 right-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas-base/80 text-ink-muted backdrop-blur-md transition-colors duration-200 hover:text-ink"
                  >
                    <ICONS.arrowUp aria-hidden="true" className="h-4 w-4 rotate-90" />
                  </button>
                </>
              ) : null}
            </div>

            {imagenAmpliada.note ? (
              <p className="text-sm leading-relaxed text-ink-muted">{imagenAmpliada.note}</p>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </div>
  )
}
