import type { Region } from '@/types';

export const regions: Region[] = [
  {
    id: 'africa',
    name: 'Africa',
    slug: 'africa',
    type: 'standard',
    facilitator: undefined,
    initiatives: [
      'African Youth Environmental Network',
      'Great Green Wall Youth Initiative',
      'Circular Economy Hubs Programme',
    ],
    events: [
      { title: 'Regional Consultation — UNEA-7', date: '2025-04-15' },
      { title: 'Africa Climate Week Side Event', date: '2025-09-01' },
    ],
  },
  {
    id: 'asia-pacific',
    name: 'Asia-Pacific',
    slug: 'asia-pacific',
    type: 'standard',
    facilitator: undefined,
    initiatives: [
      'Asia-Pacific Youth Biodiversity Network',
      'Pacific Islands Climate Resilience Programme',
      'Sustainable Cities Youth Forum',
    ],
    events: [
      { title: 'Regional Consultation — UNEA-7', date: '2025-05-10' },
      { title: 'Asia-Pacific Environment Forum', date: '2025-08-15' },
    ],
  },
  {
    id: 'europe',
    name: 'Europe',
    slug: 'europe',
    type: 'standard',
    facilitator: undefined,
    initiatives: [
      'European Youth Green Deal Network',
      'Balkans Environmental Cooperation Initiative',
      'Arctic Youth Engagement Programme',
    ],
    events: [
      { title: 'Regional Consultation — UNEA-7', date: '2025-06-01' },
      { title: 'European Environment Youth Summit', date: '2025-10-15' },
    ],
  },
  {
    id: 'lac',
    name: 'Latin America \u0026 Caribbean',
    slug: 'latin-america-caribbean',
    type: 'standard',
    facilitator: undefined,
    initiatives: [
      'Amazon Youth Network',
      'Caribbean Climate Resilience Alliance',
      'Urban Sustainability Labs',
    ],
    events: [
      { title: 'Regional Consultation — UNEA-7', date: '2025-05-20' },
      { title: 'Latin America Environment Forum', date: '2025-09-10' },
    ],
  },
  {
    id: 'north-america',
    name: 'North America',
    slug: 'north-america',
    type: 'standard',
    facilitator: undefined,
    initiatives: [
      'Indigenous Youth Environmental Network',
      'Campus Sustainability Coalition',
      'Great Lakes Youth Stewardship Programme',
    ],
    events: [
      { title: 'Regional Consultation — UNEA-7', date: '2025-06-15' },
      { title: 'North American Youth Environmental Summit', date: '2025-11-01' },
    ],
  },
  {
    id: 'west-asia',
    name: 'West Asia',
    slug: 'west-asia',
    type: 'standard',
    facilitator: undefined,
    initiatives: [
      'Water Security Youth Network',
      'Desert Ecosystem Restoration Initiative',
      'Clean Energy Transition Alliance',
    ],
    events: [
      { title: 'Regional Consultation — UNEA-7', date: '2025-05-25' },
      { title: 'West Asia Youth Environment Forum', date: '2025-09-20' },
    ],
  },
  {
    id: 'kenya',
    name: 'Kenya (Host Country)',
    slug: 'kenya',
    type: 'special',
    facilitator: undefined,
    initiatives: [
      'Nairobi Green City Initiative',
      'Host Country Liaison for UNEA-7',
      'East African Youth Environmental Network',
    ],
    events: [
      { title: 'UNEA-7 Preparatory Meeting', date: '2025-11-01' },
      { title: 'Nairobi Youth Environment Week', date: '2025-12-01' },
    ],
  },
];
