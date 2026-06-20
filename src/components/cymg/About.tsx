import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="bg-paper border-b border-line"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[var(--cymg-green)]" />
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--cymg-green)] font-medium">About CYMG</p>
            </div>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-medium text-ink leading-[1.2]">
              Official youth voice to UNEP
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-lg md:text-xl leading-[1.7] text-ink font-light mb-6 max-w-3xl">
              The Children and Youth Major Group to UNEP (CYMG) is the official UN-recognized constituency for children and youth engaging with the United Nations Environment Programme.
            </p>
            <p className="text-base md:text-lg leading-[1.7] text-[var(--ink-60)] font-light mb-8 max-w-3xl">
              Formed in 2012, CYMG is run almost entirely by youth volunteers across six world regions. We coordinate 13 thematic working groups spanning pollution and chemicals, nature and ecosystems, and policy, governance, and finance — ensuring that young people&apos;s voices are heard in environmental decision-making.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--cymg-green)] hover:text-[var(--cymg-green-deep)] transition-colors"
            >
              Read our mandate <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
