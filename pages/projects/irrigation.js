import Link from 'next/link'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getAllProjects } from '@lib/content'

const CATEGORY_LABELS = {
  'canal-construction':        'Canal & Irrigation',
  'nahar-lining':              'Nahar Lining',
  'irrigation':               'Irrigation Infrastructure',
  'rural-redevelopment':       'Rural Redevelopment',
  'earthwork':                'Earthwork & Excavation',
  'water-resource-projects':   'Water Resource',
  'concrete-structures':       'Concrete Structures',
  'road-drainage':             'Road & Drainage',
  'ngo-development':           'NGO Works',
  'civil-maintenance':         'Maintenance',
}

export async function getStaticProps() {
  const all = getAllProjects()
  const projects = all.filter((p) => p.category === 'irrigation')
  return { props: { projects, total: all.length } }
}

export default function IrrigationProjectsPage({ projects, total }) {
  return (
    <>
      <Head>
        <title>Irrigation Projects | Irrigation Infrastructure Works - Wave Earth Infratech</title>
        <meta name="description" content="End-to-end irrigation network and infrastructure projects executed by Wave Earth Infratech for government departments across Uttar Pradesh and Madhya Pradesh." />
      </Head>

      <Header />

      <main className="bg-theme-base text-theme-fg min-h-screen">

        {/* ── Hero ── */}
        <section className="pt-36 pb-16 bg-theme-surface border-b border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-theme-fg-3 font-sans mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-[#52B788] transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-[#52B788]">Irrigation Projects</span>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Irrigation</span>
            </div>
            <h1 className="font-display text-[54px] lg:text-[80px] text-theme-fg uppercase leading-none tracking-tight mb-4">
              Irrigation Projects
            </h1>
            <p className="text-theme-fg-2 text-lg max-w-2xl leading-relaxed font-sans">
              End-to-end irrigation networks, water distribution systems &amp; agricultural infrastructure for rural UP &amp; MP.
            </p>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <div className="border-b border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-10 items-center">
            {[
              [projects.length.toString(), 'Irrigation Projects'],
              [projects.filter((p) => p.status === 'completed').length.toString(), 'Completed'],
              [total.toString(), 'Total Projects'],
            ].map(([v, l]) => (
              <div key={l} className="flex items-center gap-3">
                <span className="font-display text-2xl text-theme-fg">{v}</span>
                <span className="text-theme-fg-3 text-[11px] uppercase tracking-widest font-sans">{l}</span>
              </div>
            ))}
            <Link href="/projects" className="ml-auto text-[11px] uppercase tracking-widest font-sans font-semibold text-theme-fg-3 hover:text-[#52B788] transition-colors">
              ← All Projects
            </Link>
          </div>
        </div>

        {/* ── Projects grid ── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {projects.length === 0 ? (
              <div className="py-24 text-center text-theme-fg-3 font-sans text-sm uppercase tracking-widest">
                No irrigation projects found. <Link href="/projects" className="text-[#52B788] hover:underline">View all projects →</Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-theme-border/[0.05]">
                {projects.map((project) => (
                  <div key={project.slug} className="group bg-theme-base hover:bg-theme-card transition-colors duration-300 flex flex-col">
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={project.featured_image || '/images/placeholder.svg'}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-theme-base/80 text-[#52B788] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border border-[#52B788]/30">
                          Irrigation Infrastructure
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 ${
                          project.status === 'completed'
                            ? 'bg-[#52B788]/20 text-[#52B788] border border-[#52B788]/40'
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        }`}>
                          {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                        </span>
                      </div>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="font-display text-[20px] text-theme-fg uppercase tracking-wide mb-2 leading-tight group-hover:text-[#52B788] transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        {project.location && (
                          <span className="flex items-center gap-1.5 text-theme-fg-3 text-[11px] font-sans uppercase tracking-wide">
                            <svg className="w-3 h-3 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {project.location}
                          </span>
                        )}
                        {project.project_value && (
                          <span className="text-theme-fg-3 text-[11px] font-sans uppercase tracking-wide">{project.project_value}</span>
                        )}
                      </div>
                      <p className="text-theme-fg-3 text-sm leading-relaxed font-sans mb-6 flex-1">{project.excerpt}</p>
                      {project.client && (
                        <p className="text-theme-fg-3 text-[11px] font-sans uppercase tracking-widest mb-5 border-t border-theme-border/5 pt-4">
                          Client: <span className="text-theme-fg-2">{project.client}</span>
                        </p>
                      )}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-1.5 text-[#52B788] text-[11px] uppercase tracking-widest font-sans font-semibold mt-auto hover:text-[#2D6A4F] transition-colors"
                      >
                        View Case Study
                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Service link ── */}
        <section className="py-16 bg-theme-surface border-t border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-theme-fg-3 text-[11px] uppercase tracking-widest font-sans mb-2">Related Service</p>
              <h3 className="font-display text-[28px] text-theme-fg uppercase">Irrigation Infrastructure</h3>
            </div>
            <div className="flex gap-4">
              <Link href="/services/irrigation-infrastructure" className="btn-primary">View Service Details</Link>
              <Link href="/contact-us" className="border border-theme-border/20 text-theme-fg-2 text-[11px] font-sans uppercase tracking-widest px-6 py-3 hover:border-[#52B788] hover:text-[#52B788] transition-colors">
                Discuss a Project
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
