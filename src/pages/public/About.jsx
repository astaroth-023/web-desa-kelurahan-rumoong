// Components
import PeriodePemerintah from '@/components/ui/tables/PeriodePemerintah'

// Images
import StrukturOrganisasi from '@/assets/images/so.svg'

// Hooks
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

// Icons
import { FaArrowRight, FaChevronRight } from "react-icons/fa6"

const About = () => {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setIsModalOpen(false)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [])

  return (
    <>
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 md:px-0 px-4 py-4 bg-black/50 md:bg-black/30 bg-opacity-70 flex justify-center items-center z-50"
        >
          <div className='bg-white rounded-md p-4'>
            <img
              src={selectedImage}
              alt="Full preview"
              className="max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

        </div>
      )}

      {/* SEJARAH */}
      <section className='p-4 xl:px-54 2xl:px-96 pt-32 lg:pt-58 pb-24 bg-blue-50'>
        <h2 className="font-bold text-2xl xl:text-4xl">Profil Kelurahan</h2>
        <div className="flex items-center flex-row gap-2 mt-4 xl:text-base text-xs">
          <Link to={'/'} className="transition-all duration-200 hover:!text-yellow-400">Beranda</Link>
          <FaChevronRight />
          <p className="text-gray-500">Profil Kelurahan</p>
        </div>
        <div className="mt-8 xl:mt-12">
          <h2 className="text-xl xl:text-3xl font-bold lg:text-start">Sejarah Kelurahan Rumoong Bawah</h2>
          <div className="mt-4 xl:mt-8 space-y-2">
            <p className="lg:text-base text-sm leading-loose">Kelurahan Rumoong Bawah merupakan sebuah kelurahan yang terletak di Kecamatan Amurang Barat, Kabupaten Minahasa Selatan, Provinsi Sulawesi Utara. Dahulu nama Rumoong dikatakan sebagai Ro-oangan artinya orang yang menyebrang atau rumoyong dari Ranoyapo dan bersinggah di Pohon Lesat yang menjadi tempat persinggahan. Rumoong ini dulunya adalah sebuah desa, akan tetapi terjadi pemekaran dari desa menjadi kelurahan pada tahun 1981. Peristiwa tersebut diputuskan oleh peraturan DPR-RI pada tahun 1981. Adapun batas-batas wilayah di kelurahan  rumoong bawah mudah diketahui karna semua batas wilayahnya lurus dari atas gunung sampai sungai.</p>
            <p className="lg:text-base text-sm leading-loose">Adat istiadat dari Kelurahan Rumoong Bawah yang ada sejak dulu yaitu ‘’Watu Tumotowa’’ tetapi adat istiadat tersebut sudah tidak dilestarikan. Adat istiadat yang masih   dilestarikan sampai sekarang di Kelurahan Rumoong Bawah adalah “Mapalus atau Gotong Royong”. Kemudian ada juga Budaya Pengucapan Syukur tahunan yang masih dilestarikan oleh masyarakat Minahasa Selatan.</p>
            <p className="lg:text-base text-sm leading-loose">Siklus kepemimpinan dari kelurahan Rumoong Bawah berubah-ubah dari tahun ke tahun, dimana dulunya pemimpin wilayah disebut TONAAS, kemudian beralih menjadi PERWIS/Pewaris, lalu pada tahun 1898 nama HUKUM TUA digunakan sebagai sebutan Pemimpin Desa. Setelah terjadi pemekaran dari desa beralih menjadi kelurahan, sebutan kepemimpinan  adalah LURAH.</p>
            <p className="lg:text-base text-sm leading-loose">Kelurahan Rumoong Bawah memiliki luas wilayah ± 4,900 Ha, dengan jumlah penduduk Laki-laki 1.097 dan Perempuan 1.077. Jumlah 2.149. Hasil sumber daya alam dari Kelurahan Rumoog Bawah adalah Pertanian seperti “Kopra dan Arang Tempurung” dan Perkebunan seperti “Rica, Jagung, Nilam, Dll”. Kedua hasil SDA ini sebagai penunjang ekonomi dan menjadi penghasilan utama masyarakat Kelurahan Rumoong Bawah. Kelurahan Rumoong Bawah juga memiliki potensi wisata Air Terjun yang dinamakan ‘’Air Terjun Supawandi’’.</p>
          </div>
        </div>
      </section>

      {/* TABLE PERIODE PEMERINTAH */}
      <section className=' p-4 xl:px-54 2xl:px-96 pb-32 bg-blue-50'>
        <h2 className="text-xl xl:text-3xl font-bold lg:text-start text-center">
          Periode Pemerintahan Hukum Tua / Lurah Kelurahan Rumoong Bawah
        </h2>
        <div className='md:mt-12 mt-8'>
          <PeriodePemerintah />
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

      {/* PETA */}
      <section className="p-4 xl:px-54 2xl:px-96 pt-32 pb-32 bg-blue-50">
        <h2 className="font-bold text-xl lg:text-start text-center xl:text-3xl">Peta Lokasi Kelurahan Rumoong Bawah</h2>
        <div className="bg-white shadow-md rounded-md mt-8 p-2 md:p-4">
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

      <section className="p-4 xl:px-54 2xl:px-96 pb-32 bg-blue-50">
        <h2 className="font-bold text-xl text-center xl:text-3xl">Struktur Organisasi Kelurahan Rumoong Bawah</h2>
        <div className="flex justify-center items-center mt-8 md:mt-12">
          <div onClick={() => openModal(StrukturOrganisasi)} className="cursor-pointer">
            <img src={StrukturOrganisasi} loading='lazy' alt="Struktur Organisasi Kelurahan Rumoong Bawah" />
          </div>
        </div>
      </section>

    </>
  )
}

export default About