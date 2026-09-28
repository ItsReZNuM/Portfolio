export default function sitemap() {
  const baseUrl = "https://reznum.ir";
  const routes = ["", "/services", "/resume", "/work", "/contact"];

  return routes.flatMap((route) => [
    {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          fa: `${baseUrl}${route}?lang=fa`,
          en: `${baseUrl}${route}?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}${route}?lang=fa`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 0.9 : 0.7,
    },
    {
      url: `${baseUrl}${route}?lang=en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 0.9 : 0.7,
    },
  ]);
}
