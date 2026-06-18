
import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { GOVERNANCE_NODES, type GovernanceNode } from '@/lib/cymg-data'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'

/* ------------------------------------------------------------------ */
/*  Level → color mapping                                              */
/* ------------------------------------------------------------------ */

const levelStyles: Record<
  number,
  { bg: string; border: string; text: string; darkBg: string; darkBorder: string; darkText: string }
> = {
  0: {
    bg: 'bg-assembly-blue',
    border: 'border-assembly-blue',
    text: 'text-white',
    darkBg: 'dark:bg-assembly-blue',
    darkBorder: 'dark:border-assembly-blue',
    darkText: 'dark:text-ink',
  },
  1: {
    bg: 'bg-assembly-blue-deep',
    border: 'border-assembly-blue-deep',
    text: 'text-white',
    darkBg: 'dark:bg-assembly-blue-deep',
    darkBorder: 'dark:border-assembly-blue-deep',
    darkText: 'dark:text-paper',
  },
  2: {
    bg: 'bg-assembly-blue-deep',
    border: 'border-assembly-blue-deep',
    text: 'text-white',
    darkBg: 'dark:bg-assembly-blue-deep',
    darkBorder: 'dark:border-assembly-blue-deep',
    darkText: 'dark:text-paper',
  },
  3: {
    bg: 'bg-canopy-green',
    border: 'border-canopy-green',
    text: 'text-white',
    darkBg: 'dark:bg-canopy-green',
    darkBorder: 'dark:border-canopy-green',
    darkText: 'dark:text-paper',
  },
  4: {
    bg: 'bg-clay',
    border: 'border-clay',
    text: 'text-white',
    darkBg: 'dark:bg-clay',
    darkBorder: 'dark:border-clay',
    darkText: 'dark:text-paper',
  },
}

/* ------------------------------------------------------------------ */
/*  Node component for desktop tree view                               */
/* ------------------------------------------------------------------ */

function GovernanceNodeBlock({
  node,
  reducedMotion,
}: {
  node: GovernanceNode
  reducedMotion: boolean
}) {
  const style = levelStyles[node.level] ?? levelStyles[4]
  const [mobileExpanded, setMobileExpanded] = useState(false)

  return (
    <>
      {/* Desktop: Tooltip-based hover */}
      <div className="hidden md:block">
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                initial={reducedMotion ? {} : { opacity: 0, scale: 0.92 }}
                whileInView={reducedMotion ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                whileHover={reducedMotion ? {} : { scale: 1.04 }}
                className={`
                  cursor-default rounded-[16px] border-2 px-5 py-3 text-center
                  transition-shadow duration-200 hover:shadow-lg
                  ${style.bg} ${style.border} ${style.text}
                  ${style.darkBg} ${style.darkBorder} ${style.darkText}
                `}
              >
                <span className="font-serif text-sm md:text-base font-medium leading-tight">
                  {node.label}
                </span>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              sideOffset={8}
              className="max-w-[280px] bg-surface dark:bg-[#141E30] text-ink dark:text-paper border border-line dark:border-white/10 shadow-lg rounded-[12px] px-4 py-3 text-sm leading-relaxed"
            >
              <p>{node.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Mobile: tap to expand description inline */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className={`
            w-full cursor-pointer rounded-[16px] border-2 px-5 py-3 text-left
            transition-shadow duration-200 active:scale-[0.98]
            ${style.bg} ${style.border} ${style.text}
            ${style.darkBg} ${style.darkBorder} ${style.darkText}
          `}
          aria-expanded={mobileExpanded}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-serif text-sm font-medium leading-tight">
              {node.label}
            </span>
            <span className="text-xs opacity-70 shrink-0">
              {mobileExpanded ? '▲' : '▼'}
            </span>
          </div>
        </button>
        <AnimatePresence>
          {mobileExpanded && (
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, height: 0 }}
              animate={reducedMotion ? {} : { opacity: 1, height: 'auto' }}
              exit={reducedMotion ? {} : { opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <p className="px-4 py-3 text-sm text-ink-60 dark:text-muted-foreground leading-relaxed border border-t-0 border-line dark:border-white/10 rounded-b-[12px]">
                {node.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Connector line between levels (desktop only)                       */
/* ------------------------------------------------------------------ */

function VerticalConnector({ className = '' }: { className?: string }) {
  return (
    <div
      className={`hidden md:flex flex-col items-center ${className}`}
      aria-hidden="true"
    >
      <div className="w-px h-6 bg-line dark:bg-white/15" />
      <div className="w-2 h-2 rounded-full bg-line dark:bg-white/20" />
      <div className="w-px h-4 bg-line dark:bg-white/15" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Desktop tree layout                                                */
/* ------------------------------------------------------------------ */

function DesktopTree({ reducedMotion }: { reducedMotion: boolean }) {
  const level0 = GOVERNANCE_NODES.filter((n) => n.level === 0)
  const level1 = GOVERNANCE_NODES.filter((n) => n.level === 1)
  const level2 = GOVERNANCE_NODES.filter((n) => n.level === 2)
  const level3 = GOVERNANCE_NODES.filter((n) => n.level === 3)
  const level4 = GOVERNANCE_NODES.filter((n) => n.level === 4)

  return (
    <div className="hidden md:flex flex-col items-center gap-0">
      {/* Level 0: UNEA */}
      {level0.map((node) => (
        <GovernanceNodeBlock key={node.id} node={node} reducedMotion={reducedMotion} />
      ))}

      <VerticalConnector />

      {/* Level 1: Committee */}
      {level1.map((node) => (
        <GovernanceNodeBlock key={node.id} node={node} reducedMotion={reducedMotion} />
      ))}

      <VerticalConnector />

      {/* Level 2: Steering */}
      {level2.map((node) => (
        <GovernanceNodeBlock key={node.id} node={node} reducedMotion={reducedMotion} />
      ))}

      <VerticalConnector />

      {/* Level 3: Side-by-side */}
      <div className="flex items-start gap-8">
        {level3.map((node) => (
          <div key={node.id} className="flex flex-col items-center">
            <GovernanceNodeBlock node={node} reducedMotion={reducedMotion} />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-16">
         <VerticalConnector />
         <VerticalConnector />
      </div>

      {/* Level 4: Bottom row */}
      <div className="flex items-start gap-12">
        {level4.map((node) => (
          <GovernanceNodeBlock key={node.id} node={node} reducedMotion={reducedMotion} />
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  GovernanceDiagram Component                                      */
/* ------------------------------------------------------------------ */

export default function GovernanceDiagram() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-surface dark:bg-[#0B1220] py-20 px-6 overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-ink dark:text-paper"
            style={{
              fontSize: 'var(--text-h2)',
              fontVariationSettings: "'wght' 600, 'SOFT' 50, 'WONK' 1",
            }}
          >
            Governance Structure
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground mt-3">
            A nested framework for youth inclusion
          </p>
        </div>

        {/* The Tree */}
        <div className="min-w-[800px] md:min-w-0">
          <DesktopTree reducedMotion={reducedMotion ?? false} />
        </div>
      </div>
    </section>
  )
}
