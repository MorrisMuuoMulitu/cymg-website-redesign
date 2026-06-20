import { useState, useMemo } from 'react';
import { teamMembers, roleCategoryFilters, regionFilters } from '@/data/teamMembers';
import PersonCard from '@/components/ui/PersonCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion } from 'framer-motion';
import { Users, Filter } from 'lucide-react';

export default function Team() {
  const [roleFilter, setRoleFilter] = useState('all');
  const [regionFilter, setRegionFilter] = useState('all');

  const filtered = useMemo(() => {
    return teamMembers.filter((m) => {
      if (roleFilter !== 'all' && m.roleCategory !== roleFilter) return false;
      if (regionFilter !== 'all' && m.region !== regionFilter) return false;
      return true;
    });
  }, [roleFilter, regionFilter]);

  return (
    <div className="bg-paper min-h-screen">
      {/* Hero */}
      <div className="pt-16 pb-14 px-4 sm:px-6 lg:px-8 bg-surface border-b border-line text-ink">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: 'Our Team' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-medium mt-6"
          >
            Meet the <span className="text-[var(--cymg-green)]">Leaders</span>
          </motion.h1>
          <p className="text-lg text-[var(--ink-60)] font-light mt-5 max-w-3xl leading-relaxed">
            The dedicated volunteers steering CYMG across 6 regions and 13 thematic working groups.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="bg-paper border border-line p-5 mb-12 flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
          <div className="flex items-center gap-3">
            <Filter size={18} className="text-[var(--cymg-green)]" />
            <span className="text-xs uppercase tracking-[0.1em] font-medium text-[var(--ink-60)]">Filter by</span>
          </div>
          
          <div className="flex flex-wrap gap-2 flex-1">
            {roleCategoryFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setRoleFilter(f.value)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] transition-colors border ${
                  roleFilter === f.value
                    ? 'bg-[var(--cymg-green)] border-[var(--cymg-green)] text-white'
                    : 'bg-transparent border-line text-[var(--ink-60)] hover:border-[var(--cymg-green)] hover:text-[var(--cymg-green)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="w-full lg:w-64">
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full bg-surface border border-line px-4 py-2.5 text-sm text-ink focus:border-[var(--cymg-green)] outline-none"
            >
              <option value="all">All Regions</option>
              {regionFilters.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
            >
              <PersonCard
                name={member.name}
                role={member.role}
                country={member.country}
                email={member.email}
                isVacant={member.isVacant}
                tags={member.region ? [member.region] : undefined}
              />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 bg-surface border-2 border-dashed border-line">
            <Users size={40} className="mx-auto text-[var(--ink-60)] mb-4" />
            <h3 className="text-xl font-medium text-ink">No members found</h3>
            <p className="text-sm text-[var(--ink-60)] mt-2 font-light">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
}
