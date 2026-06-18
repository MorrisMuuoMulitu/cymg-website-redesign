

import { CalendarPlus } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Event types & data                                                 */
/* ------------------------------------------------------------------ */

type EventCategory = 'Working Group Meeting' | 'UNEA milestone' | 'MEA COP/MOP' | 'Regional'

interface CalendarEvent {
  title: string
  date: Date
  category: EventCategory
}

const CATEGORY_META: Record<EventCategory, { color: string; darkColor: string; bgColor: string; darkBgColor: string }> = {
  'Working Group Meeting': {
    color: 'text-canopy-green',
    darkColor: 'dark:text-canopy-green',
    bgColor: 'bg-canopy-green/10',
    darkBgColor: 'dark:bg-canopy-green/20',
  },
  'UNEA milestone': {
    color: 'text-assembly-blue',
    darkColor: 'dark:text-dark-assembly-blue',
    bgColor: 'bg-assembly-blue/10',
    darkBgColor: 'dark:bg-dark-assembly-blue/20',
  },
  'MEA COP/MOP': {
    color: 'text-clay',
    darkColor: 'dark:text-clay',
    bgColor: 'bg-clay/10',
    darkBgColor: 'dark:bg-clay/20',
  },
  'Regional': {
    color: 'text-ink-60',
    darkColor: 'dark:text-muted-foreground',
    bgColor: 'bg-ink/5',
    darkBgColor: 'dark:bg-white/5',
  },
}

const EVENTS: CalendarEvent[] = [
  {
    title: 'UNEA-7 Preparatory Consultations',
    date: new Date(2026, 2, 15), // Mar 2026
    category: 'UNEA milestone',
  },
  {
    title: 'Youth Environment Assembly 2025',
    date: new Date(2025, 9, 20), // Q4 2025 (Oct)
    category: 'Working Group Meeting',
  },
  {
    title: 'Montreal Protocol MOP37',
    date: new Date(2025, 10, 3), // Nov 2025
    category: 'MEA COP/MOP',
  },
  {
    title: 'Global Youth Declaration Consultation',
    date: new Date(2025, 7, 12), // Aug 2025
    category: 'Working Group Meeting',
  },
  {
    title: 'CYMG Regional Consultations',
    date: new Date(2025, 5, 1), // Ongoing from Jun 2025
    category: 'Regional',
  },
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

function formatMonthYear(d: Date): string {
  return `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

/* ------------------------------------------------------------------ */
/*  Generate ICS content                                               */
/* ------------------------------------------------------------------ */

function generateICS(event: CalendarEvent): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  const d = event.date
  const dateStr = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART;VALUE=DATE:${dateStr}`,
    `DTEND;VALUE=DATE:${dateStr}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.category} — CYMG Event`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

function downloadICS(event: CalendarEvent) {
  const ics = generateICS(event)
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${event.title.replace(/[^a-zA-Z0-9]/g, '-')}.ics`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

/* ------------------------------------------------------------------ */
/*  Month View                                                         */
/* ------------------------------------------------------------------ */

function buildEventDaysMap(year: number, month: number): Map<number, CalendarEvent[]> {
  const map = new Map<number, CalendarEvent[]>()
  EVENTS.forEach((event) => {
    if (
      event.date.getFullYear() === year &&
      event.date.getMonth() === month
    ) {
      const day = event.date.getDate()
      const existing = map.get(day) ?? []
      existing.push(event)
      map.set(day, existing)
    }
  })
  return map
}

function MonthView() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  // Map days to events for the current month
  const eventDays = buildEventDaysMap(year, month)

  const cells: (number | null)[] = []
  // Empty cells for days before the 1st
  for (let i = 0; i < firstDay; i++) cells.push(null)
  // Day cells
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const isToday = (day: number) =>
    day === now.getDate() && month === now.getMonth() && year === now.getFullYear()

  return (
    <div>
      <h3 className="font-serif text-lg font-medium text-ink dark:text-paper mb-4">
        {formatMonthYear(now)}
      </h3>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DAY_NAMES.map((d) => (
          <div
            key={d}
            className="text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground py-1"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} className="h-10" />
          }
          const dayEvents = eventDays.get(day) ?? []
          const today = isToday(day)
          return (
            <div
              key={day}
              className={cn(
                'flex flex-col items-center justify-center h-10 rounded-lg text-sm relative',
                today && 'bg-assembly-blue/10 dark:bg-dark-assembly-blue/20 font-semibold text-assembly-blue dark:text-dark-assembly-blue',
                !today && 'text-ink dark:text-paper'
              )}
            >
              {day}
              {dayEvents.length > 0 && (
                <div className="flex gap-0.5 mt-0.5">
                  {dayEvents.map((ev, j) => {
                    const meta = CATEGORY_META[ev.category]
                    return (
                      <span
                        key={j}
                        className={cn('w-1.5 h-1.5 rounded-full', meta.bgColor, meta.darkBgColor)}
                        title={ev.title}
                      />
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-line dark:border-white/10">
        {(Object.entries(CATEGORY_META) as [EventCategory, typeof CATEGORY_META[EventCategory]][]).map(
          ([cat, meta]) => (
            <div key={cat} className="flex items-center gap-1.5">
              <span className={cn('w-2 h-2 rounded-full', meta.bgColor, meta.darkBgColor)} />
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                {cat}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  List View                                                          */
/* ------------------------------------------------------------------ */

function ListView() {
  const sorted = [...EVENTS].sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <div className="space-y-3">
      {sorted.map((event) => {
        const meta = CATEGORY_META[event.category]
        return (
          <div
            key={event.title}
            className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-4 flex items-start gap-4"
          >
            {/* Date block */}
            <div className="text-center shrink-0 w-14">
              <span className="block font-mono text-xs text-muted-foreground uppercase">
                {event.date.toLocaleDateString('en-US', { month: 'short' })}
              </span>
              <span className="block text-2xl font-semibold text-ink dark:text-paper leading-tight">
                {event.date.getDate()}
              </span>
              <span className="block font-mono text-[10px] text-muted-foreground">
                {event.date.getFullYear()}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-sans text-sm font-semibold text-ink dark:text-paper leading-snug">
                {event.title}
              </h4>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold',
                    meta.bgColor, meta.darkBgColor, meta.color, meta.darkColor
                  )}
                >
                  {event.category}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {formatDate(event.date)}
                </span>
              </div>
            </div>

            {/* ICS button */}
            <button
              onClick={() => downloadICS(event)}
              className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full border border-line dark:border-white/10 text-ink dark:text-paper hover:bg-assembly-blue/5 dark:hover:bg-dark-assembly-blue/10 transition-colors"
              aria-label={`Add ${event.title} to calendar`}
              title="Add to calendar (.ics)"
            >
              <CalendarPlus className="w-4 h-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  CalendarSection Component                                          */
/* ------------------------------------------------------------------ */

export default function CalendarSection() {
  return (
    <section
      id="calendar"
      className="bg-paper dark:bg-ink py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="font-serif text-ink dark:text-paper"
            style={{
              fontSize: 'var(--text-h2)',
              fontVariationSettings: "'wght' 600, 'SOFT' 50, 'WONK' 1",
            }}
          >
            Calendar
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Upcoming events &amp; milestones
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="list" className="w-full">
          <TabsList className="mx-auto mb-6">
            <TabsTrigger value="month" className="font-mono text-xs uppercase tracking-wider">
              Month
            </TabsTrigger>
            <TabsTrigger value="list" className="font-mono text-xs uppercase tracking-wider">
              List
            </TabsTrigger>
          </TabsList>

          <TabsContent value="month">
            <div className="rounded-[20px] border border-line dark:border-white/10 bg-surface dark:bg-[#141E30] p-6">
              <MonthView />
            </div>
          </TabsContent>

          <TabsContent value="list">
            <ListView />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
