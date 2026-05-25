import Header from '@components/Header'
import Footer from '@components/Footer'
import Meta from '@components/Meta'

export default function EquipmentPage() {
  return (
    <>
      <Meta title="Equipment | Wave Earth Infratech" description="Equipment page for Wave Earth Infratech." />
      <Header />
      <main className="min-h-screen flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Equipment</h1>
          <p className="text-gray-500">Content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
