const fs = require('fs');
const path = require('path');

// Configuration - UPDATE THIS with your actual domain
const SITE_URL = process.env.SITE_URL || 'https://cluechart.com';

// Routes configuration based on app.routes.ts
// Format: { path, priority, changefreq, lastmod }
const routes = [
  { path: '', priority: '1.0', changefreq: 'daily', lastmod: new Date().toISOString().split('T')[0] },
  { path: 'how-it-works', priority: '0.8', changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: 'pricing', priority: '0.9', changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: 'start-up', priority: '0.8', changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: 'marketing', priority: '0.8', changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: 'start-local-business', priority: '0.8', changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: 'team', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: 'privacy-policy', priority: '0.3', changefreq: 'yearly', lastmod: new Date().toISOString().split('T')[0] },
  { path: 'uml-detail', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
];

function generateSitemap() {
  const urlsetStart = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  const urlsetEnd = `</urlset>`;

  const urls = routes
    .map((route) => {
      const url = route.path === '' ? SITE_URL : `${SITE_URL}/${route.path}`;
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join('\n');

  const sitemap = urlsetStart + urls + '\n' + urlsetEnd;

  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`✅ Sitemap generated successfully at: ${sitemapPath}`);
  console.log(`   Site URL: ${SITE_URL}`);
  console.log(`   Total URLs: ${routes.length}`);
}

generateSitemap();
