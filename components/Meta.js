import Head from 'next/head'
import { CONTACT, COMPANY } from '../data/siteConstants'

export default function Meta({
  title = 'Wave Earth Infratech | Canal & Irrigation Infrastructure Contractor - UP, MP',
  description = 'Wave Earth Infratech executes canal construction, nahar lining, irrigation works, and rural redevelopment projects for government departments and NGOs across Uttar Pradesh and Madhya Pradesh.',
  ogImage = '/images/logo.png',
}) {
  const siteUrl = 'https://www.waveearthinfratech.com'

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon */}
      <link rel="icon" href="/images/fevicon.png" type="image/png" />
      <link rel="shortcut icon" href="/images/fevicon.png" />
      <link rel="apple-touch-icon" href="/images/fevicon.png" />

      {/* SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Wave Earth Infratech" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Schema.org Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: COMPANY.legalName,
            url: siteUrl,
            logo: `${siteUrl}/images/logo.png`,
            description,
            address: {
              '@type': 'PostalAddress',
              streetAddress: CONTACT.address1,
              addressLocality: CONTACT.city,
              addressRegion: CONTACT.state,
              postalCode: CONTACT.pincode,
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: CONTACT.phoneTel,
              contactType: 'customer service',
              email: CONTACT.email,
            },
          }),
        }}
      />
    </Head>
  )
}
