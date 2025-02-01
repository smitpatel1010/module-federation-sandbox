import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host-docs",
        dts: true,
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          remoteApp: `remoteApp@http://localhost:3000/_next/static/${
            options.isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        shared: {
          "ui-base": {
            singleton: true,
          },
          "ui-base/": {
            singleton: true,
          }
        },
        extraOptions: {},
      })
    );
    return config;
  },
};

export default nextConfig;
