import { Outlet, useLocation } from 'react-router-dom';
import HomeHeader from './components/Header/HomeHeader';
import DashboardHeader from './components/Header/DashboardHeader';
import Footer from './components/Footer/Footer';

function Layout() {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === '/') {
      return <HomeHeader />;
    } else {
      return <DashboardHeader />;
    }
  };

  return (
    <>
      {renderHeader()}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
