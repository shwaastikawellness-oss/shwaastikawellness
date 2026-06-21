export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  image: string;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "rethinking-safety",
    title: "Rethinking Safety: A Holistic Approach to Personal Security",
    category: "Holistic Safety",
    excerpt:
      "Safety is not about men vs women. It is about staying aware, alert and keeping presence of mind — and more importantly, feeling safe within.",
    readingTime: "8 min read",
    image: "/images/Blog/rethinking blog.jpeg",
  },
  {
    slug: "yog-the-ultimate-guide",
    title: "Yog: The Ultimate Guide to Knowing Yourself",
    category: "Yog & Philosophy",
    excerpt:
      "Yog is the philosophy of being. It is my introduction to my own self. Understanding the eight limbs of Yog and how they lead us to Samadhi — the union with yourself.",
    readingTime: "12 min read",
    image: "/images/Blog/yog blog 2.jpg",
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getOtherArticles(currentSlug: string): BlogArticle[] {
  return blogArticles.filter((article) => article.slug !== currentSlug);
}
