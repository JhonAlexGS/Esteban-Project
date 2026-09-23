import { useMemo } from 'react'
import { LevelBar } from '../../components/ui/LevelBar'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { SpotlightCard } from '../../components/ui/SpotlightCard'
import { Brand } from '../../components/ui/brands'
import { getIcon, ICONS } from '../../components/ui/icons'
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
          const esUltima = index === groups.length - 1
          // Con un número impar de tarjetas, la última quedaría sola en su fila
          // de dos columnas; se estira para cerrar el hueco.
          const cierraFila = esUltima && groups.length % 2 === 1
          // En escritorio (tres columnas) puede quedar sola en la última fila:
          // se centra para que el hueco se vea intencionado.
          const solaEnEscritorio = esUltima && groups.length % 3 === 1
          return (
            <Reveal
              key={group.title}
              variants={scaleIn}
              delay={index * 0.06}
              className={`min-w-0 ${cierraFila ? 'sm:col-span-2 lg:col-span-1' : ''} ${solaEnEscritorio ? 'lg:col-start-2' : ''}`}
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
                        {/* Cada fila lleva su cuadro: el logo de la marca si la
                            tecnología lo tiene (`brand`), y si no, el ícono de
                            la habilidad (`icon`) o, en su defecto, el de la
                            tarjeta. */}
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-line bg-surface">
                          {item.brand ? (
                            <Brand name={item.brand} label={item.name} className="h-3.5 w-3.5" />
                          ) : (
                            (() => {
                              const ItemIcon = getIcon(item.icon ?? group.icon)
                              return <ItemIcon aria-hidden="true" className="h-3.5 w-3.5 text-ink-subtle" />
                            })()
                          )}
                        </span>
                        {/* `url` es opcional: con él, el nombre enlaza a la
                            herramienta; sin él es texto normal. */}
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex min-w-0 flex-1 items-center gap-1 text-sm text-ink-muted transition-colors duration-200 hover:text-accent-ink"
                          >
                            {item.name}
                            <ICONS.arrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <span className="min-w-0 flex-1 text-sm text-ink-muted">{item.name}</span>
                        )}
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
