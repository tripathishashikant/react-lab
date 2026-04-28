import { Helmet } from 'react-helmet-async';
import { useLocation, useMatches } from 'react-router-dom';

/**
 * SEO component that dynamically updates document head tags based on the current route.
 * It extracts metadata from the route 'handle' property.
 */
const SEO = ({ 
  title: defaultTitle = 'React Lab',
  description: defaultDescription = 'A playground for learning React concepts through interactive examples.',
  siteName = 'React Lab',
}) => {
  const { pathname } = useLocation();
  const matches = useMatches();

  // Find the deepest match with a handle that has metadata
  const lastMatch = [...matches].reverse().find(m => m.handle?.seo || m.handle?.feature || m.handle?.docPage || m.handle?.example);
  
  let title = defaultTitle;
  let description = defaultDescription;
  const canonical = `${window.location.origin}${pathname}`;

  if (lastMatch) {
    const { seo, feature, docPage, example } = lastMatch.handle;
    
    if (seo) {
      title = seo.title ? `${seo.title} | ${siteName}` : title;
      description = seo.description || description;
    } else if (example) {
      title = `${example.title} | ${feature?.title || 'Example'} | ${siteName}`;
      description = example.description || description;
    } else if (feature) {
      title = `${feature.title} | ${siteName}`;
      description = feature.description || description;
    } else if (docPage) {
      const docId = lastMatch.params?.docId;
      if (docId) {
        // We need to import getDocById or just title-case the ID if we want to avoid imports
        // But importing is better for accuracy.
        const titleCase = (s) => s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        title = `${titleCase(docId)} Component | ${siteName}`;
      } else {
        title = `Components Overview | ${siteName}`;
      }
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={lastMatch?.handle?.seo?.robots || 'index, follow'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${window.location.origin}/react.svg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${window.location.origin}/react.svg`} />
    </Helmet>
  );
};

export default SEO;
