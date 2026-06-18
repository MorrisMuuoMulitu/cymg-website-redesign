

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react'
import { WORKING_GROUPS, REGIONS } from '@/lib/cymg-data'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Button from '@/components/ui/Button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FormData {
  name: string
  email: string
  country: string
  organisation: string
  workingGroups: string[]
  region: string
  agreeToConduct: boolean
}

type Step = 0 | 1 | 2

const STEP_LABELS = ['Basics', 'Interests', 'Confirm'] as const

const INITIAL_DATA: FormData = {
  name: '',
  email: '',
  country: '',
  organisation: '',
  workingGroups: [],
  region: '',
  agreeToConduct: false,
}

/* ------------------------------------------------------------------ */
/*  Progress Indicator                                                 */
/* ------------------------------------------------------------------ */

function ProgressIndicator({ step }: { step: Step }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={3}>
      {STEP_LABELS.map((label, i) => {
        const isCompleted = i < step
        const isCurrent = i === step
        return (
          <div key={label} className="flex items-center">
            {i > 0 && (
              <div
                className={`h-0.5 w-8 sm:w-12 transition-colors duration-300 ${
                  isCompleted ? 'bg-assembly-blue dark:bg-dark-assembly-blue' : 'bg-line dark:bg-white/10'
                }`}
              />
            )}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold transition-colors duration-300 ${
                  isCompleted
                    ? 'bg-assembly-blue text-white dark:bg-dark-assembly-blue dark:text-ink'
                    : isCurrent
                      ? 'ring-2 ring-assembly-blue dark:ring-dark-assembly-blue bg-surface dark:bg-[#141E30] text-assembly-blue dark:text-dark-assembly-blue'
                      : 'bg-line dark:bg-white/10 text-muted-foreground'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span
                className={`font-mono text-[10px] uppercase tracking-wider ${
                  isCurrent ? 'text-assembly-blue dark:text-dark-assembly-blue font-semibold' : 'text-muted-foreground'
                }`}
              >
                {label}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Step 1: Basics                                                     */
/* ------------------------------------------------------------------ */

function StepBasics({
  data,
  onChange,
}: {
  data: FormData
  onChange: (field: keyof FormData, value: string) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
    >
      <div>
        <Label htmlFor="join-name" className="mb-1.5 block text-sm font-medium">
          Full Name <span className="text-clay">*</span>
        </Label>
        <input
          id="join-name"
          type="text"
          required
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="Your full name"
          className="w-full rounded-lg border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] px-4 py-2.5 text-sm text-ink dark:text-paper placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-assembly-blue dark:focus:ring-dark-assembly-blue focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <Label htmlFor="join-email" className="mb-1.5 block text-sm font-medium">
          Email <span className="text-clay">*</span>
        </Label>
        <input
          id="join-email"
          type="email"
          required
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] px-4 py-2.5 text-sm text-ink dark:text-paper placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-assembly-blue dark:focus:ring-dark-assembly-blue focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <Label htmlFor="join-country" className="mb-1.5 block text-sm font-medium">
          Country <span className="text-clay">*</span>
        </Label>
        <input
          id="join-country"
          type="text"
          required
          value={data.country}
          onChange={(e) => onChange('country', e.target.value)}
          placeholder="Your country"
          className="w-full rounded-lg border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] px-4 py-2.5 text-sm text-ink dark:text-paper placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-assembly-blue dark:focus:ring-dark-assembly-blue focus:border-transparent transition-shadow"
        />
      </div>

      <div>
        <Label htmlFor="join-org" className="mb-1.5 block text-sm font-medium">
          Organisation <span className="text-muted-foreground text-xs font-normal">(optional)</span>
        </Label>
        <input
          id="join-org"
          type="text"
          value={data.organisation}
          onChange={(e) => onChange('organisation', e.target.value)}
          placeholder="Your organisation or school"
          className="w-full rounded-lg border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] px-4 py-2.5 text-sm text-ink dark:text-paper placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-assembly-blue dark:focus:ring-dark-assembly-blue focus:border-transparent transition-shadow"
        />
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Step 2: Interests                                                  */
/* ------------------------------------------------------------------ */

function StepInterests({
  data,
  onToggleWG,
  onSelectRegion,
}: {
  data: FormData
  onToggleWG: (slug: string) => void
  onSelectRegion: (id: string) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <fieldset>
        <legend className="mb-3 text-sm font-semibold">Working Groups</legend>
        <p className="mb-4 text-xs text-muted-foreground">Select all working groups you&apos;re interested in.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-1">
          {WORKING_GROUPS.map((wg) => (
            <label
              key={wg.slug}
              className="flex items-start gap-2.5 p-3 rounded-lg border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] cursor-pointer hover:border-assembly-blue/40 dark:hover:border-dark-assembly-blue/40 transition-colors"
            >
              <Checkbox
                checked={data.workingGroups.includes(wg.slug)}
                onCheckedChange={() => onToggleWG(wg.slug)}
                className="mt-0.5"
              />
              <span className="text-sm leading-snug">{wg.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <Label className="mb-1.5 block text-sm font-medium">
          Region <span className="text-clay">*</span>
        </Label>
        <Select value={data.region} onValueChange={onSelectRegion}>
          <SelectTrigger className="w-full rounded-lg border border-line dark:border-white/10 bg-surface dark:bg-[#141E30]">
            <SelectValue placeholder="Select your region" />
          </SelectTrigger>
          <SelectContent>
            {REGIONS.map((r) => (
              <SelectItem key={r.id} value={r.id}>
                {r.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Step 3: Confirm                                                    */
/* ------------------------------------------------------------------ */

function StepConfirm({
  data,
  onToggleConduct,
}: {
  data: FormData
  onToggleConduct: () => void
}) {
  const selectedWGs = WORKING_GROUPS.filter((wg) =>
    data.workingGroups.includes(wg.slug)
  )
  const selectedRegion = REGIONS.find((r) => r.id === data.region)

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h3 className="font-serif text-lg font-medium">Review your details</h3>

      <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Name</span>
            <p className="mt-0.5 font-medium">{data.name}</p>
          </div>
          <div>
            <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Email</span>
            <p className="mt-0.5 font-medium">{data.email}</p>
          </div>
          <div>
            <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Country</span>
            <p className="mt-0.5 font-medium">{data.country}</p>
          </div>
          <div>
            <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Organisation</span>
            <p className="mt-0.5 font-medium">{data.organisation || '—'}</p>
          </div>
        </div>

        <div className="border-t border-line dark:border-white/10 pt-4">
          <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Working Groups</span>
          {selectedWGs.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedWGs.map((wg) => (
                <span
                  key={wg.slug}
                  className="inline-flex items-center rounded-full bg-assembly-blue/10 dark:bg-dark-assembly-blue/20 text-assembly-blue dark:text-dark-assembly-blue px-3 py-1 text-xs font-medium"
                >
                  {wg.shortName}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-1 text-sm text-muted-foreground">None selected</p>
          )}
        </div>

        <div className="border-t border-line dark:border-white/10 pt-4">
          <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Region</span>
          <p className="mt-0.5 text-sm font-medium">{selectedRegion?.name ?? '—'}</p>
        </div>
      </div>

      <label className="flex items-start gap-3 cursor-pointer group">
        <Checkbox
          checked={data.agreeToConduct}
          onCheckedChange={onToggleConduct}
          className="mt-0.5"
        />
        <span className="text-sm leading-snug">
          I agree to the CYMG{' '}
          <a
            href="#safeguarding"
            className="text-assembly-blue dark:text-dark-assembly-blue underline underline-offset-2 hover:brightness-125"
          >
            Code of Conduct
          </a>
        </span>
      </label>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Success Screen                                                     */
/* ------------------------------------------------------------------ */

function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8"
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-canopy-green/10 dark:bg-canopy-green/20">
        <Check className="h-8 w-8 text-canopy-green" />
      </div>
      <h3
        className="font-serif text-3xl font-medium text-ink dark:text-paper"
        style={{ fontVariationSettings: "'wght' 600, 'SOFT' 50, 'WONK' 1" }}
      >
        Welcome to CYMG!
      </h3>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
        Thank you for joining the Children and Youth Major Group to UNEP. Your voice matters in shaping the future of environmental governance. We&apos;ll be in touch with next steps and ways to get involved.
      </p>
      <p className="mt-3 text-sm text-canopy-green font-medium">
        Together, we lead environmental action.
      </p>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main JoinForm Component                                            */
/* ------------------------------------------------------------------ */

export default function JoinForm() {
  const [step, setStep] = useState<Step>(1)

  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    setErrors([])
  }, [])

  const handleToggleWG = useCallback((slug: string) => {
    setData((prev) => ({
      ...prev,
      workingGroups: prev.workingGroups.includes(slug)
        ? prev.workingGroups.filter((s) => s !== slug)
        : [...prev.workingGroups, slug],
    }))
    setErrors([])
  }, [])

  const handleSelectRegion = useCallback((id: string) => {
    setData((prev) => ({ ...prev, region: id }))
    setErrors([])
  }, [])

  const handleToggleConduct = useCallback(() => {
    setData((prev) => ({ ...prev, agreeToConduct: !prev.agreeToConduct }))
    setErrors([])
  }, [])

  const validateStep = useCallback(
    (s: Step): string[] => {
      const e: string[] = []
      if (s === 0) {
        if (!data.name.trim()) e.push('Name is required')
        if (!data.email.trim()) e.push('Email is required')
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.push('Please enter a valid email')
        if (!data.country.trim()) e.push('Country is required')
      }
      if (s === 1) {
        if (!data.region) e.push('Please select a region')
      }
      if (s === 2) {
        if (!data.agreeToConduct) e.push('You must agree to the Code of Conduct')
      }
      return e
    },
    [data]
  )

  const handleNext = useCallback(() => {
    const validationErrors = validateStep(step)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors([])
    setStep((s) => Math.min(s + 1, 2) as Step)
  }, [step, validateStep])

  const handleBack = useCallback(() => {
    setErrors([])
    setStep((s) => Math.max(s - 1, 0) as Step)
  }, [])

  const handleSubmit = useCallback(async () => {
    const validationErrors = validateStep(2)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitting(true)
    setErrors([])
    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          country: data.country,
          organisation: data.organisation,
          workingGroups: data.workingGroups,
          region: data.region,
          agreeToConduct: data.agreeToConduct,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Submission failed')
      }

      setSubmitted(true)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setErrors([message])
    } finally {
      setSubmitting(false)
    }
  }, [validateStep, data])

  return (
    <section
      id="join"
      className="bg-paper dark:bg-ink py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="font-serif text-ink dark:text-paper"
            style={{
              fontSize: 'var(--text-h2)',
              fontVariationSettings: "'wght' 600, 'SOFT' 50, 'WONK' 1",
            }}
          >
            Join CYMG
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Become part of the youth environmental movement
          </p>
        </div>

        {/* Card container */}
        <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6 sm:p-8">
          {submitted ? (
            <SuccessScreen />
          ) : (
            <>
              <ProgressIndicator step={step} />

              {/* Error messages */}
              {errors.length > 0 && (
                <div className="mb-4 rounded-lg bg-clay/10 dark:bg-clay/20 border border-clay/30 px-4 py-3">
                  {errors.map((err) => (
                    <p key={err} className="text-sm text-clay">{err}</p>
                  ))}
                </div>
              )}

              {/* Step content */}
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <StepBasics key="basics" data={data} onChange={handleChange} />
                )}
                {step === 1 && (
                  <StepInterests
                    key="interests"
                    data={data}
                    onToggleWG={handleToggleWG}
                    onSelectRegion={handleSelectRegion}
                  />
                )}
                {step === 2 && (
                  <StepConfirm
                    key="confirm"
                    data={data}
                    onToggleConduct={handleToggleConduct}
                  />
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-line dark:border-white/10">
                {step > 0 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="rounded-full gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {step < 2 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="rounded-full gap-1.5 bg-assembly-blue text-white hover:bg-assembly-blue-deep dark:bg-dark-assembly-blue dark:text-ink dark:hover:bg-assembly-blue"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="rounded-full gap-1.5 bg-signal-lime text-ink hover:brightness-110"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      'Submit'
                    )}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
