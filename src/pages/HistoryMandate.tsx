import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { MANDATE_REFS } from '@/lib/cymg-data';

const historyEntries = [
  {
    year: 1972,
    title: 'UNEP is created',
    description:
      'The first United Nations Conference on Environment and Development, the "Stockholm Conference", held in 1972, brought delegates from 113 nations together in Sweden. The conference adopted the "Declaration on the Human Environment" with a set of guiding principles and led to the establishment of the UN Environment Programme.',
  },
  {
    year: 1985,
    title: 'International Youth Year',
    description:
      'UNEP began its work with young people in 1985, which was designated International Youth Year, recognising the role of young people in global development.',
  },
  {
    year: 1992,
    title: 'Major Groups approach adopted',
    description:
      'After the Earth Summit in 1992, UNEP adopted the Major Groups approach as defined in Agenda 21. In the spirit of Principle 10 of the Rio Declaration, Rio+20 recognised that sustainable development requires the meaningful involvement and active participation of all nine Major Groups, including children and youth.',
  },
  {
    year: 2003,
    title: 'TUNZA is born',
    description:
      'In February 2003, the Governing Council of UNEP adopted a long-term strategy for engaging young people in environmental activities. The Tunza Youth Strategy aimed to create a global movement in which children and youth actively participate in sustainable development.',
  },
  {
    year: 2009,
    title: 'TUNZA International Youth Conference, Daejeon',
    description:
      'The TUNZA International Youth Conference in Daejeon, Republic of Korea, gathered young environmental leaders from around the world to shape inputs into UNEP processes.',
  },
  {
    year: 2010,
    title: "TUNZA International Children's Conference, Nagoya",
    description:
      'Held in Nagoya, Japan, alongside the CBD COP10, this conference brought children\'s voices to the forefront of biodiversity discussions.',
  },
  {
    year: 2011,
    title: 'TUNZA International Youth Conference, Bandung',
    description:
      'The Bandung Declaration was adopted at the TUNZA International Youth Conference in Indonesia, charting a youth vision for sustainable development.',
  },
  {
    year: 2012,
    title: 'CYMG in the context of UNEP',
    description:
      'In the lead-up to Rio+20, Major Groups started to restructure within the UNEP processes, and the Children and Youth Major Group (CYMG) came into existence in mid-2012.',
  },
  {
    year: 2013,
    title: 'UNEP Governing Council becomes universal — the birth of UNEA',
    description:
      'UNEP Governing Council hosted its final 27th Session as a universal-membership body, paving the way for the UN Environment Assembly (UNEA). In the same period, the nine Major Groups were formalised as spaces for civil society engagement within UNEP processes.',
  },
  {
    year: 2020,
    title: 'Inaugural Virtual Youth Environment Assembly',
    description:
      'The first virtual Youth Environment Assembly (YEA) was held, adapting youth engagement to the constraints of the global pandemic.',
  },
  {
    year: 2021,
    title: 'Second Virtual YEA & Chemicals and Waste Youth Platform',
    description:
      'A second virtual YEA was convened, and the Chemicals & Waste Youth Platform was established to strengthen youth input on chemicals and waste governance.',
  },
  {
    year: 2022,
    title: 'First Global Youth Environment Assembly & Stockholm+50',
    description:
      'The first in-person Global Youth Environment Assembly was held alongside Stockholm+50, marking a major mobilisation of youth voices in environmental governance.',
  },
  {
    year: 2024,
    title: 'Second Global Youth Environment Assembly',
    description:
      'The second Global Youth Environment Assembly convened youth delegates ahead of UNEA-6, shaping youth policy inputs and declarations.',
  },
];

export default function HistoryMandate() {
  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cymg-green)' }}>
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'History & Mandate' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            History &amp; Mandate
          </h1>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: 'rgba(246,243,234,0.8)' }}>
            A look through the history of UNEP, civil society engagement, and youth inclusion.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-body-lg max-w-[65ch] mb-16" style={{ color: 'var(--ink)' }}>
          CYMG&apos;s story is intertwined with the history of youth engagement in UN environmental
          processes — from the 1972 Stockholm Conference that created UNEP, through the Rio Earth Summit
          that formalized the Major Groups approach, to the present day.
        </p>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-6 md:left-24 top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--line)' }}
          />

          {historyEntries.map((event, i) => (
            <div key={i} className="relative flex gap-6 md:gap-12 mb-12 last:mb-0">
              <div className="flex-shrink-0 w-12 md:w-24 flex justify-end">
                <div
                  className="w-3 h-3 rounded-sm mt-2 relative z-10"
                  style={{ backgroundColor: 'var(--cymg-green)' }}
                />
              </div>

              <div
                className="flex-1 rounded-sm p-6 md:p-8"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                }}
              >
                <span
                  className="text-mono-label font-medium"
                  style={{ color: 'var(--cymg-green)' }}
                >
                  {event.year}
                </span>
                <h3 className="text-h3 font-display font-medium mt-2 mb-3" style={{ color: 'var(--ink)' }}>
                  {event.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--ink-60)' }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandate section */}
        <div className="mt-20">
          <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
            Our Mandate
          </h2>
          <div
            className="rounded-sm p-6 md:p-8 mb-10"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <p className="text-body-lg leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
              The mandate of the Children and Youth Major Group comes from various UN General Assembly
              resolutions, UNEA resolutions, and Stakeholder Engagement processes of UNEP. Notably:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--ink-60)' }}>
              <li>A/RES/68/288 — Resolution on the United Nations Environment Assembly</li>
              <li>A/RES/67/290 — Resolution on the United Nations Environment Programme</li>
              <li>A/69/L.43 — Draft resolution on stakeholder engagement policy</li>
              <li>A/RES/70/1 — 2030 Agenda for Sustainable Development</li>
              <li>UNEA Rules of Procedure</li>
              <li>Stakeholder Engagement Mechanism</li>
              <li>The mandate of the Major Group Facilitation Committee (MGFC)</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MANDATE_REFS.map((mandate) => (
              <div
                key={mandate.code}
                className="rounded-sm p-5"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                }}
              >
                <code
                  className="font-mono text-xs px-2 py-1 rounded"
                  style={{
                    color: 'var(--cymg-green)',
                    backgroundColor: 'rgba(30,77,50,0.1)',
                  }}
                >
                  {mandate.code}
                </code>
                <h3 className="text-base font-bold mt-3 mb-2" style={{ color: 'var(--ink)' }}>
                  {mandate.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-60)' }}>
                  {mandate.plainLanguage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
