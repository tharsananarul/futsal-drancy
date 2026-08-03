import { motion } from 'motion/react';
import { ArrowRight, Shield, Trophy, Users, Calendar, MapPin, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { getAssetPath } from '../../utils/assets';
import { CLUB_DATA } from '../../data/clubData';
import { ClubLogo } from '../ui/ClubLogo';

export default function Hero() {
  const { name, motto, presentation, season, upcomingMatches } = CLUB_DATA;

  // Next match for the floating widget
  const nextMatch = upcomingMatches[0] || {
    opponent: 'JS DRANCY',
    date: 'Sam. 26 Avril',
    time: '18:00',
    location: 'Gymnase Joliot Curie',
    team: 'Séniors A',
  };

  return (
    <section className="relative min-h-screen pt-28 lg:pt-36 pb-16 lg:pb-24 flex items-center justify-center overflow-hidden bg-navy-dark">
      {/* Immersive Stadium Background Image with Dark Vignette & Gold Glows */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={getAssetPath('images/IMG-20250528-WA0017.jpg')}
          alt="Futsal Drancy Match"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-125 saturate-110"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Stadium Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/90"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-navy-dark/40 to-navy-dark"></div>

        {/* Ambient Gold Glow Effects */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/15 rounded-full blur-[150px] pointer-events-none"
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />
      </div>

      <div className="section-container relative z-10 w-full text-center space-y-10 max-w-6xl mx-auto">
        {/* PROMINENT OFFICIAL CLUB CREST */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <div className="relative group cursor-pointer">
            {/* Glowing Aura behind Logo */}
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl group-hover:bg-accent/50 transition-all duration-500"></div>
            
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 p-2 bg-navy-dark/80 backdrop-blur-md rounded-full border-2 border-accent/40 shadow-2xl flex items-center justify-center group-hover:border-accent group-hover:scale-105 transition-all duration-500">
              <img
                src={getAssetPath('assets/logos/drancy-futsal.png')}
                alt="Logo Officiel Futsal Drancy"
                className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          {/* Official League Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-accent/30 px-4 py-1.5 rounded-full shadow-lg">
            <Sparkles size={14} className="text-accent animate-pulse" />
            <span className="text-white font-black tracking-[0.25em] uppercase text-[10px] sm:text-xs">
              Club Officiel FFF • Régional 2 • Saison {season}
            </span>
          </div>
        </motion.div>

        {/* MONUMENTAL CLUB TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-black uppercase text-white leading-[0.88] tracking-tighter drop-shadow-2xl">
            {name.split(' ')[0]} <span className="text-accent text-glow">{name.split(' ')[1]}</span>
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl text-white/95 font-black uppercase tracking-[0.2em] max-w-3xl mx-auto border-y border-accent/30 py-3 [text-shadow:0_0_30px_rgba(245,185,9,0.3)]">
            {motto}
          </p>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto pt-2">
            {presentation}
          </p>
        </motion.div>

        {/* CTAS / ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2"
        >
          <NavLink
            to="/registration"
            className="bg-accent hover:bg-white text-navy-dark font-black px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-2xl shadow-accent/30 active:scale-95 flex items-center space-x-3 cursor-pointer group"
          >
            <span>Rejoindre la Meute</span>
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </NavLink>

          <NavLink
            to="/calendar"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm backdrop-blur-md active:scale-95 flex items-center justify-center cursor-pointer"
          >
            <span>Prochains Matchs</span>
          </NavLink>
        </motion.div>

        {/* FLOATING NEXT MATCH & CLUB PILLARS CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {/* Card 1: Next Official Match */}
          <div className="bg-white/5 backdrop-blur-xl border border-accent/30 rounded-2xl p-5 hover:border-accent/60 transition-all duration-300 shadow-2xl space-y-3 group cursor-pointer">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] flex items-center gap-1.5">
                <Calendar size={13} />
                Prochain Match Officiel
              </span>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                {nextMatch.team}
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-center space-x-2">
                <ClubLogo name="DRANCY FUTSAL" className="w-7 h-7" />
                <span className="text-white font-black text-xs sm:text-sm uppercase">DRANCY</span>
              </div>
              <span className="bg-accent/20 text-accent font-black text-[11px] px-2 py-0.5 rounded">
                VS
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-white/70 font-black text-xs sm:text-sm uppercase">{nextMatch.opponent}</span>
                <ClubLogo name={nextMatch.opponent} className="w-7 h-7" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-semibold text-gray-400 pt-1">
              <span className="text-white font-bold">{nextMatch.date} • {nextMatch.time}</span>
              <span className="flex items-center gap-1 text-gray-400">
                <MapPin size={12} className="text-accent" />
                {nextMatch.location}
              </span>
            </div>
          </div>

          {/* Card 2: Excellence & Formation */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-accent/40 transition-all duration-300 shadow-2xl space-y-2 group cursor-pointer">
            <div className="flex items-center space-x-2 text-accent">
              <Trophy size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Formation d'Équipes</span>
            </div>
            <h3 className="text-white font-black text-base uppercase">De U5 aux Séniors R2</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Encadrement diplômé et formation d'excellence pour tous les âges en Seine-Saint-Denis.
            </p>
          </div>

          {/* Card 3: Ancrage local et Fierté */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-accent/40 transition-all duration-300 shadow-2xl space-y-2 group cursor-pointer">
            <div className="flex items-center space-x-2 text-accent">
              <Users size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Communauté & Fierté</span>
            </div>
            <h3 className="text-white font-black text-base uppercase">250+ Licenciés Passionnés</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Une meute soudée portant haut les couleurs et les valeurs de Drancy sur tous les terrains.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
