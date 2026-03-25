/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my_website",
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = nextConfig;
