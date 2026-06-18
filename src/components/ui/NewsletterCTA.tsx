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
    <div
      className="max-w-[600px] mx-auto rounded-[20px] border p-6 md:p-8 text-center my-16 md:my-24"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--line)',
      }}
    >
      <h3 className="text-h3 font-display font-medium mb-2" style={{ color: 'var(--ink)' }}>
        Stay in the Loop
      </h3>
      <p className="text-sm mb-6" style={{ color: 'var(--ink-60)' }}>
        Policy updates, event announcements, and opportunities — delivered to your inbox.
      </p>
      {submitted ? (
        <div className="flex items-center justify-center gap-2 py-3" style={{ color: 'var(--canopy-green)' }}>
          <Check size={18} />
          <span className="text-sm font-medium">Thanks for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2"
              style={{ color: 'var(--ink-60)' }}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full pl-10 pr-4 py-3 rounded-full text-sm outline-none transition-colors focus:ring-2"
              style={{
                backgroundColor: 'var(--paper)',
                border: '1px solid var(--line)',
                color: 'var(--ink)',
              }}
            />
          </div>
          <button
            type="submit"
            className="btn-pill px-6 py-3 text-sm font-medium whitespace-nowrap"
            style={{
              backgroundColor: 'var(--signal-lime)',
              color: '#0B1220',
            }}
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
