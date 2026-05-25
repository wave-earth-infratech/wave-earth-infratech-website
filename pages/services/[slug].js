import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { services, getServiceBySlug } from '../../data/services'

export async function getStaticPaths() {
  return {
    paths: services.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return { notFound: true }

  const currentIndex = services.findIndex((s) => s.slug === params.slug)
  const prev = services[currentIndex - 1] || null
  const next = services[currentIndex + 1] || null

  return { props: { service, prev, next } }
}

export default function ServiceDetailPage({ service, prev, next }) {
  return (
    <>
      <Head>
        <title>{service.name} | Services - Wave Earth Infratech</title>
        <meta name="description" content={service.description} />
      </Head>

      <Header />

      <main className="bg-[#040c18] text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="pt-36 pb-16 bg-[#050d1a] border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-500 font-sans mb-8"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span className="text-gray-700">/</span>
              <Link href="/services" className="hover:text-[#52B788] transition-colors">Services</Link>
              <span className="text-gray-700">/</span>
              <span className="text-[#52B788]">{service.name}</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">
                Service Detail
              </span>
            </div>

            <h1 className="font-display text-[48px] lg:text-[72px] text-white uppercase leading-none tracking-tight mb-5 max-w-4xl">
              {service.name}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-sans">
              {service.tagline}
            </p>
          </div>
        </section>

        {/* ── Main content ── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

              {/* Left - description + scope + process */}
              <div className="lg:col-span-2 space-y-16">

                {/* Description */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-6 h-px bg-[#52B788]" />
                    <h2 className="font-display text-[22px] text-white uppercase tracking-wide">Overview</h2>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed font-sans">{service.description}</p>
                </div>

                {/* Work Scope */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-6 h-px bg-[#52B788]" />
                    <h2 className="font-display text-[22px] text-white uppercase tracking-wide">Work Scope</h2>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.scope.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#52B788] flex-shrink-0 mt-2" />
                        <span className="text-gray-400 text-sm leading-relaxed font-sans">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Work Process */}
                {service.process && service.process.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-6 h-px bg-[#52B788]" />
                      <h2 className="font-display text-[22px] text-white uppercase tracking-wide">Work Process</h2>
                    </div>
                    <ol className="space-y-4">
                      {service.process.map((step, i) => (
                        <li key={step} className="flex items-start gap-4">
                          <span className="font-display text-[28px] text-[#52B788]/30 leading-none flex-shrink-0 w-8">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-gray-400 text-sm leading-relaxed font-sans pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              {/* Right - sidebar */}
              <div className="space-y-8">

                {/* Machinery */}
                {service.machinery && service.machinery.length > 0 && (
                  <div className="border border-white/[0.08] p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-4 h-px bg-[#52B788]" />
                      <h3 className="font-display text-[14px] text-white uppercase tracking-[0.2em]">Machinery Used</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {service.machinery.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-gray-500 text-xs font-sans">
                          <svg className="w-3 h-3 text-[#52B788] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Typical Client */}
                <div className="border border-white/[0.08] p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-4 h-px bg-[#52B788]" />
                    <h3 className="font-display text-[14px] text-white uppercase tracking-[0.2em]">Typical Client</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans">{service.client}</p>
                </div>

                {/* CTA card */}
                <div className="bg-[#071526] border border-[#52B788]/20 p-6">
                  <h3 className="font-display text-[18px] text-white uppercase tracking-wide mb-3">
                    Need This Service?
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans mb-5">
                    Send us your project brief or tender document and we will respond within 24 hours.
                  </p>
                  <Link
                    href="/contact-us"
                    className="btn-primary block text-center text-[13px]"
                  >
                    Get in Touch
                  </Link>
                  <a
                    href="https://wa.me/912583683158?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 mt-3 text-gray-500 hover:text-white text-xs font-sans transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Or chat on WhatsApp
                  </a>
                </div>

                {/* All services link */}
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-gray-500 hover:text-[#52B788] text-[11px] uppercase tracking-widest font-sans transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Prev / Next navigation ── */}
        {(prev || next) && (
          <nav className="border-t border-white/[0.06] bg-[#050d1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 divide-x divide-white/[0.06]">
                {prev ? (
                  <Link
                    href={`/services/${prev.slug}`}
                    className="group flex flex-col gap-1 py-8 px-4 hover:bg-[#071526] transition-colors"
                  >
                    <span className="text-[11px] text-gray-600 uppercase tracking-widest font-sans flex items-center gap-2">
                      <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                      Previous
                    </span>
                    <span className="font-display text-[16px] text-white uppercase tracking-wide group-hover:text-[#52B788] transition-colors">
                      {prev.name}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/services/${next.slug}`}
                    className="group flex flex-col gap-1 py-8 px-4 text-right hover:bg-[#071526] transition-colors"
                  >
                    <span className="text-[11px] text-gray-600 uppercase tracking-widest font-sans flex items-center justify-end gap-2">
                      Next
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <span className="font-display text-[16px] text-white uppercase tracking-wide group-hover:text-[#52B788] transition-colors">
                      {next.name}
                    </span>
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
