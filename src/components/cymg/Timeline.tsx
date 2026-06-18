

import { useState, useRef, useCallback } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import { TIMELINE } from '@/lib/cymg-data'
import type { TimelineEntry } from '@/lib/cymg-data'

/* ------------------------------------------------------------------ */
/*  Timeline card — verified entry                                    */
/* ------------------------------------------------------------------ */

function TimelineCard({
  entry,
  inView,
  reducedMotion,
}: {
  entry: TimelineEntry
  inView: boolean
  reducedMotion: boolean
}) {
  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
      animate={inView && !reducedMotion ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      className={`
        rounded-[20px] border border-line dark:border-white/10
        bg-surface dark:bg-[#141E30] p-6 md:p-8
        transition-shadow
      `}
    >
      {/* Year in large mono */}
      <span className="font-mono text-3xl md:text-4xl font-bold text-assembly-blue dark:text-assembly-blue mb-3 block">
        {entry.year}
      </span>

      {/* Title */}
      <h3
        className="font-serif text-ink dark:text-paper leading-snug mb-2"
        style={{
          fontSize: 'var(--text-h3)',
          fontVariationSettings: "'wght' 600, 'SOFT' 40, 'WONK' 1",
        }}
      >
        {entry.title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm md:text-base text-ink-60 dark:text-muted-foreground leading-relaxed">
        {entry.description}
      </p>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Timeline card — coming soon placeholder                           */
/* ------------------------------------------------------------------ */

function ComingSoonCard({
  entry,
  inView,
  reducedMotion,
}: {
  entry: TimelineEntry
  inView: boolean
  reducedMotion: boolean
}) {
  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
      animate={inView && !reducedMotion ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      className="
        rounded-[20px] border-2 border-dashed border-line dark:border-white/20
        bg-surface/50 dark:bg-[#141E30]/50 p-6 md:p-8
      "
    >
      {/* Year */}
      <span className="font-mono text-3xl md:text-4xl font-bold text-ink-60 dark:text-muted-foreground mb-3 block">
        {entry.year}
      </span>

      {/* Title */}
      <h3
        className="font-serif text-ink-60 dark:text-muted-foreground leading-snug mb-3"
        style={{
          fontSize: 'var(--text-h3)',
          fontVariationSettings: "'wght' 600, 'SOFT' 40, 'WONK' 1",
        }}
      >
        {entry.title}
      </h3>

      {/* Story in progress badge */}
      <span className="inline-block rounded-full bg-line dark:bg-white/10 text-ink-60 dark:text-muted-foreground px-4 py-1 text-xs font-mono uppercase tracking-wider">
        Story in progress
      </span>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Year rail item (desktop)                                          */
/* ------------------------------------------------------------------ */

function YearRailItem({
  year,
  isActive,
}: {
  year: number
  isActive: boolean
}) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div
        className={`
          w-3 h-3 rounded-full shrink-0 transition-all duration-300
          ${isActive
            ? 'bg-assembly-blue dark:bg-assembly-blue ring-4 ring-assembly-blue/20 dark:ring-assembly-blue/20 scale-125'
            : 'bg-line dark:bg-white/20'
          }
        `}
        aria-hidden="true"
      />
      <span
        className={`
          font-mono text-sm transition-all duration-300
          ${isActive
            ? 'text-assembly-blue dark:text-assembly-blue font-bold scale-105'
            : 'text-ink-60 dark:text-muted-foreground'
          }
        `}
      >
        {year}
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Intersection observer hook for each entry                         */
/* ------------------------------------------------------------------ */

function TimelineEntryWrapper({
  entry,
  onInView,
  reducedMotion,
}: {
  entry: TimelineEntry
  onInView: (year: number) => void
  reducedMotion: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: '-20% 0px -40% 0px', once: false })

  // Notify parent when this entry becomes visible
  const measuredRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node && inView) {
        onInView(entry.year)
      }
    },
    [inView, entry.year, onInView]
  )

  return (
    <div ref={ref}>
      <div ref={measuredRef}>
        {entry.status === 'coming-soon' ? (
          <ComingSoonCard
            entry={entry}
            inView={inView}
            reducedMotion={reducedMotion}
          />
        ) : (
          <TimelineCard
            entry={entry}
            inView={inView}
            reducedMotion={reducedMotion}
          />
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Timeline Section                                                  */
/* ------------------------------------------------------------------ */

export default function Timeline() {
  const reducedMotion = useReducedMotion()
  const [activeYear, setActiveYear] = useState<number>(TIMELINE[0]?.year ?? 1972)

  const handleInView = useCallback((year: number) => {
    setActiveYear(year)
  }, [])

  return (
    <section
      id="timeline"
      className="bg-paper dark:bg-ink py-20 md:py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <h2
            className="font-serif text-ink dark:text-paper leading-tight"
            style={{
              fontSize: 'var(--text-h2)',
              fontVariationSettings: "'wght' 500, 'SOFT' 50, 'WONK' 1",
            }}
          >
            Our Story
          </h2>
          <p className="font-mono text-sm uppercase tracking-[0.02em] text-ink-60 dark:text-muted-foreground mt-3">
            From Stockholm 1972 to today and beyond
          </p>
        </div>

        {/* Desktop: sticky year-rail + content */}
        <div className="hidden md:grid md:grid-cols-[200px_1fr] gap-10">
          {/* Left: sticky year rail */}
          <div className="relative">
            <div className="sticky top-28">
              {/* Vertical line */}
              <div
                className="absolute left-[5px] top-0 bottom-0 w-px bg-line dark:bg-white/10"
                aria-hidden="true"
              />

              {/* Year markers */}
              <nav aria-label="Timeline navigation">
                {TIMELINE.map((entry) => (
                  <button
                    key={entry.year}
                    onClick={() => {
                      document
                        .getElementById(`timeline-${entry.year}`)
                        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                    className="w-full text-left"
                    aria-label={`Jump to ${entry.year}: ${entry.title}`}
                  >
                    <YearRailItem
                      year={entry.year}
                      isActive={activeYear === entry.year}
                    />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right: content cards */}
          <div className="flex flex-col gap-6">
            {TIMELINE.map((entry) => (
              <div key={entry.year} id={`timeline-${entry.year}`}>
                <TimelineEntryWrapper
                  entry={entry}
                  onInView={handleInView}
                  reducedMotion={reducedMotion ?? false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked cards with year badge */}
        <div className="flex flex-col gap-6 md:hidden">
          {TIMELINE.map((entry, index) => {
            const inView = true // On mobile we don't use intersection observer the same way
            return (
              <div key={entry.year} className="flex gap-4">
                {/* Year badge */}
                <div className="shrink-0 flex flex-col items-center pt-2">
                  <span
                    className={`
                      font-mono text-lg font-bold
                      ${entry.status === 'verified'
                        ? 'text-assembly-blue dark:text-assembly-blue'
                        : 'text-ink-60 dark:text-muted-foreground'
                      }
                    `}
                  >
                    {entry.year}
                  </span>
                  {/* Vertical connector */}
                  {index < TIMELINE.length - 1 && (
                    <div className="w-px flex-1 bg-line dark:bg-white/10 mt-2" aria-hidden="true" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1">
                  {entry.status === 'coming-soon' ? (
                    <ComingSoonCard
                      entry={entry}
                      inView={inView}
                      reducedMotion={reducedMotion ?? false}
                    />
                  ) : (
                    <TimelineCard
                      entry={entry}
                      inView={inView}
                      reducedMotion={reducedMotion ?? false}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
