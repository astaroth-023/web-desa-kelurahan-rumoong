// Hooks
import { Link } from "react-router-dom"
import { useEffect } from "react";

// Icons
import { FaChevronRight } from "react-icons/fa6"
import { FaMountain, FaTree, FaLeaf } from 'react-icons/fa';

// Images

import Kopra from '@/assets/images/Kopra.jpg'
import Kelapa from '@/assets/images/kebun-kelapa.jpg'
import Rica from '@/assets/images/kebun-rica.jpg'
import Arang from '@/assets/images/pembuatan-arang.jpg'
import AirTerjun from '@/assets/images/Air-Terjun-Sapawandi.jpg'

const Potensi = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [])
  return (
    <>
      <section className="min-h-screen p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-32 bg-blue-50">
        <h2 className="text-4xl font-bold">Potensi Kelurahan</h2>
        <div className="flex items-center flex-row gap-2 mt-4 xl:text-base text-sm">
          <Link to={'/'} className="transition-all duration-200 hover:!text-yellow-400">Beranda</Link>
          <FaChevronRight />
          <p className="text-gray-500">Potensi Kelurahan</p>
        </div>

        <div className="mt-8 xl:mt-12">
          <div className="">
            <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <FaMountain className="text-blue-500" />
              Tempat Wisata Kelurahan
            </h3>
            <p className="text-gray-700 mb-1">Air Terjun Sapawandi</p>
            <p className="text-gray-700">Budaya: Pengucapan Syukur Tahunan Kab. MINSEL</p>
            <div className="grid grid-cols-1 mt-4">
              <img loading='lazy' className="aspect-video object-cover rounded-md" src={AirTerjun} alt="" />
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
              <FaTree className="text-green-600" />
              Sumber Daya Alam
            </h3>
            <div>
              <h4 className="text-lg font-medium text-green-600 mb-3">Pertanian</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img loading='lazy' className="rounded-md aspect-video object-cover" src={Kopra} />
                <img loading='lazy' className="rounded-md aspect-video object-cover" src={Arang} />
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium text-green-600 mb-3">Perkebunan</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img loading='lazy' className="rounded-md aspect-video object-cover" src={Rica} />
                <img loading='lazy' className="rounded-md aspect-video object-cover" src={Kelapa} />
              </div>
            </div>
          </div>

        </div>




      </section>
    </>
  )
}

export default Potensi