export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AaierIt',
    url: 'https://aaierit.com',
    logo: 'https://aaierit.com/logo.png',
    sameAs: [
      'https://twitter.com/aaierit',
      'https://facebook.com/aaierit',
      'https://linkedin.com/company/aaierit',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'contact@aaierit.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
  }
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: 'AaierIt',
    },
    serviceType: ['Web Development', 'SEO Services', 'Digital Marketing'],
    areaServed: 'Worldwide',
    description: 'Professional web development, SEO optimization, and digital marketing services.',
  }
}