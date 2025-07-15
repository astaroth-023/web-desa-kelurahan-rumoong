// Hooks
import { Link } from "react-router-dom"
// Icons
import { FaChevronRight } from "react-icons/fa6"

const Settings = () => {
  return (
    <>
    <h2 className='font-bold text-3xl'>Pengaturan</h2>
    <div className='flex items-center gap-2 flex-row mt-4'>
      <Link to='/dashboard' className="transition-all duration-200 hover:!text-yellow-400">Dashboard</Link>
      <FaChevronRight/>
      <p className="text-gray-400">Pengaturan</p>
    </div>
    </>
  )
}

export default Settings