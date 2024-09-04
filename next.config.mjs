/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "picsum.photos",
      },
    ],
  },
  transpilePackages: ["geist"],
};

export default nextConfig;
