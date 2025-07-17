import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const data = [
    {
        id: 1,
        title: 'Air Terjun Sapawandi',
        description: 'Wisata alam yang indah di daerah pegunungan.',
        category: 'Wisata',
        date: '2025-07-10',
    },
    {
        id: 2,
        title: 'Pengucapan Syukur Tahunan',
        description: 'Tradisi tahunan masyarakat MINSEL.',
        category: 'Budaya',
        date: '2025-06-28',
    },
    // Add more dummy data as needed
];

const ITEMS_PER_PAGE = 5;

const BeritaTable = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <>
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full bg-white dark:bg-gray-900">
                    <thead className="bg-linear-to-r from-blue-500 to-blue-600 text-white text-left text-sm uppercase tracking-wider">
                        <tr>
                            <th className="px-4 py-3">Actions</th>
                            <th className="px-4 py-3">No.</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Description</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800 dark:text-gray-200 divide-y divide-gray-200 dark:divide-gray-700">
                        {paginatedData.map((item, index) => (
                            <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                                <td className="px-4 py-3 space-x-2">
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <FiEdit />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <FiTrash2 />
                                    </button>
                                </td>
                                <td className="px-4 py-3">{startIndex + index + 1}</td>
                                <td className="px-4 py-3 truncate">{item.title}</td>
                                <td className="px-4 py-3 truncate">{item.description}</td>
                                <td className="px-4 py-3 truncate">{item.category}</td>
                                <td className="px-4 py-3 truncate">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-end items-center gap-2 mt-6">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
                >
                    <FiChevronLeft/>
                </button>

                <div className="flex space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => goToPage(i + 1)}
                            className={`px-3 py-1 text-sm rounded ${currentPage === i + 1
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
                >
                    <FiChevronRight/>
                </button>
            </div>
        </>
    )
}

export default BeritaTable