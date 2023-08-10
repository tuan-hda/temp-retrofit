import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <div className="flex h-screen max-h-screen flex-col">
      <Header />
      <div className="hide-scrollbar min-w-0 flex-1 overflow-auto bg-gray-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
