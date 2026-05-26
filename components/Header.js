import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

// ── Services mega-menu: 3 columns ─────────────────────────────────────────────
const SERVICE_COLS = [
  [
    { label: 'Canal Construction & Repair', href: '/services/canal-construction' },
    { label: 'Nahar Lining Works',          href: '/services/nahar-lining' },
    { label: 'Irrigation Infrastructure',   href: '/services/irrigation-infrastructure' },
  ],
  [
    { label: 'Earthwork & Excavation',      href: '/services/earthwork-excavation' },
    { label: 'Concrete Structures',         href: '/services/concrete-structures' },
    { label: 'Road & Drainage Works',       href: '/services/road-drainage' },
  ],
  [
    { label: 'Rural Redevelopment',         href: '/services/rural-redevelopment' },
    { label: 'NGO Development Projects',    href: '/services/ngo-development' },
    { label: 'Water Resource Projects',     href: '/services/water-resource-projects' },
    { label: 'Civil Maintenance',           href: '/services/civil-maintenance' },
  ],
]

// ── Top-level navigation ──────────────────────────────────────────────────────
const NAV = [
  { label: 'Home',    href: '/' },
  { label: 'About',   href: '/about-wave-earth' },
  { label: 'Services', href: '/services', mega: true },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'All Projects',        href: '/projects' },
      { label: 'Completed Projects',  href: '/projects' },
      { label: 'Ongoing Projects',    href: '/projects' },
      { label: 'Canal Projects',      href: '/projects' },
      { label: 'Irrigation Projects', href: '/projects' },
      { label: 'Redevelopment Works', href: '/projects' },
    ],
  },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'Equipment',       href: '/equipment' },
      { label: 'Gallery',         href: '/gallery' },
      { label: 'Tenders',         href: '/tenders' },
      { label: 'Certifications',  href: '/certifications' },
      { label: 'CSR & NGO Works', href: '/csr-ngo-works' },
    ],
  },
  { label: 'Contact', href: '/contact-us' },
]

const COMPANY_PATHS = ['/equipment', '/gallery', '/tenders', '/certifications', '/csr-ngo-works']

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [theme,        setTheme]        = useState('dark')
  const router = useRouter()

  // Initialise theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const preferred = saved || 'dark'
    setTheme(preferred)
    if (preferred === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    if (next === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [router.pathname])

  const isActive = (link) => {
    if (link.mega) return router.pathname.startsWith('/services')
    if (link.label === 'Company') return COMPANY_PATHS.some((p) => router.pathname.startsWith(p))
    if (link.label === 'Projects') return router.pathname.startsWith('/projects')
    return link.href === '/'
      ? router.pathname === '/'
      : router.pathname.startsWith(link.href)
  }

  const navBtnClass = (active) =>
    `relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold tracking-[1.5px] uppercase transition-colors duration-200 ${
      active ? 'text-[#52B788]' : 'text-gray-400 hover:text-white'
    }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'h-16 bg-[#050d1a]/97 backdrop-blur-md border-b border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
            : 'h-[78px] bg-[#050d1a] border-b border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-full gap-6">

            {/* ── Logo ── */}
            <Link href="/" className="flex-shrink-0 group">
              <Image
                src="/images/logo.png"
                alt="Wave Earth Infratech"
                width={180}
                height={48}
                priority
                className="h-12 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* ── Desktop navigation ── */}
            <nav className="hidden lg:flex items-center justify-center" aria-label="Main navigation">

              {NAV.map((link) => {

                /* ── Services mega menu ────────────────────────────────── */
                if (link.mega) {
                  const active = isActive(link)
                  return (
                    <div key={link.label} className="relative group">
                      <button className={navBtnClass(active)}>
                        {link.label}
                        <svg className="w-3 h-3 mt-px opacity-60 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                        {active && (
                          <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-[#52B788]" />
                        )}
                      </button>

                      {/* Mega panel — 3 columns */}
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[820px]
                                   bg-[#071526] border border-white/[0.08]
                                   shadow-[0_24px_64px_rgba(0,0,0,0.75)]
                                   opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                   translate-y-3 group-hover:translate-y-0 transition-all duration-200 z-50"
                      >
                        <div className="h-[2px] bg-gradient-to-r from-[#52B788] via-[#52B788]/60 to-transparent" />
                        <div className="p-5 grid grid-cols-3 gap-x-4">
                          {SERVICE_COLS.map((col, ci) => (
                            <div key={ci} className={`space-y-0.5 ${ci < 2 ? 'border-r border-white/[0.05] pr-4' : ''}`}>
                              {col.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`flex items-center gap-2 px-2 py-2 text-[11px] tracking-[1px] uppercase transition-colors rounded-sm whitespace-nowrap ${
                                    router.pathname === item.href
                                      ? 'text-[#52B788] bg-[#52B788]/5'
                                      : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                                  }`}
                                >
                                  <span className="w-1 h-1 rounded-full bg-[#52B788] flex-shrink-0 opacity-70" />
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-white/[0.06] px-5 py-3 flex items-center justify-end">
                          <Link
                            href="/services"
                            className="flex items-center gap-1.5 text-[11px] text-[#52B788] hover:text-white transition-colors uppercase tracking-widest font-semibold"
                          >
                            View All Services
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                }

                /* ── Dropdown (Projects / Company) ─────────────────────── */
                if (link.children) {
                  const active = isActive(link)
                  return (
                    <div key={link.label} className="relative group">
                      <button className={navBtnClass(active)}>
                        {link.label}
                        <svg className="w-3 h-3 mt-px opacity-60 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                        {active && (
                          <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-[#52B788]" />
                        )}
                      </button>

                      <div
                        className="absolute left-0 top-full mt-0 w-56
                                   bg-[#071526] border border-white/[0.08]
                                   shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                                   opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                   translate-y-3 group-hover:translate-y-0 transition-all duration-200 z-50"
                      >
                        <div className="h-[2px] bg-gradient-to-r from-[#52B788] via-[#52B788]/60 to-transparent" />
                        <div className="py-2.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`flex items-center gap-2.5 px-5 py-2.5 text-[11px] tracking-[1px] uppercase transition-colors whitespace-nowrap ${
                                router.pathname === child.href && child.href !== '/projects'
                                  ? 'text-[#52B788] bg-[#52B788]/5'
                                  : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                              }`}
                            >
                              <span className="w-1 h-1 rounded-full bg-[#52B788]/60 flex-shrink-0" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                }

                /* ── Plain link ───────────────────────────────────────── */
                const active = isActive(link)
                return (
                  <Link key={link.label} href={link.href} className={navBtnClass(active)}>
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-[#52B788]" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              {/* Theme switcher */}
              <button
                onClick={toggleTheme}
                className="text-gray-400 hover:text-[#52B788] transition-colors p-2"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  /* Sun icon — click to go light */
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 3v1m0 16v1m8.66-9H21M3 12H2m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
                  </svg>
                ) : (
                  /* Moon icon — click to go dark */
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>
              <Link
                href="/contact-us"
                className="bg-[#52B788] text-[#040c18] text-[11px] font-bold uppercase tracking-[1.5px] px-5 py-2.5 hover:bg-[#3da876] transition-colors duration-200 whitespace-nowrap"
              >
                Get Quotation
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors col-start-3"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#040c18] border-t border-white/5 max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-0.5">
              {NAV.map((link) => {
                const mobileChildren = link.mega ? SERVICE_COLS.flat() : link.children

                if (mobileChildren) {
                  const active = isActive(link)
                  return (
                    <div key={link.label}>
                      <button
                        className={`flex items-center justify-between w-full px-3 py-3 text-[13px] font-semibold uppercase tracking-[1.5px] transition-colors ${
                          active ? 'text-[#52B788]' : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === link.label ? 'rotate-180 text-[#52B788]' : 'opacity-40'
                          }`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {openDropdown === link.label && (
                        <div className="pl-4 mt-1 mb-2 space-y-0.5 border-l border-[#52B788]/30 ml-3">
                          {mobileChildren.map((child) => (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className={`block px-3 py-2.5 text-[11px] uppercase tracking-wider transition-colors ${
                                router.pathname === child.href
                                  ? 'text-[#52B788]'
                                  : 'text-gray-500 hover:text-[#52B788]'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                          {link.mega && (
                            <Link
                              href="/services"
                              className="block px-3 py-2.5 text-[11px] text-[#52B788] uppercase tracking-wider font-semibold"
                            >
                              View All Services →
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`block px-3 py-3 text-[13px] font-semibold uppercase tracking-[1.5px] transition-colors ${
                      isActive(link)
                        ? 'text-[#52B788] border-l border-[#52B788] pl-4'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              {/* Mobile CTAs */}
              <div className="pt-4 pb-2 border-t border-white/5 flex gap-3 mt-4">
                <a
                  href="tel:+912583683158"
                  className="flex-1 flex items-center justify-center gap-2 border border-white/10 text-gray-300 text-[11px] font-semibold py-3 hover:border-[#52B788]/50 hover:text-white transition-colors uppercase tracking-widest"
                >
                  <svg className="w-4 h-4 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
                <Link
                  href="/contact-us"
                  className="flex-1 bg-[#52B788] text-[#040c18] text-[11px] font-bold py-3 text-center hover:bg-[#3da876] transition-colors uppercase tracking-widest"
                >
                  Get Quotation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
