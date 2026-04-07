import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/onlinefreeinvoice",
        destination: "/products/inn-professionals",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
