import { useMemo } from 'react'
import { LevelBar } from '../../components/ui/LevelBar'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { SpotlightCard } from '../../components/ui/SpotlightCard'
import { Brand } from '../../components/ui/brands'
import { getIcon } from '../../components/ui/icons'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { scaleIn } from '../../lib/motion'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Skills() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])
  const groups = content.groups ?? []

  return (
    <Section id="skills">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {groups.map((group, index) => {
          const Icon = getIcon(group.icon)
          // Con un número impar de tarjetas, la última quedaría sola en su fila
          // de dos columnas; se estira para cerrar el hueco.
          const cierraFila = index === groups.length - 1 && groups.length % 2 === 1
          return (
            <Reveal
              key={group.title}
              variants={scaleIn}
              delay={index * 0.06}
              className={`min-w-0 ${cierraFila ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <SpotlightCard className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent-ink shadow-inner-top transition-colors duration-200 group-hover:border-line-accent">
                    <Icon aria-hidden="true" className="h-[1.15rem] w-[1.15rem]" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {group.title}
                  </h3>
                </div>

                <ul className="flex flex-col gap-4">
                  {(group.items ?? []).map((item) => (
                    <li key={item.name} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2.5">
                        {/* El logo sólo aparece si la tecnología tiene marca
                            (`brand` en el YAML); las habilidades genéricas van
                            sin él. */}
                        {item.brand ? (
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-line bg-surface">
                            <Brand name={item.brand} label={item.name} className="h-3.5 w-3.5" />
                          </span>
                        ) : null}
                        <span className="min-w-0 flex-1 text-sm text-ink-muted">{item.name}</span>
                      </div>
                      <LevelBar level={item.level} label={item.name} />
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>

      {/* Idiomas */}
      {content.languages?.length ? (
        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-line bg-surface px-6 py-4 shadow-inner-top">
          <h3 className="nc-eyebrow">{content.languagesTitle}</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {content.languages.map((language) => (
              <li key={language.name} className="text-sm text-ink-muted">
                <span className="font-medium text-ink">{language.name}</span>
                <span className="text-ink-subtle"> · {language.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ) : null}
    </Section>
  )
}
