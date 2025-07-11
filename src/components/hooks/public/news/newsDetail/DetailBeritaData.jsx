import { useEffect, useState } from "react"
import { supabase } from "@/supabaseClient"

export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')

const useDetailBeritaData = (slug) => {
  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchNews = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('berita')
        .select('*')
      if (error) throw error
      const found = data.find(item => slugify(item.title) === slug)
      setNews(found)
    } catch (err) {
      setError('Gagal memuat berita')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()

  }, [slug])

  return { news, loading, error }
}

export default useDetailBeritaData