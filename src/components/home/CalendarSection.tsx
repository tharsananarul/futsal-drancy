import { motion } from 'motion/react';
import { CLUB_DATA } from '../../data/clubData';
import { List, Calendar as CalendarIcon } from 'lucide-react';

export default function CalendarSection() {
  const { calendar } = CLUB_DATA;

  return (
    <section className="bg-navy-dark py-16 md:py-20 border-b border-white/5 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <List className="text-accent shrink-0" size={18} />
              <span className="text-accent font-black tracking-[0.25em] uppercase text-fluid-badge">Calendrier de la Semaine</span>
            </div>
            <h2 className="text-fluid-h2 text-white font-display font-black uppercase tracking-tight">
              Planning <span className="text-accent">Complet</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calendar.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="space-y-4"
            >
              <div className="glass-card rounded-2xl p-4 flex items-center justify-between border border-white/10">
                <span className="font-display font-bold text-sm uppercase tracking-wide text-white">{cat.category}</span>
                <span className="text-[10px] bg-accent/15 text-accent font-black px-2.5 py-1 rounded-full uppercase border border-accent/20">
                  {cat.matches.length} Matchs
                </span>
              </div>

              <div className="space-y-3 overflow-x-auto">
                {cat.matches.map((match, mIdx) => (
                  <div 
                    key={mIdx} 
                    className="glass-card card-hover p-4 rounded-2xl border-l-4 border-l-accent border border-white/10 flex items-center justify-between group transition-all"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-accent uppercase">{match.date} • {match.time}</span>
                        <span className="text-[8px] bg-white/10 px-2 py-0.5 rounded-full text-white/70 font-black uppercase">{match.type}</span>
                      </div>
                      <p className="text-xs md:text-sm font-display font-bold uppercase text-white group-hover:text-accent transition-colors">
                        VS {match.opponent}
                      </p>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 shrink-0 ml-2">
                      {match.location}
                    </span>
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
