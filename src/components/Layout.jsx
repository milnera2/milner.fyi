import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Navbar />
      {/* pt-20 adds enough top padding to clear the navbar height */}
      <main className="flex-grow pt-20 md:pt-24"> 
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;