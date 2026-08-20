import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import EmergencyBar from './EmergencyBar';
import SEOHead from './SEOHead';

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead />
      <EmergencyBar />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default Layout;
