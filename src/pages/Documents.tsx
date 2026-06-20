import { useState, useMemo } from 'react';
import { documents, documentTypeFilters, documentYearFilters } from '@/data/documents';
import { FileText, Download, Eye } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const typeColors: Record<string, string> = {
  policy: '#1e4d32',
  resolution: '#163b26',
  report: '#2d5a3d',
  declaration: '#4a7c59',
};

export default function Documents() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return documents.filter((doc) => {
      if (typeFilter !== 'all' && doc.type !== typeFilter) return false;
      if (yearFilter !== 'all' && doc.year.toString() !== yearFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return doc.title.toLowerCase().includes(q) || doc.description.toLowerCase().includes(q);
      }
      return true;
    });
  }, [typeFilter, yearFilter, searchQuery]);

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--cymg-green)' }}>
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: 'Documents' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            Document Library
          </h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-24">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {documentTypeFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setTypeFilter(f.value)}
                className="text-mono-sm px-4 py-2 rounded-sm transition-all"
                style={{
                  backgroundColor: typeFilter === f.value ? 'var(--cymg-green)' : 'var(--surface)',
                  color: typeFilter === f.value ? 'var(--paper)' : 'var(--ink)',
                  border: typeFilter === f.value ? 'none' : '1px solid var(--line)',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="px-4 py-2 rounded-sm text-mono-sm outline-none"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
          >
            {documentYearFilters.map((f) => (
              <option key={f.value} value={f.value}>{f.label}</option>
            ))}
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documents..."
            className="flex-1 max-w-sm px-4 py-2 rounded-sm text-sm outline-none"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((doc) => (
            <div
              key={doc.id}
              className="rounded-sm p-6 flex flex-col"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: (typeColors[doc.type] || '#1e4d32') + '15' }}
                >
                  <FileText size={18} style={{ color: typeColors[doc.type] || '#1e4d32' }} />
                </div>
                <Badge color={typeColors[doc.type] || '#1e4d32'}>
                  {doc.type.charAt(0).toUpperCase() + doc.type.slice(1)}
                </Badge>
              </div>
              <h3 className="font-display text-lg font-medium mb-2" style={{ color: 'var(--ink)' }}>
                {doc.title}
              </h3>
              <p className="text-sm mb-4 flex-1" style={{ color: 'var(--ink-60)' }}>
                {doc.description}
              </p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--line)' }}>
                <div className="flex items-center gap-3">
                  <span className="text-mono-sm" style={{ color: 'var(--ink-60)' }}>{doc.year}</span>
                  <span className="text-mono-sm" style={{ color: 'var(--ink-60)' }}>{doc.fileSize}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    className="p-2 rounded-sm transition-opacity hover:opacity-70"
                    style={{ color: 'var(--cymg-green)' }}
                    aria-label="View"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    className="p-2 rounded-sm transition-opacity hover:opacity-70"
                    style={{ color: 'var(--cymg-green)' }}
                    aria-label="Download"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>
              {doc.relatedMEA && (
                <span className="text-mono-sm mt-2" style={{ color: 'var(--ink-60)' }}>
                  {doc.relatedMEA}
                </span>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-body-lg" style={{ color: 'var(--ink-60)' }}>
              No documents match your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
