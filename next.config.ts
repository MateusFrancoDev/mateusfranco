import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // permite importar dentro de tsx/jsx
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
