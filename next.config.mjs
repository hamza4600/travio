import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",

});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { remotePatterns: [{ hostname: "cdn.sanity.io" }, { hostname: 'images.unsplash.com' }] },
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
};

export default bundleAnalyzer(nextConfig);
