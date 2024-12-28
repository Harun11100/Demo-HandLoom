const nextConfig = {
  // Add custom config options here if needed
  reactStrictMode: false, // Disables React's strict mode
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript build errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during builds
  },
};

module.exports = nextConfig;
