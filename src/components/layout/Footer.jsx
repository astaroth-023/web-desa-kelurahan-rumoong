// Hooks
import { useLocation } from "react-router-dom"

const Footer = () => {
  const location = useLocation();
  return (
   <>
   <footer className={`p-4 xl:p-8 bg-blue-500 text-white text-center xl:text-base text-xs ${location.pathname.startsWith('/dashboard') ? 'hidden' : ''}`}>
    &copy; 2025 | Kelurahan Rumoong Bawah
   </footer>
   </>
  )
}

export default Footer