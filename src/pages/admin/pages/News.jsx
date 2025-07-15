// Icons
import { FaChevronRight } from "react-icons/fa6"
// Hooks
import { Link } from "react-router-dom"

const News = () => {
  return (
    <>
    <h2 className='font-bold text-3xl'>Berita</h2>
    <div className='flex items-center gap-2 flex-row mt-4'>
      <Link to='/dashboard' className="transition-all duration-200 hover:!text-yellow-400">Dashboard</Link>
      <FaChevronRight/>
      <p className="text-gray-400">Berita</p>
    </div>
    </>
  )
}

export default News