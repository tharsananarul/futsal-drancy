import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import { getAssetPath } from '../../utils/assets';
import { CLUB_DATA } from '../../data/clubData';

export default function Footer() {
  const { contact, name, motto } = CLUB_DATA;

  return (
    <footer className="bg-navy-dark border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[120px] rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand & Identity */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={getAssetPath('logo/futsal-logo.png')} className="w-12 h-12 object-contain" alt="Logo" />
                <span className="font-display font-black text-2xl uppercase italic text-white leading-none">
                  {name.split(' ')[0]} <br />
                  <span className="text-accent">{name.split(' ')[1]}</span>
                </span>
              </div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
                {motto}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {[
                { icon: Instagram, url: contact.socials.instagram },
                { icon: Facebook, url: contact.socials.facebook },
                { icon: Twitter, url: contact.socials.twitter },
                { icon: Youtube, url: "#" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white font-display font-black uppercase italic tracking-widest text-sm border-l-4 border-accent pl-4">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Actualités', path: '/news' },
                { name: 'L\'Équipe', path: '/team' },
                { name: 'Calendrier', path: '/calendar' },
                { name: 'Boutique', path: '/boutique' },
                { name: 'Inscription', path: '/registration' }
              ].map((link) => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path} 
                    className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-white font-display font-black uppercase italic tracking-widest text-sm border-l-4 border-accent pl-4">Informations</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[10px] font-black uppercase tracking-widest mb-1">Gymnase</span>
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    {contact.address}
                  </span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                  <Phone size={16} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[10px] font-black uppercase tracking-widest mb-1">Téléphone</span>
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                    {contact.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                  <Mail size={16} className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[10px] font-black uppercase tracking-widest mb-1">Email</span>
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                    {contact.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA / Newsletter */}
          <div className="space-y-8">
            <h4 className="text-white font-display font-black uppercase italic tracking-widest text-sm border-l-4 border-accent pl-4">Rejoindre</h4>
            <div className="space-y-6">
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                Soyez les premiers informés des résultats et des événements du club.
              </p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="VOTRE EMAIL" 
                  className="bg-white/5 border border-white/10 px-6 py-4 text-[10px] font-black w-full focus:outline-none focus:border-accent text-white placeholder:text-gray-700 transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-accent text-navy-dark px-4 text-[9px] font-black hover:bg-white transition-colors">
                  OK
                </button>
              </div>
              <NavLink 
                to="/registration" 
                className="w-full bg-white/5 border border-white/10 text-white hover:bg-accent hover:text-navy-dark py-4 text-[9px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center space-x-3"
              >
                <span>Dossier d'Inscription</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-[9px] font-black uppercase tracking-[0.2em]">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-white/30">
              <p className="flex items-center gap-2">
                <span className="text-accent">©</span> 2026 {name.toUpperCase()}
              </p>
              <div className="hidden md:block w-px h-3 bg-white/10"></div>
              <p className="flex items-center gap-2">
                SAISON <span className="text-white/60">{CLUB_DATA.season}</span>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white/20">
              <a href="#" className="hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">Mentions Légales</a>
              <a href="#" className="hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">Confidentialité</a>
              <a href="#" className="hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">Credits</a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[7px] text-white/20 font-black tracking-[1em] uppercase">Passion • Formation • Performance</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

