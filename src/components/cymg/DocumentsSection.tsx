

import { useState, useMemo } from 'react'
import {
  Search,
  FileText,
  Gavel,
  BarChart3,
  ScrollText,
  Eye,
  Download,
  AlertTriangle,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Document types                                                     */
/* ------------------------------------------------------------------ */

type DocType = 'Policy' | 'Resolution' | 'Report' | 'Declaration'

interface DocEntry {
  title: string
  type: DocType
  year: number
}

const TYPE_FILTERS = ['All', 'Policy', 'Resolution', 'Report', 'Declaration'] as const
type TypeFilter = (typeof TYPE_FILTERS)[number]

const TYPE_META: Record<DocType, { icon: typeof FileText; color: string; darkColor: string; bgColor: string; darkBgColor: string }> = {
  Policy: {
    icon: FileText,
    color: 'text-assembly-blue',
    darkColor: 'dark:text-dark-assembly-blue',
    bgColor: 'bg-assembly-blue/10',
    darkBgColor: 'dark:bg-dark-assembly-blue/20',
  },
  Resolution: {
    icon: Gavel,
    color: 'text-clay',
    darkColor: 'dark:text-clay',
    bgColor: 'bg-clay/10',
    darkBgColor: 'dark:bg-clay/20',
  },
  Report: {
    icon: BarChart3,
    color: 'text-canopy-green',
    darkColor: 'dark:text-canopy-green',
    bgColor: 'bg-canopy-green/10',
    darkBgColor: 'dark:bg-canopy-green/20',
  },
  Declaration: {
    icon: ScrollText,
    color: 'text-ink-60',
    darkColor: 'dark:text-muted-foreground',
    bgColor: 'bg-signal-lime/10',
    darkBgColor: 'dark:bg-signal-lime/10',
  },
}

/* ------------------------------------------------------------------ */
/*  Placeholder documents                                              */
/* ------------------------------------------------------------------ */

const DOCUMENTS: DocEntry[] = [
  {
    title: 'Youth Declaration for UNEA-6',
    type: 'Declaration',
    year: 2024,
  },
  {
    title: 'CYMG Position Paper on Plastic Pollution',
    type: 'Policy',
    year: 2024,
  },
  {
    title: 'UNEA-6 Resolution Tracker',
    type: 'Report',
    year: 2024,
  },
  {
    title: 'Children and Youth Input to the Global Biodiversity Framework',
    type: 'Policy',
    year: 2023,
  },
  {
    title: 'Stockholm+50 Youth Position Paper',
    type: 'Policy',
    year: 2022,
  },
  {
    title: 'CYMG Governance Structure',
    type: 'Report',
    year: 2023,
  },
  {
    title: 'Mandate and Legal Basis Reference',
    type: 'Report',
    year: 2022,
  },
]

/* ------------------------------------------------------------------ */
/*  Document Card                                                      */
/* ------------------------------------------------------------------ */

function DocCard({ doc }: { doc: DocEntry }) {
  const meta = TYPE_META[doc.type]
  const Icon = meta.icon

  return (
    <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-5 flex flex-col h-full">
      {/* Icon + Type badge */}
      <div className="flex items-center justify-between mb-3">
        <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg', meta.bgColor, meta.darkBgColor)}>
          <Icon className={cn('h-5 w-5', meta.color, meta.darkColor)} />
        </div>
        <span
          className={cn(
            'inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold',
            meta.bgColor, meta.darkBgColor, meta.color, meta.darkColor
          )}
        >
          {doc.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-sans text-sm font-semibold text-ink dark:text-paper leading-snug mb-2 flex-1">
        {doc.title}
      </h3>

      {/* Year */}
      <p className="font-mono text-xs text-muted-foreground mb-4">{doc.year}</p>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-auto">
        <button
          className="inline-flex items-center gap-1.5 rounded-full border border-line dark:border-white/10 px-3 py-1.5 text-xs font-medium text-ink dark:text-paper hover:bg-assembly-blue/5 dark:hover:bg-dark-assembly-blue/10 transition-colors"
          aria-label={`View ${doc.title}`}
        >
          <Eye className="w-3.5 h-3.5" />
          View
        </button>
        <button
          className="inline-flex items-center gap-1.5 rounded-full border border-line dark:border-white/10 px-3 py-1.5 text-xs font-medium text-ink dark:text-paper hover:bg-assembly-blue/5 dark:hover:bg-dark-assembly-blue/10 transition-colors"
          aria-label={`Download ${doc.title}`}
        >
          <Download className="w-3.5 h-3.5" />
          Download
        </button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  DocumentsSection Component                                         */
/* ------------------------------------------------------------------ */

export default function DocumentsSection() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('All')
  const [yearFilter, setYearFilter] = useState<string>('All')

  // Derive available years
  const years = useMemo(() => {
    const set = new Set(DOCUMENTS.map((d) => d.year))
    return Array.from(set).sort((a, b) => b - a)
  }, [])

  // Filter documents
  const filtered = useMemo(() => {
    return DOCUMENTS.filter((doc) => {
      const matchesType = typeFilter === 'All' || doc.type === typeFilter
      const matchesYear = yearFilter === 'All' || String(doc.year) === yearFilter
      const matchesSearch =
        !search.trim() ||
        doc.title.toLowerCase().includes(search.toLowerCase())
      return matchesType && matchesYear && matchesSearch
    })
  }, [search, typeFilter, yearFilter])

  return (
    <section
      id="documents"
      className="bg-paper dark:bg-ink py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="font-serif text-ink dark:text-paper"
            style={{
              fontSize: 'var(--text-h2)',
              fontVariationSettings: "'wght' 600, 'SOFT' 50, 'WONK' 1",
            }}
          >
            Documents
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Policy papers, resolutions, reports &amp; declarations
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search documents…"
            className="w-full rounded-lg border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] pl-11 pr-4 py-3 text-sm text-ink dark:text-paper placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-assembly-blue dark:focus:ring-dark-assembly-blue focus:border-transparent transition-shadow"
            aria-label="Search documents"
          />
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {/* Type pills */}
          <div className="flex flex-wrap gap-2">
            {TYPE_FILTERS.map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider font-medium transition-colors',
                  typeFilter === type
                    ? 'bg-assembly-blue text-white dark:bg-dark-assembly-blue dark:text-ink'
                    : 'border border-line dark:border-white/10 text-ink dark:text-paper hover:bg-assembly-blue/5 dark:hover:bg-dark-assembly-blue/10'
                )}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Year dropdown */}
          <div className="ml-auto">
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="rounded-lg border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-ink dark:text-paper focus:outline-none focus:ring-2 focus:ring-assembly-blue dark:focus:ring-dark-assembly-blue transition-shadow"
              aria-label="Filter by year"
            >
              <option value="All">All Years</option>
              {years.map((y) => (
                <option key={y} value={String(y)}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Editorial note */}
        <div className="flex items-start gap-1.5 text-xs text-muted-foreground bg-signal-lime/10 dark:bg-signal-lime/5 rounded-lg px-3 py-2 mb-6">
          <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-signal-lime dark:text-signal-lime" />
          <span className="font-mono text-[10px] uppercase tracking-wide">Editorial note: document entries are placeholders and need verification during content migration</span>
        </div>

        {/* Document cards grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((doc) => (
              <DocCard key={doc.title} doc={doc} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FileText className="mx-auto h-10 w-10 text-muted-foreground/50 mb-3" />
            <p className="text-sm text-muted-foreground">No documents match your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
