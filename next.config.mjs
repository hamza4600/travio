/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },
    swcMinify: true,
    compiler: {
      styledComponents: true,
    },
};

export default nextConfig;
