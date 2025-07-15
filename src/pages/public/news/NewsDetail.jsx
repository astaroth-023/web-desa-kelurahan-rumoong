// Hooks
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
import useDetailBeritaData from '@/components/hooks/public/news/newsDetail/DetailBeritaData'

// Icons
import { FaCalendar } from 'react-icons/fa6'

const NewsDetail = () => {
  const { slug } = useParams()
  const { news, loading, error } = useDetailBeritaData(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  if (loading) return <div className="text-center py-32">Loading...</div>
  if (error || !news) return <div className="text-center py-32 text-red-500">Berita tidak ditemukan.</div>

  return (
    <section className="min-h-screen p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-32 bg-blue-50">
      <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
      <div className="mb-8">
        <img src={news.cover_image} alt={news.title} className="w-full max-h-96 object-cover rounded-lg" />
      </div>
      <div className="mb-2 flex flex-row items-center gap-2">
        <FaCalendar />
        <p className="text-gray-500">{news.published_at}</p>
      </div>
      <div className="prose max-w-none">{news.description}</div>
    </section>
  )
}

export default NewsDetail