import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, X, Calendar, MapPin, Shield, Trophy, Users, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { getAssetPath } from '../../utils/assets';
import { CLUB_DATA } from '../../data/clubData';
import { ClubLogo } from '../ui/ClubLogo';

export default function Hero() {
  const { name, motto, presentation, season, upcomingMatches } = CLUB_DATA;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Take the first upcoming match for the floating hero card
  const nextMatch = upcomingMatches[0] || {
    opponent: 'JS DRANCY',
    date: 'Sam. 26 Avril',
    time: '18:00',
    location: 'Gymnase Joliot Curie',
    team: 'Séniors A',
  };

  return (
    <section className="relative min-h-screen pt-28 lg:pt-32 pb-16 lg:pb-20 flex items-center justify-center overflow-hidden bg-navy-dark">
      {/* Dynamic Background Image with Dark & Ambient Glow Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={getAssetPath('images/IMG-20250528-WA0017.jpg')}
          alt="Futsal Drancy"
          className="w-full h-full object-cover opacity-25 filter grayscale contrast-125"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy-dark/85 to-navy-dark"></div>

        {/* Ambient Gold Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[130px] pointer-events-none"></div>

        {/* Geometric HUD Grid / Circular Radar Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
          {/* Subtle concentric circles in center */}
          <circle cx="50%" cy="50%" r="300" fill="none" stroke="#ffffff" strokeWidth="1" />
          <circle cx="50%" cy="50%" r="500" fill="none" stroke="#ffffff" strokeWidth="1" />
        </svg>
      </div>

      {/* Main Editorial Canvas Frame */}
      <div className="section-container relative z-10 w-full">
        {/* Outer Frame with Technical HUD Bracket Accents */}
        <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
          {/* HUD Corner Bracket Accents (inspired by editorial magazine layouts) */}
          <div className="absolute top-4 left-4 text-accent/40 font-mono text-xs select-none pointer-events-none">┌ HUD_93</div>
          <div className="absolute top-4 right-4 text-accent/40 font-mono text-xs select-none pointer-events-none">┐ R2_FFF</div>
          <div className="absolute bottom-4 left-4 text-accent/40 font-mono text-xs select-none pointer-events-none">└ EST_2003</div>
          <div className="absolute bottom-4 right-4 text-accent/40 font-mono text-xs select-none pointer-events-none">┘ DRANCY</div>

          {/* Top Bar Header Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 pt-2 border-b border-white/10 pb-6">
            <div className="flex items-center space-x-3 flex-wrap gap-y-2">
              <span className="bg-accent text-navy-dark font-black text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-lg shadow-accent/20">
                Régional 2 FFF
              </span>
              <span className="bg-white/10 text-white/80 font-bold text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border border-white/10">
                Seine-Saint-Denis (93)
              </span>
            </div>

            <div className="flex items-center space-x-2 text-accent font-black tracking-[0.3em] uppercase text-[11px]">
              <Sparkles size={14} className="text-accent animate-pulse" />
              <span>Saison {season}</span>
            </div>
          </div>

          {/* Editorial Split Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Editorial Typography & Actions (Col Span 7) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
            >
              {/* Floating Mini Action Thumbnail / Video Preview (like top-left box in Image 2) */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/10 p-2 pr-5 rounded-full cursor-pointer transition-all duration-300 group shadow-lg"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-accent/40 flex-shrink-0">
                  <img
                    src={getAssetPath('images/IMG-20250528-WA0002.jpg')}
                    alt="Preview"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play size={14} className="text-accent fill-accent ml-0.5" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-black uppercase tracking-wider group-hover:text-accent transition-colors">
                    Voir le Club en Action
                  </span>
                  <span className="text-white/50 text-[9px] font-semibold uppercase tracking-widest">
                    Vidéo & Galerie
                  </span>
                </div>
              </motion.div>

              {/* Main Headline with Mixed Serif / Display Typography */}
              <div className="space-y-3">
                <p className="text-accent font-serif italic text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide">
                  Nous sommes <span className="underline decoration-accent/40 underline-offset-8">la meute</span>
                </p>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[5.8rem] font-display font-black uppercase text-white leading-[0.88] tracking-tighter">
                  {name.split(' ')[0]} <br />
                  <span className="text-accent text-glow">{name.split(' ')[1]}</span>
                </h1>
              </div>

              {/* Motto & Presentation */}
              <div className="space-y-4 max-w-xl">
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.2em] border-l-2 border-accent pl-4 py-1">
                  {motto}
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
                  {presentation}
                </p>
              </div>

              {/* CTA Action Buttons Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <NavLink
                  to="/registration"
                  className="bg-accent hover:bg-white text-navy-dark font-black px-8 py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-xs shadow-xl shadow-accent/20 active:scale-95 flex items-center space-x-3 cursor-pointer group"
                >
                  <span>Rejoindre le Club</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </NavLink>

                <NavLink
                  to="/calendar"
                  className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-black px-8 py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-xs active:scale-95 flex items-center justify-center cursor-pointer"
                >
                  <span>Prochains Matchs</span>
                </NavLink>
              </div>

              {/* Bottom Quick Stats Bar */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-accent">
                    <Trophy size={14} />
                    <span className="font-display font-black text-xl sm:text-2xl text-white">2003</span>
                  </div>
                  <span className="block text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Année de Fondation
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-accent">
                    <Users size={14} />
                    <span className="font-display font-black text-xl sm:text-2xl text-white">250+</span>
                  </div>
                  <span className="block text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Licenciés Actifs
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-accent">
                    <Shield size={14} />
                    <span className="font-display font-black text-xl sm:text-2xl text-white">R2</span>
                  </div>
                  <span className="block text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Niveau FFF
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Full-Height Photo Card + Floating Next Match Widget (Col Span 5) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 relative"
            >
              {/* Photo Card Frame */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-accent/30 shadow-2xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] group">
                <img
                  src={getAssetPath('images/IMG-20250528-WA0017.jpg')}
                  alt="Futsal Drancy Match Action"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                />

                {/* Subtle Gradient & Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent"></div>

                {/* Top Corner Badge on Photo */}
                <div className="absolute top-4 left-4 bg-navy-dark/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  <span className="text-white text-[10px] font-black uppercase tracking-widest">
                    Effectif 2025/2026
                  </span>
                </div>

                {/* FLOATING NEXT MATCH CARD (Inspired by the bottom-right album card in Image 2) */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 bg-navy-dark/95 backdrop-blur-xl border border-accent/30 rounded-2xl p-4 shadow-2xl space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[9px] font-black text-accent uppercase tracking-[0.25em] flex items-center gap-1.5">
                      <Calendar size={12} />
                      Prochain Match Officiel
                    </span>
                    <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">
                      {nextMatch.team}
                    </span>
                  </div>

                  {/* Team vs Team Layout */}
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center space-x-2.5">
                      <ClubLogo name="DRANCY FUTSAL" className="w-8 h-8" />
                      <span className="text-white font-black text-sm uppercase">DRANCY</span>
                    </div>

                    <span className="bg-accent/20 text-accent font-black text-xs px-2.5 py-1 rounded-md">
                      VS
                    </span>

                    <div className="flex items-center space-x-2.5">
                      <span className="text-white/70 font-black text-sm uppercase">{nextMatch.opponent}</span>
                      <ClubLogo name={nextMatch.opponent} className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Match Time & Location */}
                  <div className="flex items-center justify-between text-[10px] font-semibold text-gray-400 pt-1">
                    <span className="text-white font-bold">{nextMatch.date} • {nextMatch.time}</span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin size={12} className="text-accent" />
                      {nextMatch.location}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal Showcase (triggered when clicking the top-left video badge) */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-navy-dark border border-accent/30 rounded-3xl overflow-hidden p-6 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-navy-dark font-black text-xs">
                    FD
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-black uppercase">Futsal Drancy en Action</h3>
                    <p className="text-gray-400 text-xs font-semibold">Galerie & Esprit d'Équipe</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-navy-dark flex items-center justify-center text-white transition-all cursor-pointer"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Showcase Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto p-1">
                <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
                  <img
                    src={getAssetPath('images/IMG-20250528-WA0002.jpg')}
                    alt="Entraînement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
                  <img
                    src={getAssetPath('images/IMG-20250528-WA0006.jpg')}
                    alt="Équipe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
                  <img
                    src={getAssetPath('images/IMG-20250615-WA0068.jpg')}
                    alt="Victoire"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
                  <img
                    src={getAssetPath('images/IMG-20250615-WA0071.jpg')}
                    alt="Match"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="bg-accent text-navy-dark font-black px-6 py-2.5 rounded-full text-xs uppercase tracking-widest hover:bg-white transition-colors cursor-pointer"
                >
                  Fermer la galerie
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
