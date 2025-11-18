import React from 'react'
import { config } from '../config'

const SEO = () => {
  const title = `${config.BUSINESS_NAME} — Friendly dentist in ${config.CITY}`
  const description = `Compassionate dental care in ${config.CITY}. Same-week appointments, modern treatments, and a team that makes you comfortable.`
  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : 'https://yourdomain.com'

  return (
    <>
      {/* Update meta tags dynamically */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.title = ${JSON.stringify(title)};
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) metaDescription.content = ${JSON.stringify(description)};
            const canonical = document.querySelector('link[rel="canonical"]');
            if (canonical) canonical.href = ${JSON.stringify(canonicalUrl)};
          `,
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': canonicalUrl,
            name: config.BUSINESS_NAME,
            description: description,
            image: config.LOGO_URL && !config.LOGO_URL.startsWith('{{') ? config.LOGO_URL : undefined,
            telephone: config.PHONE,
            email: config.EMAIL,
            address: {
              '@type': 'PostalAddress',
              streetAddress: config.ADDRESS_LINE,
              addressLocality: config.CITY,
            },
            geo: {
              '@type': 'GeoCoordinates',
              // Add coordinates if available
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00',
              },
            ],
            priceRange: '$$',
            areaServed: {
              '@type': 'City',
              name: config.CITY,
            },
            // Add services schema
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Dental Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'General Dentistry',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Teeth Whitening',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Cosmetic Dentistry',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Dental Implants',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Emergency Care',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Orthodontics',
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}

export default SEO

