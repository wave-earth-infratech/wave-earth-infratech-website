// This file exists only to redirect /services to the real services page at pages/services/index.js
// Next.js cannot have both pages/services.js and pages/services/index.js serving the same route.
// This redirect ensures any direct hit to /services.js goes to the correct page.
export async function getStaticProps() {
  return { redirect: { destination: '/services', permanent: true } }
}
export default function ServicesRedirect() { return null }

