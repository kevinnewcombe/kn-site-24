/** @type {import('next').NextConfig} */
module.exports = {
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
    postmarkServerToken: process.env.POSTMARK_SERVER_TOKEN,
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY, // process.env.recaptchaSiteKey
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY // process.env.recaptchaSecretKey
  },
};
