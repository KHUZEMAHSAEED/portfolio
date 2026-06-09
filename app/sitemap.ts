import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://khuzemah.growthpulse.space",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}