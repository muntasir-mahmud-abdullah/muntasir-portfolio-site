export default function sitemap() {
    const baseUrl = 'https://yoursite.com';

    const routes = ['', '/about', '/work', '/contact'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Add project pages
    const projectSlugs = ['e-commerce-platform', 'water-management-system', 'task-management-app', 'portfolio-website'];
    const projects = projectSlugs.map((slug) => ({
        url: `${baseUrl}/work/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...routes, ...projects];
}
