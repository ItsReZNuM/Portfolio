export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/static/media/", "/api/"],
      },
    ],
    sitemap: "https://reznum.ir/sitemap.xml",
    host: "https://reznum.ir",
  };
}
