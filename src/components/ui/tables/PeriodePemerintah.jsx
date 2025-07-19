const data = [
    { no: 1, nama: 'Mamarimbing', jabatan: 'Tonaas', tahun: '1478' },
    { no: 2, nama: 'Kumendong', jabatan: 'Tonaas', tahun: '1646' },
    { no: 3, nama: 'Loket', jabatan: 'Tonaas', tahun: '1724' },
    { no: 4, nama: 'J. Rumengan', jabatan: 'Perwis Sendangan', tahun: '1856' },
    { no: 5, nama: 'J. Tamburian', jabatan: 'Perwis Talikuran', tahun: '1856' },
    { no: 6, nama: 'J.J. Tumbelaka', jabatan: 'Hukum Tua', tahun: '1898-1920' },
    { no: 7, nama: 'J.A. Runtuwene', jabatan: 'Hukum Tua Talikuran', tahun: '1898-1914' },
    { no: 8, nama: 'H. Runtuwene', jabatan: 'Hukum Tua Talikuran', tahun: '1920-1923' },
    { no: 9, nama: 'F. Runtuwene', jabatan: 'Hukum tua Talikuran', tahun: '1923-1927' },
    { no: 10, nama: 'H. Runtuwene', jabatan: 'Hukum tua Talikuran', tahun: '1927-1933' },
    { no: 11, nama: 'M. Runtuwene', jabatan: 'Hukum tua Talikuran', tahun: '1933-1937' },
    { no: 12, nama: 'A. Walukow', jabatan: 'Hukum tua Talikuran', tahun: '1937-1946' },
    { no: 13, nama: 'Johan Karepu', jabatan: 'Hukum tua Talikuran', tahun: '1946-1950' },
    { no: 14, nama: 'Frans Kani', jabatan: 'Hukum tua Talikuran', tahun: '1950-1952' },
    { no: 15, nama: 'H. Ludong', jabatan: 'Hukum tua Talikuran', tahun: '1952-1968' },
    { no: 16, nama: 'A. J. Runtuwene', jabatan: 'Hukum tua Talikuran', tahun: '1968-1972' },
    { no: 17, nama: 'Frits E. Ludong', jabatan: 'Hukum tua Talikuran', tahun: '1972-1977' },
    { no: 18, nama: 'Marthen Karepu', jabatan: 'Hukum tua Talikuran', tahun: '1977-1979' },
    { no: 19, nama: 'Johannies B. Mawa', jabatan: 'Hukum tua Talikuran', tahun: '1979-1981' },
    { no: 20, nama: 'Johannies B. Mawa', jabatan: 'Lurah', tahun: '1981-1990' },
    { no: 21, nama: 'J. Runtuwene', jabatan: 'PJS Lurah', tahun: '1990-1999' },
    { no: 22, nama: 'Dra. Jetty D. Mawa', jabatan: 'Lurah', tahun: '1999-2003' },
    { no: 23, nama: 'Decky Kani, SmH', jabatan: 'Lurah', tahun: '30 juli 2003 - 29 Juni 2007' },
    { no: 24, nama: 'Eric A. M. Sorongan S.E', jabatan: 'Lurah', tahun: '19 Februari 2008' },
    { no: 25, nama: 'Donny P. Aring', jabatan: 'Lurah', tahun: '14 September 2010' },
    { no: 26, nama: 'Weidy D. Rumengan, SH', jabatan: 'Lurah', tahun: '18 Oktober 2013' },
    { no: 27, nama: 'Stevi S. B. Kelung, S.Sos', jabatan: 'Lurah', tahun: '27 Agustus 2021' },
    { no: 28, nama: 'Jenstarmy C. Pongra, S.Sos', jabatan: 'Lurah', tahun: '18 April 2023' },
    { no: 29, nama: 'Frangky Deddy Luly, S.Sos', jabatan: 'Lurah', tahun: '21 Maret 2024' },
]

// Hooks
import { useState } from "react"

// Icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const PeriodePemerintah = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const rowsPerPage = 10

    const totalPages = Math.ceil(data.length / rowsPerPage)
    const startIndex = (currentPage - 1) * rowsPerPage
    const paginatedData = data.slice(startIndex, startIndex + rowsPerPage)

    const goToPrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1))
    const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))

    return (
        <>
            <div className="">
                {/* Table */}
                <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-600 sticky top-0">
                            <tr>
                                {['NO', 'NAMA', 'JABATAN', 'TAHUN'].map((header) => (
                                    <th
                                        key={header}
                                        className="px-6 py-3 text-left font-semibold text-white uppercase tracking-wider"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {paginatedData.map(({ no, nama, jabatan, tahun }, i) => (
                                <tr
                                    key={no}
                                    className={i % 2 === 0 ? 'bg-gray-50 hover:bg-blue-50' : 'bg-white hover:bg-blue-50'}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{no}.</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{nama}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{jabatan}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{tahun}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={goToPrevious}
                        disabled={currentPage === 1}
                        className="px-4 py-3 bg-blue-500 text-white rounded disabled:opacity-50 disabled:!cursor-default hover:bg-blue-600 disabled:bg-blue-600"
                    >
                        <FiChevronLeft/>
                    </button>

                    <p className="text-sm text-gray-600">
                        Page <span className="font-semibold">{currentPage}</span> of{' '}
                        <span className="font-semibold">{totalPages}</span>
                    </p>

                    <button
                        onClick={goToNext}
                        disabled={currentPage === totalPages}
                        className="px-4 py-3 bg-blue-500 text-white rounded disabled:opacity-50 disabled:bg-blue-600 disabled:!cursor-default hover:bg-blue-600"
                    >
                        <FiChevronRight/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PeriodePemerintah