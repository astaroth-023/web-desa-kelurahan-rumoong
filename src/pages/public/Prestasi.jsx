// Hooks
import { Link } from "react-router-dom"
import { useEffect } from "react"
// Icons
import { FaChevronRight } from "react-icons/fa6"

const Prestasi = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [])
    return (
        <>
            <section className='min-h-screen p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-32 bg-blue-50'>
                <h2 className="font-bold text-xl xl:text-4xl">Prestasi Kelurahan</h2>
                <div className="flex items-center flex-row gap-2 mt-4 xl:text-base text-xs">
                    <Link to={'/'} className="transition-all duration-200 hover:!text-yellow-400">Beranda</Link>
                    <FaChevronRight />
                    <p className="text-gray-500">Prestasi Kelurahan</p>
                </div>
                <div className="mt-8 xl:mt-12">

                </div>
            </section>
        </>
    )
}

export default Prestasi