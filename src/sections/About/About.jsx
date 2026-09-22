import { useMemo } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { SpotlightCard } from '../../components/ui/SpotlightCard'
import { getIcon } from '../../components/ui/icons'
import { Markdown } from '../../components/ui/Markdown'
import { useLang } from '../../hooks/useLang'
import { pickMarkdown } from '../../lib/content'
import { scaleIn } from '../../lib/motion'
import { publicUrl } from '../../lib/profile'

// Contenido editable de esta sección: `content.es.md` / `content.en.md`.
// La experiencia laboral vive en su propia sección: `src/sections/Experience/`.
const CONTENT = import.meta.glob('./content.*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function About() {
  const lang = useLang()
  const { data, body } = useMemo(() => pickMarkdown(CONTENT, lang), [lang])
  // Foto opcional del espacio de trabajo (campo `image` del Markdown).
  const imagen = publicUrl(data.image)

  return (
    <Section id="about">
      <SectionHeading eyebrow={data.eyebrow} title={data.title} lead={data.lead} />

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-8">
          <Reveal className="max-w-2xl">
            <Markdown>{body}</Markdown>
          </Reveal>

          {imagen ? (
            <Reveal variants={scaleIn} delay={0.08}>
              <figure className="nc-card group overflow-hidden p-1.5">
                <img
                  src={imagen}
                  alt={data.imageAlt ?? ''}
                  width={data.imageWidth}
                  height={data.imageHeight}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full rounded-xl object-cover transition-transform duration-500 ease-expo group-hover:scale-[1.02]"
                />
              </figure>
            </Reveal>
          ) : null}
        </div>

        {/* Pilares del perfil */}
        <div className="grid content-start gap-4 sm:grid-cols-2">
          {(data.pillars ?? []).map((pillar, index) => {
            const Icon = getIcon(pillar.icon)
            return (
              <Reveal key={pillar.title} variants={scaleIn} delay={index * 0.08}>
                <SpotlightCard className="flex h-full flex-col gap-3 p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-accent-ink shadow-inner-top transition-colors duration-200 group-hover:border-line-accent">
                    <Icon aria-hidden="true" className="h-[1.15rem] w-[1.15rem]" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{pillar.text}</p>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
