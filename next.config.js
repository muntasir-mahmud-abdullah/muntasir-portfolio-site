/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 768, 1024, 1280, 1536],
    },
    compress: true,
    reactStrictMode: true,
}

module.exports = nextConfig
