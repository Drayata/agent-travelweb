import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { NAV_LINKS } from '../data/siteData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-3'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <nav className="section-container flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#home"
          id="nav-logo"
          className="flex items-center gap-2.5 group"
          aria-label="WanderLux Travel - Home"
        >
          <div className="relative">
            <Globe
              className={`w-8 h-8 transition-colors duration-300 ${
                isScrolled ? 'text-emerald-500' : 'text-white'
              } group-hover:text-emerald-400`}
              strokeWidth={2}
            />
            <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span
            className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-navy-900' : 'text-white'
            }`}
          >
            Wander<span className="text-emerald-500">Lux</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#cta"
            id="nav-cta-button"
            className="btn-primary text-sm !px-5 !py-2.5"
          >
            Explore Tours
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
            isScrolled ? 'text-navy-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div
          className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <span className="text-lg font-bold text-navy-900">
              Wander<span className="text-emerald-500">Lux</span>
            </span>
            <button
              className="p-2 rounded-lg text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-6" aria-label="Mobile navigation">
            <ul className="space-y-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-slate-600 hover:text-navy-900 hover:bg-emerald-50 font-medium transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href="#cta"
                className="btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Explore Tours
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
