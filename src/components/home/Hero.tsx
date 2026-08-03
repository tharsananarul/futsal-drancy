import { motion } from 'motion/react';
import { ArrowRight, Shield, Trophy, Users, Calendar, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { getAssetPath } from '../../utils/assets';
import { CLUB_DATA } from '../../data/clubData';
import { ClubLogo } from '../ui/ClubLogo';

export default function Hero() {
  const { name, motto, presentation, season, upcomingMatches } = CLUB_DATA;

  // Next match for the floating card
  const nextMatch = upcomingMatches[0] || {
    opponent: 'JS DRANCY',
    date: 'Sam. 26 Avril',
    time: '18:00',
    location: 'Gymnase Joliot Curie',
    team: 'Séniors A',
  };

  return (
    <section className="relative min-h-screen pt-28 lg:pt-36 pb-16 lg:pb-24 flex items-center justify-center overflow-hidden bg-navy-dark">
      {/* Immersive Stadium Background Image with Vignette & Gold Glows */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={getAssetPath('images/IMG-20250528-WA0017.jpg')}
          alt="Futsal Drancy Match"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-125 saturate-110"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Stadium Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/90"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-navy-dark/50 to-navy-dark"></div>

        {/* Ambient Gold Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-10 w-[600px] h-[500px] bg-accent/15 rounded-full blur-[160px] pointer-events-none"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[130px] pointer-events-none"></div>

        {/* Geometric Grid Background Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-2" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-2)" />
        </svg>
      </div>

      <div className="section-container relative z-10 w-full max-w-7xl mx-auto">
        {/* Asymmetric Dual-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Modern Club Branding, Headline & CTAs (Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Header Badge Row with Floating Official Crest */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Floating Transparent Crest Badge */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-accent/30 p-2 pr-5 rounded-full shadow-xl group cursor-pointer"
              >
                <div className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-accent/30 blur-md group-hover:bg-accent/50 transition-colors"></div>
                  <img
                    src={getAssetPath('assets/logos/drancy-futsal.png')}
                    alt="Logo Futsal Drancy"
                    className="relative w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(245,185,9,0.4)]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-black uppercase tracking-wider group-hover:text-accent transition-colors">
                    Futsal Drancy
                  </span>
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Sparkles size={10} /> Club Officiel FFF
                  </span>
                </div>
              </motion.div>

              {/* Season & Category Pills */}
              <span className="bg-white/10 text-white/90 border border-white/15 px-4 py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
                Régional 2 • Saison {season}
              </span>
            </div>

            {/* High-Impact Sports Headline */}
            <div className="space-y-2">
              <span className="text-accent font-black uppercase tracking-[0.35em] text-xs sm:text-sm block">
                Seine-Saint-Denis (93)
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] xl:text-[6.8rem] font-display font-black uppercase text-white leading-[0.88] tracking-tighter">
                FUTSAL <br />
                <span className="text-accent text-glow">{name.split(' ')[1]}</span>
              </h1>
            </div>

            {/* Motto Banner & Club Presentation */}
            <div className="space-y-4 max-w-2xl">
              <div className="inline-block bg-accent/15 border border-accent/30 text-accent font-black text-xs sm:text-sm uppercase tracking-[0.25em] px-4 py-2 rounded-xl">
                {motto}
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                {presentation}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <NavLink
                to="/registration"
                className="bg-accent hover:bg-white text-navy-dark font-black px-8 sm:px-9 py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-2xl shadow-accent/25 active:scale-95 flex items-center space-x-3 cursor-pointer group"
              >
                <span>Rejoindre le Club</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </NavLink>

              <NavLink
                to="/calendar"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black px-8 sm:px-9 py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm backdrop-blur-md active:scale-95 flex items-center space-x-2 cursor-pointer"
              >
                <span>Prochains Matchs</span>
                <ChevronRight size={16} className="text-accent" />
              </NavLink>
            </div>

            {/* Inline Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <Trophy size={18} />
                </div>
                <div>
                  <span className="block text-white font-display font-black text-xl sm:text-2xl leading-none">2003</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Fondation</span>
                </div>
              </div>

              <div className="w-px h-8 bg-white/10 hidden sm:block"></div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <Users size={18} />
                </div>
                <div>
                  <span className="block text-white font-display font-black text-xl sm:text-2xl leading-none">250+</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Licenciés</span>
                </div>
              </div>

              <div className="w-px h-8 bg-white/10 hidden sm:block"></div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <Shield size={18} />
                </div>
                <div>
                  <span className="block text-white font-display font-black text-xl sm:text-2xl leading-none">Régional 2</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Niveau FFF</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Modern Action Photo Frame + Floating Match Widget (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Photo Card Frame with Rounded 3xl Corners */}
            <div className="relative rounded-3xl lg:rounded-[2.5rem] overflow-hidden border border-accent/30 shadow-2xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] group">
              <img
                src={getAssetPath('images/IMG-20250528-WA0017.jpg')}
                alt="Futsal Drancy Match Action"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-transparent"></div>

              {/* Top Tag Badge */}
              <div className="absolute top-4 left-4 bg-navy-dark/85 backdrop-blur-xl border border-white/15 px-4 py-1.5 rounded-full flex items-center space-x-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                <span className="text-white text-[10px] font-black uppercase tracking-widest">
                  Effectif Séniors R2
                </span>
              </div>

              {/* FLOATING NEXT MATCH CARD (Pinned to bottom of Photo Card) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-4 left-4 right-4 bg-navy-dark/95 backdrop-blur-xl border border-accent/35 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-3"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <Calendar size={13} />
                    Prochain Match Officiel
                  </span>
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                    {nextMatch.team}
                  </span>
                </div>

                {/* Team Vs Team Layout */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center space-x-2.5">
                    <ClubLogo name="DRANCY FUTSAL" className="w-8 h-8" />
                    <span className="text-white font-black text-xs sm:text-sm uppercase">DRANCY</span>
                  </div>

                  <span className="bg-accent/20 text-accent font-black text-xs px-2.5 py-1 rounded-md">
                    VS
                  </span>

                  <div className="flex items-center space-x-2.5">
                    <span className="text-white/70 font-black text-xs sm:text-sm uppercase">{nextMatch.opponent}</span>
                    <ClubLogo name={nextMatch.opponent} className="w-8 h-8" />
                  </div>
                </div>

                {/* Date & Location */}
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
    </section>
  );
}
