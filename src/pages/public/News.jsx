// COMPONENTS
import BeritaCardList from "@/components/ui/cards/BeritaCardList"
import BeritaData from "@/components/hooks/public/news/BeritaData"

// HOOKS
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import { FaChevronRight } from "react-icons/fa";

const News = () => {
    const { berita, error, loading } = BeritaData();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant'});
    },[])

    return (
        <>
            <section className='min-h-screen p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-32 bg-blue-50'>
                <h2 className="font-bold text-xl xl:text-4xl">Berita</h2>
                <div className="flex items-center flex-row gap-2 mt-4 xl:text-base text-sm">
                    <Link to={'/'} className="transition-all duration-200 !text-gray-500 hover:!text-yellow-400">Beranda</Link>
                    <FaChevronRight/>
                    <p>Berita</p>
                </div>

                <div className="space-y-8 mt-8 xl:mt-12 overflow-hidden">
                    {loading && (
                        <div className="col-span-3 text-center py-32">Loading...</div>
                    )}
                    {error && (
                        <div className="col-span-3 text-center py-32 text-red-500">
                            Error loading berita.
                        </div>
                    )}
                    {!loading && !error && berita.map(item => (
                        <BeritaCardList
                            key={item.id}
                            Image={item.cover_image}
                            Date={item.published_at}
                            Title={item.title}
                            Description={item.description}
                        />
                    ))}
                </div>

            </section>
        </>
    )
}

export default News