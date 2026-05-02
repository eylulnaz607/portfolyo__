/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath ve assetPrefix tanımlarını tam ve eksiksiz olarak belirtiyoruz
  basePath: '/portfolyo__',
  assetPrefix: '/portfolyo__/', 
  trailingSlash: true, // URL yönlendirmelerinin sonuna slash (/) ekleyerek 404 hatalarını önler
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig 