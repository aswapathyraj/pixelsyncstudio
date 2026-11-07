export interface Faq {
  id: string
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    id: 'services',
    question: 'What services does PixelSync Studio offer?',
    answer:
      'PixelSync offers web design, web app development, UI/UX design, and full-stack development — from the first idea to the final product. If your project sits between those areas, get in touch and we will tell you honestly whether we are the right fit.',
  },
  {
    id: 'project-types',
    question: 'What types of projects do you work on?',
    answer:
      'We work on modern websites, interactive web applications, UI/UX design (wireframes, flows, prototypes), and full-stack digital products with backend and database integration. Get in touch with us to discuss your project requirements.',
  },
  {
    id: 'existing-idea',
    question: 'Can you build a website from an existing idea?',
    answer:
      'Yes — you can come to us with an idea, a brief, an existing brand, or a half-formed thought. We will help shape it into something clear and buildable. Get in touch with us to discuss your project requirements.',
  },
  {
    id: 'full-stack',
    question: 'Do you develop full-stack web applications?',
    answer:
      'Yes. From frontend interfaces to backend functionality, database integration, and API integration, we build complete web applications from front to back. Tell us about your idea and we will scope it together.',
  },
  {
    id: 'start-a-project',
    question: 'How can I start a project with PixelSync?',
    answer:
      'Use the project inquiry form below, or DM us the word BUILD on Instagram at @pixelsyncweb. Tell us about your idea, your business, and what you want to create — we will get back to you to talk through the next steps.',
  },
]
