/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    if (process.env.NODE_ENV == "development") {
      return {
        beforeFiles: [
          {
            destination: process.env.DESTINATION_URL,
            source: process.env.SOURCE_PATH,
          },
        ],
      };
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
