// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});


module.exports = withBundleAnalyzer(nextConfig);
