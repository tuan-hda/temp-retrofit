import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useConnect } from '../hooks';
type Props = {
  children?: React.ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <div className="flex h-screen max-h-screen flex-col bg-p-black-1 relative">
      {/* <div className="h-[40px] bg-white/80 w-[200px]">{location.pathname}</div> */}
      <Header />
      <div className="hide-scrollbar min-w-0 flex-1 overflow-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
