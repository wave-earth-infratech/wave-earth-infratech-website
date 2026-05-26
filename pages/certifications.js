import Header from '@components/Header'
import Footer from '@components/Footer'
import Meta from '@components/Meta'

export default function CertificationsPage() {
  return (
    <>
      <Meta title="Certifications | Wave Earth Infratech" description="Certifications page for Wave Earth Infratech." />
      <Header />
      <main className="min-h-screen flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Certifications</h1>
          <p className="text-theme-fg-3">Content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

