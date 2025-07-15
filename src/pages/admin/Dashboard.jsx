// COMPONENTS
import Sidebar from "@/components/layout/Sidebar"
import LogoutModal from "@/components/ui/modals/LogoutModal"
// HOOKS
import { Outlet } from "react-router-dom"
import { useState } from "react"

const Dashboard = () => {

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutCLick = () => {
    setShowLogoutModal(true);
  }

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  }

  return (
    <>
      {/* LOGOUT MODAL */}
      {showLogoutModal && (
        <>
          <div className="inset-0 bg-black/20 w-full z-99 h-full flex justify-center items-center fixed">
            <LogoutModal
            CancelLogout={handleCancelLogout}
            />
          </div>
        </>
      )}

      {/* SIDEBAR */}
      <div className="">
        <Sidebar
          clickLogout={handleLogoutCLick}
        />

        {/* CONTENTS */}
        <section className="min-h-screen pt-50 pl-72 px-32 pb-32">
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default Dashboard