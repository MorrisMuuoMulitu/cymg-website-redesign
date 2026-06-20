import { useParams, Link, Navigate } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { workingGroups, clusterColors } from '@/data/workingGroups';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import NewsletterCTA from '@/components/ui/NewsletterCTA';

export default function WorkingGroupDetail() {
  const { slug } = useParams<{ slug: string }>();
  const wg = workingGroups.find((g) => g.slug === slug);

  if (!wg) return <Navigate to="/working-groups" replace />;

  const cluster = clusterColors[wg.cluster];

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      {/* Hero */}
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: cluster.color }}>
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[
            { label: 'Working Groups', href: '/working-groups' },
            { label: wg.name },
          ]} />
          <Link
            to="/working-groups"
            className="inline-flex items-center gap-2 text-sm mt-4 mb-4 opacity-80 hover:opacity-100 transition-opacity"
            style={{ color: 'var(--paper)' }}
          >
            <ArrowLeft size={16} /> Back to all groups
          </Link>
          <h1 className="text-h1 font-display font-bold" style={{ color: 'var(--paper)' }}>
            {wg.name}
          </h1>
          <Badge color="var(--paper)">{cluster.label}</Badge>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-24">
        {/* Mission */}
        <div className="mb-16">
          <h2 className="text-h2 font-display mb-4" style={{ color: 'var(--ink)' }}>
            Our Mission
          </h2>
          <p className="text-body-lg max-w-[65ch]" style={{ color: 'var(--ink)' }}>
            {wg.mission}
          </p>
        </div>

        {/* Highlights */}
        {wg.highlights.length > 0 && (
          <div className="mb-16">
            <h2 className="text-h3 font-display mb-6" style={{ color: 'var(--ink)' }}>
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wg.highlights.map((h, i) => (
                <div
                  key={i}
                  className="rounded-sm p-6 bg-surface border border-line"
                >
                  <h3 className="font-display text-lg font-medium mb-2 text-ink">
                    {h.title}
                  </h3>
                  <p className="text-sm text-[var(--ink-60)]">{h.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Engagements */}
        {wg.engagements.length > 0 && (
          <div className="mb-16">
            <h2 className="text-h3 font-display mb-6" style={{ color: 'var(--ink)' }}>
              Featured Engagements
            </h2>
            <div className="flex flex-col gap-4">
              {wg.engagements.map((e, i) => (
                <div
                  key={i}
                  className="rounded-sm p-6 flex items-start gap-4 bg-surface border border-line"
                >
                  <div
                    className="w-3 h-3 rounded-sm mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: cluster.color }}
                  />
                  <div>
                    <h3 className="font-display font-medium mb-1 text-ink">
                      {e.title}
                    </h3>
                    <p className="text-sm text-[var(--ink-60)]">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Focal Points */}
        <div className="mb-16">
          <h2 className="text-h3 font-display mb-6" style={{ color: 'var(--ink)' }}>
            Focal Points
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wg.focalPoints.map((fp, i) => (
              <div
                key={i}
                className="rounded-sm p-6 bg-surface border border-line"
              >
                <h3 className="font-display font-medium mb-1 text-ink">
                  {fp.name}
                </h3>
                <p className="text-mono-sm mb-3 text-[var(--ink-60)]">{fp.country}</p>
                <a
                  href={`mailto:${fp.email}`}
                  className="inline-flex items-center gap-2 text-sm text-[var(--cymg-green)] hover:text-[var(--cymg-green-deep)]"
                >
                  <Mail size={14} /> {fp.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        <NewsletterCTA />
      </div>
    </div>
  );
}
