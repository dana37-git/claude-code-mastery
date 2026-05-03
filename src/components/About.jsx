import { motion } from 'framer-motion'
import { Code2, Globe, Palette, Smartphone } from 'lucide-react'
import { services } from '@/data/services'

const iconMap = {
  Code2,
  Globe,
  Palette,
  Smartphone,
}

export default function About() {
  const stats = [
    { value: '120+', label: 'Completed Projects' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years of Experience' },
  ]

  return (
    <section id="about" className="py-20 px-6 md:px-0 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Services */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="section-heading mb-2">What I Offer</h2>
            <p className="section-subheading mb-12">
              Expertise across the full development stack
            </p>

            <div className="space-y-8">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon]
                return (
                  <motion.div
                    key={service.title}
                    className="relative pl-8 border-l-2 border-accent"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-4 top-0 w-4 h-4 rounded-full bg-accent"></div>

                    <div className="flex gap-3 mb-2">
                      <IconComponent
                        size={24}
                        className="text-accent shrink-0 mt-1"
                      />
                      <h3 className="text-xl font-heading font-semibold text-text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="section-heading mb-6">About Me</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              I started my software journey from photography. Through that, I
              learned to love the process of creating from scratch. Since then,
              this has led me to software development as it fulfills my love for
              learning and building things.
            </p>
            <p className="text-text-secondary leading-relaxed mb-12">
              My passion is to create intuitive, responsive, and performant web
              experiences that solve real problems and delight users.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl font-heading font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
