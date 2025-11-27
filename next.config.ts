import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'https://gyhxweugupovdqyadnoq.supabase.co/auth/v1/:path*',
      },
      {
        source: '/api/rest/:path*',
        destination: 'https://gyhxweugupovdqyadnoq.supabase.co/rest/v1/:path*',
      },
    ]
  },
};

export default nextConfig;
