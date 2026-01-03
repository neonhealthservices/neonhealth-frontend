import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-matched-path',
            value: ':path*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
