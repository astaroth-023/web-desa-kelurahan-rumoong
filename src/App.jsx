// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Routing from '@/routing/index'
import { SidebarMobile } from './components/layout/Sidebar'
import LogoutModal from './components/ui/modals/LogoutModal'

// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  }

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  const handleLogoutCLick = () => {
    setShowLogoutModal(true);
  }

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setShowLogoutModal(false);
    navigate('/');
  }

  return (
    <>
      {showLogoutModal && (
        <>
          <div className="inset-0 bg-black/20 w-full z-99 h-full flex justify-center items-center fixed">
            <LogoutModal
              CancelLogout={handleCancelLogout}
              handleLogout={handleLogout}
            />
          </div>
        </>
      )}
      <div className={`${isSidebarOpen ? 'opacity-100' : 'opacity-0 invisible'} transition-all duration-200 z-98 inset-0 fixed bg-black/30 w-full h-full flex lg:hidden justify-end`}>
        <SidebarMobile
          clickCloseSidebar={handleCloseSidebar}
          Styling={`${isSidebarOpen ? 'w-[200px]' : 'w-0'}`}
          MobileClickLogout={handleLogoutCLick}
        />
      </div>
      <main>
        <Navbar
          onclickButton={handleOpenSidebar}
        />
        <Routing />
        <Footer />
      </main>
    </>
  )
}

export default App