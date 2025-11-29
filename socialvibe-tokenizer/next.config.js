/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      layers: true,
    };
    return config;
  },
};

module.exports = nextConfig;
