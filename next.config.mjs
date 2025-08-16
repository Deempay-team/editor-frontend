// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // distDir: "./dist", // Changes the build output directory to `./dist/`.

  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Alternative: If you want to use both SVG as components and as files
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /react/, // *.svg?react
          use: ["@svgr/webpack"],
        },
        {
          type: "asset/resource",
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
