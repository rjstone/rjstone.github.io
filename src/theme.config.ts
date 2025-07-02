import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://rjstone.net',
  title: 'RJSTONE.net',
  description: 'Personal Blog, Projects, and public files of RJStone',
  author: 'Robert Stone',
  navbarItems: [
    { label: 'Blog', href: '/posts/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Tags', href: '/tags/' },
    { label: 'About', href: '/about/' },
    {
      label: 'Other pages',
      children: [
        { label: 'Landing page', href: '/' },
        { label: 'Tag: embedded', href: '/tags/embedded/' }
      ]
    }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/rjstone',
      label: 'Github'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-aurora',
  openGraphImage: undefined,
  postsPerPage: 6,
  projectsPerPage: 10,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'github-light-default',
    dark: 'github-dark-default'
  }
})
