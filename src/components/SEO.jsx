import React from 'react'
import { useLocation } from 'react-router-dom'
import { config } from '../config'

// SEO metadata for each route
const getPageMetadata = (pathname) => {
  const baseTitle = config.BUSINESS_NAME
  const city = config.CITY

  const metadataMap = {
    '/': {
      title: `${baseTitle}`,
      description: `Experienced legal representation in ${city}. Business law, personal injury, criminal defense, and more. Free consultations available.`
    },
    '/general-dentistry': {
      title: `Business Law Services in ${city} | ${baseTitle}`,
      description: `Expert business law services in ${city}. Entity formation, contracts, employment law, and intellectual property. Strategic legal counsel for your business.`
    },
    '/cosmetic-whitening': {
      title: `Personal Injury Attorneys in ${city} | ${baseTitle}`,
      description: `Experienced personal injury lawyers in ${city}. Motor vehicle accidents, slip and fall, workplace injuries. Free consultation. Maximum compensation for your injuries.`
    },
    '/specialized-care': {
      title: `Criminal Defense Attorneys in ${city} | DUI, Drug Crimes & More | ${baseTitle}`,
      description: `Aggressive criminal defense representation in ${city}. DUI/DWI, drug crimes, assault, white-collar crimes. Free consultation. Protecting your rights and freedom.`
    },
    '/general-dentistry/routine-cleanings-exams': {
      title: `Entity Formation Services in ${city} | ${baseTitle}`,
      description: `Business entity formation in ${city}. Corporations, LLCs, partnerships. Expert guidance on choosing the right business structure. Free consultation.`
    },
    '/general-dentistry/fillings-restorations': {
      title: `Contract Services in ${city} | ${baseTitle}`,
      description: `Expert contract drafting and review in ${city}. Employment agreements, vendor contracts, service agreements. Protect your business interests.`
    },
    '/general-dentistry/root-canal-therapy': {
      title: `Employment Law Services in ${city} | ${baseTitle}`,
      description: `Employment law counsel in ${city}. Employment contracts, workplace policies, compliance, and dispute resolution. Protect your business.`
    },
    '/general-dentistry/gum-disease-treatment': {
      title: `Intellectual Property Services in ${city} | ${baseTitle}`,
      description: `Intellectual property protection in ${city}. Trademarks, copyrights, trade secrets, and licensing. Protect your valuable business assets.`
    },
    '/cosmetic-whitening/teeth-whitening': {
      title: `Motor Vehicle Accident Attorneys in ${city} | ${baseTitle}`,
      description: `Experienced car accident lawyers in ${city}. Maximum compensation for motor vehicle accidents. Free consultation. No fee unless we win.`
    },
    '/cosmetic-whitening/dental-veneers': {
      title: `Slip and Fall Accident Lawyers in ${city} | ${baseTitle}`,
      description: `Premises liability attorneys in ${city}. Slip and fall accidents, property owner negligence. Free consultation. Recover compensation for your injuries.`
    },
    '/cosmetic-whitening/dental-bonding': {
      title: `Workplace Injury Attorneys in ${city} | ${baseTitle}`,
      description: `Workplace injury lawyers in ${city}. Construction accidents, industrial injuries, workers' compensation. Free consultation.`
    },
    '/cosmetic-whitening/smile-makeover': {
      title: `Wrongful Death Attorneys in ${city} | ${baseTitle}`,
      description: `Compassionate wrongful death representation in ${city}. Hold negligent parties accountable. Free consultation. Financial support for your family.`
    },
    '/specialized-care/dental-implants': {
      title: `DUI/DWI Defense Attorneys in ${city} | ${baseTitle}`,
      description: `Experienced DUI/DWI defense lawyers in ${city}. Protect your license and minimize consequences. Free consultation. Aggressive defense representation.`
    },
    '/specialized-care/emergency-care': {
      title: `Drug Crime Defense Attorneys in ${city} | ${baseTitle}`,
      description: `Criminal defense for drug charges in ${city}. Possession, distribution, trafficking. Free consultation. Protect your rights and freedom.`
    },
    '/specialized-care/orthodontics': {
      title: `Assault & Violent Crime Defense in ${city} | ${baseTitle}`,
      description: `Aggressive defense for assault and violent crime charges in ${city}. Self-defense, false accusations. Free consultation. Protect your future.`
    },
    '/specialized-care/periodontal-treatment': {
      title: `White-Collar Crime Defense in ${city} | ${baseTitle}`,
      description: `Expert white-collar crime defense in ${city}. Fraud, embezzlement, money laundering. Free consultation. Protect your reputation and freedom.`
    },
    '/our-practice': {
      title: `About Our Firm | ${baseTitle} — ${city} Law Firm`,
      description: `Learn about ${baseTitle} in ${city}. Our experienced attorneys, proven track record, and commitment to providing exceptional legal representation.`
    },
    '/reviews': {
      title: `Client Reviews & Testimonials | ${baseTitle} — ${city}`,
      description: `Read real client reviews and testimonials about ${baseTitle} in ${city}. See why our clients trust us with their legal needs.`
    },
    '/contact': {
      title: `Contact Us | ${baseTitle} — ${city} Law Office`,
      description: `Contact ${baseTitle} in ${city}. Schedule a free consultation, ask questions, or visit our office. We're here to help with all your legal needs.`
    },
    '/blog': {
      title: `Legal Blog & Updates | ${baseTitle} — ${city}`,
      description: `Legal insights, case updates, and helpful information from ${baseTitle} in ${city}. Stay informed about your rights and legal matters.`
    }
  }

  // Check for location pages
  if (pathname.startsWith('/locations/')) {
    const slug = pathname.split('/locations/')[1]
    const location = config.LOCATIONS?.find(loc => loc.slug === slug)
    if (location) {
      return {
        title: `${location.name} | ${baseTitle} — ${location.city}`,
        description: `Visit ${baseTitle} at ${location.name} in ${location.city}. ${location.address}, ${location.city}. Contact us at ${location.phone} to schedule your free consultation.`
      }
    }
  }

  // Return metadata for the current path or default
  return metadataMap[pathname] || metadataMap['/']
}

const SEO = () => {
  const location = useLocation()
  const { title, description } = getPageMetadata(location.pathname)
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
            
            // Update Open Graph tags
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) ogTitle.content = ${JSON.stringify(title)};
            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) ogDescription.content = ${JSON.stringify(description)};
            const ogUrl = document.querySelector('meta[property="og:url"]');
            if (ogUrl) ogUrl.content = ${JSON.stringify(canonicalUrl)};
            
            // Update Twitter tags
            const twitterTitle = document.querySelector('meta[name="twitter:title"]');
            if (twitterTitle) twitterTitle.content = ${JSON.stringify(title)};
            const twitterDescription = document.querySelector('meta[name="twitter:description"]');
            if (twitterDescription) twitterDescription.content = ${JSON.stringify(description)};
          `,
        }}
      />

      {/* LegalService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
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
                opens: '09:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '10:00',
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
              name: 'Legal Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Business Law',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Personal Injury',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Criminal Defense',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Family Law',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Estate Planning',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Real Estate Law',
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

