// Canonical origin for metadata, sitemap and robots. Trailing slashes are stripped so
// paths join cleanly (an env value of "https://example.com/" used to produce "//projects").
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-khuzemah-saeed.vercel.app").replace(
  /\/+$/,
  ""
);
