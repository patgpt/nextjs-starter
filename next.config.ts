import type { NextConfig } from "next";

process.env.NEXT_DISABLE_LIGHTNINGCSS ??= "1";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
