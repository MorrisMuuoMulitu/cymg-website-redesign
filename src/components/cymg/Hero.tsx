import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[620px] md:min-h-[720px] flex items-end">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="https://ik.imagekit.io/5zp8ovb7c/CYMG/CYMG.jpeg?updatedAt=1765784359910"
          alt="CYMG youth representatives at a UN meeting"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--cymg-green-dark)]/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--cymg-green-dark)]/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-4 drop-shadow-md">
              Children and Youth Major Group to UNEP
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-[1.1] mb-6 drop-shadow-lg">
              The official youth voice in UN environmental governance
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8 max-w-2xl font-light drop-shadow-md">
              CYMG is the UN-recognized constituency for children and youth engaging with UNEP, UNEA, and multilateral environmental agreements.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/join"
                className="inline-block px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--cymg-green-dark)] bg-paper hover:bg-paper/90 transition-colors"
              >
                Join CYMG
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                About us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Photo credit */}
        <div className="absolute bottom-3 right-4 text-[10px] text-white/60 italic">
          Photo: CYMG
        </div>
      </div>
    </section>
  );
}
