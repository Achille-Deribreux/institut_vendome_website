import { useEffect } from 'react'

interface Alternate {
  hreflang: string
  href: string
}

interface SEOMeta {
  title: string
  description: string
  canonical: string
  alternates?: Alternate[]
}

export function useSEO({ title, description, canonical, alternates }: SEOMeta) {
  useEffect(() => {
    document.title = title

    const set = (sel: string, attr: string, val: string) => {
      document.querySelector(sel)?.setAttribute(attr, val)
    }

    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    set('meta[property="og:url"]', 'content', canonical)
    set('meta[name="twitter:title"]', 'content', title)
    set('meta[name="twitter:description"]', 'content', description)
    set('link[rel="canonical"]', 'href', canonical)

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
    alternates?.forEach(({ hreflang, href }) => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.setAttribute('hreflang', hreflang)
      link.href = href
      document.head.appendChild(link)
    })
  }, [title, description, canonical, alternates])
}
