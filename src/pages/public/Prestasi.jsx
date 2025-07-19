// Hooks
import { Link } from "react-router-dom"
import { useEffect } from "react"
// Icons
import { FaChevronRight } from "react-icons/fa6"

// Images
import PrestasiImage from '@/assets/images/prestasi.jpg'

const Prestasi = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [])
    return (
        <>
            <section className='min-h-screen p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-32 bg-blue-50'>
                <h2 className="font-bold text-2xl xl:text-4xl">Prestasi Kelurahan</h2>
                <div className="flex items-center flex-row gap-2 mt-4 xl:text-base text-xs">
                    <Link to={'/'} className="transition-all duration-200 hover:!text-yellow-400">Beranda</Link>
                    <FaChevronRight />
                    <p className="text-gray-500">Prestasi Kelurahan</p>
                </div>
                <div className="mt-8 xl:mt-12">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <img src={PrestasiImage} className="rounded-md shadow-md aspect-video w-96" alt="Prestasi Kelurahan" />
                    <div>
                        <ul className="space-y-4 text-justify">
                            <p className="text-sm lg:text-lg">- Terbaik II perlombaan Kelurahan tingkat Kabupaten Minahasa Selatan Tahun 2011</p>
                            <p className="text-sm lg:text-lg">- Juara II Perlombaan Kelurahan Tingkat Provinsi Sulawesi Utara Kelurahan Rumoong Bawah Kecamatan Amurang Barat Kabupaten Minahasa Selatan Tahun 2015</p>
                            <p className="text-sm lg:text-lg">- Trophy Bergilir Karang Taruna Lestari Rumoong Bawah Kecamatan Tombasian dari Prof. Dr. R. O. Kandouw</p>
                            <p className="text-sm lg:text-lg">- Juara II Lomba Kelurahan TKT. Kabupaten Minahasa Selata Tahun 2008</p>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Prestasi