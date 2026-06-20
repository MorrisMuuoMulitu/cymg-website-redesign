import Hero from '@/components/cymg/Hero';
import BlogPreview from '@/components/cymg/BlogPreview';
import StatsStrip from '@/components/cymg/StatsStrip';
import About from '@/components/cymg/About';
import GetInvolved from '@/components/cymg/GetInvolved';
import NewsletterCTA from '@/components/ui/NewsletterCTA';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <StatsStrip />
      <About />

      {/* What we do — CYMG green section */}
      <section className="bg-[var(--cymg-green)] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-white/50" />
            <p className="text-xs uppercase tracking-[0.15em] text-white/70 font-medium">What we do</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium leading-[1.2] mb-12 max-w-2xl">
            We connect youth voices with UN environmental processes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'UN Environment Assembly',
                desc: 'Coordinate youth participation in UNEA, the world\'s highest-level decision-making body on the environment.',
                href: '/unea-and-core-processes',
              },
              {
                title: 'Thematic Working Groups',
                desc: 'Thirteen specialised groups covering pollution, nature, ecosystems, policy, governance and finance.',
                href: '/working-groups',
              },
              {
                title: 'Regional Networks',
                desc: 'Six UNEP regional hubs that channel local perspectives into global policy discussions.',
                href: '/regions',
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/30 pt-6">
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-base text-white/85 font-light leading-relaxed mb-4">
                  {item.desc}
                </p>
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-white hover:text-white/80 transition-colors"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming landmark */}
      <section className="py-20 md:py-28 bg-paper border-b border-line">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-[var(--cymg-green)]" />
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--cymg-green)] font-medium">Upcoming</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-ink leading-[1.2] mb-6">
                Road to UNEA-7 and the Youth Environment Assembly
              </h2>
              <p className="text-lg md:text-xl text-[var(--ink-60)] font-light leading-relaxed mb-8">
                Youth representatives from around the world will convene in Nairobi to shape policy inputs for the UN Environment Assembly and related processes.
              </p>
              <Link
                to="/unea-and-core-processes"
                className="inline-block px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white bg-[var(--cymg-green)] hover:bg-[var(--cymg-green-deep)] transition-colors"
              >
                Track the cycle
              </Link>
            </div>

            <div className="relative">
              <div className="border border-line overflow-hidden bg-paper">
                <img
                  src="https://ik.imagekit.io/5zp8ovb7c/CYMG/Yea2025.avif?updatedAt=1757413112399"
                  alt="Youth representatives at the Youth Environment Assembly"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-[10px] text-[var(--ink-60)] italic mt-2 text-right">Photo: CYMG</p>
            </div>
          </div>
        </div>
      </section>

      <BlogPreview />

      {/* Leadership preview */}
      <section className="py-20 md:py-28 bg-surface border-b border-line">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-[var(--cymg-green)]" />
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--cymg-green)] font-medium">Leadership</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-ink leading-[1.2] mb-6">
                Run by youth volunteers
              </h2>
              <p className="text-lg md:text-xl text-[var(--ink-60)] font-light leading-relaxed mb-8">
                CYMG is coordinated by a Global Steering Committee, regional facilitators, and working group focal points. All roles are held by young people under 30.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/governance"
                  className="inline-block px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white bg-[var(--cymg-green)] hover:bg-[var(--cymg-green-deep)] transition-colors"
                >
                  Governance
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-ink border border-line hover:border-[var(--cymg-green)] hover:text-[var(--cymg-green)] transition-colors"
                >
                  Meet the team
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-line overflow-hidden bg-paper">
                <img
                  src="https://ik.imagekit.io/5zp8ovb7c/CYMG/Leadership.jpg?updatedAt=1757854905899"
                  alt="CYMG leadership meeting"
                  className="w-full h-48 object-cover"
                />
                <p className="text-[10px] text-[var(--ink-60)] italic p-2 text-right">Photo: CYMG</p>
              </div>
              <div className="border border-line overflow-hidden bg-paper">
                <img
                  src="https://ik.imagekit.io/5zp8ovb7c/CYMG/CYMG2.jpg?updatedAt=1757418792418"
                  alt="CYMG regional representatives"
                  className="w-full h-48 object-cover"
                />
                <p className="text-[10px] text-[var(--ink-60)] italic p-2 text-right">Photo: CYMG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterCTA />
      <GetInvolved />
    </div>
  );
}
