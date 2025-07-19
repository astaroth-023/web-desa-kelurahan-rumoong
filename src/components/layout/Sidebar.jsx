// Hooks
import { useNavigate, useLocation, Link } from "react-router-dom"

// Icons
import { FaHome, FaNewspaper } from "react-icons/fa"
import { FaArrowRightFromBracket, FaUsersLine, FaGear, FaArrowRight } from "react-icons/fa6"

const Sidebar = ({ clickLogout }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className="hidden lg:block fixed top-0 overflow-hidden h-full bg-gradient-to-tl from-gray-600 to-gray-900 text-white pt-48">
            <ul className="px-4 space-y-4">
                <li className="">
                    <button onClick={() => navigate('/dashboard')} className={`${location.pathname === '/dashboard' ? 'bg-gray-600/70' : ''} py-2 px-4 rounded-md hover:bg-gray-600/70 w-full flex flex-row items-center gap-2`}>
                        <FaHome />
                        Dashboard
                    </button>
                </li>
                <li className="">
                    <button onClick={() => navigate('/dashboard/berita')} className={`${location.pathname === '/dashboard/berita' ? 'bg-gray-600/70' : ''} py-2 px-4 rounded-md hover:bg-gray-600/70 w-full flex flex-row items-center gap-2`}>
                        <FaNewspaper />
                        Berita
                    </button>
                </li>
                <li className="">
                    <button onClick={() => navigate('/dashboard/data-penduduk')} className={`${location.pathname === '/dashboard/data-penduduk' ? 'bg-gray-600/70' : ''} py-2 px-4 rounded-md hover:bg-gray-600/70 w-full flex flex-row items-center gap-2`}>
                        <FaUsersLine />
                        Data Penduduk
                    </button>
                </li>
                <li className="">
                    <button onClick={() => navigate('/dashboard/pengaturan')} className={`${location.pathname === '/dashboard/pengaturan' ? 'bg-gray-600/70' : ''} py-2 px-4 rounded-md hover:bg-gray-600/70 w-full flex flex-row items-center gap-2`}>
                        <FaGear />
                        Pengaturan
                    </button>
                </li>
                <li className="">
                    <button onClick={clickLogout} className="py-2 px-4 rounded-md hover:bg-red-500/70 w-full flex flex-row items-center gap-2">
                        <FaArrowRightFromBracket />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}



const SidebarMobile = ({ clickCloseSidebar, Styling, MobileClickLogout }) => {
    const location = useLocation();
    return (
        <>
            <nav className={`bg-blue-500 h-full top-0 fixed overflow-clip transition-all duration-300 ${Styling}`}>
                <div className="text-white relative">
                    <button onClick={clickCloseSidebar} className="absolute rounded-full p-2 bg-gray-50/30 -translate-y-1/2 -translate-x-1/2 top-10 right-0">
                        <FaArrowRight />
                    </button>

                    {location.pathname.startsWith('/dashboard') ? (
                        <>

                            <ul className="text-white px-4 pt-18 space-y-4">
                                <li>
                                    <Link to={'/dashboard'} className="py-3 px-4 truncate">Overview</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/berita'} className="py-3 px-4 truncate">Berita</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/data-penduduk'} className="py-3 px-4 truncate">Data Penduduk</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/pengaturan'} className="py-3 px-4 truncate">Pengaturan</Link>
                                </li>
                                <li>
                                    <button onClick={MobileClickLogout} className="py-3 px-4 w-full text-start truncate">
                                        Logout
                                    </button>
                                </li>
                            </ul>

                        </>
                    ) : (
                        <>
                            <ul className="text-white px-4 pt-18 space-y-4">
                                <li>
                                    <Link to={'/berita'} className="py-3 px-4 truncate">Berita</Link>
                                </li>
                                <li>
                                    <Link to={'/galeri'} className="py-3 px-4 truncate">Galeri</Link>
                                </li>
                                <li>
                                    <Link to={'/profil-kelurahan'} className="py-3 px-4 truncate">Profil Kelurahan</Link>
                                </li>
                                <li>
                                    <Link to={'/potensi'} className="py-3 px-4 truncate">Potensi Kelurahan</Link>
                                </li>
                                <li>
                                    <Link to={'/prestasi'} className="py-3 px-4 truncate">Prestasi Kelurahan</Link>
                                </li>
                                {/* <li>
                                    <Link to={'/login'} className="py-3 px-4 truncate">Login</Link>
                                </li> */}
                            </ul>
                        </>
                    )}
                </div>
            </nav>
        </>
    )
}


export default Sidebar
export { SidebarMobile }