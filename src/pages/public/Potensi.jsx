// Hooks
import { Link } from "react-router-dom"

// Icons
import { FaChevronRight } from "react-icons/fa6"
import { FaMountain, FaTree, FaLeaf } from 'react-icons/fa';

const Potensi = () => {
  return (
    <>
      <section className="min-h-screen p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-32">
        <h2 className="text-4xl font-bold">Potensi Kelurahan</h2>
        <div className="flex items-center flex-row gap-2 mt-4 xl:text-base text-sm">
          <Link to={'/'} className="transition-all duration-200 hover:!text-yellow-400">Beranda</Link>
          <FaChevronRight />
          <p className="text-gray-500">Potensi Kelurahan</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
            <FaMountain className="text-blue-500" /> Tempat Wisata Kelurahan
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
            <li>Air Terjun Sapawandi</li>
            <li>Budaya: Pengucapan Syukur Tahunan Kab. MINSEL</li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
            <FaTree className="text-green-600" /> Sumber Daya Alam
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-green-600 mb-2">
                Pertanian
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                <li>Kopra</li>
                <li>Arang Tempurung</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-green-600 mb-2">
                Perkebunan
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                <li>Rica</li>
                <li>Nilam</li>
                <li>Jagung</li>
                <li>dll.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Potensi