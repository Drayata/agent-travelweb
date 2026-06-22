import { VALUE_PROPS } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ValueProposition() {
  const [sectionRef, isVisible] = useScrollReveal(0.1)

  return (
    <section
      id="value-proposition"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-slate-50"
      aria-labelledby="value-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4">
            Kenapa Pilih Kami
          </span>
          <h2 id="value-heading" className="section-heading">
            Perjalanan Nyaman & Terpercaya
          </h2>
          <p className="section-subheading">
            Kami mengurus semua detail perjalanan Anda. Berikut keunggulan
            Travel Purbalingga yang membedakan kami dari yang lain.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((prop, index) => {
            const Icon = prop.icon
            return (
              <article
                key={prop.title}
                className={`group relative bg-white rounded-2xl p-8 border border-slate-100 
                  hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5
                  transition-all duration-500 ease-out cursor-default
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center
                    group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500">
                    <Icon
                      className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-500"
                      strokeWidth={1.8}
                    />
                  </div>
                  <div className="absolute -inset-2 bg-emerald-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {prop.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {prop.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
