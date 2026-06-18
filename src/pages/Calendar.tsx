import { useState, useMemo } from 'react';
import { calendarEvents } from '@/data/events';
import { Calendar as CalIcon, List, MapPin, Clock } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const categoryColors: Record<string, string> = {
  'working-group': '#E2592C',
  'unea': '#2A4DFF',
  'mea': '#0E6B55',
  'yea': '#D7FF3D',
};

const categoryLabels: Record<string, string> = {
  'working-group': 'Working Group',
  'unea': 'UNEA',
  'mea': 'MEA',
  'yea': 'YEA',
};

export default function Calendar() {
  const [view, setView] = useState<'month' | 'list'>('list');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = useMemo(() => {
    let events = [...calendarEvents].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    if (selectedCategory !== 'all') {
      events = events.filter((e) => e.category === selectedCategory);
    }
    return events;
  }, [selectedCategory]);

  const monthYear = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--canopy-green)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'Calendar' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            Calendar
          </h1>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        {/* Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView('month')}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-mono-sm transition-all"
              style={{
                backgroundColor: view === 'month' ? 'var(--assembly-blue)' : 'var(--surface)',
                color: view === 'month' ? 'var(--paper)' : 'var(--ink)',
                border: view === 'month' ? 'none' : '1px solid var(--line)',
              }}
            >
              <CalIcon size={14} /> Month
            </button>
            <button
              onClick={() => setView('list')}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-mono-sm transition-all"
              style={{
                backgroundColor: view === 'list' ? 'var(--assembly-blue)' : 'var(--surface)',
                color: view === 'list' ? 'var(--paper)' : 'var(--ink)',
                border: view === 'list' ? 'none' : '1px solid var(--line)',
              }}
            >
              <List size={14} /> List
            </button>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-full text-mono-sm outline-none"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
          >
            <option value="all">All Categories</option>
            <option value="unea">UNEA</option>
            <option value="yea">YEA</option>
            <option value="working-group">Working Groups</option>
            <option value="mea">MEAs</option>
          </select>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: categoryColors[key] }}
              />
              <span className="text-mono-sm" style={{ color: 'var(--ink-60)' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* List View */}
        {view === 'list' && (
          <div className="flex flex-col gap-4">
            {filtered.map((event) => {
              const start = new Date(event.startDate);
              const day = start.getDate();
              const month = start.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
              return (
                <div
                  key={event.id}
                  className="rounded-[20px] p-6 flex items-start gap-5"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
                >
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center"
                    style={{ backgroundColor: categoryColors[event.category] + '15' }}
                  >
                    <span
                      className="font-display text-xl font-bold leading-none"
                      style={{ color: categoryColors[event.category] }}
                    >
                      {day}
                    </span>
                    <span
                      className="text-mono-sm"
                      style={{ color: categoryColors[event.category], fontSize: '0.6rem' }}
                    >
                      {month}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-mono-sm px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: categoryColors[event.category] + '18',
                          color: categoryColors[event.category],
                          fontSize: '0.65rem',
                        }}
                      >
                        {categoryLabels[event.category]}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-medium mb-1" style={{ color: 'var(--ink)' }}>
                      {event.title}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: 'var(--ink-60)' }}>
                      {event.description.slice(0, 120)}...
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex items-center gap-1 text-mono-sm" style={{ color: 'var(--ink-60)' }}>
                        <MapPin size={12} /> {event.location}
                      </span>
                      <span className="flex items-center gap-1 text-mono-sm" style={{ color: 'var(--ink-60)' }}>
                        <Clock size={12} /> {event.timezone}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Month View - Simplified */}
        {view === 'month' && (
          <div
            className="rounded-[20px] p-8"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <h2 className="text-h3 font-display mb-6" style={{ color: 'var(--ink)' }}>
              {monthYear}
            </h2>
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} className="text-center text-mono-sm py-2" style={{ color: 'var(--ink-60)' }}>
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i - 2;
                const dayEvents = filtered.filter((e) => {
                  const d = new Date(e.startDate);
                  return d.getDate() === day && d.getMonth() === new Date().getMonth();
                });
                return (
                  <div
                    key={i}
                    className="aspect-square rounded-xl p-1 flex flex-col items-center justify-start gap-1"
                    style={{
                      backgroundColor: day > 0 ? 'var(--paper)' : 'transparent',
                      border: day > 0 ? '1px solid var(--line)' : 'none',
                    }}
                  >
                    {day > 0 && (
                      <>
                        <span className="text-xs" style={{ color: 'var(--ink)' }}>{day}</span>
                        <div className="flex flex-wrap gap-0.5 justify-center">
                          {dayEvents.slice(0, 3).map((e) => (
                            <div
                              key={e.id}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: categoryColors[e.category] }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-sm mt-6 text-center" style={{ color: 'var(--ink-60)' }}>
              Switch to List view for detailed event information and dates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
