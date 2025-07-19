import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaChevronRight, FaMountain, FaTree, FaLeaf } from "react-icons/fa"

// Images (import or use your existing ones)
import Kopra from '@/assets/images/Kopra.jpg'
import Kelapa from '@/assets/images/kebun-kelapa.jpg'
import Rica from '@/assets/images/kebun-rica.jpg'
import Arang from '@/assets/images/pembuatan-arang.jpg'
import AirTerjun from '@/assets/images/Air-Terjun-Sapawandi.jpg'

const potensiData = {
  wisata: [
    {
      id: 1,
      image: AirTerjun,
      name: "Air Terjun Sapawandi",
      description: "Budaya: Pengucapan Syukur Tahunan Kab. MINSEL"
    }
  ],
  pertanian: [
    { id: 2, image: Kopra, name: "Pembuatan Kopra" },
    { id: 3, image: Arang, name: "Pembuatan Arang" }
  ],
  perkebunan: [
    { id: 4, image: Rica, name: "Kebun Rica" },
    { id: 5, image: Kelapa, name: "Kebun Kelapa" }
  ]
}

const PotensiWithModal = () => {
  const [selected, setSelected] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const openModal = (item) => {
    setSelected(item)
    setModalOpen(true)
  }

  const closeModal = () => {
    setSelected(null)
    setModalOpen(false)
  }

  return (
    <>
      {modalOpen && selected && (
        <div
          className="fixed flex-col inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative p-2" onClick={e => e.stopPropagation()}>
            <div className="flex justify-start flex-col space-y-2 mb-4">
              <p className="text-start font-bold text-xl xl:text-2xl 2xl:text-3xl text-white">{selected.name}</p>
              {selected.description && (
                <p className="text-white lg:text-base text-sm mb-4">{selected.description}</p>
              )}
            </div>
            <img
              src={selected.image}
              alt={selected.name}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      <section className="min-h-screen p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-32 bg-blue-50">
        <h2 className="font-bold text-2xl xl:text-4xl">Potensi Kelurahan</h2>
        <div className="flex items-center flex-row gap-2 mt-4 xl:text-base text-xs">
          <Link to="/" className="transition-all duration-200 hover:!text-yellow-400">Beranda</Link>
          <FaChevronRight />
          <p className="text-gray-500">Potensi Kelurahan</p>
        </div>

        <div className="mt-8 xl:mt-12">
          {/* Wisata */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <FaMountain className="text-blue-500" />
              Tempat Wisata Kelurahan
            </h3>
            {potensiData.wisata.map(item => (
              <div key={item.id} className="mb-4">
                <div className="grid grid-cols-1 mt-4">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-video object-cover rounded-md cursor-pointer"
                    onClick={() => openModal(item)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Sumber Daya Alam */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
              <FaTree className="text-green-600" />
              Sumber Daya Alam
            </h3>

            {/* Pertanian */}
            <div>
              <h4 className="text-lg font-medium text-green-600 mb-3">Pertanian</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {potensiData.pertanian.map(item => (
                  <img
                    key={item.id}
                    loading="lazy"
                    src={item.image}
                    alt={item.name}
                    className="rounded-md aspect-video object-cover cursor-pointer"
                    onClick={() => openModal(item)}
                  />
                ))}
              </div>
            </div>

            {/* Perkebunan */}
            <div className="mt-8">
              <h4 className="text-lg font-medium text-green-600 mb-3">Perkebunan</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {potensiData.perkebunan.map(item => (
                  <img
                    key={item.id}
                    loading="lazy"
                    src={item.image}
                    alt={item.name}
                    className="rounded-md aspect-video object-cover cursor-pointer"
                    onClick={() => openModal(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PotensiWithModal
