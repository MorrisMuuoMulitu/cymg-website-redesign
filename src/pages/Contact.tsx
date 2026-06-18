import { useState } from 'react';
import { Mail, Lock, MapPin, Send } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const topics = [
  'General Inquiry',
  'UNEA Coordination',
  'Media & Press',
  'Partnership',
  'Working Group Collaboration',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', topic: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--assembly-blue)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
              Send a Message
            </h2>
            {submitted ? (
              <div
                className="rounded-[20px] p-8 text-center"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <Send size={32} className="mx-auto mb-4" style={{ color: 'var(--canopy-green)' }} />
                <p className="text-body-lg" style={{ color: 'var(--ink)' }}>
                  Message sent! We will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
                    style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
                    style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                    Topic *
                  </label>
                  <select
                    required
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
                    style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
                  >
                    <option value="">Select a topic</option>
                    {topics.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--ink)' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 resize-none"
                    style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-pill self-start"
                  style={{ backgroundColor: 'var(--assembly-blue)', color: 'var(--paper)' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
              Direct Contact
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, label: 'General Inquiries', email: 'info@cymg.org' },
                { icon: Mail, label: 'UNEA Coordination', email: 'unea@cymg.org' },
                { icon: Lock, label: 'Safeguarding', email: 'safeguarding@cymg.org', isSensitive: true },
              ].map((contact) => (
                <div
                  key={contact.label}
                  className="rounded-[20px] p-6 flex items-start gap-4"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
                >
                  <contact.icon
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: contact.isSensitive ? 'var(--clay)' : 'var(--assembly-blue)' }}
                  />
                  <div>
                    <p className="font-display font-medium mb-1" style={{ color: 'var(--ink)' }}>
                      {contact.label}
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm"
                      style={{ color: 'var(--assembly-blue)' }}
                    >
                      {contact.email}
                    </a>
                    {contact.isSensitive && (
                      <p className="text-xs mt-1" style={{ color: 'var(--clay)' }}>
                        This is a confidential channel for safeguarding reports.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-8 rounded-[20px] p-6"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} style={{ color: 'var(--canopy-green)' }} />
                <h3 className="font-display font-medium" style={{ color: 'var(--ink)' }}>
                  Global Presence
                </h3>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--ink-60)' }}>
                CYMG operates across 6 UNEP regions with regional facilitators coordinating local
                youth environmental engagement. Our coordination hub is in Nairobi, Kenya, close to
                UNEP headquarters.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['Africa', 'Asia-Pacific', 'Europe', 'Latin America & Caribbean', 'North America', 'West Asia'].map((region) => (
                  <span key={region} className="text-mono-sm" style={{ color: 'var(--ink-60)' }}>
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
