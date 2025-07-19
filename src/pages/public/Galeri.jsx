// Hooks
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
// Icons
import { FaChevronRight } from "react-icons/fa6"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

// Images
import Gallery1 from '@/assets/images/jalan-trans-sulawesi.PNG'
import Gallery2 from '@/assets/images/Lingkungan.PNG'
import Gallery3 from '@/assets/images/sd-negeri-rumoong-bawah.PNG'
import Gallery4 from '@/assets/images/gereja-gmim.jpg'
import Gallery5 from '@/assets/images/gereja-kgpm-betlehem.jpg'
import Gallery6 from '@/assets/images/Kelurahan.jpg'
import Gallery7 from '@/assets/images/pembuatan-arang.jpg'
import Gallery8 from '@/assets/images/saguer-cap-tikus.jpg'
import Gallery9 from '@/assets/images/Kopra.jpg'
import Gallery10 from '@/assets/images/Air-Terjun-Sapawandi.jpg'
import Gallery11 from '@/assets/images/kebun-rica.jpg'
import Gallery12 from '@/assets/images/kebun-kelapa.jpg'
import Gallery13 from '@/assets/images/prestasi.jpg'
import Gallery14 from '@/assets/images/gereja-gpdi.jpg'

// Data Images
const galery = [
    {
        id: 1,
        image: Gallery1,
        name: 'Jalan Trans Sulawesi'
    },
    {
        id: 2,
        image: Gallery2,
        name: 'Lingkungan Kelurahan Rumoong Bawah'
    },
    {
        id: 3,
        image: Gallery3,
        name: 'SD Negeri Rumoong Bawah'
    },
    {
        id: 4,
        image: Gallery4,
        name: 'Gereja GMIM Efata'
    },
    {
        id: 5,
        image: Gallery5,
        name: 'Gereja KGPM Betlehem'
    },
    {
        id: 6,
        image: Gallery6,
        name: 'Kantor Kelurahan Rumoong Bawah'
    },
    {
        id: 7,
        image: Gallery7,
        name: 'Pembuatan Arang'
    },
    {
        id: 8,
        image: Gallery8,
        name: 'Pengolahan Saguer menjadi Cap Tikus'
    },
    {
        id: 9,
        image: Gallery9,
        name: 'Pembuatan Kopra'
    },
    {
        id: 10,
        image: Gallery10,
        name: 'Air Terjun Sapawandi'
    },
    {
        id: 11,
        image: Gallery11,
        name: 'Kebun Rica'
    },
    {
        id: 12,
        image: Gallery12,
        name: 'Kebun Kepala'
    },
    {
        id: 13,
        image: Gallery13,
        name: 'Piala Prestasi Kelurahan'
    },
    {
        id: 14,
        image: Gallery14,
        name: 'Gereja GPdI Solideo City of God'
    },
]


const Galeri = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 9

    // Calculate the range of images to display
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = galery.slice(indexOfFirstItem, indexOfLastItem)

    // Next Page Handler
    const nextPage = () => {
        if (currentPage < Math.ceil(galery.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    // Previous Page Handler
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    // Open the modal with selected image
    const openModal = (imageObj) => {
        setSelectedImage(imageObj)
        setIsModalOpen(true)
    }

    // Close the modal
    const closeModal = () => {
        setSelectedImage(null)
        setIsModalOpen(false)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [currentPage])
    return (
        <>

            {isModalOpen && (
                <div
                    className="fixed flex-col inset-0 bg-black/80 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative p-2">
                        <div className="flex justify-start mb-4 lg:mb-8">
                            <p className="text-start font-bold text-xl xl:text-2xl 2xl:text-3xl text-white">{selectedImage.name}</p>
                        </div>
                        <img
                            src={selectedImage.image}
                            alt="Preview"
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                </div>
            )}

            <section className='min-h-screen p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-24 bg-blue-50'>
                <h2 className="font-bold text-2xl xl:text-4xl">Galeri Kelurahan</h2>
                <div className="flex items-center flex-row gap-2 mt-4 xl:text-base text-xs">
                    <Link to={'/'} className="transition-all duration-200 hover:!text-yellow-400">Beranda</Link>
                    <FaChevronRight />
                    <p className="text-gray-500">Galeri Kelurahan</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 lg:mt-12">
                    {currentItems.map((galeri, index) => (
                        <div key={index} onClick={() => openModal(galeri)} className="cursor-pointer" >
                            <img src={galeri.image} className="aspect-video object-cover rounded-md shadow-md" loading="lazy" alt={`Gallery ${galeri.id}`} />
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200 disabled:bg-gray-300"
                    >
                        <FiChevronLeft />
                    </button>
                    <span className="flex items-center justify-center text-lg text-gray-800">
                        Page {currentPage} of {Math.ceil(galery.length / itemsPerPage)}
                    </span>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === Math.ceil(galery.length / itemsPerPage)}
                        className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200 disabled:bg-gray-300"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </section>
        </>
    )
}

export default Galeri