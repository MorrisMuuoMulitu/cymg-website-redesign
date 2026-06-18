

import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, FileText, GraduationCap } from 'lucide-react'
import { MEA_ENGAGEMENTS } from '@/lib/cymg-data'

/* ------------------------------------------------------------------ */
/*  MEA Engagement Card                                                */
/* ------------------------------------------------------------------ */

function MEACard({
  name,
  status,
  description,
  index,
  reducedMotion,
}: {
  name: string
  status: string
  description: string
  index: number
  reducedMotion: boolean
}) {
  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6 flex flex-col gap-4"
    >
      {/* MEA name */}
      <h3 className="font-serif text-lg md:text-xl font-medium text-ink dark:text-paper leading-snug">
        {name}
      </h3>

      {/* Status badge */}
      <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.06em] bg-canopy-green/10 text-canopy-green dark:bg-canopy-green/20 dark:text-canopy-green">
        <span className="w-1.5 h-1.5 rounded-full bg-canopy-green" aria-hidden="true" />
        {status}
      </span>

      {/* Description */}
      <p className="text-sm text-ink-60 dark:text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Resource link card                                                 */
/* ------------------------------------------------------------------ */

function ResourceLink({
  href,
  label,
  icon: Icon,
  index,
  reducedMotion,
}: {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  index: number
  reducedMotion: boolean
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={reducedMotion ? {} : { opacity: 0, x: -16 }}
      whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
      className="
        group flex items-center gap-3
        rounded-[20px] border border-line dark:border-white/10
        bg-surface dark:bg-[#141E30]
        p-5 transition-colors duration-200
        hover:border-assembly-blue dark:hover:border-assembly-blue
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-assembly-blue
      "
    >
      <span className="shrink-0 w-10 h-10 rounded-full bg-assembly-blue/10 dark:bg-assembly-blue/20 flex items-center justify-center">
        <Icon className="w-4.5 h-4.5 text-assembly-blue dark:text-assembly-blue" aria-hidden="true" />
      </span>
      <span className="flex-1 font-serif text-sm md:text-base font-medium text-ink dark:text-paper">
        {label}
      </span>
      <ExternalLink
        className="w-4 h-4 text-ink-60 dark:text-muted-foreground group-hover:text-assembly-blue dark:group-hover:text-assembly-blue transition-colors"
        aria-hidden="true"
      />
    </motion.a>
  )
}

/* ------------------------------------------------------------------ */
/*  MEAs Section                                                       */
/* ------------------------------------------------------------------ */

export default function MEAsSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="meas"
      className="relative bg-paper dark:bg-ink py-20 md:py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-ink dark:text-paper"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Multilateral Environmental Agreements
          </motion.h2>
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono uppercase tracking-[0.04em] text-ink-60 dark:text-muted-foreground mt-3 text-xs md:text-sm"
          >
            CYMG engagement across MEA processes
          </motion.p>
        </div>

        {/* Intro paragraph */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-ink-60 dark:text-muted-foreground leading-relaxed text-base md:text-lg">
            Multilateral Environmental Agreements (MEAs) are legally binding
            instruments between states that address specific environmental
            challenges — from biodiversity loss to hazardous waste. UNEP serves
            as the secretariat for several of these conventions and provides
            coordination through programmes such as InforMEA. CYMG engages with
            MEA processes to ensure that children and youth perspectives are
            represented in international environmental law and governance.
          </p>
        </motion.div>

        {/* Engagement cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {MEA_ENGAGEMENTS.map((mea, i) => (
            <MEACard
              key={mea.name}
              name={mea.name}
              status={mea.status}
              description={mea.description}
              index={i}
              reducedMotion={reducedMotion ?? false}
            />
          ))}
        </div>

        {/* Resource links */}
        <div>
          <motion.h3
            initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-serif text-lg md:text-xl font-medium text-ink dark:text-paper mb-6"
          >
            Resources
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ResourceLink
              href="https://www.informea.org"
              label="Explore InforMEA"
              icon={FileText}
              index={0}
              reducedMotion={reducedMotion ?? false}
            />
            <ResourceLink
              href="https://www.informea.org/learn"
              label="MEA E-Learning Courses"
              icon={GraduationCap}
              index={1}
              reducedMotion={reducedMotion ?? false}
            />
            <ResourceLink
              href="https://www.informea.org/treaties"
              label="MEA Treaty Database"
              icon={FileText}
              index={2}
              reducedMotion={reducedMotion ?? false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
