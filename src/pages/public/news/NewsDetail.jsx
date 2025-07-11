import React from 'react'
import { useParams } from 'react-router-dom'
import useDetailBeritaData from '@/components/hooks/public/news/newsDetail/DetailBeritaData'

const NewsDetail = () => {
  const { slug } = useParams()
  const { news, loading, error } = useDetailBeritaData(slug)

  if (loading) return <div className="text-center py-32">Loading...</div>
  if (error || !news) return <div className="text-center py-32 text-red-500">Berita tidak ditemukan.</div>

  return (
    <section className="min-h-screen px-96 pt-32 pb-32">
      <div className="mb-8">
        <img src={news.cover_image} alt={news.title} className="w-full max-h-96 object-cover rounded-lg" />
      </div>
      <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
      <p className="mb-2 text-gray-500">{news.published_at}</p>
      <div className="prose max-w-none">{news.description}</div>
    </section>
  )
}

export default NewsDetail