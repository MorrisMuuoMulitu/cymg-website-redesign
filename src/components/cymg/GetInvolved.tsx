import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="bg-[var(--cymg-green-dark)] text-white"
      aria-labelledby="get-involved-heading"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-white/50" />
              <p className="text-xs uppercase tracking-[0.15em] text-white/70 font-medium">Get involved</p>
            </div>
            <h2
              id="get-involved-heading"
              className="text-3xl md:text-4xl font-medium leading-[1.2] mb-6"
            >
              Take your place in global environmental governance
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-white/85 font-light leading-relaxed mb-8">
              CYMG membership is open to youth-led organisations and individuals. Join a working group, connect with your region, or take part in consultations ahead of UNEA and other UN processes.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/join"
                className="inline-block px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--cymg-green-dark)] bg-white hover:bg-white/90 transition-colors"
              >
                Apply for membership
              </Link>
              <Link
                to="/working-groups"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                Explore working groups <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
