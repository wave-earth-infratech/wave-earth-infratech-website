import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about-wave-earth' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Canal Construction',       href: '/services#canal-construction' },
      { label: 'Nahar Lining Works',       href: '/services#nahar-lining' },
      { label: 'Irrigation Infrastructure',href: '/services#irrigation' },
      { label: 'Earthwork & Excavation',   href: '/services#earthwork' },
      { label: 'Rural Redevelopment',      href: '/services#rural' },
      { label: 'Road & Drainage Works',    href: '/services#road-drainage' },
      { label: 'NGO Development Projects', href: '/services#ngo' },
    ],
  },
  { label: 'Projects',  href: '/projects' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Gallery',   href: '/gallery' },
  { label: 'Tenders',   href: '/tenders' },
  { label: 'Contact',   href: '/contact-us' },
]

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [router.pathname])

  const isActive = (href) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050d1a]/97 backdrop-blur-md border-b border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
            : 'bg-[#050d1a] border-b border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <Image
                src="/images/logo.png"
                alt="Wave Earth Infratech"
                width={200}
                height={55}
                priority
                className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200 ${
                        isActive(link.href) ? 'text-[#52B788]' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <svg className="w-3 h-3 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      className="absolute left-0 top-full mt-0 w-60 bg-[#0a1628]
                                 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                                 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                 translate-y-3 group-hover:translate-y-0 transition-all duration-200 z-50"
                    >
                      {/* Top accent line */}
                      <div className="h-px bg-[#52B788]" />
                      <div className="py-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-2.5 px-5 py-2.5 text-[11px] text-gray-400 hover:text-white hover:bg-white/[0.04] transition-colors uppercase tracking-wider"
                          >
                            <span className="w-1 h-1 bg-[#52B788] flex-shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                        <div className="border-t border-white/5 mx-4 mt-2 pt-2">
                          <Link
                            href={link.href}
                            className="flex items-center gap-1.5 px-1 py-2 text-[11px] text-[#52B788] hover:text-white transition-colors uppercase tracking-widest font-semibold"
                          >
                            View All Services
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-3 py-2 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200 ${
                      isActive(link.href) ? 'text-[#52B788]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-[#52B788]" />
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact-us"
                className="bg-[#52B788] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-[#2D6A4F] transition-colors duration-200"
              >
                Get Quotation
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
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

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#040c18] border-t border-white/5 max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full px-3 py-3 text-[11px] font-semibold text-gray-400 hover:text-white uppercase tracking-widest transition-colors"
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180 text-[#52B788]' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 mt-1 mb-1 space-y-0.5 border-l border-[#52B788]/30 ml-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2.5 text-[11px] text-gray-500 hover:text-[#52B788] uppercase tracking-wider transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`block px-3 py-3 text-[11px] font-semibold uppercase tracking-widest transition-colors ${
                      isActive(link.href)
                        ? 'text-[#52B788] border-l border-[#52B788] pl-4'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
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
                  className="flex-1 bg-[#52B788] text-white text-[11px] font-bold py-3 text-center hover:bg-[#2D6A4F] transition-colors uppercase tracking-widest"
                >
                  Get Quotation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Header height spacer - removed intentionally so hero section sits flush behind transparent header */}
    </>
  )
}
