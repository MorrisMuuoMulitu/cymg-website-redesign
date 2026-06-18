

import { motion, useReducedMotion } from 'framer-motion'
import TeamSection from '@/components/cymg/TeamSection'

export default function TeamPage() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0 }}
      animate={reducedMotion ? {} : { opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* ── Page Hero with Background Image ────────────────────────── */}
      <section className="relative py-20 sm:py-24 md:py-28 overflow-hidden">
        {/* Background image */}
        <img
          src="/brand-leadership.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper/80 to-paper dark:from-ink/80 dark:to-ink" />

        {/* Left accent bar */}
        <div
          className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-cymg-green dark:bg-cymg-green-light z-10"
          aria-hidden="true"
        />

        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-cymg-green dark:text-cymg-green-light mb-3">
              Team
            </p>
            <h1
              className="font-serif text-ink dark:text-paper leading-[1.1]"
              style={{
                fontSize: 'var(--text-h1)',
                fontVariationSettings: "'wght' 500, 'SOFT' 50, 'WONK' 1",
              }}
            >
              Our Team
            </h1>
            <p className="mt-4 sm:mt-5 text-ink-60 dark:text-paper/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              Run by youth volunteers across the globe — coordinators, facilitators, and focal
              points driving environmental action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Team Section Content ───────────────────────────────────── */}
      <TeamSection />
    </motion.div>
  )
}
