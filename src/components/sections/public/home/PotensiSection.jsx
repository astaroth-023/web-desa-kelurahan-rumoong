// Icons
import { FaMountain, FaTree } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

// Hooks
import { Link } from 'react-router-dom';

const PotensiSection = () => {
    return (
        <>
            <section className="2xl:px-96 px-4 xl:px-50 pb-32 bg-blue-50">
                <div className=" text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Potensi Kelurahan</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {/* Tempat Wisata */}
                        <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition">
                            <div className="flex items-center mb-4">
                                <h3 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                                    <FaMountain className="text-blue-500" /> Tempat Wisata Kelurahan
                                </h3>
                            </div>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
                                <li>Air Terjun Supawandi</li>
                                <li>Budaya: Pengucapan Syukur Tahunan Kab. MINSEL</li>
                            </ul>
                        </div>
                        {/* Sumber Daya Alam */}
                        <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition">
                            <div className="flex items-center mb-4">
                                <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                                    <FaTree className="text-green-600" /> Sumber Daya Alam
                                </h3>
                            </div>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
                                <li>Pertanian: Kopra dan Arang Temperung</li>
                                <li>Perkebunan: Rica, Nilam, Jagung dll.</li>
                            </ul>
                        </div>

                    </div>
                    <div className="flex mt-8 justify-center">
                        <Link
                            to={'/potensi'}
                            className="rounded-full py-3 px-6 lg:!text-base font-semibold !text-xs bg-blue-500 transition-all duration-200 hover:bg-blue-600 !text-white flex flex-row items-center gap-2"
                        >
                            Lihat Selengkapnya
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PotensiSection