/** @type {import('next').NextConfig} */
module.exports = {
  darkMode: 'class',
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
    ],
  },
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
    storyblokPageVersion: process.env.STORYBLOK_PAGE_VERSION,
    storyblokPreviewURLBase: process.env.STORYBLOK_PREVIEW_URL_BASE,
    storyblokSpaceID: process.env.STORYBLOK_SPACE_ID
  },
};
