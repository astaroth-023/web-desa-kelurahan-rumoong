

const GaleriKelurahanSection = () => {
    const placeholderItems = Array.from({ length: 9 });
    return (
        <>
            <section className="2xl:px-96 px-4 xl:px-50 pb-32 bg-blue-50">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Galeri Kelurahan</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {placeholderItems.slice(0,9).map((_, index) => (
                            <div
                                key={index}
                                className="w-full sm:aspect-video aspect-square bg-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                {/* Replace this div with an <img> tag in future */}
                                {/* <img src="your-image.jpg" className="w-full h-full object-cover" alt="Gallery item" /> */}
                            </div>
                        ))}
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default GaleriKelurahanSection