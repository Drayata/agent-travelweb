import { Star, Clock, MapPin, ArrowRight } from 'lucide-react'
import { FEATURED_PACKAGES } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FeaturedPackages() {
  const [sectionRef, isVisible] = useScrollReveal(0.1)

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="packages-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4">
            Featured Packages
          </span>
          <h2 id="packages-heading" className="section-heading">
            Handpicked Journeys
          </h2>
          <p className="section-subheading">
            Our most sought-after experiences, curated for those who
            demand the extraordinary.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PACKAGES.map((pkg, index) => (
            <article
              key={pkg.id}
              className={`group relative bg-white rounded-2xl overflow-hidden border border-slate-100
                hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10
                transition-all duration-500 ease-out
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${pkg.title} — scenic view of ${pkg.location}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {pkg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-navy-900 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Save Badge */}
                {pkg.originalPrice && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500 rounded-full text-xs font-bold text-white shadow-lg">
                    Save ${pkg.originalPrice - pkg.price}
                  </div>
                )}

                {/* Location Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{pkg.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-navy-900">{pkg.rating}</span>
                  </div>
                  <span className="text-xs text-slate-400">({pkg.reviewCount} reviews)</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {pkg.title}
                </h3>

                {/* Duration */}
                <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-5">
                  <Clock className="w-4 h-4" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                  <div>
                    {pkg.originalPrice && (
                      <span className="text-sm text-slate-400 line-through mr-2">
                        ${pkg.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-navy-900">
                        ${pkg.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">/person</span>
                    </div>
                  </div>
                  <button
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-50 text-emerald-700
                      font-semibold text-sm rounded-xl hover:bg-emerald-500 hover:text-white
                      transition-all duration-300 group/btn"
                    aria-label={`View details for ${pkg.title}`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-14">
          <a
            href="#packages"
            className="btn-secondary group"
            id="view-all-packages"
          >
            View All Packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  )
}
