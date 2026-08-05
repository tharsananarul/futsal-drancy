import { motion } from 'motion/react';
import { ArrowRight, Shield, Sparkles, Download } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { getAssetPath } from '../../utils/assets';
import { CLUB_DATA } from '../../data/clubData';

export default function Hero() {
  const { name, motto, presentation, season } = CLUB_DATA;

  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-24 md:pt-32 lg:pt-36 pb-12 md:pb-20 lg:pb-24 flex items-center justify-center overflow-hidden bg-navy-dark">
      {/* Immersive Stadium Action Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={getAssetPath('images/IMG-20250528-WA0017.jpg')}
          alt="Futsal Drancy Match"
          className="w-full h-full object-cover object-center filter brightness-[0.5] contrast-125 saturate-110"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Balanced Stadium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/65 to-navy-dark/80"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-navy-dark/40 to-navy-dark/95"></div>

        {/* Golden Ambient Glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[500px] bg-accent/15 rounded-full blur-[120px] md:blur-[160px] pointer-events-none"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />
      </div>

      <div className="section-container relative z-10 w-full text-center max-w-4xl mx-auto space-y-5 md:space-y-8 px-4 sm:px-6">
        {/* OFFICIAL CREST */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col items-center justify-center space-y-3 md:space-y-4"
        >
          {/* Logo compact on mobile, scaled up on md: & lg: */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/40 via-accent/20 to-transparent blur-2xl group-hover:scale-125 transition-all duration-700 pointer-events-none"></div>

            <div className="relative w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44 p-1.5 md:p-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <img
                src={getAssetPath('assets/logos/drancy-futsal.png')}
                alt="Logo Officiel Futsal Drancy"
                className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(245,185,9,0.35)]"
              />
            </div>
          </div>

          {/* Official League Badge */}
          <div className="inline-flex items-center space-x-1.5 md:space-x-2 bg-navy-dark/85 backdrop-blur-xl border border-accent/40 px-3 py-1 md:px-5 md:py-2 rounded-full shadow-xl">
            <Sparkles size={11} className="text-accent animate-pulse shrink-0 md:size-3.5" />
            <span className="text-white font-black tracking-wider md:tracking-[0.25em] uppercase text-[9px] md:text-xs">
              Club Officiel FFF • Régional 2 • Saison {season}
            </span>
          </div>
        </motion.div>

        {/* PUNCHY TITLE & MOTTO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-3 md:space-y-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-[6.5rem] font-display font-black uppercase text-white leading-[0.92] md:leading-[0.88] tracking-tighter drop-shadow-2xl">
            {name.split(' ')[0]} <span className="text-accent text-glow">{name.split(' ')[1]}</span>
          </h1>

          <div className="inline-block bg-accent/15 border border-accent/30 text-accent font-black text-[10px] md:text-xs lg:text-sm uppercase tracking-widest md:tracking-[0.25em] px-3 py-1.5 md:px-6 md:py-2.5 rounded-xl md:rounded-2xl">
            {motto}
          </div>

          <p className="text-gray-300 text-[11px] md:text-sm lg:text-base leading-relaxed font-medium max-w-xl mx-auto pt-1">
            {presentation}
          </p>
        </motion.div>

        {/* ACTION BUTTONS (Compact on mobile, scaled up on md/lg) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2.5 md:gap-4 lg:gap-5 pt-1 md:pt-2"
        >
          {/* Main Yellow CTA: "Dossier d'inscription" */}
          <a
            href={getAssetPath('dossier-inscription.pdf')}
            download="dossier-inscription-futsal-drancy.pdf"
            className="bg-gradient-to-r from-accent via-yellow-400 to-accent text-navy-dark font-black px-3.5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3.5 rounded-full transition-all duration-300 uppercase tracking-wider text-xs md:text-sm lg:text-base shadow-[0_8px_25px_rgba(245,185,9,0.35)] hover:shadow-[0_12px_35px_rgba(245,185,9,0.55)] hover:scale-105 active:scale-95 flex items-center space-x-2 cursor-pointer group"
          >
            <Download size={14} className="animate-bounce shrink-0 md:size-4" />
            <span>Dossier d'inscription</span>
          </a>

          <NavLink
            to="/registration"
            className="bg-accent/20 hover:bg-accent text-accent hover:text-navy-dark border border-accent/40 font-black px-3.5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3.5 rounded-full transition-all duration-300 uppercase tracking-wider text-xs md:text-sm lg:text-base backdrop-blur-md active:scale-95 flex items-center space-x-2 cursor-pointer group"
          >
            <span>Rejoindre le Club</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform md:size-4" />
          </NavLink>

          <NavLink
            to="/team"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black px-3.5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3.5 rounded-full transition-all duration-300 uppercase tracking-wider text-xs md:text-sm lg:text-base backdrop-blur-md active:scale-95 flex items-center space-x-1.5 md:space-x-2 cursor-pointer"
          >
            <Shield size={13} className="text-accent md:size-4" />
            <span>Découvrir le Club</span>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}
