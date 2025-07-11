// Hooks
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

// Images
import Minsel from '@/assets/logo/minsel-logo.png'

const Navbar = () => {
    const location = useLocation()
    return (
        <>
            <nav className={`${location.pathname === '/' ? 'absolute' : 'fixed bg-blue-400'} top-0 w-full z-20`}>
                <ul className="py-8 px-24 text-white flex justify-between flex-row items-center gap-2">
                    <Link to={'/'} className="flex flex-row gap-4">
                        <img className="w-10 h-fit" src={Minsel} alt="" />
                        <div>
                            <p className="text-xl font-bold">Kelurahan Rumoong Bawah</p>
                            <p className="font-normal">Kabupaten Minahasa Selatan</p>
                        </div>
                    </Link>
                    <div className="flex flex-row items-center gap-4">
                        <li>
                            <Link className="transition-all duration-200 hover:!text-yellow-300" to={'/berita'}>Berita</Link>
                        </li>
                        <li>
                            <Link className="transition-all duration-200 hover:!text-yellow-300" to={'/profil-desa'}>Profil Desa</Link>
                        </li>
                        <li>
                            <Link className="transition-all duration-200 hover:!text-yellow-300" to={'/'}>Wisata</Link>
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