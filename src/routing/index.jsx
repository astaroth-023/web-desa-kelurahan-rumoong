// Hooks
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Components
import LoadingScreen from "@/components/layout/loading/LoadingScreen";
import PrivateRoute from "./PrivateRoute";

// PUBLIC
const Home = lazy(() => import("@/pages/public/Home"));
const About = lazy(() => import("@/pages/public/About"));
const Galeri = lazy(() => import("@/pages/public/Galeri"));
const Potensi = lazy(() => import("@/pages/public/Potensi"));
const Prestasi = lazy(() => import("@/pages/public/Prestasi"));

const News = lazy(() => import("@/pages/public/News"));
const NewsDetail = lazy(() => import("@/pages/public/news/NewsDetail"));


const Error = lazy(() => import("@/pages/public/Error"));
const Login = lazy(() => import("@/pages/public/Login"));

// DASHBOARD
const Dashboard = lazy(() => import("@/pages/admin/Dashboard"));
const DashboardHome = lazy(() => import("@/pages/admin/pages/Home"));
const DashboardNews = lazy(() => import("@/pages/admin/pages/News"));
const DashboardSettings = lazy(() => import("@/pages/admin/pages/Settings"));

const Routing = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path='/' element={<Home />} />
        <Route path='/profil-kelurahan' element={<About />} />
        <Route path='/galeri' element={<Galeri />} />
        <Route path='/potensi' element={<Potensi />} />
        <Route path='/prestasi' element={<Prestasi />} />

        <Route path='/berita' element={<News />} />
        <Route path='/berita/:slug' element={<NewsDetail />} />

        <Route path='/login' element={<Login />} />
        
        <Route path='*' element={<Error />} />
        {/* DASHBOARD ROUTES */}
        <Route path='/dashboard/*' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route index element={<DashboardHome />} />
          <Route path="berita" element={<DashboardNews />} /> 
          <Route path="pengaturan" element={<DashboardSettings />} /> 
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;