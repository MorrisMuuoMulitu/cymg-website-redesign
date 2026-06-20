import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { workingGroups, clusterFilters, clusterColors } from '@/data/workingGroups';
import Badge from '@/components/ui/Badge';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const clusterIconStyles: Record<string, { icon: typeof ShieldCheck; color: string }> = {
  pollution: { icon: ShieldCheck, color: 'var(--cymg-green-bright)' },
  nature: { icon: Layers, color: 'var(--cymg-green-light)' },
  policy: { icon: Zap, color: 'var(--cymg-green)' },
};

function WgBadgeIcon({ cluster }: { cluster: string }) {
  const { icon: Icon, color } = clusterIconStyles[cluster] || clusterIconStyles.policy;
  return (
    <div
      className="w-14 h-14 flex items-center justify-center mb-6 border border-line bg-paper"
    >
      <Icon size={28} style={{ color }} />
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
    <div className="bg-paper min-h-screen">
      {/* Hero */}
      <div className="pt-16 pb-14 px-4 sm:px-6 lg:px-8 bg-surface border-b border-line text-ink">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: 'Thematic Working Groups' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-medium mt-6"
          >
            Thematic <span className="text-[var(--cymg-green)]">Working Groups</span>
          </motion.h1>
          <p className="text-lg text-[var(--ink-60)] font-light mt-5 max-w-3xl leading-relaxed">
            Thirteen specialised groups coordinating global youth voices across every major environmental priority.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12 bg-paper p-4 border border-line">
          {clusterFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-colors ${
                activeFilter === f.value
                  ? 'bg-[var(--cymg-green)] text-white'
                  : 'bg-transparent text-[var(--ink-60)] hover:text-[var(--cymg-green)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group bg-paper border border-line hover:border-[var(--cymg-green)] p-8 flex flex-col items-start transition-colors h-full"
              >
                <WgBadgeIcon cluster={wg.cluster} />
                <Badge className="bg-surface text-[var(--cymg-green)] border-none font-medium text-[10px] tracking-widest uppercase mb-4">
                  {clusterColors[wg.cluster].label}
                </Badge>
                <h3 className="text-xl font-medium text-ink mb-3 leading-tight group-hover:text-[var(--cymg-green)] transition-colors">
                  {wg.name}
                </h3>
                <p className="text-[var(--ink-60)] leading-relaxed font-light mb-6 flex-1">
                  {wg.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--cymg-green)] group-hover:text-[var(--cymg-green-deep)] transition-colors">
                  View detail <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
