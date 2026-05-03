import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-0 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading mb-2">Featured Projects</h2>
          <p className="section-subheading mb-16">
            Showcasing my recent work and favorite projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card group cursor-pointer flex flex-col"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transitionView={{ delay: index * 0.1 }}
            >
              {/* Color band at top */}
              <div className="h-1 rounded-t-xl2 -mx-6 -mt-6 mb-4 bg-gradient-to-r from-accent to-accent-light"></div>

              <h3 className="font-heading font-semibold text-xl text-text-primary mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs bg-bg-elevated text-text-secondary border border-border-color"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-6 pt-4 border-t border-border-color">
                <a
                  href={project.liveUrl}
                  className="text-accent text-sm hover:text-accent-light transition-colors flex items-center gap-1 font-medium"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
                <a
                  href={project.repoUrl}
                  className="text-text-muted text-sm hover:text-text-secondary transition-colors flex items-center gap-1 font-medium"
                >
                  <FaGithub size={16} />
                  Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
