export default function sitemap() {
  const baseUrl = "https://reznum.ir";
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resume", priority: 0.8, changeFrequency: "monthly" },
    { path: "/work", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        fa: `${baseUrl}${route.path}`,
        en: `${baseUrl}${route.path}?lang=en`,
        "x-default": `${baseUrl}${route.path}`,
      },
    },
  }));
}
