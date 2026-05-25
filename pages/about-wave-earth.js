import Link from 'next/link'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'

// ─── Data ─────────────────────────────────────────────────────────────────────

const keyFacts = [
  { label: 'Registered Office',  value: 'Ghaziabad, Uttar Pradesh' },
  { label: 'Work Zones',         value: 'Uttar Pradesh & Madhya Pradesh' },
  { label: 'Primary Sector',     value: 'Irrigation, Canal & Rural Infrastructure' },
  { label: 'MSME Registered',    value: 'Yes' },
  { label: 'GST Registered',     value: 'Yes' },
  { label: 'Contractor Class',   value: 'Government Approved' },
]

const timeline = [
  { year: '2010', event: 'Wave Earth Infratech founded in Chitrakoot, UP with a focus on rural civil works.' },
  { year: '2012', event: 'First government irrigation contract awarded by the UP Irrigation Department.' },
  { year: '2015', event: 'Expanded operations to Madhya Pradesh; first Jal Shakti-scheme project executed.' },
  { year: '2017', event: 'MSME registration completed; fleet of owned machinery commissioned.' },
  { year: '2019', event: 'Crossed 80+ km of canal lining and development works across UP & MP.' },
  { year: '2021', event: 'First NGO rural redevelopment partnership initiated in Chitrakoot district.' },
  { year: '2024', event: 'Active execution across 15+ concurrent project sites with 200+ workforce.' },
]

const values = [
  {
    title: 'Integrity',
    desc: 'Honest reporting, transparent billing, and reliable communication with every client.',
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  },
  {
    title: 'Quality',
    desc: 'No compromise on material specification or workmanship standards on any site.',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  },
  {
    title: 'Timeliness',
    desc: 'We take deadline commitments seriously - project schedules are non-negotiable.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Safety',
    desc: 'Enforced site safety protocols across all worksites, protecting every worker.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Rural Focus',
    desc: 'Dedicated to improving water access, agriculture, and livelihoods in rural India.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Sustainability',
    desc: 'Water-sensitive, eco-conscious execution practices on every project.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
]

const expertise = [
  'Canal Construction & Lining',
  'Irrigation Infrastructure Development',
  'Nahar Cleaning & Desilting',
  'Earthwork & Bulk Excavation',
  'RCC Structures & Retaining Walls',
  'Road & Drainage Works',
  'Water Resource Development',
  'Rural Redevelopment Projects',
  'Government Scheme Execution (PMGSY, Jal Jeevan, PMKSY)',
  'NGO Civil Works & CSR Projects',
]

const differentiators = [
  {
    title: 'Own Machinery Fleet',
    desc: 'JCBs, Excavators, Concrete Mixers, Dumpers — no rental dependency. Faster mobilisation and full cost control.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Locally Embedded Team',
    desc: 'Deep knowledge of UP/MP geography, seasonal constraints, and rural terrain. We know the ground before breaking it.',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Government Compliance Ready',
    desc: 'Experienced in proper billing, measurement books, and inspection readiness for PWD and irrigation department works.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Fast Mobilisation',
    desc: 'Ability to mobilise quickly for urgent contracts — within days, not weeks. Equipment and crew on standby.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Challenging Terrain Experience',
    desc: 'Proven track record on flood-prone, seasonal, and remote sites where standard contractors struggle to perform.',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  },
  {
    title: 'Transparent Reporting',
    desc: 'Regular progress reports, photographic documentation, and structured billing — so you always know where your project stands.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
]

const certBadges = [
  'MSME Registered',
  'GST Compliant',
  'PAN Registered',
  'Contractor License',
  'EPF Registered',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Meta
        title="About Wave Earth Infratech | Canal & Irrigation Infrastructure Contractor"
        description="Wave Earth Infratech is a government-approved civil infrastructure company specialising in canal construction, irrigation works, and rural redevelopment across UP and MP."
      />
      <Header />

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-[#050d1a]">
        <img
          src="https://picsum.photos/1600/900?random=41"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/80 to-transparent" />

        {/* angular bottom cut */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-[#0a0a0a]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-40 w-full">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#52B788]" />
            <span className="text-[#52B788] text-[10px] font-semibold uppercase tracking-[0.25em]">Infrastructure Execution Specialists</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white uppercase leading-[0.9] tracking-tight mb-5">
            About Wave Earth<br />
            <span className="text-[#52B788]">Infratech</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mb-8">
            Canal, Irrigation &amp; Rural Development — Across UP &amp; MP since 2010
          </p>
          <nav className="flex items-center gap-2 text-xs text-gray-600 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#52B788]">About Us</span>
          </nav>
        </div>
      </section>

      {/* ── 2. WHO WE ARE ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/700/520?random=11"
                alt="Wave Earth Infratech canal construction site"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              {/* overlay stat badge */}
              <div className="absolute -bottom-px -right-px bg-[#52B788] text-white px-6 py-5 text-center">
                <p className="font-display text-4xl font-bold leading-none">15+</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest mt-1 text-white/80">Years in Field</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[10px] font-semibold uppercase tracking-[0.25em]">Who We Are</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white uppercase leading-[0.95] mb-6">
                Civil Infrastructure Built on<br />
                <span className="text-gray-400">Ground-Level Experience</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                Wave Earth Infratech is a civil infrastructure execution company specialising in canal
                construction, nahar lining, irrigation works, and rural redevelopment projects across
                Uttar Pradesh and Madhya Pradesh.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                Founded with a mission to bring professional infrastructure execution to India&apos;s
                underserved rural zones, we work closely with state government irrigation departments,
                Jal Shakti Ministry projects, and development-sector NGOs to deliver durable,
                impactful civil works.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10 text-sm">
                Our team has direct field experience across 15+ years in earthwork, concrete structures,
                water channel development, and large-scale civil maintenance contracts — with a 200+
                strong workforce deployed across UP and MP.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact-us" className="bg-[#52B788] text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#2D6A4F] transition-colors">
                  Get in Touch
                </Link>
                <Link href="/projects" className="border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3 hover:border-[#52B788]/60 hover:text-[#52B788] transition-colors">
                  Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. KEY FACTS STRIP ────────────────────────────────────────────── */}
      <section className="bg-[#0f1b2d] py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyFacts.map((f) => (
              <div key={f.label} className="text-center border-r border-white/5 last:border-0 px-2">
                <p className="text-[9px] text-gray-600 uppercase tracking-widest font-semibold mb-1.5">{f.label}</p>
                <p className="text-[#52B788] font-display text-sm font-semibold uppercase">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MISSION & VISION ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[10px] font-semibold uppercase tracking-[0.25em]">Purpose &amp; Direction</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white uppercase">Mission &amp; Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0B2545] border border-white/5 p-10 flex flex-col gap-5">
              <div className="w-12 h-12 bg-[#52B788]/10 border border-[#52B788]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white uppercase">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                To deliver high-quality, timely, and cost-effective civil infrastructure solutions that
                improve water access, agricultural productivity, and rural livelihoods across Central
                India — executed with integrity and measurable impact.
              </p>
            </div>
            <div className="bg-[#071830] border border-[#52B788]/20 p-10 flex flex-col gap-5">
              <div className="w-12 h-12 bg-[#52B788]/10 border border-[#52B788]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white uppercase">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                To become the most trusted infrastructure execution partner for government departments
                and development organisations working in canal and irrigation development across
                Uttar Pradesh and Madhya Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. OUR JOURNEY ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[10px] font-semibold uppercase tracking-[0.25em]">Our Story</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white uppercase">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-white/5 hidden sm:block" />
            <div className="flex flex-col gap-6">
              {timeline.map((t, i) => (
                <div key={t.year} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0B2545] border border-[#52B788]/30 group-hover:border-[#52B788] flex items-center justify-center z-10 transition-colors">
                    <span className="font-display text-[#52B788] font-bold text-[10px] leading-tight text-center tracking-wider">{t.year}</span>
                  </div>
                  <div className="bg-[#0f1b2d] border border-white/5 group-hover:border-white/10 px-6 py-4 flex-1 mt-1 transition-colors">
                    <p className="text-gray-400 text-sm leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CORE VALUES ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0f1b2d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[10px] font-semibold uppercase tracking-[0.25em]">Our Principles</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white uppercase">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-[#071830] border border-white/5 hover:border-[#52B788]/30 p-7 transition-all group">
                <div className="w-10 h-10 bg-[#52B788]/10 border border-[#52B788]/20 flex items-center justify-center mb-5 group-hover:bg-[#52B788]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-bold text-white uppercase mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. EXPERTISE ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[10px] font-semibold uppercase tracking-[0.25em]">Capabilities</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white uppercase leading-[0.95] mb-10">
                Our Areas of<br />Expertise
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400 group">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#52B788]/10 border border-[#52B788]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/700/520?random=22"
                alt="Infrastructure works site"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="absolute inset-0 border border-[#52B788]/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. WHY WE ARE DIFFERENT ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0B2545]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[10px] font-semibold uppercase tracking-[0.25em]">Why Choose Us</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white uppercase">
              Infrastructure Execution —<br />
              <span className="text-gray-400">The Way It Should Be Done</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/5 hover:border-[#52B788]/30 hover:bg-white/[0.06] p-7 transition-all group">
                <div className="w-10 h-10 bg-[#52B788]/10 border border-[#52B788]/20 flex items-center justify-center mb-5 group-hover:bg-[#52B788]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h4 className="font-display text-base font-bold text-white uppercase mb-2 tracking-wide">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CERTIFICATIONS STRIP ───────────────────────────────────────── */}
      <section className="py-14 bg-[#0f1b2d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[10px] font-semibold uppercase tracking-[0.25em]">Registrations &amp; Compliance</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase">Fully Documented &amp; Compliant</h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
              {certBadges.map((b) => (
                <div key={b} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 text-[11px] font-semibold text-gray-300 uppercase tracking-wide">
                  <svg className="w-3.5 h-3.5 text-[#52B788] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5">
            <Link href="/certifications" className="inline-flex items-center gap-2 border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3 hover:border-[#52B788]/60 hover:text-[#52B788] transition-colors">
              View All Documents &amp; Certifications
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. CTA BAND ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#2D6A4F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-white/40" />
            <span className="text-white/60 text-[10px] font-semibold uppercase tracking-[0.25em]">Work With Us</span>
            <span className="w-10 h-px bg-white/40" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase leading-[0.95] mb-5">
            Ready to Partner on<br />Your Next Project?
          </h2>
          <p className="text-green-100/80 text-base mb-12 max-w-lg mx-auto leading-relaxed">
            Talk to us about tendering, sub-contracting, or direct execution.
            Government departments and NGOs welcome.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact-us" className="bg-white text-[#2D6A4F] font-bold text-[11px] uppercase tracking-widest px-8 py-4 hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
            <a
              href="tel:+912583683158"
              className="border border-white/40 hover:border-white text-white font-bold text-[11px] uppercase tracking-widest px-8 py-4 transition-colors hover:bg-white/5"
            >
              +91 258 368 3158
            </a>
            <a
              href="https://wa.me/912583683158?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1db954] text-white font-bold text-[11px] uppercase tracking-widest px-8 py-4 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
