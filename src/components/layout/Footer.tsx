import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Youtube, ArrowRight } from 'lucide-react';
import { getAssetPath } from '../../utils/assets';
import { CLUB_DATA } from '../../data/clubData';

export default function Footer() {
  const { contact, name, motto } = CLUB_DATA;

  return (
    <footer className="bg-[#020d1c] border-t-2 border-accent/30 pt-20 pb-10 overflow-hidden relative">
      {/* Golden top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent"></div>
      {/* Premium glowing background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/8 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand & Identity */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <img src={getAssetPath('assets/logos/drancy-futsal.png')} className="w-full h-full object-contain" alt="Logo" />
                </div>
                <span className="font-display font-bold text-2xl uppercase text-white leading-none tracking-[0.05em]">
                  {name.split(' ')[0]} <br />
                  {name.split(' ')[1]}
                </span>
              </div>
              <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] leading-relaxed max-w-xs">
                {motto}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {[
                { icon: Instagram, url: contact.socials.instagram },
                { icon: Facebook, url: contact.socials.facebook },
                { icon: Youtube, url: contact.socials.youtube },
                { icon: Mail, url: `mailto:${contact.email}` }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/50 hover:bg-accent hover:text-navy-dark hover:border-accent hover:scale-105 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-subdisplay font-bold uppercase tracking-[0.15em] text-xs md:text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Le Club', path: '/club' },
                { name: 'Actualités', path: '/news' },
                { name: 'L\'Équipe', path: '/team' },
                { name: 'Calendrier', path: '/calendar' },
                { name: 'Boutique', path: '/boutique' },
                { name: 'Inscription', path: '/registration' }
              ].map((link) => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path} 
                    className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-[0.15em] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-subdisplay font-bold uppercase tracking-[0.15em] text-xs md:text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Informations
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5 group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                  <MapPin size={14} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/40 text-[8px] font-bold uppercase tracking-wider mb-0.5">Club</span>
                  <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider leading-relaxed">
                    {contact.address}
                  </span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3.5 group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                  <Phone size={14} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/40 text-[8px] font-bold uppercase tracking-wider mb-0.5">Téléphone</span>
                  <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">
                    {contact.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                  <Mail size={14} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/40 text-[8px] font-bold uppercase tracking-wider mb-0.5">Email</span>
                  <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">
                    {contact.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA / Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-subdisplay font-bold uppercase tracking-[0.15em] text-xs md:text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Newsletter
            </h4>
            <div className="space-y-4">
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] leading-relaxed">
                Rejoignez le fil d'actualité pour suivre les résultats et les événements du club.
              </p>
              
              {/* Premium Input */}
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="VOTRE ADRESSE E-MAIL" 
                  className="bg-white/[0.02] border border-white/10 px-4 py-3 text-[9px] font-black rounded-lg w-full focus:outline-none focus:border-accent text-white placeholder:text-gray-600 transition-all font-sans"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-accent hover:bg-white text-navy-dark px-3 rounded-md text-[9px] font-black transition-colors flex items-center justify-center">
                  <ArrowRight size={12} />
                </button>
              </div>

              <NavLink 
                to="/registration" 
                className="w-full bg-white/[0.02] border border-white/5 text-white hover:bg-accent hover:text-navy-dark py-3.5 rounded-xl text-[9px] font-black uppercase tracking-[0.25em] transition-all flex items-center justify-center space-x-2"
              >
                <span>Dossier d'Inscription</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Accent divider */}
        <div className="h-px bg-linear-to-r from-transparent via-accent/25 to-transparent mb-2"></div>
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-[9px] font-black uppercase tracking-[0.2em]">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-white/30">
              <p className="flex items-center gap-1.5">
                <span className="text-accent">©</span> 2026 {name.toUpperCase()}
              </p>
              <div className="hidden md:block w-[1px] h-3 bg-white/10"></div>
              <p>
                SAISON <span className="text-white/60">{CLUB_DATA.season}</span>
              </p>
            </div>

            <div className="hidden xl:block">
              <p className="text-[8px] text-accent/40 font-black tracking-[0.4em] uppercase">Passion • Formation • Performance</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white/20">
              <a href="#" className="hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5">Mentions Légales</a>
              <a href="#" className="hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5">Confidentialité</a>
              <a href="#" className="hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5">Credits</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
