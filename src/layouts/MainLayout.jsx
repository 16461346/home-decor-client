import { Outlet } from 'react-router'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import logo from '../assets/images/Screenshot_from_2025-12-07_12-52-30-removebg-preview.png'
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer logo={logo} />
    </div>
  )
}

export default MainLayout
