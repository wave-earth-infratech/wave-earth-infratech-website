import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { services } from '../../data/services'
import { SERVICES_BAR_STATS, STATS, COMPANY } from '../../data/siteConstants'

const icons = {
  'canal-construction': (
    <svg className="w-5 h-5 stroke-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M2 13c1.5-3 3-3 4.5 0s3 3 4.5 0 3-3 4.5 0S18 13 22 13M2 17c1.5-3 3-3 4.5 0s3 3 4.5 0 3-3 4.5 0S18 17 22 17M5 6h14M12 6V3" />
    </svg>
  ),
  'nahar-lining': (
    <svg className="w-5 h-5 stroke-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  'irrigation-infrastructure': (
    <svg className="w-5 h-5 stroke-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 3v10M12 13l-5 5M12 13l5 5M7 18H4M17 18h3M12 21v-3" />
    </svg>
  ),
  'rural-redevelopment': (
    <svg className="w-5 h-5 stroke-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" />
    </svg>
  ),
  'water-resource-projects': (
    <svg className="w-5 h-5 stroke-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 2C8 8 5 11 5 14a7 7 0 0014 0c0-3-3-6-7-12z" />
    </svg>
  ),
  'earthwork-excavation': (
    <svg className="w-5 h-5 stroke-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M20 7H4a1 1 0 00-1 1v2h18V8a1 1 0 00-1-1zM3 10v10h18V10M8 14h8M12 10v4" />
    </svg>
  ),
  'concrete-structures': (
    <svg className="w-5 h-5 stroke-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />
    </svg>
  ),
  'road-drainage': (
    <svg className="w-5 h-5 stroke-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M5 20L12 4l7 16M8 15h8M12 4v16" />
    </svg>
  ),
  'ngo-development': (
    <svg className="w-5 h-5 stroke-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  'civil-maintenance': (
    <svg className="w-5 h-5 stroke-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
}

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Canal Construction, Nahar Lining & Irrigation Works - Wave Earth Infratech</title>
        <meta
          name="description"
          content="Wave Earth Infratech offers canal construction, nahar lining, irrigation infrastructure, earthwork, concrete structures, road works, and NGO project execution across UP and MP for government and development sector clients."
        />
        <meta
          name="keywords"
          content="canal construction contractor, nahar lining contractor UP, irrigation infrastructure contractor, rural redevelopment contractor India, earthwork contractor UP MP, NGO civil contractor India"
        />
      </Head>

      <Header />

      <main className="bg-theme-base text-theme-fg min-h-screen">

        {/* ── Hero ── */}
        <section className="pt-36 pb-16 bg-theme-surface border-b border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-500 font-sans mb-8"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span className="text-theme-fg-3">/</span>
              <span className="text-[#52B788]">Services</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">
                What We Do
              </span>
            </div>

            <h1 className="font-display text-[54px] lg:text-[80px] text-theme-fg uppercase leading-none tracking-tight mb-4">
              Our Services
            </h1>
            <p className="text-theme-fg-2 text-lg max-w-2xl leading-relaxed font-sans">
              Specialised civil infrastructure services for government departments, irrigation bodies
              &amp; NGOs across Uttar Pradesh and Madhya Pradesh.
            </p>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <div className="border-b border-theme-border/[0.06] bg-theme-base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-10">
            {SERVICES_BAR_STATS.map(([v, l]) => (
              <div key={l} className="flex items-center gap-3">
                <span className="font-display text-2xl text-theme-fg">{v}</span>
                <span className="text-theme-fg-3 text-[11px] uppercase tracking-widest font-sans">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Services grid ── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-theme-border/[0.06]">
              {services.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col p-8 bg-theme-base hover:bg-theme-card transition-all duration-300 overflow-hidden"
                >
                  {/* Background index number */}
                  <span className="absolute top-3 right-5 font-display text-6xl text-theme-fg/[0.06] group-hover:text-theme-fg/[0.12] transition-colors select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Top accent on hover */}
                  <span className="absolute top-0 left-0 right-0 h-px bg-[#52B788] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Icon */}
                  <div className="w-12 h-12 border border-theme-border/10 group-hover:border-[#52B788]/50 flex items-center justify-center mb-6 transition-colors">
                    {icons[service.slug]}
                  </div>

                  <h3 className="font-display text-[20px] text-theme-fg uppercase tracking-wide mb-2 group-hover:text-[#52B788] transition-colors leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-theme-fg-3 text-sm leading-relaxed mb-6 flex-1 font-sans">
                    {service.tagline}
                  </p>

                  <span className="flex items-center gap-1.5 text-[#52B788] text-[11px] uppercase tracking-widest font-sans font-semibold mt-auto">
                    View Details
                    <svg
                      className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why choose us strip ── */}
        <section className="py-16 bg-theme-surface border-t border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-theme-border/[0.06]">
              {[
                {
                  title: 'Government Sector Expertise',
                  body: 'All our services are calibrated for government tender execution - BOQ compliance, departmental specifications, and documentation for PWD, Jal Shakti, and irrigation bodies.',
                },
                {
                  title: 'Own Fleet - No Delays',
                  body: 'We own and operate our heavy machinery fleet. No third-party dependency means faster mobilisation and reliable execution on tight government project timelines.',
                },
                {
                  title: 'UP & MP Ground Presence',
                  body: `With ${STATS.yearsExperience.value}${STATS.yearsExperience.suffix} years and ${STATS.projectsDone.value}${STATS.projectsDone.suffix} completed projects across ${COMPANY.states}, we have the local knowledge, relationships, and logistics to deliver on the ground.`,
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-theme-base px-10 py-10">
                  <span className="w-6 h-px bg-[#52B788] block mb-5" />
                  <h3 className="font-display text-[20px] text-theme-fg uppercase tracking-wide mb-3">{title}</h3>
                  <p className="text-theme-fg-3 text-sm leading-relaxed font-sans">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-theme-base border-t border-theme-border/[0.06]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold block mb-4">
              Work With Us
            </span>
            <h2 className="font-display text-[40px] lg:text-[54px] text-theme-fg uppercase leading-none mb-6">
              Have a Project or Tender?
            </h2>
            <p className="text-theme-fg-2 text-base mb-10 leading-relaxed font-sans">
              Send us your project brief or tender document. Our team will review and respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn-primary"
              >
                Discuss Your Project
              </Link>
              <a
                href="https://wa.me/919453111377?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-theme-fg-2 hover:text-theme-fg text-sm font-sans transition-colors"
              >
                <svg className="w-4 h-4 fill-[#25D366] flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
