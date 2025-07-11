// Hooks
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Components
import LoadingScreen from "@/components/layout/loading/LoadingScreen";

// PUBLIC
const Home = lazy(() => import("@/pages/public/Home"));
const About = lazy(() => import("@/pages/public/About"));
const News = lazy(() => import("@/pages/public/News"));
const Error = lazy(() => import("@/pages/public/Error"));
const Login = lazy(() => import("@/pages/public/Login"));

const Routing = () => {
  return (
    <Suspense fallback={<LoadingScreen/>}>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path='/' element={<Home />} />
        <Route path='/profil-desa' element={<About />} />
        <Route path='/berita' element={<News />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;