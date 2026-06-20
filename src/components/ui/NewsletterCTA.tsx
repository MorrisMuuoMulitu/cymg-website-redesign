import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="max-w-[600px] mx-auto border-t border-line pt-10 pb-8 text-center my-16 md:my-24">
      <h3 className="text-2xl font-medium text-ink mb-2">Stay informed</h3>
      <p className="text-base text-[var(--ink-60)] font-light mb-6">
        Receive updates on consultations, events, and opportunities.
      </p>
      {submitted ? (
        <div className="flex items-center justify-center gap-2 py-3 text-[var(--cymg-green)]">
          <Check size={18} />
          <span className="text-sm font-medium">Thanks for subscribing.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-60)]"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full pl-9 pr-4 py-3 text-sm outline-none border border-line bg-paper focus:border-[var(--cymg-green)] font-light"
              style={{ color: 'var(--ink)' }}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white bg-[var(--cymg-green)] hover:bg-[var(--cymg-green-deep)] transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
