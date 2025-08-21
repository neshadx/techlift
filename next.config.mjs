// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['lh3.googleusercontent.com'],
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "lh3.googleusercontent.com", // Google profile images
//       },
//       {
//         protocol: "https",
//         hostname: "i.postimg.cc", // Postimages hosted images
//       },
//     ],
//   },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Either keep domains (simple) or remotePatterns. Domains is fine here.
    domains: [
      "lh3.googleusercontent.com", // Google avatars
      "i.ibb.co",                  // old ibb images (current error)
      "i.postimg.cc"              // Postimages (new host you plan to use)
    ],
    // If you prefer remotePatterns instead of domains, tell me—I’ll switch it.
  },
};

export default nextConfig;

