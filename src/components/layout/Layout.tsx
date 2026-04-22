import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { getAssetPath } from '../../utils/assets';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      {/* Global Background Watermark */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.03]">
        <img 
          src={getAssetPath('logo/futsal-logo.png')} 
          alt="" 
          className="w-[100vw] h-[100vw] object-contain grayscale max-w-none"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
