import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@example.com' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  ]

  const socials = [
    { icon: FaGithub, link: '#', label: 'GitHub' },
    { icon: FaLinkedin, link: '#', label: 'LinkedIn' },
    { icon: FaTwitter, link: '#', label: 'Twitter' },
  ]

  return (
    <section id="contact" className="py-20 px-6 md:px-0 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Let's Work Together</h2>
          <p className="section-subheading justify-center">
            Have a project in mind? Let's create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.label}
                  className="card"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="text-accent shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-heading font-semibold text-text-primary mb-1">
                        {info.label}
                      </h3>
                      <p className="text-text-secondary">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="font-heading font-semibold text-text-primary mb-4">
                Connect
              </h3>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      className="w-12 h-12 rounded-lg bg-bg-surface border border-border-color flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all duration-300"
                      title={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            className="card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-text-secondary text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-bg-elevated border border-border-color text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-text-secondary text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-bg-elevated border border-border-color text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-text-secondary text-sm mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg bg-bg-elevated border border-border-color text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
