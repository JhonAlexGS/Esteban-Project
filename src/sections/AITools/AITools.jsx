import { useMemo } from 'react'
import { LevelBar } from '../../components/ui/LevelBar'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { SpotlightCard } from '../../components/ui/SpotlightCard'
import { Brand } from '../../components/ui/brands'
import { ICONS } from '../../components/ui/icons'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { scaleIn } from '../../lib/motion'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function AITools() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])
  const items = content.items ?? []

  if (items.length === 0) return null

  return (
    <Section id="ai-tools">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {items.map((tool, index) => {
          // Cada tarjeta enlaza a la herramienta; sin `url` es una tarjeta
          // normal, sin enlace.
          const Wrapper = tool.url ? 'a' : 'div'
          const linkProps = tool.url
            ? { href: tool.url, target: '_blank', rel: 'noreferrer noopener' }
            : {}

          return (
            <Reveal
              key={tool.name}
              variants={scaleIn}
              delay={index * 0.07}
              className="min-w-0"
            >
              <SpotlightCard className="h-full">
                <Wrapper {...linkProps} className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface shadow-inner-top transition-colors duration-200 group-hover:border-line-accent">
                      <Brand name={tool.brand} label={tool.name} className="h-5 w-5" />
                    </span>
                    {tool.category ? (
                      <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.625rem] tracking-widest text-ink-subtle uppercase">
                        {tool.category}
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="flex items-center gap-1.5 text-lg font-semibold tracking-tight text-ink">
                      {tool.name}
                      {tool.url ? (
                        <ICONS.arrowUpRight
                          aria-hidden="true"
                          className="h-4 w-4 text-ink-subtle transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent-ink"
                        />
                      ) : null}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{tool.description}</p>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-line pt-4">
                    <span className="nc-eyebrow">{content.levelLabel}</span>
                    <LevelBar level={tool.level} label={`${content.levelLabel}: ${tool.name}`} />
                  </div>
                </Wrapper>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
