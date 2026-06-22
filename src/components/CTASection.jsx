import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const WHATSAPP_NUMBER = '6281234567890'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Halo Travel Purbalingga, saya ingin booking paket travel. Bisa info jadwal dan harga terbaru?'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function CTASection() {
  const [sectionRef, isVisible] = useScrollReveal(0.1)

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-slate-50 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="section-container">
        <div
          className={`relative rounded-3xl overflow-hidden ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&h=600&fit=crop&q=80"
              alt="Pemandangan indah destinasi wisata dari atas"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1400"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/85 to-navy-950/75" />
          </div>

          {/* Decorative */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl" aria-hidden="true" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span className="text-sm text-emerald-200 font-semibold">Promo Terbatas — Diskon Spesial Hari Ini</span>
              </div>

              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
              >
                Siap Berangkat ke
                <br />
                <span className="text-emerald-400">Tujuan Impian?</span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
                Booking sekarang dan dapatkan harga spesial! Hubungi admin kami via WhatsApp 
                untuk jadwal keberangkatan, info harga, dan promo terbaru.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-book-consultation"
                  className="btn-primary !text-base !px-8 !py-4 !shadow-xl !shadow-emerald-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp Sekarang
                </a>
                <a
                  href="#packages"
                  id="cta-explore-tours"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 
                    text-white font-semibold text-base rounded-xl
                    border border-white/20 hover:bg-white/10
                    transition-all duration-300 group"
                >
                  Lihat Paket Travel
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
