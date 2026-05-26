import { useState } from 'react'
import Link from 'next/link'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'

const contactCards = [
  {
    label: 'Call Us',
    value: '+91 945 311 1377',
    sub: 'Mon–Sat, 9 AM – 6 PM',
    href: 'tel:+919453111377',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    label: 'Email Us',
    value: 'contact@waveearthinfratech.com',
    sub: 'We respond within 24 hours',
    href: 'mailto:contact@waveearthinfratech.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    label: 'Registered Office',
    value: 'M38, Sector-12 Pratap Vihar',
    sub: 'Ghaziabad, Uttar Pradesh 201309',
    href: 'https://maps.google.com/?q=Pratap+Vihar+Ghaziabad+UP',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    sub: 'Quick enquiries & project updates',
    href: 'https://wa.me/919453111377?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services.',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  },
]

const FORMSPREE = 'https://formspree.io/f/mayzlgke'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputCls = 'w-full bg-theme-card border border-theme-border/10 text-theme-fg placeholder-theme-fg-3 text-sm px-4 py-3 focus:outline-none focus:border-[#52B788]/50 transition-colors'

  return (
    <>
      <Meta
        title="Contact Us | Wave Earth Infratech"
        description="Contact Wave Earth Infratech for canal construction, irrigation infrastructure, and rural development projects across Uttar Pradesh and Madhya Pradesh."
      />
      <Header />

      {/* HERO */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden bg-theme-surface">
        <img
          src="https://picsum.photos/1600/600?random=55"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/80 to-transparent" />
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-theme-base"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-40 w-full">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#52B788]" />
            <span className="text-[#52B788] text-[13px] font-semibold uppercase tracking-[0.25em]">We&apos;d Love to Hear From You</span>
          </div>
          <h1 className="font-display text-[52px] sm:text-[70px] lg:text-[88px] font-bold text-white uppercase leading-[0.92] tracking-tight mb-6">
            Contact<br />
            <span className="text-[#52B788]">Us</span>
          </h1>
          <nav className="flex items-center gap-2 text-xs text-gray-600 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#52B788]">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-20 bg-theme-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-[#0B2545] border border-white/5 p-7 flex flex-col gap-4 hover:border-[#52B788]/30 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-[#52B788]/10 border border-[#52B788]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={c.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-1">{c.label}</p>
                  <p className="text-white font-semibold text-sm leading-snug group-hover:text-[#52B788] transition-colors">{c.value}</p>
                  <p className="text-gray-500 text-[11px] mt-1">{c.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-20 bg-theme-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] font-semibold uppercase tracking-[0.25em]">Send a Message</span>
              </div>
              <h2 className="font-display text-[36px] lg:text-[48px] font-bold text-theme-fg uppercase leading-none mb-8">
                Let&apos;s Discuss<br />
                <span className="text-theme-fg-2">Your Project</span>
              </h2>

              {status === 'success' ? (
                <div className="bg-[#52B788]/10 border border-[#52B788]/30 p-8 text-center">
                  <svg className="w-12 h-12 text-[#52B788] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-theme-fg font-semibold text-lg mb-1">Message Sent</p>
                  <p className="text-theme-fg-3 text-sm">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }} className="mt-6 text-[#52B788] text-xs uppercase tracking-widest hover:underline">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your Name *" required className={inputCls} />
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email Address *" required className={inputCls} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone Number" className={inputCls} />
                    <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" className={inputCls} />
                  </div>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message *" required rows={6} className={inputCls + ' resize-none'} />
                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-[#52B788] hover:bg-[#2D6A4F] disabled:opacity-60 text-white text-[13px] font-semibold uppercase tracking-[0.1em] px-10 py-4 transition-colors duration-200"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-[#0B2545] border border-white/5 p-8 flex flex-col gap-6">
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">Office Details</h3>
                <div className="space-y-5 text-sm">
                  <div className="flex gap-4">
                    <svg className="w-5 h-5 text-[#52B788] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Registered Office</p>
                      <p className="text-white leading-relaxed">M38, Sector-12 Pratap Vihar<br />Ghaziabad, Uttar Pradesh 201309</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <svg className="w-5 h-5 text-[#52B788] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                      <a href="tel:+919453111377" className="text-white hover:text-[#52B788] transition-colors">+91 945 311 1377</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <svg className="w-5 h-5 text-[#52B788] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:contact@waveearthinfratech.com" className="text-white hover:text-[#52B788] transition-colors break-all">contact@waveearthinfratech.com</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <svg className="w-5 h-5 text-[#52B788] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Working Hours</p>
                      <p className="text-white">Monday to Saturday<br />9:00 AM to 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919453111377?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-semibold text-sm uppercase tracking-[0.1em] py-4 transition-colors duration-200"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK ZONES STRIP */}
      <section className="py-14 bg-theme-card border-y border-theme-border/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Primary State', value: 'Uttar Pradesh' },
              { label: 'Secondary State', value: 'Madhya Pradesh' },
              { label: 'Districts Covered', value: '20+ Districts' },
              { label: 'Response Time', value: 'Within 24 hrs' },
            ].map(({ label, value }) => (
              <div key={label} className="border-r border-theme-border/5 last:border-0 px-4">
                <p className="text-[11px] text-theme-fg-3 uppercase tracking-widest mb-1.5">{label}</p>
                <p className="font-display text-base font-semibold text-[#52B788] uppercase">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
