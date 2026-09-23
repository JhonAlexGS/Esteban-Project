import { useMemo } from 'react'
import { Reveal } from '../../components/ui/Reveal'
import { Section, SectionHeading } from '../../components/ui/Section'
import { Markdown } from '../../components/ui/Markdown'
import { useLang } from '../../hooks/useLang'
import { pickMarkdown } from '../../lib/content'
import { ProfileCarousel } from './ProfileCarousel/ProfileCarousel'

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

  return (
    <Section id="about">
      <SectionHeading eyebrow={data.eyebrow} title={data.title} lead={data.lead} />

      {/* `items-start`: el texto arranca justo debajo del titular de la sección.
          Con `items-center` quedaba centrado contra el carrusel, que es más
          alto, y se abría un hueco grande bajo el título. */}
      <div className="mt-10 grid items-start gap-12 lg:mt-12 lg:grid-cols-[1fr_minmax(0,32rem)] lg:gap-10">
        <Reveal className="max-w-2xl">
          <Markdown>{body}</Markdown>
        </Reveal>

        {/* Los cuatro frentes de trabajo, en carrusel: la tarjeta activa va al
            frente y las vecinas se alejan hacia los lados. */}
        <Reveal>
          <ProfileCarousel items={data.pillars ?? []} />
        </Reveal>
      </div>

    </Section>
  )
}
