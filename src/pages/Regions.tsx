import { useState } from 'react';
import { regions } from '@/data/regions';
import { teamMembers } from '@/data/teamMembers';
import { Mail, MapPin, Calendar, X, Globe } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion, AnimatePresence } from 'framer-motion';

export default function Regions() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const activeRegion = regions.find((r) => r.id === selectedRegion);
  const facilitator = activeRegion
    ? teamMembers.find((m) => m.region === activeRegion.name && m.roleCategory === 'regional-facilitator')
    : undefined;

  return (
    <div className="bg-paper dark:bg-ink min-h-screen">
      {/* Hero */}
      <div className="pt-32 pb-20 px-6 bg-[#0A1128] text-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'Regions' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mt-8 tracking-tight"
          >
            Global <span className="text-[var(--assembly-blue)]">Regions</span>
          </motion.h1>
          <p className="text-xl text-slate-400 mt-6 max-w-3xl leading-relaxed">
            Organized across 6 UNEP regions plus special seats, ensuring local perspectives reach the highest levels of global environmental governance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Region List */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id === selectedRegion ? null : region.id)}
                  className={`text-left rounded-2xl px-6 py-5 transition-all duration-300 border ${
                    selectedRegion === region.id
                      ? 'bg-[var(--assembly-blue)] border-[var(--assembly-blue)] text-white shadow-lg scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 border-line dark:border-white/5 text-ink dark:text-paper hover:border-[var(--assembly-blue)] hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">
                      {region.name}
                    </span>
                    {region.type === 'special' ? (
                      <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        selectedRegion === region.id ? 'bg-white/20 text-white' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                      }`}>
                        Special
                      </span>
                    ) : (
                      <Globe size={18} className={selectedRegion === region.id ? 'text-white' : 'text-slate-300'} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Region Detail Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeRegion ? (
                <motion.div
                  key={activeRegion.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-slate-900 rounded-[32px] p-10 shadow-2xl border border-line dark:border-white/5"
                >
                  <div className="flex items-start justify-between mb-10 pb-8 border-b border-line dark:border-white/5">
                    <div>
                      <h2 className="text-4xl font-extrabold text-ink dark:text-paper mb-2 tracking-tight">
                        {activeRegion.name}
                      </h2>
                      {activeRegion.type === 'special' && (
                        <span className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest text-xs">
                          Liaison / Host Seat
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedRegion(null)}
                      className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                      <X size={24} className="text-slate-400" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Facilitator */}
                    <div className="space-y-6">
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                        Regional Facilitator
                      </h3>
                      {facilitator && !facilitator.isVacant ? (
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-line dark:border-white/5">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white text-2xl font-black">
                              {facilitator.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                            </div>
                            <div>
                              <p className="font-bold text-ink dark:text-paper">
                                {facilitator.name}
                              </p>
                              <p className="text-sm text-slate-500 font-medium">
                                {facilitator.country}
                              </p>
                            </div>
                          </div>
                          <a
                            href={`mailto:${facilitator.email}`}
                            className="btn-pill w-full bg-white dark:bg-slate-900 border border-line dark:border-white/5 justify-center py-2.5 hover:bg-[var(--assembly-blue)] hover:text-white transition-all text-sm font-bold"
                          >
                            <Mail size={16} /> Contact Facilitator
                          </a>
                        </div>
                      ) : (
                        <div className="p-8 rounded-2xl border-2 border-dashed border-line dark:border-white/10 text-center">
                          <p className="text-sm text-slate-500 italic mb-4">Facilitator position currently vacant.</p>
                          <a href="/join" className="text-sm font-black text-[var(--assembly-blue)] hover:underline">Apply to Volunteer</a>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                          Key Initiatives
                        </h3>
                        <ul className="space-y-3">
                          {activeRegion.initiatives.map((init) => (
                            <li key={init} className="flex items-start gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                              {init}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                          Regional Events
                        </h3>
                        <ul className="space-y-3">
                          {activeRegion.events.map((evt) => (
                            <li key={evt.title} className="flex items-center gap-3 text-sm font-medium text-ink dark:text-paper">
                              <Calendar size={16} className="text-[var(--assembly-blue)]" />
                              <span>{evt.title}</span>
                              <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-full ml-auto">{evt.date}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-12 rounded-[32px] border-2 border-dashed border-line dark:border-white/10">
                  <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <MapPin size={40} className="text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-400 mb-2">Explore Our Global Reach</h3>
                  <p className="text-slate-500 max-w-md mx-auto">
                    Select a region from the list to view regional facilitators, specific initiatives, and upcoming local events.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircle2({ size, className }: { size?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
