import { motion } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, Trophy, Clock } from 'lucide-react';

const UPCOMING_MATCHES = [
  { date: '26 AVRIL', time: '18:00', opponent: 'STRASBOURG', venue: 'Palais des Sports, Drancy', competition: 'Division 1' },
  { date: '03 MAI', time: '20:30', opponent: 'NANTES', venue: 'Gymnase Mangin, Nantes', competition: 'Division 1' },
  { date: '10 MAI', time: '18:00', opponent: 'MARSEILLE', venue: 'Palais des Sports, Drancy', competition: 'Division 1' },
  { date: '17 MAI', time: '19:00', opponent: 'PARIS AC', venue: 'Stade Charléty, Paris', competition: 'Coupe de France' },
];

const PAST_RESULTS = [
  { date: '18 AVRIL', opponent: 'TOULOUSE', score: '3 - 1', result: 'W', competition: 'Division 1' },
  { date: '11 AVRIL', opponent: 'LILLE', score: '4 - 4', result: 'D', competition: 'Division 1' },
  { date: '04 AVRIL', opponent: 'LYON', score: '5 - 2', result: 'W', competition: 'Division 1' },
];

export default function CalendarPage() {
  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-24"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30"></div>
            <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] italic">Compétition 25/26</span>
            <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.8] italic font-black uppercase tracking-tighter">
            CALENDRIER & <br/> <span className="text-accent">RÉSULTATS.</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Upcoming Matches */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl text-white flex items-center space-x-4">
              <CalendarIcon className="text-accent" />
              <span>Prochaines Rencontres</span>
            </h2>
            
            <div className="space-y-4">
              {UPCOMING_MATCHES.map((match, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-accent/30 transition-all"
                >
                  <div className="flex items-center space-x-8">
                    <div className="text-center min-w-[80px]">
                      <span className="block text-2xl font-display font-black text-white italic leading-none">{match.date.split(' ')[0]}</span>
                      <span className="block text-[10px] font-black text-accent uppercase tracking-widest">{match.date.split(' ')[1]}</span>
                    </div>
                    <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
                    <div>
                      <div className="flex items-center space-x-2 text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">
                        <Trophy size={10} />
                        <span>{match.competition}</span>
                      </div>
                      <h3 className="text-2xl text-white font-display font-black uppercase italic">VS {match.opponent}</h3>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center space-x-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                      <Clock size={14} className="text-accent" />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      <MapPin size={14} />
                      <span>{match.venue}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Results */}
          <div className="space-y-8">
            <h2 className="text-3xl text-white flex items-center space-x-4">
              <Trophy className="text-accent" />
              <span>Derniers Scores</span>
            </h2>
            
            <div className="space-y-4">
              {PAST_RESULTS.map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-1 h-full ${
                    result.result === 'W' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{result.date}</span>
                      <h4 className="text-lg text-white font-display font-black uppercase italic">{result.opponent}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display font-black text-accent italic">{result.score}</div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${
                        result.result === 'W' ? 'text-green-500' : 'text-yellow-500'
                      }`}>
                        {result.result === 'W' ? 'Victoire' : 'Nul'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
