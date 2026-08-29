import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Rob-Stickler-Resume.pdf",
        permanent: false,
      },
      {
        source: "/artifacts",
        destination: "/proof",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
