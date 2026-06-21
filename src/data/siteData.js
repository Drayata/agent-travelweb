import {
  Map,
  Headphones,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Tour Packages', href: '#packages' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export const VALUE_PROPS = [
  {
    icon: Map,
    title: 'Curated Itineraries',
    description:
      'Every trip is handcrafted by seasoned travel designers who know the hidden gems ordinary tourists miss.',
  },
  {
    icon: Headphones,
    title: '24/7 Concierge Support',
    description:
      'From pre-departure to return, our dedicated travel concierge team is always a message away.',
  },
  {
    icon: ShieldCheck,
    title: 'No Hidden Fees',
    description:
      'Transparent pricing guaranteed. The price you see is the price you pay — no surprises, ever.',
  },
  {
    icon: Sparkles,
    title: 'Exclusive Experiences',
    description:
      'Access VIP tours, private guides, and off-the-beaten-path adventures unavailable anywhere else.',
  },
]

export const FEATURED_PACKAGES = [
  {
    id: 1,
    title: 'Santorini Dream Escape',
    location: 'Santorini, Greece',
    duration: '7 Days / 6 Nights',
    price: 2499,
    originalPrice: 3199,
    rating: 4.9,
    reviewCount: 342,
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop&q=80',
    tags: ['Bestseller', 'Romantic'],
  },
  {
    id: 2,
    title: 'Bali Serenity Retreat',
    location: 'Bali, Indonesia',
    duration: '5 Days / 4 Nights',
    price: 1899,
    originalPrice: 2399,
    rating: 4.8,
    reviewCount: 518,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&q=80',
    tags: ['Popular', 'Wellness'],
  },
  {
    id: 3,
    title: 'Swiss Alps Adventure',
    location: 'Interlaken, Switzerland',
    duration: '6 Days / 5 Nights',
    price: 3299,
    originalPrice: 3999,
    rating: 4.9,
    reviewCount: 276,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&q=80',
    tags: ['Adventure', 'Premium'],
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Solo Traveler',
    avatar: 'SM',
    rating: 5,
    text: 'WanderLux completely transformed how I travel. The Santorini itinerary was flawless — every restaurant, every sunset spot was curated to perfection. I felt like a VIP the entire trip.',
  },
  {
    id: 2,
    name: 'James & Emily Park',
    role: 'Honeymoon Couple',
    avatar: 'JP',
    rating: 5,
    text: "Our Bali honeymoon was the most magical experience of our lives. The private villa, the hidden waterfall tour — things we never could have planned ourselves. Worth every penny.",
  },
  {
    id: 3,
    name: 'David Okonkwo',
    role: 'Family Vacation',
    avatar: 'DO',
    rating: 5,
    text: "Traveling with three kids under 10 sounded chaotic, but WanderLux made it seamless. Kid-friendly activities were woven into every day. The 24/7 support was a lifesaver when we needed last-minute changes.",
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Adventure Enthusiast',
    avatar: 'PS',
    rating: 5,
    text: "The Swiss Alps trip pushed me out of my comfort zone in the best way. Paragliding over Interlaken, fondue in a mountain hut — it was the perfect blend of adrenaline and relaxation.",
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How far in advance should I book my trip?',
    answer:
      'We recommend booking at least 4-6 weeks in advance for the best availability and pricing. However, we can accommodate last-minute requests — our team thrives on making the impossible possible.',
  },
  {
    question: 'Can I customize a tour package?',
    answer:
      'Absolutely! Every package can be fully tailored to your preferences. Whether it\'s dietary requirements, accessibility needs, or a special anniversary surprise, just let us know during your consultation.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We offer free cancellation up to 30 days before departure for a full refund. Cancellations within 14-30 days receive a 50% refund or full travel credit. Within 14 days, we offer travel credit valid for 12 months.',
  },
  {
    question: 'Do you offer group discounts?',
    answer:
      'Yes! Groups of 6+ receive 10% off, and groups of 12+ receive 15% off. We also offer exclusive corporate retreat packages — reach out for a custom quote.',
  },
  {
    question: 'Is travel insurance included?',
    answer:
      'Basic travel insurance is included in all our premium packages. We also partner with leading insurers to offer comprehensive coverage upgrades for medical, trip cancellation, and luggage protection.',
  },
]

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Safety', href: '#' },
    { label: 'Cancellation', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export const DESTINATIONS = [
  'Bali, Indonesia',
  'Santorini, Greece',
  'Kyoto, Japan',
  'Interlaken, Switzerland',
  'Marrakech, Morocco',
  'Reykjavik, Iceland',
  'Amalfi Coast, Italy',
  'Queenstown, New Zealand',
]

export const BUDGETS = [
  'Under $1,000',
  '$1,000 – $2,000',
  '$2,000 – $3,000',
  '$3,000 – $5,000',
  '$5,000+',
]
