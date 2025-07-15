// Hooks
import useBeritaData from "@/components/hooks/public/home/BeritaData"
import { Link } from "react-router-dom"

// Components
import BeritaCard from "@/components/ui/cards/BeritaCard"

// Icons
import { FaArrowRight } from "react-icons/fa6"

const BeritaSection = () => {
  const { berita, loading, error } = useBeritaData()
  return (
    <>
      <section className="min-h-screen py-32">
        <h2 className="text-center font-bold text-2xl xl:text-3xl">Berita Terbaru</h2>
        
        <div className="flex justify-center mt-8 xl:mt-16">

          <div className="grid xl:grid-cols-3 items-center gap-8">
            {loading && (
              <div className="col-span-3 text-center py-32">Loading...</div>
            )}
            {error && (
              <div className="col-span-3 text-center py-32 text-red-500">
                Error loading berita.
              </div>
            )}
            {!loading && !error && berita.map(item => (
              <BeritaCard
                key={item.id}
                Image={item.cover_image}
                Date={item.published_at}
                Title={item.title}
                Description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="flex mt-8 justify-center">
            <Link to={'/berita'} className="rounded-full py-3 px-6 lg:!text-base font-semibold !text-xs bg-blue-500 transition-all duration-200 hover:bg-blue-600 !text-white flex flex-row items-center gap-2">
            Lihat Arsip Berita
            <FaArrowRight/>
            </Link>
        </div>
      </section>
    </>
  )
}

export default BeritaSection