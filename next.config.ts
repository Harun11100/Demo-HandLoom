const nextConfig = {
  // Add custom config options here if needed
  reactStrictMode: false, 
  typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'handloom.store',
        port: '',
        pathname: '/wp-content/uploads/', // Allow any path under /wp-content/uploads/
        search: '',
      },
    ],
  },
};

module.exports = nextConfig;
