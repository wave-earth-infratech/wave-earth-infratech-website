import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getFeaturedProjects, getHomepageSettings } from '@lib/content'

// ─── Data (fallbacks - overridden by CMS settings at build time) ──────────────

const stats = [
  { value: 120, suffix: '+', label: 'KM Canal Developed' },
  { value: 80, suffix: '+', label: 'Villages Impacted' },
  { value: 45, suffix: '+', label: 'Projects Completed' },
  { value: 200, suffix: '+', label: 'Workforce Strength' },
  { value: 15, suffix: '+', label: 'Years Experience' },
]

const services = [
  { icon: '🌊', title: 'Canal Construction & Repair', desc: 'New canal construction and repair works for state irrigation departments.' },
  { icon: '🧱', title: 'Nahar Lining Works', desc: 'Cement & concrete lining to prevent water seepage and extend canal life.' },
  { icon: '🚿', title: 'Irrigation Infrastructure', desc: 'End-to-end irrigation networks for agricultural zones.' },
  { icon: '🏘️', title: 'Rural Redevelopment', desc: 'Infrastructure uplift for rural and semi-urban communities.' },
  { icon: '💧', title: 'Water Resource Projects', desc: 'Checkdams, farm ponds, and water distribution structures.' },
  { icon: '🚧', title: 'Earthwork & Excavation', desc: 'Large-scale earthmoving, grading, and site preparation.' },
  { icon: '🏗️', title: 'Concrete Structures', desc: 'RCC works, retaining walls, slabs, and structural concrete.' },
  { icon: '🛣️', title: 'Road & Drainage Works', desc: 'Village access roads, drains, culverts, and causeways.' },
  { icon: '🤝', title: 'NGO Development Projects', desc: 'Field execution for development sector and CSR projects.' },
  { icon: '🔧', title: 'Civil Maintenance Contracts', desc: 'Long-term O&M contracts for government-owned assets.' },
]

const whyUs = [
  { icon: '🏛️', title: 'Government Project Expertise', desc: 'Years of executing department-funded works across UP and MP.' },
  { icon: '👷', title: 'Experienced Rural Team', desc: 'Trained workforce with deep field knowledge of rural terrain.' },
  { icon: '⏱️', title: 'On-Time Execution', desc: 'Consistent track record of meeting government project deadlines.' },
  { icon: '🚜', title: 'Own Equipment Fleet', desc: 'JCBs, Excavators, Mixers, Trucks - no dependency on rentals.' },
  { icon: '📋', title: 'Transparent Reporting', desc: 'Progress reports, billing, and documentation on schedule.' },
  { icon: '🌱', title: 'Sustainable Approach', desc: 'Focus on water conservation and long-term rural impact.' },
]

// ─── Counter component ────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1800
          const step = Math.ceil(value / (duration / 16))
          const timer = setInterval(() => {
            start = Math.min(start + step, value)
            el.textContent = start + suffix
            if (start >= value) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, suffix])

  return <span ref={ref}>{0}{suffix}</span>
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home({ featuredProjects = [] }) {
  return (
    <>
      <Meta />
      <Head>
        <title>Wave Earth Infratech | Canal & Irrigation Infrastructure Contractor – UP, MP</title>
        <meta name="description" content="Wave Earth Infratech executes canal construction, nahar lining, irrigation works, and rural redevelopment projects for government departments and NGOs across UP and MP." />
      </Head>

      <Header />

      {/* ── 1. HERO ────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B2545 0%, #1A3A6B 55%, #071830 100%)' }}
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* TODO: swap div below with <video> or <Image> once real site footage is available */}
        {/* <video autoPlay muted loop playsInline poster="/images/hero-poster.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30">
          <source src="/videos/hero-site-drone.mp4" type="video/mp4" />
        </video> */}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block bg-accent/20 text-accent-light border border-accent/30 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Government & NGO Infrastructure Contractor
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Building Sustainable<br />
            <span className="text-accent-light">Infrastructure</span> for Rural India
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-4">
            Canal Development &bull; Irrigation Works &bull; Redevelopment Projects &bull; Government &amp; NGO Contracts
          </p>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mb-10">
            Executing civil infrastructure works across Uttar Pradesh and Madhya Pradesh - trusted by irrigation departments, Jal Shakti, and development organisations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects" className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-sm sm:text-base">
              View Our Projects →
            </Link>
            <Link href="/contact-us" className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-sm sm:text-base hover:bg-white/5">
              Request Quotation
            </Link>
            <a href="/company-profile.pdf" download className="text-gray-400 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Company Profile
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── 2. STATS ───────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map(({ value, suffix, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="text-4xl font-black text-white mb-1">
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <p className="text-gray-400 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold uppercase tracking-widest text-xs">What We Build</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Our Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Specialised civil infrastructure services for government departments, irrigation bodies, and development organisations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-primary text-sm mb-2 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-sm">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED PROJECTS ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-accent font-semibold uppercase tracking-widest text-xs">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Recent Projects</h2>
              <p className="text-gray-500 mt-3 max-w-xl">Executed across Chitrakoot, Uttar Pradesh, and Madhya Pradesh.</p>
            </div>
            <Link href="/projects" className="text-accent font-semibold text-sm hover:underline whitespace-nowrap">
              View All Projects →
            </Link>
          </div>

          {/* Projects from CMS - add entries via /admin/ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(featuredProjects.length > 0 ? featuredProjects : [
              { title: 'Canal Redevelopment & Lining', location: 'Chitrakoot, UP', category: 'Canal Lining', status: 'completed', client: 'Irrigation Department, UP', slug: null },
              { title: 'Farm Pond Construction', location: 'MP District', category: 'Water Resource', status: 'completed', client: 'Agriculture Department', slug: null },
              { title: 'Village Internal Road', location: 'Gram Panchayat, UP', category: 'Rural Road', status: 'ongoing', client: 'PMGSY / Gram Panchayat', slug: null },
            ]).map((project) => (
              <div key={project.title} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
                {/* Image placeholder - replace with <Image> when real photos are available */}
                <div className="h-52 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <div className="text-center text-white/60">
                    <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs">Add project photo</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">{project.category}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                    </span>
                  </div>
                  <h3 className="font-bold text-primary text-base mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-xs mb-1 flex items-center gap-1">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-gray-400 text-xs">Client: {project.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY US ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold uppercase tracking-widest text-xs">Our Edge</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Why Government Departments Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all duration-300">
                <div className="text-3xl flex-shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h3 className="font-bold text-primary text-sm mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CERTIFICATIONS STRIP ────────────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Registered &amp; Compliant</p>
              <div className="flex flex-wrap items-center gap-3">
                {['MSME Registered', 'GST Compliant', 'PAN Verified', 'Contractor Licensed'].map((cert) => (
                  <span key={cert} className="bg-gray-100 text-gray-700 text-xs font-semibold px-4 py-2 rounded-full border border-gray-200">
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/certifications"
              className="text-accent font-semibold text-sm hover:underline whitespace-nowrap"
            >
              View All Certifications →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. CTA BAND ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-accent" style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Looking for a Reliable Infrastructure Contractor?
          </h2>
          <p className="text-green-100 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
            Get in touch to discuss your canal, irrigation, road, or rural development project requirements across UP and MP.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
              Request Quotation
            </Link>
            <a href="/company-profile.pdf" download className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl hover:border-white hover:bg-white/5 transition-colors duration-200 text-sm sm:text-base flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Company Profile
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { getFeaturedProjects } = await import('@lib/content')
  const featuredProjects = getFeaturedProjects().map((p) => ({
    slug: p.slug,
    title: p.title,
    location: p.location || '',
    category: p.category || '',
    status: p.status || 'completed',
    client: p.client || '',
    featured_image: p.featured_image || null,
    excerpt: p.excerpt || '',
  }))
  return { props: { featuredProjects } }
}
