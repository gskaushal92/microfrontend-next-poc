/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "app1",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Blog": "./src/components/Blog",
        },
        shared: ["react", "react-dom", "next"],
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );
    if (!isServer) {
      config.output.publicPath = "http://localhost:3001/_next/";
    }

    return config;
  },
};

module.exports = nextConfig
