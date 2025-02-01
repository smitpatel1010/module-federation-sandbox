import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remoteApp",
        dts: true,
        filename: `static/chunks/remoteEntry.js`,
        exposes: {
          "./Header": "./src/components/Header.tsx",
          // has to define .js extension for not failing type generation
          "./Tester": "./src/components/tester.js",
        },
        extraOptions: {
          exposePages: true,
          debug: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;
