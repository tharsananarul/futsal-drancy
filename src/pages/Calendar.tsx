import { motion } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, Trophy, Clock, Filter, ChevronRight } from 'lucide-react';
import { CLUB_DATA } from '../data/clubData';

export default function CalendarPage() {
  const { calendar, recentResults } = CLUB_DATA;

  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen">
      <div className="section-container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-24"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">Compétition {CLUB_DATA.season}</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-9xl text-white leading-[0.8] font-display font-black uppercase tracking-tighter">
            AGENDA DU <br/> <span className="text-accent">CLUB.</span>
          </h1>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto uppercase tracking-[0.2em] font-bold">
            Consultez les dates, lieux et résultats de toutes nos catégories en temps réel.
          </p>
        </motion.div>

        {/* Results Bar (Quick Glance) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {recentResults.slice(0, 4).map((res, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl flex flex-col items-center">
              <span className="text-[8px] text-accent font-black uppercase tracking-widest mb-2">{res.team}</span>
              <div className="text-white font-display font-black text-lg uppercase leading-none">{res.opponent}</div>
              <div className="text-accent font-black text-xl my-1">{res.score}</div>
              <span className={`text-[8px] font-black uppercase tracking-widest ${res.status === 'Victoire' ? 'text-green-500' : 'text-yellow-500'}`}>{res.status}</span>
            </div>
          ))}
        </div>

        {/* Calendar by Categories */}
        <div className="space-y-16">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <h2 className="text-3xl text-white font-display font-black uppercase">Calendrier par <span className="text-accent">Catégories</span></h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white hover:bg-accent hover:text-navy-dark transition-all">
                <Filter size={14} />
                <span>Filtrer</span>
              </button>
            </div>
          </div>

          <div className="grid gap-12">
            {calendar.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-6">
                  <div className="bg-accent text-navy-dark px-6 py-2 font-black uppercase tracking-widest skew-x-[-12deg]">
                    <span className="inline-block skew-x-[12deg]">{cat.category}</span>
                  </div>
                  <div className="flex-1 h-px bg-white/5"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.matches.map((match, mIdx) => (
                    <div 
                      key={mIdx}
                      className="glass-card p-6 border border-white/5 hover:border-accent/30 transition-all group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <CalendarIcon size={64} className="text-white" />
                      </div>
                      
                      <div className="flex flex-col space-y-6 relative z-10">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col">
                            <span className="text-accent font-black text-xs uppercase tracking-tighter">{match.date}</span>
                            <span className="text-white/40 text-[10px] font-bold uppercase">{match.time}</span>
                          </div>
                          <span className="bg-white/10 px-2 py-1 rounded text-[8px] font-black text-white uppercase tracking-widest">{match.type}</span>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="text-xl font-display font-black text-white uppercase">DRANCY</div>
                          <div className="text-accent/30 font-black">VS</div>
                          <div className="text-xl font-display font-black text-white/40 uppercase">{match.opponent}</div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <div className="flex items-center space-x-2 text-gray-500">
                            <MapPin size={12} />
                            <span className="text-[9px] font-bold uppercase tracking-widest">{match.location}</span>
                          </div>
                          <button className="text-accent hover:text-white transition-colors">
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

