import Link from 'next/link'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getProjectSlugs, getProject, getAllProjects } from '@lib/content'

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

export async function getStaticPaths() {
  const slugs = getProjectSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const project = await getProject(params.slug)
  if (!project) return { notFound: true }

  // Build next/prev links
  const all   = getAllProjects()
  const idx   = all.findIndex((p) => p.slug === params.slug)
  const prev  = idx > 0                ? { slug: all[idx - 1].slug, title: all[idx - 1].title } : null
  const next  = idx < all.length - 1  ? { slug: all[idx + 1].slug, title: all[idx + 1].title } : null

  return { props: { project, prev, next } }
}

export default function ProjectDetail({ project, prev, next }) {
  const categoryLabel = CATEGORY_LABELS[project.category] || project.category || 'Infrastructure'
  const isCompleted   = project.status === 'completed'

  return (
    <>
      <Head>
        <title>{project.title} | Projects - Wave Earth Infratech</title>
        <meta name="description" content={project.excerpt || ''} />
      </Head>

      <Header />

      <main className="bg-[#040c18] text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <img
            src={project.featured_image || 'https://picsum.photos/1600/700?random=50'}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040c18] via-[#040c18]/60 to-[#040c18]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040c18]/80 to-transparent" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40">
            <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-500 font-sans mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span className="text-gray-700">/</span>
              <Link href="/projects" className="hover:text-[#52B788] transition-colors">Projects</Link>
              <span className="text-gray-700">/</span>
              <span className="text-[#52B788] truncate max-w-[200px]">{project.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-[#040c18]/70 text-[#52B788] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border border-[#52B788]/30">
                {categoryLabel}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 ${
                isCompleted
                  ? 'bg-[#52B788]/20 text-[#52B788] border border-[#52B788]/40'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              }`}>
                {isCompleted ? 'Completed' : 'Ongoing'}
              </span>
            </div>

            <h1 className="font-display text-[40px] lg:text-[68px] text-white uppercase leading-none tracking-tight max-w-4xl mb-4">
              {project.title}
            </h1>

            {project.location && (
              <p className="text-gray-400 text-base font-sans flex items-center gap-2">
                <svg className="w-4 h-4 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </p>
            )}
          </div>
        </section>

        {/* ── Overview table ── */}
        <section className="border-b border-white/[0.06] bg-[#050d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/[0.05]">
              {[
                { label: 'Client',      value: project.client         },
                { label: 'Value',       value: project.project_value  },
                { label: 'Duration',    value: project.duration        },
                { label: 'Completed',   value: project.completion_date },
                { label: 'Category',    value: categoryLabel           },
              ].filter((r) => r.value).map(({ label, value }) => (
                <div key={label} className="bg-[#050d1a] px-6 py-5 hover:bg-[#071526] transition-colors">
                  <p className="text-[#52B788] text-[10px] uppercase tracking-widest font-semibold font-sans mb-1">{label}</p>
                  <p className="text-white text-sm font-medium font-sans leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-16">

            {/* Left - main content */}
            <div className="lg:col-span-2 space-y-14">

              {/* Excerpt / overview */}
              {(project.overview || project.excerpt) && (
                <div>
                  <h2 className="font-display text-[28px] lg:text-[36px] text-white uppercase mb-6 leading-none">Project Overview</h2>
                  <p className="text-gray-400 text-base leading-relaxed font-sans">
                    {project.overview || project.excerpt}
                  </p>
                </div>
              )}

              {/* Scope of work */}
              {project.scope_of_work?.length > 0 && (
                <div>
                  <h2 className="font-display text-[28px] lg:text-[36px] text-white uppercase mb-6 leading-none">Scope of Work</h2>
                  <ul className="space-y-2.5">
                    {project.scope_of_work.map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-[15px] font-sans leading-relaxed">
                        <svg className="w-4 h-4 text-[#52B788] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {s.item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions */}
              {project.challenges?.length > 0 && (
                <div>
                  <h2 className="font-display text-[28px] lg:text-[36px] text-white uppercase mb-6 leading-none">Challenges &amp; Solutions</h2>
                  <div className="space-y-6">
                    {project.challenges.map((c, i) => (
                      <div key={i} className="border border-white/[0.06] p-6 bg-[#050d1a]">
                        <p className="text-[#52B788] text-[11px] uppercase tracking-widest font-semibold font-sans mb-1">Challenge</p>
                        <p className="text-white text-sm font-sans mb-4">{c.challenge}</p>
                        <p className="text-[#52B788] text-[11px] uppercase tracking-widest font-semibold font-sans mb-1">Solution</p>
                        <p className="text-gray-400 text-sm font-sans">{c.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project timeline */}
              {project.timeline?.length > 0 && (
                <div>
                  <h2 className="font-display text-[28px] lg:text-[36px] text-white uppercase mb-6 leading-none">Project Timeline</h2>
                  <div className="relative pl-6 border-l border-white/[0.08] space-y-6">
                    {project.timeline.map((t, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-[#52B788] border-2 border-[#040c18]" />
                        <p className="text-[#52B788] text-[11px] uppercase tracking-widest font-semibold font-sans mb-0.5">{t.period}</p>
                        <p className="text-gray-400 text-sm font-sans">{t.activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* HTML content body */}
              {project.contentHtml && (
                <div
                  className="prose prose-invert prose-sm max-w-none font-sans"
                  dangerouslySetInnerHTML={{ __html: project.contentHtml }}
                />
              )}
            </div>

            {/* Right sidebar */}
            <div className="space-y-8">

              {/* Quantity highlights */}
              {project.quantity_highlights?.length > 0 && (
                <div className="bg-[#050d1a] border border-white/[0.06] p-6">
                  <h3 className="font-display text-[18px] text-white uppercase mb-5 tracking-wide">Key Quantities</h3>
                  <div className="space-y-3">
                    {project.quantity_highlights.map((q, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
                        <span className="text-gray-500 text-[12px] uppercase tracking-wide font-sans">{q.label}</span>
                        <span className="text-white text-sm font-semibold font-sans">{q.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Equipment used */}
              {project.equipment_used?.length > 0 && (
                <div className="bg-[#050d1a] border border-white/[0.06] p-6">
                  <h3 className="font-display text-[18px] text-white uppercase mb-5 tracking-wide">Equipment Used</h3>
                  <ul className="space-y-2">
                    {project.equipment_used.map((e, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-[13px] font-sans">
                        <svg className="w-3 h-3 text-[#52B788] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {e.equipment}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Impact points */}
              {project.impact_points?.length > 0 && (
                <div className="bg-[#0B2545] border border-[#52B788]/20 p-6">
                  <h3 className="font-display text-[18px] text-white uppercase mb-5 tracking-wide">Project Impact</h3>
                  <ul className="space-y-3">
                    {project.impact_points.map((ip, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-[13px] font-sans">
                        <svg className="w-4 h-4 text-[#52B788] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {ip.impact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="bg-[#052040] border border-white/[0.08] p-6 text-center">
                <p className="text-gray-400 text-[13px] font-sans mb-4">Need similar work executed?</p>
                <Link href="/contact-us" className="btn-primary w-full block text-center text-sm">Request Quotation</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        {project.gallery?.length > 0 && (
          <section className="pb-16 lg:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-[28px] lg:text-[36px] text-white uppercase mb-8 leading-none">Site Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/[0.04]">
                {project.gallery.map((g, i) => (
                  <div key={i} className="aspect-square overflow-hidden group">
                    <img
                      src={g.image}
                      alt={`${project.title} site photo ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Prev / Next ── */}
        {(prev || next) && (
          <section className="border-t border-white/[0.06] bg-[#050d1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 gap-4">
              <div>
                {prev && (
                  <Link href={`/projects/${prev.slug}`} className="group flex flex-col gap-1">
                    <span className="text-gray-600 text-[10px] uppercase tracking-widest font-sans flex items-center gap-1.5 group-hover:text-[#52B788] transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                      Previous
                    </span>
                    <span className="text-gray-300 text-sm font-sans group-hover:text-white transition-colors line-clamp-1">{prev.title}</span>
                  </Link>
                )}
              </div>
              <div className="text-right">
                {next && (
                  <Link href={`/projects/${next.slug}`} className="group flex flex-col gap-1 items-end">
                    <span className="text-gray-600 text-[10px] uppercase tracking-widest font-sans flex items-center gap-1.5 group-hover:text-[#52B788] transition-colors">
                      Next
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                    <span className="text-gray-300 text-sm font-sans group-hover:text-white transition-colors line-clamp-1">{next.title}</span>
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
