import Link from 'next/link'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'

// ─── Data ─────────────────────────────────────────────────────────────────────

const keyFacts = [
  { label: 'Registered Office', value: 'Ghaziabad, Uttar Pradesh' },
  { label: 'Work Zones', value: 'Uttar Pradesh & Madhya Pradesh' },
  { label: 'Primary Sector', value: 'Irrigation, Canal & Rural Infrastructure' },
  { label: 'MSME Registered', value: 'Yes' },
  { label: 'GST Registered', value: 'Yes' },
  { label: 'Contractor Class', value: 'Government Approved' },
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
  { icon: '🏛️', title: 'Integrity', desc: 'Honest reporting, transparent billing, and reliable communication with every client.' },
  { icon: '✅', title: 'Quality', desc: 'No compromise on material specification or workmanship standards on any site.' },
  { icon: '⏱️', title: 'Timeliness', desc: 'We take deadline commitments seriously - project schedules are non-negotiable.' },
  { icon: '🦺', title: 'Safety', desc: 'Enforced site safety protocols across all worksites, protecting every worker.' },
  { icon: '🌾', title: 'Rural Focus', desc: 'Dedicated to improving water access, agriculture, and livelihoods in rural India.' },
  { icon: '🌿', title: 'Sustainability', desc: 'Water-sensitive, eco-conscious execution practices on every project.' },
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

const certBadges = [
  { label: 'MSME Registered', icon: '🏷️' },
  { label: 'GST Compliant', icon: '📄' },
  { label: 'PAN Registered', icon: '🆔' },
  { label: 'Contractor License', icon: '📜' },
  { label: 'EPF Registered', icon: '🔒' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutUs() {
  return (
    <>
      <Meta
        title="About Wave Earth Infratech | Canal & Irrigation Infrastructure Contractor"
        description="Wave Earth Infratech is a government-approved civil infrastructure company specialising in canal construction, irrigation works, and rural redevelopment across UP and MP."
      />

      <Header />

      {/* ── 1. HERO BANNER ────────────────────────────────────────────────── */}
      <section
        className="relative py-28 flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B2545 0%, #1A3A6B 55%, #071830 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block bg-accent/20 text-accent-light border border-accent/30 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Infrastructure Execution Specialists
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">About Wave Earth Infratech</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-6">
            Canal, Irrigation &amp; Rural Development - Across UP &amp; MP
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </section>

      {/* ── 2. WHO WE ARE ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/700/520?random=11"
                alt="Wave Earth Infratech canal construction site"
                className="rounded-2xl w-full object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-4 bg-primary text-white rounded-2xl px-6 py-5 shadow-2xl text-center hidden sm:block">
                <p className="text-4xl font-black text-accent-light">15+</p>
                <p className="text-xs font-semibold uppercase tracking-wider mt-1">Years in Field</p>
              </div>
            </div>
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading mb-5">Civil Infrastructure Built on Ground-Level Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wave Earth Infratech is a civil infrastructure execution company specialising in canal
                construction, nahar lining, irrigation works, and rural redevelopment projects across
                Uttar Pradesh and Madhya Pradesh.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded with a mission to bring professional infrastructure execution to India&apos;s
                underserved rural zones, we work closely with state government irrigation departments,
                Jal Shakti Ministry projects, and development-sector NGOs to deliver durable,
                impactful civil works.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team has direct field experience across 15+ years in earthwork, concrete structures,
                water channel development, and large-scale civil maintenance contracts - with a 200+
                strong workforce deployed across UP and MP.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact-us" className="btn-primary">Get in Touch</Link>
                <Link href="/projects" className="btn-outline-dark">Our Projects</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. KEY FACTS STRIP ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyFacts.map((f) => (
              <div key={f.label} className="text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">{f.label}</p>
                <p className="text-sm font-bold text-primary">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MISSION & VISION ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Purpose &amp; Direction</span>
            <h2 className="section-heading">Mission &amp; Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-2xl p-10 text-white flex flex-col gap-4">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-3xl">🎯</div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To deliver high-quality, timely, and cost-effective civil infrastructure solutions that
                improve water access, agricultural productivity, and rural livelihoods across Central
                India - executed with integrity and measurable impact.
              </p>
            </div>
            <div className="bg-accent rounded-2xl p-10 text-white flex flex-col gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl">🔭</div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-gray-100 leading-relaxed">
                To become the most trusted infrastructure execution partner for government departments
                and development organisations working in canal and irrigation development across
                Uttar Pradesh and Madhya Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. OUR JOURNEY ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Our Story</span>
            <h2 className="section-heading">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />
            <div className="flex flex-col gap-8">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg">
                    <span className="text-accent-light font-bold text-xs leading-tight text-center">{t.year}</span>
                  </div>
                  <div className="bg-white rounded-xl px-6 py-4 shadow-sm flex-1 border border-gray-100 mt-1">
                    <p className="text-gray-700 text-sm leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. LEADERSHIP ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">The Team</span>
            <h2 className="section-heading">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                name: 'Mr. [Director Name]',
                role: 'Managing Director',
                bio: 'Over 15 years of hands-on experience in canal and civil infrastructure projects across UP and MP. Has overseen government contract execution worth ₹X crore for state irrigation departments.',
                img: 'https://picsum.photos/400/480?random=51',
              },
              {
                name: 'Mr. [Project Head]',
                role: 'Head of Projects',
                bio: 'Specialist in irrigation works and RCC structures. Leads field operations and site supervision across all concurrent project sites, ensuring quality and on-schedule delivery.',
                img: 'https://picsum.photos/400/480?random=52',
              },
              {
                name: 'Mr. [Finance Director]',
                role: 'Finance & Compliance',
                bio: 'Manages government billing, tender documentation, measurement books, and statutory compliance across all contracts. Expert in UP/MP PWD and irrigation department norms.',
                img: 'https://picsum.photos/400/480?random=53',
              },
            ].map((person) => (
              <div key={person.name} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 w-full max-w-xs shadow-sm hover:shadow-md transition-shadow">
                <img src={person.img} alt={person.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h4 className="font-bold text-primary text-lg">{person.name}</h4>
                  <p className="text-accent text-sm font-semibold mb-3">{person.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CORE VALUES ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Our Principles</span>
            <h2 className="section-heading">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h4 className="font-bold text-primary text-lg mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. EXPERTISE ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Capabilities</span>
              <h2 className="section-heading mb-6">Our Areas of Expertise</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://picsum.photos/700/520?random=22"
                alt="Infrastructure works site"
                className="rounded-2xl w-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. WHY WE ARE DIFFERENT ───────────────────────────────────────── */}
      <section className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent-light font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Infrastructure Execution - the Way It Should Be Done
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '🚜', title: 'Own Machinery Fleet', desc: 'JCBs, Excavators, Concrete Mixers, Dumpers - no dependency on rental equipment for critical works. Faster mobilisation and cost control.' },
              { icon: '🗺️', title: 'Locally Embedded Team', desc: 'Deep field knowledge of UP/MP geography, seasonal constraints, and rural terrain. Our team knows the ground before breaking it.' },
              { icon: '📋', title: 'Government Compliance Ready', desc: 'Experienced in proper billing, measurement books, and inspection readiness for state PWD and irrigation department works.' },
              { icon: '⚡', title: 'Fast Mobilisation', desc: 'Ability to mobilise quickly for urgent government or NGO contracts - within days, not weeks. Equipment and crew on standby.' },
              { icon: '🏗️', title: 'Challenging Terrain Experience', desc: 'Proven track record on flood-prone, seasonal, and remote sites where standard contractors struggle to perform.' },
              { icon: '📊', title: 'Transparent Reporting', desc: 'Regular progress reports, photographic documentation, and structured billing - so you always know where your project stands.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CERTIFICATIONS STRIP ──────────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label block mb-4">Registrations &amp; Compliance</span>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {certBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-sm font-semibold text-primary shadow-sm">
                <span>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
          <Link href="/certifications" className="btn-outline-dark inline-flex">
            View All Documents &amp; Certifications →
          </Link>
        </div>
      </section>

      {/* ── 11. CTA BAND ──────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to partner with us on your next infrastructure project?
          </h2>
          <p className="text-green-100 text-lg mb-10">
            Talk to us about tendering, sub-contracting, or direct execution. Government departments and NGOs welcome.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact-us" className="bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
              Contact Us →
            </Link>
            <a
              href="tel:+912583683158"
              className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors hover:bg-white/5"
            >
              +91 258 368 3158
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
