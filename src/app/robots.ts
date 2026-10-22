import type { MetadataRoute } from "next";
import { urlAbsoluta, urlSite } from "@/utilitarios/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: urlAbsoluta("/sitemap.xml"),
    host: urlSite,
  };
}
