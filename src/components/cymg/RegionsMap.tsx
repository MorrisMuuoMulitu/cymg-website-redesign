

import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { MapPin, Users, Globe } from 'lucide-react'
import { REGIONS, type Region } from '@/lib/cymg-data'

/* ------------------------------------------------------------------ */
/*  Region card block for the geographic grid                         */
/* ------------------------------------------------------------------ */

function RegionBlock({
  region,
  isSelected,
  onClick,
  reducedMotion,
}: {
  region: Region
  isSelected: boolean
  onClick: () => void
  reducedMotion: boolean
}) {
  const isSpecial = region.type === 'special'

  return (
    <motion.button
      onClick={onClick}
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={reducedMotion ? {} : { scale: 1.03 }}
      whileTap={reducedMotion ? {} : { scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={`
        relative flex flex-col items-center justify-center gap-1.5
        rounded-[20px] border p-4 md:p-6 text-center cursor-pointer
        transition-colors duration-200 min-h-[100px] md:min-h-[120px]
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-assembly-blue
        ${
          isSelected
            ? 'bg-assembly-blue text-white border-assembly-blue dark:bg-assembly-blue dark:border-assembly-blue dark:text-ink'
            : isSpecial
              ? 'bg-surface dark:bg-[#141E30] border-canopy-green/40 dark:border-canopy-green/30 text-ink dark:text-paper hover:border-canopy-green dark:hover:border-canopy-green'
              : 'bg-surface dark:bg-[#141E30] border-line dark:border-white/10 text-ink dark:text-paper hover:border-assembly-blue dark:hover:border-assembly-blue'
        }
      `}
      aria-pressed={isSelected}
      aria-label={`${region.name}${isSpecial ? ' (Special Liaison Seat)' : ''}`}
    >
      {/* Short name badge */}
      <span
        className={`
          text-xs font-mono uppercase tracking-[0.08em] font-semibold
          ${isSelected ? 'text-white/80 dark:text-ink/70' : 'text-ink-60 dark:text-muted-foreground'}
        `}
      >
        {region.shortName}
      </span>

      {/* Region name */}
      <span
        className={`
          font-serif text-sm md:text-base font-medium leading-tight
          ${isSelected ? 'text-white dark:text-ink' : 'text-ink dark:text-paper'}
        `}
      >
        {region.name}
      </span>

      {/* Type indicator dot for special seats */}
      {isSpecial && (
        <span
          className={`
            absolute top-2.5 right-2.5 w-2 h-2 rounded-full
            ${isSelected ? 'bg-signal-lime' : 'bg-canopy-green'}
          `}
          aria-label="Special Liaison Seat"
        />
      )}
    </motion.button>
  )
}

/* ------------------------------------------------------------------ */
/*  Info panel shown when a region is selected                        */
/* ------------------------------------------------------------------ */

function RegionInfoPanel({
  region,
  onClose,
  reducedMotion,
}: {
  region: Region
  onClose: () => void
  reducedMotion: boolean
}) {
  const isSpecial = region.type === 'special'

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 10, height: 0 }}
      animate={reducedMotion ? {} : { opacity: 1, y: 0, height: 'auto' }}
      exit={reducedMotion ? {} : { opacity: 0, y: -10, height: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6 overflow-hidden"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-serif text-xl md:text-2xl font-medium text-ink dark:text-paper">
            {region.name}
          </h3>

          {/* Type badge */}
          <span
            className={`
              inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.06em]
              ${
                isSpecial
                  ? 'bg-canopy-green/10 text-canopy-green dark:bg-canopy-green/20 dark:text-canopy-green'
                  : 'bg-assembly-blue/10 text-assembly-blue dark:bg-assembly-blue/20 dark:text-assembly-blue'
              }
            `}
          >
            {isSpecial ? (
              <Users className="w-3 h-3" aria-hidden="true" />
            ) : (
              <Globe className="w-3 h-3" aria-hidden="true" />
            )}
            {isSpecial ? 'Special Liaison Seat' : 'Standard UNEP Region'}
          </span>

          {/* Placeholder info */}
          <p className="mt-4 text-sm text-ink-60 dark:text-muted-foreground leading-relaxed">
            Regional facilitator details coming soon.
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-ink-60 dark:text-muted-foreground hover:bg-line dark:hover:bg-white/10 transition-colors"
          aria-label="Close region details"
        >
          &times;
        </button>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Regions Map Section                                               */
/* ------------------------------------------------------------------ */

export default function RegionsMap() {
  const reducedMotion = useReducedMotion()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedRegion = REGIONS.find((r) => r.id === selectedId) ?? null

  const standardRegions = REGIONS.filter((r) => r.type === 'standard')
  const specialRegions = REGIONS.filter((r) => r.type === 'special')

  return (
    <section
      id="regions"
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
            Our Regions
          </motion.h2>
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono uppercase tracking-[0.04em] text-ink-60 dark:text-muted-foreground mt-3 text-xs md:text-sm"
          >
            Six UNEP regions &amp; two special liaison seats
          </motion.p>
        </div>

        {/* Geographic grid — desktop layout mimics world positions */}
        <div className="hidden md:block">
          {/* Row 1: Europe + Asia-Pacific */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1" />
            <div className="flex-1">
              <RegionBlock
                region={standardRegions.find((r) => r.id === 'europe')!}
                isSelected={selectedId === 'europe'}
                onClick={() => setSelectedId(selectedId === 'europe' ? null : 'europe')}
                reducedMotion={reducedMotion ?? false}
              />
            </div>
            <div className="w-4" />
            <div className="flex-1">
              <RegionBlock
                region={standardRegions.find((r) => r.id === 'asia-pacific')!}
                isSelected={selectedId === 'asia-pacific'}
                onClick={() => setSelectedId(selectedId === 'asia-pacific' ? null : 'asia-pacific')}
                reducedMotion={reducedMotion ?? false}
              />
            </div>
            <div className="flex-1" />
          </div>

          {/* Row 2: N. America + West Asia */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <RegionBlock
                region={standardRegions.find((r) => r.id === 'north-america')!}
                isSelected={selectedId === 'north-america'}
                onClick={() => setSelectedId(selectedId === 'north-america' ? null : 'north-america')}
                reducedMotion={reducedMotion ?? false}
              />
            </div>
            <div className="flex-1" />
            <div className="w-4" />
            <div className="flex-1" />
            <div className="flex-1">
              <RegionBlock
                region={standardRegions.find((r) => r.id === 'west-asia')!}
                isSelected={selectedId === 'west-asia'}
                onClick={() => setSelectedId(selectedId === 'west-asia' ? null : 'west-asia')}
                reducedMotion={reducedMotion ?? false}
              />
            </div>
          </div>

          {/* Row 3: LAC + Africa */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <RegionBlock
                region={standardRegions.find((r) => r.id === 'lac')!}
                isSelected={selectedId === 'lac'}
                onClick={() => setSelectedId(selectedId === 'lac' ? null : 'lac')}
                reducedMotion={reducedMotion ?? false}
              />
            </div>
            <div className="w-4" />
            <div className="flex-1">
              <RegionBlock
                region={standardRegions.find((r) => r.id === 'africa')!}
                isSelected={selectedId === 'africa'}
                onClick={() => setSelectedId(selectedId === 'africa' ? null : 'africa')}
                reducedMotion={reducedMotion ?? false}
              />
            </div>
            <div className="flex-1" />
            <div className="flex-1" />
          </div>

          {/* Row 4: Special seats */}
          <div className="flex gap-4 mt-6">
            {specialRegions.map((region) => (
              <div key={region.id} className="flex-1">
                <RegionBlock
                  region={region}
                  isSelected={selectedId === region.id}
                  onClick={() => setSelectedId(selectedId === region.id ? null : region.id)}
                  reducedMotion={reducedMotion ?? false}
                />
              </div>
            ))}
            <div className="flex-1" />
            <div className="flex-1" />
            <div className="flex-1" />
            <div className="flex-1" />
          </div>
        </div>

        {/* Mobile: stacked list view */}
        <div className="md:hidden flex flex-col gap-3">
          {REGIONS.map((region) => (
            <RegionBlock
              key={region.id}
              region={region}
              isSelected={selectedId === region.id}
              onClick={() => setSelectedId(selectedId === region.id ? null : region.id)}
              reducedMotion={reducedMotion ?? false}
            />
          ))}
        </div>

        {/* Info panel */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            {selectedRegion && (
              <RegionInfoPanel
                key={selectedRegion.id}
                region={selectedRegion}
                onClose={() => setSelectedId(null)}
                reducedMotion={reducedMotion ?? false}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Map pin icon decoration */}
        <div className="flex justify-center mt-8">
          <MapPin className="w-5 h-5 text-ink-60/30 dark:text-muted-foreground/30" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
