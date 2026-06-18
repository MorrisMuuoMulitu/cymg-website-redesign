import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion } from 'framer-motion';

const structure = [
  {
    id: "assembly",
    label: "Assembly",
    description:
      "The Assembly constitutes the entirety of CYMG. It consists of all members (entities and individuals) and all structures, and serves as the primary avenue for decision-making within the constituency.",
    level: 0,
  },
  {
    id: "committee-accredited",
    label: "Committee of Accredited Organisations (CAO)",
    description:
      "Composed of representatives from organisations accredited to UNEP and UNEP-administered MEAs and frameworks. It serves as the decision-making body for reviewing and guiding the administrative functions of CYMG.",
    level: 1,
  },
  {
    id: "steering",
    label: "Global Steering Committee (GSC)",
    description:
      "Provides strategic direction and oversight for the programmatic, policy, and substantive functions of CYMG. It comprises Global Coordinators, Focal Points of the Working Groups and Regional Groups, and representatives from other constituted, subsidiary, and affiliated organs.",
    level: 2,
  },
  {
    id: "operations",
    label: "Operations Facilitation Team (OFT)",
    description:
      "An essential support body composed of peer-selected youth members. The OFT handles general administration, social media outreach, IT support, graphic design, financial record-keeping, logistical coordination for events, and membership management — acting as the secretariat of CYMG.",
    level: 3,
  },
  {
    id: "pcg",
    label: "Policy Coordination Group (PCG)",
    description:
      "An open working group composed of Focal Points and thematic group leads, with participation open to other CYMG members working on thematic workstreams. The PCG ensures policy coherence and alignment across CYMG and contributes to the development of collective policy positions.",
    level: 3,
  },
  {
    id: "working-groups",
    label: "Working Groups",
    description:
      "Subsidiary organs that provide dedicated space for members to collaborate on specific topics aligned with CYMG’s engagement avenues. Thematic Focal Points coordinate 13 working groups covering pollution and chemicals, nature and ecosystems, and policy, governance, and finance.",
    level: 4,
  },
  {
    id: "regional-groups",
    label: "Regional Groups",
    description:
      "Established to provide a platform for members to engage on environmental issues specific to their geographic regions. These groups foster regional collaboration, facilitate cross-regional exchange, and ensure diverse voices within CYMG are represented and heard.",
    level: 4,
  },
];

export default function Governance() {
  return (
    <div className="bg-paper dark:bg-ink min-h-screen">
      {/* Hero */}
      <div className="pt-32 pb-20 px-6 bg-[#0A1128] text-white">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Governance' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mt-8 tracking-tight"
          >
            Institutional <span className="text-[var(--assembly-blue)]">Framework</span>
          </motion.h1>
          <p className="text-xl text-slate-400 mt-6 max-w-2xl leading-relaxed">
            A multi-layered structure designed to connect grassroots youth environmental action to the highest levels of global environmental governance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <span className="text-[var(--assembly-blue)] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Governance Model
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink dark:text-paper mb-6 tracking-tight">
              A commitment to transparent leadership.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              CYMG operates through a decentralized yet coordinated model that ensures youth from every corner of the world can meaningfully participate in policy-making.
            </p>
            <div className="space-y-4">
              {[
                'Democratically elected steering committee',
                'Transparent decision-making logs',
                'Open membership for youth organizations',
                'Regional and thematic representation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-ink dark:text-paper">
                  <CheckCircle2 size={18} className="text-[var(--assembly-blue)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-4 relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-line dark:bg-white/5 hidden md:block" />

              {structure.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-0 md:pl-12"
                >
                  {/* Dot on line */}
                  <div className="absolute left-[21px] top-8 w-2.5 h-2.5 rounded-full bg-[var(--assembly-blue)] border-4 border-paper dark:border-ink z-10 hidden md:block" />
                  
                  <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[32px] border border-line dark:border-white/5 shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                      <h3 className="text-xl font-black text-ink dark:text-paper tracking-tight group-hover:text-[var(--assembly-blue)] transition-colors">
                        {node.label}
                      </h3>
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-500 rounded-full w-fit">
                        Level {node.level}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                      {node.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Accountability */}
        <div className="bg-[#0A1128] rounded-[40px] p-12 md:p-16 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Accountability & <span className="text-[var(--assembly-blue)]">Transparency</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Our annual reports, financial statements, and meeting minutes are public records. We believe that global governance must start with local accountability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/documents"
                className="btn-pill bg-[var(--assembly-blue)] text-white px-10 py-4 font-bold hover:bg-[var(--assembly-blue-deep)] transition-all w-full sm:w-auto"
              >
                Browse Public Documents
              </Link>
              <Link
                to="/contact"
                className="btn-pill border-2 border-white/10 text-white px-10 py-4 font-bold hover:bg-white/5 transition-all w-full sm:w-auto"
              >
                Inquire about Governance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
