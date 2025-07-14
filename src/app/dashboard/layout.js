import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar'; 

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="main-content">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
