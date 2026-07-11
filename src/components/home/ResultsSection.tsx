import { motion } from 'motion/react';
import { CLUB_DATA } from '../../data/clubData';
import { Trophy, Award } from 'lucide-react';
import { ClubLogo } from '../ui/ClubLogo';

export default function ResultsSection() {
  const { recentResults } = CLUB_DATA;

  return (
    <section className="bg-navy-dark py-16 md:py-24 border-b border-white/5 overflow-hidden">
      <div className="section-container">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="glass-card p-6 border border-white/5 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(245,185,9,0.07)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover glow top */}
              <motion.div 
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/15 rounded-full blur-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0 }}
              />
              <div className="absolute inset-0 bg-linear-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-widest">{result.date}</span>
                <motion.span 
                  className={`text-[10px] md:text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${
                    result.status === 'Victoire' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                    result.status === 'Nul' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}
                  whileHover={{ scale: 1.08 }}
                >
                  {result.status}
                </motion.span>
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
                  <motion.div 
                    className="text-3xl lg:text-4xl font-display font-black text-white"
                    whileHover={{ scale: 1.15, color: "#f5b909" }}
                    transition={{ duration: 0.2 }}
                  >
                    {result.score.split(' - ')[0]}
                  </motion.div>
                </div>

                <div className="h-px bg-white/5 w-full relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-linear-to-r from-transparent via-accent/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "200%" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 1.2, ease: "easeInOut" }}
                    style={{ width: "60%" }}
                  />
                </div>

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
