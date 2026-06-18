

import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, ArrowRight, Users, Globe, BookOpen } from 'lucide-react'
import { useRouter } from '@/components/cymg/Router'
import type { PageName } from '@/components/cymg/Router'
import { BLOG_POSTS } from '@/lib/cymg-data'

/* ------------------------------------------------------------------ */
/*  Brand constants                                                    */
/* ------------------------------------------------------------------ */
const CYMG_GREEN = '#0B5F11'
const ASSEMBLY_BLUE = '#2A4DFF'
const CANOPY_GREEN = '#0E6B55'

/* ------------------------------------------------------------------ */
/*  Fraunces serif helper                                             */
/* ------------------------------------------------------------------ */
const fraunces = (wght = 500, soft = 50, wonk = 1) =>
  `'wght' ${wght}, 'SOFT' ${soft}, 'WONK' ${wonk}`

/* ------------------------------------------------------------------ */
/*  UN Emblem SVG — small decorative watermark                        */
/* ------------------------------------------------------------------ */
function UNEmblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Simplified UN emblem — olive branches framing a globe */}
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="3" opacity="0.3" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      {/* Latitude lines */}
      <ellipse cx="100" cy="100" rx="60" ry="20" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <ellipse cx="100" cy="100" rx="60" ry="40" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      {/* Meridian */}
      <ellipse cx="100" cy="100" rx="20" ry="60" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      {/* Left branch */}
      <path
        d="M 30 100 Q 10 70 25 40 Q 35 55 30 70 Q 25 55 15 45 Q 25 60 28 80"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.2"
      />
      {/* Right branch */}
      <path
        d="M 170 100 Q 190 70 175 40 Q 165 55 170 70 Q 175 55 185 45 Q 175 60 172 80"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.2"
      />
    </svg>
  )
}

/* ================================================================== */
/*  1. HERO SECTION — Stunning, layered, cinematic                    */
/* ================================================================== */

function HeroSection() {
  const reducedMotion = useReducedMotion()
  const { navigate } = useRouter()

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Layer 1: Primary background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        aria-hidden="true"
      />

      {/* Layer 2: YEA event photo — secondary texture, right side */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-30 mix-blend-overlay"
        style={{ backgroundImage: 'url(/brand-yea2025.jpg)' }}
        aria-hidden="true"
      />

      {/* Layer 3: Dark gradient overlay — heavy for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/85"
        aria-hidden="true"
      />

      {/* Layer 4: Vignette edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(11,18,32,0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* UN Emblem — subtle watermark, top-right corner */}
      <UNEmblem className="absolute top-8 right-8 sm:top-12 sm:right-12 w-16 h-16 sm:w-20 sm:h-20 text-white/10 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
        {/* CYMG Logo — white-filtered, prominent, with glow */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.8, y: 10 }}
          animate={reducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <div className="relative">
            {/* Glow behind logo */}
            <div
              className="absolute inset-0 blur-2xl opacity-30"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />
            <img
              src="/cymg-logo.svg"
              alt="CYMG — Children and Youth Major Group"
              className="relative w-28 sm:w-40 md:w-52 lg:w-60 h-auto brightness-0 invert drop-shadow-[0_0_24px_rgba(255,255,255,0.25)]"
            />
          </div>
        </motion.div>

        {/* Tagline — Fraunces serif, large, white */}
        <motion.h1
          initial={reducedMotion ? {} : { opacity: 0, y: 28 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="font-serif text-white leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-[var(--text-h1)]"
          style={{ fontVariationSettings: fraunces(500, 50, 1) }}
        >
          Youth Leading
          <br />
          Environmental Action
        </motion.h1>

        {/* Sub-label — mono, tracking-wider, muted */}
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          className="font-mono uppercase tracking-[0.12em] text-white/50 mt-3 sm:mt-4 md:mt-5 text-[10px] sm:text-xs md:text-sm"
        >
          Children and Youth Major Group to UNEP
        </motion.p>

        {/* CTA pills — stacked on mobile, side-by-side on desktop */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 22 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 w-full sm:w-auto"
        >
          <button
            onClick={() => navigate('join')}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-signal-lime text-ink font-bold px-8 py-3.5 text-sm md:text-base transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_20px_rgba(215,255,61,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-lime"
          >
            Get Involved
          </button>
          <button
            onClick={() => navigate('working-groups')}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-white/60 text-white font-semibold px-8 py-3.5 text-sm md:text-base transition-all duration-200 hover:bg-white/10 hover:border-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Our Work
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — subtle chevron */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0 }}
        animate={reducedMotion ? {} : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={
            reducedMotion
              ? {}
              : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <ChevronDown className="w-5 h-5 text-white/40" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ================================================================== */
/*  2. MISSION SECTION — Tight and powerful                           */
/* ================================================================== */

function MissionSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-paper dark:bg-ink py-10 sm:py-14 md:py-20 border-b border-line dark:border-white/10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 md:gap-12">
        {/* Small CYMG logo — left */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: -16 }}
          whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="shrink-0 pt-1"
        >
          <img
            src="/cymg-logo.svg"
            alt=""
            className="w-14 sm:w-16 md:w-20 h-auto"
            aria-hidden="true"
          />
        </motion.div>

        {/* Text content — right */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1"
        >
          <h2
            className="font-serif text-ink dark:text-paper leading-snug mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-[var(--text-h2)]"
            style={{ fontVariationSettings: fraunces(500, 50, 1) }}
          >
            Amplifying youth voices in global environmental governance
          </h2>
          <p className="font-sans text-ink-60 dark:text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl">
            As the official UN-recognized constituency for children and youth,
            CYMG connects the passion and expertise of young people with the
            procedural mechanisms of global environmental decision-making.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  3. STATS BAR — Crisp and clean, bg-cymg-green                    */
/* ================================================================== */

function StatsBar() {
  const reducedMotion = useReducedMotion()
  const stats = [
    { value: '2012', label: 'Founded' },
    { value: '13', label: 'Working Groups' },
    { value: '6+', label: 'Regions' },
    { value: 'UNEP', label: 'Constituency' },
  ]

  return (
    <section
      className="bg-cymg-green dark:bg-cymg-green-dark text-white"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
                style={{ fontVariationSettings: fraunces(600, 40, 0) }}
              >
                {stat.value}
              </p>
              <p className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.1em] text-white/60 mt-1 sm:mt-1.5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  4. BENTO GRID — "Organized for Impact" — Asymmetric, premium     */
/* ================================================================== */

function BentoGrid() {
  const reducedMotion = useReducedMotion()
  const { navigate } = useRouter()

  const cards = [
    {
      size: 'large' as const,
      icon: BookOpen,
      title: 'Thematic Working Groups',
      description:
        '13 working groups spanning pollution and chemicals, nature and ecosystems, and policy, governance, and finance — each led by youth focal points shaping global environmental policy.',
      linkLabel: 'Explore 13 working groups',
      linkPage: 'working-groups' as PageName,
      accentColor: CYMG_GREEN,
      iconBg: 'bg-[#0B5F11]/10 dark:bg-[#0B5F11]/20',
      iconColor: 'text-[#0B5F11] dark:text-cymg-green-light',
      linkColor: 'text-cymg-green dark:text-cymg-green-light',
    },
    {
      size: 'small' as const,
      icon: Globe,
      title: 'UNEA Engagement',
      description:
        'Tracking youth participation across UNEA cycles, from consultations to declarations and the Youth Environment Assembly.',
      linkLabel: 'Visit UNEA Hub',
      linkPage: 'unea' as PageName,
      accentColor: ASSEMBLY_BLUE,
      iconBg: 'bg-assembly-blue/10 dark:bg-dark-assembly-blue/20',
      iconColor: 'text-assembly-blue dark:text-dark-assembly-blue',
      linkColor: 'text-assembly-blue dark:text-dark-assembly-blue',
    },
    {
      size: 'small' as const,
      icon: Users,
      title: 'Global Regions',
      description:
        'Six UNEP regions and two special liaison seats connecting youth advocates across every continent.',
      linkLabel: 'View regions',
      linkPage: 'regions' as PageName,
      accentColor: CANOPY_GREEN,
      iconBg: 'bg-canopy-green/10 dark:bg-canopy-green/20',
      iconColor: 'text-canopy-green dark:text-canopy-green',
      linkColor: 'text-canopy-green dark:text-canopy-green',
    },
  ]

  return (
    <section className="bg-paper dark:bg-ink py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 14 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-14"
        >
          <p
            className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.1em] mb-2 sm:mb-3"
            style={{ color: CYMG_GREEN }}
          >
            What We Do
          </p>
          <h2
            className="font-serif text-ink dark:text-paper leading-tight"
            style={{
              fontSize: 'var(--text-h2)',
              fontVariationSettings: fraunces(500, 50, 1),
            }}
          >
            Organized for Impact
          </h2>
        </motion.div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.article
                key={card.title}
                initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => navigate(card.linkPage)}
                className={`
                  group relative flex flex-col cursor-pointer
                  rounded-[16px] sm:rounded-[20px] border border-line dark:border-white/10
                  bg-surface dark:bg-[#141E30] overflow-hidden
                  transition-shadow duration-300 hover:shadow-lg
                  ${card.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
                `}
              >
                {/* Accent bar — left edge */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 rounded-l-[16px] sm:rounded-l-[20px]"
                  style={{ backgroundColor: card.accentColor }}
                  aria-hidden="true"
                />

                {/* Card content */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1 pl-6 sm:pl-7 md:pl-9">
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full ${card.iconBg} mb-4 sm:mb-5`}
                  >
                    <Icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${card.iconColor}`}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif text-ink dark:text-paper leading-snug mb-2 sm:mb-3"
                    style={{
                      fontSize:
                        card.size === 'large'
                          ? 'var(--text-h3)'
                          : 'clamp(1.05rem, 1.4vw, 1.35rem)',
                      fontVariationSettings: fraunces(600, 40, 1),
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-ink-60 dark:text-muted-foreground leading-relaxed flex-1">
                    {card.description}
                  </p>

                  {/* Link with arrow */}
                  <div
                    className={`mt-4 sm:mt-6 flex items-center gap-1.5 text-sm font-semibold ${card.linkColor} group-hover:gap-2.5 transition-all duration-200`}
                  >
                    <span>{card.linkLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  5. STORIES & INSIGHTS — Editorial quality                        */
/* ================================================================== */

function StoriesInsights() {
  const reducedMotion = useReducedMotion()
  const { navigate } = useRouter()
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0]
  const standard = BLOG_POSTS.find((p) => !p.featured) ?? BLOG_POSTS[1]

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })

  return (
    <section className="bg-surface dark:bg-[#0B1220] py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 14 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 md:mb-14"
        >
          <div>
            <p
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.1em] mb-2 sm:mb-3"
              style={{ color: CYMG_GREEN }}
            >
              Latest Updates
            </p>
            <h2
              className="font-serif text-ink dark:text-paper leading-tight"
              style={{
                fontSize: 'var(--text-h2)',
                fontVariationSettings: fraunces(500, 50, 1),
              }}
            >
              Stories &amp; Insights
            </h2>
          </div>
          <button
            onClick={() => navigate('blog')}
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-assembly-blue dark:text-dark-assembly-blue hover:gap-2.5 transition-all duration-200"
          >
            View all stories
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>

        {/* Blog cards — 1 featured (larger) + 1 standard */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {/* Featured card — spans 3 cols */}
          <motion.article
            initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col rounded-[16px] sm:rounded-[20px] border border-line dark:border-white/10 bg-paper dark:bg-[#141E30] p-6 sm:p-7 md:p-9 md:col-span-3 transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Category tag */}
            <span
              className="inline-block self-start rounded-full px-3 py-0.5 text-[10px] sm:text-xs font-medium mb-5 sm:mb-6"
              style={{
                backgroundColor: 'rgba(11, 95, 17, 0.1)',
                color: CYMG_GREEN,
              }}
            >
              {featured.tags[0]}
            </span>

            {/* Title */}
            <h3
              className="font-serif text-ink dark:text-paper leading-snug mb-2 sm:mb-3"
              style={{
                fontSize: 'var(--text-h3)',
                fontVariationSettings: fraunces(600, 40, 1),
              }}
            >
              {featured.title}
            </h3>

            {/* Excerpt — 2 lines */}
            <p className="font-sans text-sm text-ink-60 dark:text-muted-foreground leading-relaxed flex-1 line-clamp-2">
              {featured.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-5 sm:mt-7 flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-ink-60 dark:text-muted-foreground">
              <span>{featured.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={featured.date}>{formatDate(featured.date)}</time>
            </div>
          </motion.article>

          {/* Standard card — spans 2 cols */}
          <motion.article
            initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col rounded-[16px] sm:rounded-[20px] border border-line dark:border-white/10 bg-paper dark:bg-[#141E30] p-6 sm:p-7 md:p-8 md:col-span-2 transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Category tag */}
            <span
              className="inline-block self-start rounded-full px-3 py-0.5 text-[10px] sm:text-xs font-medium mb-5 sm:mb-6"
              style={{
                backgroundColor: 'rgba(11, 95, 17, 0.1)',
                color: CYMG_GREEN,
              }}
            >
              {standard.tags[0]}
            </span>

            {/* Title */}
            <h3
              className="font-serif text-ink dark:text-paper leading-snug mb-2 sm:mb-3"
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.35rem)',
                fontVariationSettings: fraunces(600, 40, 1),
              }}
            >
              {standard.title}
            </h3>

            {/* Excerpt — 2 lines */}
            <p className="font-sans text-sm text-ink-60 dark:text-muted-foreground leading-relaxed flex-1 line-clamp-2">
              {standard.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-5 sm:mt-7 flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-ink-60 dark:text-muted-foreground">
              <span>{standard.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={standard.date}>{formatDate(standard.date)}</time>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  6. GET INVOLVED CTA — Bold and commanding, bg-cymg-green         */
/* ================================================================== */

function GetInvolvedCTA() {
  const reducedMotion = useReducedMotion()
  const { navigate } = useRouter()

  return (
    <section className="bg-cymg-green dark:bg-cymg-green-dark py-12 sm:py-14 md:py-18 lg:py-22">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-serif text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[var(--text-h2)]"
            style={{ fontVariationSettings: fraunces(600, 50, 1) }}
          >
            Ready to shape global environmental policy?
          </h2>
          <p className="mt-3 sm:mt-4 text-white/75 max-w-lg mx-auto text-sm sm:text-base md:text-lg font-sans leading-relaxed">
            Join thousands of young people making a difference.
          </p>
          <button
            onClick={() => navigate('join')}
            className="mt-6 sm:mt-8 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-signal-lime text-ink font-bold px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_rgba(215,255,61,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-lime"
          >
            Join CYMG
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  HOMEPAGE — Compose all sections with entrance animation           */
/* ================================================================== */

export default function HomePage() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0 }}
      animate={reducedMotion ? {} : { opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <MissionSection />
      <StatsBar />
      <BentoGrid />
      <StoriesInsights />
      <GetInvolvedCTA />
    </motion.div>
  )
}
