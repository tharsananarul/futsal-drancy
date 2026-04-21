import { motion } from 'motion/react';
import { CLUB_DATA } from '../data/clubData';

export default function Team() {
  const players = CLUB_DATA.players;
  const season = CLUB_DATA.season;
  
  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen">
      <div className="section-container">
        <div className="text-center space-y-4 mb-20">
          <span className="text-accent font-black tracking-[0.3em] uppercase text-xs italic">Effectif {season}</span>
          <h1 className="text-5xl md:text-8xl text-white">L'Équipe <br/> Première</h1>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {players.map((player, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group overflow-hidden bg-navy-dark aspect-[3/4] shadow-2xl"
            >
              <img 
                src={player.image} 
                alt={player.name} 
                className="w-full h-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-navy-dark/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Card Border Decor */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-accent/30 transition-all duration-700 pointer-events-none"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex justify-between items-end">
                   <div className="space-y-1">
                    <motion.span 
                      className="text-accent font-display text-[10px] font-black uppercase tracking-[0.3em] block mb-2"
                    >
                      {player.role}
                    </motion.span>
                    <h3 className="text-white text-4xl lg:text-5xl font-display leading-[0.8] font-black italic uppercase tracking-tighter">
                      {player.name}
                    </h3>
                  </div>
                  <span className="text-white/10 font-display text-8xl font-black italic group-hover:text-accent group-hover:opacity-100 transition-all duration-700 leading-none">
                    {player.number}
                  </span>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/20 -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-accent/40 transition-all"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
