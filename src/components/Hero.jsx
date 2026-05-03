import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen pt-20 px-6 md:px-0 bg-bg-primary flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3">
                <h2 className="text-lg text-text-secondary font-medium">Hello</h2>
                <span className="w-3 h-3 bg-accent rounded-full"></span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-heading font-bold text-text-primary leading-tight"
            >
              I'm a Software Developer
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed max-w-md"
            >
              I craft modern, responsive web experiences with React and contemporary technologies. Let's build something amazing together.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-wrap pt-4"
            >
              <button className="btn-primary">Got a project?</button>
              <button className="btn-outline">My resume</button>
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo with Glow */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Bracket */}
            <span className="absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 text-6xl md:text-8xl font-bold text-accent/30 font-mono select-none">
              &lt;
            </span>

            {/* Profile Photo Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow Blob */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl scale-125 animate-pulse"></div>

              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/40 to-transparent blur-xl"></div>

              {/* Decorative Circle Border */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/50"></div>

              {/* Profile Image Placeholder */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-bg-elevated bg-gradient-to-br from-accent/30 to-bg-surface flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <p className="text-text-muted text-sm">Your Photo</p>
                </div>
              </div>
            </div>

            {/* Right Bracket */}
            <span className="absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 text-6xl md:text-8xl font-bold text-accent/30 font-mono select-none">
              &gt;
            </span>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}
