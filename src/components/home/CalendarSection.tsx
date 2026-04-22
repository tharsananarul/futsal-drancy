import { motion } from 'motion/react';
import { CLUB_DATA } from '../../data/clubData';
import { List, Filter } from 'lucide-react';

export default function CalendarSection() {
  const { calendar } = CLUB_DATA;

  return (
    <section className="bg-navy-dark py-16 md:py-24 border-b border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <List className="text-accent" size={20} />
              <span className="text-white/60 font-black tracking-[0.3em] uppercase text-[10px]">Calendrier de la Semaine</span>
            </div>
            <h2 className="text-3xl md:text-6xl text-white font-display font-black uppercase tracking-tighter">
              Planning <span className="text-accent">Complet</span>
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white hover:bg-accent hover:text-navy-dark transition-colors">
              <Filter size={14} />
              <span>Filtrer</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {calendar.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white/5 border border-white/10 text-white p-4 flex items-center justify-between">
                <span className="font-black uppercase italic tracking-widest">{cat.category}</span>
                <span className="text-[10px] text-accent font-black uppercase">{cat.matches.length} Matchs</span>
              </div>

              <div className="space-y-2">
                {cat.matches.map((match, mIdx) => (
                  <div key={mIdx} className="bg-white/[0.03] p-4 border-l-4 border-accent flex items-center justify-between group hover:bg-white/[0.08] hover:shadow-md transition-all">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-black text-white/40 uppercase">{match.date} • {match.time}</span>
                        <span className="text-[8px] bg-white/10 px-2 py-0.5 rounded text-white/60 font-bold uppercase">{match.type}</span>
                      </div>
                      <p className="text-sm font-black uppercase italic text-white group-hover:text-accent transition-colors">VS {match.opponent}</p>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-tighter text-white/30">{match.location}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
