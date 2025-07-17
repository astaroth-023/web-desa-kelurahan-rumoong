// Components


// Hooks
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

// Icons
import { FaArrowRight } from "react-icons/fa6"

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <section className="p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-32 bg-blue-50">
        <h2 className="text-2xl font-bold lg:text-start text-center">Visi & Misi Rumoong Bawah</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 text-justify">
          <div className="mt-8 bg-white rounded-md shadow-md p-4">
            <h3 className="font-semibold lg:text-2xl">Visi</h3>
            <p className="lg:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus deserunt quasi obcaecati, dignissimos eaque. Tempore doloremque aperiam nihil facere odio, repudiandae dolores voluptatibus provident eligendi quia, veniam, suscipit delectus inventore recusandae error laborum. Reiciendis dolor ducimus accusantium repellat laborum, dolorem vitae sapiente possimus quo, et, quibusdam blanditiis expedita dignissimos!</p>
          </div>
          <div className="mt-8 bg-white rounded-md shadow-md p-4">
            <h3 className="font-semibold lg:text-2xl">Misi</h3>
            <p className="lg:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus deserunt quasi obcaecati, dignissimos eaque. Tempore doloremque aperiam nihil facere odio, repudiandae dolores voluptatibus provident eligendi quia, veniam, suscipit delectus inventore recusandae error laborum. Reiciendis dolor ducimus accusantium repellat laborum, dolorem vitae sapiente possimus quo, et, quibusdam blanditiis expedita dignissimos!</p>
          </div>

        </div>
      </section>

       <section className="p-4 xl:px-54 2xl:px-96 pb-32 bg-blue-50">
        <h2 className="text-2xl font-bold lg:text-start text-center">Sejarah Kelurahan Rumoong Bawah</h2>
        <div className="mt-8">
          <p className="leading-loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a ipsum neque suscipit sit voluptatum quia nostrum laboriosam saepe dignissimos voluptates perspiciatis, porro impedit iure nihil harum, pariatur excepturi consequatur vero! Dolore dignissimos voluptas porro iste vitae? Placeat velit fuga, fugit, eius eaque quasi sint officia eos quod esse maiores enim. Similique rerum iure sunt pariatur, soluta quaerat facilis ex, reiciendis dolorum harum officiis quod! Itaque nemo, quidem, amet, beatae totam possimus optio minus libero unde odio sit velit odit ipsa sunt ab! Ab, voluptates non quia ducimus fuga, autem quasi officia iste obcaecati deserunt et unde voluptatum? Quam, provident.</p>
        </div>
       </section>

      {/* Luas Wilayah dan Jumlah Penduduk */}
      <section className="bg-blue-600 p-4 xl:px-54 2xl:px-96 pt-32 pb-32">
        <div className=" lg:flex justify-between items-center">
          <div className="text-center lg:text-start space-y-2">
            <h2 className="text-white lg:text-4xl text-2xl font-bold">Luas Wilayah</h2>
            <h2 className="text-white lg:text-4xl text-2xl font-bold">dan Jumlah Penduduk</h2>
          </div>
          <div className="grid grid-cols-2 mt-8 gap-4">
            <div className="space-y-2">
              <h2 className="text-white text-lg lg:text-2xl font-bold">Luas Wilayah</h2>
              <p className="text-white text-sm lg:text-lg font-semibold">+4,900 Ha</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-white text-lg lg:text-2xl font-bold">Jumlah Penduduk</h2>
              <p className="text-white text-sm lg:text-lg font-semibold">2,149</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-white text-lg lg:text-2xl font-bold">Laki-laki</h2>
              <p className="text-white text-sm lg:text-lg font-semibold">1,097</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-white text-lg lg:text-2xl font-bold">Perempuan</h2>
              <p className="text-white text-sm lg:text-lg font-semibold">1,077</p>
            </div>
          </div>
        </div>
      </section>
      {/* STATISTIK */}
      <section className="p-4 xl:px-54 2xl:px-96 pt-32 pb-32 bg-blue-50">
        <h2 className="font-bold text-2xl">Peta Lokasi Kelurahan Rumoong Bawah</h2>
        <div className="bg-white shadow-md rounded-md mt-8 p-4">
          <iframe
            className="w-full h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6931.168778499253!2d124.56887919957839!3d1.1731739546139395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32875915f999a005%3A0xd34fc5eb1b896b4c!2sRumoong%20Bawah%2C%20Kec.%20Amurang%20Bar.%2C%20Kabupaten%20Minahasa%20Selatan%2C%20Sulawesi%20Utara!5e1!3m2!1sid!2sid!4v1752470855423!5m2!1sid!2sid"
            loading="lazy" >

          </iframe>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button onClick={() => window.open('https://maps.app.goo.gl/oyD7beFn3obdbTwEA', '_blank', 'noopener,noreferrer')} 
          className="rounded-full text-white py-3 px-6 lg:text-base text-sm bg-blue-400 transition-all duration-300 flex items-center gap-2 flex-row hover:bg-blue-500">
            Lihat Detail Peta
            <FaArrowRight />
          </button>
        </div>
      </section>

    </>
  )
}

export default About