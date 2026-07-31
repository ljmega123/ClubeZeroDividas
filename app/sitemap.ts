import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clubzerodividas.com.br"

  const routes = [
    "",
    "/consorcio",
    "/carta-contemplada",
    "/credito",
    "/recuperacao",
    "/afiliados",
    "/sobre",
    "/contato",
    "/simular",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}
