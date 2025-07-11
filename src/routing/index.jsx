import { Routes, Route } from "react-router-dom"


// PUBLIC
import Home from "@/pages/public/Home"

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    
    </>
  )
}

export default Routing