import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6"

const Error = () => {
    return (
        <section className='min-h-screen text-center flex justify-center items-center flex-col bg-blue-50'>
            <div className="space-y-2">
                <h2 className='font-bold text-4xl'>ERROR 404</h2>
                <p className=''>Maaf, halaman yang Anda cari tidak ditemukan</p>
            </div>
            <div className="mt-4">
                <Link to={'/'} className="bg-blue-400 transition-all duration-300 hover:bg-blue-500 flex flex-row items-center gap-2 !text-white px-6 py-3 rounded-full">
                    Kembali ke Beranda
                    <FaArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Error