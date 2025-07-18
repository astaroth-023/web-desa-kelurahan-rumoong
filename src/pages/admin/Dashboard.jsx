// COMPONENTS
import Sidebar from "@/components/layout/Sidebar"
import LogoutModal from "@/components/ui/modals/LogoutModal"
// HOOKS
import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"
import { supabase } from "@/supabaseClient"

const Dashboard = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
      {/* LOGOUT MODAL */}
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

      {/* SIDEBAR */}
      <div className="">
        <Sidebar
          clickLogout={handleLogoutCLick}
        />

        {/* CONTENTS */}
        <section className="min-h-screen pt-32 px-4 sm:px-24 lg:pt-50 lg:pl-72 lg:px-32 pb-32">
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default Dashboard