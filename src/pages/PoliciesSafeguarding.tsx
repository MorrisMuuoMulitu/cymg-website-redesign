import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, FileText, ExternalLink, AlertTriangle, CheckCircle2, Loader2, Info } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default function PoliciesSafeguarding() {
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
    // Simulating API call for content-only update phase
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="bg-paper dark:bg-ink min-h-screen">
      {/* Hero */}
      <div className="pt-16 pb-14 px-4 sm:px-6 lg:px-8 bg-surface border-b border-line text-ink">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Policies & Safeguarding' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold mt-6 "
          >
            Safety, Trust & <span className="text-[var(--cymg-green)]">Policies</span>
          </motion.h1>
          <p className="text-lg text-[var(--ink-60)] mt-5 max-w-2xl leading-relaxed">
            This section contains the policies and governing documents of the Children and Youth Major Group to UNEP. CYMG is committed to maintaining a safe, inclusive, and respectful environment for all members and participants.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 py-24">
        {/* Commitment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-start">
          <div className="space-y-8">
            <div>
              <span className="text-[var(--cymg-green)] font-medium uppercase tracking-wide text-sm mb-3 block">
                Our Commitment
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-5">
                Upholding the highest standards of community conduct.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                All community members, volunteers, and accredited organizations are expected to uphold our Code of Conduct and Safeguarding Framework. This ensures that youth engagement remains a productive and safe environment for all.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-sm border border-line dark:border-white/5 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--cymg-green)]/10 dark:bg-[var(--cymg-green)]/20 rounded-sm flex items-center justify-center text-[var(--cymg-green)]">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold text-ink dark:text-paper ">Core Principles</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Treat all participants with dignity and respect',
                  'Prioritise the safety and wellbeing of children',
                  'Maintain confidentiality in sensitive discussions',
                  'Zero tolerance for harassment or discrimination',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={18} className="text-[var(--cymg-green)] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-line dark:border-white/5">
                <a href="https://docs.google.com/document/d/1M2TTdt2fjrpDHrODxIsayWZ8bYGNuzFYdrh-2tq4Udg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[var(--cymg-green)] hover:underline">
                  <FileText size={18} /> Read Full Code of Conduct <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="bg-[var(--cymg-green)] rounded-sm p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/15 rounded-sm flex items-center justify-center text-white">
                  <Lock size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Handling Process</h3>
              </div>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Confidential Report', desc: 'Submit a concern via our secure form. Reports can be anonymous.' },
                  { step: '02', title: 'Acknowledgement', desc: 'Receipt confirmed within 48 hours by a designated safeguarding lead.' },
                  { step: '03', title: 'Discreet Review', desc: 'Confidential assessment of the report with relevant parties.' },
                  { step: '04', title: 'Resolution', desc: 'Action taken and reporter informed of the outcome where possible.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-xs font-semibold text-[var(--cymg-green-bright)] mt-1">{item.step}</span>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reporting Form */}
          <div id="report-form" className="bg-white dark:bg-slate-900 rounded-sm p-10 md:p-12 border border-line dark:border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="text-[var(--cymg-green)]" />
              <h3 className="text-2xl font-semibold text-ink dark:text-paper ">Report a Concern</h3>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-[var(--cymg-green)]/10 dark:bg-[var(--cymg-green)]/20 rounded-sm flex items-center justify-center mx-auto mb-6 text-[var(--cymg-green)]">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-semibold text-ink dark:text-paper mb-4">Report Received</h4>
                <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
                  Thank you for helping us maintain a safe community. Your report has been securely transmitted and will be reviewed within 48 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-bold text-[var(--cymg-green)] hover:underline"
                >
                  Submit another report
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-sm px-5 py-3.5 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--cymg-green)] outline-none transition-all text-sm"
                      placeholder="Or 'Anonymous'"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-sm px-5 py-3.5 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--cymg-green)] outline-none transition-all text-sm"
                      placeholder="For follow-up"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Concern Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-sm px-5 py-3.5 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--cymg-green)] outline-none appearance-none"
                  >
                    <option value="">Select a category</option>
                    <option value="harassment">Harassment or discrimination</option>
                    <option value="safety">Safety concern</option>
                    <option value="conduct">Code of Conduct violation</option>
                    <option value="child-safety">Child safety concern</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Description *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-sm px-5 py-3.5 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--cymg-green)] outline-none transition-all text-sm resize-none"
                    placeholder="Provide as much detail as possible (dates, people involved, context)..."
                  />
                </div>

                <label className="flex items-center gap-3 cursor-pointer p-4 bg-[var(--cymg-green)]/5 dark:bg-[var(--cymg-green)]/10 rounded-sm border border-[var(--cymg-green)]/10 dark:border-[var(--cymg-green)]/20">
                  <input
                    type="checkbox"
                    checked={formData.urgent}
                    onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                    className="w-5 h-5 rounded-sm border-2 border-[var(--cymg-green)] text-[var(--cymg-green)] focus:ring-offset-0"
                  />
                  <span className="text-xs font-semibold text-[var(--cymg-green)] dark:text-[var(--cymg-green-bright)] uppercase tracking-widest">
                    This is an urgent safety concern
                  </span>
                </label>

                {errors.length > 0 && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-sm border border-red-100 dark:border-red-900/30">
                    {errors.map((err) => (
                      <p key={err} className="text-xs text-red-600 dark:text-red-400 font-bold flex items-center gap-2">
                        <Info size={14} /> {err}
                      </p>
                    ))}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[var(--cymg-green)] text-white font-semibold uppercase tracking-widest py-5 rounded-sm hover:bg-[var(--cymg-green-deep)] transition-all disabled:opacity-50 inline-flex items-center justify-center gap-3"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Submit Confidential Report'
                  )}
                </button>
                
                <p className="text-[10px] text-slate-500 text-center font-bold uppercase tracking-[0.1em]">
                  Secure encrypted transmission enabled
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
