import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section className='relative h-[800px] bg-gray-700'>
                <img className='h-full w-full object-fit' src="" alt="" />
                <div className='absolute -translate-x-1/2 space-y-4 -translate-y-1/2 top-1/2 left-[20%] text-white z-10'>
                    <h1 className='text-6xl font-bold'>KELURAHAN</h1>
                    <h1 className='text-6xl font-bold'>RUMOONG BAWAH</h1>
                </div>
                <div className='absolute translate-x-1/2 -translate-y-1/2 bottom-10 left-[33%] text-white z-10'>
                    <h1 className='text-xl line-clamp-3 font-semibold w-[800px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tenetur, eius a aut cupiditate dignissimos veniam quo iure quasi repellendus temporibus sequi cumque possimus voluptatibus modi beatae aliquid sapiente reiciendis.</h1>
                </div>
            </section>
        </>
    )
}

export default HeroSection