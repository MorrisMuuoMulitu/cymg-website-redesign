import { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, CheckCircle, Rocket, Shield, HelpCircle, Target } from 'lucide-react';
import { workingGroups } from '@/data/workingGroups';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion, AnimatePresence } from 'framer-motion';

const interests = [
  'Policy Advocacy',
  'Event Organizing',
  'Communications',
  'Research & Analysis',
  'Resource Mobilization',
  'Community Outreach',
];

export default function Join() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', organization: '', country: '', ageVerified: false,
    workingGroups: [] as string[], region: '', interests: [] as string[],
    termsAccepted: false,
  });

  const canProceed = () => {
    if (step === 1) return formData.name && formData.email && formData.country && formData.ageVerified;
    if (step === 2) return formData.workingGroups.length > 0;
    if (step === 3) return formData.termsAccepted;
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-paper dark:bg-ink min-h-screen flex items-center justify-center py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white dark:bg-slate-900 rounded-sm p-12 text-center border border-line dark:border-white/5"
        >
          <div className="w-20 h-20 bg-[var(--cymg-green)]/10 dark:bg-[var(--cymg-green)]/20 rounded-sm flex items-center justify-center mx-auto mb-8 text-[var(--cymg-green)]">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-4xl font-semibold text-ink dark:text-paper mb-4 ">
            Welcome to the Movement!
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Your application has been received. Our coordination team will review your details and reach out within 5 business days with onboarding materials.
          </p>
          <a href="/" className="btn-pill bg-[var(--cymg-green)] text-white px-8 py-3.5 font-bold hover:bg-[var(--cymg-green-deep)] transition-all">
            Return Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-paper dark:bg-ink min-h-screen">
      {/* Hero */}
      <div className="pt-16 pb-14 px-4 sm:px-6 lg:px-8 bg-surface border-b border-line text-ink">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Join CYMG' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold mt-6"
          >
            Join CYMG
          </motion.h1>
          <p className="text-lg text-[var(--ink-60)] mt-5 leading-relaxed">
            Membership is open to youth-led organisations and individuals who want to participate in UN environmental processes.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Progress Bar */}
        <div className="flex items-center gap-4 mb-16 px-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-4 flex-1">
              <div
                className={`w-12 h-12 rounded-sm flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                  step >= s ? 'bg-[var(--cymg-green)] text-white' : 'bg-paper dark:bg-ink text-slate-300 border border-line dark:border-white/10'
                }`}
              >
                {step > s ? <Check size={20} /> : s}
              </div>
              {s < 3 && (
                <div className="flex-1 h-1 rounded-sm bg-slate-100 dark:bg-slate-800">
                  <motion.div 
                    initial={{ width: '0%' }}
                    animate={{ width: step > s ? '100%' : '0%' }}
                    className="h-full bg-[var(--cymg-green)] rounded-sm"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-sm border border-line dark:border-white/5 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-10 md:p-16">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="text-[var(--cymg-green)]" />
                    <h2 className="text-3xl font-semibold text-ink dark:text-paper ">Your Essentials</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-sm px-6 py-4 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--cymg-green)] outline-none transition-all"
                        placeholder="e.g. Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-sm px-6 py-4 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--cymg-green)] outline-none transition-all"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Organization / Affiliation</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-sm px-6 py-4 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--cymg-green)] outline-none transition-all"
                        placeholder="Organization name or 'Individual'"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Country of Residence *</label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-line dark:border-white/10 rounded-sm px-6 py-4 font-bold text-ink dark:text-paper focus:ring-2 focus:ring-[var(--cymg-green)] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-4 cursor-pointer p-6 bg-[var(--cymg-green)]/5 dark:bg-[var(--cymg-green)]/10 rounded-sm border border-[var(--cymg-green)]/10 dark:border-[var(--cymg-green)]/20">
                    <input
                      type="checkbox"
                      checked={formData.ageVerified}
                      onChange={(e) => setFormData({ ...formData, ageVerified: e.target.checked })}
                      className="w-6 h-6 rounded-sm border-2 border-[var(--cymg-green)] text-[var(--cymg-green)] focus:ring-offset-0"
                    />
                    <span className="text-sm font-bold text-[var(--cymg-green)] dark:text-[var(--cymg-green-bright)] leading-tight">
                      I confirm I am between 15 and 35 years old (the formal youth age range for UN environmental processes).
                    </span>
                  </label>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-[var(--cymg-green)]" />
                    <h2 className="text-3xl font-semibold text-ink dark:text-paper ">Focus Areas</h2>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Thematic Working Groups (Select at least one)</label>
                    <div className="flex flex-wrap gap-2">
                      {workingGroups.map((wg) => {
                        const selected = formData.workingGroups.includes(wg.id);
                        return (
                          <button
                            key={wg.id}
                            type="button"
                            onClick={() => {
                              const updated = selected
                                ? formData.workingGroups.filter((id) => id !== wg.id)
                                : [...formData.workingGroups, wg.id];
                              setFormData({ ...formData, workingGroups: updated });
                            }}
                            className={`px-5 py-2.5 rounded-sm text-xs font-bold transition-all border ${
                              selected 
                                ? 'bg-[var(--cymg-green)] border-[var(--cymg-green)] text-white' 
                                : 'bg-slate-50 dark:bg-slate-800 border-line dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-[var(--cymg-green)]'
                            }`}
                          >
                            {wg.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">Engagement Interests</label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => {
                        const selected = formData.interests.includes(interest);
                        return (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => {
                              const updated = selected
                                ? formData.interests.filter((i) => i !== interest)
                                : [...formData.interests, interest];
                              setFormData({ ...formData, interests: updated });
                            }}
                            className={`px-5 py-2.5 rounded-sm text-xs font-bold transition-all border ${
                              selected 
                                ? 'bg-[var(--cymg-green)] border-[var(--cymg-green)] text-white' 
                                : 'bg-slate-50 dark:bg-slate-800 border-line dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-[var(--cymg-green)]'
                            }`}
                          >
                            {interest}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="text-[var(--cymg-green)]" />
                    <h2 className="text-3xl font-semibold text-ink dark:text-paper ">Final Confirmation</h2>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-sm p-8 border border-line dark:border-white/10 space-y-4">
                    <h3 className="font-semibold uppercase tracking-widest text-xs text-slate-400">Application Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <span className="block text-slate-500 font-medium">Applicant</span>
                        <span className="font-bold text-ink dark:text-paper">{formData.name} ({formData.country})</span>
                      </div>
                      <div>
                        <span className="block text-slate-500 font-medium">Email</span>
                        <span className="font-bold text-ink dark:text-paper">{formData.email}</span>
                      </div>
                      <div className="md:col-span-2">
                        <span className="block text-slate-500 font-medium">Selected Groups</span>
                        <span className="font-bold text-ink dark:text-paper">
                          {formData.workingGroups.map((id) => workingGroups.find((wg) => wg.id === id)?.name).join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <label className="flex items-start gap-4 cursor-pointer p-6 bg-[var(--cymg-green)]/5 dark:bg-[var(--cymg-green)]/10 rounded-sm border border-[var(--cymg-green)]/10 dark:border-[var(--cymg-green)]/20">
                    <input
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                      className="w-6 h-6 rounded-sm border-2 border-[var(--cymg-green)] text-[var(--cymg-green)] focus:ring-offset-0 mt-1"
                    />
                    <span className="text-sm font-bold text-[var(--cymg-green)] dark:text-[var(--cymg-green-bright)] leading-tight">
                      I agree to abide by the CYMG Terms of Engagement, Safeguarding Policies, and Code of Conduct. I understand that my participation is voluntary and focused on youth environmental advocacy.
                    </span>
                  </label>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-line dark:border-white/5">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 font-bold text-slate-500 hover:text-ink dark:hover:text-paper transition-colors"
                >
                  <ChevronLeft size={20} /> Back
                </button>
              ) : <div />}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="btn-pill bg-[var(--cymg-green)] text-white px-10 py-4 font-semibold hover:bg-[var(--cymg-green-deep)] disabled:opacity-30 disabled:grayscale transition-all"
                >
                  Continue <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceed()}
                  className="btn-pill bg-[var(--cymg-green)] text-white px-12 py-4 font-semibold hover:bg-[var(--cymg-green-deep)] disabled:opacity-30 transition-all"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm font-medium flex items-center justify-center gap-2">
          <HelpCircle size={16} /> Need help with your application? <a href="/contact" className="text-[var(--cymg-green)] font-bold hover:underline">Contact our coordination team</a>
        </div>
      </div>
    </div>
  );
}
