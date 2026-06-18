

import { useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { User, ArrowRight } from 'lucide-react'
import { REGIONS } from '@/lib/cymg-data'

/* ------------------------------------------------------------------ */
/*  Team category types                                               */
/* ------------------------------------------------------------------ */

type TeamCategory =
  | 'all'
  | 'global-coordinators'
  | 'regional-facilitators'
  | 'thematic-facilitators'
  | 'operations-team'

interface TeamMember {
  id: string
  name: string
  role: string
  category: TeamCategory
  tag: string
}

/* ------------------------------------------------------------------ */
/*  Placeholder team data                                             */
/* ------------------------------------------------------------------ */

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'gc-1',
    name: 'Global Coordinator',
    role: 'Global Coordinator',
    category: 'global-coordinators',
    tag: 'Global',
  },
  {
    id: 'gc-2',
    name: 'Global Coordinator',
    role: 'Global Coordinator',
    category: 'global-coordinators',
    tag: 'Global',
  },
  {
    id: 'rf-1',
    name: 'Regional Facilitator',
    role: 'Regional Facilitator',
    category: 'regional-facilitators',
    tag: REGIONS.find((r) => r.id === 'africa')?.shortName ?? 'AF',
  },
  {
    id: 'rf-2',
    name: 'Regional Facilitator',
    role: 'Regional Facilitator',
    category: 'regional-facilitators',
    tag: REGIONS.find((r) => r.id === 'europe')?.shortName ?? 'EU',
  },
  {
    id: 'tf-1',
    name: 'Focal Point',
    role: 'Focal Point, Chemicals & Waste',
    category: 'thematic-facilitators',
    tag: 'Chemicals & Waste',
  },
  {
    id: 'tf-2',
    name: 'Focal Point',
    role: 'Focal Point, Ocean Science',
    category: 'thematic-facilitators',
    tag: 'Ocean',
  },
  {
    id: 'ot-1',
    name: 'Communications Lead',
    role: 'Communications Lead',
    category: 'operations-team',
    tag: 'Operations',
  },
  {
    id: 'ot-2',
    name: 'Website Coordinator',
    role: 'Website Coordinator',
    category: 'operations-team',
    tag: 'Operations',
  },
]

/* ------------------------------------------------------------------ */
/*  Filter config                                                     */
/* ------------------------------------------------------------------ */

interface FilterOption {
  key: TeamCategory
  label: string
}

const FILTERS: FilterOption[] = [
  { key: 'all', label: 'All' },
  { key: 'global-coordinators', label: 'Global Coordinators' },
  { key: 'regional-facilitators', label: 'Regional Facilitators' },
  { key: 'thematic-facilitators', label: 'Thematic Facilitators' },
  { key: 'operations-team', label: 'Operations Team' },
]

/* ------------------------------------------------------------------ */
/*  Animation variants                                                */
/* ------------------------------------------------------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const cardVariantsReduced: Variants = {
  hidden: {},
  visible: {},
}

/* ------------------------------------------------------------------ */
/*  PersonCard (inline)                                               */
/* ------------------------------------------------------------------ */

function PersonCard({
  member,
  reducedMotion,
}: {
  member: TeamMember
  reducedMotion: boolean
}) {
  return (
    <motion.article
      variants={reducedMotion ? cardVariantsReduced : cardVariants}
      className="group flex flex-col items-center text-center rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
    >
      {/* Portrait fallback */}
      <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-ink/10 dark:bg-paper/10 mb-4">
        <User className="w-8 h-8 text-ink/30 dark:text-paper/30" />
      </div>

      {/* Name */}
      <h3 className="font-sans text-base font-semibold text-ink dark:text-paper leading-snug">
        {member.name}
      </h3>

      {/* Role */}
      <p className="font-mono uppercase text-[0.68rem] tracking-[0.04em] text-assembly-blue dark:text-dark-assembly-blue mt-1">
        {member.role}
      </p>

      {/* Tag badge */}
      <span className="mt-3 inline-block rounded-full bg-ink/5 dark:bg-paper/10 px-3 py-0.5 text-xs font-sans text-ink-60 dark:text-muted-foreground">
        {member.tag}
      </span>
    </motion.article>
  )
}

/* ------------------------------------------------------------------ */
/*  Join CTA Card                                                     */
/* ------------------------------------------------------------------ */

function JoinCard({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.article
      variants={reducedMotion ? cardVariantsReduced : cardVariants}
      className="flex flex-col items-center justify-center text-center rounded-[20px] border-2 border-dashed border-line dark:border-white/15 bg-surface/50 dark:bg-[#141E30]/50 p-6 min-h-[240px] transition-colors hover:bg-surface dark:hover:bg-[#141E30]"
    >
      <p className="font-serif text-lg font-semibold text-ink dark:text-paper leading-snug mb-2">
        Join our team
      </p>
      <p className="font-sans text-sm text-ink-60 dark:text-muted-foreground mb-5 leading-relaxed">
        CYMG is always looking for passionate volunteers
      </p>
      <a
        href="#join"
        className="inline-flex items-center gap-1.5 rounded-full bg-signal-lime text-ink font-semibold px-6 py-2.5 text-sm transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-assembly-blue"
      >
        Get Involved
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.article>
  )
}

/* ------------------------------------------------------------------ */
/*  Section Component                                                 */
/* ------------------------------------------------------------------ */

export default function TeamSection() {
  const [activeFilter, setActiveFilter] = useState<TeamCategory>('all')
  const reducedMotion = useReducedMotion()

  const filteredMembers =
    activeFilter === 'all'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === activeFilter)

  return (
    <section
      id="team"
      className="bg-surface dark:bg-[#0B1220] py-20 md:py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2
            className="font-serif text-ink dark:text-paper leading-tight"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Our Team
          </h2>
          <p className="font-sans text-ink-60 dark:text-muted-foreground mt-3 text-base">
            Run by youth volunteers across the globe
          </p>
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter team by category">
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
                    ? 'bg-assembly-blue dark:bg-dark-assembly-blue text-paper shadow-sm'
                    : 'bg-paper dark:bg-[#141E30] text-ink dark:text-paper border border-line dark:border-white/10 hover:bg-line/50 dark:hover:bg-white/5'
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredMembers.map((member) => (
            <PersonCard
              key={member.id}
              member={member}
              reducedMotion={reducedMotion ?? false}
            />
          ))}

          {/* Join CTA card — always visible */}
          <JoinCard reducedMotion={reducedMotion ?? false} />
        </motion.div>
      </div>
    </section>
  )
}
