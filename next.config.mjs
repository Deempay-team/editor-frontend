// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.

    // Alternative: If you want to use both SVG as components and as files
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            oneOf: [
                {
                    resourceQuery: /react/, // *.svg?react
                    use: ['@svgr/webpack'],
                },
                {
                    type: 'asset/resource',
                },
            ],
        });
        return config;
    },
};

export default nextConfig