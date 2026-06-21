import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-2xl transition-all duration-300 ${
        isOpen
          ? 'border-emerald-200 bg-emerald-50/30 shadow-md shadow-emerald-500/5'
          : 'border-slate-100 bg-white hover:border-slate-200'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3
          className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
            isOpen ? 'text-emerald-700' : 'text-navy-900'
          }`}
        >
          {item.question}
        </h3>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-emerald-500 text-white rotate-180'
              : 'bg-slate-100 text-slate-500'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-slate-600 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [sectionRef, isVisible] = useScrollReveal(0.1)

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="section-container max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 id="faq-heading" className="section-heading">
            Frequently Asked Questions
          </h2>
          <p className="section-subheading">
            Everything you need to know before booking your next adventure.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`space-y-3 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          role="region"
          aria-label="Frequently asked questions"
        >
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
