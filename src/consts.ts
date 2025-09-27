import type { Site, Page, Links, Socials } from "@types"

export const WEBSITE = {
  url: import.meta.env.SITE || "https://raspfloppy.github.io/gabrielmonti.dev",
  base: import.meta.env.BASE_URL || "/gabrielmonti.dev/",
  title: "Gabriel Monti",
  description: "Your site description here",
} as const;


// Global
export const SITE: Site = {
  TITLE: "Gabriel Monti",
  DESCRIPTION: "Welcome to my personal website! I'm a software developer. Explore my projects, blog posts, and get in touch!",
  AUTHOR: "Gabriel Monti",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: `${WEBSITE.base || "/"}`,
  },
  {
    TEXT: "Blog",
    HREF: `${WEBSITE.base || "/"}/blog`,
  },
  {
    TEXT: "Projects",
    HREF: `${WEBSITE.base || "/"}/projects`,
  },

  {
    TEXT: "Work",
    HREF: `${WEBSITE.base || "/"}/work`,
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "gabriel.monti@tutamail.com",
    HREF: "mailto:gabriel.monti@tutamail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "raspFloppy",
    HREF: "https://github.com/raspfloppy"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "gabriel-monti",
    HREF: "https://www.linkedin.com/in/gabriel-mmonti/",
  },
]

