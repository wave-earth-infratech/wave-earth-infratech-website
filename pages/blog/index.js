import Header from '@components/Header'
import Footer from '@components/Footer'
import Meta from '@components/Meta'

export default function BlogPage() {
  return (
    <>
      <Meta title="Blog | Wave Earth Infratech" description="Infrastructure insights and project updates from Wave Earth Infratech." />
      <Header />
      <main className="min-h-screen flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Blog</h1>
          <p className="text-gray-500">Articles and updates coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
