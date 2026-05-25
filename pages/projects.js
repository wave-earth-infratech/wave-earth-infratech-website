import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getAllProjects } from '@lib/content'

const CATEGORY_LABELS = {
  'canal-construction':       'Canal & Irrigation',
  'nahar-lining':             'Nahar Lining',
  'irrigation-infrastructure':'Irrigation Infrastructure',
  'rural-redevelopment':      'Rural Redevelopment',
  'earthwork-excavation':     'Earthwork & Excavation',
  'water-resource-projects':  'Water Resource',
  'concrete-structures':      'Concrete Structures',
  'road-drainage':            'Road & Drainage',
  'ngo-development':          'NGO Works',
  'civil-maintenance':        'Maintenance',
}

export async function getStaticProps() {
  const projects = getAllProjects()
  return { props: { projects } }
}

export default function ProjectsPage({ projects }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeStatus,   setActiveStatus]   = useState('all')

  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))]

  const filtered = projects.filter((p) => {
    const catMatch    = activeCategory === 'all' || p.category === activeCategory
    const statusMatch = activeStatus   === 'all' || p.status   === activeStatus
    return catMatch && statusMatch
  })

  return (
    <>
      <Head>
        <title>Projects | Canal, Irrigation & Infrastructure Works - Wave Earth Infratech</title>
        <meta name="description" content="Completed and ongoing canal construction, nahar lining, irrigation infrastructure, earthwork, and rural redevelopment projects across Uttar Pradesh and Madhya Pradesh." />
      </Head>

      <Header />

      <main className="bg-[#040c18] text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="pt-36 pb-16 bg-[#050d1a] border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-500 font-sans mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span className="text-gray-700">/</span>
              <span className="text-[#52B788]">Projects</span>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Portfolio</span>
            </div>
            <h1 className="font-display text-[54px] lg:text-[80px] text-white uppercase leading-none tracking-tight mb-4">
              Our Projects
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-sans">
              Completed &amp; ongoing infrastructure works - canal, irrigation, earthwork &amp; redevelopment across UP &amp; MP.
            </p>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <div className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-10">
            {[
              [projects.length.toString(),                                                'Total Projects'],
              [projects.filter((p) => p.status === 'completed').length.toString(),       'Completed'],
              [projects.filter((p) => p.status === 'ongoing').length.toString(),         'Ongoing'],
              [Array.from(new Set(projects.map((p) => p.category))).length.toString(),   'Work Categories'],
            ].map(([v, l]) => (
              <div key={l} className="flex items-center gap-3">
                <span className="font-display text-2xl text-white">{v}</span>
                <span className="text-gray-500 text-[11px] uppercase tracking-widest font-sans">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filters ── */}
        <div className="border-b border-white/[0.06] bg-[#050d1a] sticky top-[80px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-6">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] uppercase tracking-widest font-sans font-semibold px-4 py-1.5 border transition-colors duration-150 ${
                    activeCategory === cat
                      ? 'border-[#52B788] text-[#52B788]'
                      : 'border-white/10 text-gray-500 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat === 'all' ? 'All' : (CATEGORY_LABELS[cat] || cat)}
                </button>
              ))}
            </div>

            {/* Status filter */}
            <div className="flex gap-2 ml-auto">
              {['all', 'completed', 'ongoing'].map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveStatus(s)}
                  className={`text-[11px] uppercase tracking-widest font-sans font-semibold px-4 py-1.5 border transition-colors duration-150 ${
                    activeStatus === s
                      ? s === 'completed' ? 'border-[#52B788] text-[#52B788]' : s === 'ongoing' ? 'border-amber-500 text-amber-400' : 'border-[#52B788] text-[#52B788]'
                      : 'border-white/10 text-gray-500 hover:text-white hover:border-white/30'
                  }`}
                >
                  {s === 'all' ? 'All Status' : s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Projects grid ── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="py-24 text-center text-gray-500 font-sans text-sm uppercase tracking-widest">
                No projects match the selected filters.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
                {filtered.map((project) => (
                  <div key={project.slug} className="group bg-[#040c18] hover:bg-[#071526] transition-colors duration-300 flex flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={project.featured_image || 'https://picsum.photos/800/450?random=50'}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040c18] via-transparent to-transparent opacity-60" />
                      {/* Category pill */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#040c18]/80 text-[#52B788] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border border-[#52B788]/30">
                          {CATEGORY_LABELS[project.category] || project.category || 'Infrastructure'}
                        </span>
                      </div>
                      {/* Status badge */}
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

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="font-display text-[20px] text-white uppercase tracking-wide mb-2 leading-tight group-hover:text-[#52B788] transition-colors">
                        {project.title}
                      </h3>

                      {/* Meta row */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        {project.location && (
                          <span className="flex items-center gap-1.5 text-gray-500 text-[11px] font-sans uppercase tracking-wide">
                            <svg className="w-3 h-3 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {project.location}
                          </span>
                        )}
                        {project.project_value && (
                          <span className="text-gray-500 text-[11px] font-sans uppercase tracking-wide">
                            {project.project_value}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed font-sans mb-6 flex-1">
                        {project.excerpt}
                      </p>

                      {project.client && (
                        <p className="text-gray-600 text-[11px] font-sans uppercase tracking-widest mb-5 border-t border-white/5 pt-4">
                          Client: <span className="text-gray-400">{project.client}</span>
                        </p>
                      )}

                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-1.5 text-[#52B788] text-[11px] uppercase tracking-widest font-sans font-semibold mt-auto hover:text-white transition-colors"
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

        {/* ── CTA ── */}
        <section className="py-20 bg-[#050d1a] border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-[40px] lg:text-[54px] text-white uppercase leading-none mb-6">
              Have a Project?
            </h2>
            <p className="text-gray-400 text-base mb-10 leading-relaxed font-sans">
              Share your tender or project brief. We respond within 24 hours.
            </p>
            <Link href="/contact-us" className="btn-primary">Discuss Your Project</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
