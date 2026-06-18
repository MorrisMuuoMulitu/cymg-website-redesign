

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { UNEA_ENTRIES } from '@/lib/cymg-data'
import type { UNEAEntry } from '@/lib/cymg-data'

/* ------------------------------------------------------------------ */
/*  Status badge                                                      */
/* ------------------------------------------------------------------ */

function StatusBadge({ status }: { status: UNEAEntry['status'] }) {
  const styles: Record<UNEAEntry['status'], string> = {
    upcoming:
      'bg-signal-lime text-ink',
    active:
      'bg-canopy-green text-white',
    completed:
      'bg-ink-60 text-white dark:bg-white/20 dark:text-paper',
  }

  const labels: Record<UNEAEntry['status'], string> = {
    upcoming: 'Upcoming',
    active: 'Active',
    completed: 'Completed',
  }

  return (
    <span
      className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wider ${styles[status]}`}
    >
      {labels[status]}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  UNEA entry card                                                   */
/* ------------------------------------------------------------------ */

function EntryCard({
  entry,
  isHighlighted,
  index,
  reducedMotion,
}: {
  entry: UNEAEntry
  isHighlighted: boolean
  index: number
  reducedMotion: boolean
}) {
  return (
    <motion.article
      initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className={`
        group relative rounded-[20px] border border-line dark:border-white/10
        bg-surface dark:bg-[#141E30] p-6
        transition-shadow hover:shadow-lg
        ${isHighlighted ? 'border-l-4 border-l-assembly-blue dark:border-l-assembly-blue' : ''}
        ${entry.status === 'completed' ? 'opacity-80' : ''}
      `}
    >
      {/* Status badge + cycle label */}
      <div className="flex items-center gap-3 mb-4">
        <StatusBadge status={entry.status} />
        <span className="font-mono text-xs uppercase tracking-wider text-ink-60 dark:text-muted-foreground">
          {entry.cycle}
        </span>
      </div>

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

      {/* Subtitle */}
      <p className="font-sans text-sm text-ink-60 dark:text-muted-foreground leading-relaxed mb-4">
        {entry.subtitle}
      </p>

      {/* Arrow link */}
      <a
        href={`#${entry.slug}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-assembly-blue dark:text-assembly-blue
          group-hover:gap-2 transition-all"
        aria-label={`Read more about ${entry.title}`}
      >
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </a>
    </motion.article>
  )
}

/* ------------------------------------------------------------------ */
/*  UNEA Section                                                      */
/* ------------------------------------------------------------------ */

export default function UNEASection() {
  const reducedMotion = useReducedMotion()

  // Group entries by cycle in display order
  const cycleOrder = ['UNEA-6', 'UNEA-7', 'Ongoing']
  const grouped = cycleOrder.map((cycle) => ({
    cycle,
    entries: UNEA_ENTRIES.filter((e) => e.cycle === cycle),
  }))

  return (
    <section
      id="unea"
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
            UNEA Hub
          </h2>
          <p className="font-mono text-sm uppercase tracking-[0.02em] text-ink-60 dark:text-muted-foreground mt-3">
            Track youth engagement across UNEA cycles
          </p>
        </div>

        {/* Cycle track visualization */}
        {/* Desktop: 3-column grid grouped by cycle */}
        {/* Mobile: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {grouped.map((group, groupIdx) => (
            <div key={group.cycle} className="flex flex-col gap-4">
              {/* Cycle group label — track node */}
              <div className="flex items-center gap-3 mb-2">
                {/* Track dot */}
                <div
                  className={`
                    w-3 h-3 rounded-full shrink-0
                    ${group.cycle === 'UNEA-7'
                      ? 'bg-assembly-blue dark:bg-assembly-blue ring-4 ring-assembly-blue/20 dark:ring-assembly-blue/20'
                      : group.cycle === 'Ongoing'
                        ? 'bg-canopy-green ring-4 ring-canopy-green/20'
                        : 'bg-ink-60 dark:bg-white/30'
                    }
                  `}
                  aria-hidden="true"
                />
                <span
                  className={`font-mono text-sm uppercase tracking-wider font-semibold
                    ${group.cycle === 'UNEA-7'
                      ? 'text-assembly-blue dark:text-assembly-blue'
                      : group.cycle === 'Ongoing'
                        ? 'text-canopy-green'
                        : 'text-ink-60 dark:text-muted-foreground'
                    }
                  `}
                >
                  {group.cycle}
                </span>
                {/* Horizontal track line (desktop only) */}
                {groupIdx < grouped.length - 1 && (
                  <div
                    className="hidden md:block flex-1 h-px bg-line dark:bg-white/10"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Entry cards */}
              {group.entries.map((entry, i) => (
                <EntryCard
                  key={entry.slug}
                  entry={entry}
                  isHighlighted={group.cycle === 'UNEA-7'}
                  index={groupIdx * 3 + i}
                  reducedMotion={reducedMotion ?? false}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
