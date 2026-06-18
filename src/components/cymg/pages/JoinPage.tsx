

import { motion, useReducedMotion } from 'framer-motion'
import JoinForm from '@/components/cymg/JoinForm'
import { SafeguardingSection } from '@/components/cymg/SafeguardingSection'

export default function JoinPage() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0 }}
      animate={reducedMotion ? {} : { opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-paper dark:bg-ink overflow-hidden">
        {/* Decorative green bar */}
        <div
          className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-signal-lime"
          aria-hidden="true"
        />

        {/* Decorative dot */}
        <div
          className="absolute top-8 right-8 sm:top-12 sm:right-16 w-3 h-3 rounded-full bg-signal-lime/40"
          aria-hidden="true"
        />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-cymg-green dark:text-cymg-green-light mb-3">
              Join
            </p>
            <h1
              className="font-serif text-ink dark:text-paper leading-[1.1]"
              style={{
                fontSize: 'var(--text-h1)',
                fontVariationSettings: "'wght' 500, 'SOFT' 50, 'WONK' 1",
              }}
            >
              Join CYMG
            </h1>
            <p className="mt-4 sm:mt-5 text-ink-60 dark:text-paper/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              Become part of the youth environmental movement. Your voice matters in shaping the
              future of global environmental governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Join Form ──────────────────────────────────────────────── */}
      <JoinForm />

      {/* ── Safeguarding ───────────────────────────────────────────── */}
      <SafeguardingSection />
    </motion.div>
  )
}
