import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';
import Header from '../component/Header';
import ScrollToTopButton from '../component/ScrolToTopBtn';

const MainLayout = () => {
  return (
    <div className='bg-[#323647]'>
      <Header></Header>
      <Outlet></Outlet>
      <ScrollToTopButton></ScrollToTopButton>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;