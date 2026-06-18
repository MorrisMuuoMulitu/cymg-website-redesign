

import { useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FlaskConical,
  Leaf,
  HeartPulse,
  Recycle,
  ShieldCheck,
  Baby,
  Scale,
  TrendingUp,
  TreePine,
  Waves,
  Sun,
  Microscope,
  Banknote,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { WORKING_GROUPS, CLUSTER_COLORS, type WGCluster } from '@/lib/cymg-data'

/* ------------------------------------------------------------------ */
/*  Icon mapping by slug                                              */
/* ------------------------------------------------------------------ */

const ICON_MAP: Record<string, LucideIcon> = {
  'chemicals-waste-pollution': FlaskConical,
  'eco-faith': Leaf,
  'environmental-health': HeartPulse,
  'youth-plastic-action-network': Recycle,
  'adaptation-resilience': ShieldCheck,
  'childrens-affairs': Baby,
  'environmental-law-rights': Scale,
  'green-economy-resources': TrendingUp,
  'nature-ecosystems': TreePine,
  'ocean-science-governance': Waves,
  'ozone-climate-protection': Sun,
  'science-policy': Microscope,
  'sustainable-finance': Banknote,
}

/* ------------------------------------------------------------------ */
/*  Filter type & pills                                               */
/* ------------------------------------------------------------------ */

type FilterKey = 'all' | WGCluster

interface FilterOption {
  key: FilterKey
  label: string
  activeBg: string
  activeText: string
}

const FILTERS: FilterOption[] = [
  { key: 'all', label: 'All', activeBg: 'bg-signal-lime', activeText: 'text-ink' },
  { key: 'pollution', label: 'Pollution & Chemicals', activeBg: 'bg-clay', activeText: 'text-paper' },
  { key: 'nature', label: 'Nature & Ocean', activeBg: 'bg-canopy-green', activeText: 'text-paper' },
  { key: 'policy', label: 'Policy & Governance', activeBg: 'bg-assembly-blue dark:bg-dark-assembly-blue', activeText: 'text-paper' },
]

/* ------------------------------------------------------------------ */
/*  Animation variants                                                */
/* ------------------------------------------------------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const cardVariantsReduced: Variants = {
  hidden: {},
  visible: {},
}

/* ------------------------------------------------------------------ */
/*  Working Group Card                                                */
/* ------------------------------------------------------------------ */

function WGCard({
  wg,
  reducedMotion,
}: {
  wg: (typeof WORKING_GROUPS)[number]
  reducedMotion: boolean
}) {
  const clusterColor = CLUSTER_COLORS[wg.cluster]
  const IconComponent = ICON_MAP[wg.slug]

  return (
    <Link to={`/working-groups/${wg.slug}`} className="block h-full">
      <motion.article
        variants={reducedMotion ? cardVariantsReduced : cardVariants}
        className="group relative flex flex-col h-full rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
      >
        {/* Icon badge */}
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full ${clusterColor.bg} ${clusterColor.darkBg} mb-4`}
        >
          {IconComponent ? (
            <IconComponent
              className={`w-5 h-5 ${clusterColor.text} ${clusterColor.darkText}`}
              strokeWidth={1.8}
            />
          ) : (
            <span
              className={`text-xs font-bold ${clusterColor.text} ${clusterColor.darkText}`}
            >
              {wg.shortName.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>

        {/* Name */}
        <h3
          className="font-serif text-lg font-semibold text-ink dark:text-paper leading-snug mb-2"
        >
          {wg.name}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-ink-60 dark:text-muted-foreground line-clamp-3 leading-relaxed flex-1">
          {wg.description}
        </p>

        {/* Arrow link */}
        <div className="mt-4 flex items-center gap-1.5 text-assembly-blue dark:text-dark-assembly-blue text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
          <span>Explore</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.article>
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/*  Section Component                                                 */
/* ------------------------------------------------------------------ */

export default function WorkingGroups() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const reducedMotion = useReducedMotion()

  const filteredGroups =
    activeFilter === 'all'
      ? WORKING_GROUPS
      : WORKING_GROUPS.filter((wg) => wg.cluster === activeFilter)

  return (
    <section
      id="working-groups"
      className="bg-paper dark:bg-ink py-20 md:py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2
            className="font-serif text-ink dark:text-paper leading-tight"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Working Groups
          </h2>
          <p className="font-mono uppercase tracking-[0.02em] text-ink-60 dark:text-muted-foreground mt-3 text-sm">
            13 thematic areas across three clusters
          </p>
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter working groups by cluster">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.key
            return (
              <button
                key={filter.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-assembly-blue ${
                  isActive
                    ? `${filter.activeBg} ${filter.activeText} shadow-sm`
                    : 'bg-surface dark:bg-[#141E30] text-ink dark:text-paper border border-line dark:border-white/10 hover:bg-line/50 dark:hover:bg-white/5'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <motion.div
          key={activeFilter}
          variants={reducedMotion ? cardVariantsReduced : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredGroups.map((wg) => (
            <WGCard
              key={wg.slug}
              wg={wg}
              reducedMotion={reducedMotion ?? false}
            />
          ))}
        </motion.div>

        {/* Empty state (shouldn't happen with "All" filter, but defensive) */}
        {filteredGroups.length === 0 && (
          <p className="text-center text-ink-60 dark:text-muted-foreground py-12 font-sans">
            No working groups in this cluster yet.
          </p>
        )}
      </div>
    </section>
  )
}
