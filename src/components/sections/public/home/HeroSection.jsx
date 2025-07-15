import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section className='relative h-[800px] bg-gray-700'>
                <img className='h-full w-full object-fit' src="" alt="" />
                <div className='xl:block hidden'>
                    <div className='absolute -translate-x-1/2 space-y-4 -translate-y-1/2 top-1/2 left-1/2 2xl:left-[20%] text-white z-10'>
                        <h1 className='text-6xl font-bold'>KELURAHAN</h1>
                        <h1 className='text-6xl font-bold'>RUMOONG BAWAH</h1>
                    </div>
                    <div className='absolute translate-x-1/2 -translate-y-1/2 bottom-10 left-[33%] text-white z-10'>
                        <h1 className='text-xl line-clamp-3 font-semibold w-[800px]'>Selamat datang di Website Keluraha Rumoong Bawah Kecamatan Amurang Barat Kabupaten Minahasa Selatan Provinsi Sulawesi Utara Tauhun 2025</h1>
                    </div>
                </div>
                <div className='absolute xl:hidden w-full px-4 -translate-x-1/2 space-y-4 -translate-y-1/2 top-1/2 left-1/2 2xl:left-[20%] text-white z-10'>
                    <h1 className='text-4xl font-bold'>KELURAHAN</h1>
                    <h1 className='text-4xl font-bold'>RUMOONG BAWAH</h1>
                    <div>
                        <p className='text-sm leading-loose'>Selamat datang di Website Keluraha Rumoong Bawah Kecamatan Amurang Barat Kabupaten Minahasa Selatan Provinsi Sulawesi Utara Tauhun 2025</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection