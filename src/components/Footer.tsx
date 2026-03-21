const footerLinks = [
  'Accessibility statement',
  'Privacy notice',
  'Cookies',
  'Contact us',
  'Sitemap',
  'Terms and conditions',
  'Freedom of Information',
  'Jobs at Demo Council',
]

export default function Footer() {
  return (
    <footer
      className="site-footer py-12"
      role="contentinfo"
      id="footer"
      style={{ backgroundColor: 'var(--footer-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center text-xl font-black text-gray-900"
            aria-hidden="true"
          >
            L
          </div>
          <span
            className="font-bold text-lg"
            style={{ color: 'var(--footer-heading-fg)' }}
          >
            Demo City Council
          </span>
        </div>

        {/* Footer Links */}
        <nav
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2 mb-8"
          aria-label="Footer navigation"
        >
          {footerLinks.map(link => (
            <a
              key={link}
              href="#"
              className="text-sm hover:underline transition-opacity hover:opacity-100 opacity-80"
              style={{ color: 'var(--footer-fg)' }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <hr className="border-white/10 mb-6" />

        {/* Copyright */}
        <p
          className="text-sm opacity-60"
          style={{ color: 'var(--footer-fg)' }}
        >
          © Demo City Council 2026. All rights reserved.
          <br />
          Demo City Council, Civic Hall, Demo City
        </p>
      </div>
    </footer>
  )
}
