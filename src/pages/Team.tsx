import { motion } from 'motion/react';
import { CLUB_DATA } from '../data/clubData';

export default function Team() {
  const players = CLUB_DATA.players;
  const season = CLUB_DATA.season;
  
  return (
    <div className="pt-32 pb-24 bg-navy-dark min-h-screen">
      <div className="section-container">
        <div className="text-center space-y-4 mb-20">
          <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">Saison {season}</span>
          <h1 className="text-4xl md:text-8xl text-white font-display font-black uppercase tracking-tighter">LES <br/> ÉQUIPES</h1>
        </div>

        {/* Teams Sections */}
        <div className="space-y-32">
          {Object.entries(CLUB_DATA.teams).map(([category, teams], catIdx) => (
            <div key={category} className="space-y-12">
              <div className="flex items-center space-x-6">
                <h2 className="text-3xl md:text-6xl text-white font-display font-black uppercase tracking-tighter">
                  SECTION <span className="text-accent">{category === 'garcons' ? 'MASCULINE' : 'FÉMININE'}</span>
                </h2>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teams.map((team, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative overflow-hidden rounded-[2rem] bg-white/5"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={team.image} 
                        alt={team.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/20 to-transparent opacity-90"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-2">Futsal Drancy</p>
                      <h3 className="text-3xl text-white font-display font-black uppercase tracking-tight">{team.name}</h3>
                    </div>

                    {/* Decorative Border */}
                    <div className="absolute inset-4 border border-white/0 group-hover:border-accent/20 transition-all duration-700 pointer-events-none rounded-[1.5rem]"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
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

          <div className="space-y-4">
            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-3 bg-white/5 border-b-2 border-accent p-6 rounded-t-2xl">
              <span className="text-white text-xs font-black uppercase tracking-widest text-center">Année de Naissance</span>
              <span className="text-white text-xs font-black uppercase tracking-widest text-center border-x border-white/5">Catégories (G - F)</span>
              <span className="text-white text-xs font-black uppercase tracking-widest text-center">Âge Approximatif</span>
            </div>

            {/* Rows */}
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
              <div 
                key={i} 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-white/5 border border-white/5 md:border-none p-6 md:p-5 rounded-2xl md:rounded-none hover:bg-white/[0.08] transition-all"
              >
                <div className="flex justify-between md:justify-center items-center">
                  <span className="md:hidden text-white/40 text-[10px] font-black uppercase">Naissance</span>
                  <span className="text-accent font-black text-sm">{row.year}</span>
                </div>
                <div className="flex justify-between md:justify-center items-center md:border-x md:border-white/5">
                  <span className="md:hidden text-white/40 text-[10px] font-black uppercase">Catégorie</span>
                  <span className="text-white font-black text-sm">{row.cat}</span>
                </div>
                <div className="flex justify-between md:justify-center items-center">
                  <span className="md:hidden text-white/40 text-[10px] font-black uppercase">Âge</span>
                  <span className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">{row.age}</span>
                </div>
              </div>
            ))}
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
