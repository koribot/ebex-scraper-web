/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'i.ebayimg.com',
    port: '',
    pathname: '/**',
   },
   {
    protocol: 'https',
    hostname: 'ir.ebaystatic.com',
    port: '',
    pathname: '/**',
   },
  ],
 },
}

module.exports = nextConfig
