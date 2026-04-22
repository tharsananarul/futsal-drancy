import { motion } from 'motion/react';
import { CLUB_DATA } from '../data/clubData';

export default function Team() {
  const players = CLUB_DATA.players;
  const season = CLUB_DATA.season;
  
  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen">
      <div className="section-container">
        <div className="text-center space-y-4 mb-20">
          <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">Effectif {season}</span>
          <h1 className="text-4xl md:text-8xl text-white font-display font-black uppercase tracking-tighter">L'Équipe <br/> Première</h1>
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
                    <h3 className="text-white text-4xl lg:text-5xl font-display leading-[0.8] font-black uppercase tracking-tighter">
                      {player.name}
                    </h3>
                  </div>
                  <span className="text-white/10 font-display text-8xl font-black group-hover:text-accent group-hover:opacity-100 transition-all duration-700 leading-none">
                    {player.number}
                  </span>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/20 -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-accent/40 transition-all"></div>
            </motion.div>
          ))}
        </motion.div>
        {/* Categories Table Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl text-white font-display font-black uppercase tracking-tighter">
              Guide des <span className="text-accent">Catégories</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-bold">
              Trouvez votre équipe selon votre année de naissance (Saison 2025/2026)
            </p>
          </div>

          <div className="overflow-x-auto pb-8">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-accent">
                  <th className="bg-white/5 p-6 text-white text-xs font-black uppercase tracking-widest text-center">Année de Naissance</th>
                  <th className="bg-white/5 p-6 text-white text-xs font-black uppercase tracking-widest text-center border-x border-white/5">Catégories (G - F)</th>
                  <th className="bg-white/5 p-6 text-white text-xs font-black uppercase tracking-widest text-center">Âge Approximatif</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: '2020', cat: 'U6 - U6F', age: 'Dès 5 ans' },
                  { year: '2019', cat: 'U7 - U7F', age: '6 ans' },
                  { year: '2018', cat: 'U8 - U8F', age: '7 ans' },
                  { year: '2017', cat: 'U9 - U9F', age: '8 ans' },
                  { year: '2016', cat: 'U10 - U10F', age: '9 ans' },
                  { year: '2015', cat: 'U11 - U11F', age: '10 ans' },
                  { year: '2014', cat: 'U12 - U12F', age: '11 ans' },
                  { year: '2013', cat: 'U13 - U13F', age: '12 ans' },
                  { year: '2012', cat: 'U14 - U14F', age: '13 ans' },
                  { year: '2011', cat: 'U15 - U15F', age: '14 ans' },
                  { year: '2010', cat: 'U16 - U16F', age: '15 ans' },
                  { year: '2009', cat: 'U17 - U17F', age: '16 ans' },
                  { year: '2008', cat: 'U18 - U18F', age: '17 ans' },
                  { year: '2007', cat: 'U19 - U19F', age: '18 ans' },
                  { year: '1991 à 2006', cat: 'Séniors - Séniors F', age: '19 à 34 ans' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 text-accent font-black text-center text-sm">{row.year}</td>
                    <td className="p-5 text-white font-black text-center text-sm border-x border-white/5">{row.cat}</td>
                    <td className="p-5 text-gray-400 font-bold text-center text-xs uppercase tracking-widest">{row.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-2 text-white/20">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Ouvert aux Garçons et aux Filles</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
