import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <>
   <nav className="bg-blue-400">
    <ul className="p-4 px-8 text-white flex justify-end flex-row items-center gap-2">
        <li>
            <Link>Test</Link>
        </li>
        <li>
            <Link>Test</Link>
        </li>
        <li>
            <Link>Test</Link>
        </li>
    </ul>
   </nav>
   </>
  )
}

export default Navbar