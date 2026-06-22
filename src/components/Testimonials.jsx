import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [sectionRef, isVisible] = useScrollReveal(0.1)

  const goTo = (index) => {
    setCurrent((index + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const avatarColors = [
    'from-emerald-400 to-teal-500',
    'from-sky-400 to-indigo-500',
    'from-amber-400 to-orange-500',
    'from-rose-400 to-pink-500',
  ]

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-slate-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4">
            Testimoni
          </span>
          <h2 id="testimonials-heading" className="section-heading">
            Dipercaya Pelanggan Setia Kami
          </h2>
          <p className="section-subheading">
            Jangan hanya percaya kata kami — dengarkan langsung dari
            pelanggan Travel Purbalingga yang puas.
          </p>
        </div>

        {/* Testimonials Display */}
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Featured Testimonial */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-lg shadow-slate-900/5 border border-slate-100 mb-8">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-emerald-100" aria-hidden="true" />

            <div className="relative">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6" role="img" aria-label={`${TESTIMONIALS[current].rating} dari 5 bintang`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < TESTIMONIALS[current].rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-slate-200 fill-slate-200'
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote>
                <p className="text-lg sm:text-xl text-navy-800 leading-relaxed font-medium italic mb-8">
                  "{TESTIMONIALS[current].text}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarColors[current]} 
                    flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  aria-hidden="true"
                >
                  {TESTIMONIALS[current].avatar}
                </div>
                <div>
                  <cite className="text-base font-bold text-navy-900 not-italic">
                    {TESTIMONIALS[current].name}
                  </cite>
                  <p className="text-sm text-slate-500">{TESTIMONIALS[current].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              id="testimonial-prev"
              onClick={() => goTo(current - 1)}
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500
                hover:border-emerald-300 hover:text-emerald-600 hover:shadow-md
                transition-all duration-300"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Indikator testimoni">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === current
                      ? 'w-8 h-3 bg-emerald-500'
                      : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                  }`}
                  role="tab"
                  aria-selected={index === current}
                  aria-label={`Testimoni ${index + 1}`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={() => goTo(current + 1)}
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500
                hover:border-emerald-300 hover:text-emerald-600 hover:shadow-md
                transition-all duration-300"
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
