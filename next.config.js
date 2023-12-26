/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagine.studio']
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig