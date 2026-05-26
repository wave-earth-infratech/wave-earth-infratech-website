import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { certifications, certCategories, empanelments } from '@data/certifications'

const STATUS_STYLES = {
  valid: 'bg-[#52B788]/20 text-[#52B788] border-[#52B788]/40',
  renewal_pending: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
}

const ICON_MAP = {
  tax: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
  ),
  industry: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  ),
  labour: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  ),
  contractor: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  ),
  business: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
}

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === activeCategory)

  return (
    <>
      <Head>
        <title>Certifications & Registrations | Compliance - Wave Earth Infratech</title>
        <meta name="description" content="Wave Earth Infratech is GST registered, MSME certified, EPF compliant, and empanelled with UP Jal Nigam and UP Sinchai Vibhag for irrigation and civil infrastructure works." />
      </Head>

      <Header />

      <main className="bg-theme-base text-theme-fg min-h-screen">

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/placeholder.svg" alt="Compliance documentation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/95 via-[#050d1a]/80 to-[#050d1a]/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50 font-sans mb-10" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#52B788]">Certifications</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Compliance</span>
            </div>
            <h1 className="font-display text-[54px] lg:text-[80px] text-white uppercase leading-none tracking-tight mb-6 max-w-4xl">
              Certifications & Registrations
            </h1>
            <p className="text-white/70 text-xl max-w-2xl leading-relaxed font-sans">
              Fully compliant - from tax registration to contractor empanelments.
            </p>
          </div>
        </section>

        {/* ── Compliance Summary Strip ── */}
        <section className="bg-[#0B2545] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {[
                { val: certifications.length, label: 'Active Registrations' },
                { val: empanelments.length, label: 'Contractor Empanelments' },
                { val: '2017', label: 'Registration Since' },
                { val: '100%', label: 'Compliance Rate' },
              ].map((s) => (
                <div key={s.label} className="bg-[#0B2545] px-8 py-7 text-center">
                  <div className="font-display text-[40px] text-[#52B788] leading-none mb-1">{s.val}</div>
                  <div className="text-white/60 text-[11px] uppercase tracking-widest font-sans">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Filter + Cert Cards ── */}
        <section className="py-16 lg:py-20 bg-theme-base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Filter */}
            <div className="flex flex-wrap gap-2 mb-12 border-b border-theme-border/[0.06] pb-8">
              {certCategories.map((cat) => (
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

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-theme-border/[0.05]">
              {filtered.map((cert) => (
                <div key={cert.id} className="group bg-theme-base hover:bg-theme-card transition-colors border border-theme-border/[0.06] p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 text-[#52B788]">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                        {ICON_MAP[cert.icon] || ICON_MAP.business}
                      </svg>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 border ${STATUS_STYLES[cert.status] || STATUS_STYLES.valid}`}>
                      {cert.status === 'valid' ? 'Valid' : 'Renewal Pending'}
                    </span>
                  </div>
                  <p className="text-[#52B788] text-[10px] uppercase tracking-widest font-sans mb-2">{cert.category}</p>
                  <h3 className="font-display text-[18px] text-theme-fg uppercase tracking-wide mb-1 leading-snug group-hover:text-[#52B788] transition-colors">{cert.name}</h3>
                  <p className="text-theme-fg-3 text-[11px] font-sans mb-5">{cert.authority}</p>
                  <p className="text-theme-fg-2 text-sm leading-relaxed font-sans mb-6">{cert.description}</p>
                  <div className="border-t border-theme-border/[0.06] pt-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest font-sans text-theme-fg-3">Reg. No.</span>
                      <span className="font-display text-[13px] text-theme-fg tracking-wider">{cert.regNo}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest font-sans text-theme-fg-3">Since</span>
                      <span className="text-theme-fg-2 text-sm font-sans">{cert.validFrom}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest font-sans text-theme-fg-3">Validity</span>
                      <span className="text-theme-fg-2 text-sm font-sans">{cert.validity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Empanelments ── */}
        <section className="py-20 bg-theme-surface border-t border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Empanelments</span>
              </div>
              <h2 className="font-display text-[42px] lg:text-[54px] text-theme-fg uppercase leading-none">
                Contractor Empanelments
              </h2>
            </div>
            <div className="border border-theme-border/[0.06] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0B2545]">
                    <th className="px-6 py-4 text-left text-[10px] uppercase tracking-widest font-sans font-semibold text-white/60">Organisation</th>
                    <th className="px-6 py-4 text-left text-[10px] uppercase tracking-widest font-sans font-semibold text-white/60">Work Type</th>
                    <th className="px-6 py-4 text-left text-[10px] uppercase tracking-widest font-sans font-semibold text-white/60">Class / Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {empanelments.map((e, i) => (
                    <tr key={e.org} className={`border-t border-theme-border/[0.06] hover:bg-theme-card transition-colors ${i % 2 === 0 ? 'bg-theme-surface' : 'bg-theme-base'}`}>
                      <td className="px-6 py-5 font-display text-[15px] text-theme-fg uppercase tracking-wide">{e.org}</td>
                      <td className="px-6 py-5 text-theme-fg-2 text-sm font-sans">{e.type}</td>
                      <td className="px-6 py-5">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 border bg-[#52B788]/20 text-[#52B788] border-[#52B788]/40">
                          {e.class}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Compliance Statement + CTA ── */}
        <section className="py-20 bg-[#2D6A4F]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-[40px] lg:text-[54px] text-white uppercase leading-none mb-6">
              Need Our Compliance Documents?
            </h2>
            <p className="text-white/80 text-base mb-10 leading-relaxed font-sans max-w-2xl mx-auto">
              We are happy to share copies of our registrations, certificates, and compliance documents for tendering, vendor registration, or due diligence purposes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact-us" className="btn-primary">Request Documents</Link>
              <Link href="/tenders" className="border border-white/30 text-white text-[11px] font-sans uppercase tracking-widest px-8 py-3 hover:border-white hover:bg-white/10 transition-colors">View Tenders</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

