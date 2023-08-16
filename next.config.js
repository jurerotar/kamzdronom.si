// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
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
