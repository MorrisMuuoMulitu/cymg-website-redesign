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
    title: 'Thematic Areas',
    links: [
      { label: 'Working Groups', href: '/working-groups' },
      { label: 'Chemicals & Waste', href: '/working-groups' },
      { label: 'Nature & Ecosystems', href: '/working-groups' },
      { label: 'Ocean Governance', href: '/working-groups' },
    ],
  },
  {
    title: 'Engagement',
    links: [
      { label: 'UNEA Hub', href: '/unea-and-core-processes' },
      { label: 'YEA 2025', href: '/unea-and-core-processes' },
      { label: 'Global Youth Deployment', href: '/join' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Latest Stories', href: '/blog' },
      { label: 'Documents Hub', href: '/documents' },
      { label: 'Events Calendar', href: '/calendar' },
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
    <footer className="w-full bg-[#0A1128] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/cymg-logo-refined.svg"
                alt="CYMG — Children and Youth Major Group"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              The formal channel for children and youth participation in the UN Environment Programme, empowering the next generation to lead global environmental action.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-all hover:bg-[var(--assembly-blue)] hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-slate-500">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Children and Youth Major Group. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs text-slate-500 font-medium">
            <Link to="/about/policies-and-safeguarding" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
