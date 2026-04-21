import { motion } from 'motion/react';

const PLAYERS = [
  { name: 'Ricardo S.', role: 'Pivot / Capitaine', number: '10', image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2670&auto=format&fit=crop' },
  { name: 'Hamza B.', role: 'Fixe', number: '4', image: 'https://images.unsplash.com/photo-1431324155629-1a6eda1dc3f7?q=80&w=2670&auto=format&fit=crop' },
  { name: 'Lucas M.', role: 'Ailier', number: '7', image: 'https://images.unsplash.com/photo-1544606114-1e5828453664?q=80&w=2670&auto=format&fit=crop' },
  { name: 'Yannis K.', role: 'Gardien', number: '1', image: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=2670&auto=format&fit=crop' },
  { name: 'Enzo F.', role: 'Ailier', number: '11', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2670&auto=format&fit=crop' },
  { name: 'Sofiane R.', role: 'Fixe', number: '5', image: 'https://images.unsplash.com/photo-1517466787929-bc9406155b08?q=80&w=2670&auto=format&fit=crop' },
];

export default function Team() {
  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen">
      <div className="section-container">
        <div className="text-center space-y-4 mb-20">
          <span className="text-accent font-black tracking-[0.3em] uppercase text-xs italic">Effectif 24/25</span>
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
          {PLAYERS.map((player, idx) => (
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
