import { ReactNode, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { getAssetPath } from '../../utils/assets';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      {/* Global Background Watermark */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.03]">
        <img 
          src={getAssetPath('assets/logos/drancy-futsal.png')} 
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

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[9999] w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy-dark/80 backdrop-blur-md border border-accent/20 text-accent hover:bg-accent hover:text-navy-dark hover:border-accent shadow-[0_10px_30px_rgba(245,185,9,0.2)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Retour en haut"
          >
            <ArrowUp size={18} className="md:w-5 md:h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

