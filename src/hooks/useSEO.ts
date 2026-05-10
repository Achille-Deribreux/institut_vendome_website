import { useEffect } from 'react'

interface SEOMeta {
  title: string
  description: string
  canonical: string
}

export function useSEO({ title, description, canonical }: SEOMeta) {
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
  }, [title, description, canonical])
}
