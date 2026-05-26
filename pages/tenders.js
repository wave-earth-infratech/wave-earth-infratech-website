import { useState, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Turnstile from '@components/Turnstile'

// Static tender data - replace with real tender details
const ACTIVE_TENDERS = [
  {
    id: 'TND-2025-001',
    title: 'Canal Lining Works - Phase II',
    dept: 'UP Sinchai Vibhag',
    location: 'Hamirpur, UP',
    estimatedValue: '₹ 1.8 Cr',
    lastDate: '2025-09-30',
    status: 'Open',
    description: 'RCC lining of 4.2 km of secondary canal including concrete works, earthwork, and quality testing.',
    doc: '#',
  },
  {
    id: 'TND-2025-002',
    title: 'Desilting & Restoration - Minor Irrigation Channels',
    dept: 'UP Jal Nigam',
    location: 'Jhansi, UP',
    estimatedValue: '₹ 65 Lakhs',
    lastDate: '2025-10-15',
    status: 'Open',
    description: 'Desilting, bank repair, and partial lining of minor irrigation channels across 3 blocks.',
    doc: '#',
  },
  {
    id: 'TND-2025-003',
    title: 'Embankment Construction - Water Resource Project',
    dept: 'MP Water Resources Department',
    location: 'Satna, MP',
    estimatedValue: '₹ 3.2 Cr',
    lastDate: '2025-11-01',
    status: 'Evaluation',
    description: 'Earthwork for embankment construction including compaction, surface treatment, and slope protection.',
    doc: '#',
  },
]

const STATUS_STYLES = {
  'Open': 'bg-[#52B788]/20 text-[#52B788] border-[#52B788]/40',
  'Evaluation': 'bg-amber-500/20 text-amber-400 border-amber-500/40',
  'Closed': 'bg-theme-fg-3/20 text-theme-fg-3 border-theme-fg-3/20',
  'Awarded': 'bg-blue-500/20 text-blue-400 border-blue-500/40',
}

const DOWNLOADS = [
  { name: 'Company Profile (PDF)', size: '2.4 MB', type: 'Profile', link: '#' },
  { name: 'Equipment List (PDF)', size: '0.8 MB', type: 'Equipment', link: '/equipment' },
  { name: 'Certifications & Registrations (PDF)', size: '1.2 MB', type: 'Compliance', link: '/certifications' },
  { name: 'Past Performance Statement (PDF)', size: '1.0 MB', type: 'Track Record', link: '#' },
]

export default function TendersPage() {
  const [inviteForm, setInviteForm] = useState({ name: '', org: '', email: '', phone: '', projectType: '', location: '', value: '', deadline: '', description: '' })
  const [inviteStatus, setInviteStatus] = useState(null)
  const [inviteToken, setInviteToken] = useState('')
  const inviteRef = useRef(null)

  const [vendorForm, setVendorForm] = useState({ company: '', contact: '', email: '', phone: '', category: '', regNo: '', address: '' })
  const [vendorStatus, setVendorStatus] = useState(null)
  const [vendorToken, setVendorToken] = useState('')
  const vendorRef = useRef(null)

  const handleInviteChange = (e) => setInviteForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleVendorChange = (e) => setVendorForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleInviteSubmit = async (e) => {
    e.preventDefault()
    if (!inviteToken) return
    setInviteStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'invite', token: inviteToken, ...inviteForm }),
      })
      if (res.ok) {
        setInviteStatus('sent')
      } else {
        setInviteStatus('error')
        inviteRef.current?.reset()
        setInviteToken('')
      }
    } catch {
      setInviteStatus('error')
      inviteRef.current?.reset()
      setInviteToken('')
    }
  }

  const handleVendorSubmit = async (e) => {
    e.preventDefault()
    if (!vendorToken) return
    setVendorStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'vendor', token: vendorToken, ...vendorForm }),
      })
      if (res.ok) {
        setVendorStatus('sent')
      } else {
        setVendorStatus('error')
        vendorRef.current?.reset()
        setVendorToken('')
      }
    } catch {
      setVendorStatus('error')
      vendorRef.current?.reset()
      setVendorToken('')
    }
  }

  return (
    <>
      <Head>
        <title>Tenders & Procurement | Current Opportunities - Wave Earth Infratech</title>
        <meta name="description" content="Current tender opportunities and procurement notices from Wave Earth Infratech. Invite us to tender or register as a sub-contractor / vendor." />
      </Head>

      <Header />

      <main className="bg-theme-base text-theme-fg min-h-screen">

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/placeholder.svg" alt="Tender documents" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/95 via-[#050d1a]/80 to-[#050d1a]/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/50 font-sans mb-10" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#52B788] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#52B788]">Tenders</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Procurement</span>
            </div>
            <h1 className="font-display text-[54px] lg:text-[80px] text-white uppercase leading-none tracking-tight mb-6 max-w-4xl">
              Tenders & Procurement
            </h1>
            <p className="text-white/70 text-xl max-w-2xl leading-relaxed font-sans">
              Active opportunities, invite-to-tender enquiries, and vendor registration.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#invite" className="btn-primary">Invite Us to Tender</a>
              <a href="#vendor" className="border border-white/30 text-white text-[11px] font-sans uppercase tracking-widest px-8 py-3 hover:border-white hover:bg-white/10 transition-colors">Register as Vendor</a>
            </div>
          </div>
        </section>

        {/* ── Active Tenders ── */}
        <section className="py-20 bg-theme-base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Opportunities</span>
            </div>
            <h2 className="font-display text-[42px] text-theme-fg uppercase leading-none mb-10">
              Active Tenders
            </h2>
            {ACTIVE_TENDERS.length > 0 ? (
              <div className="space-y-0 border border-theme-border/[0.06]">
                {ACTIVE_TENDERS.map((t, i) => (
                  <div key={t.id} className={`p-8 border-b border-theme-border/[0.06] hover:bg-theme-card transition-colors last:border-b-0 ${i % 2 === 0 ? 'bg-theme-base' : 'bg-theme-surface'}`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-[10px] font-mono text-theme-fg-3 font-sans">{t.id}</span>
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 border ${STATUS_STYLES[t.status] || STATUS_STYLES['Open']}`}>
                            {t.status}
                          </span>
                        </div>
                        <h3 className="font-display text-[22px] text-theme-fg uppercase tracking-wide mb-2 leading-snug">{t.title}</h3>
                        <p className="text-theme-fg-3 text-sm font-sans mb-4">{t.description}</p>
                        <div className="flex flex-wrap gap-6">
                          <div>
                            <span className="text-[10px] uppercase tracking-widest font-sans text-theme-fg-3">Dept</span>
                            <p className="text-theme-fg-2 text-sm font-sans">{t.dept}</p>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest font-sans text-theme-fg-3">Location</span>
                            <p className="text-theme-fg-2 text-sm font-sans">{t.location}</p>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest font-sans text-theme-fg-3">Est. Value</span>
                            <p className="text-theme-fg font-display text-[16px]">{t.estimatedValue}</p>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest font-sans text-theme-fg-3">Last Date</span>
                            <p className="text-theme-fg-2 text-sm font-sans">{t.lastDate}</p>
                          </div>
                        </div>
                      </div>
                      {t.doc !== '#' && (
                        <a href={t.doc} className="flex-shrink-0 flex items-center gap-2 text-[#52B788] text-[11px] uppercase tracking-widest font-sans font-semibold hover:text-theme-fg transition-colors" download>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download NIT
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-theme-border/[0.06] p-16 text-center bg-theme-surface">
                <p className="text-theme-fg-3 font-sans text-sm">No active tender notices at this time. Check back soon or register below to be notified.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── Downloads ── */}
        <section className="py-16 bg-theme-surface border-t border-theme-border/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-px bg-[#52B788]" />
              <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Documents</span>
            </div>
            <h2 className="font-display text-[36px] text-theme-fg uppercase leading-none mb-8">Tender Documentation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-theme-border/[0.05]">
              {DOWNLOADS.map((d) => (
                <a
                  key={d.name}
                  href={d.link}
                  className="group bg-theme-surface hover:bg-theme-card border border-theme-border/[0.06] p-7 flex flex-col gap-4 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <svg className="w-8 h-8 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[10px] uppercase tracking-widest font-sans text-theme-fg-3">{d.type}</span>
                  </div>
                  <p className="font-display text-[15px] text-theme-fg uppercase tracking-wide leading-snug group-hover:text-[#52B788] transition-colors">{d.name}</p>
                  <p className="text-theme-fg-3 text-[11px] font-sans">{d.size}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Invite to Tender Form ── */}
        <section id="invite" className="py-20 bg-theme-base border-t border-theme-border/[0.06]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Invite Us</span>
                <span className="w-8 h-px bg-[#52B788]" />
              </div>
              <h2 className="font-display text-[42px] text-theme-fg uppercase leading-none mb-4">Invite Us to Tender</h2>
              <p className="text-theme-fg-2 font-sans leading-relaxed">Share your project brief and we will submit a competitive tender within the deadline.</p>
            </div>

            {inviteStatus === 'sent' ? (
              <div className="bg-[#52B788]/10 border border-[#52B788]/30 p-8 text-center">
                <p className="text-theme-fg font-display text-[20px] uppercase mb-2">Invitation Received</p>
                <p className="text-theme-fg-2 font-sans text-sm">We will acknowledge within 1 working day and confirm our intent to tender.</p>
              </div>
            ) : (
              <form onSubmit={handleInviteSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Your Name *</label>
                    <input required name="name" value={inviteForm.name} onChange={handleInviteChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Organisation *</label>
                    <input required name="org" value={inviteForm.org} onChange={handleInviteChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Email *</label>
                    <input required type="email" name="email" value={inviteForm.email} onChange={handleInviteChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Phone *</label>
                    <input required type="tel" name="phone" value={inviteForm.phone} onChange={handleInviteChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Project Type *</label>
                    <input required name="projectType" value={inviteForm.projectType} onChange={handleInviteChange} placeholder="e.g. Canal Lining, Earthwork" className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg placeholder-theme-fg-3/50 px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Location *</label>
                    <input required name="location" value={inviteForm.location} onChange={handleInviteChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Estimated Value</label>
                    <input name="value" value={inviteForm.value} onChange={handleInviteChange} placeholder="e.g. ₹2 Crore" className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg placeholder-theme-fg-3/50 px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Tender Deadline</label>
                    <input type="date" name="deadline" value={inviteForm.deadline} onChange={handleInviteChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Project Description *</label>
                  <textarea required rows={4} name="description" value={inviteForm.description} onChange={handleInviteChange} className="w-full bg-theme-surface border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors resize-none" />
                </div>
                <Turnstile ref={inviteRef} onVerify={setInviteToken} />
                {inviteStatus === 'error' && <p className="text-red-400 text-sm font-sans">Something went wrong. Please try again.</p>}
                <button type="submit" disabled={inviteStatus === 'sending' || !inviteToken} className="btn-primary w-full disabled:opacity-50">
                  {inviteStatus === 'sending' ? 'Sending...' : 'Submit Tender Invitation'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── Vendor Registration Form ── */}
        <section id="vendor" className="py-20 bg-theme-surface border-t border-theme-border/[0.06]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#52B788]" />
                <span className="text-[#52B788] text-[13px] uppercase tracking-[0.2em] font-sans font-semibold">Sub-contractors & Vendors</span>
                <span className="w-8 h-px bg-[#52B788]" />
              </div>
              <h2 className="font-display text-[42px] text-theme-fg uppercase leading-none mb-4">Register as Vendor</h2>
              <p className="text-theme-fg-2 font-sans leading-relaxed">We work with reliable sub-contractors and material suppliers. Register your company for future procurement opportunities.</p>
            </div>

            {vendorStatus === 'sent' ? (
              <div className="bg-[#52B788]/10 border border-[#52B788]/30 p-8 text-center">
                <p className="text-theme-fg font-display text-[20px] uppercase mb-2">Registration Received</p>
                <p className="text-theme-fg-2 font-sans text-sm">We will add you to our vendor list and reach out when relevant opportunities arise.</p>
              </div>
            ) : (
              <form onSubmit={handleVendorSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Company Name *</label>
                    <input required name="company" value={vendorForm.company} onChange={handleVendorChange} className="w-full bg-theme-base border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Contact Person *</label>
                    <input required name="contact" value={vendorForm.contact} onChange={handleVendorChange} className="w-full bg-theme-base border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Email *</label>
                    <input required type="email" name="email" value={vendorForm.email} onChange={handleVendorChange} className="w-full bg-theme-base border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Phone *</label>
                    <input required type="tel" name="phone" value={vendorForm.phone} onChange={handleVendorChange} className="w-full bg-theme-base border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Category / Work Type *</label>
                    <input required name="category" value={vendorForm.category} onChange={handleVendorChange} placeholder="e.g. Concrete Works, Material Supply, Earthwork" className="w-full bg-theme-base border border-theme-border/10 focus:border-[#52B788] text-theme-fg placeholder-theme-fg-3/50 px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">GST / Reg. Number</label>
                    <input name="regNo" value={vendorForm.regNo} onChange={handleVendorChange} className="w-full bg-theme-base border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-sans text-theme-fg-3 mb-2">Base Location / Operating Area *</label>
                  <input required name="address" value={vendorForm.address} onChange={handleVendorChange} className="w-full bg-theme-base border border-theme-border/10 focus:border-[#52B788] text-theme-fg px-4 py-3 text-sm font-sans outline-none transition-colors" />
                </div>
                <Turnstile ref={vendorRef} onVerify={setVendorToken} />
                {vendorStatus === 'error' && <p className="text-red-400 text-sm font-sans">Something went wrong. Please try again.</p>}
                <button type="submit" disabled={vendorStatus === 'sending' || !vendorToken} className="btn-primary w-full disabled:opacity-50">
                  {vendorStatus === 'sending' ? 'Sending...' : 'Submit Vendor Registration'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#2D6A4F]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-[40px] lg:text-[54px] text-white uppercase leading-none mb-6">Any Other Procurement Queries?</h2>
            <p className="text-white/80 text-base mb-10 font-sans">Reach out directly - we are straightforward to deal with.</p>
            <Link href="/contact-us" className="btn-primary">Get in Touch</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

