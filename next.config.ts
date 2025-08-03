import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    domains: [
      'avatars.mds.yandex.net',
      'yandex-images.clstorage.net',
      'wvzkeyvrqdpnvvzsvtiq.supabase.co'
    ],
  },
}

export default nextConfig;
