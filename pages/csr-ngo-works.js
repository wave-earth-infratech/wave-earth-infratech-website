import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getAllProjects } from '@lib/content'

export async function getStaticProps() {
  const all = getAllProjects()
  const csrProjects = all.filter((p) => p.category === 'ngo-development')
  return { props: { csrProjects } }
}

const SERVICES = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
    title: 'Community Water Infrastructure',
    desc: 'Checkdams, farm ponds, hand pump platforms, water kiosks and distribution structures.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    title: 'Sanitation & WASH Structures',
    desc: 'Toilets, bathing facilities, waste disposal, and WASH infrastructure under government schemes.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />,
    title: 'Rural Access Roads',
    desc: 'Village connectivity paths, agricultural access roads, and drainage structures.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
    title: 'School & Anganwadi Infrastructure',
    desc: 'Classroom construction, toilet blocks, boundary walls, and ramp accessibility works.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
    title: 'Health Centre Construction',
    desc: 'PHC and sub-centre buildings, drainage, ramps, and compound structures.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    title: 'Livelihood Infrastructure',
    desc: 'Common facility centres, processing sheds, storage structures for self-help groups.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />,
    title: 'Natural Resource Management',
    desc: 'Soil conservation works, check structures, plantation site preparation and terracing.',
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
    title: 'Housing Rehabilitation',
    desc: 'Post-disaster repair and affordable housing under government and NGO schemes.',
  },
]

const PROCESS = [
  { step: '01', title: 'Understanding the Project', desc: 'We engage with the programme team to understand community context, beneficiary needs, and non-negotiable quality standards.' },
  { step: '02', title: 'Site Assessment', desc: 'Ground-level survey conducted with community members and NGO field staff to validate scope and site conditions.' },
  { step: '03', title: 'Work Planning', desc: 'Detailed execution plan aligned with the NGO programme timeline, seasonal constraints, and beneficiary schedules.' },
  { step: '04', title: 'Execution', desc: 'On-site delivery with daily progress updates to the programme team and transparent site-level reporting.' },
  { step: '05', title: 'Community Handover', desc: 'Formal handover with community representatives present, including walkthrough and usage orientation.' },
  { step: '06', title: 'Documentation', desc: 'All required reports, GPS-tagged photos, measurement records, and bills provided in NGO-preferred format.' },
]

const DIFFERENTIATORS = [
  { title: 'Accountability', desc: 'Transparent billing and measurement book maintenance from day one.' },
  { title: 'Documentation', desc: 'GPS photos, progress reports, and financial records on request - NGO audit-ready.' },
  { title: 'Community Sensitivity', desc: 'Field team trained to work respectfully with communities and local institutions.' },
  { title: 'Local Knowledge', desc: 'Deep familiarity with rural UP/MP - geography, seasonality, logistics, local politics.' },
  { title: 'Statutory Compliance', desc: 'MSME, GST, EPF compliant - required by most international NGO finance policies.' },
  { title: 'Speed', desc: 'Ability to mobilise quickly for time-bound project cycles without compromising quality.' },
]

const IMPACT_STATS = [
  { value: '15+', label: 'Villages with Improved Water Access' },
  { value: '40+', label: 'Community Structures Built' },
  { value: '8+', label: 'NGO / CSR Partners' },
  { value: '5000+', label: 'Beneficiaries Impacted' },
]

const PROJECT_TYPES = ['Water', 'Sanitation', 'Road', 'School', 'Health', 'Other']

export default function CsrNgoWorksPage({ csrProjects }) {
  const [form, setForm] = useState({
    org: '', contact: '', designation: '', email: '', phone: '',
    location: '', projectType: '', budget: '', timeline: '', description: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mayzlgke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'CSR/NGO Partnership Enquiry - Wave Earth Infratech' }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>CSR & NGO Works | Rural Infrastructure Execution Partner - Wave Earth Infratech</title>
        <meta name="description" content="Wave Earth Infratech executes civil infrastructure works for NGOs, CSR departments, and development organisations including water structures, community buildings, and rural infrastructure across UP and MP." />
      </Head>

      <Header />

      <main className="bg-theme-base text-theme-fg min-h-screen">

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://picsum.photos/1600/700?random=901" alt="Community infrastructure" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/95 via-[#050d1a]/80 to-[#050d1a]/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50 font-sans mb-10" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#52B788]">CSR & NGO Works</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Development Sector</span>
            </div>
            <h1 className="font-display text-[54px] lg:text-[80px] text-white uppercase leading-none tracking-tight mb-6 max-w-4xl">
              CSR & NGO Works
            </h1>
            <p className="text-white/70 text-xl max-w-2xl leading-relaxed font-sans">
              Field execution for development sector infrastructure - water, rural, community.
            </p>
          </div>
        </section>

        {/* ── Impact Stats ── */}
        <section className="bg-[#0B2545] py-12 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {IMPACT_STATS.map((s) => (
                <div key={s.label} className="bg-[#0B2545] px-8 py-8 text-center">
                  <div className="font-display text-[48px] text-[#52B788] leading-none mb-2">{s.value}</div>
                  <div className="text-white/60 text-[11px] uppercase tracking-widest font-sans">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Introduction ── */}
        <section className="py-20 bg-theme-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#52B788]" />
                  <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Who We Are</span>
                </div>
                <h2 className="font-display text-[42px] lg:text-[54px] text-theme-fg uppercase leading-none mb-8">
                  Infrastructure at the Grassroots
                </h2>
                <p className="text-theme-fg-2 leading-relaxed font-sans mb-6">
                  Wave Earth Infratech has been a trusted field execution partner for development sector organisations working in rural Uttar Pradesh and Madhya Pradesh. We understand that NGO and CSR projects require not just technical execution, but also community sensitivity, transparent reporting, and strict documentation discipline.
                </p>
                <p className="text-theme-fg-2 leading-relaxed font-sans">
                  Our team has experience working alongside social organisations on water, sanitation, rural livelihood, and community infrastructure projects - delivering works that create lasting impact in underserved communities.
                </p>
              </div>
              <div className="relative">
                <img src="https://picsum.photos/700/500?random=902" alt="Community work" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-[#52B788] px-8 py-6 hidden lg:block">
                  <p className="text-white font-display text-[32px] leading-none">EST. 2017</p>
                  <p className="text-white/80 text-[11px] uppercase tracking-widest font-sans mt-1">Field Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="py-20 bg-theme-base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Services</span>
                <span className="w-8 h-px bg-[#52B788]" />
              </div>
              <h2 className="font-display text-[42px] lg:text-[54px] text-theme-fg uppercase leading-none">
                What We Deliver for<br />Development Organisations
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-theme-border/[0.05]">
              {SERVICES.map((s) => (
                <div key={s.title} className="bg-theme-base p-8 border border-theme-border/[0.06] hover:bg-theme-card transition-colors group">
                  <div className="w-10 h-10 mb-5 text-[#52B788]">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10">{s.icon}</svg>
                  </div>
                  <h3 className="font-display text-[16px] text-theme-fg uppercase tracking-wide mb-3 group-hover:text-[#52B788] transition-colors">{s.title}</h3>
                  <p className="text-theme-fg-3 text-sm leading-relaxed font-sans">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How We Work ── */}
        <section className="py-20 bg-theme-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Process</span>
                <span className="w-8 h-px bg-[#52B788]" />
              </div>
              <h2 className="font-display text-[42px] lg:text-[54px] text-theme-fg uppercase leading-none">
                How We Work with<br />NGOs & CSR Partners
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-theme-border/[0.05]">
              {PROCESS.map((p) => (
                <div key={p.step} className="bg-theme-surface p-8 border border-theme-border/[0.06] hover:bg-theme-card transition-colors">
                  <div className="font-display text-[64px] leading-none text-theme-fg/[0.06] mb-4 select-none">{p.step}</div>
                  <h3 className="font-display text-[18px] text-theme-fg uppercase tracking-wide mb-3">{p.title}</h3>
                  <p className="text-theme-fg-3 text-sm leading-relaxed font-sans">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Us ── */}
        <section className="py-20 bg-theme-base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#52B788]" />
                  <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Differentiators</span>
                </div>
                <h2 className="font-display text-[42px] lg:text-[54px] text-theme-fg uppercase leading-none mb-10">
                  What Sets Us Apart for Development Sector Work
                </h2>
                <div className="space-y-0">
                  {DIFFERENTIATORS.map((d) => (
                    <div key={d.title} className="border-b border-theme-border/[0.07] py-6 flex gap-5 group">
                      <div className="w-2 h-2 mt-2 bg-[#52B788] flex-shrink-0" />
                      <div>
                        <p className="font-display text-[16px] text-theme-fg uppercase tracking-wide mb-1 group-hover:text-[#52B788] transition-colors">{d.title}</p>
                        <p className="text-theme-fg-3 text-sm leading-relaxed font-sans">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:sticky lg:top-28">
                <div className="bg-[#0B2545] p-8 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-5 h-5 text-[#52B788] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="font-display text-[18px] text-white uppercase tracking-wide">CSR Compliance Note</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed font-sans">
                    Wave Earth Infratech is MSME registered and GST compliant. We can provide all required documentation for CSR project audits, FCRA compliance, and international donor reporting requirements.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {['MSME Registered', 'GST Compliant', 'EPF Enrolled'].map((b) => (
                      <span key={b} className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#52B788] border border-[#52B788]/30 px-3 py-1.5">{b}</span>
                    ))}
                  </div>
                </div>
                <img src="https://picsum.photos/600/400?random=903" alt="NGO field work" className="w-full aspect-video object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CSR Projects ── */}
        {csrProjects.length > 0 && (
          <section className="py-20 bg-theme-surface border-t border-theme-border/[0.06]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-display text-[36px] text-theme-fg uppercase">Our Development Sector Work</h2>
                <Link href="/projects" className="text-[#52B788] text-[11px] uppercase tracking-widest font-sans font-semibold hover:text-theme-fg transition-colors">
                  All Projects →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-theme-border/[0.05]">
                {csrProjects.slice(0, 3).map((p) => (
                  <div key={p.slug} className="group bg-theme-surface hover:bg-theme-card transition-colors flex flex-col border border-theme-border/[0.06]">
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img src={p.featured_image || 'https://picsum.photos/800/450?random=90'} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display text-[18px] text-theme-fg uppercase tracking-wide mb-2 group-hover:text-[#52B788] transition-colors">{p.title}</h3>
                      {p.location && <p className="text-theme-fg-3 text-[11px] uppercase tracking-wide font-sans mb-3">{p.location}</p>}
                      <p className="text-theme-fg-3 text-sm leading-relaxed font-sans mb-4 flex-1">{p.excerpt}</p>
                      <Link href={`/projects/${p.slug}`} className="text-[#52B788] text-[11px] uppercase tracking-widest font-sans font-semibold mt-auto hover:text-theme-fg transition-colors">View Details →</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Partnership Form ── */}
        <section id="partner" className="py-20 bg-theme-base border-t border-theme-border/[0.06]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Partner With Us</span>
                <span className="w-8 h-px bg-[#52B788]" />
              </div>
              <h2 className="font-display text-[42px] text-theme-fg uppercase leading-none mb-4">Start a Partnership Conversation</h2>
              <p className="text-theme-fg-2 font-sans leading-relaxed">Share your project brief and we will respond within 2 working days.</p>
            </div>

            {status === 'sent' ? (
              <div className="bg-[#52B788]/10 border border-[#52B788]/30 p-8 text-center">
                <svg className="w-10 h-10 text-[#52B788] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-theme-fg font-display text-[20px] uppercase mb-2">Enquiry Received</p>
                <p className="text-theme-fg-2 font-sans text-sm">We will review your project brief and respond within 2 working days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Organisation Name *</label>
                    <input required name="org" value={form.org} onChange={handleChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Contact Person *</label>
                    <input required name="contact" value={form.contact} onChange={handleChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Designation</label>
                    <input name="designation" value={form.designation} onChange={handleChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Phone *</label>
                    <input required type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Project Location *</label>
                    <input required name="location" value={form.location} onChange={handleChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Project Type *</label>
                    <select required name="projectType" value={form.projectType} onChange={handleChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors">
                      <option value="">Select...</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Approximate Budget</label>
                    <input name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. ₹25 Lakhs" className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg placeholder-theme-fg-3/50 px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Timeline</label>
                  <input name="timeline" value={form.timeline} onChange={handleChange} placeholder="e.g. Start April 2025, 6 months" className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg placeholder-theme-fg-3/50 px-4 py-3 text-sm font-sans outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Project Description *</label>
                  <textarea required rows={5} name="description" value={form.description} onChange={handleChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors resize-none" />
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-sm font-sans">Something went wrong. Please try again or email us directly.</p>
                )}
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-50">
                  {status === 'sending' ? 'Sending...' : 'Submit Partnership Enquiry'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section className="py-20 bg-[#2D6A4F]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-[40px] lg:text-[54px] text-white uppercase leading-none mb-6">Ready to Make an Impact?</h2>
            <p className="text-white/80 text-base mb-10 leading-relaxed font-sans">
              We bring the technical execution capability. You bring the community mandate. Together we deliver lasting impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#partner" className="btn-primary">Start a Partnership</a>
              <Link href="/contact-us" className="border border-white/30 text-white text-[11px] font-sans uppercase tracking-widest px-8 py-3 hover:border-white hover:bg-white/10 transition-colors">General Enquiry</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

