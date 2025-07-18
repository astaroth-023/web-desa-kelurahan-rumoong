// Hooks
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

// Icons
import { FaBars } from "react-icons/fa6"

// Images
import Minsel from '@/assets/logo/minsel-logo.png'

const Navbar = ({onclickButton}) => {
    const location = useLocation()
    return (
        <>
            <nav className={`${location.pathname === '/' ? 'absolute' : 'fixed bg-blue-500'} top-0 w-full z-20 overflow-x-hidden`}>
                <ul className="py-4 lg:py-8 px-4 lg:px-24 text-white flex justify-between flex-row items-center gap-2">
                    <Link to={'/'} className="flex flex-row gap-4 items-center lg:items-start">
                        <img className="w-8 lg:w-10 h-fit" src={Minsel} alt="Logo Mihasa Selatan" />
                        <div>
                            <p className="font-bold text-sm lg:text-xl">Kelurahan Rumoong Bawah</p>
                            <p className="font-normal hidden lg:block">Kabupaten Minahasa Selatan</p>
                        </div>
                    </Link>

                    {/* HAMBURGER MENU */}
                    <button className="lg:hidden block" onClick={onclickButton}>
                        <FaBars />
                    </button>
                    {/* LINKS */}
                    <div className="hidden lg:flex flex-row items-center gap-4 ">
                        <li>
                            <Link className="transition-all duration-200 hover:!text-yellow-300" to={'/berita'}>Berita</Link>
                        </li>
                        <li>
                            <Link className="transition-all duration-200 hover:!text-yellow-300" to={'/profil-kelurahan'}>Profil Kelurahan</Link>
                        </li>
                        <li>
                            <Link className="transition-all duration-200 hover:!text-yellow-300" to={'/potensi'}>Potensi Kelurahan</Link>
                        </li>
                        <li>
                            <Link className="transition-all duration-200 hover:!text-yellow-300" to={'/prestasi'}>Prestasi Kelurahan</Link>
                        </li>
                        <li className={`${location.pathname === '/login' ? 'hidden' : ''} ${location.pathname.startsWith('/dashboard') ? 'hidden' : ''}`}>
                            <Link className="border border-white py-2 px-6 rounded-md transition-all duration-200 hover:bg-white hover:!text-black" to={'/login'}>Login</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Navbar