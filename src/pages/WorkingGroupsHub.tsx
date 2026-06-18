import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { workingGroups, clusterFilters, clusterColors } from '@/data/workingGroups';
import Badge from '@/components/ui/Badge';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

function WgBadgeIcon({ cluster }: { cluster: string }) {
  return (
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-line dark:border-white/5 bg-white dark:bg-slate-800"
    >
      {cluster === 'pollution' && <ShieldCheck size={28} className="text-amber-500" />}
      {cluster === 'nature' && <Layers size={28} className="text-emerald-500" />}
      {cluster === 'policy' && <Zap size={28} className="text-blue-500" />}
    </div>
  );
}

export default function WorkingGroupsHub() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return workingGroups;
    return workingGroups.filter((wg) => wg.cluster === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-paper dark:bg-ink min-h-screen">
      {/* Hero */}
      <div className="pt-32 pb-20 px-6 bg-[#0A1128] text-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'Thematic Working Groups' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mt-8 tracking-tight"
          >
            Thematic <span className="text-[var(--assembly-blue)]">Working Groups</span>
          </motion.h1>
          <p className="text-xl text-slate-400 mt-6 max-w-3xl leading-relaxed">
            Thirteen specialized groups coordinating global youth voices across every major environmental priority.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12 bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-xl border border-line dark:border-white/5">
          {clusterFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                activeFilter === f.value
                  ? 'bg-[var(--assembly-blue)] text-white shadow-lg'
                  : 'bg-transparent text-slate-500 hover:text-[var(--assembly-blue)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((wg, i) => (
            <motion.div
              key={wg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
            >
              <Link
                to={`/working-groups/${wg.slug}`}
                className="group bg-white dark:bg-slate-900 rounded-[32px] p-10 flex flex-col items-start transition-all duration-500 border border-line dark:border-white/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 h-full"
              >
                <WgBadgeIcon cluster={wg.cluster} />
                <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-none font-black text-[10px] tracking-widest mb-4">
                  {clusterColors[wg.cluster].label}
                </Badge>
                <h3 className="text-2xl font-black text-ink dark:text-paper mb-4 leading-tight group-hover:text-[var(--assembly-blue)] transition-colors">
                  {wg.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8 flex-1">
                  {wg.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-black text-[var(--assembly-blue)] uppercase tracking-widest">
                  View Detail <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
