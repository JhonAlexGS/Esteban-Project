import { motion, useReducedMotion } from 'framer-motion'
import { EASE_EXPO } from '../../lib/motion'

/**
 * Barra de nivel de dominio (0–100).
 *
 * Se llena al entrar en pantalla, una sola vez. Con `prefers-reduced-motion`
 * aparece ya llena, sin animación.
 *
 * El valor también se expone con roles ARIA para quien navega con lector de
 * pantalla, porque el relleno de la barra por sí solo no se puede leer.
 */
export function LevelBar({ level, label, showValue = true }) {
  const prefersReducedMotion = useReducedMotion()
  const valor = Math.max(0, Math.min(100, Number(level) || 0))

  return (
    <div className="flex items-center gap-3">
      <div
        role="progressbar"
        aria-valuenow={valor}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="h-1.5 w-full overflow-hidden rounded-full bg-line"
      >
        <motion.span
          initial={prefersReducedMotion ? false : { width: 0 }}
          whileInView={{ width: `${valor}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE_EXPO }}
          className="block h-full rounded-full bg-gradient-to-r from-accent to-accent-bright"
          style={prefersReducedMotion ? { width: `${valor}%` } : undefined}
        />
      </div>
      {showValue ? (
        <span className="w-9 shrink-0 text-right font-mono text-[0.6875rem] text-ink-subtle">
          {valor}%
        </span>
      ) : null}
    </div>
  )
}
