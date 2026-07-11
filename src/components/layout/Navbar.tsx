import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getAssetPath } from '../../utils/assets';

const NAV_LINKS = [
  { name: 'Accueil', path: '/' },
  { name: 'Le Club', path: '/club' },
  { name: 'Actualités', path: '/news' },
  { name: 'Équipes', path: '/team' },
  { name: 'Calendrier', path: '/calendar' },
  { name: 'Boutique', path: '/boutique' },
  { name: 'Inscription', path: '/registration' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  const updateCartCount = () => {
    const savedCart = localStorage.getItem('futsal_drancy_cart');
    if (savedCart) {
      try {
        const cart = JSON.parse(savedCart);
        const count = cart.reduce((total: number, item: any) => total + item.quantity, 0);
        setCartCount(count);
      } catch (e) {
        setCartCount(0);
      }
    } else {
      setCartCount(0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    updateCartCount();
    window.addEventListener('cart-updated', updateCartCount);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('cart-updated', updateCartCount);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] p-2 md:p-6 pointer-events-none flex justify-center">
      {/* Outer Wrapper: Fits capsule size on mobile/tablet, stretches to full width max-w-[1500px] on PC */}
      <div className="w-full max-w-sm md:max-w-md lg:max-w-[1500px] pointer-events-auto relative">
        
        {/* Navbar: rounded-full capsule on mobile, rounded-2xl spacious bar on PC */}
        <nav 
          className={`w-full transition-all duration-500 flex items-center justify-between border ${
            scrolled 
              ? 'bg-navy-dark/60 backdrop-blur-xl border-white/5 py-1.5 lg:py-2.5 shadow-lg rounded-full lg:rounded-2xl px-4 lg:px-8' 
              : 'bg-transparent border-transparent py-2.5 lg:py-4 rounded-full lg:rounded-2xl px-4 lg:px-8'
          }`}
        >
          {/* Logo & Brand */}
          <NavLink to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 md:space-x-4 group">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-9 h-9 lg:w-16 lg:h-16 relative flex items-center justify-center"
            >
              <img 
                src={getAssetPath('assets/logos/drancy-futsal.png')} 
                alt="Futsal Drancy Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <span className="text-white font-display font-bold text-xs lg:text-xl xl:text-2xl leading-none uppercase tracking-[0.05em] group-hover:text-accent transition-colors">
              Futsal Drancy
            </span>
          </NavLink>

          {/* Desktop Links (Spacious layout with underline indicators) */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  className={() => 
                    `text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.15em] transition-all hover:text-white relative py-2 ${
                      isActive ? 'text-white' : 'text-white/60'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  {link.name === 'Boutique' && cartCount > 0 && (
                    <span className="absolute -top-1 -right-4 bg-accent text-navy-dark text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                      {cartCount}
                    </span>
                  )}
                  {/* Active Indicator dot */}
                  {isActive && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Desktop Right Actions (Spacious) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Cart Icon */}
            {cartCount > 0 && (
              <NavLink to="/boutique" className="relative p-2 text-white hover:text-accent transition-colors">
                <ShoppingBag size={20} />
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-navy-dark text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </NavLink>
            )}
            <NavLink 
              to="/registration" 
              className="px-6 py-2.5 rounded-xl bg-accent hover:bg-white text-navy-dark text-[9px] font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-accent/10 active:scale-95 flex items-center justify-center"
            >
              S'inscrire
            </NavLink>
          </div>

          {/* Mobile Actions & Menu Trigger (Capsule styled icons) */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Cart Icon Mobile */}
            {cartCount > 0 && (
              <NavLink to="/boutique" className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:text-accent transition-colors relative">
                <ShoppingBag size={14} />
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-navy-dark text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </NavLink>
            )}

            {/* Circular Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-accent transition-colors relative z-[10002]"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Floating Dropdown Mobile Menu Card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-3 bg-navy-dark/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-5 shadow-2xl flex flex-col space-y-4 pointer-events-auto z-[9998] max-w-sm mx-auto lg:hidden"
            >
              {/* Background gradient blur */}
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

              {/* Links */}
              <div className="flex flex-col space-y-2 relative z-10">
                {NAV_LINKS.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={() => 
                        `uppercase text-xs font-black tracking-widest flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                          isActive 
                            ? 'bg-accent/10 border border-accent/20 text-accent shadow-sm' 
                            : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      {link.name === 'Boutique' && cartCount > 0 ? (
                        <span className="bg-accent text-navy-dark text-[9px] font-black px-2 py-0.5 rounded-full">
                          {cartCount}
                        </span>
                      ) : (
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </NavLink>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/5 space-y-4 relative z-10">
                <NavLink 
                  to="/registration"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 rounded-2xl bg-accent hover:bg-white text-navy-dark text-[9px] font-black uppercase tracking-[0.25em] transition-all flex items-center justify-center shadow-md shadow-accent/10"
                >
                  S'inscrire au club
                </NavLink>
                <p className="text-white/30 text-[8px] font-black uppercase tracking-[0.3em] text-center">
                  Futsal Drancy • Saison 2025/2026
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
