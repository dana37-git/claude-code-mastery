export default function Footer() {
  const year = new Date().getFullYear()

  const navLinks = ['About', 'Projects', 'Contact']

  return (
    <footer className="bg-bg-surface border-t border-border-color py-12 px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-heading font-bold text-xl text-text-primary mb-2">
              Dev<span className="text-accent">.</span>
            </p>
            <p className="text-text-muted text-sm">
              Building modern web experiences one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-text-muted hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Ready to Start?</h3>
            <p className="text-text-muted text-sm mb-4">
              Have a project or opportunity? I'd love to hear from you.
            </p>
            <a href="#contact" className="btn-primary text-sm py-2 px-4 inline-block">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border-color pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              &copy; {year} Your Name. All rights reserved.
            </p>
            <p className="text-text-muted text-sm">
              Designed & built with <span className="text-accent">♥</span> using React
              + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
