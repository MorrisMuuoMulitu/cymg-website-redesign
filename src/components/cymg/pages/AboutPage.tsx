

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, BookOpen } from 'lucide-react'
import About from '@/components/cymg/About'
import Timeline from '@/components/cymg/Timeline'
import GovernanceDiagram from '@/components/cymg/GovernanceDiagram'
import { MANDATE_REFS } from '@/lib/cymg-data'
import type { MandateRef } from '@/lib/cymg-data'

/* ------------------------------------------------------------------ */
/*  Mandate expandable item                                            */
/* ------------------------------------------------------------------ */

function MandateItem({
  mandate,
  index,
  reducedMotion,
}: {
  mandate: MandateRef
  index: number
  reducedMotion: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      className="border border-line dark:border-white/10 rounded-xl overflow-hidden bg-surface dark:bg-[#141E30] transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 sm:gap-4 p-4 sm:p-5 text-left hover:bg-paper/50 dark:hover:bg-white/[0.02] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cymg-green"
        aria-expanded={open}
      >
        {/* Mono code */}
        <code className="font-mono text-xs sm:text-sm text-cymg-green dark:text-cymg-green-light bg-cymg-green/10 dark:bg-cymg-green/20 px-2 py-1 rounded whitespace-nowrap shrink-0">
          {mandate.code}
        </code>

        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm sm:text-base text-ink dark:text-paper leading-snug">
            {mandate.title}
          </p>
        </div>

        <ChevronDown
          className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-ink-60 dark:text-paper/50 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Expandable content */}
      {open && (
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, height: 0 }}
          animate={reducedMotion ? {} : { opacity: 1, height: 'auto' }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0"
        >
          <div className="border-t border-line dark:border-white/10 pt-4">
            <p className="text-sm text-ink-60 dark:text-paper/60 leading-relaxed">
              {mandate.plainLanguage}
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  About Page                                                         */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
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
          className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-cymg-green dark:bg-cymg-green-light"
          aria-hidden="true"
        />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-cymg-green dark:text-cymg-green-light mb-3">
              About
            </p>
            <h1
              className="font-serif text-ink dark:text-paper leading-[1.1]"
              style={{
                fontSize: 'var(--text-h1)',
                fontVariationSettings: "'wght' 500, 'SOFT' 50, 'WONK' 1",
              }}
            >
              About CYMG
            </h1>
            <p className="mt-4 sm:mt-5 text-ink-60 dark:text-paper/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              The official UN-recognized constituency for children and youth engaging with UNEP,
              UNEA, and UNEP-administered Multilateral Environmental Agreements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── About Section with Brand Image ─────────────────────────── */}
      <section className="bg-paper dark:bg-ink">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Brand image — decorative, right side on desktop */}
            <div className="relative w-full lg:w-[340px] xl:w-[400px] shrink-0">
              <img
                src="/brand-cymg1.jpeg"
                alt="CYMG community members at a United Nations environmental assembly"
                className="w-full h-48 sm:h-56 lg:h-full object-cover lg:sticky lg:top-[72px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-paper/20 dark:lg:to-ink/20" />
            </div>
            {/* About content */}
            <div className="flex-1 min-w-0">
              <About />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Mandate Section ─────────────────────────────────────── */}
      <section className="bg-surface dark:bg-[#0B1220] py-16 sm:py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cymg-green/10 dark:bg-cymg-green/20">
                <BookOpen className="w-4.5 h-4.5 text-cymg-green dark:text-cymg-green-light" />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-cymg-green dark:text-cymg-green-light">
                Legal Basis
              </p>
            </div>
            <h2
              className="font-serif text-ink dark:text-paper leading-[1.15] mb-3"
              style={{
                fontSize: 'var(--text-h2)',
                fontVariationSettings: "'wght' 500, 'SOFT' 50, 'WONK' 1",
              }}
            >
              Our Mandate
            </h2>
            <p className="text-ink-60 dark:text-paper/60 max-w-2xl text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              CYMG&apos;s participation in UNEP and UNEA processes is grounded in these resolutions,
              frameworks, and engagement mechanisms. Click any item to read a plain-language summary.
            </p>

            {/* Mandate items list */}
            <div className="flex flex-col gap-3">
              {MANDATE_REFS.map((mandate, i) => (
                <MandateItem
                  key={mandate.code}
                  mandate={mandate}
                  index={i}
                  reducedMotion={reducedMotion ?? false}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────────────── */}
      <Timeline />

      {/* ── Governance Diagram ──────────────────────────────────────── */}
      <GovernanceDiagram />
    </motion.div>
  )
}
