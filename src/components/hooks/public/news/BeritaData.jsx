// Hooks
import { useEffect, useState } from "react"
import { supabase } from "@/supabaseClient"

const BeritaData = () => {
  const [berita, setBerita] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchBerita = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("berita")
        .select("id, title, description, image_cover, published_at")
        .order("published_at", { ascending: false })
      if (error) throw error
      setBerita(data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBerita()
  }, [])

  return { berita, loading, error }
}

export default BeritaData