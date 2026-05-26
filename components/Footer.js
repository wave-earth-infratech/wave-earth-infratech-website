import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_STATS, COMPANY } from '../data/siteConstants'

const footerLinks = {
  company: [
    { label: 'About Us',          href: '/about-wave-earth' },
    { label: 'Our Projects',      href: '/projects' },
    { label: 'Equipment',         href: '/equipment' },
    { label: 'Gallery',           href: '/gallery' },
    { label: 'Certifications',    href: '/certifications' },
    { label: 'CSR & NGO Works',   href: '/csr-ngo-works' },
    { label: 'Tenders',           href: '/tenders' },
  ],
  services: [
    { label: 'Canal Construction',        href: '/services/canal-construction' },
    { label: 'Nahar Lining Works',        href: '/services/nahar-lining' },
    { label: 'Irrigation Infrastructure', href: '/services/irrigation-infrastructure' },
    { label: 'Earthwork & Excavation',    href: '/services/earthwork-excavation' },
    { label: 'Rural Redevelopment',       href: '/services/rural-redevelopment' },
    { label: 'Water Resource Projects',   href: '/services/water-resource-projects' },
    { label: 'Road & Drainage Works',     href: '/services/road-drainage' },
    { label: 'NGO Development Projects',  href: '/services/ngo-development' },
  ],
}

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'YouTube',
    href: '#',
    icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919453111377?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services.',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <footer className="bg-theme-base text-theme-fg">

        {/* ── Top accent bar ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#52B788]/40 to-transparent" />

        {/* ── Main content ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Col 1 - Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="block mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Wave Earth Infratech"
                  width={180}
                  height={50}
                  className="h-11 w-auto object-contain footer-logo hover:opacity-100 transition-opacity"
                />
              </Link>

              {/* Est. badge */}
              <div className="flex items-center gap-2 border border-theme-border/10 px-3 py-1.5 mb-4 w-fit">
                <span className="w-1.5 h-1.5 bg-[#52B788]" />
                <span className="text-[11px] text-theme-fg-2 uppercase tracking-widest font-sans">{COMPANY.estLabel}</span>
              </div>

              <p className="text-theme-fg-3 text-sm leading-relaxed mb-6 max-w-xs">
                {COMPANY.legalName} - serious infrastructure execution across
                Uttar Pradesh &amp; Madhya Pradesh {COMPANY.sinceLabel}.
              </p>

              {/* Stats mini strip */}
              <div className="flex gap-6 mb-6 border-t border-theme-border/5 pt-5">
                {FOOTER_STATS.map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-xl font-bold text-theme-fg">{v}</div>
                    <div className="text-[10px] text-theme-fg-3 uppercase tracking-widest">{l}</div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="flex items-center gap-2">
                {socials.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-9 h-9 bg-theme-border/5 hover:bg-[#52B788] border border-theme-border/5 hover:border-[#52B788] flex items-center justify-center transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d={icon} /></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 - Company */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-px bg-[#52B788]" />
                <h4 className="font-display text-sm font-semibold text-theme-fg uppercase tracking-[0.2em]">Company</h4>
              </div>
              <ul className="space-y-2.5">
                {footerLinks.company.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-theme-fg-3 text-xs hover:text-[#52B788] transition-colors duration-150 flex items-center gap-2 group font-sans uppercase tracking-wide"
                    >
                      <svg className="w-2.5 h-2.5 text-theme-fg-3 group-hover:text-[#52B788] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 - Services */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-px bg-[#52B788]" />
                <h4 className="font-display text-sm font-semibold text-theme-fg uppercase tracking-[0.2em]">Services</h4>
              </div>
              <ul className="space-y-2.5">
                {footerLinks.services.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-theme-fg-3 text-xs hover:text-[#52B788] transition-colors duration-150 flex items-center gap-2 group font-sans uppercase tracking-wide"
                    >
                      <svg className="w-2.5 h-2.5 text-theme-fg-3 group-hover:text-[#52B788] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 - Contact */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-px bg-[#52B788]" />
                <h4 className="font-display text-sm font-semibold text-theme-fg uppercase tracking-[0.2em]">Contact</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <svg className="w-4 h-4 text-[#52B788] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-theme-fg-3 text-xs leading-relaxed font-sans">
                    Wave Earth Infratech<br />
                    M38, Sector-12 Pratap Vihar<br />
                    Ghaziabad, UP 201309
                  </span>
                </li>
                <li>
                  <a href="tel:+919453111377" className="flex gap-3 items-center text-theme-fg-3 text-xs hover:text-[#52B788] transition-colors font-sans">
                    <svg className="w-4 h-4 text-[#52B788] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 945 311 1377
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@waveearthinfratech.com" className="flex gap-3 items-start text-theme-fg-3 text-xs hover:text-[#52B788] transition-colors break-all font-sans">
                    <svg className="w-4 h-4 text-[#52B788] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@waveearthinfratech.com
                  </a>
                </li>
                <li className="pt-1">
                  <a
                    href="https://wa.me/919453111377?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-theme-border/[0.05] bg-theme-base">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-theme-fg-3 text-[11px] font-sans uppercase tracking-wider">
              &copy; {year} {COMPANY.legalName}. All rights reserved.
              <span className="mx-2 text-theme-fg-3">|</span>
              Pvt. Ltd. · {COMPANY.estLabel}
              <span className="mx-2 text-theme-fg-3">|</span>
              MSME Registered
              <span className="mx-2 text-theme-fg-3">|</span>
              GST Compliant
            </p>
            <div className="flex items-center gap-5">
              {[
                { label: 'Privacy Policy',      href: '/privacy-policy' },
                { label: 'Terms & Conditions',  href: '/terms-and-conditions' },
                { label: 'Tenders',             href: '/tenders' },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="text-theme-fg-3 text-[11px] hover:text-[#52B788] transition-colors uppercase tracking-wider font-sans">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating action buttons (all pages) ── */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
        <a
          href="tel:+919453111377"
          aria-label="Call Wave Earth Infratech"
          className="w-12 h-12 bg-[#0B2545] hover:bg-[#0f2d5a] border border-white/10 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-200 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <a
          href="https://wa.me/919453111377?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 bg-[#25D366] hover:bg-[#1db954] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all duration-200 hover:scale-110"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  )
}
