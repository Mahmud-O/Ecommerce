import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import CartDrawer from '../CartDrawer/Drawer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Navbar />
      <CartDrawer />
      <div className="pt-[113px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
