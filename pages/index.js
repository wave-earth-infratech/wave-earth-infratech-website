import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getFeaturedProjects } from '@lib/content'
import { HOME_STATS } from '../data/siteConstants'

// ─── Static data ──────────────────────────────────────────────────────────────

// HOME_STATS is imported from data/siteConstants.js - do not hardcode stats here.
// To update any number: edit data/siteConstants.js AND content/settings/stats.md

const serviceBlocks = [
  { title: 'Canal Construction & Lining',    desc: 'New canal construction, desilting, PCC/RCC lining, and embankment repair for state irrigation departments.',                          img: '/images/placeholder.svg', href: '/services' },
  { title: 'Irrigation Infrastructure',      desc: 'End-to-end distribution networks - primary canals, secondary channels, check structures, and farm connections.',                       img: '/images/placeholder.svg', href: '/services' },
  { title: 'Earthwork & Excavation',         desc: 'Large-scale bulk earthwork, rock cutting, cut-fill operations, and compacted embankment formation.',                                  img: '/images/placeholder.svg', href: '/services' },
  { title: 'Rural Redevelopment',            desc: 'CC roads, drainage networks, community platforms, and water harvesting works under MGNREGS & DRDA.',                                  img: '/images/placeholder.svg', href: '/services' },
  { title: 'Road & Drainage Works',          desc: 'Village access roads, rural drains, box culverts, causeways, and storm water systems.',                                               img: '/images/placeholder.svg', href: '/services' },
  { title: 'NGO Development Projects',       desc: 'Field execution for development sector and CSR-funded rural infrastructure programmes.',                                              img: '/images/placeholder.svg', href: '/services' },
]

const equipment = [
  { name: 'Hydraulic Excavators',  count: '4+', note: 'PC200 / PC300' },
  { name: 'JCB Backhoe Loaders',   count: '3+', note: 'Precision work' },
  { name: 'Vibratory Rollers',     count: '2+', note: '10T compaction' },
  { name: 'Motor Grader',          count: '1',  note: 'Road / embankment' },
  { name: 'Dumper Trucks',         count: '8+', note: '10T-12T capacity' },
  { name: 'Concrete Mixers',       count: '6+', note: '0.3-0.5 cum drum' },
  { name: 'Dewatering Pumps',      count: '4+', note: 'High-volume sites' },
  { name: 'Tractor with Trolley',  count: '3+', note: 'Rural site access' },
]

const certs = [
  'Private Limited Company',
  'MSME Registered',
  'GST Compliant',
  'PAN Verified',
  'Contractor Licensed - UP / MP',
  'Jal Shakti Empanelled',
]

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let cur = 0
        const step = Math.ceil(value / 60)
        const timer = setInterval(() => {
          cur = Math.min(cur + step, value)
          el.textContent = cur + suffix
          if (cur >= value) clearInterval(timer)
        }, 24)
      }
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, suffix])
  return <span ref={ref}>0{suffix}</span>
}

// ─── Before / After Slider ────────────────────────────────────────────────────

function BeforeAfter({ before, after }) {
  const [pos, setPos] = useState(48)
  const containerRef = useRef(null)
  const dragging = useRef(false)
  const calcPos = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    return Math.min(93, Math.max(7, ((clientX - rect.left) / rect.width) * 100))
  }
  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] overflow-hidden select-none cursor-col-resize"
      onMouseDown={() => { dragging.current = true }}
      onMouseUp={() => { dragging.current = false }}
      onMouseLeave={() => { dragging.current = false }}
      onMouseMove={(e) => { if (dragging.current) setPos(calcPos(e.clientX)) }}
      onTouchMove={(e) => setPos(calcPos(e.touches[0].clientX))}
    >
      <img src={after}  alt="After"  className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}>
        <img src={before} alt="Before" className="w-full h-full object-cover" draggable={false} />
      </div>
      <div className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-ew-resize">
          <svg className="w-5 h-5 text-[#0B2545]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
        </div>
      </div>
      <span className="absolute top-4 left-4 bg-[#050d1a]/80 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-[0.2em]">Before</span>
      <span className="absolute top-4 right-4 bg-[#52B788]/90 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-[0.2em]">After</span>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home({ featuredProjects = [] }) {
  return (
    <>
      <Meta
        title="Wave Earth Infratech | Canal & Irrigation Infrastructure Contractor - UP, MP"
        description="Wave Earth Infratech executes canal construction, nahar lining, irrigation infrastructure, earthwork, and rural redevelopment projects for government departments and NGOs across UP and MP."
      />
      <Header />

      {/* ── 1. HERO ────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] flex items-end justify-start overflow-hidden bg-theme-surface">
        {/*
          REAL PHOTO / VIDEO: Replace the <img> below with a <video> tag for drone footage.
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
            <source src="/videos/hero-drone.mp4" type="video/mp4" />
          </video>
        */}
        <img src="/images/home_hero.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-40 ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-[#050d1a]/30" />
        {/* Angular bottom cut */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-theme-base" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-28 pt-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] font-semibold uppercase tracking-[0.25em]">Government &amp; NGO Infrastructure Contractor - UP &amp; MP</span>
            </div>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-bold text-white uppercase leading-[0.95] mb-5 tracking-tight">
              Building<br />Rural India&apos;s<br /><span className="text-[#52B788]">Infrastructure</span>
            </h1>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#52B788] text-[13px] font-semibold font-sans">Trusted Infrastructure Execution Partner</span>
              <span className="w-1 h-1 bg-[#52B788]/60 flex-shrink-0" />
              <span className="text-white/40 text-[13px] font-sans uppercase tracking-widest">Since 2017</span>
              <span className="w-1 h-1 bg-[#52B788]/60 flex-shrink-0" />
              <span className="text-white/40 text-[13px] font-sans uppercase tracking-widest">8+ Yrs</span>
            </div>
            <p className="text-gray-300 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-sans font-light">
              Canal development &bull; Irrigation works &bull; Earthwork &bull; Rural redevelopment<br />
              Trusted by state departments across Uttar Pradesh &amp; Madhya Pradesh since 2017.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/projects" className="btn-primary">View Our Projects &rarr;</Link>
              <Link href="/contact-us" className="btn-outline-white">Request Quotation</Link>
              <a href="/company-profile.pdf" download className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white text-xs font-semibold uppercase tracking-widest px-4 py-4 transition-colors border border-transparent hover:border-white/10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Company Profile
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-10 hidden lg:flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-500 to-gray-500 animate-pulse" />
          <span className="text-gray-600 text-[10px] uppercase tracking-[0.3em] rotate-90 mt-6">Scroll</span>
        </div>
      </section>

      {/* ── 2. STATS ───────────────────────────────────────────────────────── */}
      <section className="bg-theme-base py-16 border-b border-theme-border/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-theme-border/[0.07]">
            {HOME_STATS.map(({ value, suffix, label }, i) => (
              <div key={label} className={`px-6 py-4 text-center ${i === 0 ? 'pl-0' : ''} ${i === HOME_STATS.length - 1 ? 'pr-0' : ''}`}>
                <div className="font-display text-[60px] sm:text-[72px] font-bold text-theme-fg mb-2">
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <div className="w-8 h-px bg-[#52B788] mx-auto mb-3" />
                <p className="text-theme-fg-3 text-[13px] uppercase tracking-[0.18em] font-sans">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ────────────────────────────────────────────────────── */}
      <section className="bg-theme-card py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] font-semibold uppercase tracking-[0.2em]">What We Execute</span>
              </div>
              <h2 className="font-display text-[40px] md:text-[54px] font-bold text-theme-fg uppercase leading-none">Our Services</h2>
              <p className="text-theme-fg-2 mt-3 max-w-lg font-sans font-light text-base leading-relaxed">Specialised civil works for irrigation departments, rural development bodies, and development organisations.</p>
            </div>
            <Link href="/services" className="text-[#52B788] text-[13px] font-semibold uppercase tracking-widest hover:text-[#2D6A4F] transition-colors whitespace-nowrap">All Services &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-theme-border/5">
            {serviceBlocks.map(({ title, desc, img, href }) => (
              <Link key={title} href={href} className="group relative overflow-hidden aspect-[4/3] block">
                <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/50 to-transparent" />
                <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-[22px] font-semibold text-white uppercase mb-2 leading-none">{title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-sans max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED PROJECTS ───────────────────────────────────────────── */}
      <section className="bg-theme-card py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] font-semibold uppercase tracking-[0.2em]">Portfolio</span>
              </div>
              <h2 className="font-display text-[40px] md:text-[54px] font-bold text-theme-fg uppercase leading-none">Recent Projects</h2>
              <p className="text-theme-fg-2 mt-3 max-w-lg font-sans font-light text-base">Executed across Uttar Pradesh and Madhya Pradesh for state departments and development bodies.</p>
            </div>
            <Link href="/projects" className="text-[#52B788] text-[13px] font-semibold uppercase tracking-widest hover:text-[#2D6A4F] transition-colors whitespace-nowrap">All Projects &rarr;</Link>
          </div>

          <div className="flex flex-col gap-px bg-theme-border/5">
            {(featuredProjects.length > 0 ? featuredProjects.slice(0, 4) : [
              { title: 'Canal Redevelopment & PCC Lining',   location: 'Chitrakoot, Uttar Pradesh', category: 'Canal Construction',      status: 'completed', client: 'Irrigation Department, UP', project_value: '₹ 62 Lakhs',  duration: '5 Months', excerpt: 'Full redevelopment and PCC M-15 lining of 4.8 km irrigation canal - 40% flow efficiency improvement.', featured_image: '/images/placeholder.svg', slug: null },
              { title: 'Nahar Lining Works - Banda District', location: 'Banda, Uttar Pradesh',       category: 'Nahar Lining Works',      status: 'completed', client: 'Minor Irrigation Dept, UP',  project_value: '₹ 38 Lakhs',  duration: '4 Months', excerpt: 'Concrete lining of 3.2 km nahar network, reducing seepage by 45% and serving 1,200+ farmers.',        featured_image: '/images/placeholder.svg', slug: null },
              { title: 'Irrigation Infrastructure Development', location: 'Rewa, Madhya Pradesh',    category: 'Irrigation Infrastructure', status: 'completed', client: 'Water Resources Dept, MP',  project_value: '₹ 95 Lakhs',  duration: '7 Months', excerpt: 'New distribution network - 5.6 km primary canal + 8.4 km secondary channels for 680 hectares.',     featured_image: '/images/placeholder.svg', slug: null },
              { title: 'Rural Infrastructure Redevelopment',  location: 'Satna, Madhya Pradesh',     category: 'Rural Redevelopment',     status: 'completed', client: 'DRDA, Madhya Pradesh',      project_value: '₹ 1.12 Crore', duration: '8 Months', excerpt: 'CC roads, drains, community platforms across 3 villages - benefiting 2,400+ residents.',               featured_image: '/images/placeholder.svg', slug: null },
            ]).map((project, idx) => (
              <div key={project.title} className={`group flex flex-col lg:flex-row bg-theme-card overflow-hidden ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="relative w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden flex-shrink-0">
                  <img src={project.featured_image || '/images/placeholder.svg'} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#050d1a]/30 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0B2545]/80 text-[#52B788] text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest border border-[#52B788]/30">{project.category}</span>
                  </div>
                </div>
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={project.status === 'completed' ? 'badge-completed' : 'badge-ongoing'}>{project.status === 'completed' ? 'Completed' : 'Ongoing'}</span>
                  </div>
                  <h3 className="font-display text-[26px] lg:text-[32px] font-semibold text-theme-fg uppercase leading-none mb-4">{project.title}</h3>
                  <p className="text-theme-fg-2 text-base leading-relaxed font-sans mb-6 max-w-lg">{project.excerpt}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 border-t border-theme-border/5 pt-6">
                    {[
                      { label: 'Client',    value: project.client },
                      { label: 'Location',  value: project.location },
                      { label: 'Value',     value: project.project_value },
                      { label: 'Duration',  value: project.duration || '-' },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-[#52B788] text-[10px] font-semibold uppercase tracking-widest mb-0.5">{label}</p>
                        <p className="text-theme-fg text-[13px] font-medium font-sans">{value}</p>
                      </div>
                    ))}
                  </div>
                  {project.slug ? (
                    <Link href={`/projects/${project.slug}`} className="self-start text-[#52B788] text-xs font-semibold uppercase tracking-widest hover:text-[#2D6A4F] transition-colors flex items-center gap-2 group/link">
                      View Case Study <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  ) : (
                    <Link href="/projects" className="self-start text-[#52B788] text-xs font-semibold uppercase tracking-widest hover:text-[#2D6A4F] transition-colors flex items-center gap-2 group/link">
                      View All Projects <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BEFORE / AFTER ──────────────────────────────────────────────── */}
      <section className="bg-theme-surface py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] font-semibold uppercase tracking-[0.2em]">Transformation</span>
              </div>
              <h2 className="font-display text-[40px] md:text-[54px] font-bold text-theme-fg uppercase leading-none mb-6">Before &amp;<br />After</h2>
              <p className="text-theme-fg-2 text-base leading-relaxed font-sans mb-8 max-w-md">Every project begins with a deteriorated or missing structure and ends with a functioning, long-life infrastructure asset. Drag the slider to see the difference on a live canal project.</p>
              <div className="space-y-4 border-t border-theme-border/5 pt-8">
                {[
                  ['Project',  'Canal Redevelopment, Chitrakoot UP'],
                  ['Work Done','PCC M-15 Lining - 4.8 KM'],
                  ['Result',   '+40% Flow Efficiency, -35% Seepage'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="text-[#52B788] text-[10px] font-bold uppercase tracking-widest w-20 flex-shrink-0 mt-0.5">{label}</span>
                    <span className="text-theme-fg-2 text-base font-sans">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/projects" className="btn-primary self-start">View All Projects &rarr;</Link>
              </div>
            </div>
            <div className="relative">
              <BeforeAfter before="/images/placeholder.svg" after="/images/placeholder.svg" />
              <p className="text-gray-600 text-[11px] text-center mt-3 uppercase tracking-widest font-sans">Drag slider &larr; &rarr; to compare</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. EQUIPMENT ───────────────────────────────────────────────────── */}
      <section className="bg-[#0B2545] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.5) 39px,rgba(255,255,255,0.5) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.5) 39px,rgba(255,255,255,0.5) 40px)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] font-semibold uppercase tracking-[0.2em]">Execution Capability</span>
              </div>
              <h2 className="font-display text-[40px] md:text-[54px] font-bold text-white uppercase leading-none mb-6">Own Fleet.<br />Zero Dependency.</h2>
              <p className="text-gray-400 text-base leading-relaxed font-sans mb-8 max-w-md">Our owned equipment fleet eliminates subcontracting delays and rental bottlenecks. Every machine on site is under our direct control - mobilised immediately for any project, anywhere in UP or MP.</p>
              <div className="flex items-center gap-8 mt-8">
                {[{ n: '18+', l: 'Machines Owned' }, { n: '45+', l: 'Operators Trained' }, { n: '0', l: 'Rental Dependency' }].map(({ n, l }, i, arr) => (
                  <div key={l} className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="font-display text-4xl font-bold text-white">{n.replace('+', '')}<span className="text-[#52B788]">{n.includes('+') ? '+' : ''}</span></div>
                      <p className="text-gray-500 text-[11px] uppercase tracking-widest mt-1 font-sans">{l}</p>
                    </div>
                    {i < arr.length - 1 && <div className="w-px h-12 bg-white/10" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
              {equipment.map(({ name, count, note }) => (
                <div key={name} className="bg-[#071830] px-6 py-5 hover:bg-[#0f2340] transition-colors duration-200 group">
                  <div className="font-display text-2xl font-bold text-[#52B788] mb-1 group-hover:text-white transition-colors">{count} Nos</div>
                  <div className="text-white text-sm font-semibold font-sans mb-0.5">{name}</div>
                  <div className="text-gray-600 text-[11px] font-sans uppercase tracking-wider">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY TRUST US ────────────────────────────────────────────────── */}
      <section className="bg-theme-base py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] font-semibold uppercase tracking-[0.2em]">Our Edge</span>
              <span className="w-10 h-px bg-[#52B788]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-theme-fg uppercase">Why Government Departments<br />Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-theme-border/[0.04]">
            {[
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>, title: 'Government Project Expertise', desc: 'Consistent delivery across state irrigation, PWD, DRDA, and Jal Shakti department contracts in UP and MP.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, title: 'On-Time, Every Time', desc: 'Track record of meeting government project milestones and completion dates on schedule - critical for billing and contract renewal.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>, title: 'Own Equipment Fleet', desc: 'Our owned machinery - excavators, rollers, mixers, and trucks - means no subcontracting delays or rental bottlenecks.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>, title: 'Experienced Field Team', desc: 'Trained workforce with deep knowledge of rural terrain, site conditions, and government measurement procedures.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>, title: 'Transparent Documentation', desc: 'Measurement books, progress reports, billing formats, and compliance records maintained to department standards.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>, title: 'Rural Impact Focus', desc: 'Every canal lined and every road built has a direct effect on irrigation efficiency, farming income, and village connectivity.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-theme-base p-8 hover:bg-theme-card transition-colors duration-300 group">
                <div className="text-[#52B788] mb-5 group-hover:text-[#2D6A4F] transition-colors duration-300">{icon}</div>
                <h3 className="font-display text-lg font-semibold text-theme-fg uppercase mb-3 leading-tight">{title}</h3>
                <p className="text-theme-fg-3 text-sm leading-relaxed font-sans">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CERTIFICATIONS ──────────────────────────────────────────────── */}
      <section className="bg-theme-card py-14 border-t border-theme-border/5 border-b border-b-theme-border/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-theme-fg-3 text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">Registered &amp; Compliant</p>
              <div className="flex flex-wrap gap-3">
                {certs.map((c) => (
                  <span key={c} className="flex items-center gap-1.5 border border-theme-border/10 text-theme-fg-2 text-xs font-semibold px-4 py-2 uppercase tracking-wide hover:border-[#52B788]/40 hover:text-theme-fg transition-colors duration-200 font-sans">
                    <svg className="w-3 h-3 text-[#52B788]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <Link href="/about-wave-earth" className="text-[#52B788] text-[13px] font-semibold uppercase tracking-widest hover:text-[#2D6A4F] transition-colors whitespace-nowrap">About the Company &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ── 9. CTA BAND ────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <img src="/images/placeholder.svg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,37,69,0.95) 0%, rgba(45,106,79,0.92) 100%)' }} />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-white/40" />
            <span className="text-white/70 text-[13px] font-semibold uppercase tracking-[0.25em]">Let&apos;s Work Together</span>
            <span className="w-10 h-px bg-white/40" />
          </div>
          <h2 className="font-display text-[40px] sm:text-[54px] md:text-[68px] font-bold text-white uppercase leading-none mb-6">Ready to Execute<br />Your Next Project?</h2>
          <p className="text-green-100 text-base sm:text-lg mb-4 max-w-2xl mx-auto font-sans font-light leading-relaxed">Canal construction, irrigation infrastructure, earthwork, rural redevelopment - across Uttar Pradesh and Madhya Pradesh.</p>
          <a href="tel:+919453111377" className="inline-block text-white font-display text-2xl sm:text-3xl font-semibold mb-10 hover:text-green-200 transition-colors tracking-wider">+91 945 311 1377</a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 bg-white text-[#0B2545] font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-gray-100 transition-colors duration-200 min-w-[200px]">Request Quotation</Link>
            <a href="/company-profile.pdf" download className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:border-white hover:bg-white/5 transition-colors duration-200 min-w-[200px]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              Download Profile
            </a>
            <a href="https://wa.me/919453111377?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#1db954] transition-colors duration-200 min-w-[200px]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  try {
    const featuredProjects = await getFeaturedProjects()
    const safe = (featuredProjects || []).map((p) => ({
      slug: p.slug || null,
      title: p.title || '',
      location: p.location || '',
      category: p.category || '',
      status: p.status || 'completed',
      client: p.client || '',
      project_value: p.project_value || '',
      duration: p.duration || '',
      excerpt: p.excerpt || '',
      featured_image: p.featured_image || null,
    }))
    return { props: { featuredProjects: safe } }
  } catch {
    return { props: { featuredProjects: [] } }
  }
}
