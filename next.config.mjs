/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Esto es para que next nos genere las paginas estaticas
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
