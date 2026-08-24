import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Rob-Stickler-Resume.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
