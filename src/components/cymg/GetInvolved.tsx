import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function GetInvolved() {
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
      id="get-involved"
      className="bg-[var(--signal-lime)] py-24"
      aria-labelledby="get-involved-heading"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6 text-center">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <h2
            id="get-involved-heading"
            className="text-4xl md:text-5xl font-extrabold text-[#0A1128] leading-tight tracking-tight mb-6"
          >
            Join thousands of young people <br className="hidden md:block" />
            <span className="bg-[#0A1128] text-white px-2 py-1">shaping global policy.</span>
          </h2>

          <p className="text-lg md:text-xl text-[#0A1128]/80 mb-10 leading-relaxed font-medium">
            Whether you represent a youth-led organization or you're an individual passionate about the planet, there is a place for you in CYMG. Membership is free and open worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/join"
              className="btn-pill bg-[#0A1128] text-white px-10 py-4 text-lg font-bold hover:bg-[#0A1128]/90 transition-all duration-300 w-full sm:w-auto shadow-xl"
            >
              Apply for Membership
            </Link>
            <Link
              to="/working-groups"
              className="btn-pill border-2 border-[#0A1128] text-[#0A1128] px-10 py-4 text-lg font-bold hover:bg-[#0A1128] hover:text-white transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Explore Groups <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
