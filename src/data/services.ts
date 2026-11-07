export type ServiceMotif = 'web-design' | 'web-apps' | 'ui-ux' | 'full-stack'

export interface Service {
  id: string
  number: string
  title: string
  description: string
  capabilities: string[]
  motif: ServiceMotif
}

export const services: Service[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'Web Design',
    description:
      'We design modern, responsive websites that communicate your brand clearly and turn visitors into customers.',
    capabilities: [
      'Modern website interfaces',
      'Responsive layouts',
      'Visual hierarchy',
      'Conversion-focused design',
      'Consistent design systems',
    ],
    motif: 'web-design',
  },
  {
    id: 'web-apps',
    number: '02',
    title: 'Web Apps',
    description:
      'We build functional web applications that help turn ideas into useful digital products.',
    capabilities: [
      'Interactive web applications',
      'Functional user experiences',
      'Application interfaces',
      'Scalable frontend architecture',
    ],
    motif: 'web-apps',
  },
  {
    id: 'ui-ux',
    number: '03',
    title: 'UI/UX Design',
    description:
      'Every screen is thoughtfully designed around your users, combining intuitive interactions with purposeful visual design.',
    capabilities: [
      'User interface design',
      'User experience design',
      'Wireframes',
      'User flows',
      'Prototypes',
      'Interface consistency',
    ],
    motif: 'ui-ux',
  },
  {
    id: 'full-stack',
    number: '04',
    title: 'Full-Stack Development',
    description:
      'From frontend interfaces to backend functionality, we build complete digital products from front to back.',
    capabilities: [
      'Frontend development',
      'Backend development',
      'Database integration',
      'API integration',
      'Functional applications',
    ],
    motif: 'full-stack',
  },
]
