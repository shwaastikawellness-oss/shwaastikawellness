import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

const routes = [
  "",
  "/about",
  "/book-a-session",
  "/corporate-workshop",
  "/inner-clarity-session",
  "/intuitive-healing",
  "/testimonials",
  "/womb-healing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
