import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/futsal-drancy/logo/futsal-logo.png" className="w-10 h-10 object-contain" alt="Logo" />
              <span className="font-display font-black text-lg uppercase">Futsal Drancy</span>
            </div>
            <p className="text-accent font-black tracking-[0.2em] uppercase text-[9px] italic">
              Un État d'Esprit, une Attitude
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/futsal_drancy/?hl=fr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/FutsalDrancyOfficiel" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-black uppercase italic tracking-widest text-xs">Navigation</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {['Accueil', 'Actualités', 'L\'Équipe', 'Calendrier', 'Boutique', 'Inscription'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/30 hover:text-accent text-[10px] font-bold uppercase tracking-widest transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-black uppercase italic tracking-widest text-xs">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-white/30">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">85 Rue Auguste Blanqui, 93700 Drancy</span>
              </div>
              <div className="flex items-center space-x-3 text-white/30">
                <Phone size={14} className="text-accent shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-widest">01 48 35 94 45</span>
              </div>
              <div className="flex items-center space-x-3 text-white/30">
                <Mail size={14} className="text-accent shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-widest">550738@lpiff.fr</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-display font-black uppercase italic tracking-widest text-xs">Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-bold w-full focus:outline-none focus:border-accent text-white"
              />
              <button className="bg-accent text-navy-dark px-4 py-2 text-[10px] font-black hover:bg-white transition-colors">OK</button>
            </div>
            <NavLink to="/contact" className="btn-accent w-full py-3 text-[9px]">Contactez-nous</NavLink>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[9px] font-black uppercase tracking-widest">
          <p>© 2026 FUTSAL DRANCY</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
