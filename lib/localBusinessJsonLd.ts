import { SHOP } from '@/lib/branding'

function siteOrigin(): string {
  const w = SHOP.website
  if (typeof w === 'string' && w.length > 0) {
    return w.replace(/\/$/, '')
  }
  return 'https://www.patelnastahub.com'
}

export function localBusinessJsonLd() {
  const origin = siteOrigin()
  const website = typeof SHOP.website === 'string' && SHOP.website.length > 0 ? SHOP.website : origin

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${origin}/#restaurant`,
    name: SHOP.nameLatin,
    alternateName: SHOP.name,
    url: website,
    telephone: SHOP.phoneTel,
    
    image: `${origin}${SHOP.logoSrc}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SHOP.addressLines.join(', '),
      addressLocality: 'Chhapra',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    servesCuisine: 'Gujarati',
    priceRange: '₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '07:00',
        closes: '22:00',
      },
    ],
    sameAs: [SHOP.instagramUrl, SHOP.mapsUrl].filter(
      (u): u is string => typeof u === 'string' && u.length > 0,
    ),
  }
}
