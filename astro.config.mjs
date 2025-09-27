import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://raspfloppy.github.io/gabrielmonti.dev/", // GitHub Pages URL (will redirect to gabrielmonti.dev)
  base: "/gabrielmonti.dev/", // Repository name for GitHub Pages subpath with trailing slash
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})