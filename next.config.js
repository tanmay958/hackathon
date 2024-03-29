/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "qph.cf2.quoracdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.thequint.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
