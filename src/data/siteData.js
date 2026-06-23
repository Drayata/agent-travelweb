import {
  Car,
  ShieldCheck,
  Home,
  Banknote,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Paket Travel', href: '#packages' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export const VALUE_PROPS = [
  {
    icon: Car,
    title: 'Supir Berpengalaman via Tol',
    description:
      'Semua pengemudi kami profesional, hafal rute tol & jalur alternatif, serta mengutamakan keselamatan penumpang di setiap perjalanan.',
  },
  {
    icon: ShieldCheck,
    title: 'Armada Bersih & Terawat',
    description:
      'Pilihan armada Avanza, Hiace, dan Elf yang selalu bersih, terawat, full AC, dan siap antar Anda dengan nyaman.',
  },
  {
    icon: Home,
    title: 'Layanan Door-to-Door',
    description:
      'Antar jemput langsung dari depan rumah Anda. Tidak perlu repot ke terminal — kami yang datang ke lokasi Anda.',
  },
  {
    icon: Banknote,
    title: 'Harga Transparan & Terjangkau',
    description:
      'Harga yang Anda lihat adalah harga yang Anda bayar. Tanpa biaya tersembunyi, tanpa kejutan. Dijamin paling murah!',
  },
]

export const FEATURED_PACKAGES = [
  {
    id: 1,
    title: 'Paket Wisata Domestik Purbalingga',
    location: 'Purbalingga, Jawa Tengah',
    duration: '1 Hari / Full Day Trip',
    price: 150000,
    originalPrice: 225000,
    rating: 4.9,
    reviewCount: 487,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop&q=80',
    tags: ['Terlaris', 'Wisata Keluarga'],
    highlights: ["D'Las Serang", 'Owabong', 'Goa Lawa Celong'],
    currency: 'Rp',
  },
  {
    id: 2,
    title: 'Travel Reguler Purbalingga - Jakarta (PP)',
    location: 'Purbalingga ⇌ Jakarta',
    duration: 'Berangkat Setiap Hari',
    price: 250000,
    originalPrice: 350000,
    rating: 4.8,
    reviewCount: 1024,
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=600&h=400&fit=crop&q=80',
    tags: ['Populer', 'PP'],
    highlights: ['Door-to-Door', 'Via Tol', 'AC & WiFi'],
    currency: 'Rp',
  },
  {
    id: 3,
    title: 'Travel Reguler Purbalingga - Semarang / Yogyakarta (PP)',
    location: 'Purbalingga ⇌ Semarang / Jogja',
    duration: 'Berangkat Setiap Hari',
    price: 125000,
    originalPrice: 175000,
    rating: 4.9,
    reviewCount: 863,
    image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=600&h=400&fit=crop&q=80',
    tags: ['Hemat', 'PP'],
    highlights: ['Door-to-Door', 'Armada Hiace', 'Tepat Waktu'],
    currency: 'Rp',
  },
  {
    id: 4,
    title: 'Travel Reguler Purbalingga - Bandung (PP)',
    location: 'Purbalingga ⇌ Bandung',
    duration: 'Berangkat Setiap Hari',
    price: 275000,
    originalPrice: 375000,
    rating: 4.7,
    reviewCount: 612,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=80',
    tags: ['Populer', 'PP'],
    highlights: ['Door-to-Door', 'Via Tol', 'Armada Nyaman'],
    description: 'Layanan door-to-door via Tol',
    currency: 'Rp',
  },
  {
    id: 5,
    title: 'Paket Wisata Keluarga Goa Lawa Purbalingga (Golaga)',
    location: 'Goa Lawa, Purbalingga',
    duration: '1 Hari / Full Day Trip',
    price: 135000,
    originalPrice: 200000,
    rating: 4.8,
    reviewCount: 394,
    image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&h=400&fit=crop&q=80',
    tags: ['Keluarga', 'Wisata Alam'],
    highlights: ['Gua Eksotis', 'Hutan Pinus', 'Makan Siang Include'],
    description: 'Eksplorasi gua eksotis & pinus',
    currency: 'Rp',
  },
  {
    id: 6,
    title: 'Ziarah Wali Songo & Wisata Religi dari Purbalingga',
    location: 'Jawa Tengah & Jawa Timur',
    duration: '3 Hari 2 Malam',
    price: 850000,
    originalPrice: 1100000,
    rating: 4.9,
    reviewCount: 278,
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&h=400&fit=crop&q=80',
    tags: ['Religi', 'Bus Pariwisata'],
    highlights: ['9 Makam Wali', 'Makan 3x', 'Hotel Include'],
    description: 'Paket Bus Pariwisata',
    currency: 'Rp',
  },
  {
    id: 7,
    title: 'Travel Reguler Purbalingga - Surabaya (PP)',
    location: 'Purbalingga ⇌ Surabaya',
    duration: 'Berangkat 3x Seminggu',
    price: 325000,
    originalPrice: 450000,
    rating: 4.8,
    reviewCount: 531,
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&h=400&fit=crop&q=80',
    tags: ['Executive', 'PP'],
    highlights: ['Toyota Hiace', 'Reclining Seat', 'Snack & Air Mineral'],
    description: 'Armada Toyota Hiace Executive',
    currency: 'Rp',
  },
  {
    id: 8,
    title: 'Paket Study Tour Sekolah ke Owabong & Sanggaluri Park',
    location: 'Owabong & Sanggaluri, Purbalingga',
    duration: '1 Hari / Full Day Trip',
    price: 95000,
    originalPrice: 150000,
    rating: 4.9,
    reviewCount: 723,
    image: 'https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=600&h=400&fit=crop&q=80',
    tags: ['Study Tour', 'Edukasi'],
    highlights: ['Tiket Masuk Include', 'Rekreasi Air', 'Pemandu Wisata'],
    description: 'Edukasi & rekreasi air',
    currency: 'Rp',
  },
  {
    id: 9,
    title: 'Sewa Mobil & Rental Avanza/Innova Purbalingga + Driver',
    location: 'Purbalingga & Sekitarnya',
    duration: 'Harian / Mingguan',
    price: 450000,
    originalPrice: 600000,
    rating: 4.7,
    reviewCount: 445,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop&q=80',
    tags: ['Rental', 'Fleksibel'],
    highlights: ['BBM Include', 'Driver Berpengalaman', '12 Jam/Hari'],
    description: 'Harian / Mingguan',
    currency: 'Rp',
  },
  {
    id: 10,
    title: 'Paket Trip Pendakian Gunung Slamet via Bambangan',
    location: 'Gunung Slamet, Purbalingga',
    duration: '2 Hari 1 Malam',
    price: 375000,
    originalPrice: 500000,
    rating: 4.9,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop&q=80',
    tags: ['Adventure', 'Pendakian'],
    highlights: ['Pemandu Lokal', 'Basecamp Include', 'Peralatan Camping'],
    description: 'Pemandu lokal & basecamp include',
    currency: 'Rp',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ibu Siti Nurhaliza',
    role: 'Pelanggan Tetap, Purbalingga',
    avatar: 'SN',
    rating: 5,
    text: 'Sudah 3 kali pakai Travel Purbalingga untuk perjalanan ke Jakarta. Selalu tepat waktu, mobilnya bersih, dan supirnya ramah. Pokoknya recommended banget!',
  },
  {
    id: 2,
    name: 'Bapak Ahmad Fauzi',
    role: 'Pebisnis, Jakarta - Purbalingga',
    avatar: 'AF',
    rating: 5,
    text: 'Sebagai orang yang sering bolak-balik Jakarta - Purbalingga, saya butuh travel yang bisa diandalkan. Travel Purbalingga jawaban saya. Door-to-door, nggak perlu repot ke terminal.',
  },
  {
    id: 3,
    name: 'Keluarga Budi Santoso',
    role: 'Wisata Keluarga, Semarang',
    avatar: 'BS',
    rating: 5,
    text: 'Bawa anak-anak wisata ke Owabong dan Goa Lawa pakai paket dari Travel Purbalingga. Harganya murah, acaranya seru, anak-anak happy! Terima kasih Travel Purbalingga!',
  },
  {
    id: 4,
    name: 'Mbak Ratna Dewi',
    role: 'Mahasiswi, Yogyakarta',
    avatar: 'RD',
    rating: 5,
    text: 'Sering pulang kampung ke Purbalingga naik travel ini. Harganya ramah di kantong mahasiswa, berangkat tepat waktu, dan dijemput langsung di kosan. Mantap!',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'Bagaimana cara booking Travel Purbalingga?',
    answer:
      'Anda bisa langsung menghubungi kami via WhatsApp untuk booking seat atau paket wisata. Cukup kirim pesan dengan tujuan, tanggal keberangkatan, dan jumlah penumpang — tim kami akan langsung memproses pemesanan Anda.',
  },
  {
    question: 'Apakah bisa dijemput di rumah (door-to-door)?',
    answer:
      'Tentu! Layanan antar jemput door-to-door adalah keunggulan utama kami. Kami menjemput dan mengantar Anda langsung dari/ke depan rumah tanpa perlu repot ke terminal atau pool.',
  },
  {
    question: 'Armada apa saja yang tersedia?',
    answer:
      'Kami menyediakan armada Toyota Avanza, Toyota Hiace, dan Isuzu Elf yang selalu terawat, bersih, full AC, dan nyaman. Pilihan armada disesuaikan dengan jumlah penumpang dan rute perjalanan.',
  },
  {
    question: 'Berapa harga travel Purbalingga - Jakarta?',
    answer:
      'Harga travel reguler Purbalingga - Jakarta mulai dari Rp 250.000/orang (PP). Harga sudah termasuk antar jemput door-to-door. Hubungi kami via WhatsApp untuk promo dan diskon terbaru.',
  },
  {
    question: 'Apakah ada jadwal keberangkatan setiap hari?',
    answer:
      'Ya, kami melayani keberangkatan setiap hari untuk rute Purbalingga - Jakarta, Purbalingga - Semarang, dan Purbalingga - Yogyakarta. Jadwal fleksibel dan bisa disesuaikan dengan kebutuhan Anda.',
  },
]

export const FOOTER_LINKS = {
  company: [
    { label: 'Tentang Kami', href: '#' },
    { label: 'Armada Kami', href: '#' },
    { label: 'Karir', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  support: [
    { label: 'Pusat Bantuan', href: '#' },
    { label: 'Cara Booking', href: '#' },
    { label: 'Kebijakan Pembatalan', href: '#' },
    { label: 'Hubungi Kami', href: '#' },
  ],
  legal: [
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'Kebijakan Cookie', href: '#' },
  ],
}

export const DESTINATIONS = [
  'Purbalingga - Jakarta',
  'Purbalingga - Semarang',
  'Purbalingga - Yogyakarta',
  'Purbalingga - Bandung',
  'Purbalingga - Surabaya',
  'Purbalingga - Cirebon',
  'Wisata Owabong',
  'Wisata Goa Lawa Celong',
]

export const BUDGETS = [
  'Di bawah Rp 150.000',
  'Rp 150.000 – Rp 250.000',
  'Rp 250.000 – Rp 400.000',
  'Rp 400.000 – Rp 600.000',
  'Rp 600.000+',
]
