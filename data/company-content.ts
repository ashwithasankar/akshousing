export const companyContent = {
  name: "AKS Housing & Interior's",
  tagline: 'Building spaces with intention.',
  nav: { home: 'Home', projects: 'Projects', services: 'Services', contactCta: 'Start Your Project' },
  hero: {
    eyebrow: 'Residential construction · Pattukkottai',
    heading: 'A considered way\nto come home.',
    description: 'A cinematic concept for a residential construction practice rooted in clarity, craft, and the quiet confidence of a well-made space.',
    primaryCta: 'Explore Projects',
    secondaryCta: 'Start Your Project',
  },
  about: {
    eyebrow: 'The practice',
    heading: 'Space to live\nwell in.',
    description: 'AKS Housing & Interior\'s is a residential construction company based in Pattukkottai, Tamil Nadu. This concept presents a calm, editorial direction for the brand — ready to be shaped by the projects and services to come.',
  },
  servicesPreview: {
    eyebrow: 'What we do',
    heading: 'Residential\nconstruction.',
    description: 'A focused beginning. Further service details will be added once confirmed by the company.',
    confirmedLabel: 'Residential construction',
  },
  projectsPreview: {
    eyebrow: 'Selected work',
    heading: 'The work\nis coming soon.',
    description: 'A considered showcase for the homes and spaces AKS Housing & Interior\'s brings to life.',
    conceptLabel: 'Concept visual · Not AKS work',
  },
  process: {
    eyebrow: 'A clear beginning',
    heading: 'The first step\nis a conversation.',
    steps: [
      ['01', 'Share your brief', 'Tell us what you are imagining.'],
      ['02', 'Shape the direction', 'A clearer sense of the opportunity emerges.'],
      ['03', 'Build with care', 'The idea begins its journey into the real world.'],
    ],
  },
  projectsPage: { heading: 'Selected Projects', intro: 'A spacious home for the places AKS Housing & Interior\'s will make. Real project details will be added here when available.', emptyState: 'Project showcase coming soon.' },
  servicesPage: { heading: 'Our Services', intro: 'A clear, considered overview of the work AKS Housing & Interior\'s offers. Service details will be added here once confirmed.', emptyState: 'Service details will be added soon.' },
  services: [],
  projects: [],
  contact: {
    heading: 'Let\'s start with an idea.',
    description: 'Tell us a little about what you are hoping to build. This form is a presentation preview only.',
    phone: '', email: '', address: 'Mariamman kovil, opposite Thanjavur road, palayam, Bakiyam Nagar, Pattukkottai, Tamil Nadu 614601',
    demoNotice: 'Demo enquiry form — submissions are not delivered.',
  },
  footer: { conceptCredit: 'Website Concept by Hive Tech — Demo Preview' },
} as const

export type CompanyContent = typeof companyContent
export type Project = { title: string; location: string; image: string; description: string }
export type Service = { title: string; description: string }
export const projects: Project[] = []
export const services: Service[] = []
export default companyContent
