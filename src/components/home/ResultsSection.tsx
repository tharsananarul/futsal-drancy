import { motion } from 'motion/react';
import { CLUB_DATA } from '../../data/clubData';
import { Trophy, Award } from 'lucide-react';
import { ClubLogo } from '../ui/ClubLogo';

export default function ResultsSection() {
  const { recentResults } = CLUB_DATA;

  return (
    <section className="bg-navy-dark py-16 md:py-24 border-b border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Trophy className="text-accent" size={20} />
              <span className="text-accent font-black tracking-[0.3em] uppercase text-[10px]">Information Sportive</span>
            </div>
            <h2 className="text-3xl md:text-6xl text-white font-display font-black uppercase tracking-tighter">
              Derniers <span className="text-accent">Résultats</span>
            </h2>
          </div>
          <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] max-w-xs">
            Mise à jour en temps réel des performances de toutes nos catégories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 border border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-widest">{result.date}</span>
                <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${
                  result.status === 'Victoire' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                  result.status === 'Nul' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                }`}>
                  {result.status}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <ClubLogo name="DRANCY FUTSAL" className="w-8 h-8 md:w-9 md:h-9" />
                    <div className="space-y-1">
                      <p className="text-[10px] md:text-xs text-accent font-black uppercase tracking-tighter">{result.team}</p>
                      <p className="text-xl lg:text-2xl text-white font-black uppercase leading-none">DRANCY</p>
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-display font-black text-white">{result.score.split(' - ')[0]}</div>
                </div>

                <div className="h-px bg-white/5 w-full"></div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <ClubLogo name={result.opponent} className="w-8 h-8 md:w-9 md:h-9 flex-shrink-0" />
                    <div className="space-y-1 overflow-hidden">
                      <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-tighter">Adversaire</p>
                      <p className="text-base lg:text-lg text-white/60 font-black uppercase leading-none truncate max-w-[100px] md:max-w-[120px]">{result.opponent}</p>
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-display font-black text-white/45">{result.score.split(' - ')[1]}</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center space-x-2">
                  <Award size={14} className="text-accent/50" />
                  <span className="text-[10px] lg:text-xs text-gray-500 font-bold uppercase tracking-widest">{result.context}</span>
                </div>
                <span className="text-[10px] lg:text-xs text-gray-600 font-bold uppercase tracking-widest">{result.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

