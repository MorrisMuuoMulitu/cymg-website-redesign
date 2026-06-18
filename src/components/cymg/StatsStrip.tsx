import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { STATS } from '@/lib/cymg-data'

interface StatItem {
  value: number
  suffix: string
  label: string
  isYear: boolean
}

const STAT_ITEMS: StatItem[] = [
  { value: STATS.foundingYear, suffix: '', label: 'Founded', isYear: true },
  { value: STATS.workingGroups, suffix: '', label: 'Thematic Groups', isYear: false },
  { value: 6, suffix: '', label: 'Global Regions', isYear: false },
  { value: 100, suffix: '+', label: 'Member Orgs', isYear: false },
]

function StatDisplay({
  stat,
  inView,
  reducedMotion,
}: {
  stat: StatItem
  inView: boolean
  reducedMotion: boolean
}) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || reducedMotion || hasAnimated.current) return
    hasAnimated.current = true

    const target = stat.value
    const duration = 2000
    const startTime = performance.now()

    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [inView, reducedMotion, stat.value])

  const displayValue = stat.isYear ? stat.value : reducedMotion ? stat.value : count

  return (
    <div className="flex flex-col items-center justify-center p-8 border-r border-line last:border-r-0 dark:border-white/10 w-full">
      <div className="text-4xl md:text-5xl font-extrabold text-[var(--assembly-blue)] mb-2 tabular-nums">
        {displayValue}
        {stat.suffix}
      </div>
      <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 text-center">
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-white dark:bg-slate-900 border-b border-line dark:border-white/10">
      <motion.div
        ref={ref}
        initial={reducedMotion ? {} : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STAT_ITEMS.map((stat) => (
            <StatDisplay
              key={stat.label}
              stat={stat}
              inView={inView}
              reducedMotion={reducedMotion ?? false}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
