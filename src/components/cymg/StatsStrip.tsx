export default function StatsStrip() {
  return (
    <section className="bg-paper border-b border-line">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: '2012', label: 'Established' },
            { value: '13', label: 'Thematic groups' },
            { value: '6', label: 'UNEP regions' },
            { value: '100+', label: 'Member organisations' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`py-10 px-6 text-center ${i > 0 ? 'lg:border-l border-line' : ''}`}
            >
              <div className="text-3xl md:text-4xl font-medium text-[var(--cymg-green)] mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.1em] text-[var(--ink-60)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
