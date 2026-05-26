import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { services, getServiceBySlug } from '../../data/services'
import { getAllProjects } from '../../lib/content'

// ── Icon map for machinery types ──────────────────────────────────────────────
const MACHINERY_ICONS = {
  excavator: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M3 10V7l3-3h5l4 4v2M3 10v7h2m16-7h-4v7h4M5 17h10m0 0v2H5v-2" />
    </svg>
  ),
  mixer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="12" r="4" /><path strokeLinecap="round" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  roller: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="8" cy="14" r="4" /><circle cx="18" cy="14" r="2" /><path strokeLinecap="round" d="M12 14h4M4 7h16v3H4z" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M1 3h15v13H1zM16 8h4l3 5v4h-7V8zM5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  ),
  compactor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <rect x="2" y="12" width="20" height="5" rx="1" /><path strokeLinecap="round" d="M7 12V6l5-3 5 3v6" />
    </svg>
  ),
  pump: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4M12 17v4M4 12H2m20 0h-2M6.3 6.3 4.9 4.9m12.8 12.8 1.4 1.4M6.3 17.7l-1.4 1.4M17.7 6.3l1.4-1.4" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  grader: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 17h20M4 17V9l4-4h8l4 4v8M8 17v-5h8v5" />
    </svg>
  ),
  vibrator: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  other: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
}

// ── Static paths / props ──────────────────────────────────────────────────────
export async function getStaticPaths() {
  return {
    paths: services.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return { notFound: true }

  // Related projects - match slugs against the projects collection
  const allProjects = getAllProjects()
  const relatedProjects = (service.related_project_slugs || [])
    .map((slug) => allProjects.find((p) => p.slug === slug))
    .filter(Boolean)
    .map(({ slug, title, location, category, status, project_value, featured_image, excerpt }) => ({
      slug, title, location, category, status, project_value, featured_image, excerpt,
    }))

  const currentIndex = services.findIndex((s) => s.slug === params.slug)
  const prev = services[currentIndex - 1]
    ? { slug: services[currentIndex - 1].slug, name: services[currentIndex - 1].name } : null
  const next = services[currentIndex + 1]
    ? { slug: services[currentIndex + 1].slug, name: services[currentIndex + 1].name } : null

  return { props: { service, relatedProjects, prev, next } }
}

// ── FAQ item (accordion) ──────────────────────────────────────────────────────
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-theme-border/[0.07] last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-theme-fg text-[15px] font-sans font-medium leading-snug">{question}</span>
        <span className={`flex-shrink-0 w-5 h-5 border border-theme-border/20 flex items-center justify-center transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-3 h-3 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-5 text-theme-fg-3 text-[14px] font-sans leading-relaxed">{answer}</p>
      )}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ServiceDetailPage({ service, relatedProjects, prev, next }) {
  return (
    <>
      <Head>
        <title>{service.name} | Services - Wave Earth Infratech</title>
        <meta name="description" content={service.description} />
      </Head>

      <Header />

      <main className="bg-theme-base text-theme-fg min-h-screen">

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          {service.hero_image && (
            <img
              src={service.hero_image}
              alt={service.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040c18] via-[#040c18]/60 to-[#040c18]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040c18]/80 to-transparent" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-44">
            <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-500 font-sans mb-7" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span className="text-gray-700">/</span>
              <Link href="/services" className="hover:text-[#52B788] transition-colors">Services</Link>
              <span className="text-gray-700">/</span>
              <span className="text-[#52B788] truncate max-w-[220px]">{service.name}</span>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Service Detail</span>
            </div>
            <h1 className="font-display text-[46px] lg:text-[76px] text-white uppercase leading-none tracking-tight max-w-4xl mb-5">
              {service.name}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed font-sans">
              {service.tagline}
            </p>
          </div>
        </section>

        {/* ── 2. QUICK FACTS BAR ──────────────────────────────────────────── */}
        <div className="border-b border-theme-border/[0.06] bg-theme-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap gap-x-10 gap-y-3 items-center">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span className="text-theme-fg-3 text-[12px] font-sans uppercase tracking-wide">{service.scope?.length || 0} Work Scope Items</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              <span className="text-theme-fg-3 text-[12px] font-sans uppercase tracking-wide">{service.technical_specs?.length || 0} Technical Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              <span className="text-theme-fg-3 text-[12px] font-sans uppercase tracking-wide">{service.machinery?.length || 0} Equipment Types</span>
            </div>
            {relatedProjects.length > 0 && (
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                <span className="text-theme-fg-3 text-[12px] font-sans uppercase tracking-wide">{relatedProjects.length} Related Project{relatedProjects.length !== 1 ? 's' : ''} Executed</span>
              </div>
            )}
            <div className="ml-auto">
              <Link href="/contact-us" className="text-[#52B788] text-[11px] uppercase tracking-widest font-semibold font-sans hover:text-[#2D6A4F] transition-colors flex items-center gap-1.5">
                Request Quotation
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ───────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">

            {/* ── Left column (2/3) ──────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-20">

              {/* 3. OVERVIEW */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-px bg-[#52B788]" />
                  <h2 className="font-display text-[22px] text-theme-fg uppercase tracking-wide">Overview</h2>
                </div>
                <p className="text-theme-fg-3 text-base leading-relaxed font-sans">{service.description}</p>
              </div>

              {/* 4. WHY THIS SERVICE MATTERS */}
              {service.importance_points?.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-7">
                    <span className="w-6 h-px bg-[#52B788]" />
                    <h2 className="font-display text-[22px] text-theme-fg uppercase tracking-wide">Why This Matters</h2>
                  </div>
                  <ul className="space-y-4">
                    {service.importance_points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                        <span className="flex-shrink-0 w-7 h-7 border border-[#52B788]/30 flex items-center justify-center text-[#52B788] text-[11px] font-display font-bold mt-0.5 group-hover:bg-[#52B788]/10 transition-colors">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-theme-fg-3 text-[15px] leading-relaxed font-sans">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 5. WORK SCOPE */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-px bg-[#52B788]" />
                    <h2 className="font-display text-[22px] text-theme-fg uppercase tracking-wide">Work Scope</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.scope.map((item) => (
                    <li key={item} className="flex items-start gap-3 bg-theme-surface border border-theme-border/[0.05] px-4 py-3 hover:border-[#52B788]/20 transition-colors">
                      <svg className="w-4 h-4 text-[#52B788] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-theme-fg-2 text-[14px] leading-snug font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. TECHNICAL SPECIFICATIONS */}
              {service.technical_specs?.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-6 h-px bg-[#52B788]" />
                    <h2 className="font-display text-[22px] text-theme-fg uppercase tracking-wide">Technical Specifications</h2>
                  </div>
                  <div className="border border-theme-border/[0.06] overflow-hidden">
                    {service.technical_specs.map(({ label, value }, i) => (
                      <div key={label} className={`flex ${i % 2 === 0 ? 'bg-theme-surface' : 'bg-theme-card'} border-b border-theme-border/[0.05] last:border-0`}>
                        <div className="w-2/5 px-5 py-3.5 border-r border-theme-border/[0.05]">
                          <span className="text-[#52B788] text-[11px] font-semibold uppercase tracking-widest font-sans">{label}</span>
                        </div>
                        <div className="flex-1 px-5 py-3.5">
                          <span className="text-theme-fg-2 text-[14px] font-sans">{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. WORK PROCESS TIMELINE */}
              {service.process?.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-6 h-px bg-[#52B788]" />
                    <h2 className="font-display text-[22px] text-theme-fg uppercase tracking-wide">Work Process</h2>
                  </div>
                  <div className="relative pl-8 border-l border-theme-border/[0.08]">
                    {service.process.map((step, i) => (
                      <div key={i} className="relative pb-10 last:pb-0">
                        <div className="absolute -left-[33px] flex items-center justify-center w-7 h-7 rounded-full bg-theme-base border border-[#52B788]/40">
                          <span className="font-display text-[10px] text-[#52B788] font-bold">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <h3 className="font-display text-[17px] text-theme-fg uppercase tracking-wide mb-1.5">{step.title}</h3>
                        <p className="text-theme-fg-3 text-[14px] leading-relaxed font-sans">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* ── Right sidebar (1/3) ────────────────────────────────────── */}
            <div className="space-y-8 lg:pt-0">

              {/* Machinery cards */}
              {service.machinery?.length > 0 && (
                <div className="bg-theme-surface border border-theme-border/[0.07] p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-4 h-px bg-[#52B788]" />
                    <h3 className="font-display text-[14px] text-theme-fg uppercase tracking-[0.18em]">Machinery Used</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {service.machinery.map(({ name, type }) => (
                      <div key={name} className="flex flex-col items-center gap-2 bg-theme-card border border-theme-border/[0.05] p-4 hover:border-[#52B788]/30 transition-colors text-center group">
                        <span className="text-[#52B788] group-hover:text-theme-fg transition-colors">
                          {MACHINERY_ICONS[type] || MACHINERY_ICONS.other}
                        </span>
                        <span className="text-theme-fg-3 text-[11px] font-sans leading-tight">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Typical clients */}
              {service.client_types?.length > 0 && (
                <div className="bg-theme-surface border border-theme-border/[0.07] p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-4 h-px bg-[#52B788]" />
                    <h3 className="font-display text-[14px] text-theme-fg uppercase tracking-[0.18em]">Typical Clients</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.client_types.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-theme-fg-3 text-[13px] font-sans">
                        <span className="w-1.5 h-1.5 bg-[#52B788] flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA card */}
              <div className="bg-theme-card border border-[#52B788]/20 p-6">
                <h3 className="font-display text-[18px] text-theme-fg uppercase tracking-wide mb-3">Need This Service?</h3>
                <p className="text-theme-fg-3 text-[13px] leading-relaxed font-sans mb-5">
                  Send us your project brief or tender document and we will respond within 24 hours.
                </p>
                <Link href="/contact-us" className="btn-primary block text-center text-[13px]">Get in Touch</Link>
                <a
                  href="https://wa.me/919453111377?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-3 text-theme-fg-3 hover:text-theme-fg text-xs font-sans transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* All services link */}
              <Link href="/services" className="flex items-center gap-2 text-theme-fg-3 hover:text-[#52B788] text-[11px] uppercase tracking-widest font-sans transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                All Services
              </Link>
            </div>
          </div>
        </div>

        {/* ── 8. RELATED PROJECTS ─────────────────────────────────────────── */}
        {relatedProjects.length > 0 && (
          <section className="border-t border-theme-border/[0.06] bg-theme-surface py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px bg-[#52B788]" />
                    <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Executed Work</span>
                  </div>
                  <h2 className="font-display text-[32px] lg:text-[44px] text-theme-fg uppercase leading-none">
                    Projects Under This Service
                  </h2>
                </div>
                <Link href="/projects" className="text-[#52B788] text-[11px] uppercase tracking-widest font-sans font-semibold hover:text-[#2D6A4F] transition-colors whitespace-nowrap">
                  All Projects &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-theme-border/[0.04]">
                {relatedProjects.map((project) => (
                  <Link key={project.slug} href={`/projects/${project.slug}`} className="group bg-theme-base hover:bg-theme-card transition-colors flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={project.featured_image || '/images/placeholder.svg'}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-theme-base via-transparent to-transparent opacity-60" />
                      <div className="absolute top-3 right-3">
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 ${project.status === 'completed' ? 'bg-[#52B788]/20 text-[#52B788] border border-[#52B788]/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'}`}>
                          {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display text-[18px] text-theme-fg uppercase leading-tight mb-2 group-hover:text-[#52B788] transition-colors">
                        {project.title}
                      </h3>
                      {project.location && (
                        <p className="text-theme-fg-3 text-[12px] font-sans uppercase tracking-wide mb-3 flex items-center gap-1.5">
                          <svg className="w-3 h-3 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                          {project.location}
                        </p>
                      )}
                      <p className="text-theme-fg-3 text-[13px] leading-relaxed font-sans flex-1 line-clamp-2">{project.excerpt}</p>
                      <span className="mt-4 text-[#52B788] text-[11px] uppercase tracking-widest font-semibold font-sans flex items-center gap-1.5 group-hover:text-[#2D6A4F] transition-colors">
                        View Case Study
                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 9. BEFORE / AFTER ───────────────────────────────────────────── */}
        {service.before_after?.before && service.before_after?.after && (
          <section className="border-t border-theme-border/[0.06] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-8 h-px bg-[#52B788]" />
                <h2 className="font-display text-[32px] lg:text-[44px] text-theme-fg uppercase leading-none">Before &amp; After</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-theme-border/[0.04]">
                <div className="group relative overflow-hidden aspect-[4/3]">
                  <img src={service.before_after.before} alt="Before" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040c18]/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-[#040c18]/80 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-[0.2em] border border-white/10">Before</span>
                </div>
                <div className="group relative overflow-hidden aspect-[4/3]">
                  <img src={service.before_after.after} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040c18]/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-[#52B788]/90 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-[0.2em]">After</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 10. SITE GALLERY ────────────────────────────────────────────── */}
        {service.gallery?.length > 0 && (
          <section className="border-t border-theme-border/[0.06] py-16 bg-theme-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-6 h-px bg-[#52B788]" />
                <h2 className="font-display text-[22px] text-theme-fg uppercase tracking-wide">Site Gallery</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-theme-border/[0.04]">
                {service.gallery.map((img, i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden group">
                    <img
                      src={img}
                      alt={`${service.name} site photo ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 11. FAQ ─────────────────────────────────────────────────────── */}
        {service.faqs?.length > 0 && (
          <section className="border-t border-theme-border/[0.06] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-16">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-px bg-[#52B788]" />
                    <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Common Questions</span>
                  </div>
                  <h2 className="font-display text-[32px] lg:text-[40px] text-theme-fg uppercase leading-none mb-4">
                    Frequently Asked
                  </h2>
                  <p className="text-theme-fg-3 text-[14px] font-sans leading-relaxed">
                    Common questions from engineers, procurement officers, and NGO teams about this service.
                  </p>
                </div>
                <div className="lg:col-span-2 divide-y divide-theme-border/[0.07]">
                  {service.faqs.map((faq, i) => (
                    <FaqItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 12. CTA BAND ────────────────────────────────────────────────── */}
        <section className="border-t border-theme-border/[0.06] bg-theme-surface py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-theme-border/20" />
              <span className="text-theme-fg-3 text-[12px] uppercase tracking-[0.25em] font-sans">Ready to Execute</span>
              <span className="w-8 h-px bg-theme-border/20" />
            </div>
            <h2 className="font-display text-[38px] lg:text-[54px] text-theme-fg uppercase leading-none mb-5">
              Start Your Project
            </h2>
            <p className="text-theme-fg-2 text-base mb-10 font-sans leading-relaxed max-w-xl mx-auto">
              Share your tender brief or project scope. We respond within 24 hours with a proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact-us" className="btn-primary min-w-[200px] text-center">Request Quotation</Link>
              <a
                href="https://wa.me/919453111377?text=Hello%2C%20I%20have%20a%20project%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#1db954] transition-colors min-w-[200px]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ── 13. PREV / NEXT ──────────────────────────────────────────────── */}
        {(prev || next) && (
          <nav className="border-t border-theme-border/[0.06] bg-theme-base">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 divide-x divide-theme-border/[0.06]">
                {prev ? (
                  <Link href={`/services/${prev.slug}`} className="group flex flex-col gap-1 py-8 px-4 hover:bg-theme-card transition-colors">
                    <span className="text-[11px] text-theme-fg-3 uppercase tracking-widest font-sans flex items-center gap-2">
                      <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                      </svg>
                      Previous
                    </span>
                    <span className="font-display text-[15px] text-theme-fg uppercase tracking-wide group-hover:text-[#52B788] transition-colors">{prev.name}</span>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link href={`/services/${next.slug}`} className="group flex flex-col gap-1 py-8 px-4 text-right hover:bg-theme-card transition-colors">
                    <span className="text-[11px] text-theme-fg-3 uppercase tracking-widest font-sans flex items-center justify-end gap-2">
                      Next
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </span>
                    <span className="font-display text-[15px] text-theme-fg uppercase tracking-wide group-hover:text-[#52B788] transition-colors">{next.name}</span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </nav>
        )}
      </main>

      <Footer />
    </>
  )
}
