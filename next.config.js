/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    },
    experimental: {
        webpackBuildWorker: true,
      },
};

const withPWA = require("next-pwa") ({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
});

module.exports = withPWA(nextConfig);

