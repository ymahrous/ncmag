import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ncmag.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://ncmag.vercel.app/world",
      lastModified: new Date(),
    },
    {
      url: "https://ncmag.vercel.app/politics",
      lastModified: new Date(),
    },
    {
      url: "https://ncmag.vercel.app/business",
      lastModified: new Date(),
    },
    {
      url: "https://ncmag.vercel.app/technology",
      lastModified: new Date(),
    },
    {
      url: "https://ncmag.vercel.app/sports",
      lastModified: new Date(),
    },
    {
      url: "https://ncmag.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://ncmag.vercel.app/contact",
      lastModified: new Date(),
    },
    {
      url: "https://ncmag.vercel.app/help",
      lastModified: new Date(),
    },
    {
      url: "https://ncmag.vercel.app/terms",
      lastModified: new Date(),
    },
    {
      url: "https://ncmag.vercel.app/privacy",
      lastModified: new Date(),
    },
  ];
};