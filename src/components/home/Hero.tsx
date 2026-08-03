import { motion } from 'motion/react';
import { ArrowRight, Shield, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { getAssetPath } from '../../utils/assets';
import { CLUB_DATA } from '../../data/clubData';

export default function Hero() {
  const { name, motto, presentation, season } = CLUB_DATA;

  return (
    <section className="relative min-h-screen pt-28 lg:pt-36 pb-16 lg:pb-24 flex items-center justify-center overflow-hidden bg-navy-dark">
      {/* Immersive Stadium Action Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={getAssetPath('images/IMG-20250528-WA0017.jpg')}
          alt="Futsal Drancy"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-125 saturate-110"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Stadium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/75 to-navy-dark/90"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-navy-dark/40 to-navy-dark"></div>

        {/* Golden Ambient Glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent/15 rounded-full blur-[160px] pointer-events-none"
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />
      </div>

      <div className="section-container relative z-10 w-full text-center max-w-5xl mx-auto space-y-8 sm:space-y-10">
        {/* MAJESTIC OFFICIAL CREST */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          {/* Logo with Golden Aura */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/50 via-accent/25 to-transparent blur-3xl group-hover:scale-125 transition-all duration-700 pointer-events-none"></div>

            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 p-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <img
                src={getAssetPath('assets/logos/drancy-futsal.png')}
                alt="Logo Officiel Futsal Drancy"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(245,185,9,0.35)]"
              />
            </div>
          </div>

          {/* Official League Badge */}
          <div className="inline-flex items-center space-x-2 bg-navy-dark/80 backdrop-blur-xl border border-accent/40 px-5 py-2 rounded-full shadow-2xl">
            <Sparkles size={14} className="text-accent animate-pulse" />
            <span className="text-white font-black tracking-[0.25em] uppercase text-[10px] sm:text-xs">
              Club Officiel FFF • Régional 2 • Saison {season}
            </span>
          </div>
        </motion.div>

        {/* PUNCHY ICONIC TITLE & MOTTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-black uppercase text-white leading-[0.88] tracking-tighter drop-shadow-2xl">
            {name.split(' ')[0]} <span className="text-accent text-glow">{name.split(' ')[1]}</span>
          </h1>

          <div className="inline-block bg-accent/15 border border-accent/30 text-accent font-black text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] px-6 py-2.5 rounded-2xl">
            {motto}
          </div>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto pt-2">
            {presentation}
          </p>
        </motion.div>

        {/* CLEAN ACTION BUTTONS */}
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
            <span>Rejoindre le Club</span>
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </NavLink>

          <NavLink
            to="/team"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm backdrop-blur-md active:scale-95 flex items-center space-x-2 cursor-pointer"
          >
            <Shield size={16} className="text-accent" />
            <span>Découvrir le Club</span>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}
