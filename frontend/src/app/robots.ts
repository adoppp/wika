import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXTAUTH_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/uk/', '/ru/'],
      disallow: '/admin/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
