import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const defaultSEO = {
  title: "Shree Ram Nasha Mukti Kendra | Best Rehabilitation Centre in Akbarpur",
  description: "Shree Ram Nasha Mukti Kendra is the best drug and alcohol rehabilitation centre in Akbarpur, Uttar Pradesh. We provide professional addiction treatment with 15+ years experience and 5000+ successful recoveries.",
  keywords: "Nasha Mukti Kendra Akbarpur, Drug Rehabilitation Centre, Alcohol De Addiction Centre, Rehabilitation Centre Near Me"
};

function SEOHead({ title, description, keywords }: SEOHeadProps) {
  const location = useLocation();
  const siteUrl = "https://shreeramnashamukti.com";
  const canonicalUrl = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    const pageTitle = title ? `${title} | Shree Ram Nasha Mukti Kendra` : defaultSEO.title;
    const pageDesc = description || defaultSEO.description;
    const pageKeywords = keywords || defaultSEO.keywords;

    document.title = pageTitle;

    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('description', pageDesc);
    updateMeta('keywords', pageKeywords);

    updateMeta('og:title', pageTitle);
    updateMeta('og:description', pageDesc);
    updateMeta('og:url', canonicalUrl);
    updateMeta('twitter:title', pageTitle);
    updateMeta('twitter:description', pageDesc);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

  }, [title, description, keywords, canonicalUrl]);

  return null;
}

export default SEOHead;
