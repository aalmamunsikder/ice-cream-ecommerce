import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import FooterNew from './FooterNew';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <FooterNew />
    </div>
  );
};

export default Layout;