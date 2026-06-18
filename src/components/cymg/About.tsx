import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reducedMotion = useReducedMotion()

  const fadeUp = {
    initial: reducedMotion ? {} : { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: 'easeOut' as const },
  }

  return (
    <section
      id="about"
      className="bg-paper dark:bg-ink py-24 border-b border-line dark:border-white/10"
      aria-labelledby="about-heading"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div {...fadeUp} className="lg:col-span-4">
            <span className="text-[var(--assembly-blue)] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Identity
            </span>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-extrabold text-ink dark:text-paper tracking-tight leading-tight">
              Official Youth Voice to <span className="text-[var(--assembly-blue)]">UNEP</span>
            </h2>
          </motion.div>

          <div className="lg:col-span-8">
            <motion.p
              {...fadeUp}
              className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium mb-8"
            >
              The Children and Youth Major Group to UNEP (CYMG) is the official
              UN-recognized constituency for children and youth engaging with the
              United Nations Environment Programme.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 dark:text-slate-400 leading-relaxed">
              <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                <p>
                  Formed in 2012, CYMG is run almost entirely by youth volunteers
                  across six world regions. We ensure that young people's voices,
                  expertise, and demands are heard in the halls of environmental
                  decision-making.
                </p>
              </motion.div>
              <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
                <p className="mb-6">
                  We coordinate 13 thematic working groups spanning pollution, nature, policy,
                  and finance, facilitating participation in the UN Environment Assembly (UNEA)
                  and Multilateral Environmental Agreements (MEAs).
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-bold text-[var(--assembly-blue)] hover:gap-3 transition-all"
                >
                  Learn More About Our Mandate <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
