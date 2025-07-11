// Hooks
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

// Icons
import { FaHome, FaNewspaper } from "react-icons/fa"
import { FaArrowRightFromBracket, FaUsersLine } from "react-icons/fa6"

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className="fixed top-0 overflow-hidden h-full bg-gradient-to-tl from-gray-600 to-gray-900 text-white pt-48">
            <ul className="px-4 space-y-4">
                <li className="">
                    <button onClick={() => navigate('/dashboard')} className={`${location.pathname === '/dashboard' ? 'bg-gray-600/70' : ''} py-2 px-4 rounded-md hover:bg-gray-600/70 w-full flex flex-row items-center gap-2`}>
                        <FaHome/>
                        Dashboard
                    </button>
                </li>
                <li className="">
                    <button onClick={() => navigate('/dashboard/berita')} className={`${location.pathname === '/dashboard/berita' ? 'bg-gray-600/70' : ''} py-2 px-4 rounded-md hover:bg-gray-600/70 w-full flex flex-row items-center gap-2`}>
                        <FaNewspaper/>
                        Berita
                    </button>
                </li>
                <li className="">
                    <button onClick={() => navigate('/dashboard/data-penduduk')} className={`${location.pathname === '/dashboard/data-penduduk' ? 'bg-gray-600/70' : ''} py-2 px-4 rounded-md hover:bg-gray-600/70 w-full flex flex-row items-center gap-2`}>
                        <FaUsersLine/>
                        Data Penduduk
                    </button>
                </li>
                <li className="">
                    <button className="py-2 px-4 rounded-md hover:bg-red-500/70 w-full flex flex-row items-center gap-2">
                        <FaArrowRightFromBracket/>
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar