/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/news",
        destination: "http://localhost:3001/news",
      },
    ];
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "container",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          app1: `app1@https://microfrontend-next-poc-app1.vercel.app/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        shared: ["react", "react-dom", "next"],
      })
    );
    if (!isServer) {
      config.output.publicPath = "http://localhost:3000/_next/";
    }

    return config;
  },
};

module.exports = nextConfig;
