import Hero from '@/components/cymg/Hero';
import BlogPreview from '@/components/cymg/BlogPreview';
import StatsStrip from '@/components/cymg/StatsStrip';
import About from '@/components/cymg/About';
import GetInvolved from '@/components/cymg/GetInvolved';
import NewsletterCTA from '@/components/ui/NewsletterCTA';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Section */}
      <StatsStrip />

      {/* 3. About Section (Brief) */}
      <About />

      {/* 4. Special Feature: UNEA-7 / YEA 2025 */}
      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[var(--assembly-blue)] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                Upcoming Landmark
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-paper mb-6 tracking-tight leading-tight">
                Road to UNEA-7 & <br />
                <span className="text-[var(--assembly-blue)]">Youth Environment Assembly</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Join us in Nairobi for the largest youth-led environmental gathering in the UN system. We are shaping the global agenda for nature, climate, and chemicals management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/unea-and-core-processes"
                  className="btn-pill bg-[var(--assembly-blue)] text-white px-8 py-4 font-bold hover:bg-[var(--assembly-blue-deep)] inline-flex items-center justify-center gap-2"
                >
                  Track the Cycle
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/join"
                  className="btn-pill border-2 border-slate-200 dark:border-white/10 text-ink dark:text-paper px-8 py-4 font-bold hover:bg-slate-50 dark:hover:bg-white/5 inline-flex items-center justify-center"
                >
                  Get Involved
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://ik.imagekit.io/5zp8ovb7c/CYMG/Yea2025.avif?updatedAt=1757413112399"
                  alt="Youth at UNEA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--signal-lime)] p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                <p className="text-[#0A1128] font-bold text-lg leading-tight">
                  "Our voice is not just a witness; it is a catalyst for policy change."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. From the Frontlines (Blog Preview) */}
      <BlogPreview />

      {/* 6. Leadership/Team Section Preview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-paper tracking-tight">
            Driven by <span className="text-[var(--assembly-blue)]">Youth Leadership</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            CYMG is steered by a diverse group of volunteers from across six global regions.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group rounded-3xl overflow-hidden shadow-lg h-[400px]">
            <img
              src="https://ik.imagekit.io/5zp8ovb7c/CYMG/Leadership.jpg?updatedAt=1757854905899"
              alt="CYMG Leadership"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Global Steering Committee</h3>
              <p className="text-sm opacity-80 mb-6 max-w-xs">Coordinating youth engagement across all UN environmental processes.</p>
              <Link to="/governance" className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Meet the Committee <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="relative group rounded-3xl overflow-hidden shadow-lg h-[400px]">
            <img
              src="https://ik.imagekit.io/5zp8ovb7c/CYMG/CYMG2.jpg?updatedAt=1757418792418"
              alt="Regional Focal Points"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Regional Focal Points</h3>
              <p className="text-sm opacity-80 mb-6 max-w-xs">Ensuring local perspectives reach the global stage through six regional hubs.</p>
              <Link to="/regions" className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Explore Regions <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Newsletter Section */}
      <NewsletterCTA />

      {/* 8. Get Involved / Final CTA */}
      <GetInvolved />
    </div>
  );
}
