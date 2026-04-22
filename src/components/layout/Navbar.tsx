import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getAssetPath } from '../../utils/assets';

const NAV_LINKS = [
  { name: 'Accueil', path: '/' },
  { name: 'Actualités', path: '/news' },
  { name: 'Équipe', path: '/team' },
  { name: 'Calendrier', path: '/calendar' },
  { name: 'Boutique', path: '/boutique' },
  { name: 'Inscription', path: '/registration' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${
        scrolled ? 'bg-navy-dark/98 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
      } h-16 md:h-20`}
    >
      <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between relative z-[10001]">
        {/* Logo */}
        <NavLink to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 md:space-x-6 group">
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.1 }}
            className="w-10 h-10 md:w-16 md:h-16 relative overflow-hidden flex items-center justify-center"
          >
            <img 
              src={getAssetPath('logo/futsal-logo.png')} 
              alt="Futsal Drancy Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-white font-display font-black text-sm md:text-xl lg:text-2xl leading-none uppercase tracking-tight group-hover:text-accent transition-colors">Futsal Drancy</span>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => 
                `text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-accent ${
                  isActive ? 'text-accent' : 'text-white/60'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/registration" className="btn-accent px-8 py-3 text-[10px]">
            S'inscrire
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:text-accent transition-colors relative z-[10002]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Starts below header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-16 bg-black/60 z-[9998]"
            />
            
            {/* Sidebar - Starts below header */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 w-[220px] h-[calc(100vh-64px)] bg-navy-dark z-[9999] shadow-2xl flex flex-col px-6 pb-8 border-l border-white/10"
            >
              <div className="flex-1 flex flex-col space-y-4 mt-8">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `uppercase text-xs tracking-[0.3em] font-bold transition-all block py-3 ${
                          isActive ? 'text-accent' : 'text-white/60 hover:text-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-white/5">
                <p className="text-white/60 text-[9px] font-black uppercase tracking-[0.3em]">Un état d'esprit, une attitude</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
