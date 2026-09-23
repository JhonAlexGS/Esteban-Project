import { useMemo } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { useLang } from '../../hooks/useLang'
import { pickYaml } from '../../lib/content'
import { ProjectCarousel } from './ProjectCarousel/ProjectCarousel'

// Contenido editable de esta sección: `content.es.yaml` / `content.en.yaml`.
const CONTENT = import.meta.glob('./content.*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export default function Projects() {
  const lang = useLang()
  const content = useMemo(() => pickYaml(CONTENT, lang) ?? {}, [lang])
  const items = content.items ?? []

  return (
    <Section id="projects">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} lead={content.lead} />

      <Reveal className="mt-16 lg:mt-20">
        <ProjectCarousel items={items} flipHint={content.flipHint} />
      </Reveal>
    </Section>
  )
}
