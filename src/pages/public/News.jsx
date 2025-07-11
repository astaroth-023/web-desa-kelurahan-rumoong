// COMPONENTS
import BeritaCardList from "@/components/ui/cards/BeritaCardList"
import BeritaData from "@/components/hooks/public/news/BeritaData"
const News = () => {
    const { berita, error, loading } = BeritaData();
    return (
        <>
            <section className='min-h-screen px-96 pt-58 pb-32'>
                <div className="space-y-8">
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