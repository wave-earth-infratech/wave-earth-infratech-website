import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { equipment, fleetSummary, workforce, equipmentCategories } from '@data/equipment'

const OWNERSHIP_COLORS = {
  'Owned': 'bg-[#52B788]/20 text-[#52B788] border-[#52B788]/40',
  'Long-term Hire': 'bg-amber-500/20 text-amber-400 border-amber-500/40',
}

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? equipment
    : equipment.filter((e) => e.category === activeCategory)

  const totalFleet = fleetSummary.reduce((a, b) => a + b.count, 0)

  return (
    <>
      <Head>
        <title>Machinery & Equipment | Excavators, JCBs, Concrete Mixers - Wave Earth Infratech</title>
        <meta name="description" content="Wave Earth Infratech owns and operates a fleet of excavators, JCBs, concrete mixers, tipper trucks, and compaction equipment for canal, irrigation, and civil infrastructure works in UP and MP." />
      </Head>

      <Header />

      <main className="bg-theme-base text-theme-fg min-h-screen">

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/placeholder.svg" alt="Heavy machinery on site" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/95 via-[#050d1a]/80 to-[#050d1a]/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50 font-sans mb-10" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#52B788]">Equipment</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Our Fleet</span>
            </div>
            <h1 className="font-display text-[54px] lg:text-[80px] text-white uppercase leading-none tracking-tight mb-6 max-w-4xl">
              Machinery & Equipment
            </h1>
            <p className="text-white/70 text-xl max-w-2xl leading-relaxed font-sans">
              Our own fleet - ready to mobilise across UP and MP.
            </p>
          </div>
        </section>

        {/* ── Fleet Summary Strip ── */}
        <section className="bg-[#0B2545] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-white/5">
              {fleetSummary.map((f) => (
                <div key={f.category} className="bg-[#0B2545] px-5 py-7 text-center">
                  <div className="font-display text-[36px] text-[#52B788] leading-none mb-1">{f.count}</div>
                  <div className="text-white/60 text-[10px] uppercase tracking-widest font-sans leading-tight">{f.category}</div>
                </div>
              ))}
              <div className="bg-[#071830] px-5 py-7 text-center">
                <div className="font-display text-[36px] text-white leading-none mb-1">{totalFleet}+</div>
                <div className="text-white/60 text-[10px] uppercase tracking-widest font-sans leading-tight">Total Fleet</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Category Filter + Grid ── */}
        <section className="py-16 lg:py-20 bg-theme-base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Filter bar */}
            <div className="flex flex-wrap gap-2 mb-12 border-b border-theme-border/[0.06] pb-8">
              {equipmentCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] uppercase tracking-widest font-sans font-semibold px-4 py-1.5 border transition-colors duration-150 ${
                    activeCategory === cat
                      ? 'border-[#52B788] text-[#52B788]'
                      : 'border-theme-border/10 text-theme-fg-3 hover:text-theme-fg hover:border-theme-border/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-theme-border/[0.05]">
              {filtered.map((item) => (
                <div key={item.id} className="group bg-theme-base hover:bg-theme-card transition-colors duration-300 border border-theme-border/[0.06] flex flex-col">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 border ${OWNERSHIP_COLORS[item.ownership] || 'bg-white/10 text-white border-white/20'}`}>
                        {item.ownership}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-[#52B788] text-[10px] uppercase tracking-widest font-sans font-semibold mb-2">{item.category}</p>
                    <h3 className="font-display text-[20px] text-theme-fg uppercase tracking-wide mb-1 group-hover:text-[#52B788] transition-colors leading-tight">
                      {item.name}
                    </h3>
                    {item.make && (
                      <p className="text-theme-fg-3 text-[12px] font-sans mb-4">{item.make}</p>
                    )}
                    <div className="space-y-2 mt-auto">
                      <div className="flex items-start gap-2">
                        <span className="text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 w-16 flex-shrink-0 pt-0.5">Spec</span>
                        <span className="text-theme-fg-2 text-sm font-sans">{item.spec}</span>
                      </div>
                      <div className="flex items-start gap-2 border-t border-theme-border/5 pt-3">
                        <span className="text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 w-16 flex-shrink-0 pt-0.5">Use</span>
                        <span className="text-theme-fg-3 text-sm font-sans">{item.primaryUse}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workforce Capability ── */}
        <section className="py-20 bg-theme-surface border-t border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#52B788]" />
                  <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">People</span>
                </div>
                <h2 className="font-display text-[42px] lg:text-[54px] text-theme-fg uppercase leading-none mb-8">
                  Technical & Skilled Workforce
                </h2>
                <div className="space-y-0 mb-8">
                  {workforce.map((w, i) => (
                    <div key={w.role} className={`flex items-center justify-between py-5 border-b border-theme-border/[0.07] ${i === workforce.length - 1 ? 'font-semibold' : ''}`}>
                      <span className="text-theme-fg-2 font-sans text-sm">{w.role}</span>
                      <span className="font-display text-[24px] text-[#52B788]">{w.count}</span>
                    </div>
                  ))}
                </div>
                <p className="text-theme-fg-3 text-sm leading-relaxed font-sans">
                  Our workforce is experienced in canal lining, earthwork, and RCC construction. Supervisors are trained in government quality control procedures including material testing, measurement book maintenance, and site inspection protocols.
                </p>
              </div>
              <div>
                <img src="/images/placeholder.svg" alt="Site workforce" className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Mobilisation Capability ── */}
        <section className="py-20 bg-theme-base border-t border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-theme-border/[0.05]">
              <div className="lg:col-span-1 bg-[#0B2545] p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#52B788]" />
                  <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Mobilisation</span>
                </div>
                <h2 className="font-display text-[42px] text-white uppercase leading-none mb-6">
                  Rapid Mobilisation
                </h2>
                <p className="text-white/70 text-sm leading-relaxed font-sans">
                  We can mobilise our full equipment fleet and workforce to a new project site within 7–10 days of contract award. Our team is experienced in setting up site offices, labour camps, and material storage in remote rural locations across UP and MP.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-theme-border/[0.05]">
                {[
                  { icon: '7–10', label: 'Days to Mobilise', desc: 'Full fleet and workforce deployed to new site after contract award.' },
                  { icon: '2', label: 'States Active', desc: 'Simultaneous multi-site execution capacity across UP and MP.' },
                  { icon: '24/7', label: 'Site Support', desc: 'Equipment operators and site supervisors available for extended shifts.' },
                  { icon: '100%', label: 'Owned Fleet', desc: 'No dependency on third-party plant hire for core equipment.' },
                ].map((item) => (
                  <div key={item.label} className="bg-theme-base p-8 border border-theme-border/[0.06] hover:bg-theme-card transition-colors">
                    <div className="font-display text-[40px] text-[#52B788] leading-none mb-3">{item.icon}</div>
                    <p className="font-display text-[16px] text-theme-fg uppercase tracking-wide mb-2">{item.label}</p>
                    <p className="text-theme-fg-3 text-sm leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Equipment Hire CTA ── */}
        <section className="py-20 bg-[#2D6A4F]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-[40px] lg:text-[54px] text-white uppercase leading-none mb-6">
              Equipment Hire Enquiries
            </h2>
            <p className="text-white/80 text-base mb-10 leading-relaxed font-sans">
              We also provide machinery on hire for project requirements in the region - excavators, JCBs, tippers, and more. Contact us to discuss availability and rates.
            </p>
            <Link href="/contact-us" className="btn-primary">Contact for Equipment Hire</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

