

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Shield, Lock, FileText, ExternalLink, AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react'

export function SafeguardingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    description: '',
    urgent: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const prefersReducedMotion = useReducedMotion()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs: string[] = []
    if (!formData.name.trim()) errs.push('Name is required')
    if (!formData.email.trim()) errs.push('Email is required')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.push('Please enter a valid email')
    if (!formData.description.trim()) errs.push('Description is required')

    if (errs.length > 0) {
      setErrors(errs)
      return
    }

    setErrors([])
    setSubmitting(true)
    try {
      const response = await fetch('/api/safeguarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          description: formData.description,
          urgent: formData.urgent,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit report')
      }

      setSubmitted(true)
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setErrors([errMsg])
    } finally {
      setSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
  }

  return (
    <section id="safeguarding" className="py-20 bg-paper dark:bg-ink">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15%' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.02em] text-canopy-green mb-3">
              Safety & Trust
            </p>
            <h2 className="font-serif text-[var(--text-h2)] text-ink dark:text-paper mb-4">
              Policies & Safeguarding
            </h2>
            <p className="text-ink-60 dark:text-paper/60 max-w-2xl text-lg leading-relaxed">
              CYMG is committed to creating a safe, respectful, and inclusive space for all
              participants — especially children and young people. All community members are
              expected to uphold our Code of Conduct.
            </p>
          </motion.div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Code of Conduct & Principles */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Code of Conduct Card */}
              <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-canopy-green/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-canopy-green" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ink dark:text-paper mb-1">
                      Code of Conduct
                    </h3>
                    <p className="text-sm text-ink-60 dark:text-paper/60">
                      All CYMG participants must adhere to our community standards
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-ink-60 dark:text-paper/60">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-canopy-green mt-0.5 flex-shrink-0" />
                    Treat all participants with dignity and respect
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-canopy-green mt-0.5 flex-shrink-0" />
                    Prioritise the safety and wellbeing of children and young people
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-canopy-green mt-0.5 flex-shrink-0" />
                    Maintain confidentiality in sensitive discussions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-canopy-green mt-0.5 flex-shrink-0" />
                    Report any concerns through the appropriate channels
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-line dark:border-white/10">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-assembly-blue dark:text-[#6E8BFF] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4" />
                    Read the full Code of Conduct
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Confidential Handling Process */}
              <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-assembly-blue/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-assembly-blue dark:text-[#6E8BFF]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ink dark:text-paper mb-1">
                      Confidential Reporting
                    </h3>
                    <p className="text-sm text-ink-60 dark:text-paper/60">
                      How we handle safeguarding concerns
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Report',
                      desc: 'Submit a concern through our confidential form or email. You may report anonymously.',
                    },
                    {
                      step: '2',
                      title: 'Acknowledge',
                      desc: 'We acknowledge receipt within 48 hours and assign a designated safeguarding lead.',
                    },
                    {
                      step: '3',
                      title: 'Review',
                      desc: 'The concern is reviewed confidentially. Relevant parties are contacted with discretion.',
                    },
                    {
                      step: '4',
                      title: 'Resolve',
                      desc: 'Appropriate actions are taken. The reporter is informed of the outcome where possible.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-assembly-blue/10 flex items-center justify-center text-xs font-mono font-semibold text-assembly-blue dark:text-[#6E8BFF] flex-shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink dark:text-paper">
                          {item.title}
                        </p>
                        <p className="text-xs text-ink-60 dark:text-paper/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Reporting Form */}
            <motion.div variants={itemVariants}>
              <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-5 h-5 text-clay" />
                  <h3 className="font-serif text-xl text-ink dark:text-paper">
                    Report a Concern
                  </h3>
                </div>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-canopy-green/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-canopy-green" />
                    </div>
                    <h4 className="font-serif text-xl text-ink dark:text-paper mb-2">
                      Report Received
                    </h4>
                    <p className="text-ink-60 dark:text-paper/60 text-sm max-w-sm mx-auto">
                      Thank you. Your concern has been received and will be reviewed by our
                      safeguarding team. We will acknowledge your report within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-ink dark:text-paper mb-1.5">
                        Your Name <span className="text-clay">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-line dark:border-white/10 bg-paper dark:bg-ink text-ink dark:text-paper focus:ring-2 focus:ring-assembly-blue focus:outline-none text-sm"
                        placeholder="Your full name (or anonymous)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink dark:text-paper mb-1.5">
                        Email Address <span className="text-clay">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-line dark:border-white/10 bg-paper dark:bg-ink text-ink dark:text-paper focus:ring-2 focus:ring-assembly-blue focus:outline-none text-sm"
                        placeholder="your@email.com"
                      />
                      <p className="text-xs text-ink-60 dark:text-paper/40 mt-1">
                        Your email will be kept strictly confidential.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink dark:text-paper mb-1.5">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-line dark:border-white/10 bg-paper dark:bg-ink text-ink dark:text-paper focus:ring-2 focus:ring-assembly-blue focus:outline-none text-sm"
                      >
                        <option value="">Select a category</option>
                        <option value="harassment">Harassment or discrimination</option>
                        <option value="safety">Safety concern</option>
                        <option value="conduct">Code of Conduct violation</option>
                        <option value="child-safety">Child safety concern</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ink dark:text-paper mb-1.5">
                        Description <span className="text-clay">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-line dark:border-white/10 bg-paper dark:bg-ink text-ink dark:text-paper focus:ring-2 focus:ring-assembly-blue focus:outline-none text-sm resize-y"
                        placeholder="Please describe the incident or concern. Include relevant dates, locations, and any other details you feel comfortable sharing."
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="urgent"
                        checked={formData.urgent}
                        onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                        className="w-4 h-4 rounded border-line dark:border-white/10 text-assembly-blue focus:ring-assembly-blue"
                      />
                      <label htmlFor="urgent" className="text-sm text-ink dark:text-paper">
                        This is an urgent safety concern
                      </label>
                    </div>

                    {/* Error messages */}
                    {errors.length > 0 && (
                      <div className="rounded-lg bg-clay/10 dark:bg-clay/20 border border-clay/30 px-4 py-3">
                        {errors.map((err) => (
                          <p key={err} className="text-sm text-clay">{err}</p>
                        ))}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-clay text-white font-semibold py-3 px-6 hover:bg-clay/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        'Submit Confidential Report'
                      )}
                    </button>

                    <p className="text-xs text-ink-60 dark:text-paper/40 text-center">
                      All reports are treated with the highest level of confidentiality.
                    </p>
                  </form>
                )}

                {/* Fallback link */}
                <div className="mt-6 pt-4 border-t border-line dark:border-white/10">
                  <p className="text-xs text-ink-60 dark:text-paper/40 mb-2">
                    Prefer to use an external form?
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs text-assembly-blue dark:text-[#6E8BFF] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Report via Google Form (backup)
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
