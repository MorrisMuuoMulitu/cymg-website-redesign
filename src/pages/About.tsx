import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, BookOpen, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import NewsletterCTA from '@/components/ui/NewsletterCTA';
import { timelineEvents } from '@/data/timeline';
import { MANDATE_REFS } from '@/lib/cymg-data';

const PULL_QUOTE =
  'ensuring that young people’s voices, expertise, and demands are heard in the halls of environmental decision-making';

export default function About() {
  const [openMandate, setOpenMandate] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative pt-16 pb-14 md:pb-20 bg-surface border-b border-line overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-1.5 h-full"
          style={{ backgroundColor: 'var(--cymg-green)' }}
          aria-hidden="true"
        />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About CYMG' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p
              className="font-mono text-xs uppercase tracking-[0.15em] mb-3 text-[var(--cymg-green)]"
            >
              About
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold text-ink leading-[1.15]">
              About <span style={{ color: 'var(--cymg-green)' }}>CYMG</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl max-w-2xl leading-relaxed text-[var(--ink-60)]">
              The official UN-recognized constituency for children and youth engaging with UNEP,
              UNEA, and UNEP-administered Multilateral Environmental Agreements.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* ── Editorial: What is CYMG ─────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-28">
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <span
              className="font-mono text-xs uppercase tracking-[0.2em] origin-center -rotate-90 whitespace-nowrap mt-4"
              style={{ color: 'var(--ink-60)' }}
              aria-hidden="true"
            >
              What is CYMG
            </span>
          </div>

          <div className="lg:col-span-7">
            <div className="lg:hidden mb-6">
              <span
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: 'var(--ink-60)' }}
              >
                What is CYMG
              </span>
            </div>
            <p
              className="text-lg md:text-xl leading-[1.7]"
              style={{ color: 'var(--ink)' }}
            >
              <span
                className="font-display float-left mr-3 -mt-2 leading-none"
                style={{
                  fontSize: '3.5rem',
                  color: 'var(--cymg-green)',
                }}
                aria-hidden="true"
              >
                T
              </span>
              he Children and Youth Major Group to UNEP (CYMG) is the official
              UN-recognized constituency for children and youth engaging with the
              United Nations Environment Programme (UNEP), the United Nations
              Environment Assembly (UNEA), and UNEP-administered Multilateral
              Environmental Agreements (MEAs).
            </p>
            <p
              className="mt-6 text-base md:text-lg leading-[1.7]"
              style={{ color: 'var(--ink)' }}
            >
              Formed in 2012, CYMG is run almost entirely by youth volunteers across
              six world regions. It coordinates 13 thematic working groups spanning
              pollution and chemicals, nature and ecosystems, and policy, governance,
              and finance — {PULL_QUOTE}.
            </p>

            <blockquote
              className="mt-8 pl-6 py-2 border-l-4"
              style={{ borderColor: 'var(--cymg-green)' }}
            >
              <p
                className="font-display text-lg md:text-xl leading-[1.65]"
                style={{ color: 'var(--ink)' }}
              >
                {PULL_QUOTE}
              </p>
            </blockquote>

            <p
              className="mt-8 text-base md:text-lg leading-[1.7]"
              style={{ color: 'var(--ink)' }}
            >
              From the negotiation of international plastics treaties to the protection
              of the ozone layer, from biodiversity frameworks to sustainable finance,
              CYMG connects the passion and knowledge of the world’s youth with the
              procedural mechanisms of global environmental governance.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div
              className="rounded-sm border p-8 md:p-10 relative"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--line)',
              }}
            >
              <div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-sm flex items-center justify-center text-2xl font-bold"
                style={{
                  backgroundColor: 'var(--cymg-green)',
                  color: 'var(--paper)',
                }}
              >
              "
              </div>
              <p
                className="text-xl font-bold leading-tight italic mb-6"
                style={{ color: 'var(--ink)' }}
              >
                Established through Agenda 21 of the Rio Conference in 1992, CYMG has
                been at the forefront of youth advocacy within the UN system.
              </p>
              <footer
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--ink-60)' }}
              >
                — Rio Conference Mandate
              </footer>
            </div>
          </div>
        </section>

        {/* ── Mandate ─────────────────────────────────────────── */}
        <section className="mb-28">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-sm"
              style={{ backgroundColor: 'rgba(30,77,50,0.1)' }}
            >
              <BookOpen className="w-5 h-5" style={{ color: 'var(--cymg-green)' }} />
            </div>
            <p
              className="font-mono text-xs uppercase tracking-[0.15em]"
              style={{ color: 'var(--cymg-green)' }}
            >
              Legal Basis
            </p>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--ink)' }}
          >
            Our Mandate
          </h2>
          <p
            className="max-w-2xl text-base md:text-lg leading-relaxed mb-10"
            style={{ color: 'var(--ink-60)' }}
          >
            CYMG&apos;s participation in UNEP and UNEA processes is grounded in these
            resolutions, frameworks, and engagement mechanisms. Click any item to read
            a plain-language summary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MANDATE_REFS.map((mandate, i) => {
              const isOpen = openMandate === i;
              return (
                <div
                  key={mandate.code}
                  className="rounded-sm border overflow-hidden transition-colors"
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--line)',
                  }}
                >
                  <button
                    onClick={() => setOpenMandate(isOpen ? null : i)}
                    className="w-full flex items-start gap-3 sm:gap-4 p-4 sm:p-5 text-left transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                    aria-expanded={isOpen}
                  >
                    <code
                      className="font-mono text-xs sm:text-sm px-2 py-1 rounded whitespace-nowrap shrink-0"
                      style={{
                        color: 'var(--cymg-green)',
                        backgroundColor: 'rgba(30,77,50,0.1)',
                      }}
                    >
                      {mandate.code}
                    </code>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-medium text-sm sm:text-base leading-snug"
                        style={{ color: 'var(--ink)' }}
                      >
                        {mandate.title}
                      </p>
                    </div>
                    {isOpen ? (
                      <Minus size={20} style={{ color: 'var(--ink-60)' }} />
                    ) : (
                      <Plus size={20} style={{ color: 'var(--ink-60)' }} />
                    )}
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="px-4 sm:px-5 pb-5 pt-0"
                    >
                      <div
                        className="border-t pt-4 text-sm leading-relaxed"
                        style={{ color: 'var(--ink-60)', borderColor: 'var(--line)' }}
                      >
                        {mandate.plainLanguage}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────────────────── */}
        <section className="mb-28">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-3"
            style={{ color: 'var(--cymg-green)' }}
          >
            History
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ color: 'var(--ink)' }}
          >
            Milestones
          </h2>

          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
              style={{ backgroundColor: 'var(--line)' }}
              aria-hidden="true"
            />
            <div className="space-y-8">
              {timelineEvents.map((event, i) => (
                <div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-sm -translate-x-1/2 mt-2"
                    style={{ backgroundColor: 'var(--cymg-green)' }}
                    aria-hidden="true"
                  />
                  <div className="pl-10 md:pl-0 md:w-1/2">
                    <div
                      className="rounded-sm border p-6"
                      style={{
                        backgroundColor: 'var(--surface)',
                        borderColor: 'var(--line)',
                      }}
                    >
                      <span
                        className="font-mono text-2xl md:text-3xl font-bold block mb-2"
                        style={{ color: 'var(--cymg-green)' }}
                      >
                        {event.year}
                      </span>
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: 'var(--ink)' }}
                      >
                        {event.title}
                      </h3>
                      <p
                        className="text-sm md:text-base leading-relaxed"
                        style={{ color: 'var(--ink-60)' }}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quick Links ──────────────────────────────────────── */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-28">
          <Link
            to="/about/history-mandate"
            className="group inline-flex items-center gap-2 text-lg font-bold transition-colors"
            style={{ color: 'var(--ink)' }}
          >
            History & Mandate
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="hidden md:block" style={{ color: 'var(--line)' }}>•</span>
          <Link
            to="/governance"
            className="group inline-flex items-center gap-2 text-lg font-bold transition-colors"
            style={{ color: 'var(--ink)' }}
          >
            Governance Structure
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="hidden md:block" style={{ color: 'var(--line)' }}>•</span>
          <Link
            to="/team"
            className="group inline-flex items-center gap-2 text-lg font-bold transition-colors"
            style={{ color: 'var(--ink)' }}
          >
            Meet Our Team
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </section>

        <NewsletterCTA />
      </div>
    </div>
  );
}
