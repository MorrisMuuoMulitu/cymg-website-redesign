import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from 'lucide-react';

const footerColumns = [
  {
    title: 'Organization',
    links: [
      { label: 'About CYMG', href: '/about' },
      { label: 'History & Mandate', href: '/about/history-mandate' },
      { label: 'Governance', href: '/governance' },
      { label: 'Our Team', href: '/team' },
    ],
  },
  {
    title: 'Engagement',
    links: [
      { label: 'Working Groups', href: '/working-groups' },
      { label: 'UNEA Hub', href: '/unea-and-core-processes' },
      { label: 'Regions', href: '/regions' },
      { label: 'Join', href: '/join' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documents', href: '/documents' },
      { label: 'Calendar', href: '/calendar' },
      { label: 'Policies', href: '/about/policies-and-safeguarding' },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/cymgunep' },
  { icon: Twitter, label: 'X/Twitter', href: 'https://twitter.com/cymgunep' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@cymgunep' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/cymgunep' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/cymgunep' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-line">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/cymg-logo-refined.svg"
                alt="CYMG — Children and Youth Major Group"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-[var(--ink-60)] leading-relaxed mb-6 max-w-sm">
              The official UN-recognized constituency for children and youth engaging with the UN Environment Programme.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[var(--ink-60)] hover:text-[var(--cymg-green)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium uppercase tracking-wide mb-4 text-[var(--ink-60)]">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-ink hover:text-[var(--cymg-green)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[var(--ink-60)]">
            &copy; {new Date().getFullYear()} Children and Youth Major Group. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs text-[var(--ink-60)]">
            <Link to="/about/policies-and-safeguarding" className="hover:text-ink transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-ink transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
