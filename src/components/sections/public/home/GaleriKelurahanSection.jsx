// Images
import Gallery1 from '@/assets/images/jalan-trans-sulawesi.PNG'
import Gallery2 from '@/assets/images/Lingkungan.PNG'
import Gallery3 from '@/assets/images/sd-negeri-rumoong-bawah.PNG'
import Gallery4 from '@/assets/images/gereja-gmim.jpg'
import Gallery5 from '@/assets/images/gereja-kgpm-betlehem.jpg'
import Gallery6 from '@/assets/images/Kelurahan.jpg'

// Icons
import { FaArrowRight } from 'react-icons/fa6'
// Hooks
import { Link } from 'react-router-dom'

// Data
const galery = [
    {
        id: 1,
        image: Gallery1,
    },
    {
        id: 2,
        image: Gallery2,
    },
    {
        id: 3,
        image: Gallery3,
    },
    {
        id: 4,
        image: Gallery4,
    },
    {
        id: 5,
        image: Gallery5,
    },
    {
        id: 6,
        image: Gallery6,
    },
]

const GaleriKelurahanSection = () => {
    return (
        <>
            <section className="2xl:px-96 px-4 xl:px-50 pb-32 bg-blue-50">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Galeri Kelurahan</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {galery.slice(0, 9).map((galeri, index) => (
                            <div
                                key={index}
                                className="w-full sm:aspect-video aspect-square bg-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <img src={galeri.image} loading='lazy' className="w-full h-full object-cover" alt="" />
                            </div>
                        ))}
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex mt-8 justify-center">
                    <Link
                        to={'/potensi'}
                        className="rounded-full py-3 px-6 lg:!text-base font-semibold !text-xs bg-blue-500 transition-all duration-200 hover:bg-blue-600 !text-white flex flex-row items-center gap-2"
                    >
                        Lihat Arsip Galeri
                        <FaArrowRight />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default GaleriKelurahanSection