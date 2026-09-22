import { useMemo, useState } from 'react'
import { Section, SectionHeading } from '../../components/ui/Section'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { ReferenceCard } from './ReferenceCard/ReferenceCard'
import { TestimonialCard } from './TestimonialCard/TestimonialCard'
import { TestimonialModal } from './TestimonialModal/TestimonialModal'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// Anchos posibles sobre una rejilla de 6 columnas, según cuántas tarjetas
// compartan la fila: 3 → un tercio, 2 → la mitad, 1 → la fila entera.
const ANCHOS = { 3: 'lg:col-span-2', 2: 'lg:col-span-3', 1: 'lg:col-span-6' }

/**
 * Reparte N tarjetas en filas que llenen siempre las 6 columnas, para que
 * nunca quede una fila a medias. Se recalcula al añadir o quitar testimonios.
 * Ejemplos: 5 → [3, 2] · 4 → [2, 2] · 7 → [3, 2, 2]
 */
function anchoDeCadaTarjeta(total) {
  const filas = []
  let quedan = total

  while (quedan > 0) {
    if (quedan === 4) {
      filas.push(2, 2)
      quedan = 0
    } else if (quedan > 4 || quedan % 3 === 0) {
      filas.push(3)
      quedan -= 3
    } else {
      filas.push(quedan)
      quedan = 0
    }
  }

  return filas.flatMap((enLaFila) => Array(enLaFila).fill(ANCHOS[enLaFila]))
}

export default function Testimonials() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])

  // Quien tiene `quote` se publica como testimonio; quien no, como tarjeta de
  // referencia (foto, nombre y cargo), sin inventarle ninguna reseña.
  const tieneReseña = (t) => String(t.quote ?? '').trim().length > 0
  const items = useMemo(() => (content.items ?? []).filter(tieneReseña), [content.items])
  const referencias = useMemo(
    () => (content.items ?? []).filter((t) => !tieneReseña(t)),
    [content.items],
  )
  const anchos = useMemo(() => anchoDeCadaTarjeta(items.length), [items.length])

  // Índice de la reseña abierta en el diálogo; `null` cuando está cerrado.
  const [abierta, setAbierta] = useState(null)

  // Sin nadie en la lista, la sección entera desaparece.
  if (items.length === 0 && referencias.length === 0) return null

  return (
    <Section id="testimonials">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      {items.length > 0 ? (
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {items.map((testimonial, index) => {
            // En tablet la rejilla es de dos columnas: si el total es impar, la
            // última tarjeta se estira para no quedarse sola.
            const cierraFilaEnTablet = index === items.length - 1 && items.length % 2 === 1
            return (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
                placeholderLabel={content.placeholderLabel}
                index={index}
                className={`${anchos[index]} ${cierraFilaEnTablet ? 'md:col-span-2' : ''}`}
                onOpen={() => setAbierta(index)}
              />
            )
          })}
        </div>
      ) : null}

      {referencias.length > 0 ? (
        <div className={items.length > 0 ? 'mt-12 flex flex-col gap-6' : 'mt-12 lg:mt-16'}>
          {/* El subtítulo sólo hace falta si hay testimonios encima. */}
          {items.length > 0 ? <h3 className="nc-eyebrow">{content.referencesTitle}</h3> : null}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {referencias.map((reference, index) => (
              <ReferenceCard key={`${reference.name}-${index}`} reference={reference} index={index} />
            ))}
          </div>
        </div>
      ) : null}

      <TestimonialModal
        testimonial={abierta === null ? null : items[abierta]}
        open={abierta !== null}
        onClose={() => setAbierta(null)}
        placeholderLabel={content.placeholderLabel}
      />
    </Section>
  )
}
