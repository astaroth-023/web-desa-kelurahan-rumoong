// Hooks
import { Link } from "react-router-dom"

// Icons
import { FaChevronRight } from "react-icons/fa6"

const Potensi = () => {
  return (
    <>
      <section className="min-h-screen p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-32 bg-blue-50">
        <h2 className="text-4xl font-bold">Potensi Kelurahan</h2>
        <div className="flex items-center flex-row gap-2 mt-4 xl:text-base text-sm">
          <Link to={'/'} className="transition-all duration-200 !text-gray-500 hover:!text-yellow-400">Beranda</Link>
          <FaChevronRight />
          <p>Potensi Kelurahan</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-8">Daftar Tempat Wisata Kelurahan</h2>
          <div className="grid grid-cols-2">

          </div>
        </div>
      </section>
    </>
  )
}

export default Potensi