

import { useState, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Mail,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Facebook,
  Send,
  Loader2,
  Globe,
  AlertTriangle,
} from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/cymg-data'
import Button from '@/components/ui/Button'

/* ------------------------------------------------------------------ */
/*  Social link data                                                   */
/* ------------------------------------------------------------------ */

const socialItems = [
  { href: SOCIAL_LINKS.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIAL_LINKS.twitter, label: 'X / Twitter', Icon: Twitter },
  { href: SOCIAL_LINKS.youtube, label: 'YouTube', Icon: Youtube },
  { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIAL_LINKS.facebook, label: 'Facebook', Icon: Facebook },
] as const

/* ------------------------------------------------------------------ */
/*  Topic options                                                      */
/* ------------------------------------------------------------------ */

const TOPICS = [
  'General Inquiry',
  'Media',
  'Partnership',
  'Safeguarding Concern',
  'Other',
] as const

/* ------------------------------------------------------------------ */
/*  ContactSection Component                                           */
/* ------------------------------------------------------------------ */

export default function ContactSection() {
  const reducedMotion = useReducedMotion()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const errs: string[] = []
      if (!name.trim()) errs.push('Name is required')
      if (!email.trim()) errs.push('Email is required')
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push('Please enter a valid email')
      if (!topic) errs.push('Please select a topic')
      if (!message.trim()) errs.push('Message is required')

      if (errs.length > 0) {
        setErrors(errs)
        return
      }
      setErrors([])
      setSubmitting(true)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, topic, message }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to send message')
        }

        setSubmitted(true)
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
        setErrors([errMsg])
      } finally {
        setSubmitting(false)
      }
    },
    [name, email, topic, message]
  )

  const inputClass =
    'w-full rounded-lg border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] px-4 py-2.5 text-sm text-ink dark:text-paper placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-assembly-blue dark:focus:ring-dark-assembly-blue focus:border-transparent transition-shadow'

  return (
    <section
      id="contact"
      className="bg-paper dark:bg-ink py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-serif text-ink dark:text-paper"
            style={{
              fontSize: 'var(--text-h2)',
              fontVariationSettings: "'wght' 600, 'SOFT' 50, 'WONK' 1",
            }}
          >
            Get in Touch
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            We&apos;d love to hear from you
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── Left: Contact form ──────────────────────────────── */}
          <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6 sm:p-8">
            {submitted ? (
              <motion.div
                initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-canopy-green/10 dark:bg-canopy-green/20">
                  <Send className="h-6 w-6 text-canopy-green" />
                </div>
                <h3 className="font-serif text-xl font-medium text-ink dark:text-paper">
                  Message Sent
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                  Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                    Name <span className="text-clay">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors([]) }}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                    Email <span className="text-clay">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors([]) }}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-topic" className="mb-1.5 block text-sm font-medium">
                    Topic <span className="text-clay">*</span>
                  </label>
                  <select
                    id="contact-topic"
                    required
                    value={topic}
                    onChange={(e) => { setTopic(e.target.value); setErrors([]) }}
                    className={inputClass}
                  >
                    <option value="">Select a topic</option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                    Message <span className="text-clay">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); setErrors([]) }}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-y min-h-[120px]`}
                  />
                </div>

                {/* Error messages */}
                {errors.length > 0 && (
                  <div className="rounded-lg bg-clay/10 dark:bg-clay/20 border border-clay/30 px-4 py-3">
                    {errors.map((err) => (
                      <p key={err} className="text-sm text-clay">{err}</p>
                    ))}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full gap-2 bg-assembly-blue text-white hover:bg-assembly-blue-deep dark:bg-dark-assembly-blue dark:text-ink dark:hover:bg-assembly-blue"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* ── Right: Direct info + social links ───────────────── */}
          <div className="flex flex-col gap-6">
            {/* Email card */}
            <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-assembly-blue/10 dark:bg-dark-assembly-blue/20">
                  <Mail className="h-5 w-5 text-assembly-blue dark:text-dark-assembly-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Email Us</h3>
                  <a
                    href="mailto:info@cymgenv.net"
                    className="text-sm text-assembly-blue dark:text-dark-assembly-blue hover:underline"
                  >
                    info@cymgenv.net
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-1.5 text-xs text-muted-foreground bg-signal-lime/10 dark:bg-signal-lime/5 rounded-lg px-3 py-2">
                <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-signal-lime dark:text-signal-lime" />
                <span className="font-mono text-[10px] uppercase tracking-wide">Editorial note: verify this email address during content migration</span>
              </div>
            </div>

            {/* Social links card */}
            <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6">
              <h3 className="font-semibold text-sm mb-4">Follow Us</h3>
              <div className="space-y-3">
                {socialItems.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg p-2.5 -mx-2.5 text-sm text-ink dark:text-paper hover:bg-assembly-blue/5 dark:hover:bg-dark-assembly-blue/10 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Globe decorative card */}
            <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-canopy-green/10 dark:bg-canopy-green/20">
                <Globe className="h-6 w-6 text-canopy-green" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Global Community</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Connect with CYMG members across six UNEP regions and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
