import { useState } from 'react'
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
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
            <a href="#home" className="inline-flex items-center gap-2.5 mb-6 group" aria-label="Travel Purbalingga beranda">
              <Globe className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span className="text-xl font-bold">
                Travel<span className="text-emerald-400">Purbalingga</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Agen travel Purbalingga terpercaya melayani perjalanan aman, nyaman, dan tepat waktu 
              ke berbagai kota di Pulau Jawa. Layanan door-to-door dari depan rumah Anda.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center
                    text-slate-400 hover:bg-emerald-500/20 hover:text-emerald-400
                    transition-all duration-300"
                  aria-label={`Ikuti kami di ${social.label}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">
              Perusahaan
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
              Bantuan
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
              Dapatkan Info Promo
            </h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Daftar untuk mendapatkan info promo, jadwal travel terbaru, dan penawaran spesial langsung ke email Anda.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2" aria-label="Pendaftaran newsletter">
              <label htmlFor="footer-email" className="sr-only">Alamat email</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@anda.com"
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
                aria-label="Daftar newsletter"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            {isSubmitted && (
              <p className="text-emerald-400 text-sm mt-3 animate-fade-in">
                ✓ Anda sudah terdaftar! Cek inbox email Anda.
              </p>
            )}

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>info@travelpurbalingga.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Purbalingga, Jawa Tengah</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Travel Purbalingga. Semua hak dilindungi.
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
