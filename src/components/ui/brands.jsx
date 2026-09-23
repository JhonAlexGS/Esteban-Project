import {
  SiAnthropic,
  SiArduino,
  SiC,
  SiClaude,
  SiCplusplus,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMoodle,
  SiPerplexity,
  SiPython,
  SiRaspberrypi,
  SiSiemens,
  SiZoom,
} from 'react-icons/si'

/**
 * Logos de marca de cada tecnología.
 *
 * Los archivos de contenido (`.yaml`) sólo escriben el nombre (`brand: python`)
 * y aquí se traduce al logo y su color oficial.
 *
 * Cuando una marca no tiene logo disponible en la librería de iconos (MATLAB,
 * SolidWorks, ChatGPT…), se usa un monograma: un cuadrado con sus iniciales en
 * el color de la marca. Para añadir una tecnología nueva basta con agregar una
 * línea a este mapa.
 */
const BRANDS = {
  // --- Lenguajes y desarrollo ---
  python: { Icon: SiPython, color: '#3776AB' },
  c: { Icon: SiC, color: '#5C6BC0' },
  cpp: { Icon: SiCplusplus, color: '#00599C' },
  javascript: { Icon: SiJavascript, color: '#E6B800' },
  html: { Icon: SiHtml5, color: '#E34F26' },
  arduino: { Icon: SiArduino, color: '#00979D' },
  github: { Icon: SiGithub, color: null },
  linux: { Icon: SiLinux, color: null },
  raspberry: { Icon: SiRaspberrypi, color: '#C51A4A' },

  // --- Inteligencia artificial ---
  claude: { Icon: SiClaude, color: '#D97757' },
  anthropic: { Icon: SiAnthropic, color: null },
  gemini: { Icon: SiGooglegemini, color: '#4285F4' },
  perplexity: { Icon: SiPerplexity, color: '#20808D' },
  chatgpt: { monogram: 'AI', color: '#10A37F' },
  midjourney: { monogram: 'MJ', color: '#8B7BD8' },

  // --- Ingeniería y CAD ---
  matlab: { monogram: 'M', color: '#E16737' },
  solidworks: { monogram: 'SW', color: '#E1181F' },
  solidedge: { Icon: SiSiemens, color: '#00A5A5' },
  freedfd: { monogram: 'DFD', color: '#6B70A8' },

  // --- Otras herramientas ---
  dreamweaver: { monogram: 'Dw', color: '#37C177' },
  photoshop: { monogram: 'Ps', color: '#31A8FF' },
  office: { monogram: 'O', color: '#D83B01' },
  moodle: { Icon: SiMoodle, color: '#F98012' },
  zoom: { Icon: SiZoom, color: '#0B5CFF' },
  meet: { monogram: 'G', color: '#00832D' },
}

/**
 * Logo de una tecnología, con su color de marca.
 * Si el nombre no está en el mapa, se dibuja un monograma con su inicial.
 */
export function Brand({ name, label, className = 'h-5 w-5' }) {
  const marca = BRANDS[name] ?? { monogram: String(label ?? name ?? '?').slice(0, 2) }
  // Sin color propio (GitHub, Linux) el logo hereda el color del texto: así se
  // ve tanto en el tema claro como en el oscuro.
  const style = marca.color ? { color: marca.color } : undefined

  if (marca.Icon) {
    return <marca.Icon aria-hidden="true" className={className} style={style} />
  }

  return (
    <span
      aria-hidden="true"
      style={style}
      className={`grid place-items-center font-mono text-[0.625rem] font-bold tracking-tight ${className}`}
    >
      {marca.monogram}
    </span>
  )
}
