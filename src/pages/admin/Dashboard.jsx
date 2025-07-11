// COMPONENTS
import Sidebar from "@/components/layout/Sidebar"
import { Outlet } from "react-router-dom"


const Dashboard = () => {
  return (
    <>
    <div className="">
        <Sidebar/>
        <section className="min-h-screen pt-50 pl-72 px-32 pb-32">
          <Outlet/>
        </section>
    </div>
    </>
  )
}

export default Dashboard