import { ExternalLink, FileText, Globe, Award } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const engagements = [
  { title: 'Cartagena Convention Observer Entity', desc: 'CYMG holds formal Observer Entity status with the Cartagena Convention since 2023, enabling direct participation in Conference of Parties meetings.', icon: Award },
  { title: 'MOP35 Montreal Protocol', desc: 'Coordinated youth-observer nominations and policy input for the 35th Meeting of the Parties to the Montreal Protocol.', icon: FileText },
  { title: 'Montevideo Environmental Law Programme', desc: 'Active engagement with the fifth Programme for the Development and Periodic Review of Environmental Law.', icon: Globe },
];

const resources = [
  { title: 'InforMEA', desc: 'The UN Information Portal on Multilateral Environmental Agreements — access treaties, decisions, and national reports.', url: 'https://www.informea.org' },
  { title: 'InforMEA E-learning', desc: 'Free online courses on MEAs, environmental law, and governance topics.', url: 'https://elearning.informea.org' },
];

export default function Meas() {
  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--canopy-green)' }}>
        <div className="max-w-[1320px] mx-auto">
          <Breadcrumbs items={[{ label: 'MEAs' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            Multilateral Environmental Agreements
          </h1>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-h2 font-display mb-4" style={{ color: 'var(--ink)' }}>
              What are MEAs?
            </h2>
            <p className="text-body-lg leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
              Multilateral Environmental Agreements (MEAs) are international treaties, conventions,
              protocols, and other legally binding instruments between multiple countries that are
              designed to address specific environmental issues or challenges. They are negotiated and
              adopted by participating countries to establish common frameworks, principles, and
              commitments for addressing shared environmental concerns at the global or regional level.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-60)' }}>
              MEAs can cover a wide range of environmental issues, including biodiversity conservation,
              climate change, ozone depletion, chemicals and waste, and pollution. They are essential
              tools for promoting international collaboration in addressing critical environmental
              problems that transcend national boundaries.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-60)' }}>
              In its capacity as the leading global environmental authority, the United Nations
              Environment Programme (UNEP) has been entrusted by the governing bodies of numerous MEAs
              to serve as the designated entity for providing essential secretariat functions to these
              conventions, and to provide comprehensive support for the enhancement of national
              capacities.
            </p>
          </div>
          <div
            className="rounded-[20px] p-8"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <h3 className="font-display text-lg font-medium mb-4" style={{ color: 'var(--ink)' }}>
              Key MEAs UNEP Administers
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                'Convention on Biological Diversity (CBD)',
                'CITES (Wildlife trade)',
                'Basel Convention (Hazardous waste)',
                'Stockholm Convention (POPs)',
                'Rotterdam Convention (PIC)',
                'Montreal Protocol (Ozone)',
                'UN Framework Convention on Climate Change (UNFCCC)',
                'UN Convention to Combat Desertification (UNCCD)',
                'Minamata Convention on Mercury',
              ].map((mea) => (
                <li key={mea} className="flex items-center gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--canopy-green)' }} />
                  {mea}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Youth Engagement */}
        <div
          className="rounded-[20px] p-8 md:p-10 mb-16"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
        >
          <h2 className="text-h2 font-display mb-4" style={{ color: 'var(--ink)' }}>
            Youth Engagement in MEA Processes
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: 'var(--ink-60)' }}>
            <p>
              Youth engagement within the processes of Multilateral Environmental Agreements is crucial
              for fostering inclusive and informed decision-making. As the official children and youth
              constituency contributing to and participating in intergovernmental policy processes at
              UNEP, CYMG holds a strategic position to facilitate and enhance youth engagement in MEAs.
            </p>
            <p>
              CYMG has a track record of effectively supporting youth and children in engaging within MEA
              processes, including meetings under the Montreal Protocol, Vienna Convention, CMS, CITES,
              BRS Conventions, and other significant forums.
            </p>
            <p>
              In 2023, CYMG was accredited to the Convention for the Protection and Development of the
              Marine Environment of the Wider Caribbean Region (Cartagena Convention) and its Protocols
              as an Observer Entity. The UNEP Ozone Secretariat also invited CYMG to nominate youth
              observers to the 35th Meeting of the Parties to the Montreal Protocol (MOP35).
            </p>
            <p>
              CYMG operationalizes its commitment through specialized thematic working groups and
              associated networks/platforms, fostering comprehensive consultations that actively involve
              youth and children in shaping perspectives on matters of negotiation under MEAs.
            </p>
          </div>
        </div>

        {/* Engagement Record */}
        <div className="mb-16">
          <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
            CYMG Engagement Record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagements.map((e) => (
              <div
                key={e.title}
                className="rounded-[20px] p-6"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <e.icon size={24} className="mb-4" style={{ color: 'var(--canopy-green)' }} />
                <h3 className="font-display text-lg font-medium mb-2" style={{ color: 'var(--ink)' }}>
                  {e.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--ink-60)' }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-h2 font-display mb-6" style={{ color: 'var(--ink)' }}>
            Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((r) => (
              <a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[20px] p-6 flex items-start gap-4 transition-shadow hover:shadow-md"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
              >
                <ExternalLink size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--assembly-blue)' }} />
                <div>
                  <h3 className="font-display font-medium mb-1" style={{ color: 'var(--ink)' }}>
                    {r.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--ink-60)' }}>{r.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
