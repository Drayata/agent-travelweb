import { useState } from 'react'
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react'
import { FOOTER_LINKS } from '../data/siteData'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-6 group" aria-label="WanderLux Travel home">
              <Globe className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span className="text-xl font-bold">
                Wander<span className="text-emerald-400">Lux</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Crafting unforgettable travel experiences since 2018.
              Every journey we design is a story waiting to be told.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center
                    text-slate-400 hover:bg-emerald-500/20 hover:text-emerald-400
                    transition-all duration-300"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
              Support
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
              Stay Inspired
            </h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Get handpicked travel deals and insider guides delivered to your inbox every week.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2" aria-label="Newsletter signup">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl
                  text-sm text-white placeholder-slate-500
                  focus:outline-none focus:border-emerald-500/50 focus:bg-white/10
                  transition-all duration-300"
              />
              <button
                type="submit"
                id="newsletter-submit"
                className="px-4 py-3 bg-emerald-500 text-white rounded-xl
                  hover:bg-emerald-600 transition-all duration-300
                  shadow-lg shadow-emerald-500/20 flex-shrink-0"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            {isSubmitted && (
              <p className="text-emerald-400 text-sm mt-3 animate-fade-in">
                ✓ You're subscribed! Check your inbox for a welcome gift.
              </p>
            )}

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>hello@wanderlux.travel</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} WanderLux Travel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
