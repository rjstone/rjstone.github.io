import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import { unified } from '@astrojs/markdown-remark'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import codeHeadersPlugin from './src/plugins/codeHeadersPlugin'
import readingTimePlugin from './src/plugins/readingTimePlugin'
import config from './src/theme.config'

export default defineConfig({
  site: config.site,
  integrations: [mdx(), sitemap()],

  // Astro 7 defaults to 'jsx' whitespace rules; keep the lossless v6 behavior
  compressHTML: true,

  markdown: {
    // Astro 7 defaults to the Sätteri processor; keep the remark/rehype pipeline
    processor: unified({
      remarkPlugins: [readingTimePlugin]
    }),
    shikiConfig: {
      themes: config.shikiThemes,
      wrap: true,
      transformers: [codeHeadersPlugin]
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
