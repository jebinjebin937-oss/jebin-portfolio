import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jebin-portfolio-ten.vercel.app",
      lastModified: new Date(),
    },
  ];
}