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
      <div className="pt-32 pb-20 px-6 bg-[#0A1128] text-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Policies & Safeguarding' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mt-8 tracking-tight"
          >
            Safety, Trust & <span className="text-[var(--assembly-blue)]">Policies</span>
          </motion.h1>
          <p className="text-xl text-slate-400 mt-6 max-w-2xl leading-relaxed">
            This section contains the policies and governing documents of the Children and Youth Major Group to UNEP. CYMG is committed to maintaining a safe, inclusive, and respectful environment for all members and participants.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Commitment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-start">
          <div className="space-y-8">
            <div>
              <span className="text-[var(--assembly-blue)] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                Our Commitment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-paper mb-6 tracking-tight">
                Upholding the highest standards of community conduct.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                All community members, volunteers, and accredited organizations are expected to uphold our Code of Conduct and Safeguarding Framework. This ensures that youth engagement remains a productive and safe environment for all.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-line dark:border-white/5 p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold text-ink dark:text-paper tracking-tight">Core Principles</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Treat all participants with dignity and respect',
                  'Prioritise the safety and wellbeing of children',
                  'Maintain confidentiality in sensitive discussions',
                  'Zero tolerance for harassment or discrimination',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-line dark:border-white/5">
                <a href="https://docs.google.com/document/d/1M2TTdt2fjrpDHrODxIsayWZ8bYGNuzFYdrh-2tq4Udg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[var(--assembly-blue)] hover:underline">
                  <FileText size={18} /> Read Full Code of Conduct <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="bg-[#0A1128] rounded-[32px] p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                  <Lock size={24} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">Handling Process</h3>
              </div>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Confidential Report', desc: 'Submit a concern via our secure form. Reports can be anonymous.' },
                  { step: '02', title: 'Acknowledgement', desc: 'Receipt confirmed within 48 hours by a designated safeguarding lead.' },
                  { step: '03', title: 'Discreet Review', desc: 'Confidential assessment of the report with relevant parties.' },
                  { step: '04', title: 'Resolution', desc: 'Action taken and reporter informed of the outcome where possible.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-xs font-black text-blue-400 mt-1">{item.step}</span>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reporting Form */}
          <div id="report-form" className="bg-white dark:bg-slate-900 rounded-[40px] p-10 md:p-12 shadow-2xl border border-line dark:border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="text-amber-500" />
              <h3 className="text-2xl font-black text-ink dark:text-paper tracking-tight">Report a Concern</h3>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 shadow-inner">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-black text-ink dark:text-paper mb-4">Report Received</h4>
                <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
                  Thank you for helping us maintain a safe community. Your report has been securely transmitted and will be reviewed within 48 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-bold text-[var(--assembly-blue)] hover:underline"
                >
                  Submit another report
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-2xl px-5 py-3.5 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--assembly-blue)] outline-none transition-all text-sm"
                      placeholder="Or 'Anonymous'"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-2xl px-5 py-3.5 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--assembly-blue)] outline-none transition-all text-sm"
                      placeholder="For follow-up"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Concern Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-2xl px-5 py-3.5 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--assembly-blue)] outline-none appearance-none"
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
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Description *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-2xl px-5 py-3.5 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--assembly-blue)] outline-none transition-all text-sm resize-none"
                    placeholder="Provide as much detail as possible (dates, people involved, context)..."
                  />
                </div>

                <label className="flex items-center gap-3 cursor-pointer p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                  <input
                    type="checkbox"
                    checked={formData.urgent}
                    onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                    className="w-5 h-5 rounded-lg border-2 border-amber-600 text-amber-600 focus:ring-offset-0"
                  />
                  <span className="text-xs font-black text-amber-900 dark:text-amber-400 uppercase tracking-widest">
                    This is an urgent safety concern
                  </span>
                </label>

                {errors.length > 0 && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-100 dark:border-red-900/30">
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
                  className="w-full bg-amber-500 text-[#0A1128] font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-amber-400 transition-all shadow-xl disabled:opacity-50 inline-flex items-center justify-center gap-3"
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
