import { useState } from 'react'
import { Search, MapPin, Calendar, Wallet, ChevronDown, Star, Users } from 'lucide-react'
import { DESTINATIONS, BUDGETS } from '../data/siteData'

export default function Hero() {
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [budget, setBudget] = useState('')
  const [showDestDropdown, setShowDestDropdown] = useState(false)
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&h=1080&fit=crop&q=80"
          alt="Pemandangan indah destinasi wisata Purbalingga Jawa Tengah"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/80 via-navy-900/60 to-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-float" />

      {/* Content */}
      <div className="relative section-container w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
            <div className="flex -space-x-2">
              {['bg-emerald-400', 'bg-sky-400', 'bg-amber-400', 'bg-rose-400'].map((color, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${color} border-2 border-white/30 flex items-center justify-center`}
                >
                  <Users className="w-3.5 h-3.5 text-white" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-white/90 text-sm font-medium">
                Dipercaya <strong className="text-white">2.000+</strong> Pelanggan
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up"
          >
            Agen Travel Purbalingga
            <br />
            <span className="relative">
              <span className="text-gradient bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Terbaik & Terpercaya
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8.5C50 2.5 100 2 150 5.5C200 9 250 4 298 7"
                  stroke="#34d399"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Perjalanan Aman, Nyaman, & Tepat Waktu. Travel reguler Purbalingga – Jakarta,
            <br className="hidden sm:block" />
            Semarang, Jogja. Layanan door-to-door, armada bersih & terawat.
          </p>

          {/* Search Bar */}
          <div
            className="glass-card !bg-white/95 !backdrop-blur-xl p-2 sm:p-3 max-w-3xl animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
            role="search"
            aria-label="Cari paket travel"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Destination */}
              <div className="relative flex-1">
                <div
                  id="search-destination"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors"
                  onClick={() => { setShowDestDropdown(!showDestDropdown); setShowBudgetDropdown(false) }}
                  role="combobox"
                  aria-expanded={showDestDropdown}
                  aria-label="Pilih tujuan"
                >
                  <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Tujuan</p>
                    <p className="text-sm text-navy-900 font-semibold truncate">
                      {destination || 'Mau ke mana?'}
                    </p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${showDestDropdown ? 'rotate-180' : ''}`} />
                </div>
                {showDestDropdown && (
                  <ul
                    className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 max-h-52 overflow-y-auto"
                    role="listbox"
                    aria-label="Opsi tujuan"
                  >
                    {DESTINATIONS.map((dest) => (
                      <li
                        key={dest}
                        className="px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer transition-colors"
                        onClick={() => { setDestination(dest); setShowDestDropdown(false) }}
                        role="option"
                        aria-selected={destination === dest}
                      >
                        {dest}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px bg-slate-200 self-stretch my-2" aria-hidden="true" />

              {/* Date */}
              <div className="relative flex-1">
                <label htmlFor="search-date" className="sr-only">Tanggal perjalanan</label>
                <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <Calendar className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Tanggal</p>
                    <input
                      id="search-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="text-sm text-navy-900 font-semibold bg-transparent border-none outline-none w-full cursor-pointer"
                      aria-label="Pilih tanggal perjalanan"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px bg-slate-200 self-stretch my-2" aria-hidden="true" />

              {/* Budget */}
              <div className="relative flex-1">
                <div
                  id="search-budget"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors"
                  onClick={() => { setShowBudgetDropdown(!showBudgetDropdown); setShowDestDropdown(false) }}
                  role="combobox"
                  aria-expanded={showBudgetDropdown}
                  aria-label="Pilih budget"
                >
                  <Wallet className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Budget</p>
                    <p className="text-sm text-navy-900 font-semibold truncate">
                      {budget || 'Semua harga'}
                    </p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${showBudgetDropdown ? 'rotate-180' : ''}`} />
                </div>
                {showBudgetDropdown && (
                  <ul
                    className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                    role="listbox"
                    aria-label="Opsi budget"
                  >
                    {BUDGETS.map((b) => (
                      <li
                        key={b}
                        className="px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer transition-colors"
                        onClick={() => { setBudget(b); setShowBudgetDropdown(false) }}
                        role="option"
                        aria-selected={budget === b}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Search Button */}
              <button
                id="search-submit"
                className="btn-primary !rounded-xl !px-6 sm:!px-5 whitespace-nowrap"
                aria-label="Cari paket travel"
              >
                <Search className="w-5 h-5" />
                <span className="sm:hidden lg:inline">Cari</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            {[
              { value: '8+', label: 'Rute Perjalanan' },
              { value: '2K+', label: 'Pelanggan Puas' },
              { value: '4.9', label: 'Rating Rata-rata', icon: true },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1">
                  {stat.value}
                  {stat.icon && <Star className="w-5 h-5 text-amber-400 fill-amber-400" />}
                </div>
                <span className="text-sm text-white/50 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  )
}
