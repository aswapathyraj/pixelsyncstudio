import { motion, useReducedMotion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

export default function Services() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="services" className="section section-line-top" aria-labelledby="services-heading">
      <div className="wrap flex flex-col gap-14">
        <SectionHeader
          index="01"
          eyebrow="Services"
          headingId="services-heading"
          layout="split"
          title={
            <>
              What We <span className="text-accent">Do</span>
            </>
          }
          supporting="From the first idea to the final product, we bring thoughtful design and reliable development together."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 36 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
