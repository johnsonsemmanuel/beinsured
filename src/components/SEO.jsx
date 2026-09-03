import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.beinsured.com';

const SEO = ({
  title = 'BeInsured | Simple, Reliable Insurance Made for Real Life',
  description = 'BeInsured provides verifiable digital micro-insurance across MTN MoMo, WhatsApp, and USSD (*170#). Verify legitimacy, explore coverage, and manage claims effortlessly.',
  keywords = 'BeInsured, motor insurance, micro insurance, Ghana, MTN MoMo, WhatsApp, USSD, car insurance, digital insurance',
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false
}) => {
  const fullCanonicalUrl = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : BASE_URL;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />

      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'}
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="BeInsured" />
      <meta property="og:locale" content="en_GH" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(structuredData)
              ? {
                  '@context': 'https://schema.org',
                  '@graph': structuredData.map(item => {
                    const { '@context': _, ...rest } = item;
                    return rest;
                  }),
                }
              : structuredData
          )}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
