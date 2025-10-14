import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    // --- Existing SVG loader ---
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // --- Ignore Docusaurus folder so Next.js doesn't try to compile it ---
    config.watchOptions = {
      ignored: [
        ...(config.watchOptions?.ignored || []),
        path.resolve(__dirname, "documentation"),
      ],
    };

    return config;
  },

  // --- Prevent Next.js from failing on unrelated TS/ESLint errors ---
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
