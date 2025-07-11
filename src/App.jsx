// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Routing from '@/routing/index'

const App = () => {
  return (
    <>
    <main>
    <Navbar/>
    <Routing/>
    <Footer/>
    </main>
    </>
  )
}

export default App