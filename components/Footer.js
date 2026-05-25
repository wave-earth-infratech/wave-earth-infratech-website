import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Equipment', href: '/equipment' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'CSR & NGO Works', href: '/csr-ngo-works' },
  ],
  services: [
    { label: 'Canal Construction', href: '/services#canal-construction' },
    { label: 'Nahar Lining Works', href: '/services#nahar-lining' },
    { label: 'Irrigation Infrastructure', href: '/services#irrigation' },
    { label: 'Earthwork & Excavation', href: '/services#earthwork' },
    { label: 'Rural Redevelopment', href: '/services#rural' },
    { label: 'Road & Drainage Works', href: '/services#road-drainage' },
    { label: 'NGO Development Projects', href: '/services#ngo' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <footer className="bg-primary text-white">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Column 1 - Brand */}
            <div className="lg:col-span-1">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Wave Earth Infratech"
                  width={180}
                  height={50}
                  className="h-12 w-auto object-contain brightness-0 invert mb-4"
                />
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mt-3 mb-5">
                Building sustainable infrastructure for rural India. Canal development, irrigation works, and
                rural redevelopment across UP and MP.
              </p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {[
                  { href: '#', label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  { href: '#', label: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                  { href: 'https://wa.me/912583683158', label: 'WhatsApp', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
                ].map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d={icon} /></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Company */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-gray-300 text-sm hover:text-accent-light transition-colors duration-150 flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-accent-light rounded-full flex-shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-gray-300 text-sm hover:text-accent-light transition-colors duration-150 flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-accent-light rounded-full flex-shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Wave Earth Infratech<br />M38, Sector-12 Pratap Vihar<br />Ghaziabad, UP 201309</span>
                </li>
                <li>
                  <a href="tel:+912583683158" className="flex gap-3 hover:text-accent-light transition-colors">
                    <svg className="w-5 h-5 text-accent-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 258 368 3158
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@waveearthinfratech.com" className="flex gap-3 hover:text-accent-light transition-colors break-all">
                    <svg className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@waveearthinfratech.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/912583683158?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200 w-fit"
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

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <p>© {year} Wave Earth Infratech. All rights reserved. | MSME Registered | GST Compliant</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-accent-light transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-accent-light transition-colors">Terms &amp; Conditions</Link>
              <Link href="/tenders" className="hover:text-accent-light transition-colors">Tenders</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp + Call buttons (global, all pages) */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
        <a
          href="tel:+912583683158"
          aria-label="Call Wave Earth Infratech"
          className="w-12 h-12 bg-primary hover:bg-primary-light text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <a
          href="https://wa.me/912583683158?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  )
}
