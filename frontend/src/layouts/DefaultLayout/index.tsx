import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}