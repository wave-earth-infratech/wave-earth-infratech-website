import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const GALLERY_ITEMS = [
  // Canal Construction
  { id: 1, category: 'Canal', title: 'Canal Excavation - Bundelkhand', location: 'UP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 2, category: 'Canal', title: 'Canal Lining Work in Progress', location: 'UP', image: '/images/placeholder.svg', aspect: 'portrait' },
  { id: 3, category: 'Canal', title: 'Completed Canal Section', location: 'MP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 4, category: 'Canal', title: 'Canal Bank Earthwork', location: 'UP', image: '/images/placeholder.svg', aspect: 'landscape' },
  // Earthwork & Excavation
  { id: 5, category: 'Earthwork', title: 'Bulk Earthwork - Reservoir Site', location: 'MP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 6, category: 'Earthwork', title: 'Embankment Compaction', location: 'UP', image: '/images/placeholder.svg', aspect: 'square' },
  { id: 7, category: 'Earthwork', title: 'Excavator at Work', location: 'UP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 8, category: 'Earthwork', title: 'Graded Embankment Section', location: 'MP', image: '/images/placeholder.svg', aspect: 'landscape' },
  // Concrete & RCC
  { id: 9, category: 'Concrete', title: 'RCC Canal Lining', location: 'UP', image: '/images/placeholder.svg', aspect: 'portrait' },
  { id: 10, category: 'Concrete', title: 'Concrete Mixing on Site', location: 'MP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 11, category: 'Concrete', title: 'Culvert Construction', location: 'UP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 12, category: 'Concrete', title: 'Checking Concrete Quality', location: 'UP', image: '/images/placeholder.svg', aspect: 'square' },
  // Irrigation
  { id: 13, category: 'Irrigation', title: 'Minor Irrigation Scheme', location: 'UP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 14, category: 'Irrigation', title: 'Field Irrigation Channel', location: 'UP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 15, category: 'Irrigation', title: 'Distribution Network', location: 'MP', image: '/images/placeholder.svg', aspect: 'portrait' },
  // Machinery
  { id: 16, category: 'Machinery', title: 'Excavator - Canal Excavation', location: 'UP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 17, category: 'Machinery', title: 'JCB Loading Operations', location: 'UP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 18, category: 'Machinery', title: 'Vibratory Roller - Compaction', location: 'MP', image: '/images/placeholder.svg', aspect: 'square' },
  // Community Works
  { id: 19, category: 'Community', title: 'Village Water Structure', location: 'UP', image: '/images/placeholder.svg', aspect: 'landscape' },
  { id: 20, category: 'Community', title: 'Community Building Handover', location: 'UP', image: '/images/placeholder.svg', aspect: 'landscape' },
]

const BEFORE_AFTER = [
  {
    title: 'Canal Desilting & Restoration',
    location: 'Banda, UP',
    before: '/images/placeholder.svg',
    after: '/images/placeholder.svg',
  },
  {
    title: 'Embankment Repair & Lining',
    location: 'Satna, MP',
    before: '/images/placeholder.svg',
    after: '/images/placeholder.svg',
  },
]

const CATEGORIES = ['All', 'Canal', 'Earthwork', 'Concrete', 'Irrigation', 'Machinery', 'Community']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [beforeAfterView, setBeforeAfterView] = useState({}) // id -> 'before' | 'after'

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === activeCategory)

  const openLightbox = (item) => setLightbox(item)
  const closeLightbox = () => setLightbox(null)

  const toggleBeforeAfter = (id, view) =>
    setBeforeAfterView((prev) => ({ ...prev, [id]: view }))

  return (
    <>
      <Head>
        <title>Project Gallery | Site Photography - Wave Earth Infratech</title>
        <meta name="description" content="Browse our project gallery - canal construction, earthwork, irrigation, concrete works, and community infrastructure across UP and MP." />
      </Head>

      <Header />

      {/* Lightbox overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} className="w-full max-h-[80vh] object-contain" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-white font-display text-[16px] uppercase tracking-wide">{lightbox.title}</p>
                <p className="text-white/50 text-[11px] uppercase tracking-widest font-sans mt-1">{lightbox.location}</p>
              </div>
              <button
                onClick={closeLightbox}
                className="text-white/60 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-sans"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="bg-theme-base text-theme-fg min-h-screen">

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/placeholder.svg" alt="Site gallery" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/95 via-[#050d1a]/80 to-[#050d1a]/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50 font-sans mb-10" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#52B788]">Gallery</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Site Photography</span>
            </div>
            <h1 className="font-display text-[54px] lg:text-[80px] text-white uppercase leading-none tracking-tight mb-6 max-w-4xl">
              Project Gallery
            </h1>
            <p className="text-white/70 text-xl max-w-2xl leading-relaxed font-sans">
              From excavation to handover - documented on the ground.
            </p>
          </div>
        </section>

        {/* ── Filter + Grid ── */}
        <section className="py-16 lg:py-20 bg-theme-base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-12 border-b border-theme-border/[0.06] pb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] uppercase tracking-widest font-sans font-semibold px-4 py-1.5 border transition-colors duration-150 ${
                    activeCategory === cat
                      ? 'border-[#52B788] text-[#52B788]'
                      : 'border-theme-border/10 text-theme-fg-3 hover:text-theme-fg hover:border-theme-border/30'
                  }`}
                >
                  {cat === 'All' ? `All (${GALLERY_ITEMS.length})` : `${cat} (${GALLERY_ITEMS.filter((g) => g.category === cat).length})`}
                </button>
              ))}
            </div>

            {/* Photo grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="break-inside-avoid group cursor-pointer overflow-hidden relative"
                  onClick={() => openLightbox(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/80 via-[#050d1a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <p className="text-white font-display text-[15px] uppercase tracking-wide leading-snug">{item.title}</p>
                    <p className="text-white/60 text-[10px] uppercase tracking-widest font-sans mt-1">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Before & After ── */}
        <section className="py-20 bg-theme-surface border-t border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Transformation</span>
                <span className="w-8 h-px bg-[#52B788]" />
              </div>
              <h2 className="font-display text-[42px] lg:text-[54px] text-theme-fg uppercase leading-none">Before & After</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {BEFORE_AFTER.map((item) => {
                const view = beforeAfterView[item.title] || 'after'
                return (
                  <div key={item.title} className="bg-theme-card border border-theme-border/[0.06]">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={view === 'before' ? item.before : item.after}
                        alt={`${view === 'before' ? 'Before' : 'After'}: ${item.title}`}
                        className="w-full h-full object-cover transition-opacity duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 border ${view === 'before' ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' : 'bg-[#52B788]/20 text-[#52B788] border-[#52B788]/40'}`}>
                          {view === 'before' ? 'Before' : 'After'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex items-center justify-between">
                      <div>
                        <p className="font-display text-[16px] text-theme-fg uppercase tracking-wide">{item.title}</p>
                        <p className="text-theme-fg-3 text-[11px] uppercase tracking-widest font-sans mt-1">{item.location}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleBeforeAfter(item.title, 'before')}
                          className={`text-[10px] uppercase tracking-widest font-sans font-bold px-3 py-1.5 border transition-colors ${view === 'before' ? 'border-amber-500/60 text-amber-400' : 'border-theme-border/10 text-theme-fg-3 hover:text-theme-fg'}`}
                        >
                          Before
                        </button>
                        <button
                          onClick={() => toggleBeforeAfter(item.title, 'after')}
                          className={`text-[10px] uppercase tracking-widest font-sans font-bold px-3 py-1.5 border transition-colors ${view === 'after' ? 'border-[#52B788]/60 text-[#52B788]' : 'border-theme-border/10 text-theme-fg-3 hover:text-theme-fg'}`}
                        >
                          After
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Video Section ── */}
        <section className="py-20 bg-theme-base border-t border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Video</span>
                <span className="w-8 h-px bg-[#52B788]" />
              </div>
              <h2 className="font-display text-[42px] lg:text-[54px] text-theme-fg uppercase leading-none">Site Footage</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-theme-border/[0.05]">
              {[
                { title: 'Canal Excavation - Timelapse', location: 'Jhansi, UP', vid: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
                { title: 'Canal Lining Operations', location: 'Satna, MP', vid: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
              ].map((v) => (
                <div key={v.title} className="bg-theme-base border border-theme-border/[0.06]">
                  <div className="relative aspect-video overflow-hidden">
                    <iframe
                      src={v.vid}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-display text-[16px] text-theme-fg uppercase tracking-wide">{v.title}</p>
                    <p className="text-theme-fg-3 text-[11px] uppercase tracking-widest font-sans mt-1">{v.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-theme-fg-3 text-[11px] uppercase tracking-widest font-sans mt-6">
              Placeholder videos - replace with actual site footage
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#2D6A4F]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-[40px] lg:text-[54px] text-white uppercase leading-none mb-6">See Our Work First-Hand</h2>
            <p className="text-white/80 text-base mb-10 leading-relaxed font-sans">
              Interested in visiting a live site or reviewing our project portfolio in detail? Get in touch.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/our-projects" className="btn-primary">View All Projects</Link>
              <Link href="/contact-us" className="border border-white/30 text-white text-[11px] font-sans uppercase tracking-widest px-8 py-3 hover:border-white hover:bg-white/10 transition-colors">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

