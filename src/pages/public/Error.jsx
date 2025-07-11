import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6"

const Error = () => {
    return (
        <section className='min-h-screen text-center flex justify-center items-center flex-col'>
            <div className="space-y-2">
                <h2 className='font-bold text-4xl'>ERROR 404</h2>
                <p className=''>Maaf, halaman yang Anda cari tidak ditemukan</p>
            </div>
            <div className="mt-4">
                <Link className="bg-blue-400 flex flex-row items-center gap-2 !text-white px-6 py-3 rounded-full">
                    Kembali ke Beranda
                    <FaArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Error