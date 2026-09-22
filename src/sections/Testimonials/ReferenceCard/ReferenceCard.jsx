import { Reveal } from '../../../components/ui/Reveal'
import { SpotlightCard } from '../../../components/ui/SpotlightCard'
import { ICONS } from '../../../components/ui/icons'
import { publicUrl } from '../../../lib/profile'
import { scaleIn } from '../../../lib/motion'

/**
 * Sub-componente de «Testimonios»: no tiene contenido propio.
 * Recibe cada persona desde `Testimonials/content.<idioma>.yaml`.
 *
 * Es la versión de la tarjeta para quien todavía no tiene `quote`: muestra la
 * foto, el nombre, el cargo y el vínculo, sin inventarle ninguna reseña.
 *
 * Igual que en `TestimonialCard`, `phone` y `email` no se renderizan: son datos
 * de terceros y publicarlos los expondría a spam.
 */
export function ReferenceCard({ reference, index = 0 }) {
  const foto = publicUrl(reference.photo)
  const enlace = reference.link
  const IconoEnlace = enlace?.includes('linkedin.') ? ICONS.linkedin : ICONS.arrowUpRight
  const cargoYEmpresa = [reference.role, reference.company].filter(Boolean).join(' · ')

  return (
    <Reveal as="figure" variants={scaleIn} delay={index * 0.08} className="min-w-0">
      <SpotlightCard className="flex h-full flex-col items-center gap-4 p-6 text-center">
        {foto ? (
          <img
            src={foto}
            alt={reference.name}
            width="96"
            height="96"
            loading="lazy"
            decoding="async"
            className="h-24 w-24 rounded-full border border-line-accent object-cover shadow-card transition-transform duration-300 ease-expo group-hover:scale-[1.03]"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid h-24 w-24 place-items-center rounded-full border border-line-accent bg-accent/10 font-mono text-lg font-semibold text-accent-ink shadow-inner-top"
          >
            {reference.initials}
          </span>
        )}

        <figcaption className="flex min-w-0 flex-col items-center gap-1.5">
          {reference.relationship ? (
            <span className="nc-eyebrow">{reference.relationship}</span>
          ) : null}
          <span className="flex items-center gap-1.5 text-base font-semibold tracking-tight text-balance text-ink">
            {reference.name}
            {enlace ? (
              <a
                href={enlace}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={reference.name}
                className="shrink-0 text-ink-subtle transition-colors duration-200 hover:text-accent-ink"
              >
                <IconoEnlace aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </span>
          {cargoYEmpresa ? (
            <span className="text-sm text-ink-muted">{cargoYEmpresa}</span>
          ) : null}
        </figcaption>
      </SpotlightCard>
    </Reveal>
  )
}
