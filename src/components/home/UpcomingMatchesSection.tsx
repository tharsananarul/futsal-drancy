import { motion } from 'motion/react';
import { CLUB_DATA } from '../../data/clubData';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ClubLogo } from '../ui/ClubLogo';

export default function UpcomingMatchesSection() {
  const { upcomingMatches } = CLUB_DATA;

  return (
    <section className="bg-navy-dark py-16 md:py-24 border-b border-white/5 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="text-accent" size={20} />
              <span className="text-accent font-black tracking-[0.3em] uppercase text-[10px]">Agenda du Club</span>
            </div>
            <h2 className="text-3xl md:text-6xl text-white font-display font-black uppercase tracking-tighter">
              Prochains <span className="text-accent">Matchs</span>
            </h2>
          </div>
          
          <NavLink 
            to="/calendar" 
            className="group flex items-center space-x-4 bg-white/5 hover:bg-accent px-8 py-4 transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-navy-dark">Voir tout le calendrier</span>
            <ArrowRight size={16} className="text-accent group-hover:text-navy-dark transition-transform group-hover:translate-x-2" />
          </NavLink>
        </div>

        <div className="space-y-4">
          {upcomingMatches.map((match, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/5 p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/[0.08] transition-all group"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left flex-1">
                <div className="flex flex-col">
                  <span className="text-accent font-black text-sm lg:text-base uppercase tracking-tighter">{match.team}</span>
                  <span className="text-white/40 text-xs lg:text-sm font-bold uppercase tracking-widest">{match.context}</span>
                </div>

                <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center md:justify-start">
                  <div className="flex items-center space-x-3">
                    <ClubLogo name="DRANCY FUTSAL" className="w-8 h-8 md:w-10 md:h-10" />
                    <div className="text-xl lg:text-2xl text-white font-black uppercase">DRANCY</div>
                  </div>
                  <div className="bg-accent/20 text-accent px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-black">VS</div>
                  <div className="flex items-center space-x-3">
                    <ClubLogo name={match.opponent} className="w-8 h-8 md:w-10 md:h-10" />
                    <div className="text-xl lg:text-2xl text-white/60 font-black uppercase">{match.opponent}</div>
                  </div>
                </div>
              </div>


              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 md:gap-12">
                <div className="flex items-center space-x-3.5">
                  <Clock size={18} className="text-accent" />
                  <div className="flex flex-col">
                    <span className="text-white font-black text-sm lg:text-base uppercase tracking-widest">{match.date}</span>
                    <span className="text-gray-400 text-xs lg:text-sm font-bold uppercase">{match.time}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-accent shrink-0" />
                  <span className="text-gray-400 text-xs lg:text-sm font-bold uppercase tracking-widest">{match.location}</span>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
