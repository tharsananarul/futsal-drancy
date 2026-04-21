import { motion } from 'motion/react';
import { ArrowRight, Play, Trophy } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { getAssetPath } from '../../utils/assets';
import { CLUB_DATA } from '../../data/clubData';

export default function Hero() {
  const { latestResult, nextMatch, season, motto } = CLUB_DATA;
  return (
    <section className="relative min-h-screen md:h-screen flex items-start md:items-center bg-navy-dark hero-gradient pt-24 md:pt-0 overflow-hidden">
      {/* Background Decor - Large Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] w-[150vw] md:w-[80vw] h-[150vw] md:h-[80vw] pointer-events-none">
        <img 
          src={getAssetPath('logo/futsal-logo.png')} 
          alt="" 
          className="w-full h-full object-contain filter grayscale"
        />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-start md:items-center pt-8 md:pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 text-center lg:text-left mt-8 md:mt-0"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[9px] md:text-[10px] italic block">
              {CLUB_DATA.motto}
            </span>
            <div className="inline-flex">
              <span className="bg-white/10 text-white px-4 py-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-sm">
                Saison {CLUB_DATA.season}
              </span>
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.85] font-display italic font-black uppercase tracking-tighter">
            PLUS QU'UN <br />
            <span className="text-accent relative inline-block">
              CLUB.
            </span>
          </h1>

          <p className="text-gray-300 text-xs md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed font-medium uppercase tracking-widest opacity-80">
            Rejoignez l'élite du Futsal à Drancy. Formation d'excellence et passion de la compétition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <NavLink to="/registration" className="btn-accent px-12 py-5 text-center group">
              Nous Rejoindre
              <ArrowRight size={16} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink to="/team" className="btn-outline px-12 py-5 border-white/20 text-white text-center hover:bg-white hover:text-navy-dark hover:border-white">
              L'Équipe
            </NavLink>
          </div>
        </motion.div>

        {/* Match Result / Card - Now MASSIVE & Responsive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 h-max"
        >
          <div className="glass-card rounded-[2rem] p-6 md:p-10 flex flex-col justify-between min-h-[320px] lg:h-96 card-hover relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trophy size={140} className="text-white md:block hidden" />
            </div>
            <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-accent font-black italic">Dernier Résultat</span>
            <div className="flex items-center justify-between relative z-10 my-4 px-2 md:px-4">
              <div className="text-center">
                <img src={getAssetPath('logo/futsal-logo.png')} className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 opacity-100 drop-shadow-[0_0_15px_rgba(245,185,9,0.3)]" alt="FD" />
                <div className="text-6xl md:text-8xl lg:text-9xl font-black italic text-white tracking-tighter leading-none">{latestResult.homeScore}</div>
              </div>
              <div className="text-white/20 font-black text-3xl md:text-5xl italic tracking-tighter">VS</div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl mx-auto mb-3 md:mb-4 flex items-center justify-center font-black text-xs border border-white/10">{latestResult.awayTeam}</div>
                <div className="text-6xl md:text-8xl lg:text-9xl font-black italic text-white tracking-tighter leading-none">{latestResult.awayScore}</div>
              </div>
            </div>
            <span className="text-[10px] md:text-xs text-center text-green-400 font-black uppercase tracking-[0.4em] italic bg-green-400/10 py-3 rounded-xl border border-green-400/20">
              {latestResult.resultText}
            </span>
          </div>

          <div className="glass-card rounded-[2rem] p-6 md:p-10 flex flex-col justify-between min-h-[320px] lg:h-96 card-hover overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Play size={140} className="text-white md:block hidden" />
            </div>
            <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-400 font-black italic">Prochain Match</span>
            <div className="flex flex-col items-center justify-center gap-4 my-auto relative z-10">
              <div className="text-base md:text-lg lg:text-xl font-black uppercase text-white tracking-[0.2em] text-center">{nextMatch.venue}</div>
              <div className="w-16 md:w-24 h-[2px] md:h-[3px] bg-accent/40 my-1"></div>
              <div className="text-sm md:text-base lg:text-lg font-black uppercase text-accent italic tracking-widest text-center">{nextMatch.date} • {nextMatch.time}</div>
              
              <div className="mt-4 md:mt-6 flex flex-col items-center">
                <div className="px-6 md:px-8 py-2 md:py-3 bg-white/5 border border-white/10 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/60 backdrop-blur-md text-center">
                  {nextMatch.info}
                </div>
                <span className="mt-3 md:mt-4 text-[9px] md:text-[10px] text-white/30 font-bold uppercase tracking-widest">{nextMatch.gym}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
          
      {/* Decorative accents */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full z-0"></div>
      
      {/* Scroll Down */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 uppercase text-[10px] tracking-[0.5em]"
      >
        <span>Scroll</span>
        <div className="w-px h-10 bg-white/20 mt-4"></div>
      </motion.div>
    </section>
  );
}
