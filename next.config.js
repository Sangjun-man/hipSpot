/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack");
module.exports = {
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    console.log(process.env);
    return [
      {
        destination: process.env.DESTINATION_URL,
        source: process.env.SOURCE_PATH,
      },
    ];
  },
  webpack(config) {
    config.plugins.push(new Dotenv({ silent: true }));
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
