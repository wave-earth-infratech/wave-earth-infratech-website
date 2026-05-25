import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Canal Construction', href: '/services#canal-construction' },
      { label: 'Nahar Lining Works', href: '/services#nahar-lining' },
      { label: 'Irrigation Infrastructure', href: '/services#irrigation' },
      { label: 'Earthwork & Excavation', href: '/services#earthwork' },
      { label: 'Rural Redevelopment', href: '/services#rural' },
      { label: 'Road & Drainage Works', href: '/services#road-drainage' },
      { label: 'NGO Development Projects', href: '/services#ngo' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Tenders', href: '/tenders' },
  { label: 'Contact', href: '/contact-us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
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
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Wave Earth Infratech"
                width={220}
                height={60}
                priority
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        isActive(link.href) ? 'text-accent' : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      {link.label}
                      <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50">
                      <div className="py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-accent hover:bg-green-50 transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-1 pt-1">
                          <Link
                            href={link.href}
                            className="block px-4 py-2.5 text-sm font-semibold text-accent hover:bg-green-50 transition-colors duration-150"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-accent font-semibold'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+912583683158"
                className="text-sm text-gray-600 hover:text-primary font-medium flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 258 368 3158
              </a>
              <Link
                href="/contact-us"
                className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-dark transition-colors duration-200"
              >
                Get Quotation
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
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
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-accent hover:bg-green-50 rounded-lg transition-colors"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-accent-light ml-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-accent rounded-lg transition-colors"
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
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive(link.href)
                        ? 'bg-green-50 text-accent font-semibold'
                        : 'text-gray-700 hover:text-accent hover:bg-green-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 pb-1 border-t border-gray-100 flex gap-3">
                <a
                  href="tel:+912583683158"
                  className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-gray-700 text-sm font-medium py-2.5 rounded-lg hover:border-accent hover:text-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
                <Link
                  href="/contact-us"
                  className="flex-1 bg-accent text-white text-sm font-semibold py-2.5 rounded-lg text-center hover:bg-accent-dark transition-colors"
                >
                  Get Quotation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  )
}
