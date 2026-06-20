import type { WorkingGroup } from '@/types';

export const workingGroups: WorkingGroup[] = [
  {
    id: '1',
    name: 'Adaptation and Resilience',
    slug: 'adaptation-resilience',
    cluster: 'nature',
    description: 'Promotes youth input in climate adaptation, disaster risk reduction, and environmental resilience.',
    mission: 'The Adaptation and Resilience Working Group coordinates youth engagement on climate adaptation policy, disaster risk reduction frameworks, and building environmental resilience in vulnerable communities. We work to ensure young people\'s voices are central to adaptation planning at local, national, and international levels.',
    highlights: [
      { title: 'National Adaptation Plans Youth Brief', excerpt: 'A comprehensive guide for youth engagement in NAP processes across 20 countries.' },
      { title: 'Disaster Risk Reduction Forum 2024', excerpt: 'Co-hosted a youth-focused side event at the Global Platform for DRR in Geneva.' },
    ],
    engagements: [
      { title: 'COP29 Adaptation Pavilion', description: 'Coordinated youth speakers and policy submissions for the adaptation track.' },
      { title: 'Sendai Framework Mid-Term Review', description: 'Submitted youth position paper on DRR priorities through 2030.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'adaptation@cymg.org' },
    ],
  },
  {
    id: '2',
    name: 'Chemicals, Waste \u0026 Pollution',
    slug: 'chemicals-waste-pollution',
    cluster: 'pollution',
    description: 'Focuses on pollution prevention and sound chemicals and waste management.',
    mission: 'The Chemicals, Waste \u0026 Pollution Working Group drives youth engagement in global chemicals and waste governance. We connect young experts with Multilateral Environmental Agreements including the Basel, Rotterdam, and Stockholm conventions, and coordinate input to the UN Environment Assembly on pollution-related resolutions.',
    highlights: [
      { title: 'Chemicals \u0026 Waste Youth Platform', excerpt: 'Launched in 2021 to connect 200+ youth experts on chemicals governance.' },
      { title: 'Global Chemicals Outlook Brief', excerpt: 'Youth perspectives on the sound management of chemicals and waste.' },
    ],
    engagements: [
      { title: 'BRS Conventions COPs 2023', description: 'Organized youth caucus and policy coordination for triple COP.' },
      { title: 'UNEA-6 Pollution Track', description: 'Led youth consultations on the science-policy panel on chemicals, waste, and pollution prevention.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'chemicals@cymg.org' },
    ],
  },
  {
    id: '3',
    name: "Children's Affairs",
    slug: 'childrens-affairs',
    cluster: 'policy',
    description: 'Ensures engagement of under-18s in environmental governance in a safe space of peers.',
    mission: 'The Children\'s Affairs Working Group creates safe, inclusive spaces for children under 18 to participate in environmental governance. We develop child-friendly policy materials, coordinate with child rights organizations, and advocate for intergenerational equity in environmental decision-making.',
    highlights: [
      { title: 'Child-Friendly UNEA Guide', excerpt: 'An illustrated guide helping children understand the UN Environment Assembly.' },
      { title: 'Youth-Child Mentorship Programme', excerpt: 'Pairing young adults with child environmental advocates worldwide.' },
    ],
    engagements: [
      { title: 'UN Committee on the Rights of the Child', description: 'Submitted input on General Comment 26 implementation.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'children@cymg.org' },
    ],
  },
  {
    id: '4',
    name: 'Eco-Faith',
    slug: 'eco-faith',
    cluster: 'nature',
    description: 'Incorporates faith-based perspectives into environmental governance.',
    mission: 'The Eco-Faith Working Group bridges faith traditions and environmental governance. We represent the voices of faith-based youth organizations in UN environmental processes, drawing on diverse spiritual and ethical frameworks to inform policy advocacy on ecological stewardship.',
    highlights: [
      { title: 'Faith-Based Climate Statement', excerpt: 'A joint declaration from 15 faith traditions on environmental stewardship.' },
      { title: 'Laudato Si Youth Network', excerpt: 'Coordinating Catholic youth engagement with environmental encyclical principles.' },
    ],
    engagements: [
      { title: 'UN Faith for Earth Initiative', description: 'Partnership with UNEP on faith-based environmental education.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'ecofaith@cymg.org' },
    ],
  },
  {
    id: '5',
    name: 'Environmental Health',
    slug: 'environmental-health',
    cluster: 'pollution',
    description: 'Addresses the intersection of environment, health, and equity using a One Health approach.',
    mission: 'The Environmental Health Working Group addresses the interconnectedness of environmental degradation and public health. Using a One Health approach, we advocate for policies that recognize the links between climate change, biodiversity loss, pollution, and human health outcomes.',
    highlights: [
      { title: 'One Health Youth Brief', excerpt: 'Connecting environmental and health frameworks through a youth lens.' },
      { title: 'Air Quality Monitoring Toolkit', excerpt: 'Community-level tools for youth-led air quality assessment.' },
    ],
    engagements: [
      { title: 'WHO-UNEP Health and Environment Track', description: 'Coordinated youth input to the Geneva Charter for Well-being.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'health@cymg.org' },
    ],
  },
  {
    id: '6',
    name: 'Environmental Law \u0026 Rights',
    slug: 'environmental-law-rights',
    cluster: 'policy',
    description: 'Advocates for youth participation in environmental law and protection of environment defenders.',
    mission: 'The Environmental Law \u0026 Rights Working Group advances youth engagement in environmental legal frameworks. We advocate for the right to a healthy environment, support environmental defenders, and promote youth participation in international environmental law processes including the Montevideo Environmental Law Programme.',
    highlights: [
      { title: 'Right to a Healthy Environment Toolkit', excerpt: 'Resources for youth advocates on UN General Assembly resolution 76/300.' },
      { title: 'Environmental Defenders Network', excerpt: 'Support and solidarity network for youth environmental defenders at risk.' },
    ],
    engagements: [
      { title: 'Montevideo Programme V', description: 'Contributed to the development of the fifth Montevideo Environmental Law Programme.' },
      { title: 'UNEA-6 Rights-Based Approach', description: 'Advocated for human rights language in UNEA-6 resolutions.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'law@cymg.org' },
    ],
  },
  {
    id: '7',
    name: 'Green Economy \u0026 Resources',
    slug: 'green-economy-resources',
    cluster: 'policy',
    description: 'Focuses on sustainable consumption, resource efficiency, and green employment.',
    mission: 'The Green Economy \u0026 Resources Working Group promotes youth perspectives on the transition to sustainable economies. We focus on sustainable consumption and production patterns, circular economy principles, resource efficiency, and green employment opportunities for young people.',
    highlights: [
      { title: 'Circular Economy Youth Guide', excerpt: 'Practical framework for youth-led circular economy initiatives.' },
      { title: 'Green Jobs Mapping Report', excerpt: 'Identifying green employment opportunities in 30 countries.' },
    ],
    engagements: [
      { title: 'UNEP Resource Outlook', description: 'Youth input to the Global Resources Outlook process.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'greeneconomy@cymg.org' },
    ],
  },
  {
    id: '8',
    name: 'Nature \u0026 Ecosystems',
    slug: 'nature-ecosystems',
    cluster: 'nature',
    description: 'Promotes youth action in biodiversity, restoration, and nature-based solutions.',
    mission: 'The Nature \u0026 Ecosystems Working Group drives youth engagement in biodiversity conservation and ecosystem restoration. We coordinate input to the Convention on Biological Diversity, advocate for the Global Biodiversity Framework, and support youth-led nature-based solutions and restoration initiatives worldwide.',
    highlights: [
      { title: 'Youth Biodiversity Action Plan', excerpt: 'Aligning youth priorities with the Kunming-Montreal Global Biodiversity Framework.' },
      { title: 'Decade on Ecosystem Restoration', excerpt: 'Coordinating 50+ youth restoration projects across six continents.' },
    ],
    engagements: [
      { title: 'CBD COP16', description: 'Led youth delegation and policy coordination for the biodiversity COP.' },
      { title: 'UN Decade on Restoration', description: 'Partnership with UNEP and FAO on youth restoration capacity building.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'nature@cymg.org' },
    ],
  },
  {
    id: '9',
    name: 'Ocean Science \u0026 Governance',
    slug: 'ocean-science-governance',
    cluster: 'nature',
    description: 'Coordinates youth engagement in marine protection, policy, and governance.',
    mission: 'The Ocean Science \u0026 Governance Working Group coordinates youth engagement in marine conservation and ocean governance. We advocate for effective implementation of the High Seas Treaty, support youth participation in the UN Ocean Conference, and promote marine scientific research capacity for young people.',
    highlights: [
      { title: 'High Seas Treaty Youth Brief', excerpt: 'Analysis and advocacy toolkit for the BBNJ Agreement ratification.' },
      { title: 'Youth Ocean Leaders Network', excerpt: 'Connecting 150+ young marine conservationists globally.' },
    ],
    engagements: [
      { title: 'UN Ocean Conference 2025', description: 'Coordinating youth programme and policy submissions.' },
      { title: 'BBNJ Intergovernmental Conference', description: 'Youth observer participation and policy input.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'oceans@cymg.org' },
    ],
  },
  {
    id: '10',
    name: 'Ozone \u0026 Climate Protection',
    slug: 'ozone-climate-protection',
    cluster: 'pollution',
    description: 'Advances youth involvement in ozone layer protection and climate mitigation.',
    mission: 'The Ozone \u0026 Climate Protection Working Group advances youth engagement in ozone layer protection under the Montreal Protocol and climate change mitigation under the UNFCCC. We work to strengthen the links between ozone and climate governance and amplify youth voices in both processes.',
    highlights: [
      { title: 'Montreal Protocol Youth Brief', excerpt: 'Youth perspectives on the Kigali Amendment implementation.' },
      { title: 'Ozone-Climate Connection Report', excerpt: 'Explaining the interlinkages between ozone protection and climate mitigation.' },
    ],
    engagements: [
      { title: 'MOP35 Youth Delegation', description: 'Coordinated youth observer nominations and policy input for MOP35.' },
      { title: 'COP29 Ozone-Climate Side Event', description: 'Co-hosted event on the Montreal Protocol\'s climate co-benefits.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'ozone@cymg.org' },
    ],
  },
  {
    id: '11',
    name: 'Science-Policy',
    slug: 'science-policy',
    cluster: 'policy',
    description: 'Strengthens youth participation in environmental science-policy interfaces.',
    mission: 'The Science-Policy Working Group strengthens youth participation in environmental science-policy interfaces including the IPCC, IPBES, and IRP. We work to ensure young scientists and researchers can contribute meaningfully to global environmental assessments and policy processes.',
    highlights: [
      { title: 'Youth Science-Policy Guide', excerpt: 'Navigating IPCC, IPBES, and IRP processes as a young researcher.' },
      { title: 'Early Career Scientists Network', excerpt: 'Supporting 300+ young scientists in engaging with assessment processes.' },
    ],
    engagements: [
      { title: 'IPCC AR7 Scoping', description: 'Youth input to the Seventh Assessment Report scoping process.' },
      { title: 'IPBES Assessment 4', description: 'Coordinated youth expert nominations for the nexus assessment.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'sciencepolicy@cymg.org' },
    ],
  },
  {
    id: '12',
    name: 'Sustainable Finance',
    slug: 'sustainable-finance',
    cluster: 'policy',
    description: 'Integrates youth voices in climate finance, green investment, and financial policy reform.',
    mission: 'The Sustainable Finance Working Group integrates youth voices into climate finance, green investment, and financial policy reform. We advocate for increased and more accessible climate finance for youth-led initiatives and meaningful youth participation in financial governance processes.',
    highlights: [
      { title: 'Youth Climate Finance Brief', excerpt: 'Analysis of climate finance accessibility for youth-led organizations.' },
      { title: 'Green Investment Starter Guide', excerpt: 'Introduction to sustainable finance for youth organizations.' },
    ],
    engagements: [
      { title: 'COP29 Climate Finance Negotiations', description: 'Coordinated youth policy positions on the New Collective Quantified Goal.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'finance@cymg.org' },
    ],
  },
  {
    id: '13',
    name: 'Youth Plastic Action Network (YPAN)',
    slug: 'youth-plastic-action-network',
    cluster: 'pollution',
    description: 'Empowers youth in global efforts to end plastic pollution through treaty negotiations.',
    mission: 'The Youth Plastic Action Network (YPAN) empowers youth in global efforts to end plastic pollution. We coordinate youth engagement in the Intergovernmental Negotiating Committee on Plastic Pollution, advocate for an ambitious global plastics treaty, and support grassroots plastic reduction campaigns led by young people.',
    highlights: [
      { title: 'Global Plastics Treaty Youth Position', excerpt: 'Consolidated youth priorities for the INC on plastic pollution.' },
      { title: 'Plastic-Free Campuses Campaign', excerpt: 'Supporting 100+ universities in reducing single-use plastics.' },
    ],
    engagements: [
      { title: 'INC-5 Youth Delegation', description: 'Led youth policy coordination for the fifth negotiating committee session in Busan.' },
      { title: 'World Environment Day 2024', description: 'Coordinated global youth actions on beat plastic pollution.' },
    ],
    focalPoints: [
      { name: '[To be confirmed]', country: 'Global', email: 'ypan@cymg.org' },
    ],
  },
];

export const clusterColors = {
  pollution: { color: '#2d5a3d', label: 'Pollution \u0026 Chemicals' },
  nature: { color: '#1e4d32', label: 'Nature \u0026 Ocean' },
  policy: { color: '#163b26', label: 'Policy \u0026 Governance' },
};

export const clusterFilters = [
  { value: 'all', label: 'All' },
  { value: 'pollution', label: 'Pollution \u0026 Chemicals' },
  { value: 'nature', label: 'Nature \u0026 Ocean' },
  { value: 'policy', label: 'Policy \u0026 Governance' },
];
