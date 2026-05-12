import type { MetadataRoute } from "next";
<<<<<<< HEAD
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
=======

const siteUrl = "https://www.preetisemwal.in";
const lastModified = new Date();

const routes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/intuitive-healing",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/womb-healing",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/book-a-session",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/corporate-workshop",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/testimonials",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.7,
  },
] satisfies Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
>>>>>>> 0f621f16fb3f14ca9ea639f567958291b840ec8a
  }));
}
