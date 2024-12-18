import { Metadata } from 'next'

export const getMetadata = (params: {
  title?: string
  description?: string
  path?: string
}): Metadata => {
  const baseTitle = 'AaierIt - Web Development & SEO Services'
  const baseDescription = 'Professional web development, SEO optimization, and digital marketing services to help your business grow online.'
  const baseUrl = 'https://aaierit.com'

  return {
    title: params.title ? `${params.title} | ${baseTitle}` : baseTitle,
    description: params.description || baseDescription,
    keywords: 'web development, SEO, digital marketing, website design, online marketing, AaierIt',
    authors: [{ name: 'AaierIt Team' }],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: params.path ? `${baseUrl}${params.path}` : baseUrl,
    },
    openGraph: {
      title: params.title || baseTitle,
      description: params.description || baseDescription,
      url: params.path ? `${baseUrl}${params.path}` : baseUrl,
      siteName: 'AaierIt',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'AaierIt - Web Development & SEO Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: params.title || baseTitle,
      description: params.description || baseDescription,
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}