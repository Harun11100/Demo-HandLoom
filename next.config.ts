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
      domains: ['handloom.store']
  
  },
};

module.exports = nextConfig;
