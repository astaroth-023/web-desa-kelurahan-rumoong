// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Routing from '@/routing/index'
import { SidebarMobile } from './components/layout/Sidebar'

// Hooks
import { useState } from 'react'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  }

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <>
      <div className={`${isSidebarOpen ? 'opacity-100' : 'opacity-0 invisible'} transition-all duration-200 z-99 inset-0 fixed bg-black/30 w-full h-full flex lg:hidden justify-end`}>
        <SidebarMobile
          clickCloseSidebar={handleCloseSidebar}
          Styling={`${isSidebarOpen ? 'w-[200px]' : 'w-0'}`}
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